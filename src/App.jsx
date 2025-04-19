import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverView from "./components/OverView";
import DetailedReport from "./components/DetailedReport";
import DashBoard from "./components/DashBoard";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Teams from "./components/Teams";
import Analytics from "./components/Analytics";
import Messages from "./components/Messages";
import Integrations from "./components/Integrations";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* Định nghĩa Layout là route cha */}
      <Route path="/" element={<Layout />}>
        <Route index element={<DashBoard />} /> {/* Đây là route mặc định */}
        <Route path="projects" element={<Project />} />
        <Route path="teams" element={<Teams />} />
        <Route path="messages" element={<Messages />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="integrations" element={<Integrations />} />
      </Route>
    </Routes>
  );
}

export default App;
