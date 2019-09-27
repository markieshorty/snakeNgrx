import *  as fromRoot from './app.state';
import { Apple } from '../models/apple.model';
import { SnakePosition } from '../models/snake-position.model';

export interface State extends fromRoot.State {
    gameState: GameState;
}

export interface GameState {
    score: number;
    gameStarted: boolean;
    directionOfTravel: string;
    snakePosition: SnakePosition;
    gameOver: boolean;
    apple: Apple;
    highestScore: number;
}