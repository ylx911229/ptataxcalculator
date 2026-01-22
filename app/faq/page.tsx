import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTA Tax Calculator FAQ | Common Questions Answered',
  description: 'Find answers to frequently asked questions about PTA tax calculator, DIRBS, CNIC and passport holder tax rates, and payment methods in Pakistan.',
  openGraph: {
    title: 'PTA Tax Calculator FAQ | Common Questions',
    description: 'Comprehensive FAQ about PTA tax calculation and mobile phone registration in Pakistan',
    url: 'https://ptataxcalculator.org/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 text-center">
            Everything you need to know about PTA tax calculator and mobile phone registration
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* Additional Content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 sm:p-10">
            <div className="space-y-6 text-gray-700 leading-7 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900">
              <h2>Complete Guide to PTA Tax Calculator FAQs</h2>
              <p>
                Our PTA tax calculator FAQ section addresses the most common questions about mobile phone tax calculation, registration procedures, and DIRBS compliance in Pakistan. Whether you're a CNIC holder or passport holder, understanding the PTA tax process is essential for keeping your mobile device operational on Pakistani networks.
              </p>

              <h3>Understanding PTA Tax Rates</h3>
              <p>
                The PTA tax calculator uses official rates set by the Federal Board of Revenue (FBR) and Pakistan Telecommunication Authority. These rates differ significantly between CNIC holders and passport holders. Pakistani citizens with CNIC pay approximately 18% total tax, while passport holders pay around 47%. Our FAQ section explains these differences in detail and helps you understand which category applies to your situation.
              </p>

              <h3>Common PTA Tax Calculator Questions</h3>
              <p>
                Users frequently ask about the accuracy of our PTA tax calculator, payment methods, grace periods, and DIRBS blocking procedures. The FAQ section provides detailed answers to these questions, helping you navigate the mobile phone registration process smoothly. We regularly update our FAQs based on the latest PTA policies and user feedback to ensure you have the most current information.
              </p>

              <h3>DIRBS and Device Registration</h3>
              <p>
                Many questions in our FAQ relate to DIRBS (Device Identification Registration and Blocking System) and how it affects your mobile phone. Understanding DIRBS is crucial because it&apos;s the system that blocks non-compliant devices. Our PTA tax calculator FAQ explains the DIRBS grace period, blocking procedures, and how to avoid service interruptions by timely registration and tax payment.
              </p>

              <h3>Payment Methods and Procedures</h3>
              <p>
                The FAQ section covers various payment methods available for PTA tax, including online payments through the PTA website, bank deposits, mobile wallets, and in-person payments at PTA offices. Each method has its own process, and our detailed answers help you choose the most convenient option. The PTA tax calculator helps you determine the exact amount before you proceed with payment.
              </p>

              <h3>Still Have Questions?</h3>
              <p>
                If you can&apos;t find the answer to your question in our FAQ section, you can use our PTA tax calculator to get specific calculations for your device. For official information, always refer to the PTA website at www.pta.gov.pk or contact their helpline. Our calculator and FAQ are designed to complement official resources and help you understand the process better.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900">Ready to Calculate Your PTA Tax?</h3>
              <p className="mt-2 text-gray-700">Use our free PTA tax calculator to get instant, accurate tax calculations for your mobile device.</p>
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
