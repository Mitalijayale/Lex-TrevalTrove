// import React, { useEffect, useState } from 'react';
// import { getPublicGroups } from '../../api/group.api';
// import { IGroup } from '../../types/group';
// import GroupCard from './GroupCard';

// const PublicGroups: React.FC = () => {
//     const [groups, setGroups] = useState<IGroup[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchGroups = async () => {
//             try {
//                 const publicGroups = await getPublicGroups();
//                 setGroups(publicGroups);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchGroups();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex flex-col items-center justify-center py-20">
//                 <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-900"></div>
//                 <p className="mt-4 text-gray-600 text-sm">Loading public groups...</p>
//             </div>
//         );
//     }

//     if (groups.length === 0) {
//         return (
//             <div className="text-center py-20">
//                 <svg
//                     className="w-16 h-16 text-gray-300 mx-auto mb-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                 </svg>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                     No public groups available
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                     Check back later for new public groups
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {groups.map((group) => (
//                     <GroupCard key={group._id} group={group} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PublicGroups;






// import React, { useEffect, useState } from "react";
// import { getPublicGroups } from "../../api/group.api";
// import { IGroup } from "../../types/group";
// import GroupCard from "./GroupCard";

// const PublicGroups: React.FC = () => {
//   const [groups, setGroups] = useState<IGroup[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGroups = async () => {
//       try {
//         const publicGroups = await getPublicGroups();
//         setGroups(publicGroups);
//       } catch (error) {
//         console.error("Failed to fetch public groups", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGroups();
//   }, []);

//   return (
//     /* ===== BACKGROUND ===== */
//     <div
//       className="min-h-screen relative bg-cover bg-center px-6 py-16"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1950&q=80')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/60 to-purple-900/70" />

//       {/* Glow Orbs */}
//       <div className="absolute top-20 right-16 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-24 left-16 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />

//       {/* ===== CONTENT ===== */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-bold text-white mb-2">
//             Explore Public Groups
//           </h1>
//           <p className="text-indigo-200 text-sm">
//             Discover open communities you can join
//           </p>
//         </div>

//         {/* ===== LOADING ===== */}
//         {loading && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div
//                 key={i}
//                 className="animate-pulse bg-white/20 backdrop-blur-xl
//                            border border-white/30 rounded-2xl p-6"
//               >
//                 <div className="h-4 bg-white/30 rounded w-3/4 mb-3" />
//                 <div className="h-3 bg-white/30 rounded w-full mb-2" />
//                 <div className="h-3 bg-white/30 rounded w-5/6" />
//                 <div className="mt-4 h-8 bg-white/30 rounded w-1/2" />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ===== EMPTY STATE ===== */}
//         {!loading && groups.length === 0 && (
//           <div className="flex flex-col items-center justify-center py-32 text-center text-white">
//             <div className="text-6xl mb-4">🌍</div>
//             <h2 className="text-2xl font-semibold mb-2">
//               No public groups available
//             </h2>
//             <p className="text-indigo-200 max-w-md">
//               Check back later or create your own public group to start a
//               community.
//             </p>
//           </div>
//         )}

//         {/* ===== GROUP GRID ===== */}
//         {!loading && groups.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {groups.map((group) => (
//               <div
//                 key={group._id}
//                 className="bg-white/20 backdrop-blur-xl
//                            border border-white/30
//                            rounded-2xl shadow-xl
//                            hover:shadow-2xl hover:-translate-y-1
//                            transition-all duration-300"
//               >
//                 <GroupCard group={group} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PublicGroups;

import React, { useEffect, useState } from "react";
import { getPublicGroups } from "../../api/group.api";
import { IGroup } from "../../types/group";
import GroupCard from "./GroupCard";
import publicGroupsBg from "../../assets/people.avif";

const PublicGroups: React.FC = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const publicGroups = await getPublicGroups();
        setGroups(publicGroups);
      } catch (error) {
        console.error("Failed to fetch public groups", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    /* ===== BACKGROUND ===== */
    <div
      className="min-h-screen relative bg-cover bg-center px-6 py-16"
      style={{
        backgroundImage: `url(${publicGroupsBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/60 to-purple-900/70" />

      {/* Glow Orbs */}
      <div className="absolute top-20 right-16 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-24 left-16 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Explore Public Groups
          </h1>
          <p className="text-indigo-200 text-sm">
            Discover open communities you can join
          </p>
        </div>

        {/* ===== LOADING ===== */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-white/20 backdrop-blur-xl
                           border border-white/30 rounded-2xl p-6"
              >
                <div className="h-4 bg-white/30 rounded w-3/4 mb-3" />
                <div className="h-3 bg-white/30 rounded w-full mb-2" />
                <div className="h-3 bg-white/30 rounded w-5/6" />
                <div className="mt-4 h-8 bg-white/30 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* ===== EMPTY STATE ===== */}
        {!loading && groups.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center text-white">
            <div className="text-6xl mb-4">🌍</div>
            <h2 className="text-2xl font-semibold mb-2">
              No public groups available
            </h2>
            <p className="text-indigo-200 max-w-md">
              Check back later or create your own public group to start a
              community.
            </p>
          </div>
        )}

        {/* ===== GROUP GRID ===== */}
        {!loading && groups.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group._id}
                className="bg-white/20 backdrop-blur-xl
                           border border-white/30
                           rounded-2xl shadow-xl
                           hover:shadow-2xl hover:-translate-y-1
                           transition-all duration-300"
              >
                <GroupCard group={group} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicGroups;
