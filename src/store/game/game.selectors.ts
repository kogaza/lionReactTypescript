import { AppState } from '../index';

export const getCells = (state: AppState) => state.game.cellsConfig;
export const getSelectedCell = (state: AppState) => state.game.selectedCell;
export const getPossibleMoves = (state: AppState) => state.game.possibleMoves;
export const getIsBlueMove = (state: AppState) => state.game.isBlueMove;
export const getLastUpdate = (state: AppState) => state.game.lastUpdate;
