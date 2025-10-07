import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    const discount = product.discont_price
        ? Math.round(((product.price - product.discont_price) / product.price) * 100)
        : 0;

    return (
        <Link to={`/products/${product.id}`} className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                    className={styles.productImage}
                />
                {product.discont_price && (
                    <span className={styles.discountBadge}>
                        -{discount}%
                    </span>
                )}
            </div>
            <div className={styles.productContent}>
                <h3>{product.title}</h3>
                <div className={styles.priceContainer}>
                    {product.discont_price ? (
                        <>
                            <span className={styles.discountPrice}>${product.discont_price}</span>
                            <span className={styles.regularPrice}>${product.price}</span>
                        </>
                    ) : (
                        <span className={styles.price}>${product.price}</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard; 