import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
 
import estadoReduce from './estateDucks'
 
const rootReducer = combineReducers({
    estado: estadoReduce
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}

 