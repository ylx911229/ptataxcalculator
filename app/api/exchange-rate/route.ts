import { NextResponse } from 'next/server';

export async function GET() {
  // In production, fetch from a real API like exchangerate-api.com
  // For now, return a static rate
  const rate = {
    base: 'USD',
    target: 'PKR',
    rate: 279,
    lastUpdated: new Date().toISOString()
  };

  return NextResponse.json(rate);
}
