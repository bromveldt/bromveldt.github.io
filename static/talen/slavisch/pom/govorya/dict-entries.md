---
#encoding: "bom|utf-8"
#mode: 'r:bom|utf-8'
title: Словарные статьи
author: И.И. Мосеев
#description: Краткий словарь поморского языка (И. И. Мосеев, Архангельск, 2005)
#theme: slate
lang: ru
tags: [bruno, pomor, russian, dialect, entries]
letters: к л м н о п р с т у ф х ц ш э ю я
content_rel_base_path: [ entries, govorya- ]
---

## {{ page.title | escape }}

{% comment %}
Construct a filename stub, to which only the Cyrillic letter and the filename extension need to be appended.
{% endcomment %}
{% assign content_base_filename = page.content_rel_base_path | join: "/" %}
{% assign rel_dirname = page.dir | replace_first: '/', '' | append: content_base_filename %}

{% comment %}
site.pages produces pg:
  pg.dir starts and ends with a '/'
  pg.url starts with a '/' ends in '.html',
  pg.path starts with no slash and ends in '.md'
We are matching by path.
We do not need to URL encode the Cyrillic letters (file discriminants)
| contains: content_base_filename
{% endcomment %}

{% for pg in site.pages %}
{% if pg.dir contains content_base_filename %}
P.={{ pg.path }} d.={{ pg.dir }}<br>
{% endif %}
{% endfor %}

{%- assign letters = page.letters | split: " " -%}

{%- for letter in letters -%}
{% assign fpath = rel_dirname | append: letter | append: ".md" %}
fpath.={{ fpath }}

{% assign lpg = site.pages | where: "path", fpath | first %}
url={{ lpg.url }}

<span class="nobr">[{{ letter }}]({{ lpg.url }})</span>{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}
