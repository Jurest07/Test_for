import React from 'react'
import './style.css';
import DesignButton from '../../components/UI/Buttons/ButtonA/AuthButton';
import LoginInput from '../../components/UI/Inputs/LoginInput';

const RegistrationForm = ({switchFunc, sAuth}) => {
    return (
        <form>
            <div className="inputBlock">
                <LoginInput 
                    inputType={'name'}
                    wrapperStyle={{width: '47%'}}
                    logoBlockStyle={{width: '40%'}}
                />
                <LoginInput
                    inputType={'surname'}
                    wrapperStyle={{width: '50%'}}
                    logoBlockStyle={{width: '37%'}}
                />
            </div>
            <LoginInput inputType={'email'}/>
            <LoginInput inputType={'password'}/>
            <LoginInput inputType={'repeat_password'}/>
            <div className="buttons_container">
                <DesignButton onClick={sAuth}>
                    Создать аккаунт
                </DesignButton>
                <DesignButton onClick={switchFunc}>
                    Аутентификация
                </DesignButton>
            </div>
        </form>
    )
}

export default RegistrationForm