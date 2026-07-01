---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title : Calendar
layout: simple
tags: [bruno, myv, ersa]
months :
 - Якшамков
 - Даволков
 - Эйзюрков
 - Чадыков
 - Панжиков
 - Аштемков
 - Медьков
 - Умарьков
 - Таштамков
 - Ожоков
 - Сундерьков
 - Ацамков
---

## Ковтне ковкерьксенть иесэ

<ol style="float: inline-start">
{% for month in page.months %}
<li>{{ month }}</li>
{% endfor %}
</ol>

![Ersa Calendar](calendar.jpg "Calendar in Ersa, Russian")
