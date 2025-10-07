import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
    return (
        <div className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <React.Fragment key={item.path}>
                    {index > 0 && <span className={styles.separator}>/</span>}
                    {item.path ? (
                        <Link to={item.path}>{item.label}</Link>
                    ) : (
                        <span className={styles.current}>{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs; 