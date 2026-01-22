import { NextResponse } from 'next/server';
import devices from '@/data/devices.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get('brand');

  if (!brand) {
    return NextResponse.json({ error: 'Brand parameter required' }, { status: 400 });
  }

  const brandDevices = devices.devices
    .filter(d => d.brand === brand)
    .sort((a, b) => b.popularity - a.popularity);

  return NextResponse.json({ devices: brandDevices });
}
