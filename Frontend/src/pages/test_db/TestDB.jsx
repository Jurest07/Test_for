import React from 'react'
import UserList from './UserList';
import generateFunctionTransfer from '../../utils/animatedBacground';
import { useNavigate } from 'react-router-dom';
    
    
const TestDB = () => {
    const history = useNavigate();
    const [goMain, goLC] = generateFunctionTransfer(history, ["", "personal_account"])  
    return (
        <UserList/>
    )
}

export default TestDB