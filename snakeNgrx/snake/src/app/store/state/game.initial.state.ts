import { GameState } from './game.state';

export const initialGameState: GameState = {
    gameOver: false,
    score: 0,
    lives: 5,
    gameStarted: false,
    directionOfTravel: 'R',
    snakeBodyLength: 5,
    snakeHeadPosition: {
        x: 0,
        y: 100,
        body: [
            {
                x: -5,
                y: 100
            },
            {
                x: -10,
                y: 100
            },
            {
                x: -15,
                y: 100
            },
            {
                x: -20,
                y: 100
            },
            {
                x: -25,
                y: 100
            }
        ]
    }
}