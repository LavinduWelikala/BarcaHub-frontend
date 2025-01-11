import React, { useState } from "react";
import axios from "axios";


const CreateClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    motto: "",
    president: "",
    manager: "",
    foundedYear: "",
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
      const response = await axios.post("http://localhost:8080/clubs", formData);
      setMessage("Club created successfully!");
      setFormData({
        name: "",
        motto: "",
        president: "",
        manager: "",
        foundedYear: "",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || "Error creating club.");
      } else {
        setMessage("Error connecting to the server.");
      }
    }
  };

  return (
    <div className="create-club">
      <h1>Create a New Club</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Motto:</label>
          <input
            type="text"
            name="motto"
            value={formData.motto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>President:</label>
          <input
            type="text"
            name="president"
            value={formData.president}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Manager:</label>
          <input
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Founded Year:</label>
          <input
            type="number"
            name="foundedYear"
            value={formData.foundedYear}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Club</button>
      </form>
    </div>
  );
};

export default CreateClub;
