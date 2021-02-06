import { defaultCell } from "../../utils/defaultCell";
import { defaultCellsConfig } from "../../utils/defaultCellsConfig";
import {
    GameActionTypes,
    CellConfig,
    SET_GAME_SETTINGS,
    START_GAME_LOADING,
    STOP_GAME_LOADING,
    SET_CELLS_CONFIG,
    SET_LAST_UPDATE,
    SET_SELECTED_CELL,
    SET_IS_BLUE_MOVE
} from "./game.types";

export interface GameState {
    isLoading: boolean;
    isBlueMove: boolean;
    settings: {
        name: string;
    };
    cellsConfig: CellConfig[];
    selectedCell: CellConfig;
    lastUpdate: number;
}

export const initialGameState = {
    isLoading: false,
    isBlueMove: false,
    settings: {
        name: '',
    },
    cellsConfig: defaultCellsConfig,
    selectedCell: defaultCell,
    lastUpdate: 0,
}

export const gameReducer = (state: GameState = initialGameState, action: GameActionTypes) => {
    switch (action.type) {
        case START_GAME_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case STOP_GAME_LOADING: {
            return {
                ...state,
                isLoading: false,
            }
        }

        case SET_GAME_SETTINGS: {
            return {
                ...state,
                settings: action.payload,
            }
        }

        case SET_CELLS_CONFIG: {
            return {
                ...state,
                cellsConfig: action.payload,
            }
        }

        case SET_SELECTED_CELL: {
            return {
                ...state,
                selectedCell: action.payload,
            }
        }

        case SET_LAST_UPDATE: {
            return {
                ...state,
                lastUpdate: action.payload,
            };
        }

        case SET_IS_BLUE_MOVE: {
            return {
                ...state,
                isBlueMove: action.payload,
            };
        }

        default:
            return state;
    }
}
