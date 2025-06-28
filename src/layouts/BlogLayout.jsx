import DefaultLayout from './DefaultLayout';
import DiscountPopup from '@/components/DiscountPopup';

const BlogLayout = ({ children, params }) => {
    return (
        <DefaultLayout params={params}>
            {children}
            <DiscountPopup />
        </DefaultLayout>
    );
};

export default BlogLayout;