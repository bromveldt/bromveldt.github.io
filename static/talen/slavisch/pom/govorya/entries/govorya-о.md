---
#encoding: "bom|utf-8"
#mode: 'r:bom|utf-8'
title: Dummy title {{ data.md-discriminator }}
theme: slate
layout: pomor-entry
lang: ru
---

## {{ page.subtitle | escape }}

filename {{ yml-filename }}

{% assign data = site.data.govorya['{{ yml-filename }}'] %}
