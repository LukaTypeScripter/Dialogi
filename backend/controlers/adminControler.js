import asyncHandler from 'express-async-handler'

import MainModel from '../model/mainModels.js'
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
 const adminRoute = asyncHandler(async (req, res) => {
    try {
      const documents = await MainModel.find();
      res.json({ message: 'Welcome to the admin dashboard',documents });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }})
    const getAllData = asyncHandler(async (req, res) => {
        try {
          const documents = await MainModel.find();
          res.json({ documents });
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      });

    export {
        adminRoute,
        getAllData,
    }