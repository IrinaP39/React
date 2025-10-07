import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../Store/services/fetchCategories';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import cls from './Categories.module.css';

const Categories = () => {
    const dispatch = useDispatch();
    const { category: categories = [], loading, error } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const breadcrumbItems = [
        { label: 'Main page', path: '/' },
        { label: 'Categories', path: '' }
    ];

    if (loading) {
        return (
            <div className={cls.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <div>Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.container}>
                <Breadcrumbs items={breadcrumbItems} />
                <div>Error: {error.message}</div>
            </div>
        );
    }

    return (
        <div className={cls.container}>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className={cls.categoriesTitle}>Categories</h1>

            <div className={cls.categories_grid}>
                {categories.map(category => (
                    <Link
                        to={`/category/${category.id}`}
                        key={category.id}
                        className={cls.category_item}
                    >
                        <img
                            src={`http://localhost:3333${category.image}`}
                            alt={category.title}
                            className={cls.category_image}
                        />
                        <h2 className={cls.category_title}>{category.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;