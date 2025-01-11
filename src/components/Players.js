import { useState } from "react";
import axios from "axios";

const Player = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    position: "",
    nationality: "",
    jerseyNumber: "",

  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/players", formData);
      setMessage("Player created successfully!");
      setFormData({
        name: "",
        age: "",
        position: "",
        nationality: "",
        jerseyNumber: "",

      });


    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || "Error creating Player.");
      } else {
        setMessage("Error connecting to the server");
      }
    }
  };

  return (
    <div>
      <h1>Players</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </label>
        <label>
          Nationality:
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
        </label>
        <label>
          Jersey Number:
          <input type="text" name="jerseyNumber" value={formData.jerseyNumber} onChange={handleChange} />
        </label>
        <button type="submit">Create Player</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Player;
