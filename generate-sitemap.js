const fs = require('fs');
const path = require('path');

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

// 👇 تحميل الخدمات من ملف JSON
const servicesData = require('./src/data/services.json');

// 🔁 إنشاء روابط services/:id
const dynamicServiceRoutes = servicesData.map(service => `/services/${service.id}`);

// 🌐 إنشاء جميع المسارات لكل لغة
const urls = [];

langs.forEach((lang) => {
    routes.forEach((route) => {
        urls.push(`${baseUrl}/${lang}${route}`);
    });
    dynamicServiceRoutes.forEach((route) => {
        urls.push(`${baseUrl}/${lang}${route}`);
    });
});

// 📝 توليد XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
            (url) => `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
        )
        .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
console.log('✅ sitemap.xml created with', urls.length, 'URLs');
