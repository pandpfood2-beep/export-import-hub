export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistGroup {
  title: string;
  items: ChecklistItem[];
}

export const exportChecklistGroups: ChecklistGroup[] = [
  {
    title: 'Phase 1: Company Setup & Registrations',
    items: [
      { id: 'setup_1', text: 'Incorporate a legal private limited or LLP business entity.' },
      { id: 'setup_2', text: 'Obtain corporate Permanent Account Number (PAN) / Tax ID.' },
      { id: 'setup_3', text: 'Open a standard current banking account authorized for foreign currency.' },
      { id: 'setup_4', text: 'Apply and receive your online Importer-Exporter Code (IEC) from DGFT.' },
      { id: 'setup_5', text: 'Register for national tax structures (GST / VAT / Sales Tax).' },
      { id: 'setup_6', text: 'Obtain Registration Cum Membership Certificate (RCMC) from sector-relevant EPC.' }
    ]
  },
  {
    title: 'Phase 2: Sourcing, Quality Auditing & Pricing',
    items: [
      { id: 'source_1', text: 'Select an exportable product containing local resource advantages.' },
      { id: 'source_2', text: 'Analyze international import tariffs and target country demands.' },
      { id: 'source_3', text: 'Identify 3-4 reliable factories on B2B panels like Alibaba or Global Sources.' },
      { id: 'source_4', text: 'Request product samples and dispatch them to independent labs for quality verification.' },
      { id: 'source_5', text: 'Calculate absolute FOB and CIF prices incorporating packing, port handling, and broker fees.' }
    ]
  },
  {
    title: 'Phase 3: Sales Negotiations & Trade Contracts',
    items: [
      { id: 'contract_1', text: 'Locate prospective buyers via trade delegations or import manifest tools.' },
      { id: 'contract_2', text: 'Establish official Proforma Invoice detailing price quotes and banking Swift info.' },
      { id: 'contract_3', text: 'Determine a balanced Incoterm (prefer FOB or FCA for beginners).' },
      { id: 'contract_4', text: 'Set a secure payment method (prefer Irrevocable Sight LC or 30% advance deposit).' },
      { id: 'contract_5', text: 'Sign a standard sales contract mentioning explicit arbitration rules for dispute clearance.' }
    ]
  },
  {
    title: 'Phase 4: Cargo Preparation & Pre-Shipment Checklists',
    items: [
      { id: 'ship_prep_1', text: 'Initiate product manufacturing under strict technical specifications.' },
      { id: 'ship_prep_2', text: 'Conduct custom packaging using high-stress seaworthy wooden crates or pallets.' },
      { id: 'ship_prep_3', text: 'Ensure packing crates comply with ISPM-15 fumigation standards and carry proper heat stamps.' },
      { id: 'ship_prep_4', text: 'Summon independent inspection agencies (SGS) to verify container counts and qualities.' },
      { id: 'ship_prep_5', text: 'Obtain crucial health, phytosanitary, or organic certifications if shipping agro commodity.' }
    ]
  },
  {
    title: 'Phase 5: Port Logistics & Customs Border Clearance',
    items: [
      { id: 'custom_clear_1', text: 'Appoint a licensed Custom House Agent (CHA) inside the departure port.' },
      { id: 'custom_clear_2', text: 'Provide the CHA with Commercial Invoices, Packing Lists, and COO.' },
      { id: 'custom_clear_3', text: 'Instruct the broker to file the digital Shipping Bill on the national custom gateway (ICEGATE).' },
      { id: 'custom_clear_4', text: 'Truck the cargo containers to the Port Gate and obtain Gate-In entry passes.' },
      { id: 'custom_clear_5', text: 'Undergo customs document checking and random physical cargo scanning.' },
      { id: 'custom_clear_6', text: 'Secure the statutory "Let Export Order" (LEO) clearance authorizing loading.' }
    ]
  },
  {
    title: 'Phase 6: Shipment Dispatch & Payment Realization',
    items: [
      { id: 'payment_real_1', text: 'Deliver containers to the shipping line and watch vessel loading.' },
      { id: 'payment_real_2', text: 'Receive original "Shipped on Board" Clean Bill of Lading (BL) from the carrier within 48 hours.' },
      { id: 'payment_real_3', text: 'Assemble full complying documentary bundle (Invoice, Packing List, BL, Insurance, COO, Inspection).' },
      { id: 'payment_real_4', text: 'Submit the clean documents to your handling bank for swift LC processing.' },
      { id: 'payment_real_5', text: 'Receive overseas bank wire transfer, track AD code receipts, and file for duty drawbacks (RoDTEP).' }
    ]
  }
];

export const docChecklistGroups: ChecklistGroup[] = [
  {
    title: 'Standard Mandatory Global Trade Documents',
    items: [
      { id: 'doc_1', text: 'Commercial Invoice: Must matches values across all other documents.' },
      { id: 'doc_2', text: 'Packing List: Must describe detailed box breakdown with precise gross/net weights.' },
      { id: 'doc_3', text: 'Bill of Lading / Air Waybill: Confirm notify party and consignee details.' }
    ]
  },
  {
    title: 'Customs & Government Regulatory Requirements',
    items: [
      { id: 'doc_4', text: 'Shipping Bill (Export) or Bill of Entry (Import) filed on customs gateway.' },
      { id: 'doc_5', text: 'Certificate of Origin: Crucial to claim FTA preferential customs reductions.' },
      { id: 'doc_6', text: 'Fumigation / Phytosanitary Certificate for timber or agricultural substances.' }
    ]
  },
  {
    title: 'Financial & Security Safeguards',
    items: [
      { id: 'doc_7', text: 'Irrevocable Documentary Letter of Credit: Swift MT700 instructions.' },
      { id: 'doc_8', text: 'Marine Transit Cargo Insurance policy sheet (110% of CIF valuation).' },
      { id: 'doc_9', text: 'Independent third-party Quality Inspection certificate (e.g. SGS).' }
    ]
  }
];

export const incotermsRiskGrid = [
  { term: 'EXW', mode: 'All Modes', sellerRisk: 'Minimal (Factory Floor)', buyerRisk: 'Maximum (Bears all transport and customs)', loadingResponsibility: 'Buyer', exportClearance: 'Buyer', importClearance: 'Buyer' },
  { term: 'FCA', mode: 'All Modes', sellerRisk: 'Low (Delivery to local carrier)', buyerRisk: 'High (Transit & Import)', loadingResponsibility: 'Seller (if at own site)', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'CPT', mode: 'All Modes', sellerRisk: 'Low (Shift at first carrier)', buyerRisk: 'High (No control over carrier)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'CIP', mode: 'All Modes', sellerRisk: 'Low (Shift at first carrier)', buyerRisk: 'High (Covered by Seller Insurance)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'DAP', mode: 'All Modes', sellerRisk: 'High (Delivery to Site)', buyerRisk: 'Low (Only unloading & import)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'DPU', mode: 'All Modes', sellerRisk: 'Maximum (Delivery & Unloaded)', buyerRisk: 'Low (Only import clearance)', loadingResponsibility: 'Seller (including Unloading)', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'DDP', mode: 'All Modes', sellerRisk: 'Maximum (Bears all costs)', buyerRisk: 'Minimal (Receives clear at site)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Seller' },
  { term: 'FAS', mode: 'Maritime Only', sellerRisk: 'Low (Alongside vessel quay)', buyerRisk: 'High (Vessel loading & transit)', loadingResponsibility: 'Buyer (Ship crane)', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'FOB', mode: 'Maritime Only', sellerRisk: 'Moderate (Loaded on Ship deck)', buyerRisk: 'Moderate-High (Transit & Import)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'CFR', mode: 'Maritime Only', sellerRisk: 'Moderate (Loaded on Ship deck)', buyerRisk: 'Moderate-High (Transit & Import)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Buyer' },
  { term: 'CIF', mode: 'Maritime Only', sellerRisk: 'Moderate (Loaded on Ship deck)', buyerRisk: 'Moderate (Insured by Seller)', loadingResponsibility: 'Seller', exportClearance: 'Seller', importClearance: 'Buyer' }
];
