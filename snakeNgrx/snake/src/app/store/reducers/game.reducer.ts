import { GameState } from '../state/game.state';
import { initialGameState } from '../state/game.initial.state';
import { GameActionTypes } from '../actions/game.actions';
import { GameActions } from '../actions/game.actions';
import { Directions } from 'src/app/constants/directions.constants';
import { ArenaDimensions } from 'src/app/constants/arena-dimensions.constants';
import { Snake } from 'src/app/constants/snake.constants';
import { GameReducerHelper } from '../reducer-helpers/game-reducer.helper';
import { Apple } from '../models/apple.model';
import { SnakePosition } from '../models/snake-position.model';

const intitialState: GameState = initialGameState;

export function gameReducer(state = intitialState, action: GameActions): GameState {
    switch (action.type) {
        case GameActionTypes.StartGame: {

            return {
                ...state,
                gameStarted: true
            }
        }
        case GameActionTypes.ReInit: {
            return {
                ...intitialState
            }
        }
        case GameActionTypes.MoveDown: {
            return {
                ...state,
                directionOfTravel:
                    state.directionOfTravel !== Directions.UP ? Directions.DOWN : Directions.UP
            };
        }
        case GameActionTypes.MoveUp: {
            return {
                ...state,
                directionOfTravel:
                    state.directionOfTravel !== Directions.DOWN ? Directions.UP : Directions.DOWN
            }
        }
        case GameActionTypes.MoveRight: {
            return {
                ...state,
                directionOfTravel:
                    state.directionOfTravel !== Directions.LEFT ? Directions.RIGHT : Directions.LEFT
            }
        }
        case GameActionTypes.MoveLeft: {
            return {
                ...state,
                directionOfTravel:
                    state.directionOfTravel !== Directions.RIGHT ? Directions.LEFT : Directions.RIGHT
            }
        }
        case GameActionTypes.AnimationFrame: {
            let newSnakePosition = new SnakePosition();
            newSnakePosition.body = JSON.parse(JSON.stringify(state.snakePosition.body));

            if (state.directionOfTravel === Directions.RIGHT) {
                newSnakePosition.x = state.snakePosition.x + Snake.Width;
                newSnakePosition.y = state.snakePosition.y;
            }
            else if (state.directionOfTravel === Directions.DOWN) {
                newSnakePosition.x = state.snakePosition.x;
                newSnakePosition.y = state.snakePosition.y + Snake.Width;
            }
            else if (state.directionOfTravel === Directions.UP) {
                newSnakePosition.x = state.snakePosition.x;
                newSnakePosition.y = state.snakePosition.y - Snake.Width;
            }
            else if (state.directionOfTravel === Directions.LEFT) {
                newSnakePosition.x = state.snakePosition.x - Snake.Width;
                newSnakePosition.y = state.snakePosition.y;
            }

            let newScore = state.score;
            let newApple = state.apple;
            let justAte = false;

            if (GameReducerHelper.snakeEatingApple(newSnakePosition, state.apple)) {
                newScore++;
                justAte = true;
                newApple = new Apple();
            }

            let gameOver = false;
            if (newSnakePosition.x < 0 ||
                newSnakePosition.x > (ArenaDimensions.WIDTH - Snake.Width) ||
                newSnakePosition.y < 0 ||
                newSnakePosition.y > (ArenaDimensions.HEIGHT - Snake.Width)) {
                gameOver = true;
            }

            newSnakePosition = GameReducerHelper.updateBody(newSnakePosition, state, justAte);

            return {
                ...state,
                snakePosition: newSnakePosition,
                gameOver: gameOver,
                score: newScore,
                apple: newApple
            }
        }
        default:
            return state;
    }
}