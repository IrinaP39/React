import React from "react";
import { Link } from "react-router-dom";
import cls from "../Error/Error.module.css"
import error from "../../assets/images/404.png"

const ErrorPage = () => {
    return (
        <div className={cls.error_page}>
            <img src={error} alt="404" />
            <div className={cls.error_page_messages}>
                <p className={cls.error_messages}>Page Not Found</p>
                <p className={cls.error_messages_info}>
                    We’re sorry, the page you requested could not be found. Please go back
                    to the homepage.
                </p>
                <Link className={cls.go_home_button} to="/">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;