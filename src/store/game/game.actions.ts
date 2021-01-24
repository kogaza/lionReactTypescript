import {
    START_GAME_LOADING,
    STOP_GAME_LOADING,
    SET_GAME_SETTINGS,
    StartGameLoadingAction,
    StopGameLoadingAction,
    GameSettingsToAdd,
    SetGameSettingsAction,
    CellConfig,
    SetCellsConfigAction,
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

export const setCellsConfigAction = (settings: CellConfig[]): SetCellsConfigAction => {
    return ({
        type: "SET_CELLS_CONFIG",
        payload: settings
    });
};
