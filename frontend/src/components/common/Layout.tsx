// import { ReactNode, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// interface LayoutProps {
//     children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//     const navigate = useNavigate();
//     const { role } = useContext(AuthContext);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const logout = () => {
//         localStorage.removeItem("token");
//         navigate("/login");
//     };

//     const navLinks = [
//         { path: "/", text: "Destinations" },
//         { path: "/itinerary/create", text: "Create Itinerary" },
//         { path: "/my-itineraries", text: "My Itineraries" },
//         { path: "/groups", text: "Groups" },
//         { path: "/favorites", text: "Favorites" },
//         { path: "/chat", text: "Chat" },
//     ];

//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Navbar */}
//             <nav className="bg-white shadow-sm sticky top-0 z-50">
//                 <div className="container mx-auto px-4">
//                     <div className="flex items-center justify-between py-4">
//                         {/* Logo */}
//                         <div className="flex items-center gap-4">
//                             <div
//                                 className="text-2xl font-bold text-blue-600 cursor-pointer"
//                                 onClick={() => navigate("/")}
//                             >
//                                 TravelTrove
//                             </div>
//                             {role === 'admin' && (
//                                 <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
//                                     Admin
//                                 </span>
//                             )}
//                         </div>

//                         {/* Navigation */}
//                         <div className="hidden md:flex items-center gap-6">
//                             {navLinks.map((link) => (
//                                 <button
//                                     key={link.path}
//                                     onClick={() => navigate(link.path)}
//                                     className="text-gray-700 hover:text-blue-600 transition"
//                                 >
//                                     {link.text}
//                                 </button>
//                             ))}
//                             <button
//                                 onClick={logout}
//                                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//                             >
//                                 Logout
//                             </button>
//                         </div>

//                         {/* Hamburger Menu */}
//                         <div className="md:hidden">
//                             <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-white">
//                         <div className="container mx-auto px-4 pb-4">
//                             {navLinks.map((link) => (
//                                 <button
//                                     key={link.path}
//                                     onClick={() => {
//                                         navigate(link.path);
//                                         setIsMenuOpen(false);
//                                     }}
//                                     className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition"
//                                 >
//                                     {link.text}
//                                 </button>
//                             ))}
//                             <button
//                                 onClick={() => {
//                                     logout();
//                                     setIsMenuOpen(false);
//                                 }}
//                                 className="block w-full text-left py-2 text-red-500 hover:text-red-600 transition"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Page Content */}
//             <main className="container mx-auto px-4 py-4">{children}</main>
//         </div>
//     );
// };

// export default Layout;

// --------------------------------------------------------------

// <Aditi>------------------</Aditi>

// import { ReactNode, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   const navigate = useNavigate();
//   const { token, role, name, logout } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { path: "/", text: "Destinations" },
//     { path: "/itinerary/create", text: "Create Itinerary" },
//     { path: "/my-itineraries", text: "My Itineraries" },
//     { path: "/groups", text: "Groups" },
//     { path: "/favorites", text: "Favorites" },
//     { path: "/chat", text: "Chat" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             <div
//               className="text-2xl font-bold text-blue-600 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               TravelTrove
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-6">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.path}
//                   onClick={() => navigate(link.path)}
//                   className="text-gray-700 hover:text-blue-600"
//                 >
//                   {link.text}
//                 </button>
//               ))}

//               {/* AUTH SECTION */}
//               {token ? (
//                 <>
//                   <span className="text-gray-700 font-medium">
//                     Hi, {name || "Traveler"}
//                   </span>
//                   <button
//                     onClick={logout}
//                     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white px-4 pb-4">
//             {navLinks.map((link) => (
//               <button
//                 key={link.path}
//                 onClick={() => {
//                   navigate(link.path);
//                   setIsMenuOpen(false);
//                 }}
//                 className="block w-full text-left py-2"
//               >
//                 {link.text}
//               </button>
//             ))}

//             {token ? (
//               <>
//                 <div className="py-2 font-medium">
//                   Hi, {name || "Traveler"}
//                 </div>
//                 <button
//                   onClick={logout}
//                   className="text-red-500 py-2"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={() => navigate("/login")}
//                 className="text-blue-600 py-2"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         )}
//       </nav>

//       {/* Page Content */}
//       <main className="container mx-auto px-4 py-4">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;




import { ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const { token, name, logout } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navLinks = [
    { path: "/", text: "Destinations" },
    { path: "/itinerary/create", text: "Create Itinerary" },
    { path: "/my-itineraries", text: "My Itineraries" },
    { path: "/groups", text: "Groups" },
    { path: "/favorites", text: "Favorites" },
    { path: "/chat", text: "Chat" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              TravelTrove
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {link.text}
                </button>
              ))}

              {/* AUTH SECTION */}
              {token ? (
                <>
                  <span className="text-gray-700 font-medium">
                    Hi, {name || "Traveler"}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsLoginOpen(!isLoginOpen)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Login
                  </button>

                  {isLoginOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                      <button
                        onClick={() => {
                          navigate("/login");
                          setIsLoginOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        User Login
                      </button>

                      <button
                        onClick={() => {
                          navigate("/admin/login");
                          setIsLoginOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Admin Login
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2"
              >
                {link.text}
              </button>
            ))}

            {token ? (
              <>
                <div className="py-2 font-medium">
                  Hi, {name || "Traveler"}
                </div>
                <button
                  onClick={logout}
                  className="text-red-500 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="py-2">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-blue-600"
                >
                  User Login
                </button>

                <button
                  onClick={() => {
                    navigate("/admin/login");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700"
                >
                  Admin Login
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;