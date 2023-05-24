import React from 'react'
import CircularIconPanel from '../../components/Decorations/CircularIconPanel/CircularIconPanel'

const FormFooter = () => {
    const dataIcons = [
        'apple',
        'facebook',
        'twitter',
        'vk',
        'google'
    ];
    return (
        <div className="authorization_form_footer">
            <CircularIconPanel dataIcons={dataIcons}/>
            <div className="clickable lang_selecter">
                RU
            </div>
        </div>
    )
}

export default FormFooter