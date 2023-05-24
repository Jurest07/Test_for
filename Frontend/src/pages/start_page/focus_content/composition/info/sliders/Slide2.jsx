import React from 'react'
import InfoPanel from '../InfoPanel/InfoPanel'
import BottomSwitcher from '../BottomSwitcher/BottomSwitcher'
import styles from './Slide2.module.css'
import { startPage } from '../../../../../../localizationData'
import AnimatedText from '../../../../../../components/Decorations/AnimatedText/AnimatedText'
const Slide2 = ({setFocusSlide, selectLang}) => {
    const Lang = selectLang[0];
    const dataContent = [
        startPage.teaching_any_age[Lang],
        startPage.getting_skills[Lang],
        startPage.development_any_level[Lang],
        startPage.cool_projects_portfolio[Lang],
        startPage.certified_certificate[Lang],
    ]
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}><AnimatedText text={startPage.offer[Lang]} delay={1} valueLeng={Lang} colorCursor={'#009aad'}/></span>
            <InfoPanel data={dataContent} />
            <BottomSwitcher CountPos={3} ActivePos={2} setFocusSlide={setFocusSlide} />
        </div>
    )
}

export default Slide2