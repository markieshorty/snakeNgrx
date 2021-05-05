import { GameState } from "../state/game.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getGameFeatureState = createFeatureSelector<GameState>("gameState");

export const getGameOver = createSelector(
  getGameFeatureState,
  (state) => state.gameOver
);

export const getSnakeHeadPosition = createSelector(
  getGameFeatureState,
  (state) => state.snakePosition
);

export const getApple = createSelector(
  getGameFeatureState,
  (state) => state.apple
);

export const getScore = createSelector(
  getGameFeatureState,
  (state) => state.score
);

export const getHighestScore = createSelector(
  getGameFeatureState,
  (state) => state.highestScore
);
