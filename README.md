# ColorFamilyGen

A tiny vanilla JS app for generating color schemes from a base color. Pick a color and a scheme mode (monochrome, analogic, complement, triad, or quad) and it fetches a matching palette from [TheColorAPI](https://www.thecolorapi.com/).

## Running locally

No build step — it's plain HTML/CSS/JS. Serve the folder with any static server, for example:

```bash
npx serve .
```

or open `index.html` directly in a browser.

## How it works

- `index.html` — markup and the color-picker form
- `index.css` — styling
- `index.js` — on submit, reads the chosen hex + mode, calls `thecolorapi.com/scheme`, and renders the returned colors as swatches
