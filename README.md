# EE-interview-prep

Standalone EE/VLSI/Hardware interview prep app built with plain HTML, CSS and JavaScript.

## Features

- Technical question bank across:
  - Verilog / RTL
  - Digital Logic
  - Analog Design
  - VLSI
  - Computer Architecture
  - Semiconductor fundamentals
- Behavioral and soft skills section
- Topic-based quizzes with scoring
- Mock interview mode
- Flashcards for quick revision
- Company-style interview tracks
- Project discussion prep section
- Local browser storage for favorites and progress

## How to run locally

1. Download the project folder.
2. Open `index.html` in your browser.
3. For best navigation behavior, you can also use a lightweight local server.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload the full `EE-interview-prep` folder contents.
3. Commit to the `main` branch.
4. Go to **Settings > Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Save.
7. GitHub will publish the site in a few minutes.

## Recommended next upgrades

- Add more technical questions and quizzes
- Add waveform/image illustrations
- Add downloadable cheat sheets
- Add interview tracker dashboard
- Add video shelf and curated learning resources
