---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: About this site
layout: simple
theme: slate
lang: en
---

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll

On June 27, 2026 I have disabled the IE 6‑8 support and the IE 9 compatibility mode as well as iOS Safari < 5 support.

As far as the fonts are concerted, it means not using .eot files and .svg files.


LEaving format 'woff2' for Super Modern Browsers,,
 format 'woff' for  Modern Browsers,
 format 'truetype' for Safari, Android, iOS

based on nemotron-3-super input:


**Short answer:**  
Yes. Modern browsers (Chrome, Firefox, Safari, Edge, Opera, and all current mobile browsers) **ignore any `src` entry that points to an `.eot` file** (or any other format they do not recognise) and simply move on to the next entry in the list. The only browsers that actually use an `.eot` source are Internet Explorer 8 and older (and IE 9 when it is forced into Compatibility View).

---

## Why the `.eot` lines are ignored

### How the `src` descriptor works
The `src` descriptor of `@font-face` is a **comma‑separated list** of candidate sources. The browser walks through that list **in order** and picks the **first** entry it can understand and successfully download. The algorithm is defined in the CSS Fonts Module Level 3/4 specification:

> *“The user agent shall attempt to load the first item in the list that is a supported format … If the user agent does not support the format of a given item, it MUST skip that item and continue with the next.”*  
> — [CSS Fonts Module Level 3, § 4.2](https://www.w3.org/TR/css-fonts-3/#font-face-descriptions)

### What browsers recognise
| Format | Recognised by (as of 2024) |
|--------|----------------------------|
| **EOT** (Embedded OpenType) | IE 6‑8 only (IE 9 understands it but prefers WOFF when available) |
| **WOFF** | All evergreen desktop browsers (Chrome 5+, Firefox 3.6+, Safari 5.1+, Opera 11.1+, Edge) |
| **WOFF2** | All evergreen desktop browsers (Chrome 36+, Firefox 35+, Safari 10+, Opera 23+, Edge) |
| **TTF/OTF** | Most browsers (except very old Android stock browsers) – used as a last‑resort fallback |
| **SVG** | Legacy iOS Safari < 5 (practically unused today) |

Because **modern browsers do not list EOT among the formats they support**, they treat an `src: url(...eot)` entry as “unsupported format” and skip it, moving on to the next candidate (usually WOFF2 → WOFF → TTF/OTF).


---

### TL;DR

- **Modern browsers ignore `.eot` entries** because they do not recognise the Embedded OpenType format.
- The only browsers that actually use those entries are **IE 6‑8** (and IE 9 when forced into Compatibility View).
- If you no longer need to support those old IEs, you can safely **remove the `.eot` lines** and rely on WOFF2/WOFF (with optional TTF/OTF) for faster, smaller font delivery.
- If you still need IE 6‑8, keep the classic bullet‑proof syntax (EOT first, EOT + `?#iefix` second) **before** the WOFF/WOFF2 lines.