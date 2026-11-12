# AxiSpark.js website

Source of [axisparkjs.com](https://axisparkjs.com), built with [Docusaurus](https://docusaurus.io/).

- `docs/`, `blog/`, `src/` and `static/` are written by hand.
- The API reference (`api/`) is **generated** from the TSDoc comments of [axisparkjs-org/axispark](https://github.com/axisparkjs-org/axispark) and is not committed.
- The changelog page (`/changelog`, `src/pages/changelog.mdx`) is **generated** from the `CHANGELOG.md` of axispark and is not committed. It is a timeline of releases (`src/components/Changelog`): the features of each release are shown as highlights, titled with the bold lead of the entry (`- **MCP server.** New ...`), followed by the full list of changes.
- `versioned_docs/` and `api_versioned_docs/` hold the documentation of every released version (see [Versions](#versions)).

## Local development

You need [Node.js](https://nodejs.org/) version 24 or higher.

```bash
# 1. Documentation dependencies
npm ci

# 2. API reference: clone and build the code repository inside this folder (ignored by git)
git clone https://github.com/axisparkjs-org/axispark.git axispark
npm --prefix axispark ci && npm --prefix axispark run build
npm run api:ci
npm run api:generate
npm run changelog:generate

# 3. Start the site
npm start
```

To document another version, check it out in `axispark/` before generating the API reference. If you only edit the guides you can skip step 2, but the links to `/api` will be broken and `npm run build` will fail.

## Versions

The site keeps the documentation of every minor version of AxiSpark.js. The version selector of the navbar changes the guides and the API reference at the same time:

| Version                  | Guides                      | API reference              | Source                                   |
| ------------------------ | --------------------------- | -------------------------- | ---------------------------------------- |
| Latest release (first in `versions.json`) | `/docs` | `/api` | `versioned_docs/version-<latest>`, `api_versioned_docs/version-<latest>` |
| Older releases           | `/docs/<version>`           | `/api/<version>`           | `versioned_docs/version-<version>`, `api_versioned_docs/version-<version>` |
| Next (not released yet)  | `/docs/next`                | `/api/next`                | `docs/`, generated `api/`                |

- **Write the guides of new features in `docs/`.** They are published as *Next* until the next release.
- **A release saves the version automatically.** The CD (`axispark-release`) runs `scripts/snapshot-version.mjs <version>`, which copies `docs/` and the generated `api/` as version `<major>.<minor>` and commits it to `main`. A patch release replaces the snapshot of its minor; a patch of an older minor keeps its snapshot. Only document in `docs/` what will be released next: the snapshot takes everything that is in `main`.
- **To fix the documentation of a released version**, edit its folder in `versioned_docs/` (and in `docs/` if *Next* has the same problem).
- **Links:** between guides, use relative links to the files (`[Versioning](./versioning.mdx)`), so each version links to its own pages. To link to the API reference, use `<ApiLink to="@axisparkjs/ddd/">` (`src/components/ApiLink.tsx`), which points to the API of the same version.

## Pipelines

- **CI** (`ci.yml`): runs on pull requests to `feature/**`, `release/**` and `main`, and on pushes to `main`. It checks out `axisparkjs-org/axispark` (`main`), builds it, generates the API reference with TypeDoc and builds the site, so broken links or TSDoc problems fail the check. On pushes to `main`, when the check passes, it runs the CD.
- **CD** (`cd.yml`): builds the site and publishes it. What it publishes depends on who starts it:
  - The axispark repository, with the `axispark-release` event after a release: saves the documentation version of the release (see [Versions](#versions)), commits it to `main` and deploys the site to GitHub Pages (custom domain in `static/CNAME`). `client_payload.ref` is the release commit whose API reference and changelog are generated, and `client_payload.version` the released version. Merging a change to `main` does not deploy it to Pages: it goes live with the next release of axispark.
  - The CI, after every verified push to `main`: the `staging` job packages the site (API reference from axispark `main`) in the public Docker image `ghcr.io/axisparkjs-org/website` (nginx, see `docker/`) and publishes it to GitHub Container Registry with the tags `latest` and `sha-<commit>`. GitHub creates packages as private: the first time, make it public in the package settings (*Change visibility* > *Public*); the job shows a warning while it is not.

## Staging

`latest` is always the last published site. To deploy it (or update it) in a staging environment, on a machine with Docker:

```bash
docker compose -f docker/docker-compose.staging.yml up -d
```

The site is served at http://localhost:8080 (`WEBSITE_PORT` changes the port). The image is public, no `docker login` is needed.
