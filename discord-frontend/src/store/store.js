import { composeWithDevTools } from "redux-devtools-extension"
import { combineReducers, configureStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const rootReducer = combineReducers({})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})

export default store
