import React, { useState } from 'react'
import './style.css';
import AnimatedStripe from '../../components/Decorations/AnimatedStripe/AnimatedStripe';
import DesignButton from '../../components/UI/Buttons/Button/DesignButton';
import { useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';
import CompanyTitle from '../../components/Decorations/CL_title/CompanyTitle';
const NonExistentPage = () => {

    const history = useNavigate();
    const [styleObject, setStyleObject] = useState(null);
    const [goMain, goLC] = generateFunctionTransfer(history, ["", "personal_account"])

    return (
        <div className='main_background'>
            <CompanyTitle id='company_title_mobile_404'/>
            <img src='/img/girl_404.png' className='girl_image blur_animation' alt="perplexed girl" />
            <div className='button_block_mobile'>
                        <DesignButton onClick={goMain} id='button_404_gomain'>Главная страница</DesignButton>
                        <DesignButton onClick={goLC} id='button_404_goLC'>Личный кабинет</DesignButton>
                    </div>
            <div className='left_part'>
                <div className='local_header'>
                    <div className='error_ntf '>Страница<br/>не найдена</div>
                </div>
                <div className='local_midle'>
                    <AnimatedStripe style={styleObject} id='aminated404'/>
                    <div className="error_code">404</div>
                    <div className='button_block'>
                        <DesignButton onClick={goMain} id='button_404_gomain'>Главная страница</DesignButton>
                        <DesignButton onClick={goLC} id='button_404_goLC'>Личный кабинет</DesignButton>
                    </div>
                    <CompanyTitle id='company_title_404'/>
                </div>
                <div className='local_header_mobile'>
                    <div className='error_ntf '>Страница<br/>не найдена</div>
                </div>
            </div>
        </div>
    )
}

export default NonExistentPage