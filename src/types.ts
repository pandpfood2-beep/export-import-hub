export interface IncotermInfo {
  code: string;
  name: string;
  meaning: string;
  definition: string;
  sellerResponsibility: string[];
  buyerResponsibility: string[];
  riskTransfer: string;
  costResponsibility: string;
  advantages: string[];
  disadvantages: string[];
  example: string;
  transportMode: 'Sea/Inland Waterway Only' | 'Any Transport Mode' | 'All Modes';
}

export interface DocumentInfo {
  name: string;
  purpose: string;
  requiredInfo: string[];
  sampleFormat: {
    header: string;
    sections: string[];
    fields: Record<string, string>;
  };
  commonMistakes: string[];
}

export interface PaymentTermInfo {
  term: string;
  fullName: string;
  description: string;
  advantages: string[];
  risks: string[];
  bestUsage: string;
  securityLevel: 'Very High for Seller' | 'Moderate for Seller' | 'Low for Seller' | 'Balanced';
}

export interface HSCodeGuide {
  title: string;
  structure: {
    digits: string;
    meaning: string;
    description: string;
  }[];
  findingSteps: string[];
  importance: string[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'Basics' | 'Incoterms' | 'Documents' | 'Payments' | 'Customs' | 'Logistics' | 'Sourcing' | 'Risk & Legal' | 'Govt support';
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Trade' | 'Logistics' | 'Shipping' | 'Customs' | 'Banking';
}

export interface InteractiveChecklist {
  id: string;
  title: string;
  category: string;
  items: { id: string; text: string; completed: boolean }[];
}
