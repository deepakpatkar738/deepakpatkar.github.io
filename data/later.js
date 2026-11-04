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

/* features.blog  -  newest first.
   Each post has sections; their headings build the contents list on the
   right of the Blog page automatically. */
window.POSTS = [
  {
    date: "2024",
    title: "A century of the hydrogen bond",
    tags: ["history of chemistry", "noncovalent interactions"],
    image: "assets/img/gallery/hydrogen-bond-model.png",
    imageCaption: "A small hydrogen-bonded cluster: the dotted lines are hydrogen bonds.",
    summary: "From a footnote about amines in water to the glue of DNA, and the question I worked on in my PhD: how strong is <em>one</em> hydrogen bond inside a network?",
    sections: [
      {
        heading: "An idea from 1912",
        body: [
          "In 1912, T. S. Moore and T. F. Winmill tried to explain why trimethylammonium hydroxide is a weaker base than expected. Their suggestion was that a hydrogen atom could sit between the nitrogen and the oxygen and hold the two together. The idea was unusual: a hydrogen atom, with only one electron, apparently linked to two partners at once.",
          "In 1920, W. M. Latimer and W. H. Rodebush used the same picture to explain the unusual properties of water and other associated liquids. They argued that a hydrogen atom held between two electron-rich atoms acts as a bridge. Water molecules could join into large networks, which accounts for water's high boiling point and its excellent ability to dissolve other substances."
        ]
      },
      {
        heading: "Pauling gives it a name",
        body: [
          "Linus Pauling made the hydrogen bond part of everyday chemistry. In <em>The Nature of the Chemical Bond</em> (1939), he described it as a mainly electrostatic attraction between a hydrogen atom bonded to an electronegative atom and a lone pair on a neighbouring atom. He also showed how it explains the structure of ice, the association of carboxylic acids and the high boiling points of HF, H<sub>2</sub>O and NH<sub>3</sub>.",
          "The electrostatic picture was simple and powerful, and it still works well for many cases. Later work added polarisation, charge transfer and dispersion. These help to explain why some hydrogen bonds are short and strong, while others are long and weak."
        ]
      },
      {
        heading: "Holding life together",
        body: [
          "In 1951 Pauling, Corey and Branson proposed the &alpha;-helix and the &beta;-sheet. Both are protein structures held in shape by regular hydrogen bonds between backbone C=O and N&ndash;H groups. Two years later, Watson and Crick built their model of DNA. Its two strands are joined by hydrogen-bonded base pairs: A with T, and G with C.",
          "These structures made one point very clearly. A single hydrogen bond is weak, a few kcal/mol, which is roughly a twentieth of a covalent bond. Many of them acting together, however, can hold a protein or a double helix in shape. And because each one is weak, they can also be broken and re-formed when a cell needs to read its genes or fold a protein."
        ]
      },
      {
        heading: "What counts as a hydrogen bond?",
        body: [
          "As chemists found more examples, the definition had to grow. Contacts such as C&ndash;H&middot;&middot;&middot;O, O&ndash;H&middot;&middot;&middot;&pi; and even dihydrogen bonds (X&ndash;H&middot;&middot;&middot;H&ndash;M) share many features with classical hydrogen bonds. In 2011 an IUPAC task group proposed a broader definition. It describes the hydrogen bond as an attractive interaction between a hydrogen atom of a molecule or fragment X&ndash;H, where X is more electronegative than H, and an atom or group of atoms in the same or a different molecule, with evidence of bond formation.",
          "The definition emphasises evidence: a shorter-than-expected distance, a red shift of the X&ndash;H stretching frequency, a bond critical point in the electron density (QTAIM), or a favourable interaction energy. No single criterion is enough on its own."
        ]
      },
      {
        heading: "More than the sum of its parts",
        body: [
          "Hydrogen bonds rarely act alone, and they influence each other. In a chain or ring of water molecules, each molecule that donates a hydrogen bond becomes a better acceptor for the next, and vice versa. The result is <strong>cooperativity</strong>: the total binding is larger than the sum of the isolated pairs. In cyclic clusters such as (HF)<sub>n</sub> or (H<sub>2</sub>O)<sub>n</sub>, this extra stabilisation can be very large.",
          "Cooperativity also makes hydrogen bonds hard to measure. Experiments and standard calculations give the binding energy of the whole cluster, not of each bond inside it. Asking how strong one particular bond in the ring is turns out to be a hard question."
        ]
      },
      {
        heading: "Measuring one bond at a time",
        body: [
          "The Molecular Tailoring Approach (MTA) offers a direct answer. The donor group of a chosen hydrogen bond is removed, then the acceptor group, then both, and the resulting fragments are capped with hydrogen atoms without changing the rest of the geometry. Comparing the energies of these four structures gives the energy of that one hydrogen bond in its real environment. Repeating the calculation with neighbouring bonds removed shows how much of that energy comes from cooperativity.",
          "During my PhD I used this approach to rank individual hydrogen bonds in clusters of HF, water, ammonia, methanol and H<sub>2</sub>S, and their mixtures. In HF clusters, for example, cooperativity makes each bond in the ring considerably stronger than an isolated HF dimer bond. The details are in the papers listed on my <a href=\"publications.html\">publications</a> page."
        ]
      },
      {
        heading: "Where next",
        body: [
          "A century after Moore and Winmill, the hydrogen bond is still an active research topic. Open questions include how hydrogen-bond networks rearrange in phase-separated biomolecular droplets, how metal ions reshape them, and whether machine-learned models can predict cooperative effects without a full quantum-chemical calculation. These are the directions I am now working on."
        ]
      }
    ],
    refs: [
      "Moore, T. S.; Winmill, T. F. The state of amines in aqueous solution. <em>J. Chem. Soc., Trans.</em> 1912, 101, 1635&ndash;1676.",
      "Latimer, W. M.; Rodebush, W. H. Polarity and ionization from the standpoint of the Lewis theory of valence. <em>J. Am. Chem. Soc.</em> 1920, 42, 1419&ndash;1433.",
      "Pauling, L. <em>The Nature of the Chemical Bond</em>; Cornell University Press, 1939.",
      "Pauling, L.; Corey, R. B.; Branson, H. R. The structure of proteins. <em>Proc. Natl. Acad. Sci. USA</em> 1951, 37, 205&ndash;211.",
      "Watson, J. D.; Crick, F. H. C. Molecular structure of nucleic acids. <em>Nature</em> 1953, 171, 737&ndash;738.",
      "Arunan, E. et al. Definition of the hydrogen bond (IUPAC Recommendations 2011). <em>Pure Appl. Chem.</em> 2011, 83, 1637&ndash;1641.",
      "Jeffrey, G. A. <em>An Introduction to Hydrogen Bonding</em>; Oxford University Press, 1997."
    ]
  }
];
