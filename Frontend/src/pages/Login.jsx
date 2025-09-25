import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShovelLoader from "../components/ShovelLoader"

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ phone: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        form,
        { withCredentials: true }
      );
      if (res.status === 200) {
        navigate("/form");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-yellow-50">
      {/* Left Side (hidden on mobile) */}
      <div className="bg-green-700 text-white p-8 rounded-l-2xl shadow-xl w-1/3 hidden md:flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold mb-4">🌾 Welcome Back Farmer!</h1>
        <p className="text-center">
          Log in to access your farm dashboard and manage your crops.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-white shadow-xl rounded-2xl p-8 w-80 md:w-1/3"
      >
        {/* Loader overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-2xl z-10">
            <ShovelLoader />
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
          Farmer Login
        </h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-3 p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          Log In
        </button>

        {/* New signup link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          First time here?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-700 font-medium hover:underline cursor-pointer"
          >
            Create an account
          </span>
        </p>
      </form>
    </div>
  );
}
