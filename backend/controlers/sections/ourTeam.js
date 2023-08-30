import asyncHandler from "express-async-handler";

import MainModel from "../../model/mainModels.js";

const newOurTeamImageUpdate = asyncHandler(async (req, res) => {
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

  const content = section.ourTeam.find((ourTeam) =>
    ourTeam._id.equals(imageId)
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

const newOurTeamImageAll = asyncHandler(async (req, res) => {
  try {
    const ourTeamImages = await MainModel.find({}, "sections").lean();

    const allOurTeamImages = ourTeamImages.reduce((images, doc) => {
      const sections = doc.sections || [];
      for (const section of sections) {
        const ourTeamImages = section.ourTeam || [];
        images = images.concat(ourTeamImages);
      }
      return images;
    }, []);

    res.status(200).json(allOurTeamImages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { newOurTeamImageAll, newOurTeamImageUpdate };
