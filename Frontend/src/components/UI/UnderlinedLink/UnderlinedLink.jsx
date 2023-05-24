import React from 'react'
import styles from './UnderlinedLink.module.css'
const UnderlinedLink = ({children, ...props}) => {
    return (
        <a className={styles.underlined_link} {...props}>{children}</a>
    )
}

export default UnderlinedLink