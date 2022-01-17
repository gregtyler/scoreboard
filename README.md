# Scoreboard

Vue-based scoreboard PWA for card games. I used to use text notes in [Simply Notes](https://github.com/gregtyler/simply-notes), but I wanted something more dedicated (and with a nicer UI).

## Setup

For local development:
```
npm install
npm start
```

## Data format

Storage uses a custom data format for storing games. This was mostly for fun, but is specifically designed for annotating card games in a human and computer-readable way.

An example game is shown below, though this format might change as I experiment.

```
GOLF9
9-Card Golf
@A:Amy
@G:Greg
====
>G 4H JD
+4 G
-2 A square
---
-2 G
+36 A
```

## Future goals

I want to ensure the format supports more card games, and create more editors (currently only Golf is supported).

I also want to add "medals" to gameplay for exceptional events, such as scoring a square in Golf, getting all 11 points in Cassino or making a straight flush in Poker. This is inspired by (typically FPS) video games.

## Tools used

- Vue
- esbuild
- Prettier
