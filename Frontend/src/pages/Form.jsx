import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FarmerForm = () => {
  // individual states
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [city, setCity] = useState("");
  const [landArea, setLandArea] = useState("");
  const [season, setSeason] = useState("");
  const [cropType, setCropType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // build data payload
      const data = {
        name,
        farmLocation,
        city,
        landArea,
        season,
        cropType,
      };

      const response=await axios.post("http://localhost:3000/api/suggestions", data);
      if(response.status===201){
        navigate('/suggestions');
      }
      // clear form
      setName("");
      setFarmLocation("");
      setCity("");
      setLandArea("");
      setSeason("");
      setCropType("");
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-96 border border-green-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Farmer Registration
        </h2>

        {/* Farmer Name */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Farmer Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        {/* Farm Location */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Farm Location
        </label>
        <input
          type="text"
          value={farmLocation}
          onChange={(e) => setFarmLocation(e.target.value)}
          placeholder="Enter farm location"
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        {/* City */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        {/* Land Area */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Land Area (in acres)
        </label>
        <input
          type="number"
          value={landArea}
          onChange={(e) => setLandArea(e.target.value)}
          placeholder="Enter land area"
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        {/* Crop Type */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Main Crop Type
        </label>
        <input
          type="text"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          placeholder="Enter main crop (e.g., wheat, rice)"
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        {/* Season */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Season
        </label>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="w-full mb-6 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        >
          <option value="">Select a season</option>
          <option value="kharif">Kharif</option>
          <option value="rabi">Rabi</option>
          <option value="zaid">Zaid</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default FarmerForm;
