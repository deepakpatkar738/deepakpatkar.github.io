/* ==========================================================================
   ABOUT + RESEARCH
   Text may contain simple HTML: <em>, <strong>, <sub>, <sup>, <a href="">.
   ========================================================================== */

window.PROFILE = {

  /* Home page, next to the photo. One string per paragraph. */
  about: [
    "I am a theoretical and computational chemist. My PhD work quantified individual hydrogen-bond energies and their cooperativity in molecular clusters, using the <strong>Molecular Tailoring Approach (MTA)</strong>. As a Postdoctoral Fellow at FJIRSM, Chinese Academy of Sciences, I now study copper&ndash;peptide mediated liquid&ndash;liquid phase separation with molecular dynamics simulations, and apply supervised machine learning to materials screening. More broadly, I am interested in noncovalent interactions, transition-metal and main-group chemistry, biomolecular simulation, and connecting quantum chemistry with data-driven methods."
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
      title: "Noncovalent interactions",
      tags: ["mta"],
      period: "2019 &ndash; present",
      text: "Hydrogen bonds and other weak contacts rarely act alone. In a network, each one strengthens or weakens its neighbours. My work asks how much a single interaction contributes inside such a network, and develops the methods to answer that. With the <strong>Molecular Tailoring Approach (MTA)</strong>, I estimate individual hydrogen-bond energies directly in the parent molecule or cluster, and separate the cooperative part of each bond from its intrinsic strength. I complement this with <strong>many-body expansion</strong> to split the total binding into two-, three- and higher-body terms; <strong>SAPT</strong> to decompose interaction energies into electrostatics, exchange, induction and dispersion; <strong>MESP</strong> topography to locate donor and acceptor sites; and <strong>QTAIM</strong> to characterise each contact through its bond critical point. Together these give a consistent picture of water, ammonia, methanol, HF, H<sub>2</sub>S and mixed clusters, and of halogen-substituted organic molecules, including cases of unusually large cooperativity.",
      keywords: ["Molecular Tailoring Approach", "many-body expansion", "SAPT", "MESP", "QTAIM", "H-bond cooperativity"]
    },
    {
      title: "Reaction mechanisms and catalysis",
      tags: ["catalysis"],
      period: "2019 &ndash; present",
      text: "Quantum-chemical studies of reaction pathways, transition states and IRC profiles, covering transition-metal catalysed C&ndash;H activation and C&ndash;C bond formation, and main-group (calcium) catalysts for sustainable chemistry.",
      keywords: ["DFT", "transition states", "main-group catalysis"]
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
    }
  ]
};
