import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import { getItineraryById } from "../api/itinerary.api";
import { addFavorite } from "../api/favorite.api";
import { TripItinerary } from "../types/itinerary";

const ViewItinerary = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [itinerary, setItinerary] = useState<TripItinerary | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const [error, setError] = useState("");

  const handleFavorite = async () => {
    if (!itinerary?._id) return;
    try {
      await addFavorite("trip-itinerary", itinerary._id);
      setIsFavorited(true);
    } catch {
      alert("Already saved");
    }
  };

  useEffect(() => {
    if (!id) return;
    getItineraryById(id)
      .then((res) => setItinerary(res.data))
      .catch(() => setError("Itinerary not found"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="py-32 text-center text-lg">Loading...</div>
      </Layout>
    );
  }

  if (!itinerary || error) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <p className="mb-4">{error}</p>
          <button
            onClick={() => navigate("/my-itineraries")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* BACKGROUND */}
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-white/40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-14">

          {/* MAIN GLASS CARD */}
          <div
            className="
              rounded-3xl
              p-8
              shadow-2xl
              border border-white/40
              bg-white/35
              backdrop-blur-xl
              transition
              hover:shadow-3xl
            "
          >
            {/* HEADER */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  Trip Itinerary
                </span>

                <h1 className="text-3xl font-bold text-blue-900">
                  {itinerary.destination}
                </h1>

                <p className="text-blue-700 mt-1">
                  Duration: {itinerary.duration}
                </p>
              </div>

              {/* SAVE BUTTON */}
              <button
                onClick={handleFavorite}
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-full
                  bg-white/70
                  backdrop-blur
                  border border-blue-300
                  hover:scale-105
                  hover:bg-white
                  transition
                "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="red"
                  strokeWidth="2"
                  fill={isFavorited ? "red" : "none"}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                           2 5.42 4.42 3 7.5 3
                           c1.74 0 3.41.81 4.5 2.09
                           C13.09 3.81 14.76 3 16.5 3
                           19.58 3 22 5.42 22 8.5
                           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>

                <span className="text-sm font-medium">
                  {isFavorited ? "Saved" : "Save"}
                </span>
              </button>
            </div>

            {/* ACTIVITIES */}
            {itinerary.activities?.length > 0 && (
              <section className="mb-10">
                <h2 className="text-lg font-semibold text-blue-900 mb-4">
                  🏝 Activities
                </h2>

                <ul className="grid gap-3">
                  {itinerary.activities.map((a, i) => (
                    <li
                      key={i}
                      className="
                        px-5 py-3
                        rounded-xl
                        bg-white/70
                        backdrop-blur
                        text-gray-800
                        transition
                        hover:-translate-y-1
                        hover:shadow-lg
                      "
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* LODGING */}
            {itinerary.lodging && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-3">
                  🏨 Lodging
                </h2>
                <div className="px-5 py-4 rounded-xl bg-white/70 backdrop-blur hover:shadow-lg transition">
                  {itinerary.lodging}
                </div>
              </section>
            )}

            {/* DINING */}
            {itinerary.dining && (
              <section>
                <h2 className="text-lg font-semibold text-blue-900 mb-3">
                  🍽 Dining
                </h2>
                <div className="px-5 py-4 rounded-xl bg-white/70 backdrop-blur hover:shadow-lg transition">
                  {itinerary.dining}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewItinerary;

