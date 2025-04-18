import avatar1 from "../assets/avatar1.png";
import { Pencil, Plus } from "lucide-react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import "../styles/DetailedReportStyle.css";

const DetailedReport = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

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

  // Bấm edit
  const handleEditClick = (rowId) => {
    setShowModal(true);
    setIsAddMode(false);
    setLoadingEdit(true);

    fetch(`http://localhost:3001/report/${rowId}`)
      .then((res) => res.json())
      .then((rowData) => {
        setEditingRow(rowData);
        setLoadingEdit(false);
      })
      .catch((err) => {
        console.error("Fetch detail error:", err);
        setLoadingEdit(false);
      });
  };

  // Bấm add
  const handleAddClick = () => {
    setIsAddMode(true);
    setEditingRow({
      name: "",
      company: "",
      value: "",
      date: "",
      status: "",
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingRow(null);
    setIsAddMode(false);
  };

  const handleInputChange = (e) => {
    setEditingRow({ ...editingRow, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!editingRow) return;

    if (isAddMode) {
      // POST
      fetch("http://localhost:3001/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingRow),
      })
        .then((res) => res.json())
        .then((newData) => {
          setData([...data, newData]);
          handleCloseModal();
        })
        .catch((err) => {
          console.error("POST error:", err);
          alert("Lỗi khi thêm dữ liệu!");
        });
    } else {
      // PUT
      fetch(`http://localhost:3001/report/${editingRow.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingRow),
      })
        .then((res) => res.json())
        .then((updatedRow) => {
          const updatedData = data.map((item) =>
            item.id === updatedRow.id ? updatedRow : item
          );
          setData(updatedData);
          handleCloseModal();
        })
        .catch((err) => {
          console.error("PUT error:", err);
          alert("Lỗi khi cập nhật dữ liệu!");
        });
    }
  };

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
        <button className="add-btn" onClick={handleAddClick}>
          <Plus size={18} /> Add Customer
        </button>
      </div>

      <DataTable columns={columns} data={data} pagination highlightOnHover />

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            {loadingEdit ? (
              <p>Loading...</p>
            ) : (
              <>
                <h2>{isAddMode ? "Add New Customer" : "Edit Customer"}</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editingRow.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Company:
                  <input
                    type="text"
                    name="company"
                    value={editingRow.company}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Order Value:
                  <input
                    type="text"
                    name="value"
                    value={editingRow.value}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Order Date:
                  <input
                    type="text"
                    name="date"
                    value={editingRow.date}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Status:
                  <input
                    type="text"
                    name="status"
                    value={editingRow.status}
                    onChange={handleInputChange}
                  />
                </label>
                <div className="modal-actions">
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCloseModal}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedReport;
