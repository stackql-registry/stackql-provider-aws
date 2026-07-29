# Website

Docusaurus microsite for the StackQL `aws` provider, using the shared
config archetype from [stackql/docusaurus-config](https://github.com/stackql/docusaurus-config)
(vendored into `.shared-config/` by the `vendor-config` script, which
runs automatically before `start` and `build`).

The markdown under `docs/` is GENERATED - see section 8 of the
[repo README](../README.md) for the docgen -> snake-case -> sanitize ->
scrub pipeline. Don't hand-edit generated pages; regenerate instead.

The snake-case and scrub passes (`yarn snake-case-docs`,
`yarn scrub-docs`) also run automatically before `start` and `build` -
both are idempotent, so this is a safe guard against a regen that
skipped them (Pascal-cased columns would otherwise ship silently; the
columns in `docs/` must match the snake_case the stackql casing engine
renders at the SQL surface). The sanitize step is the ONLY remaining
manual step and can NOT be auto-run the same way: it is one-shot on
freshly generated docs (re-running it double-escapes).

## Local development

```bash
yarn
yarn start
```

## Build and serve

```bash
yarn build
yarn serve
```

Build from WSL / Linux: the bundler's native binaries in `node_modules`
match the platform that last ran an install, and installs from Windows
and WSL prune each other's binaries.

## Deployment

Hosted on Netlify, deployed from the locally verified `build/` via the
Netlify CLI (managed builds are stopped - the 6,400+ page SSG build
exceeds standard build-container memory):

```bash
yarn build
npx netlify-cli deploy --prod --dir build --no-build
```

See "Deploying" in the [repo README](../README.md) for one-time
`login`/`link` setup and details.
