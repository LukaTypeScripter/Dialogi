import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  img: String,
  content: String,
  id: String,
});

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  bgimg: String,
  teamMemberimg: String,
  img: String,
  status: String,
  id: String,
  phone: String,
  email: String,
  education: [
    {
      description: String,
      date: String,
    },
  ],
  workExperiance: [
    {
      description: String,
      date: String,
    },
  ],
  trening: [
    {
      description: String,
    },
  ],
  learningCourse: [
    {
      description: String,
    },
  ],
});

const LastPostedSchema = new mongoose.Schema({
  img: String,
  title: String,
  subtitle: String,
  id: String,
});

const AboutUsSectionSchema = new mongoose.Schema({
  id: String,
  img: String,
  title: String,
  subtitle: String,
});

const CreativeSchema = new mongoose.Schema({
  name: String,
  id: String,
  img: String,
});

const ServiceSchema = new mongoose.Schema({
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

const ContentSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  color: String,
});

const MainModelSchema = new mongoose.Schema({
  sections: [
    {
      title: String,
      content: String,
      contents: [ContentSchema],
      subcontent: String,
      aboutUsimgs: [ImageSchema],
      ourTeam: [TeamMemberSchema],
      lastPosted: [LastPostedSchema],
      aboutUs: [AboutUsSectionSchema],
      rates: [CreativeSchema],
      teamMembers: [TeamMemberSchema],
      services: [ServiceSchema],
    },
  ],
});

const MainModel = mongoose.model("Main", MainModelSchema);

export default MainModel;
