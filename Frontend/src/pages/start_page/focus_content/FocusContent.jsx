import React, { useState } from 'react'
import Intro from './composition/intro/Intro'
import InfoContent from './composition/info/InfoContent'
import styles from './FocusContent.module.css'
import CursesList from './composition/curses_list/CursesList'
const FocusContent = ({ color, selectLang, activeValue, authLink, stateTopMenu, displayValue }) => {
    const [isIntfoVisable, setIsInfroVisable] = useState(false);
    return (
        <section className={styles.wrapper}>
            <Intro
                color={color}
                selectLang={selectLang}
                activeValue={activeValue}
                authLink={authLink}
                activeInfoSection={setIsInfroVisable}
                stateTopMenu={stateTopMenu}
            />
            {isIntfoVisable &&
                <InfoContent
                    selectLang={selectLang}
                    activeValue={activeValue}
                />}
            <CursesList
                displayValue={displayValue}
                selectLang={selectLang}
            />
        </section>
    )
}

export default FocusContent