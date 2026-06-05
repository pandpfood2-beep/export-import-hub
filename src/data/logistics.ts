export interface ContainerType {
  type: string;
  dimensions: string;
  maxPayload: string;
  bestUsedFor: string;
}

export interface FreightCharge {
  component: string;
  meaning: string;
  description: string;
}

export const containerTypes: ContainerType[] = [
  {
    type: '20ft Standard Dry Container',
    dimensions: '5.90m x 2.35m x 2.39m (Volume: ~33.2 m³)',
    maxPayload: '25,000 KGS / 55,115 LBS',
    bestUsedFor: 'Dense bulk cargo, steel parts, paper rolls, machinery components, mineral bags.'
  },
  {
    type: '40ft Standard Dry Container',
    dimensions: '12.03m x 2.35m x 2.39m (Volume: ~67.7 m³)',
    maxPayload: '27,600 KGS / 60,850 LBS',
    bestUsedFor: 'Volumetric goods, consumer electronics, furniture crates, clothing textiles, packaged food.'
  },
  {
    type: '40ft High Cube Container (HC)',
    dimensions: '12.03m x 2.35m x 2.69m (Volume: ~76.4 m³)',
    maxPayload: '28,200 KGS / 62,170 LBS',
    bestUsedFor: 'Tall items, heavy machinery assemblies, maximizing ocean volume for light packaged retail goods.'
  },
  {
    type: '20ft / 40ft Reefer (Refrigerated)',
    dimensions: 'Temperature controlled from -30C to +30C',
    maxPayload: 'Varies by cooling engine specifications',
    bestUsedFor: 'Perishable goods, fresh fruit, vegetables, frozen seafood, meat, pharmaceuticals, flowers.'
  },
  {
    type: 'Open Top Container',
    dimensions: 'Removable heavy-duty tarpaulin roof',
    maxPayload: 'Heavy localized payload settings',
    bestUsedFor: 'Over-height cargo, oversized marble slabs, heavy raw steel plates loaded vertically.'
  },
  {
    type: 'Flat Rack Container',
    dimensions: 'No side walls, folding end frames',
    maxPayload: 'Up to 40,000 KGS for heavy structural steel',
    bestUsedFor: 'Over-width/over-length heavy machinery, yachts, military transports, prefabricated bridge blocks.'
  },
  {
    type: 'ISO Tank Container',
    dimensions: 'Stainless steel cylindrical tank inside a safety framework',
    maxPayload: 'Assessed based on specific gravity of liquid',
    bestUsedFor: 'Bulk hazardous/non-hazardous liquids, organic oils, edible spirits, chemical solvents, gases.'
  }
];

export const freightChargesList: FreightCharge[] = [
  {
    component: 'Ocean Freight Rate (O/F)',
    meaning: 'Base Sea Transport Fee',
    description: 'The core charge levied for moving a container from the origin port terminal to the destination port terminal.'
  },
  {
    component: 'BAF (Bunker Adjustment Factor)',
    meaning: 'Fuel Cost Surcharge',
    description: 'A floating levy added to offset unpredictable shifts in global crude oil and diesel fuel costs.'
  },
  {
    component: 'CAF (Currency Adjustment Factor)',
    meaning: 'Exchange Rate Cushion Surcharge',
    description: 'A fee designed to neutralize currency conversion risks between the ocean carrier\'s tariff pricing book and regional port currencies.'
  },
  {
    component: 'THC / OTHC / DTHC',
    meaning: 'Terminal Handling Charges',
    description: 'Fees billed by port operators in loading terminals (OTHC) and discharging ports (DTHC) for moving containers onto or off ships.'
  },
  {
    component: 'Dok / Documentation Fee',
    meaning: 'Administrative Bill Issuing Fee',
    description: 'A charge levied by the carrier or customs broker for compiling and registering the original Bill of Lading (BL) or cargo manifest.'
  },
  {
    component: 'IHC (Inland Haulage Charge)',
    meaning: 'Inland trucking / Rail fee',
    description: 'The freight cost computed for hauling a container from land-locked container freight stations (ICDs) to the ocean docks.'
  },
  {
    component: 'Demurrage & Detention',
    meaning: 'Overtime Container Use Surcharge',
    description: 'Demurrage: Fees paid for keeping containers idle inside port gates past free days. Detention: Fines charged for returning empty containers late.'
  }
];

export const logisticsModesData = {
  seaFreight: {
    advantages: ['Lowest unit transport cost over long routes.', 'Ideal for high-volume, massive, heavy shipments.', 'Highly standardized container setups (FCL/LCL).'],
    disadvantages: ['Slowest transit times (typically 15 to 45 days).', 'Higher risks of water corrosion, humidity, and port congestion.'],
    bestUsedFor: 'Heavy metals, agricultural bulk, automotive shipping, factory materials.'
  },
  airFreight: {
    advantages: ['Fastest transit speed (1 to 5 days globally).', 'Minimal warehouses, low insurance premiums, safe handling profiles.'],
    disadvantages: ['Highest freight expenses.', 'Strict payload weight limits, restricted for batteries, fuels, and hazardous substances.'],
    bestUsedFor: 'Sensitive semiconductors, diamonds, medical drugs, biological vaccines, fashion apparel.'
  },
  roadFreight: {
    advantages: ['Highly versatile door-to-door cargo delivery.', 'Easier regional scheduling without strict terminal slots.'],
    disadvantages: ['Vulnerable to border custom traffic, highway tolls, and weather bottlenecks.'],
    bestUsedFor: 'Cross-border commerce inside North America (USMCA), continental Europe, and East Asia.'
  },
  railFreight: {
    advantages: ['Fast cargo speed than ocean freight at a lower cost than air cargo.', 'Ecologically clean transport footprint for heavy assemblies.'],
    disadvantages: ['Rigid terminal stops, dependent on specific rail gauge compatibilities.'],
    bestUsedFor: 'Bulk overland trade across the Silk Road corridors (China to Europe transit lanes).'
  },
  fclVsLcl: {
    fclTitle: 'Full Container Load (FCL)',
    fclMeaning: 'An exporter leases the entire 20ft/40ft ocean container. Ideal for shipping volumes exceeding 15 m³. Highly secure as the container is sealed at source and opened only at the final warehouse node.',
    lclTitle: 'Less than Container Load (LCL)',
    lclMeaning: 'Exporters share a container with other companies, paying strictly based on cargo volume (CBM - Cubic Meter) or weight. Suitable for small shipments under 10 m³, but involves risk of damage at consolidated load stations (CFS).'
  }
};
