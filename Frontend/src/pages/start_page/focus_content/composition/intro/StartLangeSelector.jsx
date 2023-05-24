import React, { useEffect, useRef } from 'react';
import styles from './StartLangeSelector.module.css';
import LoginPanel from './LoginPanel';

const StartLangeSelector = React.memo(({ selectLang, isVisibleMenu, authLink, selectColor, stateTopMenu }) => {
    const [valueLeng, setLang] = selectLang;
    const startSwitcher = useRef();
    const totalSwitcher = useRef();
    const stateTopMenuValue = stateTopMenu[0];

    const shortLangSelectorStyle = {
        width: '0px',
        opacity: '1',
        fontSize: '0',
        border: '0px solid'
    }

    useEffect(() => {
        const doubleSwitcher = startSwitcher.current;
        const soloSwitcher = totalSwitcher.current;
        if (!isVisibleMenu) {
            soloSwitcher.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 },
                ],
                {
                    duration: 500,
                    fill: 'both',
                },
            ).onfinish = () => {
                soloSwitcher.style.display = 'none';
            };
            setTimeout(() => {
                doubleSwitcher.style.display = 'flex';
                doubleSwitcher.animate(
                    [
                        { opacity: 0 },
                        { opacity: 1 },
                    ],
                    {
                        duration: 500,
                        fill: 'both',
                    },
                )
            }, 500);

        } else {
            doubleSwitcher.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 },
                ],
                {
                    duration: 500,
                    fill: 'both',
                },
            ).onfinish = () => {
                doubleSwitcher.style.display = 'none';
            };
            setTimeout(() => {
                soloSwitcher.style.display = 'flex';
                soloSwitcher.animate(
                    [
                        { opacity: 0 },
                        { opacity: 1 },
                    ],
                    {
                        duration: 500,
                        fill: 'both',
                    },
                )
            }, 500);
        }
    }, [isVisibleMenu]);

    const handleClick = (value) => {
        setLang(value);
    };

    const handleClickBottom = (value) => {
        const startBody = document.getElementsByTagName('body')[0];
        startBody.scrollIntoView({ behavior: 'smooth' });
        setLang(value);
    };


    return (
        <>
            <div
                ref={startSwitcher}
                className={styles.selector_styles}
                style={stateTopMenuValue ? shortLangSelectorStyle : {}}
            >
                <span
                    className={`${styles.lang} ${!valueLeng ? styles.active : styles.anactive}`}
                    onClick={() => handleClick(0)}
                    style={stateTopMenuValue ? shortLangSelectorStyle : {}}
                >
                    RU
                </span>
                {' | '}
                <span
                    className={`${styles.lang} ${valueLeng ? styles.active : styles.anactive}`}
                    onClick={() => handleClick(1)}
                    style={stateTopMenuValue ? shortLangSelectorStyle : {}}
                >
                    EN
                </span>
            </div>
            <div className={styles.solo_selector_styles} ref={totalSwitcher} style={stateTopMenuValue ? shortLangSelectorStyle : {}}>
                {!valueLeng
                    ? <span className={styles.solo_leng} style={stateTopMenuValue ? shortLangSelectorStyle : {}} onClick={() => handleClickBottom(1)}>RU</span>
                    : <span className={styles.solo_leng} style={stateTopMenuValue ? shortLangSelectorStyle : {}} onClick={() => handleClickBottom(0)}>EN</span>
                }
                <LoginPanel
                    authLink={authLink}
                    selectLang={selectLang}
                    selectColor={selectColor}
                    stateTopMenuValue={stateTopMenuValue}
                />
            </div>
        </>
    );
});

export default StartLangeSelector;
