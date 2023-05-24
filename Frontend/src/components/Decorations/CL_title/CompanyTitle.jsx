import React from 'react'
import styles from './CompanyTitle.module.css'
const CompanyTitle = ({wrapperStyle, textStyle, ...props}) => {
    return (
        <div className={styles.company_title_wrapper} style={wrapperStyle} {...props}>
            <div className={styles.company_title} style={textStyle}>Code Live</div>
        </div>
    )
}

export default CompanyTitle