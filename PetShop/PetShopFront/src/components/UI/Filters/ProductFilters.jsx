import React from 'react';
import styles from './ProductFilters.module.css';

const ProductFilters = ({
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    showDiscounted,
    setShowDiscounted,
    sortOrder,
    setSortOrder
}) => {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.priceFilter}>
                <span>Price</span>
                <input
                    type="number"
                    placeholder="from"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                />
                <span></span>
                <input
                    type="number"
                    placeholder="to"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                />
            </div>
            <div className={styles.discountFilter}>
                <label>
                    <input
                        style={{ width: "36px", height: "36px" }}
                        type="checkbox"
                        checked={showDiscounted}
                        onChange={(e) => setShowDiscounted(e.target.checked)}
                    />
                    Discounted items
                </label>
            </div>
            <div className={styles.sortFilter}>
                <span>Sorted</span>
                <div className={styles.selectWrapper}>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="default">by default</option>
                        <option value="priceAsc">price: low to high</option>
                        <option value="priceDesc">price: high to low</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;