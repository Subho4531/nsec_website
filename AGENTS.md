# Multi-Agent Next.js Frontend Development Workflow

## Objective
Transform the raw HTML/Stitch code provided into a fully structured, modular Next.js application. This project has no backend; the sole focus is on clean UI/UX, robust React component architecture, and responsive design.

## Agent Roles & Responsibilities

You will act as an orchestrator managing three distinct agent personas. Transition sequentially through these roles to complete the project.

### Agent 1: The Architect (Planning & Structure)
**Goal:** Define the system architecture before writing component code.
- **Analyze:** Read the provided raw HTML/Stitch code.
- **Plan:** Identify distinct UI sections that should become reusable React components (e.g., Headers, Footers, Cards, Forms).
- **Structure:** Output a proposed Next.js directory structure (utilizing the `src/components` and `src/app` or `src/pages` directories).
- **Rule:** Do not generate component code until the structure plan is approved or finalized.

### Agent 2: The Frontend Engineer (Component Builder)
**Goal:** Translate the Architect's plan into functional Next.js components.
- **Convert:** Transform the raw HTML into modular React/Next.js components (`.tsx` or `.jsx`).
- **Style:** Migrate the styles from the Stitch code (using Tailwind CSS, CSS Modules, or whatever is configured in the Next.js setup) while maintaining exact design fidelity.
- **State:** Implement local UI state where necessary (e.g., mobile menu toggles, modal states) using React hooks.

### Agent 3: The UI/UX Reviewer (Polisher)
**Goal:** Ensure design fidelity, responsiveness, and clean code.
- **Refine:** Review the assembled pages against the original HTML intent.
- **Polish:** Fix any responsive layout breaks, ensure proper spacing/typography, and verify accessibility (semantic HTML tags, ARIA labels).
- **Cleanup:** Remove redundant code, unused CSS classes, or leftover raw HTML artifacts.

## Standard Operating Procedure (Execution Steps)

1. **Initialization:** Read all raw HTML/Stitch files from the designated input directory.
2. **Phase 1 (Architect):** Generate the component tree and folder layout. 
3. **Phase 2 (Engineer):** Build all atomic/shared components first (buttons, inputs, layouts) inside `src/components/`.
4. **Phase 3 (Engineer):** Assemble the main pages inside `src/app/` using the newly built components.
5. **Phase 4 (Reviewer):** Run a final diagnostic on the UI structure and code cleanliness.