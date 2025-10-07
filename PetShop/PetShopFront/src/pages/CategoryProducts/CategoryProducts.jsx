import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCategoryProducts } from '../../Store/services/fetchCategoryProducts';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import ProductFilters from '../../components/UI/Filters/ProductFilters';
import ProductCard from '../../components/UI/ProductCard/ProductCard';
import styles from './CategoryProducts.module.css';

const CategoryProducts = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products = [], currentCategory, loading, error } = useSelector(state => state.categoryProducts);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const [showDiscounted, setShowDiscounted] = useState(false);

    useEffect(() => {
        if (!categoryId) {
            navigate('/categories');
            return;
        }

        const loadData = async () => {
            try {
                await dispatch(fetchCategoryProducts(categoryId)).unwrap();
            } catch (err) {
                console.error('Failed to load category:', err);
            }
        };

        loadData();
    }, [dispatch, categoryId, navigate]);

    const breadcrumbItems = [
        { label: 'Main page', path: '/' },
        { label: 'Categories', path: '/categories' },
        { label: currentCategory?.title || 'Loading...', path: '' }
    ];

    if (loading) {
        return (
            <div className={styles.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <h1 className={styles.title}>Loading category...</h1>
                <div className={styles.loadingIndicator}>Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <h1 className={styles.title}>Error loading category</h1>
                <div className={styles.error}>
                    {error.message}
                    <button
                        className={styles.retryButton}
                        onClick={() => dispatch(fetchCategoryProducts(categoryId))}
                    >
                        Try again
                    </button>
                </div>
            </div>
        );
    }

    if (!currentCategory) {
        return (
            <div className={styles.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <h1 className={styles.title}>Category not found</h1>
                <div className={styles.error}>
                    The requested category does not exist.
                    <button
                        className={styles.retryButton}
                        onClick={() => navigate('/categories')}
                    >
                        Go to Categories
                    </button>
                </div>
            </div>
        );
    }

    const filteredProducts = products
        .filter(product => {
            if (showDiscounted && !product.discont_price) return false;
            if (priceFrom && product.price < Number(priceFrom)) return false;
            if (priceTo && product.price > Number(priceTo)) return false;
            return true;
        })
        .sort((a, b) => {
            if (sortOrder === 'priceAsc') return a.price - b.price;
            if (sortOrder === 'priceDesc') return b.price - a.price;
            if (sortOrder === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
            return 0;
        });

    return (
        <div className={styles.container}>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className={styles.title}>{currentCategory.title}</h1>
            <ProductFilters
                priceFrom={priceFrom}
                setPriceFrom={setPriceFrom}
                priceTo={priceTo}
                setPriceTo={setPriceTo}
                showDiscounted={showDiscounted}
                setShowDiscounted={setShowDiscounted}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            {filteredProducts.length > 0 ? (
                <div className={styles.productsGrid}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className={styles.noProducts}>
                    No products found matching your criteria
                </div>
            )}
        </div>
    );
};

export default CategoryProducts;