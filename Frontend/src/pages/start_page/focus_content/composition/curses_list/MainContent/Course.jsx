import React from 'react'
import styles from './Course.module.css'
import { startPage } from '../../../../../../localizationData';

const Course = ({ data, selectLang, additionalStyle, displayValue }) => {
    return (
        displayValue !== 3
            ?
            <div key={data.id} className={styles.wrapper} style={additionalStyle}>
                <div className={styles.logo_block}>
                    <img
                        src={`img/courses_logo/${data.logo}.png`}
                        alt={`Логотип ${data.title}`}
                        className={styles.logo_img}
                    />
                </div>
                <div className={styles.content_block}>
                    <div className={styles.title}>{data.title[selectLang[0]]}</div>
                    <div className={styles.description}>{data.description[selectLang[0]]}</div>
                    <div className={styles.buttons}>
                        <button className={styles.button}>{startPage.details[selectLang[0]]}</button>
                        <button className={styles.button}>{startPage.trying[selectLang[0]]}</button>
                    </div>
                </div>
            </div>
            :
            <div key={data.id} className={styles.wrapper} style={additionalStyle}>
                <div className={styles.title_logo}>
                    <div className={styles.logo_block}>
                        <img
                            src={`img/courses_logo/${data.logo}.png`}
                            alt={`Логотип ${data.title}`}
                            className={styles.logo_img}
                        />
                    </div>
                    <div className={styles.title}>{data.title[selectLang[0]]}</div>
                </div>
                <div className={styles.content_block}>
                    <div className={styles.description}>{data.description[selectLang[0]]}</div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}>{data.details[selectLang[0]]}</button>
                    <button className={styles.button}>{data.try[selectLang[0]]}</button>
                </div>
            </div>
    )
}

export default Course