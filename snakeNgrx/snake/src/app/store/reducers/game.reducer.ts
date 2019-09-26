import { GameState, SnakePosition } from '../state/game.state';
import { initialGameState } from '../state/game.initial.state';
import { GameActionTypes } from '../actions/game.actions';
import { GameActions } from '../actions/game.actions';
import { Directions } from 'src/app/constants/directions.constants';
import { ArenaDimensions } from 'src/app/constants/arena-dimensions.constants';

const intitialState: GameState = initialGameState;


export function gameReducer(state = intitialState, action: GameActions): GameState {
    switch (action.type) {
        case GameActionTypes.IncrementScore: {
            return {
                ...state,
                score: state.score++
            }
        }
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
            let newSnakeHeadPosition = new SnakePosition();
            newSnakeHeadPosition.body = state.snakeHeadPosition.body;

            if (state.directionOfTravel === Directions.RIGHT) {
                newSnakeHeadPosition.x = state.snakeHeadPosition.x + 5;
                newSnakeHeadPosition.y = state.snakeHeadPosition.y;
            }
            else if (state.directionOfTravel === Directions.DOWN) {
                newSnakeHeadPosition.x = state.snakeHeadPosition.x;
                newSnakeHeadPosition.y = state.snakeHeadPosition.y + 5;
            }
            else if (state.directionOfTravel === Directions.UP) {
                newSnakeHeadPosition.x = state.snakeHeadPosition.x;
                newSnakeHeadPosition.y = state.snakeHeadPosition.y - 5;
            }
            else if (state.directionOfTravel === Directions.LEFT) {
                newSnakeHeadPosition.x = state.snakeHeadPosition.x - 5;
                newSnakeHeadPosition.y = state.snakeHeadPosition.y;
            }

            let gameOver = false;
            if (newSnakeHeadPosition.x < 0 ||
                newSnakeHeadPosition.x > ArenaDimensions.WIDTH ||
                newSnakeHeadPosition.y < 0 ||
                newSnakeHeadPosition.y > ArenaDimensions.HEIGHT) {
                gameOver = true;
            }

            newSnakeHeadPosition = updateBody(newSnakeHeadPosition, state);

            return {
                ...state,
                snakeHeadPosition: newSnakeHeadPosition,
                gameOver: gameOver
            }
        }
        default:
            return state;
    }
}

function updateBody(newSnakeHeadPosition: SnakePosition, state: GameState) {
    // add item to front of array with old head position
    newSnakeHeadPosition.body.unshift({ x: state.snakeHeadPosition.x, y: state.snakeHeadPosition.y });
    // remove last item of the array
    newSnakeHeadPosition.body.pop();

    return newSnakeHeadPosition;
}