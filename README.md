# minesweeper-fe
Minesweeper Frontend Template

## Required Libraries
- Recoil.js for state management 
- Typescript (use create react app -- TS version) https://create-react-app.dev/docs/adding-typescript/
- Evergreen UI https://evergreen.segment.com/

## Mandatory Features
- Clock ticking to show in real time lenghth of game
- Ability for user to choose grid size between three options - 3x3, 5x5, 10x10
- Ability for user to choose the amount of bombs littered in the game
- Ability to 'flag' a bomb and prevent a user from accidentally clicking on a flagged square 
- When all boxes have either a flag or are exposed -- game automatically declares winner <i>if the flagged squares are actually where each bomb resides</i>...otherwise the game and clock keep ticking 
- Per the actual game, clicking a box that has no surrounding boxes <i>which also do not border a bomb</i> causes the explosion of box exposure
- Sexy UI, make it modern, clean, minimalistic 