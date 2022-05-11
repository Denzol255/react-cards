import { cardReducer } from './cardReducer';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({card: cardReducer,})

export type RootState = ReturnType<typeof rootReducer>