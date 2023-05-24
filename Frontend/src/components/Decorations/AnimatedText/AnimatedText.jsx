import React, { useState, useEffect, useRef } from 'react';
import styles from './AnimatedText.module.css';

const AnimatedText = ({ setIsCompleted, text, delay, valueLeng, colorCursor }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const textIndex = useRef(0);
    
    const colorCursorStyle = {
        '--animated_cursor_color': colorCursor?colorCursor:'#016F12',
        backgroundColor: colorCursor?colorCursor:'#016F12',
    }

    useEffect(() => {
        setDisplayText('');
        let timeout;
        let interval;
        textIndex.current = 0;
        if (setIsCompleted) setIsCompleted(false);
        timeout = setTimeout(() => {
            interval = setInterval(() => {
                if (textIndex.current < text.length) {
                    textIndex.current++;
                    setDisplayText((prevText) => prevText + text[textIndex.current - 1]);
                } else {
                    if (setIsCompleted) setIsCompleted(true);
                    clearInterval(interval);
                    setShowCursor(false);
                }
            }, 60);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, valueLeng, delay]); 


    return (
        <div className={styles.animatedText}>
            {displayText}
            {showCursor && <span className={styles.animatedTextCursor} style={colorCursorStyle}></span>}
        </div>
    );
};

export default AnimatedText;
