---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: Letter {{ data.letter }}
theme: slate
lang: ru
---

## Letter {{ page.title | escape }}

{% assign data = site.data.govorya['govorya-e'] %}
Letter {{ data.letter }}

{% for entry in data.entries %}
{%- for vocable in entry.pom %}**{{ vocable }}**{% unless forloop.last %}, {% endunless %}{% endfor %}
{%- for sense in entry.rus %} — {{ sense.t }}
{%- if sense.e %} ({% for example in sense.e %}«{{ example }}»{% unless forloop.last %} / {% endunless %}{% endfor %}){% endif %}
{%- if sense.r %}; см. {% for ref in sense.r%}**{{ ref }}**{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}
{%- if sense.c %}; ср. {% for comp in sense.c %}*{{ comp }}*{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}
{%- endfor %}

{% endfor %}
