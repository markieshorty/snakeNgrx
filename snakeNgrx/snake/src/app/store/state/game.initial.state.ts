import { GameState } from "./game.state";
import { Snake } from "src/app/constants/snake.constants";
import { Apple } from "../models/apple.model";

export const initialGameState: GameState = {
  gameOver: false,
  score: 0,
  highestScore: 0,
  directionOfTravel: "R",
  apple: new Apple(),
  snakePosition: Snake.DefaultSnakePosition,
};
