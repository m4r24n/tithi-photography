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
  {
    title: "The Day to Day",
    category: "maya",
    thumbType: "landscape",
    src: "https://res.cloudinary.com/tnrgjpya/image/upload/f_auto,q_auto/IMG_6066_jueshd"
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
    title: "Evening Session",
    category: "gigs",
    thumbType: "landscape",
    src: "assets/sample-gigs-01.svg"
  },
  {
    title: "Portrait Study",
    category: "gigs",
    thumbType: "portrait",
    src: "assets/sample-gigs-02.svg"
  },
  {
    title: "Gathering",
    category: "gigs",
    thumbType: "square",
    src: "assets/sample-gigs-03.svg"
  },
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
  }
];
