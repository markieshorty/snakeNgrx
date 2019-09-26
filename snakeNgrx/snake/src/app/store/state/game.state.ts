import *  as fromRoot from './app.state';

export interface State extends fromRoot.State {
    gameState: GameState;
}

export interface GameState {
    score: number;
    lives: number;
    gameStarted: boolean;
    directionOfTravel: string;
    snakeHeadPosition: SnakePosition;
    snakeBodyLength: number;
    gameOver: boolean;
}

export class SnakePosition {
    public x: number;
    public y: number;

    public body: BodyPosition[];

    constructor() {
        this.x = 0;
        this.y = 0;

        this.body = [
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

export class BodyPosition {
    public x: number;
    public y: number;
}