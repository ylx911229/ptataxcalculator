'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is PTA tax and why do I need to pay it?",
    answer: "PTA tax is a combination of customs duty, sales tax, and withholding tax imposed on mobile devices imported into Pakistan. You need to pay this tax to register your device with PTA and ensure it continues working on Pakistani mobile networks. The DIRBS system blocks unregistered devices after a grace period."
  },
  {
    question: "How much is the PTA tax for CNIC holders?",
    answer: "For CNIC holders (Pakistani citizens), the total PTA tax is approximately 18% of the device value. This includes 0% customs duty, 17% sales tax, and 1% withholding tax. The exact amount depends on your device's price."
  },
  {
    question: "How much is the PTA tax for passport holders?",
    answer: "Passport holders pay approximately 47% of the device value as PTA tax. This includes 25% customs duty, 17% sales tax, and 5% withholding tax. This higher rate applies to foreign nationals and overseas Pakistanis using passports."
  },
  {
    question: "How do I calculate PTA tax for my phone?",
    answer: "Use our free PTA tax calculator above. Simply select your phone brand and model, choose your identity type (CNIC or Passport), and click calculate. The calculator will show you the exact tax breakdown and total cost."
  },
  {
    question: "When do I need to pay PTA tax?",
    answer: "You need to pay PTA tax within 60 days of bringing your device into Pakistan. After this period, your device may be blocked by the DIRBS system and will not work on Pakistani mobile networks until you complete the registration and payment."
  },
  {
    question: "How can I pay PTA tax?",
    answer: "PTA tax can be paid through multiple methods: online via the PTA website or mobile app, through bank deposits at designated banks, via mobile wallets, or at PTA offices. You'll need your device's IMEI number and CNIC/passport details."
  },
  {
    question: "What is DIRBS and how does it affect my phone?",
    answer: "DIRBS (Device Identification Registration and Blocking System) is a system that tracks and blocks non-compliant mobile devices. If you don't register and pay PTA tax within the grace period, DIRBS will automatically block your device from working on Pakistani networks."
  },
  {
    question: "Can I use my phone before paying PTA tax?",
    answer: "Yes, you get a 60-day grace period to use your device before paying PTA tax. However, it's recommended to complete the registration as soon as possible to avoid any service interruption."
  },
  {
    question: "Do I need to pay PTA tax for phones bought in Pakistan?",
    answer: "No, if you purchase a phone from an authorized dealer in Pakistan, the PTA tax is already included in the price. You only need to pay PTA tax for devices brought from abroad."
  },
  {
    question: "How do I find my phone's IMEI number?",
    answer: "Dial *#06# on your phone to display the IMEI number. You can also find it in your phone's settings under 'About Phone' or on the original box. You'll need this 15-digit number for PTA registration."
  },
  {
    question: "Is the PTA tax calculator accurate?",
    answer: "Our PTA tax calculator uses the latest official tax rates from FBR and PTA. However, rates may change, so we recommend verifying with official sources before making payment. The calculator is for reference purposes only."
  },
  {
    question: "What happens if I don't pay PTA tax?",
    answer: "If you don't pay PTA tax within 60 days, your device will be blocked by DIRBS and won't work on any Pakistani mobile network. You'll need to pay the tax plus any penalties to unblock your device."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
