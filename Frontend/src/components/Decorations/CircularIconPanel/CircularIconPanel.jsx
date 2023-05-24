import React from 'react'
import CircularIcon from '../CircularIcon/CircularIcon'
import styles from './CircularIconPanel.module.css'
const CircularIconPanel = ({dataIcons, styleIcons, ...props}) => {
    const IconsPanel = dataIcons.map(
        element => 
        <CircularIcon style={styleIcons}
            imgSrc={element}
        />
    );
    return (
        <div className={styles.icons_panel} {...props}>
            {IconsPanel}
        </div>
    )
}

export default CircularIconPanel