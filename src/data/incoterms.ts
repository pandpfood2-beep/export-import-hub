import { IncotermInfo } from '../types';

export const incotermsData: IncotermInfo[] = [
  {
    code: 'EXW',
    name: 'Ex Works',
    meaning: 'Seller makes the goods available at their own premises (factory, warehouse).',
    definition: 'Under Ex Works, the seller has minimum obligation. The buyer bears all costs and risks involved in taking the goods from the seller\'s premises to the desired destination. The seller is not even responsible for loading the goods on the buyer\'s vehicle or clearing them for export.',
    sellerResponsibility: [
      'Provide goods, commercial invoice, and documentation as per contract.',
      'Package goods properly for safe transport.',
      'Make goods available at the agreed place and date (e.g., factory gate).'
    ],
    buyerResponsibility: [
      'Load goods onto the collecting vehicle at the seller\'s premises.',
      'Arrange and pay for pre-carriage, main carriage, and on-carriage transportation.',
      'Handle and pay for all export customs clearance, duties, and permits.',
      'Manage and pay for transit insurance.',
      'Manage import customs clearance, taxes, and terminal charges at destination.'
    ],
    riskTransfer: 'Transfers to the buyer immediately when goods are made available to the buyer at the seller\'s named place, prior to loading.',
    costResponsibility: 'Buyer pays for all transport, loading, duty, clearance, handling, and insurance costs starting from the seller\'s facility.',
    advantages: [
      'Maximum control over logistics costs and routing for the buyer.',
      'Zero logistics and clearance responsibilities for the seller.',
      'Ideal for buyers who can bundle freight or have a highly integrated regional network.'
    ],
    disadvantages: [
      'Buyer takes on severe liability including export customs in a foreign country.',
      'Seller might have difficulty obtaining proof of export for tax/VAT exemption records.',
      'Potential loading delays if buyer\'s local carrier arrives without suitable crane/manpower.'
    ],
    example: 'An automotive components factory in Munich, Germany sells 2 pallets of brass fittings to a distributor in New York under EXW Munich. The Munich factory simply wraps the pallets and places them in their dispatch area. The New York buyer hires a freight forwarder who sends a truck to Munich, loads the goods, clears German export customs, ships them via air freight to JFK, clears US customs, and delivers them to New York.',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'FCA',
    name: 'Free Carrier',
    meaning: 'Seller delivers goods to a named carrier or person chosen by the buyer, cleared for export.',
    definition: 'FCA is highly versatile. If delivery occurs at the seller\'s premises, the seller is responsible for loading. If delivery occurs anywhere else, the seller delivers the goods when they arrive on their transport, ready for unloading by the named carrier.',
    sellerResponsibility: [
      'Provide compliant goods and documents.',
      'Pack and mark goods for export.',
      'Clear goods for export, obtaining necessary licenses and export permits.',
      'Deliver goods to the buyer\'s specified carrier at the agreed location.',
      'Load the goods if the delivery point is the seller\'s own premises.'
    ],
    buyerResponsibility: [
      'Unload the goods at the delivery point (if outside the seller\'s premises).',
      'Arrange and pay for international main carriage.',
      'Assume all risks starting from the moment of delivery to the carrier.',
      'Handle and pay for destination import clearance, duties, and local transport.'
    ],
    riskTransfer: 'Transfers to the buyer once the goods are delivered to the nominated carrier or first collection point specified, cleared of export customs.',
    costResponsibility: 'Seller pays up to export clearance and delivery to the regional carrier. Buyer pays for all onward transportation, insurance, destination terminal fees, and duties.',
    advantages: [
      'Highly flexible, works for containerized ocean freight, air cargo, and multimodal shipping.',
      'Exporters clear customs safely in their own country (superior to EXW).',
      'Buyers control international freight rates and transit routes.'
    ],
    disadvantages: [
      'Requires precise communication regarding loading responsibilities when delivery is outside seller\'s facility.',
      'Buyer must coordinate container delivery timeline with local dispatchers.'
    ],
    example: 'A electronics exporter in Seoul, South Korea sells microchips to a buyer in Tilbury, UK under FCA Incheon Port. The Seoul exporter packages the chips, handles Korean export clearance, puts them onto their own truck, and delivers them to the terminal operator at Incheon Port. Once the port terminal takes receipt, risk shifts to the UK buyer.',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'CPT',
    name: 'Carriage Paid To',
    meaning: 'Seller pays for carriage to a named destination, but risk transfers when handed to the first carrier.',
    definition: 'Under CPT, the seller pays for the freight to transport goods to the named destination. However, the risk of loss or damage transfers from seller to buyer as soon as the goods are delivered into the custody of the first carrier.',
    sellerResponsibility: [
      'Arrange and pay for shipping cost to the named destination terminal/place.',
      'Clear goods for export.',
      'Deliver goods to the first carrier, at which point danger is transferred.'
    ],
    buyerResponsibility: [
      'Manage transit insurance (highly recommended since seller pays freight but has no transit risk).',
      'Pay destination terminal handling charges (THC) if not included in freight rate.',
      'Handle import customs clearance and pay import taxes/tariffs.'
    ],
    riskTransfer: 'Transfers to the buyer at the moment goods are handed over to the first carrier in the country of origin.',
    costResponsibility: 'Seller pays shipping freight to dest. port/terminal. Buyer pays for insurance, import clearance, duties, and local delivery from destination terminal.',
    advantages: [
      'Allows sellers to control the carrier choice while offloading transit risk very early.',
      'Ideal for containerized transport where cargo goes from warehouse to warehouse via intermediate hubs.'
    ],
    disadvantages: [
      'Buyer carries the transit risk without controlling the transit itinerary or carrier.',
      'Potential double billing or confusion regarding terminal handling charges at destination.'
    ],
    example: 'A timber mill in Quebec, Canada sells pre-cut boards to an importer in Tokyo under CPT Tokyo container yard. The seller pays to truck the lumber to Montreal and pays the marine freight line to Tokyo. However, once the container is loaded onto the train/truck of the first carrier in Quebec, risk shifts to the Tokyo buyer.',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'CIP',
    name: 'Carriage and Insurance Paid To',
    meaning: 'Seller pays cargo freight and high-level insurance coverage to a named destination; risk transfers at first carrier.',
    definition: 'CIP requires the seller to pay the freight and also arrange for maximum insurance coverage matching Institute Cargo Clauses (A) or similar, protecting the buyer\'s risk during transit.',
    sellerResponsibility: [
      'Clear export customs, pay all export expenses.',
      'Pay freight up to the named destination.',
      'Obtain and pay for comprehensive global transit insurance (110% of contract value).'
    ],
    buyerResponsibility: [
      'Handle import customs clearance.',
      'Acknowledge that risk has shifted once goods reached the initial carrier in the origin state.',
      'Pay import taxes and inland transport from destination terminal.'
    ],
    riskTransfer: 'Transfers to the buyer once the goods are handed to the first carrier. However, the buyer is protected by the seller-funded transit insurance.',
    costResponsibility: 'Seller pays transport and all-risk insurance to named destination. Buyer handles import clearance, duty, and local distribution.',
    advantages: [
      'Buyer is relieved of booking transit insurance while seller handles the premium.',
      'Provides the highest default insurance mandate among standard Incoterms.'
    ],
    disadvantages: [
      'High freight/insurance markups by the seller can increase overall landed cost.',
      'Claims processing can be complex across different national jurisdictions.'
    ],
    example: 'A pharmaceutical laboratory in Basel, Switzerland sells vaccines to a health department in Toronto under CIP Toronto Airport. The Swiss seller books climate-controlled air transit, pays Basel-to-Toronto freight, and secures a 110% all-risk policy. The Swiss exporter loads the container onto the local carrier, shifting risk to the buyer (who is covered by the Basel-purchased insurance policy).',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'DAP',
    name: 'Delivered At Place',
    meaning: 'Seller delivers when goods are placed at the buyer\'s disposal on the arriving transport, ready for unloading.',
    definition: 'Under DAP, the seller pays for transport and carries all risks to the specific named location, but does not unload the cargo and does not clear it for import customs.',
    sellerResponsibility: [
      'Bear all risks and costs to deliver goods to the exact named destination.',
      'Provide documents enabling the buyer to take receipt.',
      'Clear export customs.'
    ],
    buyerResponsibility: [
      'Unload the goods from the arriving vehicle at the named destination.',
      'Perform import customs clearance and pay import taxes/VAT.'
    ],
    riskTransfer: 'Transfers to the buyer upon delivery of goods on the arriving transport vehicle, ready for unloading at the named place of destination.',
    costResponsibility: 'Seller handles all transport and risks to the site. Buyer pays for unloading equipment/labor, customs duty clearance, and import taxes.',
    advantages: [
      'Extremely safe and attractive for the buyer, who only clears customs once goods are physically present in their country.',
      'Clear definition of delivery and risk.'
    ],
    disadvantages: [
      'Seller can face severe demurrage or port storage charges if the buyer fails to clear import customs in a timely manner.'
    ],
    example: 'A furniture builder in Warsaw, Poland sells custom hotel desks to a resort in Lyon, France under DAP Lyon Resort. The Polish builder hires a flatbed trailer, loads the desks, clears Polish customs, drives through Europe, and arrives at the hotel gate in Lyon. The hotel staff uses their own forklift to unload the desks from the trailer. The French hotel also handles the tax/VAT processes.',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'DPU',
    name: 'Delivered at Place Unloaded',
    meaning: 'Seller delivers and unloads goods at the named destination, bearing all risks and costs.',
    definition: 'Introduced in Incoterms 2020 (replacing DAT), DPU requires the seller to unload the cargo from the arriving vehicle. This is the only Incoterm where the seller is responsible for unloading at destination.',
    sellerResponsibility: [
      'Arrange and pay for all transport and export customs clearance.',
      'Unload the goods from the arriving shipping container or vehicle at the named terminal or site.',
      'Assume all risks up to the point of unloading at destination.'
    ],
    buyerResponsibility: [
      'Arrange and pay for import customs clearance and duties.',
      'Receive the unloaded goods from the terminal and handle on-carriage.'
    ],
    riskTransfer: 'Transfers to the buyer once the goods are successfully unloaded by the seller at the named destination place.',
    costResponsibility: 'Seller pays for all freight, handling, and unloading. Buyer pays for import clearance, tariffs, and onward transport from destination node.',
    advantages: [
      'Ultimate peace of mind for buyers who lack unloading equipment at their local terminal/warehouse.'
    ],
    disadvantages: [
      'Seller must have local terminal contacts or specialized contractors at destination capable of performing safe unloading.'
    ],
    example: 'A heavy machinery manufacturer in Osaka, Japan sells an industrial press to a factory in Antwerp, Belgium under DPU Antwerp Port. The Japanese company books shipping, clears Japanese export customs, ships the steel press to Antwerp, and hires local heavy-lift crane specialists to unload the machine onto the Belgian dock. Once unloaded on the dock, risk transfers to the Belgian buyer.',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'DDP',
    name: 'Delivered Duty Paid',
    meaning: 'Seller delivers goods cleared for import with all taxes, duties, and logistics costs paid, ready for unloading.',
    definition: 'DDP represents maximum obligation for the seller. The seller clears export customs, handles international transit, clears import customs in the destination country, pays all import duties/tariffs and VAT, and delivers goods to the buyer\'s designated site ready for unloading.',
    sellerResponsibility: [
      'Deliver goods to the named destination cleared for import.',
      'Pay all international freight, local pre-carriage, and on-carriage costs.',
      'Pay all export and import customs duties, clearance paperwork fees, and local VAT/GST.'
    ],
    buyerResponsibility: [
      'Provide critical import license numbers or local business authorization codes to the seller if required.',
      'Unload the goods from the arriving shipping truck at their final warehouse.'
    ],
    riskTransfer: 'Transfers to the buyer when goods are placed at their disposal on the arriving vehicle, fully cleared for import, at the final named destination.',
    costResponsibility: 'Seller pays for absolutely every cost excluding destination unloading fee.',
    advantages: [
      'Zero logistics, duty, or tax hassle for the buyer. Ideal for e-commerce and retail supply chains.'
    ],
    disadvantages: [
      'Heavy liability on seller, who must register for taxable imports in foreign nations or hire a local customs broker inside the buyer\'s country.'
    ],
    example: 'An artisanal winery in Mendoza, Argentina sells premium wines to a corporate boutique in Madrid, Spain under DDP Madrid Boutique. The winery contracts an international carrier, handles Argentine customs, pays ocean cargo, handles Spanish customs clearance, pays all Spanish import tax duties and VAT, and trucks the wine cases directly to the store checkout in Madrid. The boutique staff receives and carries the boxes inside.',
    transportMode: 'Any Transport Mode'
  },
  {
    code: 'FAS',
    name: 'Free Alongside Ship',
    meaning: 'Seller delivers when goods are placed alongside the vessel nominated by the buyer at the named port.',
    definition: 'FAS is reserved for bulk water transport (e.g., coal, grain, oil, or large project cargo). The seller delivers the goods when they are placed on the quay or in barges next to the ship.',
    sellerResponsibility: [
      'Pack goods and clear them for export.',
      'Deliver goods alongside the vessel scheduled by the buyer at the designated port terminal.'
    ],
    buyerResponsibility: [
      'Arrange and pay for main vessel loading, sea freight cargo, and transit insurance.',
      'Bear all risks from the moment goods are resting on the dock alongside the ship.'
    ],
    riskTransfer: 'Transfers to the buyer once the goods are positioned on the dock or barge next to the designated vessel at the specified port of shipment.',
    costResponsibility: 'Seller pays for local land transport and export clearance. Buyer pays ship loading charges, ocean cargo, insurance, and destination costs.',
    advantages: [
      'Excellent for bulk industrial materials where loading on-board is contracted directly by the charterer.'
    ],
    disadvantages: [
      'Not suitable for standard containerized freight (containers should use FCA instead).'
    ],
    example: 'An agricultural co-op in Porto Alegre, Brazil sells 50,000 metric tons of soybeans to a trading firm under FAS Port of Rio Grande. The Brazilian seller trains/trucks the grain to the port quay right beside the bulk vessel. Once the soybean piles are resting on the dock beneath the vessel loading arm, responsibilities shift entirely to the buyer.',
    transportMode: 'Sea/Inland Waterway Only'
  },
  {
    code: 'FOB',
    name: 'Free On Board',
    meaning: 'Seller delivers when goods are loaded securely on board the vessel nominated by the buyer at the port of shipment.',
    definition: 'One of the most famous classical shipping terms. Under FOB, the seller clears the goods for export and ensures they are safely placed on board the vessel. Only maritime transit is permitted.',
    sellerResponsibility: [
      'Transport goods to the port of origin and clear export customs.',
      'Load the goods onto the ship nominated by the buyer.'
    ],
    buyerResponsibility: [
      'Finance and book global marine shipping cargo.',
      'Bear all risks once the goods are securely placed "on board" the vessel.'
    ],
    riskTransfer: 'Transfers to the buyer when the goods are fully on board the ship deck in the port of export.',
    costResponsibility: 'Seller pays regional transport, export clearance, and port loading fees. Buyer pays ocean shipping freight, transit insurance, and all import charges.',
    advantages: [
      'Sellers deal with local rules; buyers secure deep-sea shipping rates and retain cargo control.'
    ],
    disadvantages: [
      'Frequently misused for containerized shipments (which should use FCA), causing risk verification issues if damage occurs inside port yards.'
    ],
    example: 'A marble quarry in Carrara, Italy sells cut stone blocks to a builder in Dubai, UAE under FOB Port of La Spezia. The Italian exporter loads the heavy stone blocks onto a container ship at La Spezia port. Once the blocks are locked inside the ship hold, risk passes to the Dubai buyer.',
    transportMode: 'Sea/Inland Waterway Only'
  },
  {
    code: 'CFR',
    name: 'Cost and Freight',
    meaning: 'Seller pays transport freight to the named port of destination, but risk transfers when loaded on board in origin.',
    definition: 'CFR requires the seller to organize and pay for the ocean shipping freight to destination. However, the seller is not responsible for transit insurance, and risk transfers once the cargo is loaded onto the ship in origin.',
    sellerResponsibility: [
      'Arrange and pay for ocean transport to the destination port.',
      'Deliver goods on board the shipping vessel in origin, cleared for export.'
    ],
    buyerResponsibility: [
      'Purchase cargo transit insurance.',
      'Handle port unloading, import clearance, custom duties, and on-carriage.'
    ],
    riskTransfer: 'Transfers to the buyer as soon as the goods are placed on board the vessel in the port of origin, despite seller paying freight.',
    costResponsibility: 'Seller pays export clearance and sea freight. Buyer pays ocean transit insurance, destination port handlings, and import fees.',
    advantages: [
      'Attractive to buyers who have a master corporate marine insurance scheme and want the supplier to manage vessel dispatch.'
    ],
    disadvantages: [
      'Cannot be used for container cargo reliably where container stack terminals are used (use CPT instead).'
    ],
    example: 'A steel mill in steel-producing Tianjin, China sells rebar to a contractor in Manila under CFR Port of Manila. The Chinese supplier handles Chinese export, loads the rebar onto the vessel, and pays the sea freight. When the rebar crosses the ship rail in Tianjin, the Manila buyer assumes all transit risks (secured under their own insurance) and is responsible for unloading in Manila.',
    transportMode: 'Sea/Inland Waterway Only'
  },
  {
    code: 'CIF',
    name: 'Cost, Insurance and Freight',
    meaning: 'Seller pays freight and cargo insurance to the named port of destination; risk transfers when loaded on board in origin.',
    definition: 'CIF is similar to CFR, but requires the seller to purchase marine insurance. Under Incoterms 2020, CIF requires only minimum insurance coverage (Institute Cargo Clauses C), unlike CIP which requires maximum (A) level.',
    sellerResponsibility: [
      'Deliver goods on board the export vessel and clear export.',
      'Pay ocean freight to the destination port.',
      'Purchase marine insurance (default Clause C) protecting the buyer in transit.'
    ],
    buyerResponsibility: [
      'Clear import customs, pay VAT/tariffs.',
      'Handle destination port unloading, container handling, and terminal charges.'
    ],
    riskTransfer: 'Transfers to the buyer when the goods are loaded on board the vessel in the export port. Buyer is backed by the seller-funded marine insurance.',
    costResponsibility: 'Seller pays freight and basic cargo insurance. Buyer pays import duties, local taxes, port unloading, and final trucking.',
    advantages: [
      'Crucial for commodity trading. Safe and standard for bulk minerals, coal, grains, and raw metals.'
    ],
    disadvantages: [
      'Basic Clause C insurance might be insufficient for sensitive or high-value items, requiring additional top-up policies.'
    ],
    example: 'A coffee exporter in Santos, Brazil sells raw coffee beans to a roaster in Hamburg under CIF Hamburg. The exporter secures the vessel, clears Brazilian customs, wraps the sacks, buys maritime transport insurance (covering up to Hamburg port), and loads the ship. Once the coffee sacks pass the ship rail, risk shifts to Hamburg, under protection of the Brazilian insurance policy.',
    transportMode: 'Sea/Inland Waterway Only'
  }
];
