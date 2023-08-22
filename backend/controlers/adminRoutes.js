import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'
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

      const newAboutUsImage = asyncHandler(async (req, res) => {
        try {
          const updatedDocument = await MainModel.findOneAndUpdate(
            { _id: req.params._id }, // Assuming req.params._id contains the ID of the document you want to update
            {
              $push: {
                // Assuming 'aboutUsimgs' is an array field in your schema
                'sections.0.aboutUsimgs': req.body.newImageData,
              },
            },
            { new: true } // Return the updated document
          );
      
          if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
          }
      
          res.status(200).json(updatedDocument);
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      });
      const newAboutUsImageALL = asyncHandler(async (req, res) => {
        try {
          // Fetch only the 'aboutUsimgs' data from the MainModel collection
          const aboutUsImages = await MainModel.find({}, MainModel.aboutUsimgs);
      
          // Extract 'aboutUsimgs' from each document and combine into a single array
          const allAboutUsImages = aboutUsImages.reduce((images, doc) => {
            return images.concat(doc.sections[0]?.aboutUsimgs || []);
          }, []);
      
          res.status(200).json(allAboutUsImages);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      const newAboutUsImageUpdate= asyncHandler( async(req,res) => {
        const updatedAboutUsImage = await MainModel.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
          );
          res.json(updatedAboutUsImage);
      })
      const newAboutUsImageDelate= asyncHandler( async(req,res) => {
        await MainModel.findByIdAndDelete(req.params._id);
  res.json({ message: 'AboutUsImage deleted' });
      })
    export {
        adminRoute,
        getAllData,
        newAboutUsImage,
        newAboutUsImageALL,
        newAboutUsImageUpdate,
        newAboutUsImageDelate
    }