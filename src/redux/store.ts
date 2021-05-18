import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools());

export type RootStore = ReturnType<typeof rootReducer>;
