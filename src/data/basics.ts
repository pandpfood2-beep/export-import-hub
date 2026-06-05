export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface HSCodeDigit {
  digits: string;
  meaning: string;
  description: string;
}

export const tradeBasics = {
  whatIsExport: 'Exporting is the process of selling goods or services produced in one country to buyers in another country. It represents the primary pathway for companies to enter global markets and expand their revenue stream.',
  whatIsImport: 'Importing is the process of bringing goods or services into a country from an external source abroad for resale, consumption, or manufacturing assembly. It allows economies to access goods not locally available or cheaper to purchase overseas.',
  differenceTable: [
    { factor: 'Definition', export: 'Sending goods/services out of a country.', import: 'Bringing goods/services into a country.' },
    { factor: 'Economic Impact', export: 'Brings foreign currency into the country, boosting GDP.', import: 'Results in foreign currency outflow, affecting trade balance.' },
    { factor: 'Regulatory Focus', export: 'Promoted by government incentives, requires local output clearance.', import: 'Regulated for tariff collections, national security, and local market protections.' },
    { factor: 'Primary Customer', export: 'Foreign businesses, distributors, or direct consumers.', import: 'Domestic processors, wholesalers, or local retail systems.' }
  ],
  exportProcess: [
    { step: 1, title: 'Incorporate Business & Obtain Licenses', description: 'Set up a professional corporate entity, register for taxes, and obtain an Importer-Exporter Code (IEC / tax identity).' },
    { step: 2, title: 'Product Selection & Market Research', description: 'Find a promising product and select target countries based on tariff rates, demand data, and competitors.' },
    { step: 3, title: 'Secure International Importer', description: 'Interact in B2B fairs, target buyer leads on LinkedIn, or connect through export promotion councils.' },
    { step: 4, title: 'Contract & Payments Negotiations', description: 'Draft pre-contract offers using Incoterms 2020 and establish payment instruments (e.g. Letter of Credit).' },
    { step: 5, title: 'Procurement or Production of Goods', description: 'Manufacture compliant products adhering carefully to destination labeling and quality testing.' },
    { step: 6, title: 'Packing, Marking, & Certification', description: 'Wrap cargo securely, mark crates, and summon phytosanitary, fumigation, or inspection teams.' },
    { step: 7, title: 'Pre-Carriage Trucking to Port', description: 'Hire a Custom House Agent (CHA) to manage transport and file cargo gate-entries at local port yards.' },
    { step: 8, title: 'Export Customs Clearance', description: 'File the Shipping Bill, submit invoices, undergo physical scans, and obtain the "Let Export Order" (LEO).' },
    { step: 9, title: 'International Cargo Dispatch', description: 'Load cargo onto container ships, airplanes, or trucks. Receive the Bill of Lading (BL) or Air Waybill.' },
    { step: 10, title: 'Document Bank Submission & Cash Release', description: 'Submit original clean documents to the bank to secure payment under the Letter of Credit, releasing cargo title to buyer.' }
  ],
  importProcess: [
    { step: 1, title: 'Import Feasibility & Duty Analysis', description: 'Identify target items, verify HS classification, search local import bans, and compute import duty rates.' },
    { step: 2, title: 'Source Global Exporter', description: 'Verify factories in sourcing portals, obtain samples, and request Proforma Invoice sheets.' },
    { step: 3, title: 'Procure Import Licenses', description: 'Ensure the company possesses registered import clearances and specialized permits (e.g., FDA, health codes).' },
    { step: 4, title: 'Establish Payment Instruments', description: 'Authorize local banks to open a Letter of Credit, securing collateral or trade finance.' },
    { step: 5, title: 'Triggers Vessel Booking to Port', description: 'Appoint freight forwarder or carrier to organize container pickups in origin under CIF, FOB, or FCA terms.' },
    { step: 6, title: 'Arriving Notifications Receipt', description: 'Receive Arrival Notice and container placement manifests from shipping agent nodes at local hubs.' },
    { step: 7, title: 'File Import Declarations (Bill of Entry)', description: 'Submit the Bill of Entry form to state customs authorities along with packed bills, COO, and clearance forms.' },
    { step: 8, title: 'Customs Assessment & Duty Settlement', description: 'Pay assessed customs duties, local GST, and port terminal handling charges.' },
    { step: 9, title: 'Physical Examination & Order Clearance', description: 'Support port container inspections and secure "Out of Charge" (OOC) order releases.' },
    { step: 10, title: 'Inland Transport to Warehouse', description: 'Truck the cleared ocean cargo container directly to local warehouses, destaging and returning empty containers.' }
  ]
};

export const hsCodeData = {
  whatIs: 'The Harmonized System (HS) Code is a highly standardized 6 to 10-digit numerical nomenclature system developed by the World Customs Organization (WCO). It classifies traded products globally, ensuring uniform customs evaluation and statistical monitoring.',
  structure: [
    { digits: 'Digits 1-2 (Chapter)', meaning: 'Coarse Commodity Classification', description: 'Defines the broad category of the product. Example: Chapter 09 is "Coffee, Tea, Mate, and Spices".' },
    { digits: 'Digits 3-4 (Heading)', meaning: 'Specific Product Type', description: 'Defines the sub-category or form of the product under that chapter. Example: heading 0901 is "Coffee (whether or not roasted)".' },
    { digits: 'Digits 5-6 (Subheading)', meaning: 'Exact Product Class', description: 'The absolute standard accepted worldwide. Example: 0901.21 is "Coffee, roasted, not decaffeinated".' },
    { digits: 'Digits 7-10 (National Tariffs)', meaning: 'Customs Tax & Statistical level', description: 'Defined by individual countries to collect national statistics, levy specific customs tariffs, or apply import quotas. (e.g., USA uses Schedule B/HTS, India uses ITC-HS).' }
  ],
  howToFind: [
    'Use standard digital portals like WCO Trade Tools, ICEGATE (India), HS Lookup tools, or the United States ITC (USITC) Interactive Tariff Database.',
    'Review existing import bills or supplier shipping documents for similar products.',
    'Request a formal advance binding tariff ruling from customs headquarters if your product represents a complex formulation.',
    'Work with a licensed Custom House Agent (CHA) to ensure accurate classification, avoiding severe misdeclaration penalties.'
  ],
  importance: [
    'Correct HS codes determine the exact customs duty rate, preventing unexpected tax overpayments or penalties.',
    'It highlights anti-dumping duties, environmental protection bans, or specialized import permits.',
    'Ensures smooth customs database screening without triggering manual inspection alarms.'
  ]
};

export const customsClearanceData = {
  procedures: 'Customs clearance is the compulsory process of getting government authorization to move cargo across international borders. It involves verification of goods, values, tax settlements, and health/security clearances.',
  icegateOverview: 'ICEGATE (Indian Customs EDI Gateway) is the central infrastructure portal of the Central Board of Indirect Taxes and Customs (CBIC). It facilitates online registration, document filings, duty payments, and cargo tracking in India.',
  dutyStructure: {
    bcd: 'Basic Customs Duty (BCD) - Standard tax assessed on the transaction value of the goods.',
    add: 'Anti-Dumping Duty (ADD) - Levied on goods imported below reasonable home-market prices to shield local manufacturers.',
    igst: 'Integrated Goods & Services Tax (IGST) - Assessed on the total landed value (transaction value + customs duties) inside domestic borders.',
    cess: 'Customs Social Welfare Surcharge (SWS) - A supplementary levy (usually 10% of BCD) to build national welfare programs.'
  },
  complianceCheck: [
    'Ensure all declarations on the Bill of Entry or Shipping Bill perfectly match packaging weights.',
    'Examine Free Trade Agreements closely to claim preferential customs tariff exemptions accompanied by certificates of origin.',
    'Double-check that products carrying safety standards (CE, UL, BIS) bear corresponding logo stamps on crates.'
  ]
};

export const chaData = {
  whatIs: 'A Custom House Agent (CHA) is a licensed professional individual or agency authorized to act as an expert intermediary facilitating import and export procedures at port customs facilities.',
  role: 'Chas manage regulatory filings, document structures, cargo assessments, cargo physical check-ins, and transport routing at major ship and aviation terminals.',
  keyResponsibilities: [
    'Examine supplier commercial invoices to classify the HS classifications accurately.',
    'Submit electronic filings (Shipping Bill or Bill of Entry) on government portals.',
    'Participate alongside port officers during container physical customs inspections.',
    'Arrange safe container destaging, drayage trucking, and empty container handbacks.',
    'Settle port terminal handling charges, warehousing demurrage, and customs duty payments on behalf of clients.'
  ],
  licensingProcess: [
    'Submit formal applications under Customs Broker Regulations with local government facilities.',
    'Candidate must possess a graduate degree in commerce, law, or shipping management.',
    'Successfully clear rigorous written and oral examinations assessing deep knowledge of customs codes, tariffs, and shipping rules.',
    'Post a financial bank guarantee bond confirming financial solvency and ethical trade obedience.'
  ],
  benefits: [
    'Drastically reduces shipping delays, avoiding expensive daily port storage fees (demurrage).',
    'Ensures absolute tax and regulatory compliance, insulating importing businesses from legal audits.',
    'Provides highly reliable local logistics connections for container shipping and distribution.'
  ]
};

export const productResearchData = {
  selectionMethods: [
    'Identify products carrying high domestic raw material surplus (e.g., spices from India, copper from Chile, timber from Canada).',
    'Evaluate production-cost disparities; target items where local labor, engineering, or technology holds a clear cost advantage.',
    'Explore niche artisan products with strong cultural demand blocks overseas.'
  ],
  marketResearchSteps: [
    'Scan historical trade databases (e.g., ITC Trade Map, UN Comtrade) to pinpoint countries experiencing volume import growth.',
    'Study target country import tariff rates, preferential zones, and specific trade barriers.',
    'Analyze local distribution channels, pricing margins, competitor density, and product standard adaptations.'
  ],
  countryClassification: {
    nicheMarket: 'High average unit values, lower trading volumes, requiring premium branding (e.g., Scandinavian design furniture).',
    bulkMarket: 'Mass-market consumption items characterized by tight pricing margins, high volumes, and intense price competition (e.g., industrial steel fasteners).'
  }
};

export const marketingData = {
  b2bMarketing: 'B2B international marketing focuses on direct outreach to commercial wholesalers, distributors, retail chains, and production factories overseas rather than retail buyers.',
  digitalChannels: [
    { platform: 'B2B Sourcing Portals', description: 'Maintaining premium company listings on major directories like Alibaba, Global Sources, Tradewheel, or IndiaMART.' },
    { platform: 'LinkedIn Marketing', description: 'Connecting directly with sourcing, procurement directors, and category buyers at foreign retail chains via professional profiling.' },
    { platform: 'Targeted Email campaigns', description: 'Formatting cold emails attaching custom catalog PDFs, certifications, and FOB quotation matrix sheets.' },
    { platform: 'Trade Fairs & Exhibitions', description: 'Participating in global trade exhibitions (e.g., Canton Fair, Gulfood, Hannover Messe) to establish skin-to-skin physical trust.' }
  ],
  leadGeneration: 'Set up clear, fast landing pages tracking exact product technical drawings and raw-material content. Run local Google Ads targeting B2B keywords in buyer territories.'
};

export const govtSchemesData = {
  dgft: 'The Directorate General of Foreign Trade (DGFT) is the nodal agency under the Ministry of Commerce and Industry in India. It is responsible for formulating and implementing the Foreign Trade Policy (FTP) and issuing Importer-Exporter Codes (IEC).',
  iecCode: 'The Importer-Exporter Code (IEC) is a unique 10-digit registration number mandatory for anyone importing or exporting goods or services. It is issued electronically and remains valid for the lifetime of the business entity.',
  rcmc: 'Registration Cum Membership Certificate (RCMC) is issued by Export Promotion Councils (EPCs) to exporters validating their registered status. It is compulsory for exporters claiming fiscal benefits, customs drawbacks, or taking export grants.',
  rodtep: 'The Remission of Duties and Taxes on Exported Products (RoDTEP) scheme refunds hidden central, state, and local taxes embedded in exported goods that were not refunded under other rebate systems, boosting cost competitiveness in global trade.'
};

export const riskManagementData = {
  paymentRisk: {
    mitigation: 'Implement secure cash-in-advance structures, open irrevocable payment Letters of Credit (LC), or buy export credit insurance policies backing foreign receivables.'
  },
  countryRisk: {
    mitigation: 'Monitor local foreign-exchange currency reserves, political elections, capital movement controls, and purchase comprehensive political risk insurance policies (e.g., MIGA/EXIM bank policies).'
  },
  logisticsRisk: {
    mitigation: 'Choose ocean cargo carriers with modern container tracking capabilities, and purchase maximum Marine Cargo Insurance matching Institute Cargo Clauses A.'
  },
  documentationRisk: {
    mitigation: 'Employ seasoned, certified Customs Brokers to draft and review bills, avoiding clerical mismatches that void LC payment safeguards.'
  },
  currencyRisk: {
    mitigation: 'Incorporate forward currency contracts or hedging options with bankers, or conduct trade exclusively utilizing hard currencies (e.g., USD, EUR).'
  }
};
