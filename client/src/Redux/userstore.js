
import { configureStore,applyMiddleware,compose,
  combineReducers,
} from '@reduxjs/toolkit';
  import reducer from './reducertype'
  import { thunk } from 'redux-thunk';
  import logger from 'redux-logger'
  
const rootReducer = combineReducers({recorddata:reducer});

const middleware = applyMiddleware(thunk);

const userstore = configureStore({
  reducer: rootReducer
})
/*
const composeWithDevTools = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedMiddleWare = composeWithDevTools(middleware)

const userstore = configureStore({
  reducer: rootReducer,
  middleware: composedMiddleWare,
  devTools: 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

*/
  
export default userstore

