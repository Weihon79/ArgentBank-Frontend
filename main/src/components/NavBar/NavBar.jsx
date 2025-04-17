import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectIsAuthenticated, selectUser } from "../../features/authSlice";
import "./NavBar.css"

const Navbar = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        setTimeout(() => {
            navigate("/");
        }, 0);
    };

    return (
        <nav className="main-nav">
        <a className="main-nav-logo" href="/">
            <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.webp"
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
            {isAuthenticated ? (
            <>
                <a className="main-nav-item" href="/user">
                <i className="fa fa-user-circle"></i>
                {user?.userName || "User"}
                </a>
                <button
                className="main-nav-item sign-out-button"
                onClick={handleLogout}
                >
                <i className="fa fa-sign-out"></i>
                Sign Out
                </button>
            </>
            ) : (
            <a className="main-nav-item" href="/sign-in">
                <i className="fa fa-user-circle"></i>
                Sign In
            </a>
            )}
        </div>
        </nav>
    );
    };

    export default Navbar;