import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

export default (initialState, middleWares = []) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleWares)
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
