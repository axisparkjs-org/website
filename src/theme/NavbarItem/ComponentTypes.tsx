import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import VersionDropdownNavbarItem from './VersionDropdownNavbarItem';

// Adds the `custom-versionDropdown` navbar item type (see docusaurus.config.ts).
export default {
    ...ComponentTypes,
    'custom-versionDropdown': VersionDropdownNavbarItem
};
