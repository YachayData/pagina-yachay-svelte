import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev ? '' : 'pagina-yachay-svelte',
        },
		
		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
		entries: ['/', '/post/0', '/post/1', '/post/2', '/post/3']
		}
    }
};