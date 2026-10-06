---
name: Zero-Sync
colors:
  surface: '#0d141a'
  surface-dim: '#0d141a'
  surface-bright: '#333a41'
  surface-container-lowest: '#080f15'
  surface-container-low: '#151c22'
  surface-container: '#192026'
  surface-container-high: '#242b31'
  surface-container-highest: '#2e363c'
  on-surface: '#dce3ec'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dce3ec'
  inverse-on-surface: '#2a3138'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#45dfa4'
  on-secondary: '#003825'
  secondary-container: '#00bd85'
  on-secondary-container: '#00452e'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#68fcbf'
  secondary-fixed-dim: '#45dfa4'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0d141a'
  on-background: '#dce3ec'
  surface-variant: '#2e363c'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-numeric-lg:
    fontFamily: JetBrains Mono
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  label-numeric-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  label-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-button:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-sm: 0.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system defines a zero-cloud, hardware-bound expense ledger and receipt vault. The design narrative expresses absolute client-side sovereignty: transactions and captured optical media never transit through third-party servers or telemetry pipelines. The aesthetic fuses military-grade cryptographic utility with high-end fintech tactility—dubbed "Encrypted Industrial Minimal."

The user experience evokes absolute security, mechanical precision, and latency-free speed. Every interaction feels instantaneous and local, leveraging device hardware rather than asynchronous cloud requests. Interfaces employ deep matte carbon, structural slate tiers, razor-sharp cyber-emerald indicators, and tactile micro-surfaces with inner bevel glows. Micro-interactions utilize physical spring dampening and high-contrast structural borders to establish an air-gapped, sovereign financial instrument optimized for one-handed 3-second rapid receipt capture.

## Colors

The palette is engineered specifically for deep OLED displays, preserving battery power during camera sessions while providing razor-sharp contrast under direct ambient lighting.

- **Background Canvas (`#0B0F12`):** Pure carbon void, serving as the base root layer.
- **Surface Elevation 1 (`#131A20`):** Recessed slate, used for container backgrounds, input trays, and list item bodies.
- **Surface Elevation 2 (`#1C242C`):** Raised interactive surface, applied to active receipt cards, sheets, and elevated overlays.
- **Titanium Structural Border (`#2A3642`):** Crisp, low-luminance divider line defining spatial boundaries without visual noise.
- **Primary Emerald (`#10B981`):** The primary signal color representing local write integrity, cryptographic verification, and successful commits.
- **Mint Accent (`#34D399`):** High-visibility companion tone used for interactive states, focused focus rings, and positive cash flow badges.
- **Dark Emerald Base (`#059669`):** Deep fill for active toggle states and primary button press feedback.
- **Tax & Audit Amber (`#F59E0B`):** Warning tone reserved for deductible tags, missing invoice metadata, and audit alerts.
- **Diagnostic Cyan (`#06B6D4`):** Hardware signal reserved for disk performance indicators, storage partition telemetry, and raw OCR bounding boxes.
- **Text & Contrast:** Primary text rests at `#F1F5F9`, muted metadata labels at `#64748B`, and inactive states at `#334155`.

## Typography

The typographic hierarchy establishes clear separation between structural labels, contextual descriptions, and financial telemetry:

1. **Brand & Section Headings (Plus Jakarta Sans):** Geometric, solid, and modern. Its clean ascenders and tight tracking impart structural confidence to screen titles and category aggregations.
2. **Contextual UI & Content (Inter):** Highly legible, neutral workhorse used across form labels, user notes, and merchant names, remaining unobtrusive.
3. **Tabular Numerals & Telemetry (JetBrains Mono):** Mandatory for monetary currencies, transaction timestamps, file system byte sizes, and local processing latencies (e.g., `0.04s local write`). The tabular figures prevent layout jumping during continuous calculation and state transitions.

## Layout & Spacing

The layout is built for native mobile ergonomics, prioritizing one-handed thumb interaction (the "Reach Zone") within bottom sheets, sticky bottom action anchors, and swipeable cards.

- **Grid Architecture:** 4-column layout on standard mobile screens (360px–428px) with a strict `1rem` (16px) margin and gutter. Content scales to an 8-column layout on foldable or tablet devices using `1.5rem` margins.
- **Rhythm & Gaps:** All spatial units obey a 4px/8px incremental grid. Elements such as transaction metadata rows, currency badges, and receipts use `space-xs` (4px) or `space-sm` (8px) gaps. Structural boundaries between distinct receipts and form blocks utilize `space-md` (16px) and `space-lg` (24px).
- **Reach & Safe Margins:** The primary shutter and capture action buttons sit anchored inside a 96px bottom zone (including safe area inserts), placing all primary interaction triggers within natural reach of the user's thumb.

## Elevation & Depth

Visual hierarchy does not use diffuse multi-color drop shadows; it relies on structured surface luminance, razor-sharp titanium borders, and simulated top-lit internal specular highlights:

- **Level 0 (App Canvas):** `#0B0F12` with no borders.
- **Level 1 (Card & Section Insets):** `#131A20` wrapped in a 1px solid border of `#2A3642`. Internal drop-shadow is absent; instead, a top 1px pseudo-inset line (`rgba(255, 255, 255, 0.05)`) simulates an architectural beveled edge.
- **Level 2 (Interactive Cards & Floating Modals):** `#1C242C` with a 1px border of `#3B4856` and a directed directional drop shadow: `0 8px 24px -4px rgba(0, 0, 0, 0.60)`.
- **Level 3 (Hardware Shutter HUD & Overlays):** Semi-transparent `#131A20` with a 20px blur (`backdrop-filter: blur(20px)`), accented with a focused `#10B981` inner stroke (`box-shadow: inset 0 0 0 1px rgba(16, 185, 129, 0.25)`).
- **Physical Press Feedback:** Tapping active cards eliminates border highlight luminescence and reduces visual elevation by shifting background brightness from `#1C242C` down to `#131A20` over a 50ms transition.

## Shapes

The design uses a refined curvature scale (`roundedness: 2`) designed to soften industrial carbon panels without compromising high-density data legibility:

- **Standard Containers & Cards:** `1rem` (16px) corner radius. Perfectly frames camera viewports, grouped list panels, and expanded transaction logs.
- **Sheets & Trays:** `1.5rem` (24px) top-left and top-right radii on interactive bottom sheets and sliding storage drawers.
- **Tags, Shutter Triggers, & Telemetry Badges:** Fully pill-shaped (`9999px` / `rounded-full`) to differentiate immutable data metadata and actions from rectangular card surfaces.
- **Input Fields & Small Insets:** `0.5rem` (8px) for precise data alignment with tabular fonts.

## Components

### Buttons
- **Primary Shutter / Commit:** Pill-shaped, background `#10B981`, foreground `#0B0F12` (pure high-contrast carbon). Label set in `Plus Jakarta Sans` Semibold 15px. Features a 1px inset highlight (`rgba(255,255,255,0.2)`) and a subtle ambient emerald ring.
- **Secondary / Action Tray:** Slate card button (`#1C242C`), 1px border `#2A3642`, text `#F1F5F9`. Active states darken surface to `#131A20`.
- **Destructive Flush:** `#131A20` base with `#EF4444` text and border accent on confirmation states.

### Chips & Badges
- **Status & Deductible Tags:** Pill containers with 4px vertical, 10px horizontal padding. Background is 10% opacity tint of indicator color with a matching 1px border at 30% opacity. Example: Tax Tag uses `#F59E0B` at 10% background with a `#F59E0B` border and text.
- **Hardware Telemetry Capsule:** Minimal pill rendered in `#0B0F12` featuring an active pulse glyph (e.g. green circle for "100% Offline") and `label-telemetry` text (`#64748B`).

### Lists & Item Cells
- **Receipt Entry Rows:** Enclosed inside `#131A20` containers. Left-aligned merchant avatar or receipt thumbnail (44x44px, 8px rounded corners, 1px border). Centered title and timestamp in Inter; right-aligned total amount in JetBrains Mono (`label-numeric-md`), colored `#F1F5F9` for expenses or `#10B981` for credits. Dividers are 1px solid `#1C242C`.

### Input Fields
- **Offline Data Trays:** Background `#0B0F12`, border 1px solid `#2A3642`, radius 8px. Text `#F1F5F9`, placeholder text `#475569`. Focused state triggers a 1px glow and border color of `#10B981`. Currency input enforces right-to-left numeral population using `label-numeric-lg`.

### Cards & Viewport HUD
- **Camera Viewport Overlay:** Floating 16px corner bounds marked with 2px cyber-emerald brackets (`#10B981`) highlighting receipt edges in real-time. Edge-to-edge layout with top and bottom glass controls (`backdrop-filter: blur(16px)`).
- **Encrypted Storage Card:** Slate panel displaying a segmented horizontal progress bar representing local storage, annotated with micro tabular captions showing verified local database records and encrypted file system allocations.