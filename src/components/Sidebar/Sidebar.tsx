import Sider from "antd/es/layout/Sider";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* Conținut pentru panoul lateral */}
    </Sider>
  );
};

export default Sidebar;
