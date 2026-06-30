---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
Addedtitle: Web Font Demos and Design Tips
description: Web development
layout: simple
theme: slate
lang: en-US
tags: [ bruno, site]
fontshare_webfonts:
  - Author
  - CabinetGrotesk
  - Chillax
  - Gambarino
  - Ranade
  - RX100
squirrel_webfonts:
  - Cardo-fontfacekit
  - ExcellenceInMotion
  - Formata
  - Lora
  - Meta
  - OpenSans
  - TitilliumText-fontfacekit
  - Trykker-fontfacekit

fonts:
  - LM
  - Prospera
  - ProximaNova
  - TheMixExtraLight

---

### Local Resources

{% for font in page.fontshare_webfonts %}
- [{{ font }}](/assets/webfonts-fontshare/{{ font }}/demo.html){% endfor %}

#### WebFont Demos

{% for font in page.squirrel_webfonts %}
- [{{ font }}](/assets/webfonts-squirrel/{{ font }}/demo.html){% endfor %}

#### Font Demos

{% for font in page.fonts %}
- [{{ font }}](/assets/fonts/{{ font }}/demo.html){% endfor %}

[pure-layout](pure-layout/index.html)

---

### Exteral Resources

https://blog.markdowntools.com/posts/markdown-custom-css-classes-styling-complete-guide

Fav Icons are taken from

https://icons8.com/icons/set/favicon--icons8
https://icons8.com/icon/GKCbLdI3wPw0/star

[github-markdown-css v5.9.0](https://github.com/sindresorhus/github-markdown-css/releases/tag/v5.9.0)
