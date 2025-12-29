// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createGroup } from '../../api/group.api';
// import Layout from '../../components/common/Layout';

// const CreateGroup: React.FC = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [isPublic, setIsPublic] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setError('');
//         setLoading(true);

//         try {
//             await createGroup({ name, description, isPublic });
//             navigate('/groups');
//         } catch (err: any) {
//             setError(err.response?.data?.message || 'Failed to create group');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Layout>
//             <div className="min-h-screen bg-white">
//                 <div className="max-w-2xl mx-auto px-4 py-12">
//                     {/* Back Button */}
//                     <button
//                         onClick={() => navigate('/groups')}
//                         className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
//                     >
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M15 19l-7-7 7-7"
//                             />
//                         </svg>
//                         <span className="text-sm font-medium">Back to Groups</span>
//                     </button>

//                     {/* Header */}
//                     <div className="mb-8">
//                         <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Group</h1>
//                         <p className="text-gray-600">
//                             Start a community for travelers to connect and share
//                         </p>
//                     </div>

//                     {/* Form */}
//                     <div className="bg-white border border-gray-200 rounded-lg p-8">
//                         {error && (
//                             <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//                                 <p className="text-sm text-red-800">{error}</p>
//                             </div>
//                         )}

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* Group Name */}
//                             <div>
//                                 <label
//                                     htmlFor="name"
//                                     className="block text-sm font-medium text-gray-700 mb-2"
//                                 >
//                                     Group Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     id="name"
//                                     type="text"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     placeholder="e.g., Adventure Seekers"
//                                     required
//                                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
//                                 />
//                             </div>

//                             {/* Description */}
//                             <div>
//                                 <label
//                                     htmlFor="description"
//                                     className="block text-sm font-medium text-gray-700 mb-2"
//                                 >
//                                     Description
//                                 </label>
//                                 <textarea
//                                     id="description"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     placeholder="Describe what your group is about..."
//                                     rows={4}
//                                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none transition-all"
//                                 />
//                             </div>

//                             {/* Privacy Toggle */}
//                             <div className="flex items-start">
//                                 <div className="flex items-center h-5">
//                                     <input
//                                         id="isPublic"
//                                         type="checkbox"
//                                         checked={isPublic}
//                                         onChange={(e) => setIsPublic(e.target.checked)}
//                                         className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-gray-400"
//                                     />
//                                 </div>
//                                 <div className="ml-3">
//                                     <label htmlFor="isPublic" className="text-sm font-medium text-gray-700">
//                                         Public Group
//                                     </label>
//                                     <p className="text-xs text-gray-500 mt-1">
//                                         Public groups can be discovered and joined by anyone
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Actions */}
//                             <div className="flex gap-3 pt-4">
//                                 <button
//                                     type="button"
//                                     onClick={() => navigate('/groups')}
//                                     className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={loading || !name.trim()}
//                                     className="flex-1 px-4 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {loading ? (
//                                         <span className="flex items-center justify-center gap-2">
//                                             <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
//                                             Creating...
//                                         </span>
//                                     ) : (
//                                         'Create Group'
//                                     )}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CreateGroup;










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createGroup } from "../../api/group.api";
// import Layout from "../../components/common/Layout";

// const CreateGroup: React.FC = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [isPublic, setIsPublic] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       await createGroup({ name, description, isPublic });
//       navigate("/groups");
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to create group");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       {/* ===== BACKGROUND ===== */}
//       <div
//         className="min-h-screen relative bg-cover bg-center flex items-center justify-center px-4"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1950&q=80')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/60 to-purple-900/70" />

//         {/* Glow effects */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />

//         {/* ===== CONTENT ===== */}
//         <div className="relative z-10 w-full max-w-2xl">
//           {/* Back button */}
//           <button
//             onClick={() => navigate("/groups")}
//             className="flex items-center gap-2 text-indigo-200 hover:text-white mb-6 transition"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             Back to Groups
//           </button>

//           {/* ===== GLASS CARD ===== */}
//           <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8">
//             {/* Header */}
//             <div className="text-center mb-6">
//               <h1 className="text-3xl font-bold text-white mb-2">
//                 Create New Group
//               </h1>
//               <p className="text-indigo-100">
//                 Build a community and connect travelers 🚀
//               </p>
//             </div>

//             {/* Error */}
//             {error && (
//               <div className="mb-5 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
//                 <p className="text-sm text-red-100">{error}</p>
//               </div>
//             )}

//             {/* ===== FORM ===== */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Group Name */}
//               <div>
//                 <label className="block text-sm font-medium text-indigo-100 mb-2">
//                   Group Name <span className="text-red-400">*</span>
//                 </label>
//                 <input
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="e.g. Adventure Seekers"
//                   required
//                   className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur
//                              text-white placeholder-indigo-200
//                              border border-white/30
//                              focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//               </div>

//               {/* Description */}
//               <div>
//                 <label className="block text-sm font-medium text-indigo-100 mb-2">
//                   Description
//                 </label>
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows={4}
//                   placeholder="Describe what your group is about..."
//                   className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur
//                              text-white placeholder-indigo-200
//                              border border-white/30 resize-none
//                              focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//               </div>

//               {/* Public Toggle */}
//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   checked={isPublic}
//                   onChange={(e) => setIsPublic(e.target.checked)}
//                   className="mt-1 h-4 w-4 rounded border-white/30 text-indigo-500 focus:ring-indigo-400"
//                 />
//                 <div>
//                   <p className="text-sm font-medium text-white">
//                     Public Group
//                   </p>
//                   <p className="text-xs text-indigo-200">
//                     Anyone can discover and join this group
//                   </p>
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => navigate("/groups")}
//                   className="flex-1 py-3 rounded-xl border border-white/30
//                              text-white hover:bg-white/10 transition"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={loading || !name.trim()}
//                   className="flex-1 py-3 rounded-xl
//                              bg-indigo-600/80 hover:bg-indigo-500
//                              text-white font-semibold
//                              transition disabled:opacity-50"
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                       Creating...
//                     </span>
//                   ) : (
//                     "Create Group"
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateGroup;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGroup } from "../../api/group.api";
import Layout from "../../components/common/Layout";

// ✅ Import local avif image
import allgroupss from "../../assets/allgroupss.avif";

const CreateGroup: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createGroup({ name, description, isPublic });
      navigate("/groups");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create group");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* ===== BACKGROUND ===== */}
      <div
        className="min-h-screen relative bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${allgroupss})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/60 to-purple-900/70" />

        {/* Glow effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 w-full max-w-2xl">
          {/* Back button */}
          <button
            onClick={() => navigate("/groups")}
            className="flex items-center gap-2 text-indigo-200 hover:text-white mb-6 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Groups
          </button>

          {/* ===== GLASS CARD ===== */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">
                Create New Group
              </h1>
              <p className="text-indigo-100">
                Build a community and connect travelers 🚀
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                <p className="text-sm text-red-100">{error}</p>
              </div>
            )}

            {/* ===== FORM ===== */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Group Name */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-2">
                  Group Name <span className="text-red-400">*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Adventure Seekers"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur
                             text-white placeholder-indigo-200
                             border border-white/30
                             focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Describe what your group is about..."
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur
                             text-white placeholder-indigo-200
                             border border-white/30 resize-none
                             focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Public Toggle */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/30 text-indigo-500 focus:ring-indigo-400"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    Public Group
                  </p>
                  <p className="text-xs text-indigo-200">
                    Anyone can discover and join this group
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => navigate("/groups")}
                  className="flex-1 py-3 rounded-xl border border-white/30
                             text-white hover:bg-white/10 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading || !name.trim()}
                  className="flex-1 py-3 rounded-xl
                             bg-indigo-600/80 hover:bg-indigo-500
                             text-white font-semibold
                             transition disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating...
                    </span>
                  ) : (
                    "Create Group"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateGroup;
