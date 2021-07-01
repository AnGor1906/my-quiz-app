import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import './SelectQuiz.css';

function SelectQuiz(){
    const breakpoints=[
        {width:500, itemsToShow:1 },
        {width:768, itemsToShow:3 },
        {width:1200, itemsToShow:4 }
    ]
    return(<div className='select-buttons'>
        <div className="select-text">Выберите тему, знание которой вы бы хотели проверить
       
         </div>
        
        <Carousel breakPoints={breakpoints}>
           <Link to ='/htmlQuiz'  className='btnforlink'><li>HTML for BEGINNERS</li></Link>
           <Link to ='/htmlQuiz'  className='btnforlink'><li>HTML INTERMEDIATE</li></Link>
            <Link to ='/cssQuiz'  className='btnforlink'><li>CSS for EXPERTS</li></Link>
            <Link to ='/javaScriptQuiz'  className='btnforlink'><li>JAVASCRIPT for BEGINNERS</li></Link>
            <Link to ='/htmlQuiz'  className='btnforlink'><li>HTML intermediate</li></Link>
            <Link to ='/cssQuiz'  className='btnforlink'><li>CSS for experts</li></Link>
            <Link to ='/javaScriptQuiz'  className='btnforlink'><li>JavaScript intermediate </li></Link>
            <Link to ='/cssQuiz'  className='btnforlink'><li>CSS for experts</li></Link>
            <Link to ='/javaScriptQuiz'  className='btnforlink'><li>JavaScript intermediate</li></Link>
            <Link to ='/htmlQuiz'  className='btnforlink'><li>HTML for experts</li></Link>
            <Link to ='/cssQuiz'  className='btnforlink'><li>CSS for experts</li></Link>
            <Link to ='/javaScriptQuiz'  className='btnforlink'><li>JavaScript</li></Link>
            
        </Carousel>
         <ol className="select-text2">
            <li className="li_select-text2">Тесты Beginners включают вапросы начального уровня сложности</li>
            <li className="li_select-text2">Тесты For Experts включают до 50 не только теоретическич вопросов, но и требущих навыков написания кода</li>
            <li className="li_select-text2">Тесты Intermediate предназначены как для новичков, так и для более опытных пользователей</li>
        </ol>
    </div>)
}
export default SelectQuiz