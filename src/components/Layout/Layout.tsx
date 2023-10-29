import React from 'react';
import Header from '../Header/Header';
import Footer from '../common/Footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />
            <div className="app-body">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
