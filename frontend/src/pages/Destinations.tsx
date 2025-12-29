

import { useState, useEffect, useContext } from "react";
import { getDestinations } from "../api/destination.api";
import { DestinationGuide } from "../types/destination";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import { AuthContext } from "../context/AuthContext";

export const Destinations = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DestinationGuide[]>([]);
  const [loading, setLoading] = useState(false);
  const [manageMode, setManageMode] = useState(false);

  const navigate = useNavigate();
  const { role } = useContext(AuthContext);
  const isAdmin = role === "admin";

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      try {
        const res = await getDestinations();
        setResults(res.data.destinationGuides);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchDestinations();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await getDestinations(query);
      setResults(res.data.destinationGuides);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Layout>
      {/* 🌈 Glass Background */}
      <div className="min-h-screen bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* 🧊 Glass Main Container */}
          <div className="rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl p-6 md:p-10">

            {/* Header */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    {isAdmin ? "Manage Destinations" : "Explore Destinations"}
                  </h1>
                  <p className="text-gray-700 mt-2">
                    {isAdmin
                      ? "Create, update, and manage destination guides."
                      : "Discover beautiful places around the world."}
                  </p>
                </div>

                {isAdmin && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setManageMode(!manageMode)}
                      className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur border border-white/30 hover:bg-white/70 transition"
                    >
                      {manageMode ? "Exit Manage" : "Manage View"}
                    </button>

                    <Link to="/destinations/create">
                      <button className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800">
                        + Add Destination
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* 🔍 Glass Search */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="flex gap-3 rounded-full bg-white/50 backdrop-blur-lg border border-white/30 p-2 shadow-lg">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-6 py-3 bg-transparent outline-none text-gray-800 placeholder-gray-500"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90"
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex justify-center py-20">
                <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
              </div>
            )}

            {/* 🧊 Glass Cards */}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((d) => (
                  <div
                    key={d._id}
                    onClick={() => navigate(`/destinations/${d._id}`)}
                    className="cursor-pointer rounded-2xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl hover:-translate-y-2 transition-all"
                  >
                    {d.photos?.length > 0 && (
                      <img
                        src={d.photos[0]}
                        alt={d.title}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {d.title}
                      </h3>
                      <p className="text-gray-700 line-clamp-3 mb-4">
                        {d.summary}
                      </p>

                      <div className="flex justify-between items-center text-sm text-blue-700 font-semibold">
                        <span>View details</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && results.length === 0 && (
              <div className="text-center py-20 text-gray-700">
                <h3 className="text-2xl font-bold mb-2">
                  No destinations found
                </h3>
                <p>Try a different search.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </Layout>
  );
};
