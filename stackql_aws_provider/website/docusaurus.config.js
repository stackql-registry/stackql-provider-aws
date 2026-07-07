import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

export default createConfig({
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
  },
});
