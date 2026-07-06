# Claude — Style Reference
> Warm letterpress on cream paper — a literary workspace where ink-black text rests on ivory stock and color appears only as deliberate annotation.

**Theme:** light
**Source:** https://styles.refero.design/style/47cb86b6-cb2d-41c8-94ba-8607cd7c41cd

Claude's design system reads like a letterpress journal on cream paper — a warm ivory canvas (#faf9f5) under near-black ink (#141413), with taupe linen borders that frame content like printed margins. The interface is almost achromatic: color is rationed to a single dusty blue accent. Typography carries the brand: a humanist sans (Anthropic Sans) for UI and a literary serif (Anthropic Serif) for headlines. Components are flat, border-defined, and gently rounded — the system trades drop shadows for hairline warmth.

## Tokens — Colors

| Name | Value | Role |
|------|-------|------|
| Ivory Canvas | `#faf9f5` | Page background, primary canvas |
| Pure White | `#ffffff` | Card surfaces, input fields, elevated containers |
| Warm Parchment | `#f0eee6` | Secondary surface — toggle backgrounds, hover washes |
| Ink Black | `#141413` | Primary text, dark filled buttons |
| Charcoal | `#1f1e1d` | Secondary text, nav text, body copy |
| Warm Slate | `#3d3d3a` | Tertiary text, button labels |
| Stone Gray | `#73726c` | Muted helper text, captions, inactive nav |
| Pewter | `#9c9a92` | Subtle icons, decorative strokes |
| Linen Border | `#dedcd1` | Hairline borders, card outlines, dividers |
| Cool Stone | `#b7b7b5` | Secondary UI dividers/labels; never primary CTA |
| Dust Blue | `#ccdbe8` | Sole chromatic accent — links, subtle washes |

## Tokens — Typography

### Anthropic Serif (substitute: Source Serif 4, Tiempos Text, or PT Serif)
- Weights: 330, 400 — hero display at 56px uses whisper-weight 330; never bold headings
- Sizes: 18px, 24px, 30px, 56px; line-height 1.20–1.56; "liga" enabled
- Role: editorial display and headings — hero headlines, section headings, plan names, prices

### Anthropic Sans (substitute: Inter, IBM Plex Sans, or Söhne)
- Weights: 400 body, 430 buttons/emphasis (signature in-between weight), 500 subheadings, 600 strong labels
- Sizes: 11–24px; line-height 1.33–1.63; letter-spacing normal
- Role: all functional UI — buttons, nav, body, labels, inputs

### Type Scale (Major Second 1.125 from 16px)

| Role | Size | Line Height |
|------|------|-------------|
| caption | 11px | 1.5 |
| body | 15px | 1.63 |
| subheading | 18px | 1.56 |
| heading-sm | 24px | 1.33 |
| heading | 30px | 1.33 |
| display | 56px | 1.2 |

## Spacing & Shape

- Base unit 8px, density comfortable; page max-width 1200px; section gap 64px; card padding 32px; element gap 8px
- Border radius: nav/inputs/buttons 9.6px; cards 16px; containers 24px; hero panels 32px
- Surfaces: 0 Ivory Canvas #faf9f5 · 1 Pure White #ffffff · 2 Warm Parchment #f0eee6 · 3 Charcoal Block #1f1e1d
- Elevation: no drop shadows anywhere; depth via hairline Linen borders, surface contrast, dark-button inversion

## Components

- **Primary Dark Button** — Charcoal #1f1e1d fill, white text, Sans 430 @ 15px, radius 9.6px, padding 20px/8px, no shadow, no border
- **Ghost Outlined Button** — transparent, Charcoal text, hairline Cool Stone or Linen border, radius 9.6px
- **Email Input** — white fill, Linen 1px border, radius 9.6px, padding 16px/12px; focus = border darkens to Charcoal, no ring
- **Card** — white surface on ivory canvas, Linen 1px border, radius 16px, padding 32px, no shadow
- **Segmented Toggle** — Warm Parchment track, radius 9.6px, 4px padding; active pill white with Linen border
- **Navigation Bar** — transparent/ivory bg, no shadow or border; links Sans 430 @ 14px Charcoal
- **Checklist Item** — simple Charcoal stroke checkmark @ 16px + Sans 400 @ 15px text, 12px gaps

## Do

- Anthropic Serif weight 330 at 56px for hero display headlines
- Ivory Canvas #faf9f5 as page base — never pure white at page level
- 9.6px radius on all interactive elements
- Linen #dedcd1 1px borders instead of drop shadows
- Charcoal fill + white text = the only filled-button treatment
- Sans weight 430 for buttons and nav links
- 32px padding in cards, 16–20px in buttons/inputs
- Dust Blue #ccdbe8 only for links and subtle washes, never filled buttons

## Don't

- No drop shadows on anything
- No pure black #000000 body text — Ink #141413 is the near-black
- No pill buttons — 9.6px is the max radius
- No bold (700+) headings — authority comes from 330–400 weights
- No additional chromatic colors — Dust Blue is the sole accent
- No sans-serif for headings — serif is mandatory for heading-level content
- No gradients, glows, or color transitions on surfaces

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ivory-canvas: #faf9f5;
  --color-pure-white: #ffffff;
  --color-warm-parchment: #f0eee6;
  --color-ink-black: #141413;
  --color-charcoal: #1f1e1d;
  --color-warm-slate: #3d3d3a;
  --color-stone-gray: #73726c;
  --color-pewter: #9c9a92;
  --color-linen-border: #dedcd1;
  --color-cool-stone: #b7b7b5;
  --color-dust-blue: #ccdbe8;

  /* Typography */
  --font-serif: 'Source Serif 4', ui-serif, Georgia, serif;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px; --leading-caption: 1.5;
  --text-body: 15px;    --leading-body: 1.63;
  --text-subheading: 18px; --leading-subheading: 1.56;
  --text-heading-sm: 24px; --leading-heading-sm: 1.33;
  --text-heading: 30px;    --leading-heading: 1.33;
  --text-display: 56px;    --leading-display: 1.2;

  /* Spacing & radius */
  --spacing-unit: 8px;
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 32px;
  --radius-buttons: 9.6px;
  --radius-cards: 16px;
  --radius-containers: 24px;
  --radius-hero-panels: 32px;
}
```
