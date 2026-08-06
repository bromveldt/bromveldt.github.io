---
#encoding: "bom|utf-8"
#mode: 'r:bom|utf-8'
title: Словарные статьи
author: И.И. Мосеев
description: Краткий словарь поморского языка (И. И. Мосеев, Архангельск, 2005)
theme: slate
lang: ru
tags: [bruno, pomor, russian, dialect, dictionary entries]
---

{% assign md_base_path = "static/talen/slavisch/pom/govorya" %}
{% assign letters = "р с т у ф х ц ш э ю я" | split: " " %}
{%- for letter in letters -%}
{%- assign fpath = md_base_path | append: "/entries/" | append: "govorya-" | append: letter | append: ".html" -%}

{%- assign p = site.pages | where: "path", fpath | first -%}- [{{ p.title }}]({{ p.url | relative_url }})
{%- endfor -%}
