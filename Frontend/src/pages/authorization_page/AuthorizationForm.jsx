import React from 'react'
import './style.css';
import DesignButton from '../../components/UI/Buttons/ButtonA/AuthButton';
import LoginInput from '../../components/UI/Inputs/LoginInput';
import StandartedCheckbox from '../../components/UI/Checkboxes/StandartedCheckbox';
import UnderlinedLink from '../../components/UI/UnderlinedLink/UnderlinedLink';

const AuthorizationForm = ({switchFunc, sAuth}) => {
    return (
        <form>
            <LoginInput inputType={'login'}/>
            <LoginInput inputType={'password'}/>

            <div className="additional_option">
                <StandartedCheckbox className='forgot_me'>
                    Запомнить меня
                </StandartedCheckbox>
                <UnderlinedLink>Забыли пароль?</UnderlinedLink>
            </div>
            <div className="buttons_container">
                <DesignButton onClick={sAuth}>
                    Войти
                </DesignButton>
                <DesignButton onClick={switchFunc}>
                    Регистрация
                </DesignButton>
            </div>
        </form>
    )
}

export default AuthorizationForm