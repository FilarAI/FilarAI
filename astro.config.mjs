// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Wymagane dla canonical + absolutnych URL-i w og:image.
	// Podmień gdy domena docelowa będzie inna.
	site: 'https://filarai.com',
});
