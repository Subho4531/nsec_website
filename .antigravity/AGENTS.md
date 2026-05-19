### 1. Agent Team Alpha: The Data Extraction Core (Parallel Extractors)
**Objective:** Concurrently scrape, clean, and format faculty raw records and profile image paths into localized JSON stores.

* **Sub-Agent A1 (CSE & AIML Scraper):** Target `faculty_cse.php` and `faculty_aiml.php`. Extract: Name, Designation, Research Area, Experience, Email, and Profile Photo URL.
* **Sub-Agent A2 (Specialized Streams Scraper):** Discover and scrape sections for Cyber Security, Data Science, IoT, and AI & DS. 
* **Execution Rules:**
    * Do not overwrite existing working datasets.
    * Normalize names (e.g., "Dr. Piyali Chatterjee") and clean whitespace.
    * Map profile images to absolute source URLs or download them to `/public/assets/faculty/[dept]/`.
    * Output structure: `raw-stitch-code/data/[dept]_faculty.json`.

### 2. Agent Team Beta: Design System & Frontend Synchronization
**Objective:** Ensure complete theme continuity and spin up modular pages in parallel.

* **Sub-Agent B1 (Theme Token Guard):** Parse the existing working Stitch HTML/CSS or Next.js configurations (`tailwind.config.js`, global CSS, or styling modules). Extract exact font-families, color tokens (primary, secondary, accents), background fills, padding scales, and card styling.
* **Sub-Agent B2 (Parallel Component Architects):** Split into 4 parallel workers inside the Antigravity workspace to scaffold layout files:
    * *Worker B2-Aiml:* Generates `src/app/faculty/aiml/page.tsx`
    * *Worker B2-Cyber:* Generates `src/app/faculty/cyber-security/page.tsx`
    * *Worker B2-DataSci:* Generates `src/app/faculty/data-science/page.tsx`
    * *Worker B2-IoT:* Generates `src/app/faculty/iot/page.tsx`
    * *Worker B2-AIDS:* Generates `src/app/faculty/ai-ds/page.tsx`
* **Execution Rules:**
    * Use matching reusable React cards (`<FacultyCard />`) to preserve design harmony.
    * Incorporate native Next.js `<Image />` tags with structured image fallbacks for missing portraits.

### 3. Agent Team Gamma: QA Reviewer & Convergence Controller
**Objective:** Assemble the parallel streams and ensure production-grade consistency.

* **Sub-Agent C1 (Build & TypeScript Validator):** Review types for scraped data objects, resolve any implicit `any` issues, ensure grid responsiveness (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), and execute a local pre-build layout diagnostic.
* **Sub-Agent C2 (UI/UX Alignment Polisher):** Check rendered layouts across mobile, tablet, and desktop viewports, removing duplicated HTML leftovers, broken URLs, or typography drift.

---

## Standard Operating Procedure (SOP)

### Step 1: Bootstrap & Context Alignment
1. Mount this `agents.md` configuration in your workspace `.antigravity/` setup.
2. Initialize target layout directories: `src/app/faculty/` and raw workspace directory: `raw-stitch-code/data/`.

### Step 2: Parallel Scraping Launch (Phase 1)
Execute the data collectors in parallel. 
* **Command Prompt to Agent Manager:** > `"Spawn Team Alpha (Scrapers) in parallel. Target the NSEC faculty portals for CSE, AIML, Cyber Security, Data Science, IoT, and AI & DS. Generate structured JSON lists under raw-stitch-code/data/ and download profile pictures to public/assets/faculty/."`

### Step 3: Design Ingestion & Components Build (Phase 2)
* **Command Prompt to Agent Manager:**
    > `"Spawn Agent B1 (Theme Token Guard) to scan our existing Next.js dashboard/Stitch HTML for exact fonts, colors, and border themes. Once extracted, prompt the parallel B2 Component Architects to construct the individual stream pages using the JSON files produced by Team Alpha."`

### Step 4: Verification & Merging (Phase 3)
* **Command Prompt to Agent Manager:**
    > `"Activate Agent Team Gamma. Review the generated tsx files for TypeScript compliance and pixel-perfect design continuity. Produce the merge diffs in the Artifacts Panel for review."`

---

## Constraints & System Protections
* **Design Rigidity:** Never improvise brand-new colors or font stacks. If a font is missing, fall back to the project's exact stack.
* **Scraping Resilience:** If a specific sub-stream page layout changes on the live NSEC portal, fall back to parsing the text records safely and avoid breaking the scraper. Use clean placeholder avatars if a faculty portrait URL returns a 404.
"""

with open("agents.md", "w") as f:
    f.write(content)

print("agents.md generated successfully.")