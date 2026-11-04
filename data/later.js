/* ==========================================================================
   CONTENT FOR LATER  -  only visible when the matching switch in config.js
   is true. Fill it in at any time; nothing shows until you switch it on.
   ========================================================================== */

/* features.teaching */
window.TEACHING = {
  intro: "Courses I teach and have taught.",
  courses: [
    /* { when: "Spring 2029", code: "CHEM 501", title: "Quantum Chemistry",
         level: "Graduate", place: "University name", url: "" }, */
    { when: "2021 &ndash; 2023", code: "", title: "Undergraduate chemistry laboratory; computational chemistry assignments",
      level: "Teaching assistant", place: "Dr. Harisingh Gour Vishwavidyalaya, Sagar", url: "" }
  ]
};

/* features.openings */
window.OPENINGS = {
  /* Short line shown on the home page while openings are switched on. */
  banner: "Open positions for PhD students and postdocs.",
  text: [
    "We welcome motivated students and postdocs interested in computational chemistry, noncovalent interactions, metal&ndash;biomolecule systems and machine learning for chemistry.",
    "To apply, send a CV, a short statement of research interests, and the names of two referees by email."
  ],
  positions: [
    /* { title: "PhD position: ...", text: "...", deadline: "" } */
  ]
};

/* features.blog  -  newest first */
window.POSTS = [
  {
    date: "2024",
    title: "The story of hydrogen bonds",
    tags: ["history of chemistry", "molecular interactions"],
    image: "assets/img/gallery/hydrogen-bond-model.png",
    body: [
      "In 1912, T. S. Moore and T. F. Winmill introduced the concept of the hydrogen bond in their study \"The State of Amines in Aqueous Solution\". It was the start of a century-long exploration of this fundamental interaction. Hydrogen bonds, mostly involving nitrogen, oxygen or fluorine, shape the properties of water, stabilise the structures of DNA and proteins, and are central to supramolecular chemistry.",
      "Over the past hundred years our understanding of hydrogen bonds has deepened. First recognised in simple systems, they are now known to be integral to complex biological processes and to advanced material design."
    ],
    refs: "Moore, T. S.; Winmill, T. F. <em>J. Chem. Soc. Trans.</em> 1912, 101, 1635&ndash;1676. Jeffrey, G. A. <em>An Introduction to Hydrogen Bonding</em>, Oxford University Press, 1997."
  }
];
