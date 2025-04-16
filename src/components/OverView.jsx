// src/components/OverView.jsx
import { useEffect, useState } from "react";
import "../styles/OverViewStyle.css";

export default function OverView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/overview")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="overview-container">
      <h2 className="overview-title">Overview</h2>
      <div className="overview-grid">
        {data.map((item) => (
          <div key={item.id} className={`overview-card ${item.bgClass}`}>
            <div className="card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="value">{item.value}</p>
            <p className="percent">
              ▲ {item.percent} <span className="period">period of change</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
