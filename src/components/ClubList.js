import React, { useEffect, useState } from "react";
import axios from "axios";


const ClubList = () => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch clubs from the backend
    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const response = await axios.get("http://localhost:8080/clubs");
                setClubs(response.data);
            } catch (err) {
                setError("Failed to fetch clubs. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchClubs();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <p>Loading clubs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <p>{error}</p>
            </div>
        );
    }        

    return (
        <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        All Clubs
      </h1>
      {clubs.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>No Clubs found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={thStyle}>Club ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Motto</th>
              <th style={thStyle}>President</th>
              <th style={thStyle}>Manager</th>
              <th style={thStyle}>Founded Year</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((clubs, index) => (
              <tr
                key={clubs.clubId}
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                  textAlign: "left",
                }}
              >
                <td style={tdStyle}>{clubs.clubId}</td>
                <td style={tdStyle}>{clubs.name}</td>
                <td style={tdStyle}>{clubs.motto}</td>
                <td style={tdStyle}>{clubs.president}</td>
                <td style={tdStyle}>{clubs.manager}</td>
                <td style={tdStyle}>{clubs.foundedYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  padding: "12px 15px",
  fontSize: "16px",
  color: "#333",
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "10px 15px",
  fontSize: "14px",
  color: "#555",
  borderBottom: "1px solid #ddd",
};

export default ClubList;