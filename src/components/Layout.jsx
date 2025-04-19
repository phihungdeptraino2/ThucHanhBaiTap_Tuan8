import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        {/* Đây là nơi các component con sẽ được render */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
