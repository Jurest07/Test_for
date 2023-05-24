import React from 'react'


const StandartedCheckbox = ({children, ...props}) => {
    return (
        <label>
            <input type="checkbox" {...props} /> 
            {children}
        </label>
    )
}

export default StandartedCheckbox