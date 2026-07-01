---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: ПомОрьска говОря
author: И.И. Мосеев
description: Краткий словарь поморского языка (И. И. Мосеев, Архангельск, 2005)
layout: simple
theme: slate
lang: ru
tags: [bruno, pomor, russian, dialect, dictionary]
note: Текст распознан из печатного издания (OCR); в эссе и сказках возможны опечатки и неразделённые слова. Словарные статьи приведены без изменений; прописные гласные в заголовках обозначают ударение.
---

## {{ page.title | escape }}

### И.И. Мосеев, Краткий словарь поморского языка — Архангельск, 2005

> {{ page.note | escape }}

-----

[foreword.md](foreword.md)

-----

{% assign path = "static/talen/slavisch/pom/говоря" %}

{% for filename in [subject, preface, heritage, about, authentic, tongue, roadmap, worldview, roots, intro, russian, separate, resist, independent, govorya, contents, grammar, сказки] %}{% assign p = site.pages | where: "path", "{{ path }}/{{ filename }}.md" | first %}- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}

page.url {{ page.url }}

page.path {{ page.path }}
