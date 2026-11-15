# Portfolio Book Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/portfolio-book-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete responsive reconstruction of the portfolio book shown in the supplied 21.33-second screen recording.

## What the video shows

- A dark navy digital portfolio presented as an open book.
- Cover for **Nilesh Mhatre**, with role line: UI/UX Designer · Web Developer · Technology Consultant.
- Cyan typography, purple accents, subtle gradients and a glowing orange outer showcase frame.
- A table of contents and profile introduction.
- Core values / design philosophy and expertise progress bars.
- Professional experience timeline.
- Featured projects and additional case studies.
- Contact details page.
- Previous / Next controls and page counter.

## Extracted CSS visible in the video

The code panel shows this rule for the inner page faces. It has been transcribed from the screen:

```css
.page-inner-front,
.page-inner-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 36px;
  box-sizing: border-box;
  background-color: #0f172a;
  color: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background-image: linear-gradient(
    90deg,
    rgba(0,0,0,0.3) 0%,
    rgba(255,255,255,0) 4%,
    rgba(255,255,255,0) 96%,
    rgba(0,0,0,0.2) 100%
  );
}
```

## Features implemented

- Cover page and five portfolio spreads.
- Animated transition when changing spreads.
- Previous / Next navigation and page indicator.
- Keyboard navigation with Left / Right arrows.
- Touch swipe navigation on mobile.
- Responsive two-page book layout.
- Editable portfolio data object in `script.js`.
- No dependencies, package install or build step.

## Personalize it

Open `script.js` and edit the `portfolio` object near the top:

- `name`, `role`, `intro`
- `email`, `phone`, `location`
- `about`, `stats`, `philosophy`
- `values`, `skills`, `experience`, `projects`

The displayed sample contact details are placeholders; replace them with your real details before publishing.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
portfolio-book-animation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The visible CSS page-face rule above is transcribed from the recording. The rest of the HTML structure, book layout, page content, animations and navigation are reconstructed as a working project based on the visible UI. This is not the original creator's verbatim source repository.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
