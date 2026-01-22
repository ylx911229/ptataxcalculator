import type { Metadata } from 'next';
import TaxRatesTable from '@/components/TaxRatesTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA Tax Rates 2025 | Current Mobile Phone Tax Rates',
  description: 'Official PTA tax rates for 2025. View current customs duty, sales tax, and withholding tax rates for CNIC and passport holders. Updated tax rates in Pakistan.',
  openGraph: {
    title: 'PTA Tax Rates 2025 | Mobile Phone Tax Rates Pakistan',
    description: 'Current PTA tax rates for mobile phone registration in Pakistan',
    url: 'https://ptataxcalculator.org/tax-rates',
  },
};

export default function TaxRatesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            PTA Tax Rates 2025
          </h1>
          <p className="text-xl text-blue-100 text-center">
            Current mobile phone tax rates for Pakistan
          </p>
        </div>
      </section>

      {/* Tax Rates Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Official PTA Tax Rates</h2>
            <p className="text-gray-600 mb-6">
              The following tax rates are applicable for mobile phone registration with PTA in 2025. These rates are set by the Federal Board of Revenue (FBR) and Pakistan Telecommunication Authority.
            </p>
          </div>
          <TaxRatesTable />
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 sm:p-10">
            <div className="space-y-6 text-gray-700 leading-7 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900">
              <h2>Understanding PTA Tax Rates 2025</h2>
              <p>
                The PTA tax rates for 2025 continue to differentiate between CNIC holders (Pakistani citizens) and passport holders (foreign nationals and overseas Pakistanis). These rates are crucial for anyone importing mobile phones into Pakistan or bringing devices from abroad. Our PTA tax calculator uses these official rates to provide accurate tax calculations.
              </p>

              <h3>CNIC Holder Tax Rates</h3>
              <p>
                Pakistani citizens with a valid CNIC (Computerized National Identity Card) benefit from significantly lower PTA tax rates. The current structure for CNIC holders includes 0% customs duty, 17% sales tax, and 1% withholding tax. This results in a total tax burden of approximately 18% of the device&apos;s value. The PTA tax calculator automatically applies these rates when you select CNIC holder as your identity type.
              </p>

              <p>
                For example, if you're a CNIC holder importing an iPhone 15 Pro Max worth $1,200, your total PTA tax would be around $216, bringing your total cost to approximately $1,416. The PTA tax calculator breaks down these amounts clearly, showing you exactly how much you&apos;ll pay for each tax component.
              </p>

              <h3>Passport Holder Tax Rates</h3>
              <p>
                Passport holders face higher PTA tax rates compared to CNIC holders. The current rates include 25% customs duty, 17% sales tax, and 5% withholding tax, totaling approximately 47% of the device value. These rates apply to foreign nationals and overseas Pakistanis who don&apos;t have a valid CNIC. The PTA tax calculator ensures accurate calculations for passport holders by applying these higher rates.
              </p>

              <p>
                Using the same iPhone 15 Pro Max example, a passport holder would pay approximately $564 in PTA tax, making the total cost around $1,764. This significant difference highlights why it&apos;s important to use the PTA tax calculator before purchasing expensive devices abroad. The calculator helps you understand the true cost and make informed decisions.
              </p>

              <h3>Tax Components Explained</h3>
              <p>
                The PTA tax structure consists of several components, each serving a specific purpose. Customs duty is charged on imported goods and varies based on your identity type. Sales tax is a standard consumption tax applied to the device value plus customs duty. Withholding tax is an advance income tax collected at the time of import. The PTA tax calculator shows each component separately for transparency.
              </p>

              <p>
                Regulatory duty, when applicable, is an additional tax imposed on certain categories of goods. Currently, the regulatory duty for mobile phones is 0% for both CNIC and passport holders. However, this can change based on government policies. Our PTA tax calculator is updated whenever there are changes to any of these tax rates to ensure accuracy.
              </p>

              <h3>How Tax Rates Are Calculated</h3>
              <p>
                The PTA tax calculation follows a specific formula. First, customs duty is calculated on the device&apos;s declared value. Then, sales tax and withholding tax are calculated on the sum of the device value and customs duty. This cascading effect means that higher customs duty rates for passport holders result in proportionally higher total taxes. The PTA tax calculator handles these complex calculations automatically.
              </p>

              <p>
                For instance, if a device costs $1,000 and you're a passport holder, the customs duty would be $250 (25% of $1,000). The taxable amount becomes $1,250. Sales tax of 17% on $1,250 equals $212.50, and withholding tax of 5% equals $62.50. The total tax is $525, making the final cost $1,525. Our PTA tax calculator performs these calculations instantly.
              </p>

              <h3>Recent Changes in PTA Tax Rates</h3>
              <p>
                PTA tax rates are subject to change based on government fiscal policies and FBR directives. The current 2025 rates have remained stable compared to 2024, with no significant changes announced. However, it&apos;s always advisable to check the latest rates before making large purchases. Our PTA tax calculator is regularly updated to reflect any changes in official tax rates.
              </p>

              <p>
                Historically, PTA tax rates have been adjusted to balance revenue generation with consumer affordability. The government occasionally announces tax relief measures or adjusts rates based on economic conditions. By using our PTA tax calculator, you can be confident that you're working with the most current rates available.
              </p>

              <h3>Comparing Tax Rates: CNIC vs Passport</h3>
              <p>
                The difference between CNIC and passport holder tax rates is substantial. A CNIC holder pays less than half the tax amount compared to a passport holder for the same device. This policy encourages Pakistani citizens to register devices properly while generating higher revenue from foreign nationals. The PTA tax calculator makes this comparison easy by allowing you to switch between identity types and see the difference immediately.
              </p>

              <p>
                For budget-conscious buyers, this difference can be a deciding factor in whether to purchase a device abroad or locally. A device that seems like a bargain overseas might end up costing more after PTA tax for passport holders. The PTA tax calculator helps you make these comparisons before committing to a purchase.
              </p>

              <h3>Using the PTA Tax Calculator with Current Rates</h3>
              <p>
                Our PTA tax calculator is designed to work seamlessly with the current 2025 tax rates. Simply select your device, choose your identity type, and the calculator applies the appropriate rates automatically. The calculator&apos;s database includes popular mobile phones with current market prices, making it easy to get accurate estimates without manual calculations.
              </p>

              <p>
                The PTA tax calculator also supports custom price entry if you&apos;ve found a special deal or are importing a device not in our database. Just enter the price, select your identity type, and the calculator will apply the correct tax rates. This flexibility makes the PTA tax calculator useful for any mobile device, regardless of brand or model.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900">Calculate Your PTA Tax Now</h3>
              <p className="mt-2 text-gray-700">Use our free PTA tax calculator with the latest 2025 rates to get instant, accurate tax calculations.</p>
              <Link
                href="/"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Go to Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
