/*
  HOW TO UPDATE PHOTOS
  1) Upload photos to Cloudinary.
  2) Copy each optimized delivery URL.
  3) Replace the sample src values below.

  Recommended Cloudinary URL transformation:
  /image/upload/f_auto,q_auto,w_1600/

  Example:
  https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto,w_1600/shamina-gallery/maya/photo-name.jpg
*/

const siteConfig = {
  brandName: "Maya",
  logoPath: "assets/maya-signature.svg",
  email: "SHAMINA.TITHI@bcmail.cuny.edu",
  academicWebsite: "https://shaminaisrat.com",
  social: {
    instagram: "#",
    linkedin: "#",
    email: "mailto:SHAMINA.TITHI@bcmail.cuny.edu"
  }
};

const galleryImages = [
  /* MAYA PAGE */
  {
    title: "The Day to Day",
    category: "maya",
    thumbType: "landscape",
    src: "assets/sample-maya-01.svg"
  },
  {
    title: "Quiet Window Light",
    category: "maya",
    thumbType: "portrait",
    src: "assets/sample-maya-02.svg"
  },
  {
    title: "A Walk Through Green",
    category: "maya",
    thumbType: "square",
    src: "assets/sample-maya-03.svg"
  },
  {
    title: "Small Hours",
    category: "maya",
    thumbType: "wide",
    src: "assets/sample-maya-04.svg"
  },
  {
    title: "Soft Afternoon",
    category: "maya",
    thumbType: "landscape",
    src: "assets/sample-maya-01.svg"
  },
  {
    title: "Stillness",
    category: "maya",
    thumbType: "portrait",
    src: "assets/sample-maya-02.svg"
  },
  {
    title: "Everyday Light",
    category: "maya",
    thumbType: "square",
    src: "assets/sample-maya-03.svg"
  },
  {
    title: "Passing Season",
    category: "maya",
    thumbType: "landscape",
    src: "assets/sample-maya-04.svg"
  },
  {
    title: "Quiet Place",
    category: "maya",
    thumbType: "portrait",
    src: "assets/sample-maya-01.svg"
  },
  {
    title: "Open Air",
    category: "maya",
    thumbType: "wide",
    src: "assets/sample-maya-02.svg"
  },

  /* GIGS PAGE */
  {
    title: "Evening Session",
    category: "gigs",
    thumbType: "landscape",
    src: "assets/sample-gigs-01.svg"
  },
  {
    title: "The Bride",
    category: "gigs",
    thumbType: "portrait",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/c_fill,g_auto,w_700,h_525/f_auto/q_auto/v1783130670/Thebride.jpg"
  },
  {
    title: "Couple in the Woods",
    category: "gigs",
    thumbType: "square",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/c_fill,g_auto,w_700,h_525/f_auto/q_auto/v1783130674/CouplesInTheWoods.jpg"
  },
  {
    title: "Team Bride",
    category: "gigs",
    thumbType: "wide",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/c_fill,g_auto,w_700,h_525/f_auto/q_auto/v1783130659/TeamBride.jpg"
  },
  {
    title: "Warm Light",
    category: "gigs",
    thumbType: "portrait",
    src: "assets/sample-gigs-02.svg"
  },
  {
    title: "Event Frame",
    category: "gigs",
    thumbType: "landscape",
    src: "assets/sample-gigs-03.svg"
  },
  {
    title: "After Hours",
    category: "gigs",
    thumbType: "square",
    src: "assets/sample-gigs-01.svg"
  },
  {
    title: "Quiet Portrait",
    category: "gigs",
    thumbType: "portrait",
    src: "assets/sample-gigs-02.svg"
  },
  {
    title: "The Moment",
    category: "gigs",
    thumbType: "landscape",
    src: "assets/sample-gigs-03.svg"
  },
  {
    title: "Close Frame",
    category: "gigs",
    thumbType: "wide",
    src: "assets/sample-gigs-01.svg"
  },

  /* PORTRAIT PAGE */
    {
    title: "Portrait Study I",
    category: "portraits",
    thumbType: "portrait",
    src: "assets/sample-gigs-01.svg"
  },
  {
    title: "Window Light",
    category: "portraits",
    thumbType: "portrait",
    src: "assets/sample-gigs-02.svg"
  },
  {
    title: "Quiet Expression",
    category: "portraits",
    thumbType: "square",
    src: "assets/sample-gigs-03.svg"
  },
  {
    title: "Soft Gaze",
    category: "portraits",
    thumbType: "landscape",
    src: "assets/sample-maya-01.svg"
  },
  {
    title: "The Still Frame",
    category: "portraits",
    thumbType: "portrait",
    src: "assets/sample-maya-02.svg"
  },
  {
    title: "Afternoon Portrait",
    category: "portraits",
    thumbType: "square",
    src: "assets/sample-maya-03.svg"
  },
  {
    title: "Profile in Light",
    category: "portraits",
    thumbType: "wide",
    src: "assets/sample-maya-04.svg"
  },
  {
    title: "Natural Light Study",
    category: "portraits",
    thumbType: "portrait",
    src: "assets/sample-editorial-01.svg"
  },
  {
    title: "Close Frame",
    category: "portraits",
    thumbType: "landscape",
    src: "assets/sample-editorial-02.svg"
  },
  {
    title: "Portrait Note",
    category: "portraits",
    thumbType: "square",
    src: "assets/sample-editorial-03.svg"
  },
   /* EDITORIAL PAGE */
  
  {
    title: "Soft Editorial I",
    category: "editorial",
    thumbType: "portrait",
    src: "assets/sample-editorial-01.svg"
  },
  {
    title: "Light and Form",
    category: "editorial",
    thumbType: "landscape",
    src: "assets/sample-editorial-02.svg"
  },
  {
    title: "The Quiet Frame",
    category: "editorial",
    thumbType: "wide",
    src: "assets/sample-editorial-03.svg"
  },
  {
    title: "Editorial Study",
    category: "editorial",
    thumbType: "square",
    src: "assets/sample-editorial-01.svg"
  },
  {
    title: "In Between",
    category: "editorial",
    thumbType: "portrait",
    src: "assets/sample-editorial-02.svg"
  },
  {
    title: "A Shape of Light",
    category: "editorial",
    thumbType: "landscape",
    src: "assets/sample-editorial-03.svg"
  },
  {
    title: "Quiet Color",
    category: "editorial",
    thumbType: "square",
    src: "assets/sample-editorial-01.svg"
  },
  {
    title: "The Still Image",
    category: "editorial",
    thumbType: "portrait",
    src: "assets/sample-editorial-02.svg"
  },
  {
    title: "Surface and Shadow",
    category: "editorial",
    thumbType: "wide",
    src: "assets/sample-editorial-03.svg"
  },
  {
    title: "Editorial Note",
    category: "editorial",
    thumbType: "landscape",
    src: "assets/sample-editorial-01.svg"
  },

  /* FEATURES PAGE */
  {
    title: "Selected Feature",
    category: "features",
    thumbType: "landscape",
    src: "assets/sample-features-01.svg"
  },
  {
    title: "Commission Highlight",
    category: "features",
    thumbType: "square",
    src: "assets/sample-features-02.svg"
  },
  {
    title: "Story of Dust!",
    category: "features",
    thumbType: "portrait",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/c_fill,g_auto,w_700,h_525/f_auto/q_auto/v1783131830/Story%20of%20a%20Village.jpg"
  },
  {
    title: "Story of Green!",
    category: "features",
    thumbType: "wide",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/c_fill,g_auto,w_700,h_525/f_auto/q_auto/v1783131842/Story%20of%20Green.jpg"
  },
  {
    title: "Published Frame",
    category: "features",
    thumbType: "landscape",
    src: "assets/sample-features-01.svg"
  },
  {
    title: "Wind of Change",
    category: "features",
    thumbType: "portrait",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/c_fill,g_auto,w_700,h_525/f_auto/q_auto/v1783132839/WindOwfChange%21.jpg"
  },
  {
    title: "Selected Work",
    category: "features",
    thumbType: "square",
    src: "assets/sample-features-01.svg"
  },
  {
    title: "Feature Detail",
    category: "features",
    thumbType: "landscape",
    src: "assets/sample-features-02.svg"
  },
  {
    title: "Commission Story",
    category: "features",
    thumbType: "portrait",
    src: "assets/sample-features-01.svg"
  },
  {
    title: "Archive Selection",
    category: "features",
    thumbType: "wide",
    src: "assets/sample-features-02.svg"
  }
];
