import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer)
export default store;



// import { createStore } from 'redux';
// import * as actionCreators from './actionCreators.js';
// import * as constants from './constants.js';
// import reducer from './reducer';
// const store = createStore(reducer)
// export {store,actionCreators,constants};