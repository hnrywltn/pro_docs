import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import resourceReducer from './resource';
import categoriesReducer from './category';
import projectReducer from './project';
import technologiesReducer from './technology';

const rootReducer = combineReducers({
  session,
  resources: resourceReducer,
  categories: categoriesReducer,
  projects: projectReducer,
  technologies: technologiesReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
