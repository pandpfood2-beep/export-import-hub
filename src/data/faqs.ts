import { FAQ } from '../types';

export const faqsData: FAQ[] = [
  // BASICS (13)
  {
    id: 1,
    category: 'Basics',
    question: 'How do I start an Export-Import business as a beginner?',
    answer: 'Begin by incorporating a business entity, opening a business bank account, registering for regional taxes, and obtaining a mandatory Importer-Exporter Code (IEC). Once set, select a stable niche product, conduct market research to find a high-demand país, find reliable suppliers, and establish secure trade payment terms (like LC or CAD).'
  },
  {
    id: 2,
    category: 'Basics',
    question: 'What is an Importer Exporter Code (IEC)?',
    answer: 'An IEC is a unique 10-digit code issued by national trade authorities (like DGFT in India) that acts as a business passport for international commerce. It is required for customs clearance of all imports and exports, bank transfers, and to claim export incentive rebates.'
  },
  {
    id: 3,
    category: 'Basics',
    question: 'Is it possible to export or import without a company registration?',
    answer: 'Generally, no. Commercial-scale import and export require formal company registration to acquire trade tax identities, credit lines, customs bonds, and to clear port declarations.'
  },
  {
    id: 4,
    category: 'Basics',
    question: 'What is the role of the DGFT?',
    answer: 'The Directorate General of Foreign Trade (DGFT) is the government department responsible for administering trade laws, designing official Foreign Trade Policies (FTP), issuing IEC codes, and distribution of regional export incentives.'
  },
  {
    id: 5,
    category: 'Basics',
    question: 'What is a merchant exporter?',
    answer: 'A merchant exporter is a trader who buys finished products from local manufacturers/factories and exports them under their own name. They do not own manufacturing facilities themselves.'
  },
  {
    id: 6,
    category: 'Basics',
    question: 'What is a manufacturer exporter?',
    answer: 'A manufacturer exporter is a business that processes or manufactures products in their own facility and exports them directly directly to international buyers.'
  },
  {
    id: 7,
    category: 'Basics',
    question: 'What is the main difference between domestic and international trade?',
    answer: 'International trade involves crossing sovereign borders, dealing with multiple currencies, adhering to differing legal jurisdictions, navigating complex ocean/air logistics, and declaring items to national customs boards.'
  },
  {
    id: 8,
    category: 'Basics',
    question: 'What are the main benefits of exporting for local businesses?',
    answer: 'Exporting diversifies revenue, reduces dependency on a single home market, triggers higher production scales (lowering unit costs), and provides access to higher margins in hard currencies.'
  },
  {
    id: 9,
    category: 'Basics',
    question: 'What is bilateral trade?',
    answer: 'Bilateral trade is the exchange of goods and services between two specific countries under agreed tariff rates and import volumes, often supported by a Bilateral Trade Agreement.'
  },
  {
    id: 10,
    category: 'Basics',
    question: 'What is multilateral trade?',
    answer: 'Multilateral trade involves physical trade transactions conducted across multiple nations without discrimination, governed under a common rulebook such as the World Trade Organization (WTO).'
  },
  {
    id: 11,
    category: 'Basics',
    question: 'What is a trade deficit?',
    answer: 'A trade deficit occurs when a nation imports a higher currency value of goods and services from abroad than it exports during a specific period.'
  },
  {
    id: 12,
    category: 'Basics',
    question: 'What is a trade surplus?',
    answer: 'A trade surplus is an economic condition where a nation\'s export revenues exceed its import expenditures over a designated period.'
  },
  {
    id: 13,
    category: 'Basics',
    question: 'What is de-globalization, and does it stop export-import?',
    answer: 'De-globalization refers to a political shift toward localized manufacturing, tariffs, and protectionism. It changes trade corridors and product focus but high-resource dependencies preserve global shipping requirements.'
  },

  // INCOTERMS (12)
  {
    id: 14,
    category: 'Incoterms',
    question: 'What are Incoterms 2020?',
    answer: 'Incoterms (International Commercial Terms) are a series of 11 pre-defined three-letter rules published by the International Chamber of Commerce (ICC). They declare who pays for freight, who handles customs, and exactly where risk passes from seller to buyer in a shipment.'
  },
  {
    id: 15,
    category: 'Incoterms',
    question: 'Which Incoterm carries the least risk for the seller?',
    answer: 'EXW (Ex Works) carries the minimum risk for the seller. The seller simply packs the goods and places them at their own facility gate; the buyer carries all loading, export customs, and transit risks.'
  },
  {
    id: 16,
    category: 'Incoterms',
    question: 'Which Incoterm carries the least risk for the buyer?',
    answer: 'DDP (Delivered Duty Paid) carries the absolute minimum risk for the buyer. The seller handles international shipping, clears both export and destination import customs, pays taxes, and delivers goods to the buyer\'s door.'
  },
  {
    id: 17,
    category: 'Incoterms',
    question: 'Why is FCA preferred over EXW for container shipping?',
    answer: 'FCA (Free Carrier) requires the seller to handle local export customs clearance. Under EXW, the foreign buyer must clear local customs in the seller\'s country, which can be legally difficult and raise VAT tax-exemption verification problems.'
  },
  {
    id: 18,
    category: 'Incoterms',
    question: 'What is the risk transfer point under FOB?',
    answer: 'Under FOB (Free On Board), risk transfers to the buyer the moment the goods are loaded completely and securely "on board" the nominated vessel at the designated port of shipment.'
  },
  {
    id: 19,
    category: 'Incoterms',
    question: 'What is the main difference between CPT and CIP?',
    answer: 'CPT and CIP both require the seller to pay freight to destination. However, CIP (Carriage and Insurance Paid To) obligates the exporter to buy high-level cargo insurance, while CPT carries no such insurance obligation.'
  },
  {
    id: 20,
    category: 'Incoterms',
    question: 'Can FOB, CFR, and CIF be used for air cargo?',
    answer: 'Technically, no. FOB, CFR, and CIF are reserved exclusively for sea or inland waterway transport because risk transfers are tied to loading "on board" a maritime ship. For air or multimodal, use FCA, CPT, and CIP.'
  },
  {
    id: 21,
    category: 'Incoterms',
    question: 'What does DPU stand for, and what makes it unique?',
    answer: 'DPU stands for "Delivered at Place Unloaded". It is unique because it is the only Incoterm where the seller is responsible for unloading the cargo from the arriving container/vehicle at the destination site.'
  },
  {
    id: 22,
    category: 'Incoterms',
    question: 'Who pays for origin Terminal Handling Charges (OTHC) under FOB?',
    answer: 'Under FOB, the seller is responsible for paying the origin Terminal Handling Charges (OTHC) since they are obligated to load the goods on board the shipping vessel.'
  },
  {
    id: 23,
    category: 'Incoterms',
    question: 'Does CIP require the seller to buy high-level or minimum-level insurance?',
    answer: 'Under Incoterms 2020, CIP requires the seller to purchase comprehensive "All-Risks" insurance (Institute Cargo Clauses A), whereas CIF only requires a lower basic coverage (Institute Cargo Clauses C).'
  },
  {
    id: 24,
    category: 'Incoterms',
    question: 'Who pays destination import custom duties under DAP?',
    answer: 'Under DAP (Delivered At Place), the buyer is responsible for import customs clearance, filing forms, and settling all importing duties and taxes.'
  },
  {
    id: 25,
    category: 'Incoterms',
    question: 'What happens if cargo gets damaged in mid-ocean under CIF?',
    answer: 'Under CIF, the risk transfers to the buyer once goods are loaded on board the vessel in origin. If damage occurs in transit, the buyer carries the risk, but they can file a recovery claim against the marine insurance policy funded by the seller.'
  },

  // DOCUMENTS (13)
  {
    id: 26,
    category: 'Documents',
    question: 'What is a Commercial Invoice, and why is it critical?',
    answer: 'A Commercial Invoice is the official legal bill of sale detailing goods, values, HS codes, and Incoterms. Customs authorities require it to assess values and compute import duties at regional border controls.'
  },
  {
    id: 27,
    category: 'Documents',
    question: 'What is a Bill of Lading (BL)?',
    answer: 'A BL is a legal document issued by an ocean carrier acknowledging receipt of cargo for shipping. It serves a triple purpose: a contract of carriage, a receipt of cargo, and a document of title (meaning whoever holds it legally owns the goods).'
  },
  {
    id: 28,
    category: 'Documents',
    question: 'What is an Air Waybill (AWB)?',
    answer: 'An AWB is a transport document issued by airlines validating cargo receipt. Unlike a Bill of Lading, an Air Waybill is non-negotiable and does NOT represent title to the cargo.'
  },
  {
    id: 29,
    category: 'Documents',
    question: 'What is a Certificate of Origin (COO)?',
    answer: 'A COO is an official form declaring the country where the goods were manufactured. Preferential COOs are required to claim customs tariff exemptions under regional Free Trade Agreements.'
  },
  {
    id: 30,
    category: 'Documents',
    question: 'What is a Phytosanitary Certificate?',
    answer: 'A Phytosanitary Certificate is an official health certification issued by agricultural departments verifying that shipments of fresh plants, timber, seeds, or food crops are free from quarantine pests.'
  },
  {
    id: 31,
    category: 'Documents',
    question: 'When is a Fumigation Certificate required?',
    answer: 'Required by customs when wooden palettes, timber crates, or logs are used as packaging materials. It certifies that the timber has been chemically treated under ISPM-15 guidelines to prevent insect spread.'
  },
  {
    id: 32,
    category: 'Documents',
    question: 'What is the difference between a Proforma Invoice and a Commercial Invoice?',
    answer: 'A Proforma Invoice is a preliminary quote/draft issued before cargo dispatch to help buyers arrange finances or obtain import permits. The Commercial Invoice is the final invoice reflecting finished weights used by customs to levy import taxes.'
  },
  {
    id: 33,
    category: 'Documents',
    question: 'What is a Packing List?',
    answer: 'A packing list specifies the actual physical packing breakdown (weights, crates, carton sizes, exact piece count) of every item in a shipment. Customs uses it to verify physical crate contents.'
  },
  {
    id: 34,
    category: 'Documents',
    question: 'What is a Shipping Bill?',
    answer: 'The Shipping Bill is the primary administrative electronic document filed with customs by an exporter to obtain official permission ("Let Export Order") to ship cargo outward.'
  },
  {
    id: 35,
    category: 'Documents',
    question: 'What is a Bill of Entry?',
    answer: 'The Bill of Entry is the central customs clearance document filed by imports upon container arrival, declaring HS classifications, and values to trigger active duty assessments.'
  },
  {
    id: 36,
    category: 'Documents',
    question: 'What is a "Clean Bill of Lading"?',
    answer: 'A BL issued by carriers confirming that the cargo was received on board the vessel in outward good condition, completely free of visible dents, leaks, or defects.'
  },
  {
    id: 37,
    category: 'Documents',
    question: 'What does "Claused Bill of Lading" mean?',
    answer: 'A BL marked with annotations noting damage, leaks, or missing items in the cargo when received by the carrier, rendering it unusable under Letters of Credit.'
  },
  {
    id: 38,
    category: 'Documents',
    question: 'What is an Inspection Certificate?',
    answer: 'A document issued by certified testing agencies (like SGS) confirming cargo matches contract standards, weights, and specifications.'
  },

  // PAYMENTS (12)
  {
    id: 39,
    category: 'Payments',
    question: 'What is a Letter of Credit (LC)?',
    answer: 'An LC is a binding promise issued by an importer\'s bank guaranteeing full payment to the exporter once the exporter presents perfect conforming cargo shipping documents to the bank.'
  },
  {
    id: 40,
    category: 'Payments',
    question: 'What is a "Sight LC"?',
    answer: 'A letter of credit requiring immediate payment processing to the exporter once the bank validates that the presented shipping documents are 100% compliant.'
  },
  {
    id: 41,
    category: 'Payments',
    question: 'What is a "Usance LC"?',
    answer: 'A usance LC permits deferred payment terms (e.g., 90 or 120 days after Bill of Lading date), allowing the importer to collect, sell, and monetize the items before paying.'
  },
  {
    id: 42,
    category: 'Payments',
    question: 'What does D/P (Documents Against Payment) mean?',
    answer: 'Under D/P, the shipping documents are channeled through banking nodes. The importer\'s bank releases the negotiable BL (conferring cargo title) only after the importer clears cash payment.'
  },
  {
    id: 43,
    category: 'Payments',
    question: 'What does D/A (Documents Against Acceptance) mean?',
    answer: 'Under D/A, the exporter\'s bank instructs the buyer\'s bank to release documents once the buyer accepts and signs a binding bill of exchange promising payment in 30, 60, or 90 days.'
  },
  {
    id: 44,
    category: 'Payments',
    question: 'Why is Open Account payment risky for exporters?',
    answer: 'Under Open Account, goods are shipped directly to the buyer prior to payment. The buyer receives goods on credit (Net 30/60). If they default, the seller has zero collateral and suffers complete financial loss.'
  },
  {
    id: 45,
    category: 'Payments',
    question: 'What is Cash Against Documents (CAD)?',
    answer: 'A simplified collection scheme similar to D/P, where shipping bills are routed through bank handlers and released to the buyer against immediate cash deposit.'
  },
  {
    id: 46,
    category: 'Payments',
    question: 'What is an "Irrevocable Letter of Credit"?',
    answer: 'An LC that cannot be amended, canceled, or revoked by the buyer or issuing bank without the explicit consent of the exporter beneficiary.'
  },
  {
    id: 47,
    category: 'Payments',
    question: 'What is an "LC Discrepancy"?',
    answer: 'A clerical error, misspelling, or date mismatch in the presented shipping documents that violates the strict conditions printed on the Letter of Credit, causing banks to halt payment.'
  },
  {
    id: 48,
    category: 'Payments',
    question: 'What are banking SWIFT codes?',
    answer: 'A standard international code used by financial networks to uniquely identify banks worldwide, facilitating secure and automated transfers of trade funds.'
  },
  {
    id: 49,
    category: 'Payments',
    question: 'How do I protect against payment defaults from foreign buyers?',
    answer: 'Trade exclusively under irrevocable bank guarantees, Sight Letters of Credit, receive significant upfront deposits (T/T), or buy Export Credit Insurance.'
  },
  {
    id: 50,
    category: 'Payments',
    question: 'What is export factoring?',
    answer: 'Export factoring is a trade finance practice where exporters sell their accounts receivables (foreign invoices) to a third party (a factor) at a discount to secure immediate liquidity.'
  },

  // CUSTOMS (13)
  {
    id: 51,
    category: 'Customs',
    question: 'What is customs clearance, and is it mandatory?',
    answer: 'Customs clearance is the legally mandatory administrative process where cargo crossing borders is declared, scrutinized, taxed, and approved for transit by customs offices.'
  },
  {
    id: 52,
    category: 'Customs',
    question: 'What is ICEGATE, and how does it help Indian traders?',
    answer: 'ICEGATE is the digital custom gateway of India. It automates imports and exports by allowing digital document filings, duty payments, and cargo search tracking from any device.'
  },
  {
    id: 53,
    category: 'Customs',
    question: 'What are Basic Customs Duties (BCD)?',
    answer: 'The primary custom duty tariff levied on imported merchandise, calculated based on the standardized transaction/commercial value of the goods.'
  },
  {
    id: 54,
    category: 'Customs',
    question: 'What is Anti-Dumping Duty (ADD)?',
    answer: 'A heavy protective penalty tariff slapped on imports priced artificially below their normal domestic market value to protect local national industries from predatory pricing.'
  },
  {
    id: 55,
    category: 'Customs',
    question: 'What is a Customs Broker (CHA)?',
    answer: 'A licensed commercial expert authorized by port boards to compile customs paperwork, classify goods, settle duties, and assist traders with border physical inspections.'
  },
  {
    id: 56,
    category: 'Customs',
    question: 'What is a "Bill of Entry"?',
    answer: 'The official digital customs form filed by importers declaring arriving cargo specifications, values, origin data, and custom duty computations.'
  },
  {
    id: 57,
    category: 'Customs',
    question: 'What is a "Let Export Order" (LEO)?',
    answer: 'The official authorization order issued by customs to confirm that all clearances, export inspections, and fees are settled, giving loading permission for cargo.'
  },
  {
    id: 58,
    category: 'Customs',
    question: 'What is "Out of Charge" (OOC) in importing?',
    answer: 'The ultimate clearance stamp issued by customs operators authorizing the cargo release from port warehouses following import duty payments and screenings.'
  },
  {
    id: 59,
    category: 'Customs',
    question: 'What happens if I declare an incorrect HS Code at customs?',
    answer: 'Incorrect HS declarations can result in container seizure, heavy monetary fines for tax evasion, and manual investigation logs that slow down future shipments.'
  },
  {
    id: 60,
    category: 'Customs',
    question: 'What is a customs bond?',
    answer: 'A legally binding financial contract underwritten by a surety company guaranteeing that importers will pay all tariffs and observe customs compliance rules.'
  },
  {
    id: 61,
    category: 'Customs',
    question: 'What is duty drawback?',
    answer: 'A government rebate program refunding importing duties, internal taxes, and fees paid on inputs used to manufacture finished products that are subsequently exported.'
  },
  {
    id: 62,
    category: 'Customs',
    question: 'What are preferential duty rates?',
    answer: 'Slashed customs duty rates applied to imports originating from specific nations linked by Bilateral, Multilateral, or Free Trade Agreements.'
  },
  {
    id: 63,
    category: 'Customs',
    question: 'What is the WCO?',
    answer: 'The World Customs Organization (WCO), an independent intergovernmental organization that develops and manages the global Harmonized System (HS) product codes.'
  },

  // LOGISTICS (12)
  {
    id: 64,
    category: 'Logistics',
    question: 'What is the physical difference between FCL and LCL?',
    answer: 'FCL (Full Container Load) involves leasing an entire container for a single exporter\'s goods. LCL (Less than Container Load) consolidates multiple smaller cargo lots into one container, splitting the transport costs.'
  },
  {
    id: 65,
    category: 'Logistics',
    question: 'What are the dimensions of a standard 20-foot container?',
    answer: 'A standard 20ft dry cargo container measures approx. 5.90m Long x 2.35m Wide x 2.39m High, with an internal loading capacity of around 33 cubic meters (CBM).'
  },
  {
    id: 66,
    category: 'Logistics',
    question: 'What is a "Reefer" container?',
    answer: 'A temperature-controlled refrigerated shipping container used to move climate-sensitive items like fruits, meats, seafood, vaccines, or chemicals.'
  },
  {
    id: 67,
    category: 'Logistics',
    question: 'What is a freight forwarder?',
    answer: 'A third-party logistics (3PL) firm that acts as an travel manager, booking vessel space, coordinating truckers, managing warehouse consolidation, and arranging global cargo transits.'
  },
  {
    id: 68,
    category: 'Logistics',
    question: 'What is demurrage, and how do I avoid it?',
    answer: 'Demurrage represents port cargo penalties charged for keeping containers idle inside the harbor past the allowable free days. Avoid it by preparing customs documentation pre-arrival for immediate clearing.'
  },
  {
    id: 69,
    category: 'Logistics',
    question: 'What is container detention?',
    answer: 'A penalty fee charged by the container line when the importer fails to return the empty sea container to the depot past the permitted time.'
  },
  {
    id: 70,
    category: 'Logistics',
    question: 'What is TEU in shipping lanes?',
    answer: 'TEU stands for "Twenty-foot Equivalent Unit", representing the standard volume unit of one 20ft shipping container, used to gauge vessel capacities.'
  },
  {
    id: 71,
    category: 'Logistics',
    question: 'What is a "Flat Rack" container used for?',
    answer: 'A flat rack has no side walls or roof, ideal for shipping oversized machinery, yachts, trucks, or structural steel parts.'
  },
  {
    id: 72,
    category: 'Logistics',
    question: 'What are Terminal Handling Charges (THC)?',
    answer: 'Fees gathered by port authorities for the heavy crane and labor work needed to lift containers from ship decks to dock yards and vice versa.'
  },
  {
    id: 73,
    category: 'Logistics',
    question: 'What is multimodal transport?',
    answer: 'Moving cargo from origin to destination using multiple transport modes (truck, rail, ship, aircraft) under a single legal bill of lading.'
  },
  {
    id: 74,
    category: 'Logistics',
    question: 'What is sea-air shipping?',
    answer: 'An intermediate multimodal transportation system combining slow maritime transport for part of the route with fast air shipping to balance speed and price.'
  },
  {
    id: 75,
    category: 'Logistics',
    question: 'How is volumetric weight calculated in air cargo?',
    answer: 'Air cargo uses volumetric calculation: (Length x Width x Height in cm) / 5000 = Volume weight in kgs. Airlines bill based on whichever is greater: actual weight or volume weight.'
  },

  // SOURCING (13)
  {
    id: 76,
    category: 'Sourcing',
    question: 'How do I locate verified buyers for my export goods?',
    answer: 'Connect with target buyers via sector-centric Export Promotion Councils, browse verified importer profiles on ITC Trade Map, maintain active B2B portal accounts, search Bill of Lading databases, and conduct outbound LinkedIn outreach.'
  },
  {
    id: 77,
    category: 'Sourcing',
    question: 'What are B2B portals, and list some prominent ones?',
    answer: 'B2B directories match trade buyers with overseas factories. Leaders include Alibaba, Global Sources, ThomasNet, Tradewheel, and IndiaMART.'
  },
  {
    id: 78,
    category: 'Sourcing',
    question: 'How do I evaluate if a supplier is reliable?',
    answer: 'Validate business licenses, test physical product samples, commission independent on-site factory quality audits (SGS), and refrain from sending 100% advance wire payments.'
  },
  {
    id: 79,
    category: 'Sourcing',
    question: 'What serves as an Export Promotion Council (EPC)?',
    answer: 'Government-supported clubs focused on individual commodity classes (textiles, steel, engineering). They offer export grants, issue RCMC certificates, and introduce members to verified buyers.'
  },
  {
    id: 80,
    category: 'Sourcing',
    question: 'What is the significance of the Canton Fair?',
    answer: 'The world\'s largest industrial supplier fair held bi-annually in Guangzhou, China. It is the gold standard for physical product exploration.'
  },
  {
    id: 81,
    category: 'Sourcing',
    question: 'What is "sourcing agent" and when should I hire one?',
    answer: 'A local on-the-ground agent inside supplier territories who speaks the language, inspects production quality, manages transport, and checks export compliance.'
  },
  {
    id: 82,
    category: 'Sourcing',
    question: 'What is an OEM (Original Equipment Manufacturer)?',
    answer: 'A factory that manufactures components designed and patented by the buying company, packaged according to custom brand specs.'
  },
  {
    id: 83,
    category: 'Sourcing',
    question: 'What is ODM (Original Design Manufacturer)?',
    answer: 'A supplier that designs and manufactures generic products, allowing importers to simply apply their own private cosmetic logo and brand wrap.'
  },
  {
    id: 84,
    category: 'Sourcing',
    question: 'How do I request a quote from an overseas factory?',
    answer: 'Draft an email detailing exact product materials, density, dimensions, packing preferences, estimated annual volume, and request separate FOB or CIF price quotes.'
  },
  {
    id: 85,
    category: 'Sourcing',
    question: 'What is MOQ in sourcing?',
    answer: 'MOQ stands for "Minimum Order Quantity", the smallest volume of goods a factory requires to boot up a manufacturing cycle.'
  },
  {
    id: 86,
    category: 'Sourcing',
    question: 'Why should I seek multiple supplier backups?',
    answer: 'Relying on a single factory risks product halts if they face energy limits, labor strikes, raw material spikes, or financial bankruptcies.'
  },
  {
    id: 87,
    category: 'Sourcing',
    question: 'What is supplier lead time?',
    answer: 'The total duration from the day the purchase deposit is confirmed, through manufacturing, testing, to loading items onto trucks at origin.'
  },
  {
    id: 88,
    category: 'Sourcing',
    question: 'Is it safe to buy stock lots for export?',
    answer: 'Stock lots are deeply discounted surplus wares. Great for cost margins, but carry risks of sizing ratios, off-spec fabrics, or minor dye defects.'
  },

  // RISK & LEGAL (13)
  {
    id: 89,
    category: 'Risk & Legal',
    question: 'What is cargo marine insurance, and is it necessary?',
    answer: 'Absolutely. Ocean transit exposes cargo to extreme storms, ship fires, or container drops. Marine insurance cushions exporters and importers against devastating financial wipeouts.'
  },
  {
    id: 90,
    category: 'Risk & Legal',
    question: 'What are currency hedging and forward contracts?',
    answer: 'Hedging locking in a specific conversion exchange rate with banks for future settlements, protecting exporters against sudden domestic currency appreciation.'
  },
  {
    id: 91,
    category: 'Risk & Legal',
    question: 'How do I handle international trade legal disputes?',
    answer: 'Incorporate an explicit "Arbitration Clause" in international contracts, designating standard dispute centers like SIAC (Singapore) or ICC to bypass costly foreign litigation.'
  },
  {
    id: 92,
    category: 'Risk & Legal',
    question: 'What is "General Average" in maritime law?',
    answer: 'A historical law specifying that if a ship suffers an emergency in transit and must jettison/save cargo, ALL cargo owners whose items were saved must share the financial loss of the lost items proportionally.'
  },
  {
    id: 93,
    category: 'Risk & Legal',
    question: 'What is export credit insurance?',
    answer: 'An insurance policy (provided by agencies like ECGC) that covers exporters against outstanding payment losses when foreign buyers default or undergo bankruptcy.'
  },
  {
    id: 94,
    category: 'Risk & Legal',
    question: 'What represent "dual-use goods" in trade?',
    answer: 'Raw chemicals, electronics, software, or machinery parts that have both commercial and military utility, requiring specialized defense export licenses.'
  },
  {
    id: 95,
    category: 'Risk & Legal',
    question: 'What is anti-bribery compliance in global operations?',
    answer: 'Traders must operate strictly in accordance with international laws like the US FCPA or UK Bribery Act, banning bribes to foreign port custom officers.'
  },
  {
    id: 96,
    category: 'Risk & Legal',
    question: 'What is trade IP infringement?',
    answer: 'Traders who import or export items infringing on established global trademarks, design patents, or copyrights risk border cargo destruction and severe lawsuits.'
  },
  {
    id: 97,
    category: 'Risk & Legal',
    question: 'What are political risks in trade lanes?',
    answer: 'Abrupt issues like regional war breakouts, port strikes, custom border lockouts, or government asset nationalizations that disrupt supply chains.'
  },
  {
    id: 98,
    category: 'Risk & Legal',
    question: 'What is force majeure in trade contracts?',
    answer: 'A contract clause releasing both exporters and importers from liability when acts of God (floods, wars, pandemic lockdowns) halt contract fulfillment.'
  },
  {
    id: 99,
    category: 'Risk & Legal',
    question: 'How do I verify if an overseas bank is reputable for an LC?',
    answer: 'Trade banks use ranking assets, or check their credit ratings via Moody\'s or Fitch to confirm they possesses sufficient reserves to honor documentary bills.'
  },
  {
    id: 100,
    category: 'Risk & Legal',
    question: 'What is a "blacklist certificate" or sanction screen?',
    answer: 'Compulsory compliance screening where shippers verify that neither the carrier vessel, buyer business, or intermediary banks are blacklisted on global OFAC lists.'
  },
  {
    id: 101,
    category: 'Risk & Legal',
    question: 'Why is standard cargo packaging quality legally required?',
    answer: 'Carriers and insurers have the right to refuse physical claim settlements if they prove damages resulted from unprofessional, inadequate packing configurations on the cargo pallets.'
  }
];
