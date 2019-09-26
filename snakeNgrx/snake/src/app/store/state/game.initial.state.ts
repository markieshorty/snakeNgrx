import { GameState } from './game.state';
import { Snake } from 'src/app/constants/snake.constants';
import { Apple } from '../models/apple.model';

export const initialGameState: GameState = {
    gameOver: false,
    score: 0,
    gameStarted: false,
    directionOfTravel: 'R',
    apple: new Apple(),
    snakePosition: {
        x: 0,
        y: 100,
        body: [
            {
                x: - Snake.Width,
                y: 100
            },
            {
                x: - (Snake.Width * 2),
                y: 100
            },
            {
                x: - (Snake.Width * 3),
                y: 100
            },
            {
                x: - (Snake.Width * 4),
                y: 100
            },
            {
                x: - (Snake.Width * 5),
                y: 100
            }
        ]
    }
}