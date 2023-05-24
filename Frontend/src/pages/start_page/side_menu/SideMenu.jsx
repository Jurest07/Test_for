import React, { useState } from 'react'
import styles from './SideMenu.module.css'
import CompanyLogo from '../../../components/Decorations/CL_logo/CompanyLogo'
import ContextMenu from './ContextMenu'
import { motion } from "framer-motion";
import { startPage, menuPoints } from '../../../localizationData';

const SideMenu = ({ color, selectLang, activeState, MenuState, displayValue }) => {
    const valueLeng = selectLang[0];
    const [activeMode, setActiveMode] = activeState;
    const scrollState = useState(0);
    const [stateFocusCL, setStateFocusCL] = useState(false);
    const [isAsideMenuActive, setActiveModeMenu] = MenuState;
    const menuStyleHover = displayValue === 1
        ? {
            '--asideMenuHoverWidth': '31vw',
            '--asideMenuHoverHeight': '100vh'
        }
        : displayValue === 2
            ? {
                '--asideMenuHoverWidth': '27vw',
                '--asideMenuHoverHeight': '40vh'
            }
            : {
                '--asideMenuHoverWidth': '100vw',
                '--asideMenuHoverHeight': '10vh'
            }
    const logoStyles = {
        width: activeMode ? '0' : '100%',
        height: activeMode ? '0px' : '9vh',
        fontSize: activeMode ? '0px' : 'max(4.2vw, 20px)',
        color: color,
        border: `${color} ${activeMode ? '0px' : 'calc(0.2vw + 2px)'} solid`,
        transition: 'all 1s ease-in-out',
        left: activeMode ? '-5vw' : '0vw',
        display: displayValue !== 3 ? 'flex' : 'none',
        cursor: 'pointer',
        boxShadow: stateFocusCL ? `inset  0px 0px 10px ${color}` : `0px 0px 15px ${color}`,
    }

    const menuStyle = {
        color: color,
        borderColor: color,
        height: displayValue !== 3
            ? activeMode
                ? '100vh'
                : isAsideMenuActive
                    ? '78.5%'
                    : '0%'
            : activeMode
                ? '103vh'
                : '10vh',
        border: isAsideMenuActive ? 'calc(0.2vw + 2px) solid' : '0px',
        fontSize: isAsideMenuActive ? 'min(4.5vw, 55px)' : '0px',
        backgroundColor: isAsideMenuActive ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
    }

    const wrapperStyle = activeMode
        ? {
            height: '100vh',
            paddingBottom: '0px',
        }
        : {}

    const menuPointsData = [
        { id: 0, title: menuPoints.main[valueLeng], scrollValue: 0},
        { id: 1, title: menuPoints.about_us[valueLeng], scrollValue: 700},
        { id: 2, title: menuPoints.courses[valueLeng], scrollValue: 1500},
        { id: 3, title: menuPoints.founders[valueLeng], scrollValue: 3},
        { id: 4, title: menuPoints.reviews[valueLeng], scrollValue: 4},
        { id: 5, title: menuPoints.questions[valueLeng], scrollValue: 5},
        { id: 6, title: menuPoints.contacts[valueLeng], scrollValue: 6},
    ]

    return (
        <motion.div
            className={styles.wrapper}
            style={wrapperStyle}
            animate={{ opacity: 1, translateX: "0%" }}
            initial={{ opacity: 0, translateX: "-50%" }}
            transition={{
                duration: 2,
                repeat: 0,
            }}
        >

            <CompanyLogo
                style={logoStyles}
                onMouseEnter={() => { setStateFocusCL(true) }}
                onMouseLeave={() => { setStateFocusCL(false) }}
                onClick={() => { setActiveModeMenu(!isAsideMenuActive) }}
            />

            <div
                className={styles.AsideMenu}
                style={{ ...menuStyle, ...menuStyleHover }}
                onMouseEnter={() => { setActiveMode(true) }}
                onMouseLeave={() => { setActiveMode(false) }}
                onClick={() => { setActiveModeMenu(!activeMode) }}
            >
                {activeMode
                    ? <ContextMenu
                        selectColor={color}
                        scrollState={scrollState}
                        menuPointsData={menuPointsData}
                    />
                    : startPage.aside_menu_title[valueLeng]
                }
            </div>
        </motion.div>
    )
}

export default SideMenu