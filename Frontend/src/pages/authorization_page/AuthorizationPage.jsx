import React from 'react'
import Matrix from '../../components/Decorations/Matrix/Matrix'
import './style.css';
import LeftDecorate from './LeftDecorate';
import RightForm from './RightForm';

const AuthorizationPage = () => {
    return (
        <>
            <Matrix />
            <div className="authorization_page_content">
                <LeftDecorate />
                <RightForm />
            </div>
        </>
    )
}

export default AuthorizationPage