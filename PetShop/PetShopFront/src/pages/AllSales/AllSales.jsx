import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllproducts } from '../../Store/services/fetchAllProducts';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import ProductFilters from '../../components/UI/Filters/ProductFilters';
import ProductCard from '../../components/UI/ProductCard/ProductCard';
import styles from './AllSales.module.css';

const AllSales = () => {
    const dispatch = useDispatch();
    const { products = [], loading, error } = useSelector((state) => state.allProducts);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const [showDiscounted, setShowDiscounted] = useState(true);

    useEffect(() => {
        dispatch(fetchAllproducts());
    }, [dispatch]);

    const breadcrumbItems = [
        { label: 'Main page', path: '/' },
        { label: 'All sales', path: '' }
    ];

    if (loading) {
        return (
            <div className={styles.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <div>Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <div>Error: {error.message}</div>
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
            <h2 className={styles.title}>Discounted items</h2>
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
            <div className={styles.productsGrid}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllSales;
