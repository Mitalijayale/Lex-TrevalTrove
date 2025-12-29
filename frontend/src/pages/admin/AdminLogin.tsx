import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin } from "../../api/auth.api";
import { AuthContext } from "../../context/AuthContext";
import adminLoginImage from "../../assets/Login.jpg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginAdmin(email, password);

      const token = res.data.token;
      if (!token) {
        throw new Error("Token not received");
      }

      // ✅ Save token (role decoded in AuthContext)
      login(token);

      // ✅ Redirect to admin-only page
      navigate("/destinations/create");

    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Admin login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT IMAGE */}
      <div className="hidden md:block">
        <img
          src={adminLoginImage}
          alt="Admin Login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center mb-6">
            Admin Sign In
          </h1>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

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
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Back to User Login */}
          <p className="text-center mt-4 text-sm">
            <Link
              to="/login"
              className="text-gray-500 hover:underline"
            >
              ← Back to User Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;