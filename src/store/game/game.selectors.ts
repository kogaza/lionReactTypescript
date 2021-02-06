import { AppState } from '../index';

export const getCells = (state: AppState) => state.game.cellsConfig;
export const getSelectedCell = (state: AppState) => state.game.selectedCell;
export const getLastUpdate = (state: AppState) => state.game.lastUpdate;
