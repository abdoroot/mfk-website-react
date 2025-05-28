import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useGTMPageView() {
    const location = useLocation();

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'pageview',
            pagePath: location.pathname + location.search,
        });
    }, [location]);
}

export default useGTMPageView;
