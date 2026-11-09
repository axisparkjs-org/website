import React, { useEffect, type ReactNode } from 'react';
import {
    useActiveDocContext,
    useDocsPreferredVersion,
    useDocsVersionCandidates,
    useVersions,
    type GlobalVersion
} from '@docusaurus/plugin-content-docs/client';
import { useHistorySelector } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';

const GUIDES = 'default';
const API = 'api';

type Props = {
    mobile?: boolean;
    position?: 'left' | 'right';
};

/**
 * Version selector shared by the guides (`docs`) and the API reference (`api`). Both plugins have the same
 * versions: on an API page it switches the API reference, anywhere else the guides, and the choice is saved
 * for both plugins, so the "Docs" and "API" navbar links keep showing the version you program with.
 */
export default function VersionDropdownNavbarItem({ mobile, ...props }: Props): ReactNode {
    const apiBase = useBaseUrl('/api');
    const pathname = useHistorySelector((history) => history.location.pathname);
    const search = useHistorySelector((history) => history.location.search);
    const hash = useHistorySelector((history) => history.location.hash);

    const pluginId = pathname === apiBase || pathname.startsWith(`${apiBase}/`) ? API : GUIDES;

    const versions = useVersions(pluginId);
    const activeDocContext = useActiveDocContext(pluginId);
    const [displayedVersion] = useDocsVersionCandidates(pluginId);
    const guides = useDocsPreferredVersion(GUIDES);
    const api = useDocsPreferredVersion(API);

    // The version of the page being read (from a search result, a link or the selector) is the version you
    // program with: remember it for both plugins.
    const activeVersionName = activeDocContext.activeVersion?.name;
    useEffect(() => {
        if (!activeVersionName) return;
        if (guides.preferredVersion?.name !== activeVersionName) guides.savePreferredVersionName(activeVersionName);
        if (api.preferredVersion?.name !== activeVersionName) api.savePreferredVersionName(activeVersionName);
    }, [activeVersionName]);

    const mainDocPath = (version: GlobalVersion) => version.docs.find((doc) => doc.id === version.mainDocId)?.path ?? version.path;

    // Same page in the other version when it exists, otherwise the main page of that version.
    const targetPath = (version: GlobalVersion) => activeDocContext.alternateDocVersions[version.name]?.path ?? mainDocPath(version);

    const items: LinkLikeNavbarItemProps[] = [
        ...versions.map((version) => ({
            label: version.label,
            to: `${targetPath(version)}${search}${hash}`,
            isActive: () => version === activeDocContext.activeVersion,
            onClick: () => {
                guides.savePreferredVersionName(version.name);
                api.savePreferredVersionName(version.name);
            }
        })),
        {
            type: 'html',
            value: '<hr class="dropdown-separator">'
        } as LinkLikeNavbarItemProps,
        { label: 'All releases', to: '/changelog' }
    ];

    const current = displayedVersion ?? versions[0];

    return (
        <DropdownNavbarItem
            {...props}
            mobile={mobile}
            label={mobile ? 'Versions' : /^\d/.test(current.label) ? `v${current.label}` : current.label}
            to={mobile ? undefined : targetPath(current)}
            items={items}
            isActive={() => false}
        />
    );
}
