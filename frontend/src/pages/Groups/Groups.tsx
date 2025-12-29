// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Layout from '../../components/common/Layout';
// import MyGroups from './MyGroups';
// import PublicGroups from './PublicGroups';
// import AllGroups from './AllGroups';

// const Groups: React.FC = () => {
//     const [activeTab, setActiveTab] = useState('all-groups');

//     const tabs = [
//         { id: 'all-groups', label: 'All Groups' },
//         { id: 'my-groups', label: 'My Groups' },
//         { id: 'public-groups', label: 'Public Groups' },
//     ];

//     return (
//         <Layout>
//             <div className="min-h-screen bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//                     {/* Header */}
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//                         <div>
//                             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//                                 Groups
//                             </h1>
//                             <p className="mt-1 text-sm text-gray-600">
//                                 Connect with travelers and share experiences
//                             </p>
//                         </div>
//                         <Link to="/groups/create">
//                             <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm">
//                                 <svg
//                                     className="w-4 h-4"
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
//                                 Create Group
//                             </button>
//                         </Link>
//                     </div>

//                     {/* Tabs */}
//                     <div className="border-b border-gray-200 mb-8">
//                         <nav className="-mb-px flex gap-6">
//                             {tabs.map((tab) => (
//                                 <button
//                                     key={tab.id}
//                                     onClick={() => setActiveTab(tab.id)}
//                                     className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
//                                         ? 'border-gray-900 text-gray-900'
//                                         : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                                         }`}
//                                 >
//                                     {tab.label}
//                                 </button>
//                             ))}
//                         </nav>
//                     </div>

//                     {/* Tab Content */}
//                     <div>
//                         {activeTab === 'all-groups' && <AllGroups />}
//                         {activeTab === 'my-groups' && <MyGroups />}
//                         {activeTab === 'public-groups' && <PublicGroups />}
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default Groups;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/common/Layout";
import MyGroups from "./MyGroups";
import PublicGroups from "./PublicGroups";
import AllGroups from "./AllGroups";

// ✅ Import local AVIF background image
import groupsBg from "../../assets/allgroupss.avif";

const Groups: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all-groups");

  const tabs = [
    { id: "all-groups", label: "All Groups" },
    { id: "my-groups", label: "My Groups" },
    { id: "public-groups", label: "Public Groups" },
  ];

  return (
    <Layout>
      {/* ===== BACKGROUND ===== */}
      <div
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${groupsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* ===== HEADER ===== */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-4xl font-bold text-white">Groups</h1>
              <p className="mt-2 text-sm text-white/80">
                Connect, collaborate & explore communities
              </p>
            </div>

            <Link to="/groups/create">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                           bg-indigo-600 text-white text-sm font-medium
                           hover:bg-indigo-500 transition shadow-lg"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create Group
              </button>
            </Link>
          </div>

          {/* ===== GLASS CONTAINER ===== */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-6">
            {/* ===== TABS ===== */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all
                    ${
                      activeTab === tab.id
                        ? "bg-white text-gray-900 shadow-md"
                        : "bg-white/30 text-white hover:bg-white/40"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ===== TAB CONTENT ===== */}
            <div className="animate-fadeIn">
              {activeTab === "all-groups" && <AllGroups />}
              {activeTab === "my-groups" && <MyGroups />}
              {activeTab === "public-groups" && <PublicGroups />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Groups;
