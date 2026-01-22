import devices from '@/data/devices.json';

export default function PopularDevices() {
  const popularDevices = devices.devices
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularDevices.map(device => (
        <div key={device.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-2">{device.brand} {device.model}</h3>
          <div className="text-sm text-gray-600 space-y-1 mb-4">
            <p>Starting from: ${device.variants[0].price.usd.toLocaleString()}</p>
            <p className="text-xs text-gray-500">PKR {device.variants[0].price.pkr.toLocaleString()}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-green-50 p-2 rounded">
              <p className="text-xs text-gray-600">CNIC Tax</p>
              <p className="font-semibold text-green-700">~${Math.round(device.variants[0].price.usd * 0.18)}</p>
            </div>
            <div className="bg-red-50 p-2 rounded">
              <p className="text-xs text-gray-600">Passport Tax</p>
              <p className="font-semibold text-red-700">~${Math.round(device.variants[0].price.usd * 0.47)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
