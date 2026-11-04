/* ==========================================================================
   SITE SETTINGS  -  edit this file first.
   Everything here is plain text. Keep the quotes and commas as they are.
   ========================================================================== */

window.SITE = {

  name: "Deepak Patkar",
  shortName: "D. Patkar",          // shown in the top bar on small screens
  honorific: "Dr.",
  position: "Postdoctoral Fellow",
  degree: "PhD",                  // shown before the field on the home page
  field: "Theoretical & Computational Chemistry",
  affiliation: "Fujian Institute of Research on the Structure of Matter (FJIRSM), Chinese Academy of Sciences",
  affiliationShort: "FJIRSM, Chinese Academy of Sciences",
  address: [
    "Fujian Institute of Research on the Structure of Matter",
    "Chinese Academy of Sciences",
    "Fuzhou, Fujian 350002, China"
  ],
  email: "deepakpatkar737@gmail.com",
  phone: "+91-7974929700",
  showPhone: false,                // true = phone number appears in the footer
  cv: "DP_CV.pdf",
  copyrightYear: 2025,             // year shown in the footer

  /* Name highlighted in every author list. Add other spellings if needed. */
  myNames: ["Patkar, D.", "Patkar, D"],

  /* --------------------------------------------------------------------
     FEATURES FOR LATER
     Set a value to true and the page appears in the menu and works.
     Set it back to false and it disappears again. Nothing is deleted.
     -------------------------------------------------------------------- */
  features: {
    group:    false,   // "Group" section on the People page (students, alumni)
    teaching: false,   // Teaching page (your own courses)
    openings: false,   // "Join us" page + notice on the home page
    blog:     true,    // Blog page
    gallery:  true,    // Gallery page
    citationStats: false  // citation / h-index numbers on Publications (fill in below)
  },

  /* Only used when features.citationStats is true. Copy from Google Scholar. */
  citationStats: { citations: null, hIndex: null, i10: null, updated: "" },

  /* Links shown as icons. show: false hides one without deleting it. */
  links: [
    { id: "scholar",      label: "Google Scholar", url: "https://scholar.google.com/citations?user=DxGUFX0AAAAJ", show: true },
    { id: "orcid",        label: "ORCID",          url: "https://orcid.org/0000-0003-2672-0711", show: true },
    { id: "researchgate", label: "ResearchGate",   url: "https://www.researchgate.net/profile/Deepak-Patkar-3", show: true },
    { id: "github",       label: "GitHub",         url: "https://github.com/deepakpatkar738", show: true },
    { id: "kaggle",       label: "Kaggle",         url: "https://www.kaggle.com/deepakpatkar", show: true },
    { id: "linkedin",     label: "LinkedIn",       url: "https://www.linkedin.com/in/deepak-patkar/", show: true },
    { id: "x",            label: "X",              url: "https://x.com/deepakpatkar738", show: true },
    { id: "youtube",      label: "YouTube",        url: "https://www.youtube.com/channel/UC-IOL4JxS0_uPtq9tIpsG6g", show: true },
    { id: "facebook",     label: "Facebook",       url: "https://www.facebook.com/deepakpatkar738", show: true },
    { id: "instagram",    label: "Instagram",      url: "https://www.instagram.com/deepakpatkar738", show: true }
  ],

  /* Menu. "feature" ties an item to a switch above. */
  nav: [
    { label: "Home",         href: "index.html" },
    { label: "Research",     href: "research.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Software",     href: "software.html" },
    { label: "Talks",        href: "talks.html" },
    { label: "People",       href: "people.html" },
    { label: "Teaching",     href: "teaching.html", feature: "teaching" },
    { label: "Gallery",      href: "gallery.html",  feature: "gallery" },
    { label: "Blog",         href: "blog.html",     feature: "blog" },
    { label: "Join us",      href: "join.html",     feature: "openings" },
    { label: "CV",           href: "cv.html" }
  ]
};
