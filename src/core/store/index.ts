import { createStore, compose } from 'redux'
import { Reducers } from './reducers'


declare var window: any
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const Store = createStore(Reducers, composeEnhancers())