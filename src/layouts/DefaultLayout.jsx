
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { locales, defaultLocale } from '@/lib/i18n'
import '@/App.css'

const DefaultLayout = ({ children, params }) => {
    const lang = locales[params?.lang] ? params.lang : defaultLocale;
    const direction = locales[lang]?.dir || 'ltr';

    return (
        <div
            dir={direction}
            className={
                lang === 'ar'
                    ? 'font-arabic min-h-screen flex flex-col'
                    : 'font-english min-h-screen flex flex-col'
            }
        >
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton phone="971554241891" />
        </div>
    )
}


export default DefaultLayout;
