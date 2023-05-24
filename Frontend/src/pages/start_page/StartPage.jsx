import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';
import LongMatrix from '../../components/Decorations/LongMatrixBack/LongMatrix';
import SideMenu from './side_menu/SideMenu';
import FocusContent from './focus_content/FocusContent';
import './style.css'


const StartPage = ({ selectLang }) => {
    const history = useNavigate();
    const [authorization] = generateFunctionTransfer(history, ['authorization'])
    const [isAsideMenuActive, setActiveMode] = useState(false);
    const [isTopMenuActive, setTopMenuActive] = useState(true);
    // 1 - компьютеры, 2 - планшеты, 3 - телефоны.
    const [displayValue, setDisplayValue] = useState(1);

    const get_color = () => {
        const height = window.innerHeight;
        const scrollTop = window.scrollY;
        if (scrollTop < height) {
            let relative = scrollTop / height;
            return `rgb(${45 - 45 * relative}, ${29 * relative + 107}, ${154 * relative + 40})`
        }
        if (scrollTop < height * 2) {
            let relative = scrollTop / height - 1;
            return `rgb(${255 * relative}, ${119 * relative + 136}, ${61 * relative + 194})`
        }
        return 'white';
    }

    window.addEventListener('scroll', function () {
        setColor(get_color());
        //для скрытия левой менюшки после второй композиции
        if (window.scrollY > window.innerHeight * 1.5) {
            setActiveMode(false);
        } else {
            setActiveMode(true);
        }

        //для скрытия верхней менюшки на третьей композиции
        if (window.scrollY > window.innerHeight * 1.7 && window.scrollY < window.innerHeight * 4) {
            setTopMenuActive(true);
        } else {
            setTopMenuActive(false);
        }
    });

    const [color, setColor] = useState(get_color());
    const activeState = useState(false);

    window.addEventListener('load', function () {
        if (window.innerWidth < 600) {
            setDisplayValue(3);
        } else if (window.innerWidth < 1024) {
            setDisplayValue(2);
        } else {
            setDisplayValue(1);
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth < 600) {
            setDisplayValue(3);
        } else if (window.innerWidth< 1024) {
            setDisplayValue(2);
        } else {
            setDisplayValue(1);
        }
    });

    return (
        <div className='wrapper_start_page'>
            <LongMatrix selectColor={color} />
            <div className='wrapper_content'>
                <SideMenu
                    displayValue = {displayValue}
                    color={color}
                    selectLang={selectLang}
                    activeState={activeState}
                    MenuState={[isAsideMenuActive, setActiveMode]}
                />
                <FocusContent
                    color={color}
                    selectLang={selectLang}
                    displayValue = {displayValue}
                    activeValue={activeState[0]}
                    authLink={authorization}
                    stateTopMenu={[isTopMenuActive, setTopMenuActive]}
                />
            </div>
        </div>
    )
}

export default StartPage;