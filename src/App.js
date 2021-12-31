import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabinet from './Components/Cabinet';
import Nav from './Components/Nav/Nav';
import SelectQuiz from './Components/SelectQuiz/SelectQuiz';
import HtmlQuiz from './Components/Quizes/HtmlQuiz';
import CssQuiz from './Components/Quizes/CssQuiz';
import JavaScriptQuiz from './Components/Quizes/JavaScriptQuiz';
import Home from './Components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/'  component={Home} />
        <Route exact path='/cabinet'  component={Cabinet} />
        <Route exact path='/selectquiz'  component={SelectQuiz} />
        <Route exact path='/htmlQuiz'  component={HtmlQuiz} />
        <Route exact path='/cssQuiz'  component={CssQuiz} />
        <Route exact path='/javaScriptQuiz'  component={JavaScriptQuiz} />


      </div>
    </BrowserRouter>
  );
}

export default App;
