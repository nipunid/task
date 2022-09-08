import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Header /> 
       <ToastContainer />
        <Routes>
         <Route exact path="/" component={Home} />
         <Route path='/add' component={AddEdit} />
         <Route path='/update:id' component={AddEdit} />
         <Route path='/view:id' component={View} />
         <Route path='/about' component={About} />
        </Routes> 
     </div>
    </BrowserRouter>
  );
}

export default App;
