import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error("Token verification error:", error); // Log the error
      res.status(401).json({ message: "Not authorized, invalid token!" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token!" });
  }
});

 const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
  };

export {protect,isAdmin}