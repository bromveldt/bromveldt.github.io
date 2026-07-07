# Lessons

## Jekyll on Windows: non-ASCII paths (2026-07-06)

Jekyll silently skips `_data` files and folders with Cyrillic names on Windows — `_data/говоря` never loaded, no error; renaming to `_data/govorya` fixed it. The same applies to `include_relative` paths. Rule: ASCII-only filenames for `_data`, `_includes`, and anything Liquid references by path. Cyrillic belongs in content and front-matter values, never in filenames Jekyll must resolve.

## Include-only .md fragments (2026-07-06)

`include_relative` pastes files verbatim, so front matter in a fragment renders as literal text. Strip the whole `--- ... ---` block from include-only fragments. Side effect: fragments with front matter also match layout defaults and get published as standalone pages; without front matter they are plain static files.

kramdown does not process markdown inside block-level HTML. Add `markdown="1"` to the enclosing element (chosen over the `markdownify` capture-filter for simple tables).

Per-tale vocabulary lives in `_data/govorya/sprookje-N.yml` with a small Liquid loop in the fragment — not inline markdown tables.

## markdownlint pre-commit hook (2026-07-06)

The hook passes every staged `.md` path as command-line arguments; 300+ staged files exceeds Windows' command-line length limit and the hook dies before linting anything. Bypass: `git commit --no-verify`. Real fix (still open): make the hook lint via glob or read paths from a file.
