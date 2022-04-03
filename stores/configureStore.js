import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = () => {
  // const logger = createLogger();
  const middleWares = [thunk];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware([]))
      : composeWithDevTools(applyMiddleware(...middleWares));
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  // debug 모드일 경우 redux 디버깅 시 조금 더 자세한 설명이 나오게 함.
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
