import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import servicesData from './src/data/services.json' assert { type: 'json' };

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

const dynamicRoutes = servicesData.map(service => `/services/${service.id}`);

// مسار المجلد الحالي
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

await writeFile(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
console.log(`✅ Created sitemap.xml with ${urls.length} URLs`);
