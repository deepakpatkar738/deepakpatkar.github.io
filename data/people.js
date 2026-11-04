/* ==========================================================================
   PEOPLE
   mentors / collaborators: always shown.
   group / alumni: shown only when features.group is true (config.js).
   Emails are written as name[at]domain so robots cannot harvest them.
   ========================================================================== */

window.PEOPLE = {

  mentors: [
    { name: "Prof. Wei Zhuang", role: "Postdoctoral advisor", title: "Professor",
      org: "Fujian Institute of Research on the Structure of Matter, Chinese Academy of Sciences, Fuzhou",
      photo: "assets/img/people/zhuang.jpg",
      links: [ { label: "Group", url: "https://fjirsm.cas.cn/wzhuang/zw_prof_zhuang/" } ],
      email: "wzhuang[at]fjirsm.ac.cn" },
    { name: "Dr. Milind M. Deshmukh", role: "PhD supervisor", title: "Associate Professor",
      org: "Department of Chemistry, University of Delhi",
      photo: "assets/img/people/deshmukh.png",
      links: [ { label: "Group", url: "https://sites.google.com/view/mmd-group/home" },
               { label: "Scholar", url: "https://scholar.google.com/citations?user=MsbnhTIAAAAJ" } ],
      email: "milind.deshmukh[at]gmail.com" }
  ],

  collaborators: [
    { name: "Prof. Shridhar R. Gadre", title: "Distinguished Professor, SPPU Pune",
      org: "Department of Chemistry, IIT Kanpur",
      photo: "assets/img/people/gadre.jpg",
      links: [ { label: "Homepage", url: "https://home.iitk.ac.in/~gadre/" },
               { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Shridhar_Ramachandra_Gadre" },
               { label: "Scholar", url: "https://scholar.google.com/citations?user=KRKQtbUAAAAJ" } ],
      email: "gadre[at]iitk.ac.in" },
    { name: "Prof. Deepak Chopra", title: "Professor",
      org: "Department of Chemistry, IISER Bhopal",
      photo: "assets/img/people/chopra.jpg",
      links: [ { label: "Lab", url: "https://sites.google.com/view/iiserb-cccl/about-prof-deepak-chopra" },
               { label: "Scholar", url: "https://scholar.google.com/citations?user=DsbVJv4AAAAJ" } ],
      email: "dchopra[at]iiserb.ac.in" },
    { name: "Dr. Pookkottu K. Sajith", title: "Assistant Professor",
      org: "Department of Chemistry, Farook College, Kozhikode",
      photo: "assets/img/people/sajith.jpg",
      links: [ { label: "Scholar", url: "https://scholar.google.com/citations?user=LainqCkAAAAJ" } ],
      email: "pksajith[at]farookcollege.ac.in" },
    { name: "Dr. Mini Bharati Ahirwar", title: "Postdoctoral Fellow",
      org: "Kyoto University, Japan",
      photo: "assets/img/people/ahirwar.jpg",
      links: [ { label: "Scholar", url: "https://scholar.google.com/citations?user=P06643kAAAAJ" } ],
      email: "minibharati11[at]gmail.com" },
    { name: "Dr. Thaufail M. Ismail", title: "Postdoctoral Fellow",
      org: "Missouri University of Science &amp; Technology, USA",
      photo: "assets/img/people/ismail.png",
      links: [ { label: "Scholar", url: "https://scholar.google.com/citations?user=U1x1iFgAAAAJ" } ],
      email: "thufailmismail[at]gmail.com" }
  ],

  /* ---- For later (features.group) ----------------------------------------
     Example entry:
     { name: "Jane Doe", title: "PhD student (2028&ndash;)", org: "Topic: ...",
       photo: "assets/img/people/jane.jpg", links: [], email: "" }        */
  group: [],
  alumni: [],

  /* ---- Photo gallery (features.gallery) ---------------------------------- */
  gallery: [
    { src: "assets/img/gallery/phd-thesis-submission.png", caption: "PhD thesis submission" },
    { src: "assets/img/gallery/hydrogen-bond-model.png", caption: "Hydrogen-bonded molecular cluster" }
  ]
};
