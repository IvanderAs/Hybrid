---
name: Cryptographic Utility Ledger
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#505f76'
  on-tertiary: '#ffffff'
  tertiary-container: '#94a4bd'
  on-tertiary-container: '#2a3a4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an offline-first, cryptographic utility aesthetic tailored for privacy power-users, data sovereignists, and precision-driven personal finance tracking. The visual character merges utilitarian terminal clarity with the crisp polish of contemporary high-assurance software. 

The emotional signature is unyielding reliability, clinical transparency, and deliberate speed. Rather than using playful visual metaphors or cloud-synced social artifacts (such as user avatars or status feeds), the interface highlights cryptographic verification, deterministic calculations, and zero-leakage local storage.

The design movement fuses **Technical Minimalism** with **Industrial Utility**:
- **Monochrome Foundation:** Stark white workspaces layered with micro-tinted cool slate containers to construct architectural hierarchy.
- **Security Accents:** Electric, high-contrast emerald functioning as an unambiguous signal of integrity, encrypted state, and positive balance delta.
- **Precision Typography:** Monospaced and geometric type treatments engineered for zero ambiguity in financial figures and cryptographic hashes.

## Colors

The palette leverages a light-mode hierarchy engineered for high-contrast scannability under direct daylight and prolonged analytical sessions.

- **Primary (`#10B981` / `#059669`):** Represents verified states, authenticated entries, and positive financial trajectories. Interactive states shift downward to `#059669` for sustained contrast on pristine surfaces.
- **Secondary (`#0F172A`):** The grounding deep slate, utilized for primary numeric records, cryptographic headers, and authoritative controls.
- **Tertiary (`#64748B`):** Structural slate used for metadata, transaction hashes, field labels, and disabled states.
- **Neutral Canvas (`#FFFFFF` to `#F8FAFC` & `#F1F5F9`):** Creates an architectural tier system. Base layers utilize pure `#FFFFFF`, while segmented panels, side rails, and data dense modules rest on `#F8FAFC` and `#F1F5F9`.
- **Borders & Dividers (`#E2E8F0`):** Hairline demarcations separating sensitive ledger columns without visual weight.
- **Critical Alert (`#EF4444`):** Strict, unmuted warning state reserved exclusively for uncommitted offline changes, deletion of cryptographic keys, or reconciliation deficits.

## Typography

The type system blends the cold, calculated geometry of **Space Grotesk** with the neutral, low-friction legibility of **Geist**.

- **Space Grotesk:** Deployed across top-level balance readouts, primary headers, section designations, and monospace-styled metadata tags. Its structured, mechanical apertures convey architectural rigor and cryptographic authority.
- **Geist:** Handles dense transaction registries, data tables, inline ledger notes, and form controls. With neutral grotesque proportions and distinct character definitions, it prevents ambiguity between glyphs (e.g., `1`, `l`, `I`, `0`, `O`) vital for financial balances and private key exports.
- **Tabular Figures:** All numeric sequences, monetary values, timestamps, and hashes must use tabular figures (`font-variant-numeric: tabular-nums`) to preserve optical column alignment in vertical listings.

## Layout & Spacing

The layout is built around a deterministic 8px baseline grid designed to maximize local data density while preventing visual fatigue.

- **Grid Architecture:** 
  - **Desktop (1200px+):** 12-column structured grid with `1.5rem` (`24px`) gutters and `3rem` (`48px`) margins. The shell features a fixed technical side rail (280px) for hardware/offline status and quick ledger queries, paired with a dynamic central ledger pane.
  - **Tablet (768px - 1199px):** 8-column layout with `1rem` (`16px`) gutters and `2rem` (`32px`) margins. Side modules collapse into secondary tabs.
  - **Mobile (<768px):** 4-column layout with `1rem` (`16px`) gutters and `1rem` (`16px`) margins. Density remains high; non-essential cryptographic verification tags collapse into expandable row cards.
- **Spacing Cadence:** Element spacing strictly conforms to the four-tier scale (`space-xs` through `space-xl`). Compact elements (like key-value metadata pairs) leverage `space-xs` and `space-sm`, while semantic containers (like balance overview cards and action bars) employ `space-lg` and `space-xl`.

## Elevation & Depth

Visual hierarchy uses physical, tactile structure rather than diffuse multi-layered lighting. The system avoids floating illusionism in favor of structural clarity:

- **Border-First Architecture:** Primary containment is defined by a crisp 1px solid border (`#E2E8F0`). Containers do not rely on drop shadows alone to define boundary lines.
- **Tactile Micro-Shadows:** Surface depth is communicated via short, high-density ambient occlusion:
  - *Resting Card:* `0 1px 2px 0 rgba(15, 23, 42, 0.05)` combined with a 1px `#E2E8F0` border.
  - *Raised / Dropdown / Modal:* `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)` with a 1px `#CBD5E1` border.
  - *Elevated Action (Key Input / Focused Entity):* `0 0 0 2px #FFFFFF, 0 0 0 4px #10B981`.
- **Tonal Layering:** The viewport background is `#F8FAFC`. Active cards and transaction matrices step forward to `#FFFFFF`. Auxiliary side panels, code blocks, and ledger filters recede to `#F1F5F9`.

## Shapes

The design system maintains a refined, engineered edge profile using a base roundedness tier of `1` (Soft: `0.25rem` / `4px` base; `0.5rem` / `8px` for large containers; `0.75rem` / `12px` for focal surfaces).

- **Micro Components (Buttons, Inputs, Badges):** Standardized to `0.25rem` (`rounded`), echoing the precision of hardware security keys and terminals.
- **Containers (Cards, Dialogs, Ledger Rows):** Standardized to `0.5rem` (`rounded-lg`) to balance structural cohesion with modern software presentation.
- **Pill Elements:** Strictly prohibited for primary actions and cards. Pill-style radii are reserved solely for live verification status chips (e.g., `OFFLINE / LOCAL ENCRYPTED`) to communicate atomic system state.

## Components

### Buttons
- **Primary:** Background `#10B981`, foreground `#FFFFFF`, font `Geist` Medium 14px. On hover, background shifts to `#059669`. On press, slight micro-scale `98%` with no ambient blur changes.
- **Secondary / Utility:** Background `#FFFFFF`, border 1px solid `#E2E8F0`, foreground `#0F172A`. On hover, border color darkens to `#CBD5E1` and background switches to `#F8FAFC`.
- **Destructive:** Background `#FFFFFF`, border 1px solid `#FCA5A5`, foreground `#DC2626`. Hover shifts to background `#FEF2F2`.

### Chips & Badges
- **Status Chips:** Height 22px, padding `0 8px`, border-radius `9999px`, font `Space Grotesk` 11px uppercase with `0.06em` tracking.
- **Verified Offline Indicator:** Background `#ECFDF5`, border 1px solid `#A7F3D0`, foreground `#065F46`, featuring a pulsating 6px solid `#10B981` dot.
- **Tag / Category Chips:** Background `#F1F5F9`, border 1px solid `#E2E8F0`, foreground `#334155`, radius `4px`.

### Lists & Ledger Rows
- **List Layout:** Tabular rows, zero horizontal outer margin, separated by hairline `#E2E8F0` dividers.
- **Hover State:** Row background transitions to `#F8FAFC`.
- **Content Distribution:** Left-aligned transaction recipient and cryptographic stamp; right-aligned tabular currency value with directional color coding (`#059669` for inputs, `#0F172A` for expenses).

### Checkboxes & Radios
- **Geometry:** `16px` × `16px` with `4px` radius for checkboxes; full circle for radios.
- **State:** Unchecked has border 1px solid `#CBD5E1` and background `#FFFFFF`. Checked displays `#10B981` fill with an inset white micro-check icon.

### Input Fields
- **Container:** Height 40px, background `#FFFFFF`, border 1px solid `#CBD5E1`, radius `4px`, padding `0 12px`.
- **Typography:** `Geist` 14px regular. Placeholder color `#94A3B8`.
- **Focus:** Border shifts to `#10B981`, reinforced by a sharp `0 0 0 3px rgba(16, 185, 129, 0.15)` optical ring.

### Cards
- **Construction:** Background `#FFFFFF`, 1px solid `#E2E8F0` border, `8px` corner radius, inner padding `1.5rem` (`24px`).
- **Header:** Employs `Space Grotesk` 18px bold with an adjacent monospace status pill, separated by an internal subtle horizontal rule before the data body.

### Local Security Indicators (Domain Specific)
- **Database Encrypted Banner:** Persistent bottom-right anchored card (`#FFFFFF`, border `#E2E8F0`, subtle shadow). Displays local SQLite/Vault size, key derivation cycle stats, and un-synced queue status, affirming data sovereignty without cloud dependencies.