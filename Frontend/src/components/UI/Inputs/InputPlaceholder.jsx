import React, { useState } from 'react';
import styles from './InputPlaceholder.module.css';

const InputPlaceholder = ({ textState, wrapperStyleClass, inputType, placeholderStyle, placeholderText, extraPlaceholder }) => {
    const [text, setText] = textState;
    const [isVisiblePlaceholder, setVisiblePlaceholder] = useState(false);

    const handleFocus = () => {
        extraPlaceholder[1]('');
        setVisiblePlaceholder(true);
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            setVisiblePlaceholder(false);
        }
    };

    return (
        <div className={`${styles.input_container} ${wrapperStyleClass}`} >
            <input
                type={inputType || "text"}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={extraPlaceholder[0]?'':text}
                onChange={e=>{setText(e.target.value); extraPlaceholder[1]('');}}
            />
            <label
                className={isVisiblePlaceholder && !extraPlaceholder[0]
                    ? styles.active
                    : ''}
                style={placeholderStyle}
            >
                {extraPlaceholder[0]||placeholderText}
            </label>
        </div>
    );
};

export default InputPlaceholder;
