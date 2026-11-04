/* ==========================================================================
   BLOG  -  shown when features.blog is true (config.js).
   Posts appear in the order listed here (a reading series, first post on top).
   Each post has sections; their headings build the contents list on the
   right of the Blog page automatically. A body line that starts with <p ...>
   or <table> is used as-is (for equations and tables).
   ========================================================================== */

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
          "The Molecular Tailoring Approach (MTA) offers a direct answer. Take the hydrogen bond between two molecules <em>i</em> and <em>j</em> of a cluster M. Three smaller pieces are cut from the cluster, each kept at exactly the geometry it has in the cluster: F<sub>1</sub>, the cluster without molecule <em>i</em>; F<sub>2</sub>, the cluster without molecule <em>j</em>; and F<sub>12</sub>, the part the two have in common, which is the cluster without both. Because whole molecules are removed, no covalent bond is broken, nothing needs capping, and nothing is re-optimised.",
          "The <em>i</em>&middot;&middot;&middot;<em>j</em> hydrogen bond is missing from all three pieces, while every other interaction is still accounted for. So the combination E(F<sub>1</sub>) + E(F<sub>2</sub>) &minus; E(F<sub>12</sub>) rebuilds the energy of the cluster <em>without</em> that one bond, and subtracting the true energy of the cluster leaves the bond itself:",
          "<p class=\"eq\">E<sub>HB</sub> = [E(F<sub>1</sub>) + E(F<sub>2</sub>) &minus; E(F<sub>12</sub>)] &minus; E(M)</p>",
          "Cutting the same pair out of the cluster as a dimer, again at its in-cluster geometry, gives the bond with no help from its neighbours. The difference between the two is the cooperativity contribution.",
          "During my PhD I used this approach to rank individual hydrogen bonds in clusters of HF, water, ammonia, methanol and H<sub>2</sub>S, and their mixtures. In cyclic (HF)<sub>n</sub> clusters, for example, a single F&ndash;H&middot;&middot;&middot;F bond is worth 7.9 to 11.4 kcal/mol, although the same pair cut out as a dimer gives only 4.4 to 5.2 kcal/mol; for n &ge; 5, cooperativity supplies 50 to 62% of each bond&rsquo;s energy. The details are in the papers on my <a href=\"publications.html\">publications</a> page, and the next posts in this series look at the method and the clusters more closely."
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
    summary: "MTA gives the energy of one hydrogen bond inside a cluster. Here is how it works, and how that number relates exactly to the many-body expansion.",
    sections: [
      {
        heading: "One number is not enough",
        body: [
          "A quantum-chemical calculation on a hydrogen-bonded cluster gives one total energy. Subtract the energies of the separate molecules and you get the total interaction energy: a single number for the whole network. It says how strongly the cluster holds together, but not how much each hydrogen bond contributes, which bonds are strong, or which are weak.",
          "The Molecular Tailoring Approach (MTA) was developed in the group of S. R. Gadre as a fragment-based method. M. M. Deshmukh and co-workers later turned it into a direct way of estimating individual hydrogen-bond energies, first for intramolecular bonds and then for molecular clusters."
        ]
      },
      {
        heading: "Tailoring a cluster",
        body: [
          "For a bond between molecules <em>i</em> and <em>j</em>, three fragments are made from the parent cluster M by deleting whole molecules, keeping everything else at its in-cluster geometry. F<sub>1</sub> lacks molecule <em>i</em>, F<sub>2</sub> lacks molecule <em>j</em>, and the overlap fragment F<sub>12</sub> lacks both:",
          "<p class=\"eq\">E<sub>HB</sub><sup>MTA</sup> = [E(F<sub>1</sub>) + E(F<sub>2</sub>) &minus; E(F<sub>12</sub>)] &minus; E(M)</p>",
          "Adding F<sub>1</sub> and F<sub>2</sub> counts their common part twice, so F<sub>12</sub> is subtracted once. The result is the cluster energy without the <em>i</em>&middot;&middot;&middot;<em>j</em> bond, since that bond exists in none of the fragments. Its difference from the true E(M) is the bond energy. Throughout, a positive number means stabilisation.",
          "Cutting the <em>i</em>&ndash;<em>j</em> pair out as a dimer, at the same geometry and without re-optimising, gives E<sub>HB</sub><sup>Dimer</sup> = E(<em>i</em>) + E(<em>j</em>) &minus; E(<em>ij</em>): the bond with no neighbours. The cooperativity contribution is the difference, E<sub>HB</sub><sup>Coop</sup> = E<sub>HB</sub><sup>MTA</sup> &minus; E<sub>HB</sub><sup>Dimer</sup>.",
          "A worked example from my work on cyclic (HF)<sub>m</sub>(NH<sub>3</sub>)<sub>n</sub> clusters at the MP2/aug-cc-pVTZ level: in the (HF)<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub> ring, one F&ndash;H&middot;&middot;&middot;N bond is worth 20.10 kcal/mol in the cluster. The same pair as a dimer gives 15.46 kcal/mol, so 4.64 kcal/mol comes from the rest of the network."
        ]
      },
      {
        heading: "The many-body expansion",
        body: [
          "The many-body expansion (MBE) is the standard way to break down the interaction energy of a cluster of <em>n</em> molecules. The total is written as a sum of two-body terms (one for every pair), three-body terms (one for every triplet), and so on up to the single <em>n</em>-body term. The two-body terms are the pairwise interactions; everything from three-body upwards is non-additive, the part that exists only because three or more molecules are present together.",
          "<p class=\"eq\">&Delta;E<sub>1&hellip;n</sub> = &Sigma; &Delta;E<sup>(2)</sup> + &Sigma; &Delta;E<sup>(3)</sup> + &hellip; + &Delta;E<sup>(n)</sup></p>"
        ]
      },
      {
        heading: "Where MTA and MBE meet",
        body: [
          "If every fragment energy in the MTA formula is expanded with the MBE, the terms cancel in a simple pattern. Any many-body term whose set of molecules does not contain both <em>i</em> and <em>j</em> cancels exactly. Any term whose set contains both survives, once. So the MTA bond energy is, exactly:",
          "<p class=\"eq\">E<sub>HB,<em>ij</em></sub><sup>MTA</sup> = &Delta;E<sup>(2)</sup><sub><em>ij</em></sub> + (every 3-, 4-, &hellip;, <em>n</em>-body term that contains both <em>i</em> and <em>j</em>)</p>",
          "For a cyclic trimer A&ndash;B&ndash;C this is just E<sub>HB</sub>(AB) = &Delta;E<sup>(2)</sup><sub>AB</sub> + &Delta;E<sup>(3)</sup><sub>ABC</sub>. For a cyclic tetramer A&ndash;B&ndash;C&ndash;D it becomes &Delta;E<sup>(2)</sup><sub>AB</sub> + &Delta;E<sup>(3)</sup><sub>ABC</sub> + &Delta;E<sup>(3)</sup><sub>ABD</sub> + &Delta;E<sup>(4)</sup><sub>ABCD</sub>. The relation holds for any cluster size."
        ]
      },
      {
        heading: "Cooperativity is not a new term",
        body: [
          "Since the dimer energy at the in-cluster geometry is the two-body term, the cooperativity contribution is the sum of all three-body and higher terms whose molecules include the bonded pair. MTA does not invent a new energy; it collects the non-additive part of the network that touches that particular bond.",
          "This also shows what the number is <em>not</em>. A three-body term involving A, B and C appears in the cooperativity of bond AB, of bond BC and of bond CA. As soon as several bonds share molecules, there is no exact, non-overlapping way to split the total non-additive energy among them. The MTA cooperativity is each bond&rsquo;s view of the network, not its private share."
        ]
      },
      {
        heading: "Why the bond energies do not add up exactly",
        body: [
          "The same algebra explains why the sum of all MTA bond energies differs slightly from the total interaction energy. Two things happen: the pairwise terms of molecules that are not hydrogen-bonded to each other (the diagonals of a four- or five-membered ring) never enter any bond energy, and each many-body term is counted once for every bond that &ldquo;sees&rdquo; it.",
          "In practice the difference is small and shrinks with size. Dividing it by the number of bonds gives a per-bond error:",
          "<table class=\"data\"><caption>Energies in kcal/mol, MP2/aug-cc-pVTZ.</caption><thead><tr><th>Cluster</th><th>Total interaction</th><th>Sum of MTA bond energies</th><th>Error per bond</th></tr></thead><tbody><tr><td>(HF)(NH<sub>3</sub>)<sub>2</sub></td><td>22.22</td><td>26.60</td><td>1.46</td></tr><tr><td>(HF)(NH<sub>3</sub>)<sub>3</sub></td><td>31.64</td><td>34.45</td><td>0.70</td></tr><tr><td>(HF)(NH<sub>3</sub>)<sub>4</sub></td><td>37.32</td><td>38.98</td><td>0.33</td></tr></tbody></table>"
        ]
      },
      {
        heading: "How robust are the numbers?",
        body: [
          "For fifteen bonds in these HF&ndash;NH<sub>3</sub> clusters, correcting for basis-set superposition error changed the MTA energies by at most 0.84 kcal/mol, adding zero-point energy by at most 1.08 kcal/mol, and recomputing at the CCSD(T)/aug-cc-pVTZ level by at most 0.36 kcal/mol. The ordering of strong and weak bonds did not change. In water clusters, adding all the bond energies back to the monomer energies reproduces the cluster energy to within about 5 kcal/mol."
        ]
      }
    ],
    refs: [
      "Deshmukh, M. M.; Bartolotti, L. J.; Gadre, S. R. Intramolecular hydrogen bonding and cooperative interactions in carbohydrates via the molecular tailoring approach. <em>J. Phys. Chem. A</em> 2008, 112, 312&ndash;321.",
      "Gadre, S. R.; Yeole, S. D.; Sahu, N. Quantum chemical investigations on molecular clusters. <em>Chem. Rev.</em> 2014, 114, 12132&ndash;12173.",
      "Ahirwar, M. B.; Gadre, S. R.; Deshmukh, M. M. Direct and reliable method for estimating the hydrogen bond energies and cooperativity in water clusters, W<sub>n</sub>, n = 3 to 8. <em>J. Phys. Chem. A</em> 2020, 124, 6699&ndash;6706.",
      "Patkar, D. From weak to functional: network cooperativity effects in cyclic neutral (HF)<sub>m</sub>(NH<sub>3</sub>)<sub>n</sub> hydrogen-bonded clusters. <em>Phys. Chem. Chem. Phys.</em> 2026, 28, 25990&ndash;26000, including its Supporting Information."
    ]
  },
  {
    date: "2026",
    title: "Intermolecular and intramolecular hydrogen bonds",
    tags: ["methods", "MTA", "intramolecular"],
    summary: "A hydrogen bond can join two molecules or close a ring inside one. The chemistry is the same, but measuring the two needs different tools.",
    sections: [
      {
        heading: "Two kinds of hydrogen bond",
        body: [
          "An <strong>intermolecular</strong> hydrogen bond joins two separate molecules: the bonds that hold a water dimer together, or the rings of HF and NH<sub>3</sub> molecules in the clusters I study. An <strong>intramolecular</strong> hydrogen bond forms inside a single molecule, when a donor and an acceptor in the same molecule close a ring. Familiar examples are the O&ndash;H&middot;&middot;&middot;O=C bond in the enol form of &beta;-diketones and in salicylic acid. When such a ring is part of a conjugated &pi;-system, the bond is often called resonance-assisted (RAHB).",
          "Both follow the same definition and leave the same fingerprints: a short H&middot;&middot;&middot;A distance, a red-shifted X&ndash;H stretch, and a bond critical point in the electron density. The difference lies in what can be pulled apart."
        ]
      },
      {
        heading: "Why intramolecular bonds are harder to measure",
        body: [
          "An intermolecular bond can be broken, at least on paper, by moving the two molecules apart. An intramolecular bond cannot: the donor and acceptor are tied together by covalent bonds. A common workaround compares a &ldquo;closed&rdquo; conformer, with the hydrogen bond, against an &ldquo;open&rdquo; one in which a group has been rotated. Rotating a group changes other interactions and the molecule&rsquo;s strain too, so the difference is not the hydrogen bond alone.",
          "There is also no natural &ldquo;dimer&rdquo; to compare against, so the usual way of separating a bond&rsquo;s own strength from its cooperativity does not carry over."
        ]
      },
      {
        heading: "MTA for clusters: remove whole molecules",
        body: [
          "For intermolecular bonds, MTA removes complete molecules. The fragments F<sub>1</sub> (without the donor molecule), F<sub>2</sub> (without the acceptor molecule) and F<sub>12</sub> (without both) are ordinary smaller clusters. No covalent bond is broken and no capping is needed. The bond energy is [E(F<sub>1</sub>) + E(F<sub>2</sub>) &minus; E(F<sub>12</sub>)] &minus; E(M), and the dimer cut from the cluster gives the reference for cooperativity."
        ]
      },
      {
        heading: "MTA inside a molecule: remove groups and cap",
        body: [
          "For an intramolecular bond D&ndash;H&middot;&middot;&middot;A, the method of Deshmukh, Bartolotti and Gadre removes chemical groups instead of molecules. The donor group F<sub>d</sub> (for example the O&ndash;H) and the acceptor group F<sub>a</sub> (for example the C=O, or a whole &ndash;CHO) are cut out. This time covalent bonds are broken, so each open valence is capped with a hydrogen atom placed along the original bond. As before, nothing is re-optimised:",
          "<p class=\"eq\">E<sub>HB</sub> = E(M&minus;F<sub>d</sub>) + E(M&minus;F<sub>a</sub>) &minus; E(M&minus;F<sub>d</sub>&minus;F<sub>a</sub>) &minus; E(M)</p>",
          "Cooperativity is found differently. When the bond belongs to a network of intramolecular hydrogen bonds, the same expression is evaluated in M&prime;, the molecule with the groups of the neighbouring bonds removed. The difference E<sub>HB</sub>(M) &minus; E<sub>HB</sub>(M&prime;) is the cooperative contribution of those neighbours."
        ]
      },
      {
        heading: "An example",
        body: [
          "In a test calculation with my IntraHB program on a C<sub>4</sub>H<sub>4</sub>O<sub>4</sub> molecule with two resonance-assisted O&ndash;H&middot;&middot;&middot;O bonds, at the MP2/aug-cc-pVTZ level, the two bonds came out quite different:",
          "<table class=\"data\"><caption>Energies in kcal/mol.</caption><thead><tr><th>Bond</th><th>E<sub>HB</sub> in M</th><th>E<sub>HB</sub> in M&prime;</th><th>Cooperativity</th></tr></thead><tbody><tr><td>HB1</td><td>9.42</td><td>6.56</td><td>2.86</td></tr><tr><td>HB2</td><td>17.61</td><td>15.30</td><td>2.31</td></tr></tbody></table>",
          "Both bonds are strengthened by their neighbour by a similar amount, but one is intrinsically almost three times stronger than the other. That is exactly the kind of difference a single conformer comparison would hide."
        ]
      },
      {
        heading: "Tools",
        body: [
          "I have written two small programs that automate these steps with Gaussian: <a href=\"software.html\">iHBEQuant</a> for intermolecular bonds in clusters, and <a href=\"software.html\">IntraHB</a> for intramolecular bonds. Both are open on GitHub."
        ]
      }
    ],
    refs: [
      "Deshmukh, M. M.; Bartolotti, L. J.; Gadre, S. R. Intramolecular hydrogen bonding and cooperative interactions in carbohydrates via the molecular tailoring approach. <em>J. Phys. Chem. A</em> 2008, 112, 312&ndash;321.",
      "Gilli, G.; Bellucci, F.; Ferretti, V.; Bertolasi, V. Evidence for resonance-assisted hydrogen bonding from crystal-structure correlations on the enol form of the &beta;-diketone fragment. <em>J. Am. Chem. Soc.</em> 1989, 111, 1023&ndash;1028.",
      "Arunan, E. et al. Definition of the hydrogen bond (IUPAC Recommendations 2011). <em>Pure Appl. Chem.</em> 2011, 83, 1637&ndash;1641.",
      "Ahirwar, M. B.; Gadre, S. R.; Deshmukh, M. M. <em>J. Phys. Chem. A</em> 2020, 124, 6699&ndash;6706."
    ]
  },
  {
    date: "2026",
    title: "Pure clusters: HF, water, ammonia and H<sub>2</sub>S",
    tags: ["molecular clusters", "cooperativity"],
    summary: "Four small molecules, four very different hydrogen-bond networks. Measuring each bond separately shows where the differences come from.",
    sections: [
      {
        heading: "Four simple molecules",
        body: [
          "HF, H<sub>2</sub>O, NH<sub>3</sub> and H<sub>2</sub>S are the simplest hydrides that form hydrogen-bonded clusters, and they differ in useful ways. HF has one hydrogen to give and three lone pairs to accept with; water has two of each; ammonia has three hydrogens but only one lone pair; H<sub>2</sub>S looks like water but has the larger, less electronegative sulfur atom. All results below are from the MTA at the MP2 level with the aug-cc-pVTZ basis set, for clusters of three to eight molecules."
        ]
      },
      {
        heading: "Hydrogen fluoride",
        body: [
          "In linear (HF)<sub>n</sub> chains, each F&ndash;H&middot;&middot;&middot;F bond is worth 6.2 to 9.5 kcal/mol; in cyclic clusters, 7.9 to 11.4 kcal/mol. Yet the same pairs cut out as dimers lie in a narrow range of only 4.4 to 5.2 kcal/mol. The cooperativity contribution is 1.0 to 4.8 kcal/mol in chains and 3.2 to 6.9 kcal/mol in rings; for n &ge; 5 it makes up 50 to 62% of each bond. The strength of HF clusters is mostly cooperativity."
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
          "<table class=\"data\"><caption>Energies in kcal/mol, n = 3 to 8.</caption><thead><tr><th>Cluster</th><th>Bond</th><th>In-cluster energy</th><th>Cooperativity</th></tr></thead><tbody><tr><td>(HF)<sub>n</sub>, cyclic</td><td>F&ndash;H&middot;&middot;&middot;F</td><td>7.9 &ndash; 11.4</td><td>3.2 &ndash; 6.9</td></tr><tr><td>(H<sub>2</sub>O)<sub>n</sub></td><td>O&ndash;H&middot;&middot;&middot;O</td><td>0.3 &ndash; 11.6</td><td>&minus;1.2 &ndash; 7.0</td></tr><tr><td>(NH<sub>3</sub>)<sub>n</sub></td><td>N&ndash;H&middot;&middot;&middot;N</td><td>0.65 &ndash; 5.54</td><td>up to ~1.9</td></tr><tr><td>(H<sub>2</sub>S)<sub>n</sub></td><td>S&ndash;H&middot;&middot;&middot;S</td><td>~2 &ndash; 4</td><td>&minus;0.1 &ndash; 0.9</td></tr></tbody></table>",
          "The dimer energies differ much less than the in-cluster energies do. What separates a strong network from a weak one is mainly how much each bond is reinforced by the others. HF and water have strong donors and strong cooperativity; ammonia and H<sub>2</sub>S have little of either."
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
    summary: "In a binary cluster each molecule can bond to its own kind or to the other. Which bonds win, and why?",
    sections: [
      {
        heading: "Self- and cross-association",
        body: [
          "In a cluster built from two kinds of molecule, A and B, there are four possible bonds: A&ndash;H&middot;&middot;&middot;A, A&ndash;H&middot;&middot;&middot;B, B&ndash;H&middot;&middot;&middot;A and B&ndash;H&middot;&middot;&middot;B. Spectroscopy can show that they are present, but not how strong each one is. MTA gives each bond separately, so the four types can be ranked directly. All results below are MP2/aug-cc-pVTZ."
        ]
      },
      {
        heading: "HF and water",
        body: [
          "In cyclic (HF)<sub>m</sub>(H<sub>2</sub>O)<sub>n</sub> clusters, the bonds with HF as donor are by far the strongest: F&ndash;H&middot;&middot;&middot;O at 8.3 to 21.6 kcal/mol and F&ndash;H&middot;&middot;&middot;F at 7.1 to 14.7 kcal/mol. When water donates, the bonds are moderate: O&ndash;H&middot;&middot;&middot;O at 3.3 to 11.2 and O&ndash;H&middot;&middot;&middot;F, the weakest, at 1.9 to 10.0 kcal/mol. Cooperativity supplies 10 to 61% of the F&ndash;H&middot;&middot;&middot;O energies and 35 to 74% of the F&ndash;H&middot;&middot;&middot;F energies."
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
        heading: "Water and H<sub>2</sub>S",
        body: [
          "With water and H<sub>2</sub>S the order is O&ndash;H&middot;&middot;&middot;O (up to 11.06 kcal/mol) &gt; O&ndash;H&middot;&middot;&middot;S (1.36 to 6.89) &gt; S&ndash;H&middot;&middot;&middot;O (1.08 to 6.39) &gt; S&ndash;H&middot;&middot;&middot;S (1.35 to 4.23). The dimers follow the same order with smaller values; cooperativity adds up to about 6 kcal/mol. S&ndash;H&middot;&middot;&middot;S bonds in the mixed clusters come out a little stronger than in pure H<sub>2</sub>S, because they sit next to stronger O&ndash;H bonds."
        ]
      },
      {
        heading: "HF and ammonia",
        body: [
          "Across 66 bonds in twelve cyclic (HF)<sub>m</sub>(NH<sub>3</sub>)<sub>n</sub> clusters, the hierarchy is unambiguous: F&ndash;H&middot;&middot;&middot;N (mean 22.7 kcal/mol) &gt; F&ndash;H&middot;&middot;&middot;F (12.1) &gt; N&ndash;H&middot;&middot;&middot;F &asymp; N&ndash;H&middot;&middot;&middot;N (both 4.7). Strength and cooperative enhancement are inverted, though: cooperativity is 27.5% of the F&ndash;H&middot;&middot;&middot;N energy but 68% for N&ndash;H&middot;&middot;&middot;F. Twelve bonds are weak as dimers (below 4 kcal/mol) yet exceed 6 kcal/mol in the cluster, which I call the cooperativity-amplified bond effect. The electron density at the bond critical point tracks the MTA energy closely (R<sup>2</sup> = 0.97)."
        ]
      },
      {
        heading: "HF and H<sub>2</sub>S",
        body: [
          "In 126 bonds across twenty (HF)<sub>m</sub>(H<sub>2</sub>S)<sub>n</sub> clusters, the mean energies are F&ndash;H&middot;&middot;&middot;F 9.03, F&ndash;H&middot;&middot;&middot;S 8.47, S&ndash;H&middot;&middot;&middot;F 2.57 and S&ndash;H&middot;&middot;&middot;S 2.45 kcal/mol. The cooperative part averages 2.11 kcal/mol per bond and is positive for nearly all of them. It depends more on HF content than on cluster size. This work is a preprint and has not yet been peer reviewed."
        ]
      },
      {
        heading: "Common threads",
        body: [
          "<table class=\"data\"><thead><tr><th>Mixture</th><th>Strongest bond</th><th>Weakest bond</th></tr></thead><tbody><tr><td>HF / H<sub>2</sub>O</td><td>F&ndash;H&middot;&middot;&middot;O</td><td>O&ndash;H&middot;&middot;&middot;F</td></tr><tr><td>CH<sub>3</sub>OH / H<sub>2</sub>O</td><td>O<sub>M</sub>&ndash;H&middot;&middot;&middot;O<sub>W</sub></td><td>O<sub>W</sub>&ndash;H&middot;&middot;&middot;O<sub>W</sub>, O<sub>W</sub>&ndash;H&middot;&middot;&middot;O<sub>M</sub></td></tr><tr><td>NH<sub>3</sub> / H<sub>2</sub>O</td><td>O&ndash;H&middot;&middot;&middot;N</td><td>N&ndash;H&middot;&middot;&middot;N, N&ndash;H&middot;&middot;&middot;O</td></tr><tr><td>H<sub>2</sub>O / H<sub>2</sub>S</td><td>O&ndash;H&middot;&middot;&middot;O</td><td>S&ndash;H&middot;&middot;&middot;S</td></tr><tr><td>HF / NH<sub>3</sub></td><td>F&ndash;H&middot;&middot;&middot;N</td><td>N&ndash;H&middot;&middot;&middot;F, N&ndash;H&middot;&middot;&middot;N</td></tr><tr><td>HF / H<sub>2</sub>S</td><td>F&ndash;H&middot;&middot;&middot;F</td><td>S&ndash;H&middot;&middot;&middot;S</td></tr></tbody></table>",
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
