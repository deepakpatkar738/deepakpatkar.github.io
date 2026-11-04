/* ==========================================================================
   BLOG  -  shown when features.blog is true (config.js).
   Posts appear in the order listed here (a reading series, first post on top).
   Each post has sections; their headings build the contents list on the
   right of the Blog page automatically.

   A body line that starts with <p ...>, <figure> or <table> is used as-is.
   Equations are SVG images made with LaTeX: edit tools/equations.txt and run
   python tools/make_equations.py, then use  EQ("name")  in a body line.

   Links between posts use the post title in lower case with dashes, e.g.
   <a href="#mixed-clusters-when-two-molecules-compete">...</a>
   ========================================================================== */

function EQ(name, alt) {
  return '<p class="eq"><img src="assets/img/eq/' + name + '.svg" alt="' + (alt || "equation") + '"></p>';
}

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
          "Hydrogen bonds rarely act alone, and they influence each other. When a water molecule accepts a hydrogen bond, electron density shifts within it, and its own O&ndash;H bonds become better donors for the next molecule. In a chain or ring, this push travels around the network. The result is <strong>cooperativity</strong>: the extra strength a hydrogen bond gains from the other hydrogen bonds around it. A bond inside a network is therefore stronger than the same two molecules would be on their own. Occasionally the effect works the other way and a bond is weakened by its neighbours, which is called anti-cooperativity. In rings of HF or water molecules, the cooperative gain can be very large.",
          "Cooperativity also makes hydrogen bonds hard to measure. Experiments and standard calculations give the binding energy of the whole cluster, not of each bond inside it. Asking how strong one particular bond in the ring is turns out to be a hard question."
        ]
      },
      {
        heading: "Measuring one bond at a time",
        body: [
          "The Molecular Tailoring Approach (MTA) answers that question directly. To find the strength of one hydrogen bond in a cluster, the two molecules it joins are removed one at a time, and then together, while every other molecule stays exactly where it was. Comparing the energies of these smaller clusters with that of the full cluster leaves the energy of that single bond, measured in its real surroundings. Only whole molecules are taken out, so no chemical bond is broken along the way. Doing the same for the two molecules on their own then shows how much of the bond&rsquo;s strength comes from cooperativity. How this works, step by step, is the subject of the next post, <a href=\"#what-the-molecular-tailoring-approach-measures\">What the Molecular Tailoring Approach measures</a>.",
          "During my PhD I used this approach on clusters of a single kind of molecule (HF, water, ammonia and H<sub>2</sub>S), which are compared in <a href=\"#pure-clusters-hydrogen-fluoride-water-ammonia-and-hydrogen-sulfide\">Pure clusters</a>. I also studied mixtures such as HF with water and methanol with water, where different kinds of hydrogen bond compete; these are the topic of <a href=\"#mixed-clusters-when-two-molecules-compete\">Mixed clusters</a>. And because a hydrogen bond can also form inside a single molecule, <a href=\"#intermolecular-and-intramolecular-hydrogen-bonds\">Intermolecular and intramolecular hydrogen bonds</a> explains how that case differs."
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
  },

  {
    date: "2026",
    title: "What the Molecular Tailoring Approach measures",
    tags: ["methods", "MTA", "many-body expansion"],
    summary: "MTA gives the energy of one hydrogen bond inside a cluster. Here is how it works, what cooperativity means in numbers, and how MTA connects exactly to the many-body expansion.",
    sections: [
      {
        heading: "One number is not enough",
        body: [
          "A quantum-chemical calculation on a hydrogen-bonded cluster gives one total energy. Subtract the energies of the separate molecules and you get the total interaction energy: a single number for the whole network. It says how strongly the cluster holds together, but not how much each hydrogen bond contributes, which bonds are strong, or which are weak.",
          "The Molecular Tailoring Approach (MTA) is a fragment-based method that splits this single number into the contributions of the individual bonds. It needs only ordinary energy calculations on the cluster and on a few smaller pieces of it."
        ]
      },
      {
        heading: "Tailoring a cluster",
        body: [
          "Take the ring of two HF and two NH<sub>3</sub> molecules in the figure, and the bond HB1 between the ammonia M1 and the HF molecule M2. Two smaller clusters are made by deleting one partner at a time: F<sub>1</sub> lacks M1, and F<sub>2</sub> lacks M2. Everything that remains keeps exactly the geometry it had in the full cluster. The part F<sub>1</sub> and F<sub>2</sub> have in common, here the M3&middot;&middot;&middot;M4 pair, is the overlap fragment F<sub>12</sub>.",
          "<figure class=\"post-scheme\"><img src=\"assets/img/blog/mta-scheme-f2n2.png\" alt=\"Fragmentation of the (HF)2(NH3)2 ring for the hydrogen bond HB1: the parent cluster M at the bottom, fragment F1 (M1 removed) on the left, fragment F2 (M2 removed) on the right, and their overlap F12, the M3-M4 pair, at the top.\"><figcaption>Fragments used for the bond HB1 in the (HF)<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub> ring. Bottom: the parent cluster M. Left: F<sub>1</sub>, with M1 removed. Right: F<sub>2</sub>, with M2 removed. Top: their overlap F<sub>12</sub>.</figcaption></figure>",
          "HB1 is missing from all three fragments, because M1 and M2 never appear together in any of them, while every other interaction is still present. Adding F<sub>1</sub> and F<sub>2</sub> counts their common part twice, so F<sub>12</sub> is subtracted once. The result is the energy of the cluster without HB1, and its difference from the real cluster is the energy of HB1:",
          EQ("mta", "E_HB(MTA) = [E(F1) + E(F2) - E(F12)] - E(M)"),
          "Only whole molecules are removed, so no covalent bond is broken and nothing has to be capped or re-optimised. A positive value means the bond stabilises the cluster. For HB1 in this ring, at the MP2/aug-cc-pVTZ level, the result is 20.10 kcal/mol."
        ]
      },
      {
        heading: "What cooperativity means in numbers",
        body: [
          "Cooperativity is the part of a bond&rsquo;s strength that comes from the rest of the network. To measure it, the two partners of the bond are cut out of the cluster as a dimer, keeping their in-cluster geometry, and the dimer&rsquo;s interaction energy is calculated. This is the same bond with all its neighbours taken away:",
          EQ("dimer", "E_HB(Dimer) = E(M1) + E(M2) - E(M1...M2)"),
          "For HB1 this gives 15.46 kcal/mol. The difference between the bond in the cluster and the same bond on its own is the cooperativity contribution:",
          EQ("coop", "E_HB(Coop) = E_HB(MTA) - E_HB(Dimer)"),
          "Here it is 20.10 &minus; 15.46 = 4.64 kcal/mol. The surrounding hydrogen bonds make HB1 almost a third stronger than it would be alone. A negative value would mean the neighbours weaken the bond (anti-cooperativity)."
        ]
      },
      {
        heading: "The many-body expansion",
        body: [
          "The many-body expansion (MBE) is the standard way to break down the interaction energy of a cluster of <em>n</em> molecules. The total is written as a sum of two-body terms (one for every pair), three-body terms (one for every group of three), and so on up to the single <em>n</em>-body term:",
          EQ("mbe", "Delta E(1..n) = sum over m = 2..n of all m-body terms"),
          "The two-body terms are the pairwise interactions. Everything from three-body upwards is non-additive: energy that exists only because three or more molecules are present together. Cooperativity lives in these non-additive terms."
        ]
      },
      {
        heading: "Where MTA and MBE meet",
        body: [
          "If each fragment energy in the MTA formula is written out with the MBE, the terms cancel in a simple pattern. Any many-body term whose molecules do not include both <em>i</em> and <em>j</em> cancels exactly. Any term whose molecules include both survives, once. The MTA bond energy is therefore, exactly:",
          EQ("mta-mbe", "E_HB,ij(MTA) = two-body term ij + every 3-, 4-, ..., n-body term containing both i and j"),
          "For a ring of three molecules A, B and C, the bond between A and B is simply its pair term plus the one three-body term:",
          EQ("trimer", "E_HB,AB(MTA) = Delta E(2)AB + Delta E(3)ABC"),
          "For a ring of four, the bond between A and B collects every term that contains both A and B:",
          EQ("tetramer", "E_HB,AB(MTA) = Delta E(2)AB + Delta E(3)ABC + Delta E(3)ABD + Delta E(4)ABCD"),
          "The relation holds for any cluster size."
        ]
      },
      {
        heading: "Cooperativity is not a new term",
        body: [
          "The dimer energy taken at the in-cluster geometry is exactly the two-body term. Subtracting it leaves the cooperativity contribution as the sum of all three-body and higher terms that contain the bonded pair:",
          EQ("coop-mbe", "E_HB,ij(Coop) = E_HB,ij(MTA) - Delta E(2)ij = all 3-body and higher terms containing i and j"),
          "So MTA does not invent a new kind of energy. It collects the part of the network&rsquo;s non-additive energy that touches that particular bond. This also shows what the number is not. A three-body term for A, B and C appears in the cooperativity of bond AB, of bond BC and of bond CA. Once several bonds share molecules, there is no exact, non-overlapping way to divide the total non-additive energy between them. The MTA cooperativity is each bond&rsquo;s view of the network, not its private share."
        ]
      },
      {
        heading: "Why the bond energies do not add up exactly",
        body: [
          "The same algebra explains why the sum of all MTA bond energies is slightly different from the total interaction energy. Two things happen. The pair terms of molecules that are not hydrogen-bonded to each other, such as the diagonals of a four- or five-membered ring, never enter any bond energy. And each three-body or higher term is counted once for every bond that contains it, where the total counts it only once.",
          "In practice the difference is small, and it shrinks as clusters grow. In the HF&ndash;ammonia rings, the mismatch is about 1.5 kcal/mol per bond for a ring of three molecules, 0.7 kcal/mol for four and 0.3 kcal/mol for five. Correcting for basis-set superposition error or zero-point energy, or repeating the calculation at the CCSD(T) level, changes individual bond energies by about 1 kcal/mol or less, and does not change which bonds are strong and which are weak."
        ]
      }
    ],
    refs: [
      "Gadre, S. R.; Yeole, S. D.; Sahu, N. Quantum chemical investigations on molecular clusters. <em>Chem. Rev.</em> 2014, 114, 12132&ndash;12173.",
      "Ahirwar, M. B.; Gadre, S. R.; Deshmukh, M. M. Direct and reliable method for estimating the hydrogen bond energies and cooperativity in water clusters, W<sub>n</sub>, n = 3 to 8. <em>J. Phys. Chem. A</em> 2020, 124, 6699&ndash;6706.",
      "Patkar, D. From weak to functional: network cooperativity effects in cyclic neutral (HF)<sub>m</sub>(NH<sub>3</sub>)<sub>n</sub> hydrogen-bonded clusters. <em>Phys. Chem. Chem. Phys.</em> 2026, 28, 25990&ndash;26000, including its Supporting Information."
    ]
  },

  {
    date: "2026",
    title: "Intermolecular and intramolecular hydrogen bonds",
    tags: ["MTA", "intramolecular"],
    summary: "A hydrogen bond can join two molecules or close a ring inside one. The chemistry is the same, but measuring the two needs different tools.",
    sections: [
      {
        heading: "Two kinds of hydrogen bond",
        body: [
          "An <strong>intermolecular</strong> hydrogen bond joins two separate molecules. The bond that holds two water molecules together is one, and so are the bonds that link HF and NH<sub>3</sub> molecules into the rings I study.",
          "An <strong>intramolecular</strong> hydrogen bond forms inside a single molecule, when a donor and an acceptor of the same molecule come close enough to close a ring. A familiar example is salicylic acid, where the O&ndash;H group reaches over to the neighbouring C=O group. When such a ring is part of a conjugated system of double bonds, as in the enol form of &beta;-diketones, the bond is especially strong and is called a resonance-assisted hydrogen bond.",
          "Both kinds follow the same definition and leave the same fingerprints: a short H&middot;&middot;&middot;acceptor distance, a shift of the X&ndash;H stretching vibration to lower frequency, and a bond path in the electron density. The difference is in what can be pulled apart."
        ]
      },
      {
        heading: "Why intramolecular bonds are harder to measure",
        body: [
          "An intermolecular bond can be broken, at least on paper, simply by moving the two molecules apart. An intramolecular bond cannot: the donor and the acceptor are tied together by the molecule&rsquo;s own covalent bonds.",
          "A common workaround compares two shapes of the molecule: a &ldquo;closed&rdquo; one with the hydrogen bond, and an &ldquo;open&rdquo; one in which a group has been rotated away. But rotating a group also changes other interactions and the strain in the molecule, so the energy difference is not the hydrogen bond alone. There is also no simple &ldquo;dimer&rdquo; to compare against, so the usual way of separating a bond&rsquo;s own strength from its cooperativity does not work directly either."
        ]
      },
      {
        heading: "In a cluster: remove whole molecules",
        body: [
          "For intermolecular bonds, MTA removes complete molecules: first one partner of the bond, then the other, then both. The pieces left behind are ordinary smaller clusters, so no covalent bond is broken and nothing has to be repaired. The pair of molecules cut out on its own gives the reference for cooperativity. The previous post, <a href=\"#what-the-molecular-tailoring-approach-measures\">What the Molecular Tailoring Approach measures</a>, goes through this step by step."
        ]
      },
      {
        heading: "Inside a molecule: remove groups",
        body: [
          "For an intramolecular bond, MTA removes chemical groups instead of molecules: the donor group (for example the O&ndash;H) and the acceptor group (for example the C=O, or a whole &ndash;CHO). Taking out a group does break covalent bonds, so each cut is closed with a hydrogen atom placed along the original bond direction. Nothing else in the molecule is moved.",
          "The energies of the molecule without the donor group, without the acceptor group, and without both are then combined with the energy of the intact molecule, in the same way as for clusters, to give the strength of that one hydrogen bond.",
          "Cooperativity is found in a different way. If the bond is part of a chain of intramolecular hydrogen bonds, its energy is calculated twice: once in the full molecule, and once in a version where the groups forming the neighbouring hydrogen bonds have been removed. The difference between the two is how much the neighbours strengthen (or weaken) the bond."
        ]
      },
      {
        heading: "Why the difference matters",
        body: [
          "Many molecules of real interest, including sugars, drug molecules and natural products, hold their shape through intramolecular hydrogen bonds. Being able to measure each one separately shows which bonds really hold a molecule in its shape and which only look important.",
          "I have written two small programs that automate these calculations with Gaussian: <a href=\"software.html\">iHBEQuant</a> for hydrogen bonds between molecules in clusters, and <a href=\"software.html\">IntraHB</a> for hydrogen bonds inside a molecule. Both are open on GitHub."
        ]
      }
    ],
    refs: [
      "Deshmukh, M. M.; Bartolotti, L. J.; Gadre, S. R. Intramolecular hydrogen bonding and cooperative interactions in carbohydrates via the molecular tailoring approach. <em>J. Phys. Chem. A</em> 2008, 112, 312&ndash;321.",
      "Gilli, G.; Bellucci, F.; Ferretti, V.; Bertolasi, V. Evidence for resonance-assisted hydrogen bonding from crystal-structure correlations on the enol form of the &beta;-diketone fragment. <em>J. Am. Chem. Soc.</em> 1989, 111, 1023&ndash;1028.",
      "Arunan, E. et al. Definition of the hydrogen bond (IUPAC Recommendations 2011). <em>Pure Appl. Chem.</em> 2011, 83, 1637&ndash;1641."
    ]
  },

  {
    date: "2026",
    title: "Pure clusters: hydrogen fluoride, water, ammonia and hydrogen sulfide",
    tags: ["molecular clusters", "cooperativity"],
    summary: "Four small molecules, four very different hydrogen-bond networks. Measuring each bond separately shows where the differences come from.",
    sections: [
      {
        heading: "Four simple molecules",
        body: [
          "HF, H<sub>2</sub>O, NH<sub>3</sub> and H<sub>2</sub>S are the simplest hydrides that form hydrogen-bonded clusters, and they differ in useful ways. HF has one hydrogen to give and three lone pairs to accept with; water has two of each; ammonia has three hydrogens but only one lone pair; H<sub>2</sub>S looks like water but has the larger, less electronegative sulfur atom.",
          "For each cluster below, two numbers matter: the strength of a bond inside the cluster, and its <strong>cooperativity</strong>, the part of that strength which comes from the other hydrogen bonds around it (the in-cluster strength minus the strength of the same two molecules on their own). All results are MTA energies at the MP2 level with the aug-cc-pVTZ basis set, for clusters of three to eight molecules."
        ]
      },
      {
        heading: "Hydrogen fluoride",
        body: [
          "In linear (HF)<sub>n</sub> chains, each F&ndash;H&middot;&middot;&middot;F bond is worth 6.2 to 9.5 kcal/mol; in rings, 7.9 to 11.4 kcal/mol. Yet the same pairs cut out as dimers lie in a narrow range of only 4.4 to 5.2 kcal/mol. The cooperativity contribution is 1.0 to 4.8 kcal/mol in chains and 3.2 to 6.9 kcal/mol in rings; for n &ge; 5 it makes up 50 to 62% of each bond. The strength of HF clusters is mostly cooperativity."
        ]
      },
      {
        heading: "Water",
        body: [
          "Water clusters were the first test of the method in our group. The O&ndash;H&middot;&middot;&middot;O bonds range from 0.3 to 11.6 kcal/mol, a far wider spread than in HF, partly because water forms three-dimensional cages and prisms in which some bonds are strained and weak while others are strong. Cooperativity spans &minus;1.2 to 7.0 kcal/mol, so some bonds are weakened by their neighbours (anti-cooperativity) while others are strongly reinforced."
        ]
      },
      {
        heading: "Ammonia",
        body: [
          "Ammonia forms much weaker networks. The N&ndash;H&middot;&middot;&middot;N bonds lie between 0.65 and 5.54 kcal/mol, with cooperativity contributions of at most about 1.9 kcal/mol. With only one lone pair per molecule, each nitrogen can accept just one hydrogen bond, and the cooperative reinforcement is much weaker than in water or HF."
        ]
      },
      {
        heading: "Hydrogen sulfide",
        body: [
          "H<sub>2</sub>S is the weakest of the four. The S&ndash;H&middot;&middot;&middot;S bonds in (H<sub>2</sub>S)<sub>n</sub> are about 2 to 4 kcal/mol, and as dimers 1.7 to 3.0 kcal/mol. Cooperativity is almost absent: &minus;0.1 to 0.9 kcal/mol per bond, compared with up to about 7 kcal/mol for O&ndash;H&middot;&middot;&middot;O in water. This weak cooperativity is one likely reason why the hydrogen bonds in H<sub>2</sub>S clusters stay so much weaker than those in water."
        ]
      },
      {
        heading: "What the comparison shows",
        body: [
          "<table class=\"data\"><caption>Energies in kcal/mol, clusters of 3 to 8 molecules.</caption><thead><tr><th>Cluster</th><th>Bond</th><th>In-cluster energy</th><th>Cooperativity</th></tr></thead><tbody><tr><td>(HF)<sub>n</sub></td><td>F&ndash;H&middot;&middot;&middot;F</td><td>7.9 &ndash; 11.4</td><td>3.2 &ndash; 6.9</td></tr><tr><td>(H<sub>2</sub>O)<sub>n</sub></td><td>O&ndash;H&middot;&middot;&middot;O</td><td>0.3 &ndash; 11.6</td><td>&minus;1.2 &ndash; 7.0</td></tr><tr><td>(NH<sub>3</sub>)<sub>n</sub></td><td>N&ndash;H&middot;&middot;&middot;N</td><td>0.65 &ndash; 5.54</td><td>up to ~1.9</td></tr><tr><td>(H<sub>2</sub>S)<sub>n</sub></td><td>S&ndash;H&middot;&middot;&middot;S</td><td>~2 &ndash; 4</td><td>&minus;0.1 &ndash; 0.9</td></tr></tbody></table>",
          "The dimer energies differ much less than the in-cluster energies do. What separates a strong network from a weak one is mainly how much each bond is reinforced by the others. HF and water have strong donors and strong cooperativity; ammonia and H<sub>2</sub>S have little of either. What happens when two of these molecules are mixed is the topic of the next post, <a href=\"#mixed-clusters-when-two-molecules-compete\">Mixed clusters</a>."
        ]
      }
    ],
    refs: [
      "Patkar, D.; Ahirwar, M. B.; Gadre, S. R.; Deshmukh, M. M. <em>J. Phys. Chem. A</em> 2021, 125, 8836&ndash;8845. (HF)",
      "Ahirwar, M. B.; Gadre, S. R.; Deshmukh, M. M. <em>J. Phys. Chem. A</em> 2020, 124, 6699&ndash;6706. (water)",
      "Ahirwar, M. B.; Patkar, D.; Yadav, I.; Deshmukh, M. M. <em>Phys. Chem. Chem. Phys.</em> 2021, 23, 17224&ndash;17231. (ammonia)",
      "Patkar, D. <em>ChemRxiv</em> 2025, doi:10.26434/chemrxiv-2025-gwdd6. (H<sub>2</sub>S; preprint, not yet peer reviewed)"
    ]
  },

  {
    date: "2026",
    title: "Mixed clusters: when two molecules compete",
    tags: ["molecular clusters", "cooperativity", "mixtures"],
    summary: "In a cluster of two different molecules, each one can bond to its own kind or to the other. Which hydrogen bonds win, and why?",
    sections: [
      {
        heading: "Self- and cross-association",
        body: [
          "Write any hydrogen bond as X&ndash;H&middot;&middot;&middot;Y, where X&ndash;H is the donor and Y the acceptor atom. In a cluster made of two kinds of molecule, X and Y can belong to the same kind of molecule (self-association) or to different kinds (cross-association). A cluster of HF and water, for example, can contain four types of bond: F&ndash;H&middot;&middot;&middot;F, F&ndash;H&middot;&middot;&middot;O, O&ndash;H&middot;&middot;&middot;O and O&ndash;H&middot;&middot;&middot;F.",
          "Spectroscopy can show that these bonds are present, but not how strong each one is. MTA gives the energy of every bond separately, so the types can be ranked directly. As in pure clusters, each bond&rsquo;s <strong>cooperativity</strong> is the extra strength it gets from the surrounding hydrogen bonds, compared with the same two molecules on their own. All results below are MP2/aug-cc-pVTZ."
        ]
      },
      {
        heading: "HF and water",
        body: [
          "In (HF)<sub>m</sub>(H<sub>2</sub>O)<sub>n</sub> rings, the bonds with HF as donor are by far the strongest: F&ndash;H&middot;&middot;&middot;O at 8.3 to 21.6 kcal/mol and F&ndash;H&middot;&middot;&middot;F at 7.1 to 14.7 kcal/mol. When water donates, the bonds are moderate: O&ndash;H&middot;&middot;&middot;O at 3.3 to 11.2 and O&ndash;H&middot;&middot;&middot;F, the weakest, at 1.9 to 10.0 kcal/mol. Cooperativity supplies 10 to 61% of the F&ndash;H&middot;&middot;&middot;O energies and 35 to 74% of the F&ndash;H&middot;&middot;&middot;F energies."
        ]
      },
      {
        heading: "Methanol and water",
        body: [
          "In methanol&ndash;water clusters the strongest bond is methanol donating to water (6.9 to 12.4 kcal/mol), then methanol to methanol (6.5 to 11.6), with water&ndash;water (0.2 to 10.9) and water-to-methanol (0.3 to 10.3) the weakest. This in-cluster order differs from the order of the isolated dimers. The reason is that cooperative and anti-cooperative contributions, ranging from about &minus;1.2 to 8.6 kcal/mol, reshuffle the ranking. Without them, the energetic order of these bonds would come out wrong."
        ]
      },
      {
        heading: "Ammonia and water",
        body: [
          "In (NH<sub>3</sub>)<sub>m</sub>(H<sub>2</sub>O)<sub>n</sub> clusters, water donating to ammonia (O&ndash;H&middot;&middot;&middot;N, up to 12.49 kcal/mol) beats water donating to water (O&ndash;H&middot;&middot;&middot;O, 3.97 to 9.30). The bonds in which ammonia donates (N&ndash;H&middot;&middot;&middot;N and N&ndash;H&middot;&middot;&middot;O) are the weakest, at most about 5.6 kcal/mol. The O&ndash;H of water is the better donor, and the O&ndash;H&middot;&middot;&middot;N bond wins for two reasons: it is intrinsically stronger as a dimer, and it gains more from cooperativity."
        ]
      },
      {
        heading: "Water and hydrogen sulfide",
        body: [
          "With water and H<sub>2</sub>S the order is O&ndash;H&middot;&middot;&middot;O (up to 11.06 kcal/mol) &gt; O&ndash;H&middot;&middot;&middot;S (1.36 to 6.89) &gt; S&ndash;H&middot;&middot;&middot;O (1.08 to 6.39) &gt; S&ndash;H&middot;&middot;&middot;S (1.35 to 4.23). The dimers follow the same order with smaller values; cooperativity adds up to about 6 kcal/mol. S&ndash;H&middot;&middot;&middot;S bonds in the mixed clusters come out a little stronger than in pure H<sub>2</sub>S, because they sit next to stronger O&ndash;H bonds."
        ]
      },
      {
        heading: "HF and ammonia",
        body: [
          "Across 66 bonds in twelve (HF)<sub>m</sub>(NH<sub>3</sub>)<sub>n</sub> rings, the hierarchy is unambiguous: F&ndash;H&middot;&middot;&middot;N (mean 22.7 kcal/mol) &gt; F&ndash;H&middot;&middot;&middot;F (12.1) &gt; N&ndash;H&middot;&middot;&middot;F &asymp; N&ndash;H&middot;&middot;&middot;N (both 4.7). Strength and cooperative enhancement are inverted, though: cooperativity is 27.5% of the F&ndash;H&middot;&middot;&middot;N energy but 68% for N&ndash;H&middot;&middot;&middot;F. Twelve bonds are weak as dimers (below 4 kcal/mol) yet exceed 6 kcal/mol in the cluster, which I call the cooperativity-amplified bond effect. The electron density at the bond critical point tracks the MTA energy closely (R<sup>2</sup> = 0.97)."
        ]
      },
      {
        heading: "HF and hydrogen sulfide",
        body: [
          "In 126 bonds across twenty (HF)<sub>m</sub>(H<sub>2</sub>S)<sub>n</sub> clusters, the mean energies are F&ndash;H&middot;&middot;&middot;F 9.03, F&ndash;H&middot;&middot;&middot;S 8.47, S&ndash;H&middot;&middot;&middot;F 2.57 and S&ndash;H&middot;&middot;&middot;S 2.45 kcal/mol. The cooperative part averages 2.11 kcal/mol per bond and is positive for nearly all of them. It depends more on HF content than on cluster size. This work is a preprint and has not yet been peer reviewed."
        ]
      },
      {
        heading: "Common threads",
        body: [
          "<table class=\"data\"><thead><tr><th>Mixture</th><th>Strongest bond</th><th>Weakest bond</th></tr></thead><tbody><tr><td>HF / H<sub>2</sub>O</td><td>F&ndash;H&middot;&middot;&middot;O</td><td>O&ndash;H&middot;&middot;&middot;F</td></tr><tr><td>CH<sub>3</sub>OH / H<sub>2</sub>O</td><td>O<sub>M</sub>&ndash;H&middot;&middot;&middot;O<sub>W</sub></td><td>O<sub>W</sub>&ndash;H&middot;&middot;&middot;O<sub>W</sub>, O<sub>W</sub>&ndash;H&middot;&middot;&middot;O<sub>M</sub></td></tr><tr><td>NH<sub>3</sub> / H<sub>2</sub>O</td><td>O&ndash;H&middot;&middot;&middot;N</td><td>N&ndash;H&middot;&middot;&middot;N, N&ndash;H&middot;&middot;&middot;O</td></tr><tr><td>H<sub>2</sub>O / H<sub>2</sub>S</td><td>O&ndash;H&middot;&middot;&middot;O</td><td>S&ndash;H&middot;&middot;&middot;S</td></tr><tr><td>HF / NH<sub>3</sub></td><td>F&ndash;H&middot;&middot;&middot;N</td><td>N&ndash;H&middot;&middot;&middot;F, N&ndash;H&middot;&middot;&middot;N</td></tr><tr><td>HF / H<sub>2</sub>S</td><td>F&ndash;H&middot;&middot;&middot;F</td><td>S&ndash;H&middot;&middot;&middot;S</td></tr></tbody><caption>O<sub>M</sub>: methanol oxygen; O<sub>W</sub>: water oxygen.</caption></table>",
          "Three lessons repeat across all six mixtures. The donor matters most: the strongest bonds always have the better donor (HF, then O&ndash;H) giving its hydrogen. Cooperativity can change the ranking, as in methanol&ndash;water, so dimer energies alone can mislead. And the largest <em>relative</em> gains often go to weak bonds sitting next to strong ones."
        ]
      }
    ],
    refs: [
      "Patkar, D.; Ahirwar, M. B.; Shrivastava, S. P.; Deshmukh, M. M. <em>New J. Chem.</em> 2022, 46, 2368&ndash;2379. (HF&ndash;water)",
      "Patkar, D.; Ahirwar, M. B.; Deshmukh, M. M. <em>ChemPhysChem</em> 2022, 23, e202200143. (methanol&ndash;water)",
      "Patkar, D.; Ahirwar, M. B.; Deshmukh, M. M. <em>ChemPhysChem</em> 2022, 23, e202200476. (ammonia&ndash;water)",
      "Patkar, D. <em>ChemRxiv</em> 2025, doi:10.26434/chemrxiv-2025-gwdd6. (water&ndash;H<sub>2</sub>S; preprint)",
      "Patkar, D. <em>Phys. Chem. Chem. Phys.</em> 2026, 28, 25990&ndash;26000. (HF&ndash;ammonia)",
      "Patkar, D. <em>ChemRxiv</em> 2026, doi:10.26434/chemrxiv.15010862/v1. (HF&ndash;H<sub>2</sub>S; preprint)"
    ]
  }
];
