// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const generateToken = require("../utils/generateToken");


// // REGISTER (hash password here)
// exports.register = async (req, res, next) => {
//     try {
//         const { username, email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: "Invalid request body" });
//         }

//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "User already exists" });
//         }
//         if (username) {
//             const existingUsername = await User.findOne({ username });
//             if (existingUsername) {
//                 return res.status(400).json({ error: "Username is already taken" });
//             }
//         }

//         let role = "user";
//         if (req.route.path === "/register-admin") {
//             role = "admin";
//         }


//         // 🔐 HASH PASSWORD HERE
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = await User.create({
//             username,
//             email,
//             password: hashedPassword,
//             role,
//         });

//         const token = generateToken(newUser._id, newUser.role);


//         res.status(201).json({
//             message: "User created successfully",
//             token,
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// // LOGIN (compare here)
// exports.login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: "Invalid request body" });
//         }

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ error: "Invalid credentials" });
//         }

//         // 🔐 COMPARE HERE
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ error: "Invalid credentials" });
//         }

//         const token = generateToken(user._id, user.role);

//         res.status(200).json({ token });
//     } catch (error) {
//         next(error);
//     }
// };


// -----ADITI-----0---------------------------


// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const generateToken = require("../utils/generateToken");

// // =======================
// // VALIDATION HELPERS
// // =======================
// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// const isValidPassword = (password) => {
//   return password.length >= 6;
// };

// // =======================
// // REGISTER
// // =======================
// exports.register = async (req, res, next) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         error: "Email and password are required",
//       });
//     }

//     if (!isValidEmail(email)) {
//       return res.status(400).json({
//         error: "Invalid email format",
//       });
//     }

//     if (!isValidPassword(password)) {
//       return res.status(400).json({
//         error: "Password must be at least 6 characters long",
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         error: "User already exists",
//       });
//     }

//     if (username) {
//       const existingUsername = await User.findOne({ username });
//       if (existingUsername) {
//         return res.status(400).json({
//           error: "Username is already taken",
//         });
//       }
//     }

//     let role = "user";
//     if (req.route.path === "/register-admin") {
//       role = "admin";
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     // ✅ username added to token
//     const token = generateToken(
//       newUser._id,
//       newUser.role,
//       newUser.username
//     );

//     res.status(201).json({
//       message: "User created successfully",
//       token,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // =======================
// // LOGIN
// // =======================
// exports.login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         error: "Email and password are required",
//       });
//     }

//     if (!isValidEmail(email)) {
//       return res.status(400).json({
//         error: "Invalid email format",
//       });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         error: "Invalid credentials",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({
//         error: "Invalid credentials",
//       });
//     }

//     // ✅ username added to token
//     const token = generateToken(
//       user._id,
//       user.role,
//       user.username
//     );

//     res.status(200).json({ token });
//   } catch (error) {
//     next(error);
//   }
// };

// ---------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const generateToken = require("../utils/generateToken");

// // =======================
// // VALIDATION HELPERS
// // =======================
// const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// const isValidPassword = (password) => password.length >= 6;

// // =======================
// // REGISTER
// // =======================
// exports.register = async (req, res, next) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!email || !password)
//       return res.status(400).json({ error: "Email and password are required" });

//     if (!isValidEmail(email))
//       return res.status(400).json({ error: "Invalid email format" });

//     if (!isValidPassword(password))
//       return res.status(400).json({ error: "Password must be at least 6 characters" });

//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ error: "User already exists" });

//     if (username) {
//       const existingUsername = await User.findOne({ username });
//       if (existingUsername) return res.status(400).json({ error: "Username is already taken" });
//     }

//     // Set role based on route
//     let role = "user";
//     if (req.route.path === "/register-admin") role = "admin";

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await User.create({ username, email, password: hashedPassword, role });

//     const token = generateToken(newUser._id, newUser.role, newUser.username);

//     res.status(201).json({ message: `${role} created successfully`, token, role });
//   } catch (error) {
//     next(error);
//   }
// };

// // =======================
// // LOGIN
// // =======================
// exports.login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) return res.status(400).json({ error: "Email and password are required" });
//     if (!isValidEmail(email)) return res.status(400).json({ error: "Invalid email format" });

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ error: "Invalid credentials" });

//     // Role check for admin login
//     let roleCheck = "user";
//     if (req.route.path === "/login-admin") roleCheck = "admin";

//     if (user.role !== roleCheck)
//       return res.status(401).json({ error: roleCheck === "admin" ? "Invalid admin credentials" : "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

//     const token = generateToken(user._id, user.role, user.username);

//     res.status(200).json({ token, role: user.role });
//   } catch (error) {
//     next(error);
//   }
// };



const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// =======================
// VALIDATION HELPERS
// =======================
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPassword = (password) => password.length >= 6;

// =======================
// REGISTER
// =======================
exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });

    if (!isValidEmail(email))
      return res.status(400).json({ error: "Invalid email format" });

    if (!isValidPassword(password))
      return res.status(400).json({ error: "Password must be at least 6 characters" });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    if (username) {
      const existingUsername = await User.findOne({ username });
      if (existingUsername) return res.status(400).json({ error: "Username is already taken" });
    }

    // Set role based on route
    let role = "user";
    if (req.route.path === "/register-admin") role = "admin";

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ username, email, password: hashedPassword, role });

    const token = generateToken(newUser._id, newUser.role, newUser.username);

    res.status(201).json({ message: `${role} created successfully`, token, role });
  } catch (error) {
    next(error);
  }
};

// =======================
// LOGIN
// =======================
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Email and password are required" });
    if (!isValidEmail(email)) return res.status(400).json({ error: "Invalid email format" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    // Role check for admin login
    let roleCheck = "user";
    if (req.route.path === "/login-admin") roleCheck = "admin";

    if (user.role !== roleCheck)
      return res.status(401).json({ error: roleCheck === "admin" ? "Invalid admin credentials" : "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken(user._id, user.role, user.username);

    res.status(200).json({ token, role: user.role });
  } catch (error) {
    next(error);
  }
};