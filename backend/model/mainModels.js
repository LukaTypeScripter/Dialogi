import mongoose from "mongoose";

const AboutUsImageSchema = new mongoose.Schema({
    img:String,
    content:String,
    id: String,
  });
  const TeamMemberSchema = new mongoose.Schema({
    name: String,
    bgimg: String,
    teamMemberimg: String,
    img: String,
    status: String,
    id: String,
  });
  const LastPostedSchema = new mongoose.Schema({
    img: String,
    title: String,
    subtitle: String,
    id: String,
  });

  const AboutUsSectionSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    mainImg: String,
    sections: [
      {
        id: String,
        img: String,
        title: String,
        subtitle: String,
      },
    ],
  });
  const creativeSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    sections: [
      {
        name: String,
        id: String,
        img: String
      }
    ]
  });

  const teamMemberSchema = new mongoose.Schema({
    name: String,
    status: String,
    phone: String,
    email: String,
    img: String,
    education: [String],
    workExperiance: [String],
    trening: [String],
    learningCourse: [String],
    id: String,
  });

  const serviceSchema = new mongoose.Schema({
    name: String,
    subtitle: String,
    workDays: String,
    workHours: String,
    offdaysWork: String,
    offdaysHouers: String,
    attractText: String,
    mainText: String,
    id: String,
  });
  const contentSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    color: String,
    
  });
  const MainModelSchema = new mongoose.Schema({
    name: String,
    title: String,
    subtitle: String,
    sections: [
      {
        title: String,
        content: String,
        contents: [contentSchema],
        subcontent: String,
        aboutUsimgs: [AboutUsImageSchema],
        ourTeam: [TeamMemberSchema],
        lastPosted: [LastPostedSchema],
        aboutUs: [AboutUsSectionSchema],
        rates:[creativeSchema],
        teamMembers:[teamMemberSchema],
        services:[serviceSchema],
      },
    ],
  
  
  });

const MainModel = mongoose.model('Main', MainModelSchema);

export default MainModel