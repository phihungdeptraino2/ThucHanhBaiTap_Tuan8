import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverView from "./components/OverView";
import DetailedReport from "./components/DetailedReport";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <OverView></OverView>
        <DetailedReport></DetailedReport>
      </main>
    </div>
  );
}

export default App;
