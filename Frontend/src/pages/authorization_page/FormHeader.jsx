import React from 'react'

const FormHeader = ({Mode, closeLink}) => {
    return (
        <div className="authorization_form_title">
            {Mode ? 'Регистарция' : 'Авторизация'}
            <span className="clickable" onClick={closeLink} id="form_close">
                &times;
            </span>
        </div>
    )
}

export default FormHeader