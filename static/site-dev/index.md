---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: Font Demos and Design Tips
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

---

<p class="content-head is-center" style="margin-top: 1px;margin-bottom: 1px">Local Resources</p>

{% for font in page.fontshare_webfonts %}
- [{{ font }}](/assets/webfonts-fontshare/{{ font }}/demo.html)
{% endfor %}

#### WebFont Demos

{% for font in page.squirrel_webfonts %}
- [{{ font }}](/assets/webfonts-squirrel/{{ font }}/demo.html)
{% endfor %}

----
        <div class="content" style="float:left;margin-right:5%">
            <h4 class="content-subhead metaSerifWeb-bold" style="margin-top: 0;margin-bottom: 3px;">WebFont Demos</h4>
            <ul class="pure-menu-list">
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/Cardo-fontfacekit/demo.html">Cardo-fontfacekit</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/ExcellenceInMotion/demo.html">ExcellenceInMotion</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/Formata/demo.html">Formata</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/Lora/demo.html">Lora</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/Meta/demo.html">Meta</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/OpenSans/demo.html">OpenSans</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/TitilliumText-fontfacekit/demo.html">TitilliumText</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/webfonts-squirrel/Trykker-fontfacekit/demo.html">Trykker</a></li>
            </ul>
        </div>
        <div class="content" style="float:left;margin-right:5%">
            <h4 class="content-subhead metaSerifWeb-bold" style="margin-top: 0;margin-bottom: 3px;">Font Demos</h4>
            <ul class="pure-menu-list">
                <li class="pure-menu-item formata-18-lite"><a href="/assets/fonts/LM/demo.html">LM</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/fonts/Prospera/demo.html">Prospera</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/fonts/ProximaNova/demo.html">Proxima Nova</a></li>
                <li class="pure-menu-item formata-18-lite"><a href="/assets/fonts/TheMixExtraLight/demo.html">TheMixExtraLight</a></li>
            </ul>
        </div>

        <div class="content" style="float:left">
            <h4 class="content-subhead metaSerifWeb-bold" style="margin-top: 0;margin-bottom: 3px;">Pure Layout</h4>
            <ul class="pure-menu-list">
                <li class="pure-menu-item formata-18-lite">
                    <a href="pure-layout/index.html">pure-layout</a>
                </li>
            </ul>
        </div>
        <div style="clear:both"></div>


https://blog.markdowntools.com/posts/markdown-custom-css-classes-styling-complete-guide

Fav Icons are taken from

https://icons8.com/icons/set/favicon--icons8
https://icons8.com/icon/GKCbLdI3wPw0/star

[github-markdown-css v5.9.0](https://github.com/sindresorhus/github-markdown-css/releases/tag/v5.9.0)
