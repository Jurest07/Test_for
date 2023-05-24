import React from 'react'
import classes from './AuthButton.module.css';

const DesignButton = ({children, ...props}) => {
    return (
        <button className={classes.DesignButton} {...props} >
            {children}
        </button>
    )
}

export default DesignButton