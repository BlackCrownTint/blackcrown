import { readFile, writeFile } from 'node:fs/promises';

// Expose the generated URL list at the address submitted to Search Console.
// Fail the build rather than publish a partial sitemap if it grows into shards.
const index = await readFile(new URL('../dist/sitemap-index.xml', import.meta.url), 'utf8');
const locations = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (locations.length !== 1 || !locations[0].endsWith('/sitemap-0.xml')) {
  throw new Error('Expected one sitemap shard; update sitemap.xml publishing for multiple shards.');
}
const sitemap = await readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
if (!sitemap.includes('<urlset ') || sitemap.includes('https://www.blackcrowntint.net')) {
  throw new Error('Invalid sitemap or unexpected production domain.');
}
await writeFile(new URL('../dist/sitemap.xml', import.meta.url), sitemap);
console.log('Published sitemap.xml from the generated sitemap URL list.');
