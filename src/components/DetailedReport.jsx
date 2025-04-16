import avatar1 from "../assets/avatar1.png";
import { Pencil, Plus } from "lucide-react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import "../styles/DetailedReportStyle.css";

const DetailedReport = () => {
  const [data, setData] = useState([]);

  // Load danh sách ban đầu
  const fetchData = () => {
    fetch("http://localhost:3001/report")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: "",
      cell: () => <input type="checkbox" />,
      width: "60px",
    },
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="customer-info">
          <img src={avatar1} alt={avatar1} className="avatar" />
          <span className="customer-name">{row.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => row.value,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`status-badge ${row.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "",
      cell: (row) => (
        <button onClick={() => handleEditClick(row.id)}>
          <Pencil />
        </button>
      ),
      width: "70px",
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h2>Detailed report</h2>
        <button className="add-btn">
          <Plus size={18} /> Add Customer
        </button>
      </div>

      <DataTable columns={columns} data={data} pagination highlightOnHover />
    </div>
  );
};

export default DetailedReport;
