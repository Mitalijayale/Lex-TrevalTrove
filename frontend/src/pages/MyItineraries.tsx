// import { useEffect, useState } from "react";
// import Layout from "../components/common/Layout";
// import { getMyItineraries, deleteItinerary } from "../api/itinerary.api";
// import { TripItinerary } from "../types/itinerary";
// import { useNavigate } from "react-router-dom";

// const MyItineraries = () => {
//     const [data, setData] = useState<TripItinerary[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
//     const navigate = useNavigate();

//     const load = async () => {
//         setLoading(true);
//         const res = await getMyItineraries();
//         setData(res.data.itineraries);
//         setLoading(false);
//     };

//     const handleDelete = async (id: string) => {
//         if (!window.confirm("Are you sure you want to delete this itinerary?")) return;
//         setDeleteLoading(id);
//         try {
//             await deleteItinerary(id);
//             await load();
//         } finally {
//             setDeleteLoading(null);
//         }
//     };

//     useEffect(() => {
//         load();
//     }, []);

//     return (
//         <Layout>
//             <div className="min-h-screen bg-white">
//                 <div className="max-w-6xl mx-auto px-4 py-12">
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-10">
//                         <div>
//                             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                                 My Itineraries
//                             </h1>
//                             <p className="text-gray-600">
//                                 Plan and manage your upcoming trips
//                             </p>
//                         </div>
//                         <button
//                             onClick={() => navigate("/itinerary/create")}
//                             className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
//                         >
//                             <svg
//                                 className="w-5 h-5"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 4v16m8-8H4"
//                                 />
//                             </svg>
//                             Create New
//                         </button>
//                     </div>

//                     {/* Loading State */}
//                     {loading ? (
//                         <div className="flex flex-col items-center justify-center py-20">
//                             <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-900"></div>
//                             <p className="mt-4 text-gray-600">Loading itineraries...</p>
//                         </div>
//                     ) : data.length === 0 ? (
//                         /* Empty State */
//                         <div className="flex flex-col items-center justify-center py-20">
//                             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
//                                 <svg
//                                     className="w-10 h-10 text-gray-400"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                                     />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                                 No Itineraries Yet
//                             </h3>
//                             <p className="text-gray-600 mb-6 text-center max-w-sm">
//                                 Start planning your next adventure by creating your first itinerary
//                             </p>
//                             <button
//                                 onClick={() => navigate("/itinerary/create")}
//                                 className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
//                             >
//                                 <svg
//                                     className="w-5 h-5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M12 4v16m8-8H4"
//                                     />
//                                 </svg>
//                                 Create Your First Itinerary
//                             </button>
//                         </div>
//                     ) : (
//                         /* Itineraries Grid */
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {data.map((itinerary) => (
//                                 <div
//                                     key={itinerary._id}
//                                     className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
//                                 >
//                                     {/* Card Content */}
//                                     <div className="p-6">
//                                         {/* Destination */}
//                                         <div className="flex items-start gap-3 mb-4">
//                                             <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
//                                                 <svg
//                                                     className="w-5 h-5 text-gray-600"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                                     />
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                                     />
//                                                 </svg>
//                                             </div>
//                                             <div className="flex-1 min-w-0">
//                                                 <h3 className="text-lg font-semibold text-gray-900 truncate">
//                                                     {itinerary.destination}
//                                                 </h3>
//                                                 <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
//                                                     <svg
//                                                         className="w-4 h-4"
//                                                         fill="none"
//                                                         stroke="currentColor"
//                                                         viewBox="0 0 24 24"
//                                                     >
//                                                         <path
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             strokeWidth={2}
//                                                             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                                                         />
//                                                     </svg>
//                                                     <span>{itinerary.duration}</span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Actions */}
//                                         <div className="flex gap-2 pt-4 border-t border-gray-100">
//                                             <button
//                                                 onClick={() => navigate(`/itinerary/${itinerary._id}`)}
//                                                 className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                                             >
//                                                 View
//                                             </button>
//                                             <button
//                                                 onClick={() => navigate(`/itinerary/edit/${itinerary._id}`)}
//                                                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                                                 title="Edit"
//                                             >
//                                                 <svg
//                                                     className="w-4 h-4"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete(itinerary._id)}
//                                                 disabled={deleteLoading === itinerary._id}
//                                                 className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                                 title="Delete"
//                                             >
//                                                 {deleteLoading === itinerary._id ? (
//                                                     <div className="animate-spin rounded-full h-4 w-4 border-2 border-red-600 border-t-transparent"></div>
//                                                 ) : (
//                                                     <svg
//                                                         className="w-4 h-4"
//                                                         fill="none"
//                                                         stroke="currentColor"
//                                                         viewBox="0 0 24 24"
//                                                     >
//                                                         <path
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                             strokeWidth={2}
//                                                             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                                                         />
//                                                     </svg>
//                                                 )}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default MyItineraries;

// import { useEffect, useState } from "react";
// import Layout from "../components/common/Layout";
// import { getMyItineraries, deleteItinerary } from "../api/itinerary.api";
// import { TripItinerary } from "../types/itinerary";
// import { useNavigate } from "react-router-dom";

// const MyItineraries = () => {
//   const [data, setData] = useState<TripItinerary[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const load = async () => {
//     setLoading(true);
//     const res = await getMyItineraries();
//     setData(res.data.itineraries);
//     setLoading(false);
//   };

//   const handleDelete = async (id: string) => {
//     if (!window.confirm("Are you sure you want to delete this itinerary?")) return;
//     setDeleteLoading(id);
//     try {
//       await deleteItinerary(id);
//       await load();
//     } finally {
//       setDeleteLoading(null);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   return (
//     <Layout>
//       <div
//         className="min-h-screen bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://thelocaltourist.com/wp-content/uploads/2023/05/Road-Trip-Along-the-Coast.jpg')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="min-h-screen backdrop-blur-sm bg-gradient-to-b from-black/20 via-black/10 to-black/30 px-6 py-12">
//           {/* Header */}
//           <div className="max-w-6xl mx-auto flex items-center justify-between mb-12 text-white">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
//                 My Itineraries
//               </h1>
//               <p className="text-white/80 mt-2">
//                 Plan and manage your upcoming trips ✈️
//               </p>
//             </div>
//             <button
//               onClick={() => navigate("/itinerary/create")}
//               className="px-6 py-3 bg-white/20 text-white font-medium rounded-full backdrop-blur-lg border border-white/30 hover:bg-white/40 transition"
//             >
//               + Create New
//             </button>
//           </div>

//           {/* Loading */}
//           {loading ? (
//             <div className="flex flex-col items-center justify-center text-white py-20">
//               <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
//               <p className="mt-4 text-white/90">Loading itineraries...</p>
//             </div>
//           ) : data.length === 0 ? (
//             <div className="text-center text-white py-20">
//               <h3 className="text-2xl font-semibold">No Itineraries Found</h3>
//               <p className="text-white/70 mb-6">
//                 Create your first travel plan now 🌍
//               </p>
//               <button
//                 onClick={() => navigate("/itinerary/create")}
//                 className="px-6 py-3 bg-white/20 text-white font-medium rounded-full backdrop-blur-lg border border-white/30 hover:bg-white/40 transition"
//               >
//                 Create Itinerary
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//               {data.map((itinerary) => (
//                 <div
//                   key={itinerary._id}
//                   className="rounded-3xl p-6 text-white bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition group"
//                 >
//                   {/* Destination */}
//                   <h3 className="text-2xl font-bold truncate drop-shadow-md">
//                     {itinerary.destination}
//                   </h3>
//                   <p className="text-white/80 flex items-center gap-2 mt-2">
//                     <svg
//                       className="w-5 h-5 text-white/80"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     {itinerary.duration} Days
//                   </p>

//                   {/* Actions */}
//                   <div className="flex gap-3 mt-6 pt-4 border-t border-white/20">
//                     <button
//                       onClick={() => navigate(`/itinerary/${itinerary._id}`)}
//                       className="flex-1 py-2 px-4 rounded-full bg-white/20 hover:bg-white/40 transition flex justify-center items-center gap-1"
//                     >
//                       👁️ View
//                     </button>

//                     <button
//                       onClick={() =>
//                         navigate(`/itinerary/edit/${itinerary._id}`)
//                       }
//                       className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/40 transition flex justify-center items-center gap-1"
//                     >
//                       ✏️ Edit
//                     </button>

//                     <button
//                       onClick={() => handleDelete(itinerary._id)}
//                       disabled={deleteLoading === itinerary._id}
//                       className="px-4 py-2 rounded-full bg-gradient-to-r from-red-400/50 to-red-600/50 hover:from-red-500/60 hover:to-red-700/60 transition disabled:opacity-50 flex justify-center items-center gap-1"
//                     >
//                       {deleteLoading === itinerary._id ? "..." : "🗑️ Delete"}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default MyItineraries;



import { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import { getMyItineraries, deleteItinerary } from "../api/itinerary.api";
import { TripItinerary } from "../types/itinerary";
import { useNavigate } from "react-router-dom";
import MyIternariesImg from "../assets/Myiternaries.jpg"; // import the local JPG

const MyItineraries = () => {
  const [data, setData] = useState<TripItinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    const res = await getMyItineraries();
    setData(res.data.itineraries);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this itinerary?")) return;
    setDeleteLoading(id);
    try {
      await deleteItinerary(id);
      await load();
    } finally {
      setDeleteLoading(null);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${MyIternariesImg})`, // local JPG
        }}
      >
        {/* Overlay */}
        <div className="min-h-screen bg-black/40 backdrop-blur-sm px-6 py-12">
          {/* Header */}
          <div className="max-w-6xl mx-auto flex items-center justify-between mb-12 text-white">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                My Itineraries
              </h1>
              <p className="text-white/80 mt-2">
                Plan and manage your upcoming trips ✈️
              </p>
            </div>
            <button
              onClick={() => navigate("/itinerary/create")}
              className="px-6 py-3 bg-white/20 text-white font-medium rounded-full backdrop-blur-lg border border-white/30 hover:bg-white/40 transition"
            >
              + Create New
            </button>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex flex-col items-center justify-center text-white py-20">
              <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
              <p className="mt-4 text-white/90">Loading itineraries...</p>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center text-white py-20">
              <h3 className="text-2xl font-semibold">No Itineraries Found</h3>
              <p className="text-white/70 mb-6">
                Create your first travel plan now 🌍
              </p>
              <button
                onClick={() => navigate("/itinerary/create")}
                className="px-6 py-3 bg-white/20 text-white font-medium rounded-full backdrop-blur-lg border border-white/30 hover:bg-white/40 transition"
              >
                Create Itinerary
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {data.map((itinerary) => (
                <div
                  key={itinerary._id}
                  className="rounded-3xl p-6 text-white bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition group"
                >
                  {/* Destination */}
                  <h3 className="text-2xl font-bold truncate drop-shadow-md">
                    {itinerary.destination}
                  </h3>
                  <p className="text-white/80 flex items-center gap-2 mt-2">
                    <svg
                      className="w-5 h-5 text-white/80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {itinerary.duration} Days
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6 pt-4 border-t border-white/20">
                    <button
                      onClick={() => navigate(`/itinerary/${itinerary._id}`)}
                      className="flex-1 py-2 px-4 rounded-full bg-white/20 hover:bg-white/40 transition flex justify-center items-center gap-1"
                    >
                      👁️ View
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/itinerary/edit/${itinerary._id}`)
                      }
                      className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/40 transition flex justify-center items-center gap-1"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => handleDelete(itinerary._id)}
                      disabled={deleteLoading === itinerary._id}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-red-400/50 to-red-600/50 hover:from-red-500/60 hover:to-red-700/60 transition disabled:opacity-50 flex justify-center items-center gap-1"
                    >
                      {deleteLoading === itinerary._id ? "..." : "🗑️ Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyItineraries;
