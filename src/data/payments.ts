import { PaymentTermInfo } from '../types';

export const paymentsData: PaymentTermInfo[] = [
  {
    term: 'Advance Payment',
    fullName: 'Cash in Advance / Wire Transfer (Proforma/Prepayment)',
    description: 'The importer pays the seller the full invoice value prior to shipment. Wire transfer (T/T - Telegraphic Transfer) is typically used.',
    advantages: [
      'Zero financial default risk for the exporter.',
      'Exporter has secure immediate working capital to build custom components or source wholesale.',
      'Seller does not need to arrange complex bank finance collections.'
    ],
    risks: [
      'Highest risk profile for the importer, who has zero guarantee of receive cargo or its quality.',
      'Ties up buyer working capital for weeks before goods are imported.'
    ],
    bestUsage: 'Used for new business partnerships where credit scores are unknown, very small trial shipments, specialized custom fabrications, or high-demand seller-controlled commodity markets.',
    securityLevel: 'Very High for Seller'
  },
  {
    term: 'Sight LC',
    fullName: 'Sight Letter of Credit',
    description: 'The buyer\'s issuing bank guarantees payment to the exporter immediately upon presentation of complying shipping documents. Payment is processed "at sight" of conforming paperwork.',
    advantages: [
      'Very safe balance; exporter is guaranteed payment by a global bank rather than a private importer.',
      'Importer is guaranteed that payment is only made if the cargo is shipped correctly with conforming documents.'
    ],
    risks: [
      'Complex to prepare, high bank fees and administrative costs on both sides.',
      'Even minor clerical mismatches can trigger delays or payment holding warnings from banks.'
    ],
    bestUsage: 'Highly standard in major trade across Asia, Middle East, and Europe; crucial for bulk metals, textiles, raw chemicals, grain, and high-value machinery.',
    securityLevel: 'Very High for Seller'
  },
  {
    term: 'Usance LC',
    fullName: 'Usance / Deferred / Term Letter of Credit',
    description: 'Under Usance LC, the buyer\'s bank guarantees payment, but payment occurs at a designated future time matching agreed terms (e.g., 60, 90, or 180 days after the Bill of Lading date).',
    advantages: [
      'Allows the importer to receive, sell, and generate revenue from the goods prior to paying.',
      'Exporter retains secure bank guarantee security compared to open credit terms.'
    ],
    risks: [
      'Ties up the seller\'s credit line or cash flows unless they discount the usance draft with their local bank.',
      'Slightly higher interest fees or financing surcharges.'
    ],
    bestUsage: 'Used for large established supply chains where the buyer has high bargaining power and requires credit terms, but the seller wants bank-backed security against default.',
    securityLevel: 'Very High for Seller'
  },
  {
    term: 'D/P',
    fullName: 'Documents Against Payment (D/P) - Cash Against Documents',
    description: 'The seller ships the goods and forwards documents to their bank (remitting bank), which sends them to the buyer\'s bank (collecting bank). The buyer can only collect the documents (and take cargo title) after paying the invoice.',
    advantages: [
      'The buyer cannot clear and take physical ownership of the cargo without paying the bank first.',
      'More cost-effective and simpler than structuring a formal Letter of Credit.'
    ],
    risks: [
      'If the buyer experiences a business collapse or refuses the shipment, the cargo remains stuck at the destination docks. Exporter must pay return ocean cargo or salvage-sell it.',
      'Not secure if local destination ports release cargo via shipping agent collusions without the original BL.'
    ],
    bestUsage: 'Used for established ocean-shipping partnerships with stable, long-term creditworthiness, targeting destinations with robust maritime controls.',
    securityLevel: 'Moderate for Seller'
  },
  {
    term: 'D/A',
    fullName: 'Documents Against Acceptance (D/A) - Bill of Exchange',
    description: 'Similar to D/P, but the buyer collects the shipping documents after signing a binding note (Bill of Exchange or draft) promising to pay at a future specified date. The buyer gets the goods immediately on credit.',
    advantages: [
      'Highly flexible and buyer-friendly credit facility.',
      'Simplified credit signing process compared to usance letters.'
    ],
    risks: [
      'Extremely unsafe for the exporter. Once the buyer accepts the draft and takes the cargo, they might breach the promissory note, leaving the seller with no bank collateral.'
    ],
    bestUsage: 'Only recommended for trusted long-term corporate partners, sister companies, or when backed by comprehensive export credit insurance policies.',
    securityLevel: 'Low for Seller'
  },
  {
    term: 'Open Account',
    fullName: 'Open Account / Trade Credit',
    description: 'The exporter ships the goods and delivers them directly to the importer first. The importer is billed on terms such as Net 30, Net 60, or Net 90, matching regional domestic standards.',
    advantages: [
      'Minimum commercial transactional friction, encouraging volume growth.',
      'Maximum competitive advantage for the supplier over entities demanding prepayments.'
    ],
    risks: [
      'The ultimate risk of non-payment. If the importer files for bankruptcy or halts operations, the supplier will be a general unsecured creditor.'
    ],
    bestUsage: 'Standard for trade within integrated blocks (EU, USMCA), high-volume retail suppliers, and transactions between parent corporations and overseas subsidiaries.',
    securityLevel: 'Low for Seller'
  },
  {
    term: 'CAD',
    fullName: 'Cash Against Documents (CAD)',
    description: 'Often synonymous with D/P, CAD is a process where the buyer deposits cash with an escrow agent or bank in trust. Documents are presented and exchanged for the cash prior to the release of cargo.',
    advantages: [
      'Fast, simple, and secures transaction control compared to lengthy bank letters.',
      'Protects both exporter (against shipping without funds booked) and importer (pays for verified paper).'
    ],
    risks: [
      'Possibility of delays in regional agent coordination.',
      'Offers no protection against destination port delays resulting from missing quarantine paperwork.'
    ],
    bestUsage: 'Suitable for rapid bulk commodities, local regional trucking border crossings, and high-frequency trade lanes.',
    securityLevel: 'Balanced'
  }
];
