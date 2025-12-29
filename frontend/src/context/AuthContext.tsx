// import React, { createContext, useState, ReactNode, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";

// interface AuthContextType {
//     token: string | null;
//     userId: string | null;
//     role: string | null; // Add role to the context type
//     login: (token: string) => void;
//     logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType>({
//     token: null,
//     userId: null,
//     role: null, // Default role to null
//     login: () => { },
//     logout: () => { },
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [token, setToken] = useState<string | null>(
//         localStorage.getItem("token")
//     );
//     const [userId, setUserId] = useState<string | null>(null);
//     const [role, setRole] = useState<string | null>(null);

//     useEffect(() => {
//         if (token) {
//             try {
//                 const decodedToken: any = jwtDecode(token);
//                 setUserId(decodedToken.id);
//                 setRole(decodedToken.role); // Assuming role is in the 'role' field
//             } catch (error) {
//                 console.error("Failed to decode token:", error);
//                 setToken(null);
//                 localStorage.removeItem("token");
//             }
//         }
//     }, [token]);

//     const login = (newToken: string) => {
//         localStorage.setItem("token", newToken);
//         setToken(newToken);
//         try {
//             const decodedToken: any = jwtDecode(newToken);
//             setUserId(decodedToken.id);
//             setRole(decodedToken.role);
//         } catch (error) {
//             console.error("Failed to decode new token on login:", error);
//             setUserId(null);
//             setRole(null);
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken(null);
//         setUserId(null);
//         setRole(null); // Clear role on logout
//     };

//     return (
//         <AuthContext.Provider value={{ token, userId, role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


// --------------------------------------------------------adddd-----------


// import React, { createContext, useState, ReactNode, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";

// interface DecodedToken {
//   id: string;
//   role: string;
//   username?: string;
//   name?: string;
//   email?: string;
// }

// interface AuthContextType {
//   token: string | null;
//   userId: string | null;
//   role: string | null;
//   name: string | null;
//   login: (token: string) => void;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType>({
//   token: null,
//   userId: null,
//   role: null,
//   name: null,
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(
//     localStorage.getItem("token")
//   );
//   const [userId, setUserId] = useState<string | null>(null);
//   const [role, setRole] = useState<string | null>(null);
//   const [name, setName] = useState<string | null>(null);

//   const extractName = (decoded: DecodedToken) => {
//     return (
//       decoded.username ||
//       decoded.name ||
//       decoded.email?.split("@")[0] ||
//       null
//     );
//   };

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwtDecode<DecodedToken>(token);
//         setUserId(decoded.id);
//         setRole(decoded.role);
//         setName(extractName(decoded));
//       } catch {
//         logout();
//       }
//     }
//   }, [token]);

//   const login = (newToken: string) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);

//     try {
//       const decoded = jwtDecode<DecodedToken>(newToken);
//       setUserId(decoded.id);
//       setRole(decoded.role);
//       setName(extractName(decoded));
//     } catch {
//       logout();
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUserId(null);
//     setRole(null);
//     setName(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ token, userId, role, name, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

















import React, { createContext, useState, ReactNode, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  role: string;
  username?: string;
  name?: string;
  email?: string;
}

interface AuthContextType {
  token: string | null;
  userId: string | null;
  role: string | null;
  name: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  userId: null,
  role: null,
  name: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  const extractName = (decoded: DecodedToken) => {
    return (
      decoded.username ||
      decoded.name ||
      decoded.email?.split("@")[0] ||
      null
    );
  };

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserId(decoded.id);
        setRole(decoded.role);
        setName(extractName(decoded));
      } catch {
        logout();
      }
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

    try {
      const decoded = jwtDecode<DecodedToken>(newToken);
      setUserId(decoded.id);
      setRole(decoded.role);
      setName(extractName(decoded));
    } catch {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserId(null);
    setRole(null);
    setName(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, userId, role, name, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};