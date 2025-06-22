import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { t, lang } = useTranslation();
    const posts = [
        { path: '/colors', key: 'colorsGuide' },
        { path: '/room-colors', key: 'roomColors' },
        { path: '/brighten-your-space', key: 'brightenYourSpace' },
        { path: '/jotun-2025-colors', key: 'jotun2025Colors' },
        { path: '/luxury-paints', key: 'luxuryPaints' },
        { path: '/gloss-difference', key: 'glossDifference' },
        { path: '/lighting-and-color', key: 'lightingAndColor' },
        { path: '/kid-friendly-colors', key: 'kidFriendlyColors' },
        { path: '/projects-gallery', key: 'projectsGallery' },
        { path: '/offwhite-vs-beige', key: 'offwhiteVsBeige' },
    ];

    return (
        <DefaultLayout>
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-8 text-center">
                        {t('blog.title')}
                    </h1>
                    <p className="text-gray-700 mb-6 text-center">
                        {t('blog.intro')}
                    </p>
                    <ul className="space-y-4">
                        {posts.map((post) => (
                            <li key={post.key}>
                                <Link
                                    to={`/${lang}${post.path}`}
                                    className="text-mfk-blue font-bold hover:text-mfk-blue/80"
                                >
                                    {t(`header.${post.key}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Blog;
