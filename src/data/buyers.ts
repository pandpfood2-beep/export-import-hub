export interface SourcingPortal {
  name: string;
  type: 'B2B Directory' | 'Government' | 'Trade Fair' | 'Council';
  description: string;
  urlHint: string;
}

export const buyerFindingGuide = {
  methods: [
    {
      channel: 'Export Promotion Councils (EPCs) & Commodity Boards',
      strategy: 'Register with local commodity councils (e.g., APEDA, EEPC, FIEO in India). They regularly publish buyer directories, organize trade delegations, and sponsor subsidized stalls at major foreign exhibitions.'
    },
    {
      channel: 'B2B Trade Portals & Directories',
      strategy: 'Maintain professional product listings on platforms like Alibaba, Global Sources, Tradewheel, ThomasNet, and Kompass. Highlight compliance certificates (ISO, FDA, Halal, CE) on your listing to increase inbound trust.'
    },
    {
      channel: 'Foreign Embassy Trade Reps',
      strategy: 'Exporters can contact the commercial division of embassies located in target markets. Request lists of licensed local importers, trade group contacts, or agricultural wholesalers.'
    },
    {
      channel: 'Import Bill of Lading Manifest Databases',
      strategy: 'Utilize specialized global cargo databases (e.g., ImportGenius, Panjiva, Volza) to inspect physical shipping manifests. These systems reveal exactly who is currently buying your product from other competitors, complete with volumes and frequencies.'
    },
    {
      channel: 'LinkedIn Sourcing outreach',
      strategy: 'Search for professional titles: "Sourcing Manager", "Procurement Director", "Category Buyer", or "Category Manager" in foreign retail chains. Connect directly, share product test reports, and propose custom pricing sheets.'
    }
  ],
  supplierEvaluation: [
    {
      step: 'Verify Official Registration & Physical Facility Address',
      details: 'Demand corporate licenses, capital structures, and verify their location coordinates on Google Maps to ensure it is a real factory and not a trading agent middleman.'
    },
    {
      step: 'Request Paid Product Samples',
      details: 'Never purchase bulk volumes without testing factory samples first. Evaluate finish quality, chemical compositions, and durability under standard stresses.'
    },
    {
      step: 'Schedule Factory Quality Audits',
      details: 'Appoint independent inspect agents (SGS, Bureau Veritas) to verify production capacity, ethical conditions, machinery status, and QA certifications on-site.'
    },
    {
      step: 'Negotiate Escrow/Safe Payment Terms',
      details: 'Avoid 100% advance wire transfers to unverified factories. Request standard 30% deposit with 70% paid against a copy of the clean Bill of Lading (verified via the carrier).'
    }
  ],
  majorSourcingPortals: [
    {
      name: 'Alibaba.com',
      type: 'B2B Directory',
      description: 'The world\'s largest B2B directory connecting global importers with Chinese and international fabricators.',
      urlHint: 'https://www.alibaba.com'
    },
    {
      name: 'GlobalSources.com',
      type: 'B2B Directory',
      description: 'Specializes in high-quality hardware, consumer electronics, and verified suppliers, offering deep vetting indexes.',
      urlHint: 'https://www.globalsources.com'
    },
    {
      name: 'TradeMap.org (ITC)',
      type: 'Government',
      description: 'The International Trade Centre\'s comprehensive portal showing historical custom statistics, tariff structures, and importer directories.',
      urlHint: 'https://www.trademap.org'
    },
    {
      name: 'Canton Fair (China Import and Export Fair)',
      type: 'Trade Fair',
      description: 'Held bi-annually in Guangzhou, it represents the absolute peak of global physical sourcing fairs across all industrial modules.',
      urlHint: 'https://www.cantonfair.org.cn'
    },
    {
      name: 'APEDA / EEPC / FIEO',
      type: 'Council',
      description: 'Prominent national Trade Promotion Councils assisting exporters with trade leads, certificates of membership, and international buyer lists.',
      urlHint: 'Official Government Export Portals'
    }
  ]
};
