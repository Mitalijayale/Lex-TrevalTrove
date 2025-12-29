// import React from "react";
// import { Link } from "react-router-dom";
// import { IGroup } from "../../types/group";

// interface GroupCardProps {
//   group: IGroup;
// }

// const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
//   return (
//     <div
//       className="
//         relative
//         rounded-[28px]
//         overflow-hidden
//         shadow-xl
//         transition-all duration-300
//         hover:-translate-y-1
//       "
//       style={{
//         backgroundImage:
//           "url('https://static2.tripoto.com/media/filter/tst/img/375263/TripDocument/1511196319_trekking_1.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/45"></div>

//       {/* Glass overlay */}
//       <div className="absolute inset-0 bg-white/10"></div>

//       {/* Content */}
//       <div className="relative z-10 p-6 text-white">
//         {/* Header */}
//         <div className="flex items-start justify-between mb-4">
//           <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//           </div>

//           <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/30">
//             {group.members.length} member
//             {group.members.length !== 1 ? "s" : ""}
//           </span>
//         </div>

//         {/* Title */}
//         <h3 className="text-lg font-semibold mb-2 line-clamp-1">
//           {group.name}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-white/85 mb-5 line-clamp-2 leading-relaxed">
//           {group.description}
//         </p>

//         {/* Button */}
//         <Link to={`/groups/${group._id}`}>
//           <button
//             type="button"
//             className="
//               w-full
//               py-2.5
//               rounded-full
//               bg-black/70
//               hover:bg-black/80
//               transition
//               text-sm
//               font-medium
//             "
//           >
//             View Group
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default GroupCard;
import React from "react";
import { Link } from "react-router-dom";
import { IGroup } from "../../types/group";

interface GroupCardProps {
  group: IGroup;
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  return (
    <div
      className="
        relative
        rounded-[28px]
        overflow-hidden
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        bg-white
      "
    >
      {/* CONTENT */}
      <div className="p-6 text-black">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
            {group.members.length} member
            {group.members.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-1 text-black">
          {group.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
          {group.description}
        </p>

        {/* Button */}
        <Link to={`/groups/${group._id}`}>
          <button
            type="button"
            className="
              w-full
              py-2.5
              rounded-full
              bg-gray-900
              hover:bg-black
              transition
              text-sm
              font-medium
              text-white
            "
          >
            View Group
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
