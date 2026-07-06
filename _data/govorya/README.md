Vocables grouped by a letter of the Cyrillic alphabet as an array of maps with keys 'pom', 'rus'.

entries.pom takes an array to accomodate multiple vocables with the same meaning: pronunciation variants or synonyms

Keys:
  t – translation (always present)
  e – example (often absent), array of phrases in double quotes
  v – *vide*, reference (typically absent), array of bolded single words, rendered introduced by "см. "
      if the translation contains @v@, the latter will be replaced
  c – comparison (typically absent), array of italicized single words, rendered introduced by "ср. "
      the period is omitted at the end of the phrase (but may be rendered),
      the exclamation mark and the question mark are preserved

Example:

```yaml
- pom: [Уледи]
  rus:
    - t: обувь из грубой кожи наподобие калош с загнутыми кверху носками, с пришитыми суконными или камусными @v@ голенищами
      v: кАмус
      e: ["В Уледях вЕкшу хОжали"]
      c: [тобуркА, яры, вЕкша]
```

is rendered as

```markdown
**Уледи** — обувь из грубой кожи наподобие калош с загнутыми кверху носками, с пришитыми суконными или камусными (см. *кАмус*) голенищами ("В Уледях вЕкшу хОжали"); (ср. _тобуркА_, _яры_, _вЕкша_).
```
