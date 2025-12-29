
import { useState, useEffect } from "react";
import { createItinerary } from "../api/itinerary.api";
import Layout from "../components/common/Layout";
import { useNavigate } from "react-router-dom";
import CreateItineraryBg from "../assets/CreateItinerary.avif"; // ✅ Local background image

// ⭐ Background Image + Page Styling
const pageStyle: React.CSSProperties = {
  backgroundImage: `url(${CreateItineraryBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  padding: "50px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
};

// ⭐ Glass UI Card Styling
const cardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.35)",
  backdropFilter: "blur(18px) saturate(180%)",
  WebkitBackdropFilter: "blur(18px) saturate(180%)",
  borderRadius: "22px",
  padding: "35px 35px",
  width: "100%",
  maxWidth: "650px",
  boxShadow: "0 12px 45px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.45)",
  transition: "0.35s ease",
};

// ⭐ Hover Animation
const cardHover = {
  transform: "scale(1.015)",
  boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
};

// Recommendations Data
const DESTINATION_RECOMMENDATIONS: Record<
  string,
  { activities: string[]; lodging: string[]; dining: string[] }
> = {
  Bali: {
    activities: ["Beach surfing", "Temple visits", "Snorkeling", "Rice terrace tour"],
    lodging: ["Beachfront Resort", "Private Villa", "Budget Hostel"],
    dining: ["Seafood", "Local cuisine", "Vegan options"],
  },
  Goa: {
    activities: ["Beach party", "Water sports", "Night market tour", "Sunset cruise"],
    lodging: ["Beachside Cottage", "Luxury Resort", "Hostel"],
    dining: ["Goan seafood", "Street food", "Vegetarian options"],
  },
  Rajasthan: {
    activities: ["Fort visits", "Camel safari", "Cultural show", "Desert camping"],
    lodging: ["Palace hotel", "Heritage haveli", "Resort"],
    dining: ["Rajasthani thali", "Local sweets", "Street food"],
  },
  Kerala: {
    activities: ["Backwater cruise", "Ayurvedic spa", "Tea plantation tour", "Wildlife safari"],
    lodging: ["Houseboat", "Beach resort", "Homestay"],
    dining: ["Kerala cuisine", "Seafood", "Vegetarian options"],
  },
};

interface ItineraryData {
  destination: string;
  duration: string;
  startDate: string;
  endDate: string;
  activities: string[];
  lodging: string;
  dining: string;
}

const CreateItinerary = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destination: "",
    duration: "",
    startDate: "",
    endDate: "",
    activities: "",
    lodging: "",
    dining: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState({
    activities: [] as string[],
    lodging: [] as string[],
    dining: [] as string[],
  });

  // ⭐ Case-insensitive destination matching for recommendations
  useEffect(() => {
    const dest = form.destination.trim().toLowerCase();
    const match = Object.keys(DESTINATION_RECOMMENDATIONS).find(
      (key) => key.toLowerCase() === dest
    );

    if (match) {
      setRecommendations(DESTINATION_RECOMMENDATIONS[match]);
    } else {
      setRecommendations({ activities: [], lodging: [], dining: [] });
    }
  }, [form.destination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => {
      let updated = { ...prev, [name]: value };

      // ⭐ Auto calculate endDate based on startDate + duration
      if ((name === "startDate" || name === "duration") && updated.startDate && updated.duration) {
        const days = parseInt(updated.duration);
        if (!isNaN(days) && days > 0) {
          const start = new Date(updated.startDate);
          start.setDate(start.getDate() + days);
          updated.endDate = start.toISOString().split("T")[0];
        }
      }
      return updated;
    });
  };

  // ⭐ Handle recommendation clicks
  const handleRecommendationClick = (field: "activities" | "lodging" | "dining", value: string) => {
    setForm((prev) => {
      if (field === "activities") {
        const activities = prev.activities
          ? prev.activities.split(",").map((a) => a.trim()).filter(Boolean)
          : [];
        if (!activities.includes(value)) activities.push(value);
        return { ...prev, activities: activities.join(", ") };
      } else {
        return { ...prev, [field]: value };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.startDate || !form.endDate) {
      setError("Please select both start and end dates.");
      setLoading(false);
      return;
    }
    if (new Date(form.startDate) < new Date()) {
      setError("Start date must be in the future.");
      setLoading(false);
      return;
    }
    if (new Date(form.endDate) <= new Date(form.startDate)) {
      setError("End date must be after the start date.");
      setLoading(false);
      return;
    }

    try {
      const data: ItineraryData = {
        destination: form.destination,
        duration: form.duration,
        startDate: form.startDate,
        endDate: form.endDate,
        activities: form.activities.split(",").map((a) => a.trim()).filter(Boolean),
        lodging: form.lodging,
        dining: form.dining,
      };

      await createItinerary(data);
      navigate("/my-itineraries");
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to create itinerary. Check destination.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={pageStyle}>
        <div
          style={cardStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <button
            onClick={() => navigate("/my-itineraries")}
            className="text-gray-700 hover:text-black mb-4 font-medium"
          >
            ← Back to Itineraries
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Create New Itinerary</h1>

          {error && (
            <div className="mb-4 bg-red-100 border border-red-300 text-red-800 p-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="destination"
              placeholder="Destination (Bali, Goa, Rajasthan, Kerala)"
              className="w-full px-4 py-3 rounded-lg border bg-white/60 backdrop-blur focus:ring-2 focus:ring-black/40"
              value={form.destination}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="duration"
              placeholder="Duration (days)"
              className="w-full px-4 py-3 rounded-lg border bg-white/60 backdrop-blur focus:ring-2 focus:ring-black/40"
              value={form.duration}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="startDate"
              className="w-full px-4 py-3 rounded-lg border bg-white/60 backdrop-blur focus:ring-2 focus:ring-black/40"
              value={form.startDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />

            <input
              type="date"
              name="endDate"
              readOnly
              className="w-full px-4 py-3 rounded-lg border bg-gray-200/60"
              value={form.endDate}
            />

            <textarea
              name="activities"
              rows={3}
              placeholder="Activities (comma separated)"
              className="w-full px-4 py-3 rounded-lg border bg-white/60 backdrop-blur resize-none focus:ring-2 focus:ring-black/40"
              value={form.activities}
              onChange={handleChange}
            ></textarea>

            {/* Quick pick suggestions */}
            {recommendations.activities.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {recommendations.activities.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => handleRecommendationClick("activities", a)}
                    className="px-3 py-1 text-sm bg-black/70 text-white rounded-full hover:bg-black"
                  >
                    {a}
                  </button>
                ))}
              </div>
            )}

            <input
              type="text"
              name="lodging"
              placeholder="Lodging (Resort, Villa, Hostel)"
              className="w-full px-4 py-3 rounded-lg border bg-white/60 backdrop-blur focus:ring-2 focus:ring-black/40"
              value={form.lodging}
              onChange={handleChange}
            />

            {recommendations.lodging.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {recommendations.lodging.map((l) => (
                  <button
                    type="button"
                    key={l}
                    onClick={() => handleRecommendationClick("lodging", l)}
                    className="px-3 py-1 text-sm bg-black/70 text-white rounded-full hover:bg-black"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}

            <input
              type="text"
              name="dining"
              placeholder="Dining Preference (Seafood, Veg, Local)"
              className="w-full px-4 py-3 rounded-lg border bg-white/60 backdrop-blur focus:ring-2 focus:ring-black/40"
              value={form.dining}
              onChange={handleChange}
            />

            {recommendations.dining.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {recommendations.dining.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => handleRecommendationClick("dining", d)}
                    className="px-3 py-1 text-sm bg-black/70 text-white rounded-full hover:bg-black"
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Itinerary"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateItinerary;
