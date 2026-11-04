# deepakpatkar.github.io

Personal academic website of Deepak Patkar. Plain HTML, CSS and JavaScript:
no build step and no external fonts or libraries, so it loads anywhere (including China).

## Where things are

| To change...                                   | Edit                     |
|------------------------------------------------|--------------------------|
| Name, position, email, links, menu, switches   | `data/config.js`         |
| About text (home) and research themes          | `data/profile.js`        |
| Papers and thesis                              | `data/publications.js`   |
| News (home page)                               | `data/news.js`           |
| Talks and meetings attended                    | `data/talks.js`          |
| Mentors, collaborators, group, gallery         | `data/people.js`         |
| Software                                       | `data/software.js`       |
| CV page                                        | `data/cv.js` (+ replace `DP_CV.pdf`) |
| Teaching, openings, blog (hidden for now)      | `data/later.js`          |
| Colours and fonts                              | top of `assets/css/style.css` |
| Photos                                         | `assets/img/`            |

You should never need to touch the `.html` files or `assets/js/site.js`.

## Hidden features for later

In `data/config.js`, under `features`, each switch is `false` today:

```
group, teaching, openings, blog, gallery, citationStats
```

Change one to `true` and that page or section appears in the menu. Change it back to `false` and it
disappears again. The content stays in `data/later.js` / `data/people.js` the whole time.

## Preview on your computer

```bash
python -m http.server 8000
```

Then open http://localhost:8000. If a change does not show, press **Ctrl+F5** to reload.

## Typical update

```bash
git add .
git commit -m "Add new paper on ..."
git push
```

GitHub Pages republishes the site a minute or two after `git push`.
