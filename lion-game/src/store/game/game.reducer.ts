import { GameActionTypes, SET_GAME_SETTINGS, START_GAME_LOADING, STOP_GAME_LOADING } from "./game.types";

export interface GameState {
    isLoading: boolean;
    settings: {
        name: string;
    }
}

export const initialGameState = {
    isLoading: false,
    settings: {
        name: '',
    }
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

        default:
            return state;
    }
}
