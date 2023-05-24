import React from 'react'
import styles from './LoginPanel.module.css'
import { startPage } from '../../../../../localizationData'

const LoginPanel = ({authLink, selectLang, selectColor, stateTopMenuValue}) => {
    
    const hideLoginImgStyle = {
        width: 0,
        opacity: 0,
        border: '0px solid',
    }

    return (
        <div className={styles.wrapepr}>
            <img
                src="img/start_page/unknow_profile.png" alt="unknow_profile"
                className={styles.avatart}
                style={ stateTopMenuValue?hideLoginImgStyle:{border: `2px solid ${selectColor}` }}
            />
            <span
                className={styles.enter_link}
                onClick={authLink}
                style={stateTopMenuValue ? { marginLeft: '-20px' } : {}}
            >
                {startPage.login[selectLang[0]]}
            </span>
        </div>
    )
}

export default LoginPanel