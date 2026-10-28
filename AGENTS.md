<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Git workflow for agents

After each substantial, independently complete change, load and follow the repository's `git-pushing` skill. Prefer several small, coherent commits over one large commit: each commit should represent one feature, fix, or other logical change, including its related tests. Use concise conventional commit messages and verify each change before committing.

Commit and push only when explicitly authorised. Inspect the worktree, staged changes, and recent commit history first; never include unrelated changes or secrets. The skill's script stages all changes, so do not run it when that would include unrelated work. Never force-push or amend without explicit approval.

## Figma website sync

The website's Figma design is https://www.figma.com/design/AngSnjgXDaurTiL8v2lqyO/Machintu-Website. The `Website` page contains the existing `Homepage / Desktop` and `About / Desktop` frames.

After a website UI change, use the Figma MCP to update the affected existing frames to match the implemented website, preserving editable layers and unrelated work. Inspect and verify the updated design before reporting completion. If Figma is unavailable or the sync cannot be completed, explicitly report that it remains pending; do not claim it happened. This is an agent-driven workflow, not a background watcher.
