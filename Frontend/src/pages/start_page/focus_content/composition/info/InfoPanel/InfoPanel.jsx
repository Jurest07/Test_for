// InfoPanel.js

import React from 'react'
import styles from './InfoPanel.module.css'
import { motion } from "framer-motion";

const InfoPanel = ({ data, SpecialPos }) => {
    const TextContentPanel = data.map((element, index) => {
        if (index === SpecialPos) {
            return (
                <React.Fragment key={index}>
                    <motion.span
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{
                            delay: 1 + index,
                            duration: 1,
                            repeat: 0,
                        }}
                    >
                        <img
                            src="img/start_page/check_mark.png"
                            alt="check_mark"
                            className={styles.check_mark}
                        />
                        {element}
                    </motion.span>
                    <motion.span
                        className={styles.special}
                        animate={{ width: "36%" }}
                        initial={{ width: "0%" }}
                        transition={{
                            duration: 1,
                            delay: 2 + index,
                        }}
                    />
                </React.Fragment>
            )
        } else {
            return (
                <motion.span
                    key={index}
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{
                        delay: 1 + index,
                        duration: 1,
                        repeat: 0,
                    }}
                >
                    <img
                        src="img/start_page/check_mark.png"
                        alt="check_mark"
                        className={styles.check_mark}
                    />
                    {element}
                </motion.span>
            )
        }
    })
    return (
        <div className={styles.wrapper}>
            {TextContentPanel}
        </div>
    )
}

export default InfoPanel
