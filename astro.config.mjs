import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Build switches (set by GitHub Actions):
//   default (no env)                        → rafetangorra-tech.github.io/isntitalanis (project pages)
//   USE_BASE_PATH=false + PUBLIC_SITE_URL=… → custom domain
const useBasePath = process.env.USE_BASE_PATH !== 'false';
const defaultSite = useBasePath
  ? 'https://rafetangorra-tech.github.io'
  : 'https://isntitalanistribute.com';
const siteUrl = process.env.PUBLIC_SITE_URL || defaultSite;

export default defineConfig({
  site: siteUrl,
  base: useBasePath ? '/isntitalanis' : '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
});
