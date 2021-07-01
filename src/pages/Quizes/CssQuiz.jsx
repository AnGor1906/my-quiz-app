import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

function CSSQuiz() {
    const questions =[
      {
        questionText:" Как можно изменить правый внешний отступ у элемента?",
        answerOptions: [
          {answerText:"padding-right", isCorrect:false}, {answerText:"indent", isCorrect:false},{answerText:"border-right", isCorrect:false}, {answerText:"margin-right", isCorrect:true}
        ]
      },
      {
        questionText:" Как выбрать элемент с id ='block'?",
        answerOptions: [
          {answerText:"block", isCorrect:false},{answerText:".block", isCorrect:false},{answerText:"#block", isCorrect:true},{answerText:"*block", isCorrect:false}
        ]
      },
      {
        questionText:"Укажите правильный синтаксис CSS для выделения всех элементов <p> жирным шрифтом?",
        answerOptions: [
          {answerText:'p {font-weight:bold;}', isCorrect:true}, {answerText:'<p style="text-size:bold;">', isCorrect:false} , {answerText:'<p style="font-size:bold;">', isCorrect:false}, {answerText:'p {text-size:bold;}', isCorrect:false}
        ]
      },
      {
        questionText:"Как убрать подчеркивание у гиперссылки?",
        answerOptions: [
          {answerText:'a {decoration:no-underline;}', isCorrect:false}, {answerText:'a {text-decoration:none;}', isCorrect:true},{answerText:'a {underline:none;}', isCorrect:false},{answerText:'a {text-decoration:no-underline;}', isCorrect:false}  
        ]
      },
      {
        questionText:"Как составить список, в котором маркеры элементов представлены ввиде однотонных квадратов?",
        answerOptions: [ {answerText:'list-type: square', isCorrect:false},{answerText:'list: square', isCorrect:false},{answerText:'list-type-style: square', isCorrect:false}
        ]
      },
    ]
  const [currentQuestion, setCurrentQuestion]=useState(0)
  const[score, setScore]=useState(0)
  const[showResult, setShowResult]=useState(false)
  const handleOptionAnswerClick =(isCorrect)=>{
    if (isCorrect){
      setScore(score+1);
    }
  const nextQuestuon = currentQuestion + 1
  if (nextQuestuon<questions.length)
  {
    setCurrentQuestion(nextQuestuon)
  }
  else{
    setShowResult(true)
  }}
  const tryagain=()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }
  const widthPercentage=currentQuestion / questions.length * 100
  return(
  <div className="forrandomquizz">
  {showResult
  ? <div className="section__score">
     <div  className="section__score_one" > Правильных ответов <b> {score} </b> из {questions.length} 
    <div> {score/questions.length>0.5
      ?
      <div className="congrats">Поздравляем! Тест на знание CSS пройден успешно</div>
      :
      <div className='fail'>К сожалению, недостаточно правильных ответов. Вам стоит глубже изучить CSS</div>
  
      }</div>
      </div>
     <button className="lookAnswers__btn"> <Link to ='/cabinet'className='forlink'>Посмотреть ответы</Link></button>
     <button className="tryAgain__btn" onClick={tryagain}>Попробовать еще раз</button>
   </div>
   :
  <div className="quizz"> <div className="for-progress">
  <div className='progress-bar'
        style={{ width: `${widthPercentage}%` }}></div></div>
    <div className="question__section">
      <div className="question__count">
        <span>Вопрос <b> {currentQuestion + 1} </b></span> из {questions.length}
      </div>
      <div className="question__text">{questions[currentQuestion].questionText}</div>
    </div>
    <div className="answer__section">
      {questions[currentQuestion].answerOptions.map(
        item=>
          <button onClick={()=>handleOptionAnswerClick(item.isCorrect)} >{item.answerText}</button> 
      )}
    </div>
  </div>} 
  </div>
  )
      }
export default CSSQuiz;