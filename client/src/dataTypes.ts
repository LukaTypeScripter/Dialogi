interface ContentObject {
    title: string;
    subtitle: string;
    color: string;
    img?: string; // Optional property
  }
  
  interface TeamMember {
    name: string;
    status: string;
    phone: string;
    email: string;
    img: string;
    education: string[];
    workExperiance: string[];
    trening: string[];
    learningCourse: string[];
  }
  
  interface Section {
    contents: ContentObject[];
    aboutUsimgs?: { img: string }[];
    ourTeam?: TeamMember[];
    lastPosted?: ContentObject[];
    mainImg?: string;
    rates?: ContentObject[];
    teamMembers?: TeamMember[];
  }
  export interface aboutUs {
    img:string
    content:string
    _id:string
  }
  export interface Data {
    _id: string;
    sections: Section[];
  }