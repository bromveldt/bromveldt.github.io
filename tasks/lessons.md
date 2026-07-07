# Lessons

## Jekyll on Windows: non-ASCII paths (2026-07-06)

Jekyll silently skips `_data` files and folders with Cyrillic names on Windows — `_data/говоря` never loaded, no error; renaming to `_data/govorya` fixed it. The same applies to `include_relative` paths. Rule: ASCII-only filenames for `_data`, `_includes`, and anything Liquid references by path. Cyrillic belongs in content and front-matter values, never in filenames Jekyll must resolve.

## Include-only .md fragments (2026-07-06)

`include_relative` pastes files verbatim, so front matter in a fragment renders as literal text. Strip the whole `--- ... ---` block from include-only fragments. Side effect: fragments with front matter also match layout defaults and get published as standalone pages; without front matter they are plain static files.

kramdown does not process markdown inside block-level HTML. Add `markdown="1"` to the enclosing element (chosen over the `markdownify` capture-filter for simple tables).

Per-tale vocabulary lives in `_data/govorya/sprookje-N.yml` with a small Liquid loop in the fragment — not inline markdown tables.

## markdownlint pre-commit hook (2026-07-06)

The hook passed every staged `.md` path as command-line arguments; 300+ staged files exceeded Windows' 32,767-character command-line limit and the hook died before linting anything.

FIXED 2026-07-07: the hook now lints in batches of 100 files via bash array slicing — `"${files[@]:i:batch}"` in a `for ((i = 0; i < ${#files[@]}; i += batch))` loop, collecting a failure flag across batches. Verified against all 456 tracked .md files: largest batch ~7.8K chars.

General recipe when any tool hits the Windows arg-length limit, in order of preference:

1. Response file, if the tool supports it: write paths to a file, pass `@paths.txt` (javac, clang, 7z) — markdownlint-cli2 does NOT support this.
2. `xargs` batching: `git diff --cached --name-only -z -- '*.md' | xargs -0 -n 100 <tool>` — simplest, but exit-code handling is coarser (xargs returns 123 on any failure).
3. Bash array slicing as in this hook — keeps NUL-safe paths and precise exit-code control.
