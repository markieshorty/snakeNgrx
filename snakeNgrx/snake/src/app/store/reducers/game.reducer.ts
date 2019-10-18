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

// the gameReducer takes gameActions and updates the state based on the action type and/or the payload of the action
export function gameReducer(state = intitialState, action: GameActions): GameState {
    // todo:  add more cases to the switch statement in order to update the 'directionOfTravel' property of the state object.
    console.log(action.type);

    switch (action.type) {
        case GameActionTypes.StartGame: {
            return {
                ...state,
                gameStarted: true
            }
        }
        case GameActionTypes.ReInit: {
            return {
                ...state,
                directionOfTravel: 'R',
                score: 0,
                gameStarted: false,
                gameOver: false,
                apple: new Apple(),
                snakePosition: Snake.DefaultSnakePosition
            }
        }
        case GameActionTypes.AnimationFrame: {
            // this action occurs every 75 ms via setInterval
            let newSnakePosition = new SnakePosition();
            // sorry - deep clone of object
            newSnakePosition.body = JSON.parse(JSON.stringify(state.snakePosition.body));

            // direction of travel is RIGHT so update X coordinate
            newSnakePosition.x = state.snakePosition.x + Snake.Width;
            newSnakePosition.y = state.snakePosition.y;

            // todo write code to handle three other travel directions

            // todo - updateBody method so that the body follows the head
            newSnakePosition = GameReducerHelper.updateBody(newSnakePosition, state);

            return {
                ...state,
                snakePosition: newSnakePosition
            }
        }
        default:
            return state;
    }
}