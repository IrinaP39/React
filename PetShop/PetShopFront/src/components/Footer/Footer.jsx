import React from 'react';
import cls from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <h2 className={cls.title}>Contact</h2>

                <div className={cls.grid}>
                    {/* Phone */}
                    <div>
                        <h3 className={cls.label}>Phone</h3>
                        <a
                            href="tel:+4930915-88492"
                            className={cls.value}
                        >
                            +49 30 915-88492
                        </a>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className={cls.label}>Socials</h3>
                        <div className={cls.socials}>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cls.socialLink}
                            >
                                <img
                                    src="/instagram.svg"
                                    alt="Instagram"
                                    className={cls.socialIcon}
                                />
                            </a>
                            <a
                                href="https://whatsapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cls.socialLink}
                            >
                                <img
                                    src="/whatsapp.svg"
                                    alt="WhatsApp"
                                    className={cls.socialIcon}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className={cls.label}>Address</h3>
                        <p className={cls.value}>
                            Wallstraße 9-13, 10179 Berlin, Deutschland
                        </p>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h3 className={cls.label}>Working Hours</h3>
                        <p className={cls.value}>
                            24 hours a day
                        </p>
                    </div>
                </div>

                {/* Map */}
                <div className={cls.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409042779994!2d13.413333776677416!3d52.51298563712074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e2328ed4b1d%3A0x4a368e3ee5c6d8f0!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1709728431189!5m2!1sen!2sus"
                        className={cls.mapFrame}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer; 