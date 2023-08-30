import asyncHandler from "express-async-handler";

import MainModel from "../../model/mainModels.js";
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
const newAboutUsImageUpdate = asyncHandler(async (req, res) => {
  const mainId = req.params.mainId;
  const sectionId = req.params.sectionId;
  const imageId = req.params.imageId;

  const mainDocument = await MainModel.findById(mainId);
  if (!mainDocument) {
    return res.status(404).json({ message: "Main document not found" });
  }

  const section = mainDocument.sections.find((section) =>
    section._id.equals(sectionId)
  );
  if (!section) {
    return res.status(404).json({ message: "Section not found" });
  }

  const content = section.aboutUsimgs.find((aboutUsimg) =>
    aboutUsimg._id.equals(imageId)
  );
  if (!content) {
    return res.status(404).json({ message: "Content not found" });
  }

  // Check if an image was included in the request
  if (req.file) {
    content.img = req.file.buffer.toString("base64"); // Update image
  }

  content.content = req.body.content; // Update content
  await mainDocument.save();

  res.status(200).json(mainDocument);
});

const newAboutUsImageALL = asyncHandler(async (req, res) => {
  try {
    const aboutUsImages = await MainModel.find({}, "sections").lean();

    const allAboutUsImages = aboutUsImages.reduce((images, doc) => {
      const sections = doc.sections || [];
      for (const section of sections) {
        const aboutUsImages = section.aboutUsimgs || [];
        images = images.concat(aboutUsImages);
      }
      return images;
    }, []);

    res.status(200).json(allAboutUsImages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const newAboutUsImageDelate = asyncHandler(async (req, res) => {
  const imageId = req.params._id; // Get the image ID from the URL parameters

  try {
    // Find the document containing the specific image and delete it
    const mainDocument = await MainModel.findOne({
      "sections.aboutUsimgs._id": imageId,
    });

    if (!mainDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    const section = mainDocument.sections.find((section) =>
      section.aboutUsimgs.some((img) => img._id.equals(imageId))
    );

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    section.aboutUsimgs = section.aboutUsimgs.filter(
      (img) => !img._id.equals(imageId)
    );
    await mainDocument.save();

    res.json({ message: "AboutUsImage deleted", mainDocument });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
const newAboutUsImageAdd = asyncHandler(async (req, res) => {
  const mainId = req.params.mainId;
  const sectionId = req.params.sectionId;
  console.log(mainId, sectionId);
  const mainDocument = await MainModel.findById(mainId);
  if (!mainDocument) {
    return res.status(404).json({ message: "Main document not found" });
  }

  const section = mainDocument.sections.find((section) =>
    section._id.equals(sectionId)
  );
  if (!section) {
    return res.status(404).json({ message: "Section not found" });
  }
  console.log(req.file);
  const newImage = {
    img: req.file.buffer.toString("base64"), // Save image as Base64 string
    content: req.body.content, // Update content
  };

  section.aboutUsimgs.push(newImage);
  await mainDocument.save();

  res.status(201).json(mainDocument);
});
export {
  newAboutUsImageALL,
  newAboutUsImageUpdate,
  newAboutUsImageDelate,
  newAboutUsImageAdd,
};
