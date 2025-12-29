// import api from "./axios";

// export const loginUser = (email: string, password: string) => {
//     return api.post("/auth/login", { email, password });
// };

// export const registerUser = (email: string, password: string) => {
//     return api.post("/auth/register", { email, password });
// };

// -------------------------------------aditi-------------------------------------------

// import api from "./axios";

// // ================= ADMIN =================
// export const registerAdmin = (name: string, email: string, password: string) => {
//   return api.post("/auth/register-admin", { username: name, email, password });
// };

// export const loginAdmin = (email: string, password: string) => {
//   return api.post("/auth/login-admin", { email, password });
// };

// // ================= USER =================
// // Updated: remove username, only email & password
// export const registerUser = (email: string, password: string) => {
//   return api.post("/auth/register", { email, password });
// };

// export const loginUser = (email: string, password: string) => {
//   return api.post("/auth/login", { email, password });
// };

// -------------------------------------aditi-------------------------------------------


import api from "./axios";

// ================= ADMIN =================
export const registerAdmin = (name: string, email: string, password: string) => {
  return api.post("/auth/register-admin", { username: name, email, password });
};

export const loginAdmin = (email: string, password: string) => {
  return api.post("/auth/login-admin", { email, password });
};

// ================= USER =================
// Updated: remove username, only email & password
export const registerUser = (email: string, password: string) => {
  return api.post("/auth/register", { email, password });
};

export const loginUser = (email: string, password: string) => {
  return api.post("/auth/login", { email, password });
};