import React, { useState } from 'react';
import styles from './Finder.module.css';
import InputPlaceholder from '../../../../../../components/UI/Inputs/InputPlaceholder';
import { startPage } from '../../../../../../localizationData';

const Finder = ({ requestState, totalResult, selectLang }) => {
    const [flashAnimation, setFlashAnimation] = useState(false);
    const [finderResult, setFinderResult] = useState('');

    const handleClick = () => {
        setFlashAnimation(true);
        setTimeout(() => {
            setFlashAnimation(false);
        }, 700);
        setFinderResult(`Запрос: "${requestState[0]}" дал ${totalResult} результата`);
    };
    return (
        <div className={styles.wrapper}>
            <InputPlaceholder
                inputType="text"
                wrapperStyleClass={styles.input}
                placeholderText={startPage.searching[[selectLang[0]]]}
                textState={requestState}
                extraPlaceholder={[finderResult, setFinderResult]}
            />
            <img
                className={`${styles.searchIcon} ${flashAnimation ? styles.flashAnimation : ''}`}
                src='img/start_page/search.png'
                onClick={handleClick}
            />
        </div>
    );
};

export default Finder;
