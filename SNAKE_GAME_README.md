# 🐍 Snake Game

A modern, responsive Snake game built with HTML5 Canvas, CSS3, and vanilla JavaScript.

## Features

- **Smooth Gameplay**: 150ms game loop for optimal snake movement
- **Modern UI**: Glassmorphism design with gradient backgrounds and blur effects
- **Score System**: Real-time scoring with persistent high score storage
- **Responsive Controls**: Support for both arrow keys and WASD
- **Game States**: Pause/resume functionality and game over screen
- **Visual Effects**: Glowing snake segments and food with shadow effects
- **Local Storage**: High scores are saved between sessions

## How to Play

1. Open `snake-game.html` in your web browser
2. Use arrow keys or WASD to control the snake:
   - ↑/W: Move up
   - ↓/S: Move down
   - ←/A: Move left
   - →/D: Move right
   - Space: Pause/Resume
3. Eat the yellow food to grow and increase your score
4. Avoid hitting the walls or the snake's own body
5. Try to beat your high score!

## Game Mechanics

- **Snake Growth**: Each food eaten adds one segment to the snake
- **Scoring**: 10 points per food item
- **Collision Detection**: Game ends when snake hits walls or itself
- **Food Spawning**: Random placement that avoids snake body
- **Speed**: Consistent movement speed for fair gameplay

## Technical Details

- **Canvas Size**: 400x400 pixels
- **Grid Size**: 20x20 pixels per tile
- **Game Loop**: 150ms interval
- **Browser Compatibility**: Modern browsers with HTML5 Canvas support
- **No Dependencies**: Pure vanilla JavaScript implementation

## File Structure

```
snake-game.html    # Complete game in a single HTML file
```

The game is entirely self-contained in a single HTML file with embedded CSS and JavaScript for easy deployment and sharing.