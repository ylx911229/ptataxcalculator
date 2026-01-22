export interface TaxRate {
  id: string;
  effectiveDate: string;
  expiryDate: string | null;
  rates: {
    cnic: {
      customsDuty: number;
      salesTax: number;
      withholdingTax: number;
      regulatoryDuty: number;
    };
    passport: {
      customsDuty: number;
      salesTax: number;
      withholdingTax: number;
      regulatoryDuty: number;
    };
  };
}

export interface Device {
  id: string;
  brand: string;
  model: string;
  variants: {
    storage: string;
    price: {
      usd: number;
      pkr: number;
    };
  }[];
  releaseDate: string;
  popularity: number;
}

export interface CalculationResult {
  device: {
    brand: string;
    model: string;
    storage: string;
    price: number;
    currency: string;
  };
  identityType: 'cnic' | 'passport';
  breakdown: {
    customsDuty: { rate: number; amount: number };
    salesTax: { rate: number; amount: number };
    withholdingTax: { rate: number; amount: number };
    regulatoryDuty: { rate: number; amount: number };
  };
  totalTax: number;
  totalCost: number;
  exchangeRate: number;
  calculatedAt: string;
}
