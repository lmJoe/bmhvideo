import React from 'react';
import logo from './logo.svg';
import store from './store/index';
import Welcome from './components/welcome';
import Detail from './common/detail/detail'
import Author from './common/author/author';
import { Provider } from "react-redux";
// const store = configureStore()
import { BrowserRouter,Route,Navigate,Routes } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Welcome/>}></Route>
          {/* <div className="App">
            <header className="App-header">
              <Welcome message="hello world"></Welcome>
            </header>
          </div> */}
          <Route path='/welcome' element={Welcome}></Route>
          <Route path='/detail/:id' element={Detail}></Route>
          <Route path='/author/:id' element={Author}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
