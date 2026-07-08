---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: bromveldt.github.io
description: A personal Website built with GitHub Actions
theme: slate
lang: en-US
tags: [ bruno, README]
---

Author: Bruno Samueli <mailto:Bruno.Samueli@osterholm.nl>

The layout of this page is based on the 'Landing Page' layout from
<https://pure-css.github.io/layouts/>.

## Dublin Core

<https://www.dublincore.org/resources/userguide/>

<http://purl.org/dc/terms/> The /terms/ namespace was originally created in 2001 for identifying new terms coined outside of the original fifteen-element Dublin Core. While the /elements/1.1/ namespace will be supported indefinitely, DCMI gently encourages use of the /terms/ namespace.

## Local development

Markdown is linted in CI by Super-Linter, using the ruleset at
[`.markdownlint.yaml`](.markdownlint.yaml) — the same file the markdownlint
editor extensions auto-detect, so the IDE and CI agree.

To catch the same issues *before* you commit, rather than waiting for the
GitHub build to fail, enable the bundled Git hook once per clone:

```sh
git config core.hooksPath .githooks
```

The [`.githooks/pre-commit`](.githooks/pre-commit) hook lints only the Markdown
you are committing, with the same pinned linter version as CI.

If a commit is blocked, auto-fix the mechanical issues and re-stage:

```sh
npx markdownlint-cli2 --fix --config .markdownlint.yaml <files>
```

To bypass the hook for a single commit (not recommended), use
`git commit --no-verify`.
