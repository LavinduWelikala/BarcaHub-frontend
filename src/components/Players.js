import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Player = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    position: "",
    nationality: "",
    jerseyNumber: "",
  });

  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState("");

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/clubs");
        console.log("Fetched clubs:", response.data);
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
        toast.error("Failed to load clubs.");
      }
    };

    fetchClubs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClub) {
      toast.error("Please select a club!", { autoClose: 3000 });
      return;
    }

    console.log("Submitting Player Data:", formData);

    try {
      await axios.post(`http://localhost:8080/clubs/${selectedClub}/players`, formData);
      toast.success("Player created successfully!", { autoClose: 3000 });

      setFormData({
        name: "",
        age: "",
        position: "",
        nationality: "",
        jerseyNumber: "",
      });
      setSelectedClub("");
    } catch (error) {
      console.error("Error creating player:", error);
      toast.error("Error creating player.", { autoClose: 3000 });
    }
  };

  return (
    <div className="form-container">
      <h1>Add a New Player</h1>
      <div className="club-select-container">
        <label>Select Club:</label>
        <select
          className="club-select"
          value={selectedClub}
          onChange={(e) => setSelectedClub(e.target.value)}
          required
        >
          <option value="">Select a club</option>
          {clubs.map((club) => (
            <option key={club.id} value={club.id}>
              {club.name}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmit} className="player-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Nationality:
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Jersey Number:
          <input
            type="number"
            name="jerseyNumber"
            value={formData.jerseyNumber}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-btn">
          Create Player
        </button>
      </form>
      <ToastContainer />

      <style jsx>{`
        .form-container {
          width: 80%;
          max-width: 600px;
          margin: 50px auto;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .club-select-container {
          margin-bottom: 20px;
        }

        .club-select {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .player-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .player-form label {
          font-size: 16px;
          color: #333;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .submit-btn {
          background-color: #4caf50;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background-color: #45a049;
        }

        select:invalid {
          color: #ccc;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Player;
