import configureStore from './index'
// Redux 应用的状态
export type RootState = ReturnType<typeof configureStore.getState>

// ReturnType：thunk action 的返回类型，项目中几乎都是返回 Promise