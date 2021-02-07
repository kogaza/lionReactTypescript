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
    SetIsBlueMoveAction,
    SET_IS_BLUE_MOVE,
    SetPossibleMovesAction,
    SET_POSSIBLE_MOVES,
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

export const setCellsConfig = (settings: CellConfig[]): SetCellsConfigAction => {
    return ({
        type: SET_CELLS_CONFIG,
        payload: settings
    });
};

export const setSelectedCell = (cell: CellConfig): SetSelectedCellAction => {
    return ({
        type: SET_SELECTED_CELL,
        payload: cell,
    });
};

export const setLastUpdate = (value: number): SetLastUpdateAction => ({
    type: SET_LAST_UPDATE,
    payload: value,
  });

export const setIsBlueMove = (value: boolean): SetIsBlueMoveAction => ({
    type: SET_IS_BLUE_MOVE,
    payload: value,
  });

export const setPossibleMoves = (value: number[]): SetPossibleMovesAction => ({
    type: SET_POSSIBLE_MOVES,
    payload: value,
  });
