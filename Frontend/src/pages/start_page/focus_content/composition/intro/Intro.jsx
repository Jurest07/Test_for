import React, { useState, useEffect, useCallback } from 'react'
import styles from './Intro.module.css'
import AnimatedText from '../../../../../components/Decorations/AnimatedText/AnimatedText'
import { motion } from "framer-motion";
import StartLangeSelector from './StartLangeSelector';
const { startPage } = require('../../../../../localizationData');

const Intro = ({ color, selectLang, activeValue, authLink, activeInfoSection, stateTopMenu }) => {
    const [isIntroTextPrinted, setIsIntroTextPrinted] = useState(false);
    const valueLeng = selectLang[0];
    const [localMenuTop, setLocalMenuTop] = useState(0);
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);
    const [lengtheningMenu, setLengtheningMenu] = useState(false);
    const stateTopMenuValue = stateTopMenu[0];
    //const [stateTopMenuValue, setStateTopMenu] = stateTopMenu;
    useEffect(() => {
        const elem = document.getElementsByClassName(styles.bottom)[0];
        if (elem) {
            const rect = elem.getBoundingClientRect();
            setLocalMenuTop(rect.top + window.pageYOffset - 120);
        }
    }, [isIntroTextPrinted, localMenuTop]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight * 0.35 < window.pageYOffset) {
            setIsIntroTextPrinted(true);
        }
        if (localMenuTop && (window.pageYOffset > localMenuTop)) {
            setIsVisibleMenu(true);
            setTimeout(() => { setLengtheningMenu(true) }, 1000)
            activeInfoSection(true);
        } else {
            setLengtheningMenu(false);
            setIsVisibleMenu(false);
        }
    }, [localMenuTop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const topMenuAdditionalStyle = {
        position: 'fixed',
        top: '2%',
        left: lengtheningMenu && !activeValue ? '15vw' : '35vw',
        width: lengtheningMenu ? (!activeValue ? '86vw' : '65vw') : '60vw',
        transition: 'all 1s ease-in-out',
        backgroundColor: 'black',
        border: `2px solid ${color}`,
        borderRadius: '40px 0 0 40px',
        height: '80px',
    }

    const shortTopMenuAdditionalStyle = {
        position: 'fixed',
        top: '2%',
        left: '89.5vw',
        width: '10.5vw',
        transition: 'all 1s ease-in-out',
        backgroundColor: 'black',
        border: `2px solid ${color}`,
        borderRadius: '40px 0 0 40px',
        height: '80px',
        justifyContent: 'center',
    }

    const bottomLeftAdditionalStyle = {
        border: '0px solid black',
        fontSize: lengtheningMenu ? '2vw' : '2vw',
        lineHeigth: lengtheningMenu ? 'calc(1.05 * 2vw)' : 'calc(1.05 * 2vw)',
        width: lengtheningMenu && !activeValue ? '60%' : '76%',
        backgroundColor: 'rgba(0,0,0,0)',
    }

    const shortBottomLeftAdditionalStyle = {
        border: '0px solid black',
        fontSize: '0px',
        opacity: '0',
        lineHeigth: '0',
        width: '0',
        backgroundColor: 'rgba(0,0,0,0)',
    }


    return (
        <div className={styles.wrapper} >
            <motion.div
                className={styles.textblock}
                style={{
                    borderRadius: isIntroTextPrinted ? '70px 70px 0px 0px' : '70px'
                }}
                animate={{ opacity: 1, translateX: "0%" }}
                initial={{ opacity: 0, translateX: "150%" }}
                transition={{
                    duration: 2,
                    repeat: 0,
                }}
            >
                <p className={styles.maintext}>
                    <AnimatedText
                        delay={2000}
                        setIsCompleted={setIsIntroTextPrinted}
                        text={startPage.intro_text[valueLeng]}
                        valueLeng={valueLeng}
                    />
                </p>
                {isIntroTextPrinted && <motion.p
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                        duration: 4,
                        repeat: 0,
                    }}
                    className={styles.signature}>
                    {startPage.with_respect[valueLeng]}<br />
                    {startPage.our_team[valueLeng]}
                </motion.p>}
            </motion.div>
            {isIntroTextPrinted &&
                <motion.div
                    className={styles.bottom}
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: "20vh", opacity: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    style={
                        isVisibleMenu
                            ? stateTopMenuValue
                                ? shortTopMenuAdditionalStyle
                                : topMenuAdditionalStyle
                            : {}
                    }
                >
                    <div
                        className={styles.bottom_left}
                        style={isVisibleMenu ? stateTopMenuValue ? shortBottomLeftAdditionalStyle : bottomLeftAdditionalStyle : {}}
                    >
                        <AnimatedText delay={2000} text={startPage.best_school[valueLeng]} />
                    </div>
                    <StartLangeSelector
                        selectLang={selectLang}
                        isVisibleMenu={isVisibleMenu}
                        authLink={authLink}
                        selectColor={color}
                        stateTopMenu={stateTopMenu}
                    />
                    { }
                </motion.div>
            }
        </div>
    )
}

export default Intro