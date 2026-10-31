# AxiSpark.js website

Source of [axisparkjs.com](https://axisparkjs.com), built with [Docusaurus](https://docusaurus.io/).

- `docs/`, `blog/`, `src/` and `static/` are written by hand.
- The API reference (`api/`) is **generated** from the TSDoc comments of [axisparkjs/axispark](https://github.com/axisparkjs/axispark) and is not committed.

## Local development

You need [Node.js](https://nodejs.org/) version 24 or higher.

```bash
# 1. Documentation dependencies
npm ci

# 2. API reference: clone and build the code repository inside this folder (ignored by git)
git clone https://github.com/axisparkjs/axispark.git axispark
npm --prefix axispark ci && npm --prefix axispark run build
npm run api:ci
npm run api:generate

# 3. Start the site
npm start
```

To document another version, check it out in `axispark/` before generating the API reference. If you only edit the guides you can skip step 2, but the links to `/api` will be broken and `npm run build` will fail.

## Pipelines

- **CI** (`ci.yml`): runs on pull requests to `feature/**`, `release/**` and `main`, and on pushes to `main`. It checks out `axisparkjs/axispark` (`main`), builds it, generates the API reference with TypeDoc and builds the site, so broken links or TSDoc problems fail the check. On pushes to `main`, when the check passes, it runs the CD.
- **CD** (`cd.yml`): builds the site and publishes it. What it publishes depends on who starts it:
  - The axispark repository, with the `axispark-release` event after a release: deploys the site to GitHub Pages (custom domain in `static/CNAME`). `client_payload.ref` is the release commit whose API reference is generated. Merging a change to `main` does not deploy it to Pages: it goes live with the next release of axispark.
  - The CI, after every verified push to `main`: the `staging` job packages the site (API reference from axispark `main`) in the Docker image `ghcr.io/axisparkjs-org/axisparkjs-website` (nginx, see `docker/`) and publishes it to GitHub Container Registry with the tags `latest` and `sha-<commit>`.

## Staging

`latest` is always the last published site. To deploy it (or update it) in a staging environment, on a machine with Docker:

```bash
docker compose -f docker/docker-compose.staging.yml up -d
```

The site is served at http://localhost:8080 (`WEBSITE_PORT` changes the port). If the package is private, run `docker login ghcr.io` first with a token that has `read:packages`.
