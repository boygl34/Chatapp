//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-cloudflare';
//import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess';
;
/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        })
    ],
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;
