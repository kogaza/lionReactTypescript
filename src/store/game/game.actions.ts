import {
    START_GAME_LOADING,
    STOP_GAME_LOADING,
    SET_GAME_SETTINGS,
    SET_LAST_UPDATE,
    SET_CELLS_CONFIG,
    SET_SELECTED_CELL,
    StartGameLoadingAction,
    StopGameLoadingAction,
    GameSettingsToAdd,
    SetGameSettingsAction,
    CellConfig,
    SetCellsConfigAction,
    SetLastUpdateAction,
    SetSelectedCellAction,
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
        type: SET_CELLS_CONFIG,
        payload: settings
    });
};

export const setSelectedCellAction = (cell: CellConfig): SetSelectedCellAction => {
    return ({
        type: SET_SELECTED_CELL,
        payload: cell,
    });
};

export const setLastUpdate = (value: number): SetLastUpdateAction => ({
    type: SET_LAST_UPDATE,
    payload: value,
  });
