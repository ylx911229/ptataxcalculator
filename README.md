# PTA Tax Calculator

A modern, SEO-optimized web application for calculating PTA (Pakistan Telecommunication Authority) mobile device taxes. Built with Next.js 16, React 19, and Tailwind CSS 4.

🌐 **Live Site**: [ptataxcalculator.org](https://ptataxcalculator.org)

## Features

### Core Functionality
- **Instant Tax Calculation**: Calculate PTA tax for any mobile device in seconds
- **Comprehensive Device Database**: Pre-loaded with popular smartphones (iPhone, Samsung, Xiaomi, OnePlus, Google, etc.)
- **Dual Identity Support**: Separate calculations for CNIC holders (~18% tax) and Passport holders (~47% tax)
- **Currency Support**: Calculate in both USD and PKR with real-time conversion
- **Detailed Breakdown**: See customs duty, sales tax, withholding tax, and regulatory duty separately
- **Share & Copy**: Easy sharing of calculation results

### SEO Optimization
- **Keyword Density**: 3-5% for "pta tax calculator" across all pages
- **Content Length**: 800+ words per page with natural, informative content
- **Meta Tags**: Optimized titles (40-60 chars) and descriptions (140-160 chars)
- **Structured Data**: Schema.org markup for better search visibility
- **Canonical URLs**: Absolute URLs (https://ptataxcalculator.org)
- **Sitemap & Robots.txt**: Properly configured for search engines

### Pages
- **Homepage** (`/`): Calculator with comprehensive content (1800+ words)
- **Tax Rates** (`/tax-rates`): Detailed tax rate information and explanations
- **FAQ** (`/faq`): 12+ frequently asked questions with detailed answers

## Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel

## Project Structure

```
ptataxcalculator/
├── app/
│   ├── api/
│   │   ├── calculator/
│   │   │   ├── brands/route.ts
│   │   │   ├── calculate/route.ts
│   │   │   └── models/route.ts
│   │   ├── exchange-rate/route.ts
│   │   └── rates/route.ts
│   ├── faq/
│   │   └── page.tsx
│   ├── tax-rates/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── Calculator.tsx
│   ├── FAQ.tsx
│   ├── PopularDevices.tsx
│   └── TaxRatesTable.tsx
├── data/
│   ├── devices.json
│   └── tax-rates.json
├── types/
│   └── index.ts
├── public/
│   ├── logo.png
│   └── robots.txt
├── REQUIREMENTS.md
├── PRD.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ptataxcalculator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## API Routes

### Calculate Tax
```
POST /api/calculator/calculate
Body: {
  deviceId: string,
  variantIndex: number,
  identityType: 'cnic' | 'passport',
  customPrice?: number,
  currency: 'usd' | 'pkr'
}
```

### Get Brands
```
GET /api/calculator/brands
Returns: { brands: string[] }
```

### Get Models by Brand
```
GET /api/calculator/models?brand=Apple
Returns: { devices: Device[] }
```

### Get Current Tax Rates
```
GET /api/rates
Returns: TaxRate object
```

### Get Exchange Rate
```
GET /api/exchange-rate
Returns: { base, target, rate, lastUpdated }
```

## Data Management

### Adding New Devices

Edit `data/devices.json`:

```json
{
  "id": "device-id",
  "brand": "Brand Name",
  "model": "Model Name",
  "variants": [
    {
      "storage": "128GB",
      "price": { "usd": 999, "pkr": 279000 }
    }
  ],
  "releaseDate": "2025-01-01",
  "popularity": 85
}
```

### Updating Tax Rates

Edit `data/tax-rates.json`:

```json
{
  "currentRate": {
    "id": "2025-01",
    "effectiveDate": "2025-01-01",
    "rates": {
      "cnic": {
        "customsDuty": 0,
        "salesTax": 17,
        "withholdingTax": 1,
        "regulatoryDuty": 0
      },
      "passport": {
        "customsDuty": 25,
        "salesTax": 17,
        "withholdingTax": 5,
        "regulatoryDuty": 0
      }
    }
  }
}
```

## SEO Features

### Meta Tags
- Optimized titles and descriptions for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Content Strategy
- Natural keyword integration (3-5% density)
- Long-form content (800+ words per page)
- Internal linking structure
- FAQ schema markup

### Technical SEO
- XML sitemap at `/sitemap.xml`
- Robots.txt configuration
- Mobile-responsive design
- Fast loading times (< 2s)
- Core Web Vitals optimized

## Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Lighthouse Score**: 90+
- **Mobile-Friendly**: 100%

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational and reference purposes only. Tax rates and calculations should be verified with official PTA sources.

## Disclaimer

This calculator is provided for reference purposes only and is not an official PTA tool. Always verify tax amounts with official PTA sources before making payments. Tax rates are subject to change based on FBR policies.

## Resources

- [PTA Official Website](https://www.pta.gov.pk)
- [DIRBS Information](https://www.pta.gov.pk/en/dirbs)
- [FBR Website](https://www.fbr.gov.pk)

## Support

For issues or questions:
- Check the [FAQ page](https://ptataxcalculator.org/faq)
- Review the [PRD.md](./PRD.md) for detailed requirements
- Check the [REQUIREMENTS.md](./REQUIREMENTS.md) for technical specifications

---

Built with ❤️ for the Pakistani mobile phone community
