import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ptataxcalculator.org'),
  title: "PTA Tax Calculator 2025 | Mobile Phone Tax Pakistan",
  description: "Calculate PTA tax for mobile phones in Pakistan. Free online calculator for customs duty, sales tax. Updated 2025 rates for CNIC and passport holders.",
  keywords: ["pta tax calculator", "mobile tax calculator pakistan", "pta mobile tax", "pakistan mobile duty calculator"],
  authors: [{ name: "PTA Tax Calculator" }],
  openGraph: {
    title: "PTA Tax Calculator 2025 | Mobile Phone Tax Pakistan",
    description: "Calculate PTA tax for mobile phones in Pakistan. Free online calculator for customs duty, sales tax.",
    url: "https://ptataxcalculator.org",
    siteName: "PTA Tax Calculator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PTA Tax Calculator 2025",
    description: "Calculate PTA tax for mobile phones in Pakistan instantly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GL275L5XHS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GL275L5XHS');
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v5h7no4udq");
            `,
          }}
        />
        <link rel="canonical" href="https://ptataxcalculator.org" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="PTA Tax Calculator Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-gray-900">PTA Tax Calculator</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Calculator</Link>
                <Link href="/tax-rates" className="text-gray-700 hover:text-blue-600 font-medium">Tax Rates</Link>
                <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/logo.png"
                    alt="PTA Tax Calculator"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <span className="text-lg font-bold">PTA Tax Calculator</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Free online PTA tax calculator for mobile phones in Pakistan. Calculate customs duty, sales tax, and total cost instantly with updated 2025 rates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-white">Calculator</Link></li>
                  <li><Link href="/tax-rates" className="hover:text-white">Tax Rates</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://www.pta.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:text-white">PTA Official</a></li>
                  <li><a href="https://www.pta.gov.pk/en/dirbs" target="_blank" rel="noopener noreferrer" className="hover:text-white">DIRBS</a></li>
                  <li><a href="https://www.fbr.gov.pk" target="_blank" rel="noopener noreferrer" className="hover:text-white">FBR</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 PTA Tax Calculator. All rights reserved. For reference only, not official.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
