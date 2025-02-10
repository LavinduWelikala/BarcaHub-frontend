import { useState } from "react";
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
      await axios.post("http://localhost:8080/players", formData);
      toast.success("Player created successfully!", { autoClose: 3000 });
      setFormData({
        name: "",
        age: "",
        position: "",
        nationality: "",
        jerseyNumber: "",
      });
    } catch (error) {
      toast.error("Error creating player.", { autoClose: 3000 });
    }
  };

  return (
    <div className="form-container">
      <h1>Add a New Player</h1>
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
          <input type="number" name="jerseyNumber" value={formData.jerseyNumber} onChange={handleChange} />
        </label>
        <button type="submit">Create Player</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Player;
