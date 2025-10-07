import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from "./Header.module.css"
import logo from "../../assets/icons/logo.svg"
import basket from "../../assets/icons/basket.svg"
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const basketList = useSelector(state => state.basket.basket);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={cls.header}>
            <nav>
                <div className={cls.burger_menu} onClick={toggleMobileMenu}>
                    <span className={cls.burger_line}></span>
                    <span className={cls.burger_line}></span>
                    <span className={cls.burger_line}></span>
                </div>

                <NavLink to="/" className={cls.nav_left}>
                    <img src={logo} alt="logo" className={cls.logo} />
                </NavLink>

                <div className={cls.nav_main}>
                    <NavLink to="/">Main Page</NavLink>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/all_products">All Products</NavLink>
                    <NavLink to="/all_sales">All Sales</NavLink>
                </div>

                <NavLink to="/basket" className={cls.nav_right}>
                    <strong>{basketList.length}</strong>
                    <img src={basket} alt="basket" className={cls.cart_icon} />
                </NavLink>
            </nav>

            <div className={`${cls.mobile_menu} ${isMobileMenuOpen ? cls.active : ''}`}>
                <div className={cls.mobile_nav}>
                    <NavLink to="/" onClick={toggleMobileMenu}>Main Page</NavLink>
                    <NavLink to="/categories" onClick={toggleMobileMenu}>Categories</NavLink>
                    <NavLink to="/all_products" onClick={toggleMobileMenu}>All Products</NavLink>
                    <NavLink to="/all_sales" onClick={toggleMobileMenu}>All Sales</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;