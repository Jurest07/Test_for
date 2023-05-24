import React from 'react'
import styles from './HeaderContent.module.css'
import Finder from '../Finder/Finder'

const HeaderContent = ({requestState, totalCountResult, selectLang}) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>
                Онлайн курсы
            </span>
            <Finder requestState={requestState} totalResult={totalCountResult} selectLang={selectLang} />
        </div>
    )
}

export default HeaderContent