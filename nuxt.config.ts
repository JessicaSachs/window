// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	modules: ['nuxt-icon', '@nuxt/image'],
	runtimeConfig: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
});
