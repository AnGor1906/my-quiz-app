import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

function JavaScriptQuiz() {
  const questions = [
    {
      questionText: " Что вернет следующий код: Boolean (10> 9)?",
      answerOptions: [
        { answerText: "1", isCorrect: false }, { answerText: "nan", isCorrect: false }, { answerText: "false", isCorrect: false }, { answerText: "true", isCorrect: true }
      ]
    },
    {
      questionText: " Какой оператор используется для присвоения значения переменной?",
      answerOptions: [
        { answerText: "**", isCorrect: false }, { answerText: "+", isCorrect: false }, { answerText: "=", isCorrect: true }, { answerText: "==", isCorrect: false }
      ]
    },
    {
      questionText: " Как сделать многострочный комментарий?",
      answerOptions: [
        { answerText: '/*Это многострочный комментарий*/', isCorrect: true }, { answerText: "<Это многострочный комментарий>", isCorrect: false }, { answerText: " // Это многострочный комментарий//", isCorrect: false }, { answerText: "<!-- Это многострочный комментарий -->", isCorrect: false }
      ]
    },
    {
      questionText: " Как начать цикл WHILE?",
      answerOptions: [
        { answerText: 'while (i <= 7)', isCorrect: true }, { answerText: "while (i <= 7; i++)", isCorrect: false }, { answerText: "  while (i=0; i <= 7; i--)", isCorrect: false }, { answerText: "while i = 1 to 7", isCorrect: false }
      ]
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleOptionAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestuon = currentQuestion + 1

    if (nextQuestuon < questions.length) {
      setCurrentQuestion(nextQuestuon)
    }
    else {
      setShowResult(true)
    }
  }
  const tryagain = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }
  const widthPercentage = currentQuestion / questions.length * 100
  return (
    <div className="forrandomquizz">
      {showResult
        ? <div className="section__score">
          <div className="section__score_one" > Правильных ответов <b>{score} </b>из {questions.length}
            <div> {score / questions.length > 0.5
              ?
              <div className="congrats">Поздравляем! Тест на знание JavaScript пройден успешно</div>
              :
              <div> <div className='fail'>К сожалению, недостаточно правильных ответов. Вам стоит глубже изучить JavaScript</div>
                <div>
                </div>
              </div>
            }</div>
          </div>
          <button className="lookAnswers__btn"> <Link to='/cabinet' className='forlink'>Посмотреть ответы</Link></button>
          <button className="tryAgain__btn" onClick={tryagain}>Попробовать еще раз</button>
        </div>
        :
        <div className="quizz"> <div className="for-progress">
          <div className='progress-bar'
            style={{ width: `${widthPercentage}%` }}></div></div>
          <div className="question__section">
            <div className="question__count">
              <span>Вопрос <b>{currentQuestion + 1} </b> </span> из {questions.length}
            </div>
            <div className="question__text">{questions[currentQuestion].questionText}</div>
          </div>

          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map(
              item =>
                <button onClick={() => handleOptionAnswerClick(item.isCorrect)} >{item.answerText}</button>
            )}
          </div>
        </div>}
    </div>
  )
}
export default JavaScriptQuiz;
