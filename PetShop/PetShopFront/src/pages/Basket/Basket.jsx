import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/UI/CustomButton';
import Modal from "../../components/UI/Modal/Modal"
import { removeFromBasket, updateQuantity, clearBasket } from '../../Store/slices/basketSlice';
import styles from './Basket.module.css';

const Basket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const basketList = useSelector(state => state.basket.basket);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuantityChange = (itemId, change) => {
        dispatch(updateQuantity({ id: itemId, change }));
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromBasket(itemId));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email) {
            alert('Please fill in all fields');
            return;
        }

        const orderData = {
            items: basketList.map(item => ({
                id: item.id,
                title: item.title,
                quantity: item.quantity || 1,
                price: item.discont_price || item.price
            })),
            customer: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email
            },
            totalAmount: basketList.reduce((sum, item) => {
                const price = item.discont_price || item.price;
                return sum + price * (item.quantity || 1);
            }, 0)
        };

        // Здесь можно добавить отправку заказа на сервер
        console.log('New order:', orderData);

        dispatch(clearBasket());
        setFormData({ name: '', phone: '', email: '' });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const totalItems = basketList.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const totalAmount = basketList.reduce((sum, item) => {
        const price = item.discont_price || item.price;
        return sum + price * (item.quantity || 1);
    }, 0);

    if (basketList.length === 0) {
        return (
            <div className={styles.container}>
                <div className={styles.emptyCart}>
                    <h2 className={styles.emptyCartMessage}>Your cart is empty</h2>
                    <Link to="/" className={styles.continueShoppingLink}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Shopping Cart</h1>
            <div className={styles.content}>
                <div className={styles.cartItems}>
                    {basketList.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img
                                src={`http://localhost:3333${item.image}`}
                                alt={item.title}
                                className={styles.itemImage}
                            />
                            <div className={styles.itemInfo}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <div className={styles.quantityControls}>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>{item.quantity || 1}</span>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className={styles.priceContainer}>
                                    <span className={styles.discountPrice}>
                                        ${((item.discont_price || item.price) * (item.quantity || 1)).toFixed(2)}
                                    </span>
                                    {item.discont_price && (
                                        <span className={styles.regularPrice}>
                                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                className={styles.removeButton}
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
                <div className={styles.orderDetails}>
                    <h2 className={styles.detailsTitle}>Order details</h2>
                    <div className={styles.totalItems}>{totalItems} items</div>
                    <div className={styles.totalAmount}>
                        <span className={styles.totalLabel}>Total</span>
                        <span className={styles.totalValue}>${totalAmount.toFixed(2)}</span>
                    </div>
                    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                        />
                        <button
                            type="submit"
                            className={styles.checkoutButton}
                        >
                            Order
                        </button>
                    </form>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Basket;