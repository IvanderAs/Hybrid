---
name: Serene Obsidian & Sage Archiver
colors:
  surface: '#0f1419'
  surface-dim: '#0f1419'
  surface-bright: '#353a3f'
  surface-container-lowest: '#0a0f13'
  surface-container-low: '#171c21'
  surface-container: '#1b2025'
  surface-container-high: '#252a30'
  surface-container-highest: '#30353b'
  on-surface: '#dee3ea'
  on-surface-variant: '#bec9c1'
  inverse-surface: '#dee3ea'
  inverse-on-surface: '#2c3136'
  outline: '#88938c'
  outline-variant: '#3f4943'
  surface-tint: '#84d7b1'
  primary: '#84d7b1'
  on-primary: '#003826'
  primary-container: '#68ba96'
  on-primary-container: '#004832'
  inverse-primary: '#0b6c4d'
  secondary: '#d5c5a6'
  on-secondary: '#392f19'
  secondary-container: '#534830'
  on-secondary-container: '#c7b798'
  tertiary: '#b5cad4'
  on-tertiary: '#20333b'
  tertiary-container: '#99adb7'
  on-tertiary-container: '#2e414a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a0f4cc'
  primary-fixed-dim: '#84d7b1'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#005139'
  secondary-fixed: '#f2e0c0'
  secondary-fixed-dim: '#d5c5a6'
  on-secondary-fixed: '#231a07'
  on-secondary-fixed-variant: '#51452e'
  tertiary-fixed: '#d1e6f1'
  tertiary-fixed-dim: '#b5cad4'
  on-tertiary-fixed: '#0a1e26'
  on-tertiary-fixed-variant: '#364952'
  background: '#0f1419'
  on-background: '#dee3ea'
  surface-variant: '#30353b'
typography:
  display:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-numeric:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-tag:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system crafts an intentional, low-cognitive-load environment engineered for an offline-first financial recordkeeper. By shifting away from harsh terminal aesthetics and fluorescent neon glare, the experience is repositioned around quiet clarity, physical composure, and organic digital permanence.

### Emotional Disposition
- **Quiet Reassurance:** Conveys stability and total offline privacy without cold technical severity.
- **Visual Ease:** Designed specifically for prolonged evening ledger audits, receipt organizing, and zero-distraction bookkeeping.
- **Refined Materiality:** Balanced between soft tactile slate surfaces, gentle sage botanical undertones, and warm sand accents.

### Design Movement
- **Atmospheric Warm Minimalism:** Deep, low-fatigue slate backgrounds paired with soft micro-contrasts, understated tonal planes, and muted botanical green interactions that respect circadian rhythms.

## Colors
The palette abandons harsh #00FF66 terminal greens and pure #000000 blacks in favor of layered charcoal slates infused with low-saturation warm gray and eucalyptus.

### Palette Architecture
- **Primary (`#68BA96` - Muted Sage):** Used for focal action items, positive financial flows, active indicators, and confirmed states. Its soft luminance curve eliminates retina fatigue while preserving distinct interactive clarity.
- **Secondary (`#D8C7A8` - Warm Sand/Cream):** Introduces tactile human warmth for currency symbols, tagged metadata, totals, and selected dates.
- **Tertiary (`#889CA6` - Slate Fog):** Serves auxiliary roles such as inactive toggles, divider rules, secondary timestamps, and categorical metadata.
- **Neutral Surface Ecosystem:**
  - Base Ground: `#14171A`
  - Mid Layer (Cards, Shelves): `#1A1F24`
  - High Layer (Modals, Overlays, Input Fields): `#222930`
  - Border/Edge Tint: `#2E3740` (subtle low-energy boundary)
- **Typography & Content Shades:**
  - Primary Body/Numeric: `#E4E9EC` (diffused chalk white, devoid of blinding blue-white spikes)
  - Secondary/Labels: `#9AA6AE`
  - Diminished/Placeholder: `#67737C`

## Typography
Typographic rhythm balances humanistic warmth with tabular discipline.

- **Headings (Manrope):** Geometric yet approachable, featuring gentle geometric curves that counteract the clinical rigidity common in financial dashboards.
- **Narrative & Records (Hanken Grotesk):** Crisp neutral sans-serif with high vertical metrics that stays legible during extended low-light data entry.
- **Ledger Entries, Financial Metrics, Timestamps (JetBrains Mono):** Monospaced precision is isolated exclusively to currency figures, balance records, and status hashes to maintain columnar alignment without turning the interface into an unapproachable code terminal.

## Layout & Spacing
A fluid column system prioritizing clear separation of data without cluttering horizontal reading flow.

### Grid & Breakpoints
- **Mobile (< 768px):** 4-column layout, compact margins (`1rem`) to maximize scanning density for transaction lines, single-column stacked forms.
- **Tablet (768px - 1024px):** 8-column structure, `1.5rem` margins, split view between balance overview and scrollable entry archive.
- **Desktop (> 1024px):** 12-column layout anchored with a fixed secondary sidebar for local vault control and persistent audit summaries. Maximum readable width capped at `1280px`.

### Spacing Principles
All spacing follows a quiet 4px base increment. Generous padding around balance sheets reduces visual panic, while dense row items ensure users can effortlessly scan long lists of offline expense records.

## Elevation & Depth
Elevation is strictly conveyed through **tonal stratification and whisper-quiet outlines**, not dramatic dropshadows or neon under-glows.

### Hierarchy of Depth
- **Level 0 (Canvas Base):** `#14171A` background; absorbs light and anchors the field of view.
- **Level 1 (Card & Grouping Containers):** `#1A1F24` paired with an inner top hairline border (`rgba(255, 255, 255, 0.04)`) and a delicate framing border of `#262F38`.
- **Level 2 (Popovers, Filter Menus, Drawer Panels):** `#222930` floating over Level 1 with an ultra-soft ambient shadow: `0 8px 24px rgba(6, 8, 10, 0.35)`.
- **Level 3 (Interactive Floating Triggers & Quick Adds):** Modest elevation utilizing subtle sage-tinted ambient occlusion: `0 4px 16px rgba(104, 186, 150, 0.08)`.

## Shapes
A unified soft-rectangular geometry (`roundedness: 2`, `0.5rem` base) delivers a calm, organic finish that softens data-heavy tables.

- **Micro Elements (Chips, Checkboxes, Micro-tags):** `4px` (`space-xs`) radius to preserve structural integrity at small scale.
- **Standard Controls (Inputs, Action Buttons, Ledger Cells):** `8px` (`0.5rem`) balanced ergonomic curve.
- **Macro Containers (Vault Cards, Balance Summaries):** `16px` (`rounded-lg`) smooth exterior corners for a welcoming, contained look.

## Components

### Buttons
- **Primary Action (Log Expense, Confirm Sync):** Background `#68BA96` with deep obsidian text `#0E1412` for optimal day/night contrast. Transitions to `#57A382` on hover. Never use bright green drop-shadow glows.
- **Secondary (Export CSV, Clear Filters):** Surface `#222930` with border `1px solid #2E3740`, typography `#E4E9EC`. Hover switches border to `#68BA96` at 40% opacity.
- **Ghost/Tertiary:** No background; text `#889CA6` transitioning to `#E4E9EC` on hover.

### Inputs & Financial Entry Fields
- **Container:** Dark slate background `#181C20` framed with `#29323B`.
- **Focus State:** Transition border color to `#68BA96` with a soft outer ring: `box-shadow: 0 0 0 2px rgba(104, 186, 150, 0.15)`. No harsh neon halos.
- **Currency Prefix:** Tinted with Warm Sand `#D8C7A8` in `label-numeric` style to separate currency context from user input.

### Transaction Row / List Item
- **Layout:** High-density, horizontal alignment. Category icon embedded in a muted `#232B32` circle.
- **Typography:** Vendor and description in `body-md` (`#E4E9EC`), category in `body-sm` (`#9AA6AE`), and monetary values rendered in `label-numeric` right-aligned. Negative outflows use softened warm off-white, inflows/reimbursements use soft sage `#68BA96`.
- **Divider:** Subtle dotted or low-opacity hairline `rgba(255, 255, 255, 0.05)`.

### Chips & Offline Badges
- **Status Indicator (e.g., "Archived Locally", "Zero-Sync"):** Pill shape, background `rgba(104, 186, 150, 0.1)`, text `#68BA96`, paired with an un-pulsing 6px dot.
- **Category Chips:** Background `#1D232A`, border `1px solid #2A333D`, label in `#9AA6AE`.

### Checkboxes & Segmented Controls
- **Checkboxes:** Rounded `4px` box, stroke `#394450`. Checked state fills with `#68BA96` with an obsidian check glyph.
- **Segmented Time Filters (Today, 7D, 30D, Year):** Enclosed track `#14171A`. Selected tab shifts to `#222930` with an eased opacity transition, displaying `#E4E9EC` text.

### Vault Cards & Balance Boards
- **Container:** `#1A1F24` background, gentle `1px solid #262F38` edge. Includes a top-edge warm accent highlight if displaying key cumulative amounts or safety buffer reserves.