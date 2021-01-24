export interface GameSettingsToAdd {
    name: string;
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

export type GameActionTypes =
    StartGameLoadingAction |
    StopGameLoadingAction |
    SetGameSettingsAction;
