import React from 'react'
import {useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';
import TopMenu from '../../components/PA/Top_menu/TopMenu';
import SideMenu from '../../components/PA/Aside_menu/SideMenu';
import MainContent from './MainContent';

const PersonalPage = () => {
    
    const history = useNavigate();
    const [goMain] = generateFunctionTransfer(history, ['/'])

    return (
        <>
            <TopMenu outLink={goMain}/>
            <div style={{display: 'flex'}}>
                <SideMenu/>
                <MainContent/>
            </div>
        </>
    )
}

export default PersonalPage