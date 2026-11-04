# Vendored proposal content

`project-proposal.md` is a copy of `../../project/PROJECT-PROPOSAL.md`.

It exists so this `web/` folder can be deployed as a standalone GitHub
repository (for example to GitHub Pages) without needing the rest of the `lms`
tree.

- When building inside the full `lms` tree, `scripts/generate-proposal.mjs`
  overwrites this file from `../../project/PROJECT-PROPOSAL.md`.
- The generator strips the front matter and rewrites relative documentation
  links to app routes (`/c25`, `/c26`, `/c27`, `/`), prefixed with
  `NEXT_PUBLIC_BASE_PATH` when present.

Do not edit this copy by hand; edit `lms/project/PROJECT-PROPOSAL.md` instead.
