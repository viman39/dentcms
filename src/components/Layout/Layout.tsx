import React, { useState } from "react";
import { Layout as LayoutAnt } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const { Content } = LayoutAnt;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LayoutAnt style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed}></Sidebar>
      <LayoutAnt className="site-layout">
        <Header collapsed={collapsed} setCollapsed={setCollapsed}></Header>
        <Content style={{ margin: "16px" }}>{children}</Content>
        <Footer></Footer>
      </LayoutAnt>
    </LayoutAnt>
  );
};

export default Layout;
