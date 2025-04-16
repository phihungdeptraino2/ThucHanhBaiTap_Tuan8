import avatar1 from "../assets/avatar1.png";
import { Pencil, Plus } from "lucide-react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import "../styles/DetailedReportStyle.css";

const DetailedReport = () => {
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
    <div>
      <DataTable
        columns={columns}
        data={[]}
        pagination
        highlightOnHover
        noDataComponent={
          <div style={{ padding: "20px" }}>DataTable Không có dữ liệu</div>
        }
      />
    </div>
  );
};

export default DetailedReport;
