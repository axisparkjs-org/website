import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useDocsVersion, useVersions } from '@docusaurus/plugin-content-docs/client';

type Props = {
    /** Path inside the API reference, e.g. `@axisparkjs/ddd/`. */
    to: string;
    children: ReactNode;
};

/**
 * Link from a guide to the API reference of the same version: a guide of 1.3 links to the API of 1.3, and
 * the "Next" guides to the "Next" API. Plain links can't do it because each version is served at a
 * different path and the path of the latest version changes with every release.
 */
export default function ApiLink({ to, children }: Props): ReactNode {
    const { version } = useDocsVersion();
    const apiVersions = useVersions('api');
    const apiVersion = apiVersions.find((candidate) => candidate.name === version) ?? apiVersions[0];
    const base = apiVersion.path.replace(/\/$/, '');

    return <Link to={`${base}/${to.replace(/^\//, '')}`}>{children}</Link>;
}
