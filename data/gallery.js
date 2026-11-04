/* ==========================================================================
   GALLERY  -  shown when features.gallery is true (config.js).
   Photos are grouped into albums. Click a photo on the site to see it large.

   To add photos:
   1. Put the image files in  assets/img/gallery/events/
      (JPG, about 1600 px wide is plenty).
   2. Add one line per photo to an album below:
        { src: EV + "barc-2022-1.jpg", caption: "Poster session" },
   Captions are optional. Empty albums are not shown.
   ========================================================================== */

var EV = "assets/img/gallery/events/";

window.GALLERY = [
  {
    title: "Conferences and visits",
    date: "",
    text: "",
    photos: [
      { src: EV + "event-04.jpg", caption: "National Seminar on Recent Advances in Chemical Sciences" },
      { src: EV + "event-02.jpg", caption: "Poster session" },
      { src: EV + "event-03.jpg", caption: "" },
      { src: EV + "event-07.jpg", caption: "IISER Pune" },
      { src: EV + "event-08.jpg", caption: "" },
      { src: EV + "event-09.jpg", caption: "" },
      { src: EV + "event-10.jpg", caption: "" },
      { src: EV + "event-05.jpg", caption: "" },
      { src: EV + "event-06.jpg", caption: "" },
      { src: EV + "event-17.jpg", caption: "" }
    ]
  },
  {
    title: "PhD thesis",
    date: "2024",
    text: "",
    photos: [
      { src: EV + "event-19.jpg", caption: "" },
      { src: EV + "event-20.jpg", caption: "" },
      { src: EV + "event-21.jpg", caption: "" }
    ]
  },
  {
    title: "Convocation",
    date: "",
    text: "Dr. Harisingh Gour Vishwavidyalaya, Sagar",
    photos: [
      { src: EV + "event-12.jpg", caption: "" },
      { src: EV + "event-11.jpg", caption: "" },
      { src: EV + "event-13.jpg", caption: "" },
      { src: EV + "event-14.jpg", caption: "" },
      { src: EV + "event-15.jpg", caption: "" },
      { src: EV + "event-16.jpg", caption: "" }
    ]
  },
  {
    title: "Department, lab and friends",
    date: "",
    text: "",
    photos: [
      { src: EV + "event-01.jpg", caption: "" },
      { src: EV + "event-18.jpg", caption: "" },
      { src: EV + "event-22.jpg", caption: "" },
      { src: EV + "event-23.jpg", caption: "Department of Chemistry" },
      { src: EV + "event-24.jpg", caption: "" },
      { src: EV + "event-25.jpg", caption: "" },
      { src: EV + "event-26.jpg", caption: "" },
      { src: EV + "event-27.jpg", caption: "" },
      { src: EV + "event-28.jpg", caption: "" }
    ]
  }
];
