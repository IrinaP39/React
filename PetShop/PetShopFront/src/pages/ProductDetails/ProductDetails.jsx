import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../Store/services/fetchProductDetails';
import { addItemToBasket } from '../../Store/slices/basketSlice';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product = null, loading, error } = useSelector((state) => state.productDetails);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProductDetails(id));
    }, [dispatch, id]);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            dispatch(addItemToBasket({
                ...product,
                quantity: quantity
            }));
        }
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>
                    <Link to="/">Main page</Link>
                    <span className={styles.separator}>/</span>
                    <Link to="/categories">Categories</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>Loading...</span>
                </div>
                <div>Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>
                    <Link to="/">Main page</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>Error</span>
                </div>
                <div>Error: {error.message}</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>
                    <Link to="/">Main page</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>Product not found</span>
                </div>
                <div>Product not found</div>
            </div>
        );
    }

    const discount = product.discont_price
        ? Math.round(((product.price - product.discont_price) / product.price) * 100)
        : 0;

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumbs}>
                <Link to="/">Main page</Link>
                <span className={styles.separator}>/</span>
                <Link to="/categories">Categories</Link>
                <span className={styles.separator}>/</span>
                <Link to="/categories/dry-food">Dry & Wet Food</Link>
                <span className={styles.separator}>/</span>
                <span className={styles.current}>{product.title}</span>
            </div>
            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <img
                        src={`http://localhost:3333${product.image}`}
                        alt={product.title}
                        className={styles.productImage}
                    />
                    {product.discont_price && (
                        <span className={styles.discountBadge}>-{discount}%</span>
                    )}
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <div className={styles.priceContainer}>
                        <span className={styles.discountPrice}>
                            ${product.discont_price || product.price}
                        </span>
                        {product.discont_price && (
                            <span className={styles.regularPrice}>
                                ${product.price}
                            </span>
                        )}
                    </div>
                    <div className={styles.quantityContainer}>
                        <div className={styles.quantityControls}>
                            <button
                                className={styles.quantityButton}
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className={styles.quantity}>{quantity}</span>
                            <button
                                className={styles.quantityButton}
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className={styles.addToCartButton}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className={styles.description}>
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails; 