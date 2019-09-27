import { GameState } from '../state/game.state';
import { Snake } from 'src/app/constants/snake.constants';
import { Apple } from '../models/apple.model';
import { SnakePosition } from '../models/snake-position.model';

export class GameReducerHelper {
    static snakeEatingApple(snakeHeadPosition: SnakePosition, apple: Apple): boolean {
        let distanceX = Math.abs(snakeHeadPosition.x - apple.x);
        let distanceY = Math.abs(snakeHeadPosition.y - apple.y);

        if (distanceX < Snake.Width && distanceY < Snake.Width) {
            return true;
        }

        return false;
    }

    static updateBody(newSnakePosition: SnakePosition, state: GameState, justAte: boolean) {
        // add item to front of array with old head position
        newSnakePosition.body.unshift({ x: state.snakePosition.x, y: state.snakePosition.y });
        // remove last item of the array
        if (!justAte) {
            newSnakePosition.body.pop();
        }

        return newSnakePosition;
    }

    static snakeHitHimself(newSnakePosition: SnakePosition): boolean {
        let result = false;
        newSnakePosition.body.forEach(bodyCell => {
            let distanceX = Math.abs(newSnakePosition.x - bodyCell.x);
            let distanceY = Math.abs(newSnakePosition.y - bodyCell.y);

            if (distanceX < Snake.Width && distanceY < Snake.Width) {
                result = true;
            }
        });
        return result;
    }
}