import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://mfk.ae';
const langs = ['ar', 'en'];
const routes = [
    '',
    '/about',
    '/privacy-policy',
    '/contact',
    '/colors',
    '/room-colors',
    '/brighten-your-space',
    '/jotun-2025-colors',
    '/luxury-paints',
    '/gloss-difference',
    '/lighting-and-color',
    '/kid-friendly-colors',
    '/projects-gallery',
    '/offwhite-vs-beige',
    '/blog',
    '/services'
];

// Extract service IDs from the ServiceList.jsx file to build dynamic routes
const servicesFilePath = path.join(__dirname, 'src', 'data', 'ServiceList.jsx');
const servicesContent = await readFile(servicesFilePath, 'utf-8');
const serviceIds = Array.from(servicesContent.matchAll(/id:\s*(\d+)/g)).map(
    (m) => m[1]
);
const dynamicRoutes = serviceIds.map((id) => `/services/${id}`);


const urls = [];

langs.forEach((lang) => {
    routes.forEach((route) => {
        urls.push(`${baseUrl}/${lang}${route}`);
    });
    dynamicRoutes.forEach((route) => {
        urls.push(`${baseUrl}/${lang}${route}`);
    });
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
            (url) => `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
        )
        .join('\n')}
</urlset>
`;

const distDir = path.join(__dirname, 'dist');
await mkdir(distDir, { recursive: true });
await writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml);
console.log(`✅ Created sitemap.xml with ${urls.length} URLs`);
