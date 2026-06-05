# Export Import Hub - Global Trade Reference Library

An interactive, educational, and reference hub for global trade operations. This bilingual application (English and Hindi) provides comprehensive instructions, interactive guides, tools, and dictionaries covering Incoterms 2020, customs clearance, shipping container classifications, product research, and international logistics.

---

## 🌎 Live Environments

- **Production Deployment Ready**: Structured specifically for immediate deployment on Git, GitHub Pages, Netlify, and Vercel.
- **Vite SPA Powered**: Highly efficient client-side bundle compiled with Tailwind CSS (V3/V4) and compiled with modern React state bindings.

---

## 🌟 Key Features

The Hub is divided into several highly-curated core modules:

### 1. 📊 Home Dashboard
- Real-time global trade indicators and metric widgets.
- Direct quick links to central tools.
- Bilingual news summaries and interactive system metrics.

### 2. 🎓 Academic Core Knowledge
- **Trade Basics**: Fundamental strategies, risks, and advantages of international trade.
- **Incoterms 2020 Rules**: Visually mapped delivery rules, liabilities, cost divisions, and risks between Buyer and Seller.
- **Documentation**: Standard certification requirements, certificates of origin, bills of lading, and packaging lists with purpose descriptions.
- **Payment & Finance**: Safe wiring procedures, telegraphic transfers, Letter of Credit (LC) rules, and escrow guides.
- **Banking & Forex**: Currency exchange hedging guides, SWIFT routing protocols, and international payment compliance.

### 3. 🚢 Borders & Freight Logistics
- **Customs & CHA**: Step-by-step processes for customs house agent booking, shipping bill filings, and cargo clearance.
- **Freight & Logistics**: Maritime, air freight, inland transport channels, and transit risk management.
- **HS Classification**: Clear search dictionary for Harmonized System (HS) Codes with categories and descriptions.
- **Container Specs**: Visual dimensions (length, width, payload, capacity) for 20FT, 40FT Dry Van, Reefer, High Cube, and Open Top containers.

### 4. 📈 Global Trade Strategies
- **Country Hub**: Detailed country profiles for exporting (rules, main ports, bilateral agreements, and customized trade suggestions).
- **Product Library**: Scientific classifications, packing rules, and market opportunities for Spices, Fruits, Vegetables, Dairy, Textiles, Handicrafts, and Engineering goods.
- **IEC Registration**: Fully comprehensive 4-step walkthrough for Importer-Exponent Code issuance with official checklist criteria.
- **Pricing Center**: Cost knowledge simulator mapping Inland Freight, Custom Broker fees, Marine Insurance, and Cargo Ocean Freight.
- **9-Step Export Process**: Beautiful step-by-step interactive workflow demonstrating exactly how a firm progresses from product design to final currency settlement.

### 5. 🛠 Interactives, Q&As & Reference Dictionaries
- **Action Checklists**: Fully interactive checkboxes ensuring compliance before launching any consignment.
- **Searchable Glossary**: Extensive term dictionary translating trade jargon (FOB, CIF, Letter of Credit, Bill of Lading) into quick-to-learn definitions.
- **101 FAQs Center**: Curated frequently answered operational queries indexed with text queries for immediate resolution.
- **Reference Center**: Quick resources, cheat sheets, and print layouts.

---

## 🛠 Installation & Local Development

Follow these steps to run the application locally on your machine:

### Prerequisites
- Node.js (version 18 or above recommended)
- npm (Node Package Manager)

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/export-import-hub.git
cd export-import-hub
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Dev Server
```bash
npm run dev
```
Open your browser to `http://localhost:3000` to preview.

### Step 4: Run Linter Checks
```bash
npm run lint
```

### Step 5: Compile Production Build
```bash
npm run build
```
The compiled output will reside in the `/dist` directory.

---

## 🚀 Deployment Instructions

### 1. Netlify Deployment (Recommended)
This repository includes a pre-configured `netlify.toml` file to streamline Netlify hosting.

#### **Option A: Netlify Git Integration (Automated)**
1. Host your project on GitHub, GitLab, or Bitbucket.
2. Go to the Netlify Dashboard, click **Add new site** -> **Import from Git**.
3. Choose your repository.
4. Set the following build parameters (configured automatically by `netlify.toml`):
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Deploy Site**.

#### **Option B: Netlify CLI**
```bash
npm run build
netlify deploy --dir=dist --prod
```

---

### 2. Vercel Deployment
This repository contains a `vercel.json` file designed to configure Single Page Routing seamlessly on Vercel.

#### **Option A: Vercel Dashboard**
1. Connect Vercel to your GitHub account.
2. Search and click **Import** on the project repository.
3. Keep default settings (Framework Preset is set as **Vite** or **Other**).
4. Click **Deploy**.

#### **Option B: Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

---

### 3. GitHub Pages Deployment
1. Install the `gh-pages` helper package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run the deploy pipeline:
   ```bash
   npm run deploy
   ```

---

## 📧 Support & Feedback

For updates, questions, and reference contributions, feel free to contact:
- **Email**: dm.eift01@gmail.com
- **Website Reference**: [Export Import Hub Library](https://exportimporthub.netlify.app/)
