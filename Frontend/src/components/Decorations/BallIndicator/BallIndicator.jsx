import React, { useEffect } from 'react';
import styles from './BallIndicator.module.css';

const BallIndicator = ({style, limits, scrollState}) => {
    const [scrollValue, setScrollValue] = scrollState;
    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = scrollPosition / totalHeight;
            setScrollValue(scrollPercentage);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div
            className={styles.ballIndicator}
            style={{ ...style, top: `${scrollValue * (  limits.end - limits.start ) + limits.start}%` }}
        ></div>
    );
};

export default BallIndicator;
