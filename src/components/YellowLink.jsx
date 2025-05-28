
import { Link } from 'react-router-dom';

const YellowLink = ({ href = '#', children, ...props }) => {
    return (
        <Link href={href} {...props} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition inline-block">
            {children}
        </Link>
    );
};

export default YellowLink;
