'use client';

import { useState, useEffect, useCallback } from 'react';
import devices from '@/data/devices.json';

type CalculationSuccess = {
  device: {
    brand: string;
    model: string;
    storage: string;
    price: number;
    currency: 'usd' | 'pkr';
  };
  identityType: 'cnic' | 'passport';
  breakdown: {
    customsDuty: { rate: number; amount: number };
    salesTax: { rate: number; amount: number };
    withholdingTax: { rate: number; amount: number };
    regulatoryDuty: { rate: number; amount: number };
  };
  totalTax: number;
  totalCost: number;
  exchangeRate: number;
  calculatedAt: string;
};

type CalculationError = { error: string };

type CalculationResult = CalculationSuccess | CalculationError;

export default function Calculator() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [identityType, setIdentityType] = useState<'cnic' | 'passport'>('cnic');
  const [customPrice, setCustomPrice] = useState('');
  const [currency, setCurrency] = useState<'usd' | 'pkr'>('usd');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [shouldAutoCalculate, setShouldAutoCalculate] = useState(false);

  const brands = devices.brands;
  const filteredDevices = selectedBrand
    ? devices.devices.filter(d => d.brand === selectedBrand)
    : [];

  const currentDevice = selectedDevice
    ? devices.devices.find(d => d.id === selectedDevice)
    : null;

  const handleCalculate = useCallback(async () => {
    if (!selectedDevice) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/calculator/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceId: selectedDevice,
          variantIndex: selectedVariant,
          identityType,
          customPrice: customPrice ? parseFloat(customPrice) : null,
          currency
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Failed to calculate. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [selectedDevice, selectedVariant, identityType, customPrice, currency]);

  // Load parameters from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const deviceParam = params.get('device');
      const variantParam = params.get('variant');
      const typeParam = params.get('type');

      if (deviceParam) {
        const device = devices.devices.find(d => d.id === deviceParam);
        if (device) {
          setSelectedBrand(device.brand);
          setSelectedDevice(deviceParam);

          if (variantParam) {
            const variantIndex = parseInt(variantParam);
            if (!isNaN(variantIndex) && variantIndex >= 0 && variantIndex < device.variants.length) {
              setSelectedVariant(variantIndex);
            }
          }

          if (typeParam === 'cnic' || typeParam === 'passport') {
            setIdentityType(typeParam);
          }

          // Trigger auto-calculation
          setShouldAutoCalculate(true);
        }
      }
    }
  }, []);

  // Auto-calculate when URL parameters are loaded
  useEffect(() => {
    if (shouldAutoCalculate && selectedDevice) {
      handleCalculate();
      setShouldAutoCalculate(false);
    }
  }, [shouldAutoCalculate, selectedDevice, handleCalculate]);

  const formatCurrency = (amount: number, curr: string) => {
    return curr === 'usd'
      ? `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `PKR ${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Calculate PTA Tax</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Brand Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Brand
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setSelectedDevice('');
                setResult(null);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a brand...</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Model Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Model
            </label>
            <select
              value={selectedDevice}
              onChange={(e) => {
                setSelectedDevice(e.target.value);
                setSelectedVariant(0);
                setResult(null);
              }}
              disabled={!selectedBrand}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            >
              <option value="">Choose a model...</option>
              {filteredDevices.map(device => (
                <option key={device.id} value={device.id}>{device.model}</option>
              ))}
            </select>
          </div>

          {/* Variant Selection */}
          {currentDevice && currentDevice.variants.length > 1 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Storage Variant
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => {
                  setSelectedVariant(parseInt(e.target.value));
                  setResult(null);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {currentDevice.variants.map((variant, index) => (
                  <option key={index} value={index}>
                    {variant.storage} - {formatCurrency(variant.price.usd, 'usd')}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Currency Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'usd' | 'pkr')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="usd">USD ($)</option>
              <option value="pkr">PKR (₨)</option>
            </select>
          </div>

          {/* Custom Price */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Price (Optional)
            </label>
            <input
              type="number"
              value={customPrice}
              onChange={(e) => {
                setCustomPrice(e.target.value);
                setResult(null);
              }}
              placeholder="Enter custom price..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Identity Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Identity Type
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="cnic"
                checked={identityType === 'cnic'}
                onChange={(e) => {
                  setIdentityType(e.target.value as 'cnic' | 'passport');
                  setResult(null);
                }}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2">CNIC Holder (~18% tax)</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="passport"
                checked={identityType === 'passport'}
                onChange={(e) => {
                  setIdentityType(e.target.value as 'cnic' | 'passport');
                  setResult(null);
                }}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2">Passport Holder (~47% tax)</span>
            </label>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          disabled={!selectedDevice || loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Calculating...' : 'Calculate PTA Tax'}
        </button>

        {/* Results */}
        {result && !('error' in result) && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold mb-4">Tax Breakdown</h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Device:</span>
                <span className="font-semibold">{result.device.brand} {result.device.model}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Storage:</span>
                <span className="font-semibold">{result.device.storage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Device Price:</span>
                <span className="font-semibold">{formatCurrency(result.device.price, result.device.currency)}</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Customs Duty ({result.breakdown.customsDuty.rate}%):</span>
                <span className="font-medium">{formatCurrency(result.breakdown.customsDuty.amount, result.device.currency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sales Tax ({result.breakdown.salesTax.rate}%):</span>
                <span className="font-medium">{formatCurrency(result.breakdown.salesTax.amount, result.device.currency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Withholding Tax ({result.breakdown.withholdingTax.rate}%):</span>
                <span className="font-medium">{formatCurrency(result.breakdown.withholdingTax.amount, result.device.currency)}</span>
              </div>
              {result.breakdown.regulatoryDuty.amount > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Regulatory Duty ({result.breakdown.regulatoryDuty.rate}%):</span>
                  <span className="font-medium">{formatCurrency(result.breakdown.regulatoryDuty.amount, result.device.currency)}</span>
                </div>
              )}
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Total Tax:</span>
                <span className="font-bold text-red-600">{formatCurrency(result.totalTax, result.device.currency)}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span className="font-bold">Total Cost:</span>
                <span className="font-bold text-blue-600">{formatCurrency(result.totalCost, result.device.currency)}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  const text = `PTA Tax Calculation\n${result.device.brand} ${result.device.model}\nDevice Price: ${formatCurrency(result.device.price, result.device.currency)}\nTotal Tax: ${formatCurrency(result.totalTax, result.device.currency)}\nTotal Cost: ${formatCurrency(result.totalCost, result.device.currency)}`;
                  navigator.clipboard.writeText(text);
                  alert('Copied to clipboard!');
                }}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Copy Results
              </button>
              <button
                onClick={() => {
                  const url = `${window.location.origin}?device=${selectedDevice}&variant=${selectedVariant}&type=${identityType}`;
                  navigator.clipboard.writeText(url);
                  alert('Share link copied!');
                }}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Share
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
