import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { gameReducer } from "./game/game.reducer";

export const rootReducer = combineReducers({
    game: gameReducer,
})

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));
