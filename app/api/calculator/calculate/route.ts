import { NextResponse } from 'next/server';
import taxRates from '@/data/tax-rates.json';
import devices from '@/data/devices.json';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { deviceId, variantIndex, identityType, customPrice, currency = 'usd' } = body;

    // Find device
    const device = devices.devices.find(d => d.id === deviceId);
    if (!device) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    }

    // Get variant
    const variant = device.variants[variantIndex || 0];
    if (!variant) {
      return NextResponse.json({ error: 'Variant not found' }, { status: 404 });
    }

    // Get price
    const price = customPrice || variant.price[currency as 'usd' | 'pkr'];

    // Get tax rates
    const rates = taxRates.currentRate.rates[identityType as 'cnic' | 'passport'];

    // Calculate taxes
    const customsDuty = (price * rates.customsDuty) / 100;
    const taxableAmount = price + customsDuty;
    const salesTax = (taxableAmount * rates.salesTax) / 100;
    const withholdingTax = (taxableAmount * rates.withholdingTax) / 100;
    const regulatoryDuty = (taxableAmount * rates.regulatoryDuty) / 100;

    const totalTax = customsDuty + salesTax + withholdingTax + regulatoryDuty;
    const totalCost = price + totalTax;

    // Exchange rate (simplified - in production, fetch from API)
    const exchangeRate = 279; // 1 USD = 279 PKR

    const result = {
      device: {
        brand: device.brand,
        model: device.model,
        storage: variant.storage,
        price,
        currency
      },
      identityType,
      breakdown: {
        customsDuty: { rate: rates.customsDuty, amount: customsDuty },
        salesTax: { rate: rates.salesTax, amount: salesTax },
        withholdingTax: { rate: rates.withholdingTax, amount: withholdingTax },
        regulatoryDuty: { rate: rates.regulatoryDuty, amount: regulatoryDuty }
      },
      totalTax,
      totalCost,
      exchangeRate,
      calculatedAt: new Date().toISOString()
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Calculation error:', error);
    return NextResponse.json({ error: 'Calculation failed' }, { status: 500 });
  }
}
