import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://jeromeabel.github.io',
	// Git Actions
	base: '/kungfuschool',
	integrations: [tailwind(), sitemap(), icon({ iconDir: 'src/assets/icons' })],
});
