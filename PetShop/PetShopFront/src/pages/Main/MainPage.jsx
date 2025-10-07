import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import head from "../../assets/images/head.jpg";
import form_dog from "../../assets/images/form_dog.svg";
import CustomButton from '../../components/UI/CustomButton';
import { PRIMARY_BTN, OUTLINED_BTN } from "../../utils/consts/consts";
import { fetchCategories } from '../../Store/services/fetchCategories';
import { fetchSales } from '../../Store/services/fetchSales';

const MainPage = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.category.category) || [];
    const categoriesToShow = allCategories.length > 0 ? allCategories.slice(0, 4) : [];
    const allSales = useSelector((state) => state.discountproducts?.products) || [];
    const salesToShow = allSales
        .filter(item => item.discont_price)
        .slice(0, 4);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchSales());
    }, [dispatch]);

    return (
        <div className={styles.mainContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <img src={head} alt="Hero" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Amazing Discounts on Pets Products!
                    </h1>
                    <CustomButton
                        buttonText="Check out"
                        onHandleClick={() => console.log("click")}
                        style={PRIMARY_BTN}
                    />
                </div>
            </section>

            {/* Categories Section */}
            <section className={styles.categoriesSection}>
                <h2 className={styles.categoriesTitle}>
                    Categories
                    <Link to="/categories" style={{ fontSize: '16px', color: 'rgba(221, 221, 221, 1)', textDecoration: 'none', border: '1px solid rgba(221, 221, 221, 1)', borderRadius: '4px', padding: '8px 16px' }}>
                        All categories
                    </Link>
                </h2>
                <div className={styles.categoriesGrid}>
                    {categoriesToShow.map(item => (
                        <Link to={`/category/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                            <div className={styles.categoryCard}>
                                <img
                                    src={`http://localhost:3333${item.image}`}
                                    alt={item.title}
                                    className={styles.categoryImage}
                                />
                                <h3 className={styles.categoryTitle}>
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Discount Form Section */}
            <section className={styles.discountSection}>
                <h2 className={styles.discountTitle}>
                    5% off on the first order
                </h2>
                <div className={styles.discountContent}>
                    <div className={styles.discountImageContainer}>
                        <img src={form_dog} alt="Pets" className={styles.discountImage} />
                    </div>
                    <div className={styles.discountForm}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.formInput}
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className={styles.formInput}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.formInput}
                        />
                        <button className={styles.formButton}>
                            Get a discount
                        </button>
                    </div>

                </div>
            </section>

            {/* Sales Section */}
            <section className={styles.salesSection}>
                <h2 className={styles.salesTitle}>
                    Sale
                    <Link to="/all_sales" style={{ fontSize: '16px', color: 'rgba(221, 221, 221, 1)', textDecoration: 'none', border: '1px solid rgba(221, 221, 221, 1)', borderRadius: '4px', padding: '8px 16px' }}>
                        All sales
                    </Link>
                </h2>
                <div className={styles.salesGrid}>
                    {salesToShow.map(item => {
                        const discount = Math.round(((item.price - item.discont_price) / item.price) * 100);

                        return (
                            <Link to={`/products/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                                <div className={styles.saleItem}>
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={`http://localhost:3333${item.image}`}
                                            alt={item.title}
                                            className={styles.saleImage}
                                        />
                                        <span className={styles.discountBadge}>-{discount}%</span>
                                    </div>
                                    <div className={styles.saleContent}>
                                        <h3 className={styles.saleTitle}>{item.title}</h3>
                                        <div className={styles.priceContainer}>
                                            <span className={styles.discountPrice}>
                                                ${item.discont_price}
                                            </span>
                                            <span className={styles.regularPrice}>
                                                ${item.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div >
    );
};

export default MainPage;