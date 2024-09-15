import React from 'react';
import Header from '../Header/Header';
import Footer from '../common/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
