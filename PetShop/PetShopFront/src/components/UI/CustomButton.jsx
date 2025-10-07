import React from 'react';

const CustomButton = (props) => {
    const { buttonText, onHandleClick, style, width } = props
    return (
        <button className={style} onClick={onHandleClick} style={{ width: width }}>
            {buttonText}
        </button>
    );
};

export default CustomButton;