import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerAdmin } from "../../api/auth.api";
import adminRegisterImage from "../../assets/Login.jpg";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerAdmin(name, email, password);
      navigate("/admin/login");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Admin registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img
          src={adminRegisterImage}
          alt="Admin Register"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center mb-2">Admin Sign Up</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Admin Name"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="admin@email.com"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 mb-6 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Create Admin"}
          </button>
          <p className="text-center mt-4 text-sm">
            Already an admin?{" "}
            <Link to="/admin/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
