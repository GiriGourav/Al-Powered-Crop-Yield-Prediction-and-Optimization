import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  MapPin,
  Home,
  Crop as CropIcon,
  Ruler,
  Calendar,
} from "lucide-react"; // icons from lucide-react (already available)

const FarmerForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [city, setCity] = useState("");
  const [landArea, setLandArea] = useState("");
  const [season, setSeason] = useState("");
  const [cropType, setCropType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        farmLocation,
        city,
        landArea,
        season,
        cropType,
      };
      const response = await axios.post(
        "http://localhost:3000/api/suggestions",
        data
      );
      if (response.status === 201) {
        navigate("/suggestions");
      }
      // reset form
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-3xl border border-green-100"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-green-700">
            🌾 Farmer Registration
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill out your details to receive tailored crop suggestions
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Farmer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Farmer Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-green-400" size={18} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* Farm Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Farm Location
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-green-400"
                size={18}
              />
              <input
                type="text"
                value={farmLocation}
                onChange={(e) => setFarmLocation(e.target.value)}
                placeholder="Enter farm location"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <div className="relative">
              <Home className="absolute left-3 top-3 text-green-400" size={18} />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* Land Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Land Area (in acres)
            </label>
            <div className="relative">
              <Ruler
                className="absolute left-3 top-3 text-green-400"
                size={18}
              />
              <input
                type="number"
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
                placeholder="Enter land area"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* Crop Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Crop
            </label>
            <div className="relative">
              <CropIcon
                className="absolute left-3 top-3 text-green-400"
                size={18}
              />
              <input
                type="text"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                placeholder="Enter main crop (e.g., wheat, rice)"
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>

          {/* Season */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Season
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-3 text-green-400"
                size={18}
              />
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="">Select a season / मौसम चुनें</option>
                <option value="kharif">Kharif (खरीफ)</option>
                <option value="rabi">Rabi (रबी)</option>
                <option value="zaid">Zaid (ज़ायद)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-transform hover:scale-[1.01]"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default FarmerForm;
