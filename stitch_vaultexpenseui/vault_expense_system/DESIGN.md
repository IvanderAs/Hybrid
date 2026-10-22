---
name: Vault Expense System
colors:
  surface: '#0e141a'
  surface-dim: '#0e141a'
  surface-bright: '#343a40'
  surface-container-lowest: '#090f15'
  surface-container-low: '#161c22'
  surface-container: '#1a2026'
  surface-container-high: '#252b31'
  surface-container-highest: '#2f353c'
  on-surface: '#dde3eb'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dde3eb'
  inverse-on-surface: '#2b3138'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#44fb8a'
  on-secondary: '#003918'
  secondary-container: '#00de71'
  on-secondary-container: '#005c2b'
  tertiary: '#00e478'
  on-tertiary: '#003919'
  tertiary-container: '#00bb61'
  on-tertiary-container: '#00431f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#62ff96'
  secondary-fixed-dim: '#18e376'
  on-secondary-fixed: '#00210b'
  on-secondary-fixed-variant: '#005226'
  tertiary-fixed: '#60ff98'
  tertiary-fixed-dim: '#00e478'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#0e141a'
  on-background: '#dde3eb'
  surface-variant: '#2f353c'
typography:
  display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  metric-lg:
    fontFamily: JetBrains Mono
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.03em
  metric-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-compact: 0.5rem
  margin: 1rem
  margin-expanded: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system establishes an uncompromising, offline-first financial utility where privacy and tamper-evident data integrity are paramount. Built for privacy-conscious individuals and professionals who manage sensitive capital without cloud reliance, the interface projects absolute cryptographic stability, resilience, and operational clarity.

The visual style blends Utilitarian Minimalist Fintech with tactical cyber-vault aesthetics:
- **Zero-Cloud Reassurance:** The interface reinforces local encryption through disciplined data density, crisp structural division, and absolute visual certainty.
- **Utilitarian Balance:** Neutral structural surfaces eliminate decorative noise, prioritizing rapid financial logging, ledger inspection, and balance verification.
- **Tactical Precision:** Subtle glassmorphic depth, razor-thin structural borders, and sharp mechanical typography communicate a secure local database rather than a marketing-driven consumer app.

## Colors

The palette is engineered for low-light environments, high glanceability, and tactical security feedback.

- **Primary (`#10B981`):** The operational green indicator. Used for confirmed state badges, verified transaction receipts, primary action triggers, and positive cash flow metrics.
- **Secondary (`#05DF72`):** High-visibility signal green for active toggle states, encryption confirmations, and active data visualization nodes.
- **Tertiary (`#00FF87`):** Pure telemetry accent reserved for micro-accents, sparkline peaks, focus rings, and real-time ledger write operations.
- **Neutral Core (`#12181E`):** Deep charcoal foundational surface. Layered with `#0B0F12` for root canvas views, `#1E2630` for structural containers, and `#26323E` for interactive elements.
- **Borders & Dividers:** Defined by `#2D3B48` to construct tight, clean boundaries between dense numeric ledger entries.
- **Semantic Signals:** Negative values or vault locks rely on strict amber (`#F59E0B`) and muted crimson (`#EF4444`), calibrated to match the luminosity of the primary emerald green.

## Typography

The dual-type strategy enforces structural discipline across the application:

- **Inter (Headlines & View Titles):** Delivers clean structural signposting, structural section headers, and prompt messages. It maintains low visual friction and guides scanning without competing with financial data.
- **JetBrains Mono (Ledger, Metrics & Data Tables):** Provides strict tabular alignment for currency values, timestamps, cryptographic hashes, category tags, and input fields. Digits do not shift horizontally during live calculation updates, ensuring visual stability during ledger entry.
- **Monospaced Utility Formatting:** All negative values, dates, and account identifiers strictly inherit JetBrains Mono with proportional line-height to guarantee compact vertical scanning in high-density transaction logs.

## Layout & Spacing

This design system uses a strict mobile-first fluid layout architecture backed by a 4px base increment grid:

- **Mobile Viewport Structure:** Primary interactions are aligned within single-column or dual-card split views. Default horizontal margins use `margin` (`1rem`) on phone displays, expanding to `margin-expanded` (`1.5rem`) on larger devices.
- **Grid Gutters:** Grid structures utilize `gutter` (`1rem`) for primary metric rows and ledger columns, compressing to `gutter-compact` (`0.5rem`) for compact key-value data matrices.
- **Component Rhythms:** Internal padding for cards, transaction lists, and quick-entry panels is pinned strictly to `space-md` (`0.75rem`) and `space-lg` (`1rem`) to keep vertical scrolling tight and reduce empty space.
- **Reflow & Responsive Adaptations:** On displays wider than 640px (tablets and desktops), data logs reflow into dual pane views: persistent ledger feed on the left (spanning 7 columns of a 12-column grid), with analytical sparklines and audit tools on the right (spanning 5 columns).

## Elevation & Depth

Visual hierarchy is constructed through structural tonal layering, crisp borders, and controlled frosted glass treatments rather than traditional diffuse drop shadows.

- **Base Canvas (`#0B0F12`):** The lowest layer, representing the encrypted storage core.
- **Tonal Layers:**
  - **Level 1 Container (`#12181E`):** Primary grouping surface for lists, segmented controls, and metric groupings. Bound by a solid 1px border of `#2D3B48`.
  - **Level 2 Container (`#1E2630`):** Elevated cards, inputs, and interactive line items. Bound by a 1px border of `#2D3B48` with a subtle 1px top highlight at 12% white opacity.
  - **Frosted Glass Utility Surfaces:** Quick-action floating entry bars, security confirmation sheets, and sticky header bars leverage `rgba(18, 24, 30, 0.75)` with `backdrop-filter: blur(16px)` and a subtle interior border outline of `rgba(45, 59, 72, 0.6)`.
- **Glow & Highlights:** Primary interactions (active record states, focused inputs) feature a focused 1px perimeter highlight in `#10B981` paired with a directional, zero-spread ambient glow of `0 0 12px rgba(16, 185, 129, 0.25)`.

## Shapes

The design system implements a controlled, soft mechanical shape hierarchy (`roundedness: 1`):

- **Micro Components (0.25rem / 4px):** Checkboxes, status dots, inline cryptographic hash tags, and numeric keypad buttons maintain compact corner radiuses to reinforce precision.
- **Standard Surfaces (0.5rem / 8px):** Transaction list items, form inputs, action sheets, and segmented filters.
- **Structural Groupings (0.75rem / 12px):** Top-level analytic cards, vault status overview panels, and persistent navigation containers.
- **Pill Exception:** Security status capsules (such as the `100% Local Encrypted` badge) use full rounded pill geometries to distinguish persistent system-state telemetry from actionable ledger items.

## Components

### Buttons & Quick Actions
- **Primary Action:** Solid `#10B981` background, `#0B0F12` heavy monospaced text, `0.25rem` radius, 1px `#00FF87` inner stroke. Pressed state shifts background to `#05DF72`.
- **Secondary Action:** Transparent base, `#26323E` background, 1px solid `#2D3B48` border, `#FFFFFF` JetBrains Mono text. On focus or hover, border shifts to `#10B981`.
- **Tactical Ghost Button:** No fill, 1px dashed `#2D3B48` border, used exclusively for discretionary transaction metadata additions (e.g., adding an encrypted note or split ledger split).

### Input Fields & Keypads
- Background: `#12181E` surface with a 1px `#2D3B48` stroke.
- Text: Large monospaced numeric input (`metric-lg`) rendered in high-contrast off-white (`#F9FAFB`).
- Currency indicator is anchored on the left in `#10B981`. Focus state transitions the border to `#10B981` with an interior glow.

### Category Chips & Security Badges
- **Status Pills (e.g., `100% LOCAL ENCRYPTED`):** Fully rounded pill, `rgba(16, 185, 129, 0.1)` background, 1px solid `rgba(16, 185, 129, 0.3)` border, accompanied by an active `#00FF87` micro-dot. Text uses `label-caps`.
- **Expense Category Chips:** `0.25rem` radius, `#1E2630` background, 1px `#2D3B48` border. When active, shifts to solid `#1E2630` with a persistent `#10B981` bottom indicator bar.

### Lists & Ledger Rows
- Contained within `#12181E` grouping panels with hairline `#2D3B48` dividers.
- Rows use `space-md` vertical padding. Timestamp and category label are aligned on the left (Inter header, JetBrains Mono sublabel); monospaced expense values (`body-lg`) are right-aligned. Negative outflows display `-` with `#F9FAFB`, and inward transfers display `+` in `#10B981`.

### Minimalist Sparklines & Analytical Cards
- Sparklines sit inside Level 1 containers (`#12181E`) with zero gridlines.
- Lines render with a 1.5px `#10B981` stroke fading into a vertical gradient fill of `rgba(16, 185, 129, 0.15)` to transparent.
- Peak and trough nodes are highlighted with crisp 3px `#00FF87` rectangular markers.

### Checkboxes & Toggle Switches
- Checkboxes: 16px square with 2px radius, `#1E2630` fill, `#2D3B48` border. Active state displays `#10B981` fill with an angled black checkmark.
- Toggles: Segmented track in `#12181E` with a 1px `#2D3B48` border; active thumb uses `#10B981` with immediate snap transitions (0.15s linear) reflecting zero-latency local operations.