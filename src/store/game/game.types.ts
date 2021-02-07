export interface GameSettingsToAdd {
    name: string;
}

export interface CellConfig {
    id: number;
    color: string;
    animal: string;
    teamName: string;
    isClickable: boolean;
    isSelected: boolean;
    isAtRiskOfAttack: boolean;
}

export const START_GAME_LOADING = 'START_GAME_LOADING';
export interface StartGameLoadingAction {
    type: typeof START_GAME_LOADING;
}

export const STOP_GAME_LOADING = 'STOP_GAME_LOADING';
export interface StopGameLoadingAction {
    type: typeof STOP_GAME_LOADING;
}

export const SET_GAME_SETTINGS = 'SET_GAME_SETTINGS';
export interface SetGameSettingsAction {
    type: typeof SET_GAME_SETTINGS;
    payload: GameSettingsToAdd;
}

export const SET_CELLS_CONFIG = 'SET_CELLS_CONFIG';
export interface SetCellsConfigAction {
    type: typeof SET_CELLS_CONFIG;
    payload: CellConfig[];
}

export const SET_SELECTED_CELL = 'SET_SELECTED_CELL';
export interface SetSelectedCellAction {
    type: typeof SET_SELECTED_CELL;
    payload: CellConfig;
}

export const SET_LAST_UPDATE = 'SET_LAST_UPDATE';
export interface SetLastUpdateAction {
    type: typeof SET_LAST_UPDATE;
    payload: number;
}

export const SET_IS_BLUE_MOVE = 'SET_IS_BLUE_MOVE';
export interface SetIsBlueMoveAction {
    type: typeof SET_IS_BLUE_MOVE;
    payload: boolean;
}

export const SET_POSSIBLE_MOVES = 'SET_POSSIBLE_MOVES';
export interface SetPossibleMovesAction {
    type: typeof SET_POSSIBLE_MOVES;
    payload: number[];
}

export type GameActionTypes =
    StartGameLoadingAction |
    StopGameLoadingAction |
    SetGameSettingsAction |
    SetCellsConfigAction |
    SetSelectedCellAction |
    SetLastUpdateAction |
    SetIsBlueMoveAction |
    SetPossibleMovesAction;
