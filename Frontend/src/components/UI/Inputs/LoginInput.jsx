import React from 'react'
import styles from './LoginInput.module.css'
const LoginInput = ({inputType, wrapperStyle, logoBlockStyle , imgStyle}) => {
    
    const dataInput = {
        login: {type: 'text', logoSrc: 'user', placeholder: 'Введите E-mail'},
        password: {type: 'password', logoSrc: 'lock', placeholder: 'Введите пароль'},
        repeat_password: {type: 'password', logoSrc: 'lock', placeholder: 'Повторите пароль'},
        email: {type: 'email', logoSrc: 'at', placeholder: 'Введите E-mail'},
        name: {type: 'text', logoSrc: 'user', placeholder: 'Имя'},
        surname: {type: 'text', logoSrc: 'user', placeholder: 'Фамилия'},
    }

    return (
        <div className={styles.wrapper} style={wrapperStyle}>
            <div className={styles.logo} style={logoBlockStyle}>
                <img 
                    src={`/img/input_logo/${dataInput[inputType].logoSrc}.png`} 
                    alt={`${inputType}_logo`} 
                    className={styles.logo_img}
                    style={imgStyle}
                />
            </div>
            <input className={styles.content} type={dataInput[inputType].type} placeholder={dataInput[inputType].placeholder} />
        </div>
    )
}

export default LoginInput