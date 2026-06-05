import { DocumentInfo } from '../types';

export const documentsData: DocumentInfo[] = [
  {
    name: 'Commercial Invoice',
    purpose: 'The primary legal bill of sale issued by the exporter to the importer, used by customs to calculate duties, taxes, and assess values of goods.',
    requiredInfo: [
      'Exporter and Importer contact info, addresses, and tax registration IDs.',
      'Unique Invoice number, date, and purchase order reference.',
      'Incoterms 2020 agreed (e.g., FOB Rotterdam).',
      'Detailed item descriptions, HS codes, quantities, net weights, unit prices, and total value.',
      'Country of origin of goods.',
      'Payment terms and banking/wire receipt coordinates.'
    ],
    sampleFormat: {
      header: 'COMMERCIAL INVOICE',
      sections: ['Exporter Information', 'Consignee / Importer Information', 'Line Items Table', 'Declaration & Signature'],
      fields: {
        'Exporter': 'GLOBAL METALS EXPORTS LTD, 45 STONECUTTER WAY, LONDON EC4',
        'Consignee': 'PACIFIC IMPORT CORP, 102 OCEAN VIEW DR, SAN FRANCISCO, CA',
        'Invoice No': 'GME-2026-98124',
        'Incoterm': 'CIF Oakland Port (Incoterms 2020)',
        'Origin': 'United Kingdom',
        'Payment Terms': 'Letter of Credit at Sight'
      }
    },
    commonMistakes: [
      'Stating a generic description (e.g., "Hardware") instead of detailed exact specifications.',
      'Discrepancy in currency symbols (using $ instead of USDT, CAD, or AUD explicitly).',
      'Omitting the specific Incoterm or specifying an outdated Incoterm version.'
    ]
  },
  {
    name: 'Proforma Invoice',
    purpose: 'A preliminary bill of sale issued prior to shipment, establishing a formal quotation, securing an import license, or opening a Letter of Credit.',
    requiredInfo: [
      'Keyword "PROFORMA INVOICE" explicitly stated.',
      'Exporter and prospective importer credentials.',
      'Estimated shipping weights, transit times, and packaging details.',
      'Pricing quote validity expiration date.',
      'Detailed banking coordinates for opening Letters of Credit.'
    ],
    sampleFormat: {
      header: 'PROFORMA INVOICE (QUOTATION)',
      sections: ['Draft Contact Info', 'Quotation Validity', 'Products List', 'Regulatory Compliance Marks'],
      fields: {
        'Exporter': 'EURO MACHINERY S.A., DUSSELDORF, GERMANY',
        'Consignee': 'INDIAN ENGINEERING CO, MUMBAI, INDIA',
        'PI Number': 'PI-DE-44829',
        'Validity': 'Valid until August 31, 2026',
        'Payment Terms': '30% Advance, 70% LC at Sight'
      }
    },
    commonMistakes: [
      'Confusing the Proforma Invoice with the Commercial Invoice at customs clearance.',
      'Forgetting to mention the expiration date of the quotation, forcing the exporter to honor outdated raw material rates.'
    ]
  },
  {
    name: 'Packing List',
    purpose: 'Details the exact physical contents of each package, box, crate, or container in the shipment, aiding logistics handlers, port search, and customs inspectors.',
    requiredInfo: [
      'Invoice number association.',
      'Dimensions and volume of each outer package/crate.',
      'Gross weight and Net weight of each item and the entire shipment.',
      'Crate marking descriptions (e.g., Box 1 of 50).',
      'Detailed item counts inside every package.'
    ],
    sampleFormat: {
      header: 'SHIPPING PACKING LIST',
      sections: ['Logistics Identifiers', 'Packaging Dimensions Grid', 'Weight Summaries', 'Safety handling instructions'],
      fields: {
        'Shipper': 'TOKYO TECH COMPONENT CORP, CHIYODA, TOKYO, JP',
        'Port of Loading': 'Yokohama Port',
        'Total Crates': '12 Wood Crates',
        'Total Net Weight': '4,280.00 KGS',
        'Total Gross Weight': '4,650.00 KGS'
      }
    },
    commonMistakes: [
      'Gross/Net weights discrepancies between the Bill of Lading, Packing List, and Commercial Invoice.',
      'Failing to describe the specific breakdown block by box, rendering spot-inspections slow and costly.'
    ]
  },
  {
    name: 'Shipping Bill',
    purpose: 'The central application document filed electronically by exporters with Customs to get export clearance and permission to load cargo ("Let Export Order" - LEO).',
    requiredInfo: [
      'IEC (Importer Exporter Code) and GST numbers.',
      'Authorized Dealer (AD) code of handling bank.',
      'Consignee details, port of discharge, destination country.',
      'Description and FOB value of goods.',
      'Custom House Agent (CHA) details.'
    ],
    sampleFormat: {
      header: 'GOVERNMENT OF INDIA - CUSTOMS SHIPPING BILL',
      sections: ['Customs House Header', 'Export Declarations', 'Duty Exemption/Drawback claims', 'Vessel Dispatch Details'],
      fields: {
        'IEC Code': '0514998240',
        'Port of Export': 'Nhava Sheva Port (INNSA1)',
        'Shipping Bill No': 'SB-INNSA-993812A',
        'FOB Value declared': 'USD 89,500.00',
        'Export Agent License': 'CHA-11/2485'
      }
    },
    commonMistakes: [
      'Declaring an incorrect HS Code, resulting in delays, cargo detention, or loss of governmental export incentive claims (e.g., RoDTEP).',
      'Selecting an incorrect Scheme Code for customs duty drawbacks.'
    ]
  },
  {
    name: 'Bill of Lading',
    purpose: 'Issued by the ocean carrier acknowledging receipt of cargo, representing a binding contract of carriage, and serving as a Document of Title to the goods.',
    requiredInfo: [
      'Carrier details (e.g., Maersk, MSC) and BL number (unique identifier).',
      'Name of the Shipper, Consignee, and Notify Party.',
      'Vessel name, voyage number, port of loading, and discharge.',
      '"Clean on Board" notation validating cargo was received in perfect order.',
      'Number of original Bill of Lading copies issued.'
    ],
    sampleFormat: {
      header: 'COMBINED TRANSPORT BILL OF LADING',
      sections: ['Carrier Identification', 'Legal Contract terms', 'Cargo Description Grid', 'Freight Collect/Prepaid signups'],
      fields: {
        'Carrier': 'MEDITERRANEAN SHIPPING COMPANY (MSC)',
        'BL Number': 'MSCUZ772910G',
        'Consignee': 'TO THE ORDER OF HANOI CHARTERED BANK',
        'Vessel Voyage': 'MSC ROBERTA / V-2604N',
        'Container Status': 'Container House Lock No. H-110294'
      }
    },
    commonMistakes: [
      'Spellings in description, weights, or shipping marks distinct from what is stated in the Letter of Credit, immediately triggering a banking rejection.',
      'Releasing the original physical documents before receiving payment clearance under secure banking mandates.'
    ]
  },
  {
    name: 'Air Waybill',
    purpose: 'A contract of carriage issued by air carriers validating transport receipt, unlike the Bill of Lading, it is NOT a document of title (cannot be negotiated).',
    requiredInfo: [
      'Unique Air Waybill Number (3-digit airline prefix + 8-digit serial).',
      'Shipper, Consignee, and issuing carrier name.',
      'Airport of departure and scheduled destination.',
      'Chargeable weight calculated based on volumetric dimensions.',
      'Signature of carrier or authorized agent.'
    ],
    sampleFormat: {
      header: 'INTERNATIONAL AIR WAYBILL (NON-NEGOTIABLE)',
      sections: ['Airline prefix block', 'Consignee details', 'Chargeable Weight Box', 'Flight route details & signature'],
      fields: {
        'AWB Number': '020-88495031',
        'Carrier': 'Lufthansa Cargo A.G.',
        'Chargeable Weight': '680.00 KGS (Volumetric)',
        'Airport Code': 'FRA to SIN (Frankfurt to Singapore)',
        'Handling Information': 'Fragile Electronic chips, keep 18-22C.'
      }
    },
    commonMistakes: [
      'Failing to convert volumetric weight accurately, leading to unexpected invoice surcharges from the air airline.',
      'Releasing cargo to the consignee directly without verifying payment status, as Air Waybills bypass title transfer clearances.'
    ]
  },
  {
    name: 'Certificate of Origin',
    purpose: 'An official document certifying that the exported goods originate from a specific country, crucial for claiming preferential custom tariff reductions under free trade agreements (FTAs).',
    requiredInfo: [
      'Name and authority of the chamber of commerce or government issuing agency.',
      'Detailed item descriptions and packaging labels.',
      'Specific trade agreement referenced (e.g., USMCA, ASEAN-India FTA).',
      'Criteria of origin calculation (e.g., Wholly Obtained, regional value content %).'
    ],
    sampleFormat: {
      header: 'CERTIFICATE OF ORIGIN (PREFERENTIAL)',
      sections: ['Chamber of Commerce Header', 'Origin Criteria classification', 'Consignee Verification', 'Official Stamp & Sign-off'],
      fields: {
        'Issuing Authority': 'Singapore Chinese Chamber of Commerce',
        'Agreement': 'ASEAN - India Free Trade Area',
        'Origin Criterion': 'RVC 40% (Regional Value Content)',
        'Certificate No': 'SGP-2026-CA9918'
      }
    },
    commonMistakes: [
      'Failing to matches HS Code on the COO with Custom clearing bills.',
      'Signing with a signature not pre-registered with the Chamber of Commerce.'
    ]
  },
  {
    name: 'Insurance Certificate',
    purpose: 'A contract defining the scope of protection for goods against transit hazards, weather, damage, loss, or generalized averages under marine transit.',
    requiredInfo: [
      'Policy number and underwriters details.',
      'Insured amount (typically 110% of total CIF/CIP commercial value).',
      'Origin and destination ports/warehouses.',
      'Transit clauses selected (e.g., Institute Cargo Clauses A, B, or C).',
      'Claims payment centers and currency.'
    ],
    sampleFormat: {
      header: 'CERTIFICATE OF MARINE TRANSIT INSURANCE',
      sections: ['Policy Coverage Schedule', 'Transit Clause descriptions', 'Premium Receipts', 'Assessor Contact list'],
      fields: {
        'Underwriter': 'LLOYD\'S SYNDICATE 1228, LONDON',
        'Policy Number': 'MAR-99214A-2026',
        'Insured Value': 'USD 143,000.00 (110% CIF Value)',
        'Applicable Clauses': 'Institute Cargo Clauses (A) All-Risks'
      }
    },
    commonMistakes: [
      'Underinsuring the cargo (e.g. insuring for exactly 100% of FOB price, which leaves freight and handling unsecured in the event of salvage).',
      'Setting the insurance validity date to start AFTER the shipping vessel departs the origin docks.'
    ]
  },
  {
    name: 'Inspection Certificate',
    purpose: 'Verifies that the goods shipped conform strictly to the technical specifications, weights, and quantity parameters set in the export contract.',
    requiredInfo: [
      'Name of independent inspection agency (e.g., SGS, Bureau Veritas).',
      'Testing standards or reference ISO specifications.',
      'Sampling methodologies utilized.',
      'Physical inspection dates and testing lab certificates.'
    ],
    sampleFormat: {
      header: 'SGS REPORT OF QUALITY AND QUANTITY INSPECTION',
      sections: ['Independent Assessor Details', 'Sampling Reports', 'Quantitative Analytics Grid', 'Seal of Conformity'],
      fields: {
        'Inspection Agency': 'SGS SA, GENEVA, SWITZERLAND',
        'Report Reference': 'SGS-T99827-2026',
        'Date of Verification': 'May 18, 2026',
        'Certified Status': 'Goods are sound, loyal, and merchantable as specified.'
      }
    },
    commonMistakes: [
      'Not specifying the mandatory testing parameters in the inspector\'s contract, leaving some defect profiles unchecked.',
      'Failing to have the inspector audit packing lines, allowing sub-par cargo to slip through inside crates.'
    ]
  },
  {
    name: 'Fumigation Certificate',
    purpose: 'Validates that timber packaging materials, pallets, crates, or raw agricultural bulk have been chemically gassed and heat-treated to eliminate pests as required by ISPM-15 quarantine protocols.',
    requiredInfo: [
      'Chemical treatment used (e.g., Methyl Bromide).',
      'Temperature, chemical dosage, and exposure timeline.',
      'Batch/Pallet identification numbers.',
      'Authorized pest control license certificates.'
    ],
    sampleFormat: {
      header: 'FUMIGATION / PEST TREATMENT CERTIFICATE',
      sections: ['Pest control center stamp', 'Active ingredient dosing schedule', 'Treated items count', 'Phytosanitary seal'],
      fields: {
        'Treatment Operator': 'BIO-GUARD BIO-SECURITY INC, PORTLAND, OR',
        'Certificate serial': 'FUM-98-1182A',
        'Active Chemical': 'Methyl Bromide - Dosage 48g/m³',
        'Standards': 'ISPM-15 Compliant (Heat Treated)'
      }
    },
    commonMistakes: [
      'Shipping untreated crates resulting in instant customs hold, container quarantines, or fines where packaging must be burned at destination.',
      'Exceeding the maximum duration allowance since chemical fumigation was performed (typically must enter quarantine within 21 days).'
    ]
  },
  {
    name: 'Letter of Credit Documents',
    purpose: 'A suite of documents (including the actual LC, bank guarantees, and complying draft) ensuring payment is made by the buyer\'s issuing bank to the supplier upon presentation of pristine shipping forms.',
    requiredInfo: [
      'LC number and swift ID code.',
      'Strict timelines for cargo loading, document presentation, and credit expiry.',
      'Draft amount and drawer info.',
      'All specific documentary clauses requested by the issuing bank.'
    ],
    sampleFormat: {
      header: 'DOCUMENTARY LETTER OF CREDIT (MT700 ADVICE)',
      sections: ['SWIFT Standard tags', 'Exacting document lists', 'Negotiability parameters', 'Reimbursement details'],
      fields: {
        'Issuing Bank': 'Deutsche Bank AG, Hamburg',
        'LC Number': 'LC-DE-778201A',
        'Shipment Expiry': 'September 15, 2026',
        'Beneficiary': 'MUMBAI APPARELS PVT LTD, MUMBAI, INDIA'
      }
    },
    commonMistakes: [
      'Forgetting that banks trade ONLY in documents and do NOT inspect the actual cargo. A single spelling discrepancy (e.g., "Steel Pipes" vs "Steel Pipe" on a packing list) voids the bank safety immediately.'
    ]
  },
  {
    name: 'Export Declaration Forms',
    purpose: 'The statutory filing made to government customs authorities declaring the contents, value, and destination of goods for administrative, statistal, and national intelligence purposes (e.g., US EEI via AES).',
    requiredInfo: [
      'Ultimate consignee, state of origin, value declarations.',
      'US PPI or regional equivalent employer identification numbers.',
      'Schedule B or Harmonized System classification codes.',
      'Export Control Classification Number (ECCN) for defense/dual-use items.'
    ],
    sampleFormat: {
      header: 'US DEPT. OF COMMERCE - ELECTRONIC EXPORT INFORMATION',
      sections: ['AES Hub receipt', 'ECCN export licensing classification', 'Ultimate Consignee details', 'Statistics checks'],
      fields: {
        'AES ITN code': 'AES-X20260604812349',
        'EIN Identifier': '12-345678900',
        'ECCN License': 'EAR99 (No License Required)',
        'Schedule B Classification': '8471.30.0100 (Notebook Computers)'
      }
    },
    commonMistakes: [
      'Omitting or filing incomplete declarations, leading to swift cargo seizure at the border for violating national security/sanction guidelines.'
    ]
  }
];
