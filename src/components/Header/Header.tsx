import { Header as AntHeader } from "antd/es/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Login from "../Login/Login";

const antHeaderStyle = {
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => {
    setCollapsed((oldCollapsed) => !oldCollapsed);
  };

  return (
    <AntHeader style={antHeaderStyle}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          color: "white",
        }}
      />
      <Login />
    </AntHeader>
  );
};

export default Header;
