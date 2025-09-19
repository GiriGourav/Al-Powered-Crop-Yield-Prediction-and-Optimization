import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        form,
        { withCredentials: true }
      );
      if (res.status === 201) {
        // redirect to login page on success
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-96 border border-green-200"
      >
        <h2 className="text-3xl font-extrabold mb-4 text-center text-green-700">
          Farmer Registration
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Join our platform to get crop advice and improve your yields.
        </p>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 p-2 border rounded focus:ring-2 focus:ring-green-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          Register as Farmer
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-700 font-medium hover:underline cursor-pointer"
          >
            Log in here
          </span>
        </p>
      </form>
    </div>
  );
}
