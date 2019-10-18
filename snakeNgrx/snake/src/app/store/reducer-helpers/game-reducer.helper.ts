import { GameState } from '../state/game.state';
import { Snake } from 'src/app/constants/snake.constants';
import { Apple } from '../models/apple.model';
import { SnakePosition } from '../models/snake-position.model';

export class GameReducerHelper {
    // returns whether snakes head is colliding with apple (boolean returned)
    static snakeEatingApple(snakeHeadPosition: SnakePosition, apple: Apple): boolean {
        // todo implement
        return false;
    }

    // update body array so that it follows the newSnakePosition correctly
    static updateBody(newSnakePosition: SnakePosition, state: GameState): SnakePosition {
        // todo implement - can be done with just two lines of code.
        return newSnakePosition;
    }

    static snakeHitHimself(newSnakePosition: SnakePosition): boolean {
        // todo implement
        return false;
    }
}