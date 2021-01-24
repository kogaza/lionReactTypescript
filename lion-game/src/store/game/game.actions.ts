import {
    START_GAME_LOADING,
    STOP_GAME_LOADING,
    SET_GAME_SETTINGS,
    StartGameLoadingAction,
    StopGameLoadingAction,
    GameSettingsToAdd,
    SetGameSettingsAction
} from "./game.types";

export const startGameLoading = (): StartGameLoadingAction => ({
    type: START_GAME_LOADING,
});

export const stopGameLoading = (): StopGameLoadingAction => ({
    type: STOP_GAME_LOADING,
});

export const setGameSettings = (settings: GameSettingsToAdd): SetGameSettingsAction => {
    return ({
        type: SET_GAME_SETTINGS,
        payload: settings
    });
};
