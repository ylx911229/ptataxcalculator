import { NextResponse } from 'next/server';
import taxRates from '@/data/tax-rates.json';

export async function GET() {
  return NextResponse.json(taxRates);
}
