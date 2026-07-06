# Anthropic — Style Reference
> Research journal printed on warm stone — authoritative typographic composition where word-level underlines replace color as the primary emphasis mechanism.

**Theme:** light
**Source:** https://styles.refero.design/style/d469cba4-c448-4a43-a033-883f8bfcdc42

Warm ivory parchment (#faf9f5) base; near-black (#141413) doubles as text and card background. Almost entirely achromatic — the chromatic budget is one terracotta accent (#d97757), held in reserve. Serif-plus-grotesque pairing signals research institution, not startup. Headlines emphasize keywords with a thick underline — never color or weight. Dark feature cards (radius 24px) create hard-edged alternating bands, zero gradients or shadows.

## Tokens — Colors

| Name | Value | Role |
|------|-------|------|
| Slate Dark | `#141413` | Primary text, borders, nav, dark card backgrounds |
| Slate Medium | `#3d3d3a` | Mid-dark borders, focus rings |
| Slate Light | `#5e5d59` | Tertiary text, captions, footer secondary |
| Cloud Dark | `#87867f` | Secondary text, meta labels, timestamps |
| Cloud Medium | `#b0aea5` | Disabled/muted borders, subdued chrome |
| Cloud Light | `#d1cfc5` | Dividers, hairline borders, inactive states |
| Oat | `#e3dacc` | Tertiary surfaces, warm mid-tone fills |
| Ivory Dark | `#e8e6dc` | Body text on dark, dividers, subtle borders |
| Ivory Medium | `#f0eee6` | Nav backgrounds, secondary surfaces |
| Ivory Light | `#faf9f5` | Page background, button fills |
| Clay | `#d97757` | Accent CTA, highlights — sparingly |
| Accent Ember | `#c6613f` | Hover/pressed clay state |
| Olive / Sky / Fig / Cactus | `#788c5d` / `#6a9bcc` / `#c46686` / `#bcd1ca` | Categorical tag variants — never combined as accents |

## Tokens — Typography

### Anthropic Sans (substitute: Inter, DM Sans)
- Weights 400–700; sizes 12–61px; tracking -0.02em at display, -0.005em mid, -0.002em body
- Role: all UI chrome — nav, buttons, labels, body copy; weight 700 hero headline, 400 body

### Anthropic Serif (substitute: Playfair Display, Lora)
- Weights 400, 600; sizes 18/20/24/91px
- Role: feature-card headlines and editorial display — ONLY on dark #141413 surfaces at display scale

### Anthropic Mono (substitute: JetBrains Mono, IBM Plex Mono)
- Weight 400 @ 16px — metadata labels (DATE, CATEGORY); signals "data" within editorial layout

### Type Scale (Major Third 1.25 from 12px)

| Role | Size | LH | Tracking |
|------|------|----|----------|
| caption | 12px | 1.3 | — |
| body-sm | 15px | 1.4 | -0.03px |
| subheading | 18px | 1.4 | — |
| heading-sm | 20px | 1.4 | — |
| heading | 24px | 1.3 | -0.12px |
| heading-lg | 61px | 1.1 | -1.22px |
| display | 91px | 1.1 | — |

## Spacing & Shape

- Base unit 4px, density compact; max width 1200px; section gap 61px; card padding 31px
- Radius: buttons/badges 0px; cards 8px; panels 16px; featured cards 24px
- Signature: primary nav CTA uses asymmetric radius 0 0 8px 8px (flat top, rounded bottom)
- Surfaces: 1 Page #faf9f5 · 2 Nav #f0eee6 · 3 Oat card #e3dacc · 4 Feature dark #141413
- Elevation: zero box-shadows — depth through ink density, not light simulation

## Do

- #faf9f5 page base — never pure white or neutral gray
- 0px radius on all buttons except the asymmetric primary CTA
- Emphasize headline keywords with thick underline only — never color or bold bump
- Serif at display sizes only inside dark cards; Sans for all light-surface headlines
- One chromatic accent per section maximum; default state has zero chromatic color
- Mono 16px for metadata labels in card footers

## Don't

- No pure white/black surfaces; no box-shadows; no uniformly rounded buttons
- No serif display type on the ivory background — reserved for the dark card inversion
- No multiple accent colors in one section; no background fills on badges/labels
- No color emphasis in headlines — underline is the emphasis mechanism

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-slate-dark: #141413;
  --color-slate-medium: #3d3d3a;
  --color-slate-light: #5e5d59;
  --color-cloud-dark: #87867f;
  --color-cloud-medium: #b0aea5;
  --color-cloud-light: #d1cfc5;
  --color-oat: #e3dacc;
  --color-ivory-dark: #e8e6dc;
  --color-ivory-medium: #f0eee6;
  --color-ivory-light: #faf9f5;
  --color-clay: #d97757;
  --color-accent-ember: #c6613f;
  --color-olive: #788c5d;
  --color-sky: #6a9bcc;
  --color-fig: #c46686;
  --color-cactus: #bcd1ca;

  /* Typography */
  --text-caption: 12px;   --leading-caption: 1.3;
  --text-body-sm: 15px;   --leading-body-sm: 1.4;
  --text-subheading: 18px;
  --text-heading-sm: 20px;
  --text-heading: 24px;   --tracking-heading: -0.12px;
  --text-heading-lg: 61px; --tracking-heading-lg: -1.22px;
  --text-display: 91px;   --leading-display: 1.1;

  /* Spacing & radius */
  --spacing-unit: 4px;
  --page-max-width: 1200px;
  --section-gap: 61px;
  --card-padding: 31px;
  --radius-buttons: 0px;
  --radius-cards: 8px;
  --radius-panels: 16px;
  --radius-featuredcards: 24px;
}
```
