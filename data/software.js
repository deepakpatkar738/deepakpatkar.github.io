/* ==========================================================================
   SOFTWARE  -  shown in this order.
   status: "" (nothing shown), "in development", "stable", ...
   ========================================================================== */

window.SOFTWARE = [
  {
    name: "iHBEQuant",
    kind: "Python &middot; Gaussian 16",
    status: "",
    text: "Individual Hydrogen Bond Energy Quantifier. Starting from an XYZ file of a molecular cluster, it finds the monomers and the intermolecular hydrogen bonds, writes every fragment input the Molecular Tailoring Approach needs, runs Gaussian, and reports each bond&rsquo;s in-cluster energy, its isolated-dimer energy and the cooperativity contribution.",
    links: [ { label: "GitHub", url: "https://github.com/deepakpatkar738/iHBEQuant" } ]
  },
  {
    name: "IntraHB",
    kind: "Python &middot; Gaussian 16",
    status: "",
    text: "The intramolecular counterpart of iHBEQuant. It detects hydrogen bonds inside a single molecule, cuts out the donor and acceptor groups, caps the broken bonds with hydrogen, writes the Gaussian inputs, and converts the results into hydrogen-bond energies and cooperativity contributions. It can also reuse calculations that have already been run.",
    links: [ { label: "GitHub", url: "https://github.com/deepakpatkar738/IntraHB" } ]
  },
  {
    name: "CuBind",
    kind: "Python",
    status: "",
    text: "Places Cu(I) or Cu(II) ions into histidine coordination sites of a protein or peptide PDB file: two His for Cu(I), three for Cu(II). The Cu position is a geometric estimate, so the structure should be energy-minimised before MD or QM/MM work.",
    links: [ { label: "GitHub", url: "https://github.com/deepakpatkar738/CuBind" } ]
  },
  {
    name: "MetSiteScanner",
    kind: "Python",
    status: "",
    text: "Scans a peptide structure for possible mono- and di-metal binding sites using His imidazole nitrogens and the N-terminal amine, and places Cu, Zn, Fe, Co or Ni atoms at those sites. It is a fast geometric screen that shows where a metal could fit, before choosing which sites to take to quantum chemistry.",
    links: [ { label: "GitHub", url: "https://github.com/deepakpatkar738/MetSiteScanner" } ]
  }
];
