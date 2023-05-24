import React, { useState } from 'react';
import styles from './HeaderSubmenu.module.css';

const HeaderSubmenu = ({ data, setSortedValue }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleHover = (event, index) => {
        if (activeIndex !== index) {
            event.target.style.setProperty('--hover-width', `${event.target.offsetWidth}px`);
        } 
    };

    const handleClick = (index) => {
        setActiveIndex(index);
        setSortedValue(index + 1);
    };

    const subMenuElements = data.map((item, index) => {
        const separator = index !== data.length - 1 ? <span>|</span> : null;
        const isActive = activeIndex === index;

        return (
            <>
                <span
                    key={index * 2}
                    className={`${styles.text} ${isActive ? styles.active : ''}`}
                    onMouseOver={(event) => handleHover(event, index)}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </span>
                <span key={index * 2 + 1} className={styles.separation}>
                    {separator}
                </span>
            </>
        );
    });

    return <div className={styles.wrapper}>{subMenuElements}</div>;
};

export default HeaderSubmenu;
