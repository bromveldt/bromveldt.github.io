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

#### Fontshare WebFont Demos

<ul>
{% for font in page.fontshare_webfonts %}
  <li><a href="/assets/webfonts-fontshare/{{ font }}/demo.html" title="{{ font }}">{{ font }}</a></li>
{% endfor %}
</ul>

#### Squirrel WebFont Demos

<ul>
{% for font in page.squirrel_webfonts %}
  <li><a href="/assets/webfonts-squirrel/{{ font }}/demo.html" title="{{ font }}">{{ font }}</a></li>
{% endfor %}
</ul>

#### Font Demos

<ul>
{% for font in page.fonts %}
    <li><a href="/assets/fonts/{{ font }}/demo.html" title="{{ font }}">{{ font }}</a></li>
{% endfor %}
</ul>

#### Layout Demo

[pure-layout](pure-layout/index.html)

---

### Exteral Resources

[Markdown Custom CSS Classes Styling Complete Guide](https://blog.markdowntools.com/posts/markdown-custom-css-classes-styling-complete-guide)

[github-markdown-css v5.9.0](https://github.com/sindresorhus/github-markdown-css/releases/tag/v5.9.0)

Fav Icons are taken from icons8.com

[favicons](https://icons8.com/icons/set/favicon--icons8)
[The Star icon](https://icons8.com/icon/GKCbLdI3wPw0/star)
