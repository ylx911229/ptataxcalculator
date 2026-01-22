import Calculator from '@/components/Calculator';
import PopularDevices from '@/components/PopularDevices';
import TaxRatesTable from '@/components/TaxRatesTable';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PTA Tax Calculator 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Calculate Mobile Phone Tax in Pakistan Instantly
            </p>
            <p className="text-lg text-blue-50 max-w-3xl mx-auto">
              Free online PTA tax calculator for mobile devices. Calculate customs duty, sales tax, withholding tax, and total cost with updated 2025 rates. Get accurate tax calculations for CNIC and passport holders in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calculator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our PTA Tax Calculator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Calculation</h3>
              <p className="text-gray-600">Get your PTA tax calculation results in less than a second. Our calculator provides immediate, accurate tax breakdowns for any mobile device.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Updated 2025 Rates</h3>
              <p className="text-gray-600">Always accurate with the latest PTA tax rates for 2025. We update our calculator whenever FBR announces new tax policies or rate changes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Breakdown</h3>
              <p className="text-gray-600">See complete tax breakdown including customs duty, sales tax, withholding tax, and regulatory duty. Understand exactly what you're paying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Devices Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Mobile Phones</h2>
          <p className="text-center text-gray-600 mb-12">Quick PTA tax calculations for the most searched mobile devices in Pakistan</p>
          <PopularDevices />
        </div>
      </section>

      {/* Tax Rates Table Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Current PTA Tax Rates 2025</h2>
          <p className="text-center text-gray-600 mb-12">Official tax rates for mobile phone registration in Pakistan</p>
          <TaxRatesTable />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How to Calculate PTA Tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Select Brand</h3>
              <p className="text-gray-600">Choose your mobile phone brand from the dropdown menu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Choose Model</h3>
              <p className="text-gray-600">Select the specific model and storage variant</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Select ID Type</h3>
              <p className="text-gray-600">Choose CNIC or Passport holder status</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600">View detailed tax breakdown and total cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">Common questions about PTA tax calculator and mobile phone registration</p>
          <FAQ />
        </div>
      </section>

      {/* Content Section for SEO */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 sm:p-10">
            <div className="space-y-6 text-gray-700 leading-7 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900">
              <h2>Understanding PTA Tax Calculator for Mobile Phones</h2>
              <p>
                The PTA tax calculator is an essential tool for anyone importing mobile phones into Pakistan. Whether you're bringing a device from abroad or purchasing internationally, understanding the Pakistan Telecommunication Authority (PTA) tax requirements is crucial. Our free online PTA tax calculator helps you determine the exact amount you&apos;ll need to pay to register your mobile device with PTA and comply with DIRBS regulations.
              </p>

              <h3>What is PTA Tax?</h3>
              <p>
                PTA tax refers to the customs duty, sales tax, and withholding tax imposed on mobile devices brought into Pakistan from foreign countries. The Federal Board of Revenue (FBR) and PTA have established these taxes to regulate mobile phone imports and ensure all devices operating on Pakistani networks are properly registered. The PTA tax calculator helps you understand these costs before making a purchase decision.
              </p>

              <h3>Different Tax Rates for CNIC and Passport Holders</h3>
              <p>
                One of the most important factors in PTA tax calculation is your identification type. Pakistani citizens with a CNIC (Computerized National Identity Card) enjoy significantly lower tax rates compared to passport holders. Our PTA tax calculator automatically adjusts the calculation based on whether you're a CNIC holder or passport holder, ensuring accurate results for your specific situation.
              </p>

              <p>
                For CNIC holders, the typical tax structure includes 0% customs duty, 17% sales tax, and 1% withholding tax, resulting in approximately 18% total tax on the device value. Passport holders face higher rates with 25% customs duty, 17% sales tax, and 5% withholding tax, totaling around 47% of the device value. These rates are current as of 2025 and are reflected in our PTA tax calculator.
              </p>

              <h3>How to Use the PTA Tax Calculator</h3>
              <p>
                Using our PTA tax calculator is straightforward and takes less than a minute. First, select your mobile phone brand from our comprehensive database that includes popular brands like Apple, Samsung, Xiaomi, OnePlus, and Google. Next, choose your specific model and storage variant. The calculator will automatically fetch the current market price, or you can enter a custom price if you got a special deal.
              </p>

              <p>
                After selecting your device, choose whether you're a CNIC holder or passport holder. This selection is crucial as it determines which tax rates apply to your calculation. Click the calculate button, and our PTA tax calculator will instantly provide a detailed breakdown showing customs duty, sales tax, withholding tax, and the total amount you&apos;ll need to pay for PTA registration.
              </p>

              <h3>Why Accurate PTA Tax Calculation Matters</h3>
              <p>
                Knowing the exact PTA tax amount before purchasing a mobile phone helps you make informed decisions. Many people buy expensive smartphones abroad thinking they&apos;re getting a great deal, only to discover that the PTA tax significantly increases the total cost. Our PTA tax calculator prevents such surprises by showing you the complete picture upfront.
              </p>

              <p>
                Additionally, failing to register your device with PTA within the required timeframe can result in your phone being blocked on Pakistani networks. The DIRBS (Device Identification Registration and Blocking System) automatically blocks non-compliant devices. Using our PTA tax calculator helps you budget for registration costs and avoid network blocking issues.
              </p>

              <h3>PTA Tax Calculator Features</h3>
              <p>
                Our PTA tax calculator offers several features that make it the best choice for mobile phone tax calculations in Pakistan. The calculator includes an extensive database of popular mobile devices with current market prices, supports both USD and PKR currency calculations, provides detailed tax breakdowns for transparency, and offers instant results without any registration required.
              </p>

              <p>
                The calculator is regularly updated with the latest PTA tax rates and FBR policies to ensure accuracy. We monitor official announcements and update our PTA tax calculator immediately when rates change. This commitment to accuracy has made us a trusted resource for thousands of users calculating mobile phone taxes in Pakistan.
              </p>

              <h3>Mobile Phone Registration Process</h3>
              <p>
                After calculating your PTA tax using our calculator, the next step is actual registration. You&apos;ll need to visit the PTA website or use their mobile app to complete the registration process. Have your device&apos;s IMEI number ready, which you can find by dialing *#06# on your phone. You&apos;ll also need your CNIC or passport details and payment information for the tax amount.
              </p>

              <p>
                The PTA tax payment can be made through various methods including bank deposits, online banking, and mobile wallets. Once payment is confirmed, your device will be registered with DIRBS and will continue working on Pakistani mobile networks. Our PTA tax calculator helps you prepare for this process by showing exactly how much you need to pay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
