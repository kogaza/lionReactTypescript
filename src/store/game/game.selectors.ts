import { AppState } from '../index';

export const getCells = (state: AppState) => state.game.cellsConfig;
