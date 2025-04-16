import "../styles/SidebarStyle.css";
import {
  LayoutDashboard,
  Folder,
  Users,
  PieChart,
  MessageSquare,
  Code,
} from "lucide-react";

const Sidebar = () => {
  const navs = [
    { label: "Dashboard", icon: <LayoutDashboard />, path: "/" },
    { label: "Projects", icon: <Folder />, path: "/projects" },
    { label: "Teams", icon: <Users />, path: "/teams" },
    { label: "Analytics", icon: <PieChart />, path: "/analytics" },
    { label: "Messages", icon: <MessageSquare />, path: "/messages" },
    { label: "Integrations", icon: <Code />, path: "/integrations" },
  ];

  return (
    <nav>
      <h2 className="logo">Logo</h2>
      <ul>
        {navs.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
      <img src="/sidebarimage.png" alt="anh lo go" width="200" />
    </nav>
  );
};

export default Sidebar;
