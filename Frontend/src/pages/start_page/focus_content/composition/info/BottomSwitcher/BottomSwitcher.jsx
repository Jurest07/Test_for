import React from 'react'
import styles from './BottomSwitcher.module.css'
import { motion } from "framer-motion";

const BottomSwitcher = ({ CountPos, ActivePos, setFocusSlide }) => {
    const blocks = Array.from({ length: CountPos }, (_, i) => (
        <motion.div
            key={i}
            className={(ActivePos - 1) === i ? styles.active_block : styles.inactive_block}
            animate={{ opacity: 1, y: [20, -10, 5, -2, 0] }}
            initial={{ opacity: 0, y: 0 }}
            transition={{
                delay: 5 + i / 4,
                duration: 1,
                repeat: 0,
            }}
            onClick={() => { setFocusSlide(i + 1); }}
        />
    ));

    return <div className={styles.first_wrapper}>
        {ActivePos !== 1
            ? <motion.img
                src="img/start_page/pointer_before.png"
                alt="pointer_back"
                className={styles.pointer}
                onClick={() => setFocusSlide(--ActivePos)}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{
                    delay: 5,
                    duration: 1,
                    repeat: 0,
                }}
            />
            : <span />
        }
        <div className={styles.wrapper}>{blocks}</div>
        <motion.img
            src="img/start_page/pointer_next.png"
            alt="pointer_next"
            className={styles.pointer}
            onClick={() => setFocusSlide(++ActivePos)}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{
                delay: 5,
                duration: 1,
                repeat: 0,
            }}
        />
    </div>
};

export default BottomSwitcher;
