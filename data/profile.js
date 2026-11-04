/* ==========================================================================
   ABOUT + RESEARCH
   Text may contain simple HTML: <em>, <strong>, <sub>, <sup>, <a href="">.
   ========================================================================== */

window.PROFILE = {

  /* Home page, next to the photo. One string per paragraph. */
  about: [
    "I am a theoretical and computational chemist. My PhD work quantified individual hydrogen-bond energies and their cooperativity in molecular clusters, using the <strong>Molecular Tailoring Approach (MTA)</strong>.",
    "As a Postdoctoral Fellow at FJIRSM, Chinese Academy of Sciences, I study copper&ndash;peptide mediated liquid&ndash;liquid phase separation with molecular dynamics simulations. I also apply supervised machine learning to materials screening.",
    "More broadly, I am interested in noncovalent interactions, transition-metal and main-group chemistry, biomolecular simulation, and connecting quantum chemistry with data-driven methods."
  ],

  /* Short list shown on the home page under "Currently". */
  currently: [
    "Postdoctoral Fellow, FJIRSM, CAS (2025&ndash;present)",
    "NAWA Ulam Postdoctoral Fellowship, Poland (2027)"
  ],

  /* Research page. "tags" link each theme to papers carrying the same tag
     in publications.js. */
  research: [
    {
      title: "Hydrogen-bond energetics and cooperativity",
      tags: ["mta"],
      period: "2019 &ndash; present",
      image: "assets/img/gallery/hydrogen-bond-model.png",
      text: "How strong is one hydrogen bond inside a network of many? The Molecular Tailoring Approach answers this by removing donor and acceptor groups one at a time and comparing energies. I have used it to rank individual hydrogen bonds and to separate their cooperative contributions in water, ammonia, methanol, HF, H<sub>2</sub>S and mixed clusters. Some of these clusters show unusually large cooperativity.",
      keywords: ["molecular clusters", "MTA", "cooperativity", "noncovalent interactions"]
    },
    {
      title: "Copper&ndash;peptide phase separation and metalloproteins",
      tags: ["cu"],
      period: "2025 &ndash; present",
      text: "Copper ions can drive peptides to condense into liquid droplets. With molecular dynamics simulations, I examine where Cu binds in His/Gly-rich peptide aggregates and whether those sites are preorganised. To help with this, I am writing tools that predict and rank Cu-binding sites directly from structure.",
      keywords: ["molecular dynamics", "LLPS", "Cu binding sites", "metalloproteins"]
    },
    {
      title: "Machine learning for molecules and materials",
      tags: ["ml"],
      period: "2025 &ndash; present",
      text: "I use supervised learning to screen materials and to link quantum-chemical descriptors with properties. I am also interested in atomistic machine learning, cheminformatics and inverse molecular design.",
      keywords: ["supervised learning", "materials screening", "cheminformatics"]
    },
    {
      title: "Reaction mechanisms and catalysis",
      tags: ["catalysis"],
      period: "",
      text: "Quantum-chemical studies of reaction pathways, transition states and IRC profiles, covering transition-metal catalysed C&ndash;H activation and C&ndash;C bond formation, and main-group (calcium) catalysts for sustainable chemistry.",
      keywords: ["DFT", "transition states", "main-group catalysis"]
    }
  ]
};
