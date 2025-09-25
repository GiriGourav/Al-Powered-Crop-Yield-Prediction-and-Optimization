import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShoverLoader from "../components/ShovelLoader"

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", password: "" });
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
        "http://localhost:3000/api/auth/signup",
        form,
        { withCredentials: true }
      );
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-50">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white shadow-xl rounded-3xl p-10 w-full max-w-md border border-green-100"
      >
        {loading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-3xl z-10">
            <ShoverLoader /> {/* custom loader */}
          </div>
        )}

        <h2 className="text-4xl font-bold mb-3 text-center text-green-700">
          Farmer Registration
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Join our platform to get crop advice, resources, and improve your yields.
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center bg-red-50 py-2 rounded">
            {error}
          </p>
        )}

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-300 transition ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          Register as Farmer
        </button>

        <p className="mt-5 text-center text-sm text-gray-600">
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
