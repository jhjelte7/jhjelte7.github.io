# Joel Hjelte — personal website

A lightweight academic website for Joel Hjelte: https://jhjelte7.github.io/.

## Pages

- `index.html`: biography, selected research, teaching, contact.
- `research.html`: working papers, work in progress, applied and policy work, and earlier work.
- `cv.html`: academic CV, with a downloadable PDF in `assets/`.

## Publish with GitHub Pages

This repository serves its `main` branch from the root folder. In **Settings → Pages**, the publishing source should be **Deploy from a branch**, **main**, and **/ (root)**. Changes committed to `main` are published automatically after GitHub completes deployment.

There is no build step, package installation, analytics service, or paid dependency. `.nojekyll` preserves the plain static site.

## Edit

Update the text in the HTML files. Styles are in `assets/styles.css`; the optional research filter is in `assets/site.js`. All page content and native expandable abstracts work without JavaScript. The site uses locally served assets and system fonts.

The downloadable CV is a public academic summary. Replace `assets/Joel-Hjelte-CV.pdf` and update `cv.html` together when changing the CV.

Research information came from the existing Google Site and the supplied résumé. The paper in the Marked Biases repository is titled **Mind Your Judgments: Does Mindfulness Boost or Hinder Rational Judgments?** and is listed under **Earlier work**, linking to its verified SSRN record: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7634058.

If hosting at a different address, update the canonical and Open Graph URLs in the HTML files, `robots.txt`, and `sitemap.xml`.

## Local preview

Run `python -m http.server 8765 --directory .` in this folder, then open http://localhost:8765/.
