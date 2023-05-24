import React from 'react'
import styles from './CircularIcon.module.css'
const CircularIcon = ({imgSrc, ...props}) => {
    return (
        <img className = {styles.icon} {...props} src={`/img/logos_social_networks/${imgSrc}.png`} alt={`logo_${imgSrc}`} />
    )
}

export default CircularIcon