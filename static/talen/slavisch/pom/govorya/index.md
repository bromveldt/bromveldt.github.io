---
#encoding: "bom|utf-8"
#mode: 'r:bom|utf-8'
project_title: И.И. Мосеев, Краткий словарь поморского языка — Архангельск, 2005
title: ПомОрьска говОря
author: И.И. Мосеев
description: Краткий словарь поморского языка (И. И. Мосеев, Архангельск, 2005)
theme: slate
lang: ru
tags: [bruno, pomor, russian, dialect, dictionary]
note: Текст распознан из печатного издания (OCR); в эссе и сказках возможны опечатки и неразделённые слова. Словарные статьи приведены без изменений; прописные гласные в заголовках обозначают ударение.
filenames:
  - foreword
  - subject
  - preface
  - heritage
  - about
  - authentic
  - tongue
  - roadmap
  - worldview
  - roots,intro
  - russian
  - separate
  - resist
  - independent
  - govorya
  - contents
  - dict-entries
  - grammar
  - sprookje-1/index
  - sprookje-2/index
  - sprookje-3/index
  - sprookje-4/index

---

## {{ page.project_title | escape }}

> {{ page.note | escape }}

-----

{% assign rel_dir = page.dir | replace_first: '/', '' %}
{%- for filename in page.filenames -%}
{% assign fpath = rel_dir | append: filename | append: ".md" %}
{% assign pg = site.pages | where: "path", fpath | first %}[{{ pg.title }}]({{ pg.url | relative_url }})
{% endfor %}
