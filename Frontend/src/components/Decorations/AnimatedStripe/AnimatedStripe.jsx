import React from 'react'
import styles from './AnimatedStripe.module.css'

const AnimatedStripe = ({children, ...props}) => {
    return (
        <div {...props} className={styles.stripe_container}>
            <div className={styles.stripe_animation}>
                <div className={styles.stripe}></div>
                <div className={styles.stripe}></div>
                <div className={styles.stripe}></div>
            </div>
        </div>
    );
};

export default AnimatedStripe;