import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Stadium = () => {

    const [formData, setFormData] = useState({
        name: "",
        capacity: "",
        location: "",
 });

 const[message, setMessage] = useState("");

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
      const response = await axios.post("http://localhost:8080/stadiums", formData);
      toast.success("Stadium created successfully!", { autoClose: 3000 });
      setFormData({
        name: "",
        capacity: "",
        location: "",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || "Error creating stadium.");
      } else {
        setMessage("Error connecting to the server.");
      }
    }
  };

    return (

        <div className="stadium-form-container">
            <h1>Create Stadium</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create Stadium</button>
            </form>
            {message && <p>{message}</p>}
            <ToastContainer />
        </div>          
    );    
};

export default Stadium;