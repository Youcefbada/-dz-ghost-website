import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Enable smooth scroll via CSS
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
