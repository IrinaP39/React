import React from 'react';
import cls from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={cls.overlay} onClick={onClose}>
            <div className={cls.modal} onClick={e => e.stopPropagation()}>
                <button className={cls.closeButton} onClick={onClose}>×</button>
                <div className={cls.content}>
                    <h2 className={cls.title}>Congratulations!</h2>
                    <p className={cls.message}>
                        Your order has been successfully placed on the website.
                        <br />
                        A manager will contact you shortly to confirm your order.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal; 