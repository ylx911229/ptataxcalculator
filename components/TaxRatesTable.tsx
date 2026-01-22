import taxRates from '@/data/tax-rates.json';

export default function TaxRatesTable() {
  const { currentRate } = taxRates;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tax Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CNIC Holder
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Passport Holder
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Customs Duty
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.cnic.customsDuty}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.passport.customsDuty}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Sales Tax
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.cnic.salesTax}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.passport.salesTax}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Withholding Tax
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.cnic.withholdingTax}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.passport.withholdingTax}%
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Regulatory Duty
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.cnic.regulatoryDuty}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {currentRate.rates.passport.regulatoryDuty}%
              </td>
            </tr>
            <tr className="bg-gray-50 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Total Approximate Tax
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                ~18%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                ~47%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Tax rates are effective from {new Date(currentRate.effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
          Rates may change based on FBR policies. Always verify with official PTA sources.
        </p>
      </div>
    </div>
  );
}
