# Project Instructions

## Default to read-only
The user actively hand-edits files in this repo. Do not edit, create, or delete
files, and do not run builds/commands that change repo state, unless the user
explicitly asks for the change to be made. A question ("is there a way to...",
"how would I...") is a request for an explanation, not an invitation to
implement it.

## Don't fix broken files unprompted
If you discover a file that's broken (fails to build, has invalid syntax,
crashes a server, etc.) while working on something else, report it clearly
and stop there. Do not edit it, work around it, or exclude it from a build
to route around the breakage, unless the user explicitly asks you to fix it.
Flagging the problem is helpful; touching the file uninvited is not.

## Reading URLs the user quotes
When the user pastes or references a URL in chat, it is likely already open
in their Chrome browser. Prefer reading it via the Chrome browser tools
(e.g. `mcp__Claude_in_Chrome__get_page_text` / `read_page`) over WebFetch,
since the open tab reflects what the user is actually looking at (scroll
position, logged-in state, dynamic content). Fall back to WebFetch only if
Chrome isn't available or the page isn't open there.
