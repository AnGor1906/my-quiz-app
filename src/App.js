import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cabinet from './Cabinet';
import Nav from './Nav';
import SelectQuiz from './SelectQuiz';
import HtmlQuiz from './HtmlQuiz';
import CssQuiz from './CssQuiz';
import JavaScriptQuiz from './JavaScriptQuiz';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/cabinet' exact component={Cabinet} />
        <Route path='/selectquiz' exact component={SelectQuiz} />
        <Route path='/htmlQuiz' exact component={HtmlQuiz} />
        <Route path='/cssQuiz' exact component={CssQuiz} />
        <Route path='/javaScriptQuiz' exact component={JavaScriptQuiz} />
        
        
      </div>
    </BrowserRouter>
  );
}
const Home = () => (
  <div className='home'>
    <h2 className='formainH'>ПРОЙДИ ТЕСТ И УЗНАЙ, НАСКОЛЬКО ТЫ ХОРОШ!</h2>
    <ul className='formain'>
      <li> в разделе <b> личный кабинет</b> можно зайти в учетную запись, либо зарегистрироваться.
      также можно продолжить без регистрации, однако в этом случае у вас не будет доступа
      к статистике</li>
      <li>в разделе <b> выбор теста</b> предоставлена возможность определить тему тестировнаия и уровень сложности</li>
      <li>за каждый правильный ответ вы получаете 1 балл, в конце каждого теста вы получаете свой общий балл.</li>
      <li>тест считается успешно пройденным, если вы верно ответили <b> более чем на 50%</b> вопросов</li>
    </ul>
    <div>УДАЧИ!</div> <div><Link to ='/selectquiz'  className='forlink'><li>пройти тест</li></Link></div>
  </div>
)
export default App;
