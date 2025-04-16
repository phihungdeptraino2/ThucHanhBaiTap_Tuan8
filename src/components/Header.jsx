import "../styles/HeaderStyle.css";
import { Bell } from "lucide-react";
import { ShieldQuestion } from "lucide-react";
import avatar from "../assets/avatar1.png";
const Header = () => {
  console.log("Header rendered");
  return (
    <div className="header">
      <h3>Dashboard</h3>
      <div className="header-bot">
        <input type="text" placeholder="search" className="input" />
        <Bell></Bell>
        <ShieldQuestion></ShieldQuestion>
        <img src={avatar} alt="" className="image" />
      </div>
    </div>
  );
};
export default Header;
