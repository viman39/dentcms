import { Header as AntHeader } from "antd/es/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => {
    setCollapsed((oldCollapsed) => !oldCollapsed);
  };

  return (
    <AntHeader className="site-layout-background" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined className="trigger" onClick={toggleSidebar} />
      ) : (
        <MenuFoldOutlined className="trigger" onClick={toggleSidebar} />
      )}
      {/* Conținut pentru antet */}
    </AntHeader>
  );
};

export default Header;
