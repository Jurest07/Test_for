import React, { useState } from 'react';
import styles from './InfoContent.module.css';
import Slide1 from './sliders/Slide1';
import { motion } from "framer-motion";
import Slide2 from './sliders/Slide2';
import Slide3 from './sliders/Slide3';

const InfoContent = ({ selectLang, activeValue }) => {
    const [slideToDisplay, setSlideToDisplay] = useState(1);

    const ifMenuIsActiveStyle = {
        marginLeft: '-2.5vw',
    }

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight * (2.25/7),
            behavior: 'smooth'
        });
    }

    return (
        <motion.section
            className={styles.wrapper}
            style={activeValue && ifMenuIsActiveStyle}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{
                duration: 1,
                repeat: false,
            }}
        >
            {slideToDisplay === 1
                ? <Slide1 setFocusSlide={setSlideToDisplay} selectLang={selectLang} />
                : slideToDisplay === 2
                    ? <Slide2 setFocusSlide={setSlideToDisplay} selectLang={selectLang} />
                    : <Slide3 selectLang={selectLang} scrollFunk={scrollToBottom}/>}
        </motion.section>
    );
};

export default InfoContent;
