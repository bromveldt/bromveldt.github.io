---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: ПомОрьска говОря
author: И.И. Мосеев
description: Краткий словарь поморского языка (И. И. Мосеев, Архангельск, 2005)
theme: slate
lang: ru
tags: [bruno, pomor, russian, dialect, dictionary]
note: Текст распознан из печатного издания (OCR); в эссе и сказках возможны опечатки и неразделённые слова. Словарные статьи приведены без изменений; прописные гласные в заголовках обозначают ударение.
---

## И.И. Мосеев, Краткий словарь поморского языка — Архангельск, 2005

> {{ page.note | escape }}

-----

{% assign path = "static/talen/slavisch/pom/govorya" %}
{% assign filenames = "foreword,subject,preface,heritage,about,authentic,tongue,roadmap,worldview,roots,intro,russian,separate,resist,independent,govorya,contents,entries,grammar,sprookje-1/index,sprookje-2/index,sprookje-3/index,sprookje-4/index" | split: "," %}
{% for filename in filenames %}
{%- assign fpath = path | append: "/" | append: filename | append: ".md" %}

{%- assign p = site.pages | where: "path", fpath | first %}- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}
