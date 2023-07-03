import React from "react";
//o provider deixa o store (tambem importado) disponivel para toda a aplicação
import { Provider } from "react-redux";
//BrowserRouter
import { BrowserRouter } from "react-router-dom";
import Global from "./styles/global";
import {Routesa} from './routes';
import Header from './components/header';
import './config/reactotronconfig';
import {ToastContainer}from 'react-toastify';

import store from "./store";

//import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 

      <Header/>
      <Routesa/>
      <Global/>
      <ToastContainer autoClose={3000}/>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
