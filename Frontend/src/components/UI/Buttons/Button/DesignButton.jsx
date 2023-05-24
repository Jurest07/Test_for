import React from 'react'
import classes from './DesignButton.module.css';

const DesignButton = ({children, ...props}) => {
    return (
        <button className={classes.DesignButton} {...props} >
            {children}
        </button>
    )
}

export default DesignButton