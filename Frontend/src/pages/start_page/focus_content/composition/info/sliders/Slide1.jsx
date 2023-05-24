import React from 'react'
import styles from './Slide1.module.css'
import InfoPanel from '../InfoPanel/InfoPanel'
import BottomSwitcher from '../BottomSwitcher/BottomSwitcher'
import { startPage } from '../../../../../../localizationData'
import AnimatedText from '../../../../../../components/Decorations/AnimatedText/AnimatedText'

const Slide1 = ({setFocusSlide, selectLang}) => {
    const Lang = selectLang[0];
    const dataContent = [
        startPage.fast_growing[Lang],
        startPage.international_organization[Lang],
        startPage.multidisciplinary_school[Lang],
        startPage.your_future[Lang],
    ]   
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}><AnimatedText text={startPage.we[Lang]} delay={1} valueLeng={Lang} colorCursor={'#009aad'}/></span>
            <InfoPanel data={dataContent}  SpecialPos={3}/>
            <BottomSwitcher CountPos={3} ActivePos={1} setFocusSlide={setFocusSlide}/>
        </div>
    )
}

export default Slide1