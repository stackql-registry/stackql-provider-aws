import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

const config = createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // This microsite is ~17x the page count of a typical provider site
    // (6,800+ MDX pages): the webpack pipeline OOMs even with an 8GB
    // heap. Docusaurus Faster (rspack + swc, via @docusaurus/faster) is
    // required at this scale.
    future: {
      v4: true,
      faster: true,
    },
    // `yarn deploy` (docusaurus deploy) pushes the local build/ to the
    // gh-pages branch, which GitHub Pages serves directly. The shared
    // config assumes org `stackql`; this repo lives under
    // `stackql-registry`.
    organizationName: 'stackql-registry',
    projectName: 'stackql-provider-aws',
    deploymentBranch: 'gh-pages',
  },
});

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY,
// matching the awscc microsite) instead of the shared config's hotlinked
// main-site wordmark - self-contained assets, no cross-origin fetch.
// global.css swaps in the -mobile variants below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

export default config;
