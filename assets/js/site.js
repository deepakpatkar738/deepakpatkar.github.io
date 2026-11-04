/* ==========================================================================
   site.js - builds the header, footer and every page from the files in data/.
   You should not need to edit this file to change content.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE || {};
  var F = S.features || {};
  var page = document.body.getAttribute("data-page");
  var main = document.getElementById("main");

  /* ---------- small helpers ---------- */
  function h(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content; }
  function plain(html) { var d = document.createElement("div"); d.innerHTML = html || ""; return (d.textContent || "").replace(/\s+/g, " ").trim(); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function on(name) { return F[name] === true; }
  function list(a) { return Array.isArray(a) ? a : []; }

  var ICONS = {
    scholar: '<path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5 12 0z"/>',
    orcid: '<path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.922 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z"/>',
    researchgate: '<path d="M2 2h20v20H2z" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16.2" text-anchor="middle" font-family="Georgia,serif" font-size="10" font-weight="700">RG</text>',
    github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    kaggle: '<path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
    facebook: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
    instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>',
    mail: '<path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>',
    download: '<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>',
    sun: '<circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  };
  function icon(id) { return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' + (ICONS[id] || "") + "</svg>"; }

  function linkIcons(withMail) {
    var out = '<ul class="links">';
    if (withMail) out += '<li><a href="mailto:' + esc(S.email) + '" title="Email" aria-label="Email">' + icon("mail") + "</a></li>";
    list(S.links).forEach(function (l) {
      if (l.show === false) return;
      out += '<li><a href="' + esc(l.url) + '" title="' + esc(l.label) + '" aria-label="' + esc(l.label) + '" rel="noopener">' + icon(l.id) + "</a></li>";
    });
    return out + "</ul>";
  }

  /* ---------- theme ---------- */
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    var b = document.getElementById("theme-btn");
    if (b) { b.innerHTML = icon(t === "dark" ? "sun" : "moon"); b.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme"); }
  }

  /* ---------- header & footer ---------- */
  function header() {
    var el = document.querySelector(".site-header");
    if (!el) return;
    var items = list(S.nav).filter(function (n) { return !n.feature || on(n.feature); });
    var here = (location.pathname.split("/").pop() || "index.html");
    var links = items.map(function (n) {
      var cur = n.href === here ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + ">" + n.label + "</a>";
    }).join("");
    el.innerHTML = '<div class="wrap">' +
      '<a class="brand" href="index.html">' + esc(S.name) + "<small>" + esc(S.field || "") + "</small></a>" +
      '<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + links +
      '<button class="icon-btn" id="theme-btn" type="button"></button></nav></div>';
    var mb = el.querySelector(".menu-btn"), nav = el.querySelector(".nav");
    mb.addEventListener("click", function () { var o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });
    document.getElementById("theme-btn").addEventListener("click", function () {
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }

  function footer() {
    var el = document.querySelector(".site-footer");
    if (!el) return;
    el.innerHTML = '<div class="wrap">' +
      "<address><strong>" + esc(S.honorific ? S.honorific + " " : "") + esc(S.name) + "</strong><br>" +
      list(S.address).map(esc).join("<br>") + "<br>" +
      '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>" +
      (S.showPhone && S.phone ? " &middot; " + esc(S.phone) : "") + "</address>" +
      "<div>" + linkIcons(false) + '<p class="small" style="margin-top:1rem">&copy; ' + (S.copyrightYear || new Date().getFullYear()) + " " + esc(S.name) + "</p></div></div>";
  }

  function head(title, lede) {
    return '<header class="page-head"><h1>' + title + "</h1>" + (lede ? "<p>" + lede + "</p>" : "") + "</header>";
  }

  /* ---------- publications helpers ---------- */
  var PUBS = list(window.PUBLICATIONS).slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
  PUBS.forEach(function (p, i) { p._n = PUBS.length - i; });

  function isMe(name) { return list(S.myNames).some(function (m) { return name.trim().replace(/\.$/, "") === m.replace(/\.$/, ""); }); }
  function authorsHTML(a) {
    return String(a || "").split(";").map(function (n) {
      n = n.trim(); return isMe(n) ? '<span class="me">' + esc(n) + "</span>" : esc(n);
    }).join("; ");
  }
  function role(p) {
    var names = String(p.authors || "").split(";").map(function (s) { return s.trim(); }).filter(Boolean);
    if (names.length === 1 && isMe(names[0])) return "sole";
    if (names.length && isMe(names[0])) return "first";
    return "co";
  }
  function venue(p) {
    var v = "<em>" + p.journal + "</em> " + (p.year ? "<b>" + p.year + "</b>" : "");
    if (p.volume) v += ", <i>" + p.volume + "</i>";
    if (p.pages) v += ", " + p.pages;
    return v;
  }
  function bibtex(p) {
    var first = String(p.authors || "").split(/[;,]/)[0].replace(/[^A-Za-z]/g, "");
    var word = plain(p.title).split(/\s+/).find(function (w) { return w.length > 3; }) || "x";
    var key = first + p.year + word.replace(/[^A-Za-z]/g, "").toLowerCase();
    var f = [
      ["author", String(p.authors).split(";").map(function (s) { return s.trim(); }).join(" and ")],
      ["title", "{" + plain(p.title) + "}"],
      ["journal", plain(p.journal)], ["year", p.year], ["volume", p.volume], ["pages", plain(p.pages).replace("–", "--")], ["doi", p.doi]
    ].filter(function (x) { return x[1]; });
    return "@" + (p.type === "preprint" ? "misc" : "article") + "{" + key + ",\n" +
      f.map(function (x) { return "  " + x[0] + " = {" + x[1] + "}"; }).join(",\n") + "\n}";
  }
  function pubItem(p, opts) {
    opts = opts || {};
    var flags = "";
    if (p.type === "preprint") flags += '<span class="tag flag">Preprint</span>';
    if (p.type === "forthcoming") flags += '<span class="tag flag">Forthcoming</span>';
    var r = role(p);
    if (!opts.compact && r === "sole") flags += '<span class="tag flag">Sole author</span>';
    var acts = "";
    if (p.doi) acts += '<a class="tag" href="https://doi.org/' + esc(p.doi) + '" rel="noopener">DOI</a>';
    if (p.pdf) acts += '<a class="tag" href="' + esc(p.pdf) + '">PDF</a>';
    if (!opts.compact) {
      if (!p.pdf && p.type !== "forthcoming")
        acts += '<a class="tag" href="mailto:' + esc(S.email) + "?subject=" + encodeURIComponent("PDF request: " + plain(p.title)) + '">Request PDF</a>';
      acts += '<button class="tag" type="button" data-bib>Cite</button>';
    }
    return '<li class="pub">' + (opts.compact ? "" : '<span class="n">' + p._n + "</span>") +
      '<div class="title">' + p.title + "</div>" +
      '<div class="authors">' + authorsHTML(p.authors) + "</div>" +
      '<div class="venue">' + venue(p) + "</div>" +
      '<div class="actions">' + flags + acts + "</div>" +
      (opts.compact ? "" : '<pre class="bib">' + esc(bibtex(p)) + "</pre>") + "</li>";
  }
  function wireBib(root) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-bib]");
      if (!b) return;
      var pre = b.closest(".pub").querySelector(".bib");
      var open = pre.classList.toggle("open");
      b.textContent = open ? "Hide" : "Cite";
      if (open && navigator.clipboard) navigator.clipboard.writeText(pre.textContent).then(function () { b.textContent = "Copied ✓"; }, function () {});
    });
  }

  /* ---------- pages ---------- */
  var PAGES = {};

  PAGES.home = function () {
    var P = window.PROFILE || {};
    var news = list(window.NEWS);
    var html =
      '<section class="intro"><div>' +
      "<h1>" + esc(S.honorific ? S.honorific + " " : "") + esc(S.name) + "</h1>" +
      '<p class="role">' + esc(S.position) + " &middot; " + esc(S.degree ? S.degree + " " : "") + esc(S.field) + "<br>" + esc(S.affiliation) + "</p>" +
      '<div class="about">' + list(P.about).map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>" +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem">' + linkIcons(true) +
      '<a class="btn" href="' + esc(S.cv) + '" style="margin-top:1.5rem">' + icon("download") + "CV (PDF)</a></div>" +
      "</div>" +
      '<figure class="portrait"><img src="assets/img/portrait.jpg" alt="Portrait of ' + esc(S.name) + '" width="800" height="1000">' +
      (list(P.currently).length ? '<figcaption><ul class="currently" style="margin:0">' + list(P.currently).map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul></figcaption>" : "") +
      "</figure></section>";

    if (on("openings") && window.OPENINGS)
      html += '<div class="notice"><p>' + window.OPENINGS.banner + ' <a href="join.html">Details &rarr;</a></p></div>';

    var shown = 5;
    html += '<div class="two-col">' +
      '<section class="section"><h2>News' + (news.length > shown ? '<a class="more" href="#" id="news-more">All news</a>' : "") + "</h2>" +
      '<ul class="rows compact" id="news">' + news.map(function (n, i) {
        return "<li" + (i >= shown ? " hidden" : "") + '><span class="when">' + n.date + "</span><span>" + n.text + "</span></li>";
      }).join("") + "</ul></section>" +
      '<section class="section"><h2>Recent papers<a class="more" href="publications.html">All papers</a></h2>' +
      '<ol class="pubs">' + PUBS.filter(function (p) { return p.type !== "forthcoming"; }).slice(0, 3).map(function (p) { return pubItem(p, { compact: true }); }).join("") + "</ol></section></div>";

    main.innerHTML = html;
    var more = document.getElementById("news-more");
    if (more) more.addEventListener("click", function (e) {
      e.preventDefault();
      var hidden = document.querySelectorAll("#news li[hidden]");
      hidden.forEach(function (li) { li.hidden = false; });
      more.remove();
    });
  };

  PAGES.publications = function () {
    var counted = PUBS.filter(function (p) { return p.type !== "forthcoming"; });
    var articles = counted.filter(function (p) { return p.type === "article"; }).length;
    var pre = counted.filter(function (p) { return p.type === "preprint"; }).length;
    var first = counted.filter(function (p) { return role(p) === "first"; }).length;
    var sole = counted.filter(function (p) { return role(p) === "sole"; }).length;
    var stats = '<div class="stats">' +
      "<div><b>" + articles + "</b><span>Journal articles</span></div>" +
      (pre ? "<div><b>" + pre + "</b><span>Preprints</span></div>" : "") +
      "<div><b>" + first + "</b><span>First author</span></div>" +
      "<div><b>" + sole + "</b><span>Sole author</span></div>";
    var C = S.citationStats || {};
    if (on("citationStats")) {
      if (C.citations != null) stats += "<div><b>" + C.citations + "</b><span>Citations</span></div>";
      if (C.hIndex != null) stats += "<div><b>" + C.hIndex + "</b><span>h-index</span></div>";
      if (C.i10 != null) stats += "<div><b>" + C.i10 + "</b><span>i10-index</span></div>";
      stats += '<span class="note">Google Scholar' + (C.updated ? ", " + esc(C.updated) : "") + "</span>";
    }
    stats += "</div>";

    var years = []; PUBS.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    var types = [["all", "All"], ["article", "Journal articles"], ["preprint", "Preprints"]];
    if (PUBS.some(function (p) { return p.type === "forthcoming"; })) types.push(["forthcoming", "Forthcoming"]);
    var T = window.THESIS;

    main.innerHTML = head("Publications", "Journal articles and preprints. My name is underlined; <a href=\"" + esc((S.links || []).filter(function (l) { return l.id === "scholar"; }).map(function (l) { return l.url; })[0] || "#") + "\">Google Scholar</a> has the citation record.") +
      stats +
      '<div class="controls"><input type="search" id="q" placeholder="Search title, author, journal, year" aria-label="Search publications">' +
      '<select id="yr" aria-label="Year"><option value="">All years</option>' + years.map(function (y) { return "<option>" + y + "</option>"; }).join("") + "</select>" +
      '<div class="chips" role="group" aria-label="Type">' + types.map(function (t, i) { return '<button class="chip" type="button" data-type="' + t[0] + '" aria-pressed="' + (i === 0) + '">' + t[1] + "</button>"; }).join("") + "</div></div>" +
      '<div id="pub-out"></div>' +
      (T ? '<section class="section"><h2>Thesis</h2><ul class="rows"><li><span class="when">PhD, ' + T.year + '</span><div><div class="what">' + T.title + '</div><div class="where">' + T.institution + (T.url ? ' &middot; <a href="' + esc(T.url) + '">Shodhganga</a>' : "") + "</div></div></li></ul></section>" : "");

    var state = { q: "", yr: "", type: "all" };
    var out = document.getElementById("pub-out");
    function draw() {
      var q = state.q.toLowerCase();
      var rows = PUBS.filter(function (p) {
        if (state.type !== "all" && p.type !== state.type) return false;
        if (state.yr && String(p.year) !== state.yr) return false;
        if (q && (plain(p.title) + " " + p.authors + " " + plain(p.journal) + " " + p.year).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      if (!rows.length) { out.innerHTML = '<p class="empty">No matching publications.</p>'; return; }
      var html = "", cur = null;
      rows.forEach(function (p) {
        if (p.year !== cur) { if (cur !== null) html += "</ol></div>"; cur = p.year; html += '<div class="year-group"><h3>' + p.year + '</h3><ol class="pubs">'; }
        html += pubItem(p);
      });
      out.innerHTML = html + "</ol></div>";
    }
    document.getElementById("q").addEventListener("input", function (e) { state.q = e.target.value; draw(); });
    document.getElementById("yr").addEventListener("change", function (e) { state.yr = e.target.value; draw(); });
    main.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        main.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        state.type = b.getAttribute("data-type"); draw();
      });
    });
    wireBib(out);
    draw();
  };

  PAGES.research = function () {
    var R = list((window.PROFILE || {}).research);
    main.innerHTML = head("Research", "Quantum chemistry and molecular simulation of weak interactions, metal&ndash;biomolecule systems and materials.") +
      R.map(function (r) {
        var rel = PUBS.filter(function (p) { return list(p.tags).some(function (t) { return list(r.tags).indexOf(t) >= 0; }); });
        return '<article class="theme' + (r.image ? '' : ' no-img') + '"><div>' +
          "<h2>" + r.title + "</h2>" + (r.period ? '<div class="period">' + r.period + "</div>" : "") +
          "<p>" + r.text + "</p>" +
          (list(r.keywords).length ? '<ul class="keywords">' + r.keywords.map(function (k) { return "<li>" + k + "</li>"; }).join("") + "</ul>" : "") +
          (rel.length ? "<details><summary>Related publications (" + rel.length + ")</summary><ol>" +
            rel.map(function (p) { return "<li>" + p.title + ". <em>" + p.journal + "</em> " + p.year + (p.doi ? ' <a href="https://doi.org/' + esc(p.doi) + '">DOI</a>' : "") + "</li>"; }).join("") + "</ol></details>" : "") +
          "</div>" + (r.image ? '<figure><img src="' + esc(r.image) + '" alt=""></figure>' : "") + "</article>";
      }).join("");
  };

  PAGES.software = function () {
    main.innerHTML = head("Software", "Programs I write and maintain for my own research. They are open to anyone who finds them useful.") +
      '<div class="grid">' + list(window.SOFTWARE).map(function (s) {
        return '<article class="card"><h3>' + s.name + "</h3>" +
          '<div class="meta">' + [s.kind, s.status].filter(Boolean).join(" &middot; ") + "</div>" +
          "<p>" + s.text + "</p>" +
          '<div class="actions">' + list(s.links).map(function (l) { return '<a class="tag" href="' + esc(l.url) + '" rel="noopener">' + l.label + "</a>"; }).join("") + "</div></article>";
      }).join("") + "</div>";
  };

  PAGES.talks = function () {
    var T = list(window.TALKS), M = list(window.MEETINGS);
    main.innerHTML = head("Talks", "Presentations at symposia and seminars, followed by other meetings I attended.") +
      '<section class="section" style="margin-top:0"><h2>Presentations</h2><ul class="rows">' + T.map(function (t) {
        return '<li><span class="when">' + t.date + '</span><div><div class="what">' + t.title + '</div><div class="where">' + t.event + " &middot; " + t.place + "</div>" +
          (t.note ? '<div class="detail">' + t.note + "</div>" : "") + "</div></li>";
      }).join("") + "</ul></section>" +
      '<section class="section"><h2>Meetings attended</h2><ul class="rows compact">' + M.map(function (m) {
        return '<li><span class="when">' + m.date + "</span><div>" + m.name + '<div class="small muted">' + m.place + "</div></div></li>";
      }).join("") + "</ul></section>";
  };

  function personCard(p) {
    var initials = plain(p.name).replace(/^(Prof|Dr)\.?\s+/i, "").split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2);
    return '<article class="card person">' +
      (p.photo ? '<img src="' + esc(p.photo) + '" alt="" loading="lazy">' : '<div class="ph">' + initials + "</div>") +
      "<div>" + (p.role ? '<div class="role">' + p.role + "</div>" : "") +
      "<h3>" + p.name + "</h3>" +
      '<div class="org">' + [p.title, p.org].filter(Boolean).join("<br>") + "</div>" +
      '<div class="plinks">' + list(p.links).map(function (l) { return '<a href="' + esc(l.url) + '" rel="noopener">' + l.label + "</a>"; }).join("") + "</div>" +
      (p.email ? '<div class="mail">' + esc(p.email) + "</div>" : "") + "</div></article>";
  }

  PAGES.people = function () {
    var P = window.PEOPLE || {};
    var html = head(on("group") ? "Group" : "People", on("group") ? "Current members, alumni, mentors and collaborators." : "Mentors and collaborators I have worked with.");
    if (on("group")) {
      html += '<section class="section" style="margin-top:0"><h2>Members</h2>' +
        (list(P.group).length ? '<div class="grid people-grid">' + P.group.map(personCard).join("") + "</div>" : '<p class="muted">No members listed yet.</p>') + "</section>";
      if (list(P.alumni).length) html += '<section class="section"><h2>Alumni</h2><div class="grid people-grid">' + P.alumni.map(personCard).join("") + "</div></section>";
    }
    html += '<section class="section"' + (on("group") ? "" : ' style="margin-top:0"') + '><h2>Mentors</h2><div class="grid people-grid">' + list(P.mentors).map(personCard).join("") + "</div></section>" +
      '<section class="section"><h2>Collaborators</h2><div class="grid people-grid">' + list(P.collaborators).map(personCard).join("") + "</div></section>";
    main.innerHTML = html;
  };

  PAGES.gallery = function () {
    var albums = list(window.GALLERY).filter(function (a) { return list(a.photos).length; });
    main.innerHTML = head("Gallery", "Conferences, events and moments from the lab.") +
      albums.map(function (a, i) {
        return '<section class="section"' + (i === 0 ? ' style="margin-top:0"' : "") + "><h2>" + a.title +
          (a.date ? '<span class="more muted">' + a.date + "</span>" : "") + "</h2>" +
          (a.text ? '<p class="muted" style="max-width:var(--text)">' + a.text + "</p>" : "") +
          '<div class="gallery">' + list(a.photos).map(function (p) {
            return '<figure><a href="' + esc(p.src) + '" data-zoom><img src="' + esc(p.src) + '" alt="' + esc(plain(p.caption || a.title)) + '" loading="lazy"></a>' +
              (p.caption ? "<figcaption>" + p.caption + "</figcaption>" : "") + "</figure>";
          }).join("") + "</div></section>";
      }).join("") +
      '<dialog class="zoom" id="zoom"><img alt=""><button type="button" class="icon-btn" aria-label="Close">&times;</button></dialog>';
    var dlg = document.getElementById("zoom");
    main.addEventListener("click", function (e) {
      var a = e.target.closest("[data-zoom]");
      if (!a || !dlg.showModal) return;
      e.preventDefault();
      dlg.querySelector("img").src = a.getAttribute("href");
      dlg.querySelector("img").alt = a.querySelector("img").alt;
      dlg.showModal();
    });
    dlg.addEventListener("click", function () { dlg.close(); });
  };

  PAGES.cv = function () {
    main.innerHTML = head("Curriculum vitae", '<a class="btn" href="' + esc(S.cv) + '">' + icon("download") + "Download full CV (PDF)</a>") +
      list(window.CV).map(function (sec, i) {
        return '<section class="section"' + (i === 0 ? ' style="margin-top:0"' : "") + "><h2>" + sec.heading + '</h2><ul class="rows">' +
          list(sec.rows).map(function (r) {
            return '<li><span class="when">' + r.when + "</span><div>" +
              (r.what ? '<div class="what">' + r.what + "</div>" : "") +
              (r.where ? '<div class="where">' + r.where + "</div>" : "") +
              (r.detail ? '<div class="detail">' + r.detail + "</div>" : "") + "</div></li>";
          }).join("") + "</ul></section>";
      }).join("") +
      '<section class="section"><h2>Publications and talks</h2><p>See <a href="publications.html">Publications</a> and <a href="talks.html">Talks</a>.</p></section>';
  };

  PAGES.teaching = function () {
    var T = window.TEACHING || {};
    main.innerHTML = head("Teaching", T.intro || "") +
      '<ul class="rows">' + list(T.courses).map(function (c) {
        return '<li><span class="when">' + c.when + '</span><div><div class="what">' + (c.code ? c.code + " &middot; " : "") + (c.url ? '<a href="' + esc(c.url) + '">' + c.title + "</a>" : c.title) + "</div>" +
          '<div class="where">' + [c.level, c.place].filter(Boolean).join(" &middot; ") + "</div></div></li>";
      }).join("") + "</ul>";
  };

  PAGES.join = function () {
    var O = window.OPENINGS || {};
    main.innerHTML = head("Join us", "") +
      '<div style="max-width:var(--text)">' + list(O.text).map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      (list(O.positions).length ? '<section class="section"><h2>Open positions</h2><ul class="rows">' + O.positions.map(function (p) {
        return '<li><span class="when">' + (p.deadline || "Open") + '</span><div><div class="what">' + p.title + '</div><div class="detail">' + p.text + "</div></div></li>";
      }).join("") + "</ul></section>" : "") +
      '<p><a class="btn" href="mailto:' + esc(S.email) + '?subject=' + encodeURIComponent("Application") + '">' + icon("mail") + "Email " + esc(S.email) + "</a></p></div>";
  };

  PAGES.blog = function () {
    main.innerHTML = head("Blog", "Notes on chemistry, computation and the history of ideas.") +
      list(window.POSTS).map(function (p) {
        return '<article class="post"><h2>' + p.title + "</h2>" +
          '<div class="meta">' + [p.date].concat(list(p.tags)).join(" &middot; ") + "</div>" +
          (p.image ? '<img src="' + esc(p.image) + '" alt="">' : "") +
          list(p.body).map(function (b) { return "<p>" + b + "</p>"; }).join("") +
          (p.refs ? '<p class="refs">' + p.refs + "</p>" : "") + "</article>";
      }).join("");
  };

  /* Pages switched off in config.js send visitors back to the home page. */
  var GATED = { teaching: "teaching", blog: "blog", join: "openings", gallery: "gallery" };

  header();
  footer();
  if (GATED[page] && !on(GATED[page])) { location.replace("index.html"); return; }
  if (PAGES[page]) PAGES[page]();
})();
