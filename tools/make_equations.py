"""Render the blog equations in tools/equations.txt to SVG with LaTeX.

Uses the same fonts as the Supporting Information PDF (mathptmx, Times).
Needs a LaTeX installation with latex and dvisvgm (MiKTeX or TeX Live).
Usage:  python tools/make_equations.py
"""
import pathlib, subprocess, tempfile, shutil

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "eq"
OUT.mkdir(parents=True, exist_ok=True)

TEMPLATE = r"""\documentclass[border=1pt]{standalone}
\usepackage{amsmath,amssymb}
\usepackage{mathptmx}
\begin{document}
$\displaystyle %s$
\end{document}
"""

for line in (ROOT / "tools" / "equations.txt").read_text(encoding="utf-8").splitlines():
    if not line.strip() or line.lstrip().startswith("#"):
        continue
    name, tex = (x.strip() for x in line.split("|", 1))
    with tempfile.TemporaryDirectory() as tmp:
        src = pathlib.Path(tmp) / "eq.tex"
        src.write_text(TEMPLATE % tex, encoding="utf-8")
        subprocess.run(["latex", "-interaction=nonstopmode", "-halt-on-error", "eq.tex"],
                       cwd=tmp, check=True, capture_output=True)
        subprocess.run(["dvisvgm", "--no-fonts", "--exact-bbox", "--zoom=1.4", "eq.dvi", "-o", "eq.svg"],
                       cwd=tmp, check=True, capture_output=True)
        shutil.copy(pathlib.Path(tmp) / "eq.svg", OUT / f"{name}.svg")
    print("wrote", (OUT / f"{name}.svg").relative_to(ROOT))
