# Arcana Whispers

A mystical, interactive tarot card reading web application. Draw cards from a full 78-card deck and receive interpretations through three classic spread layouts.

## Features

- **Three Spread Types**
  - Single Card — quick insight and guidance
  - Three Card Spread — past, present, and future
  - Celtic Cross — deep 10-card comprehensive reading

- **Full 78-Card Deck** — all 22 Major Arcana and 56 Minor Arcana (Wands, Cups, Swords, Pentacles) with upright and reversed meanings

- **Multilingual** — English, Chinese (中文), Japanese (日本語), Korean (한국어)

- **Visual Themes** — dark/light mode toggle with 5 deck styles (Original, Vintage, Noir, Mystic, Faded)

- **Animated Interactions** — shuffle animations, card dealing, and flip reveals

- **Reading Interpretation** — automatic keyword analysis and thematic summary for each spread

## Getting Started

No build tools required. Open `index.html` in any modern browser.

```
git clone https://github.com/ChenMingjing-MJ/Arcana-Whispers.git
cd Arcana-Whispers
open index.html
```

## How It Works

1. Choose a spread layout from the home screen
2. Tap the deck to shuffle
3. Tap again to draw cards one by one
4. Cards reveal automatically with upright/reversed orientation
5. Read individual card interpretations and an overall summary

## Project Structure

```
├── index.html          # Main HTML structure
├── css/
│   ├── reset.css       # CSS reset
│   ├── variables.css   # Theme variables and custom properties
│   ├── layout.css      # Page layout and responsive grid
│   ├── cards.css       # Card styling and deck themes
│   ├── animations.css  # Shuffle, deal, and flip animations
│   └── components.css  # Buttons, panels, and UI components
└── js/
    └── app.js          # Application logic, card data, and rendering
```

## Tech Stack

Pure HTML, CSS, and vanilla JavaScript — no frameworks or dependencies. Card images sourced from an open tarot asset repository.

## License

MIT
