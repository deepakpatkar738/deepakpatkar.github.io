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

/* Albums are in chronological order, newest first.
   Captions and order follow the old Google Sites gallery. */
window.GALLERY = [
  {
    title: "Scientific meetings",
    date: "",
    text: "",
    photos: [
      { src: EV + "event-01.jpg", caption: "" }
    ]
  },
  {
    title: "Convocation",
    date: "March 2024",
    text: "Convocation ceremony at Dr. Harisingh Gour Vishwavidyalaya, Sagar, celebrating the end of my PhD journey.",
    photos: [
      { src: EV + "event-11.jpg", caption: "" },
      { src: EV + "event-12.jpg", caption: "" },
      { src: EV + "event-13.jpg", caption: "" },
      { src: EV + "event-14.jpg", caption: "" },
      { src: EV + "event-15.jpg", caption: "" },
      { src: EV + "event-16.jpg", caption: "" }
    ]
  },
  {
    title: "PhD defence",
    date: "",
    text: "",
    photos: [
      { src: EV + "event-17.jpg", caption: "PhD defence day" },
      { src: EV + "event-18.jpg", caption: "PhD defence day" }
    ]
  },
  {
    title: "Thesis submission",
    date: "",
    text: "",
    photos: [
      { src: EV + "event-19.jpg", caption: "Thesis submission" },
      { src: EV + "event-20.jpg", caption: "Thesis submission" },
      { src: EV + "event-21.jpg", caption: "Thesis submission" }
    ]
  },
  {
    title: "National Seminar, Sagar",
    date: "March 2023",
    text: "National Seminar on &ldquo;Recent Advances in Chemical Sciences&rdquo;, Department of Chemistry, Dr. Harisingh Gour Vishwavidyalaya, Sagar.",
    photos: [
      { src: EV + "event-04.jpg", caption: "National Seminar on Recent Advances in Chemical Sciences" },
      { src: EV + "event-02.jpg", caption: "Poster session" },
      { src: EV + "event-03.jpg", caption: "" }
    ]
  },
  {
    title: "Teaching",
    date: "2021 &ndash; 2023",
    text: "",
    photos: [
      { src: EV + "event-22.jpg", caption: "Teaching" }
    ]
  },
  {
    title: "Molecular Tailoring Approach workshop, Pune",
    date: "May 2022",
    text: "Hands-on workshop on the Molecular Tailoring Approach, Savitribai Phule Pune University.",
    photos: [
      { src: EV + "event-05.jpg", caption: "With Prof. S. R. Gadre during the MTA workshop" },
      { src: EV + "event-06.jpg", caption: "With Prof. S. R. Gadre during the MTA workshop" },
      { src: EV + "event-07.jpg", caption: "At IISER Pune during the MTA workshop" },
      { src: EV + "event-08.jpg", caption: "At IISER Pune during the MTA workshop" }
    ]
  },
  {
    title: "MMD Group",
    date: "",
    text: "With my PhD group, the MMD Group of Dr. Milind M. Deshmukh.",
    photos: [
      { src: EV + "event-26.jpg", caption: "Dr. Manoj Nimbalkar&rsquo;s visit to our lab, April 2022" },
      { src: EV + "event-27.jpg", caption: "A memorable first MMD Group lunch at Mayur Vihar" },
      { src: EV + "event-23.jpg", caption: "Group photo" },
      { src: EV + "event-24.jpg", caption: "Group photo" },
      { src: EV + "event-25.jpg", caption: "Group photo" },
      { src: EV + "event-28.jpg", caption: "" }
    ]
  },
  {
    title: "Conferences and friends",
    date: "",
    text: "",
    photos: [
      { src: EV + "event-10.jpg", caption: "With Prof. Deepak Chopra, Kausikh and Yogesh during the conference" },
      { src: EV + "event-09.jpg", caption: "Exploring knowledge and ideas at the book fair with friends" }
    ]
  }
];
