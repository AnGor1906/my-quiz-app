import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

function HTMLQuizz() {
  const questions = [
    {
      questionText: "Какой HTML-элемент предназначен для определения нижнего колонтитула документа или раздела?",
      answerOptions: [{ answerText: "bottom", isCorrect: false }, { answerText: "section", isCorrect: false }, { answerText: "article", isCorrect: false }, { answerText: "footer", isCorrect: true }
      ]
    },
    {
      questionText: "Укажите тег позволяющий определить нумерованный список",
      answerOptions: [{ answerText: "list", isCorrect: false }, { answerText: "ul", isCorrect: false }, { answerText: "ol", isCorrect: true }, { answerText: "li", isCorrect: false }
      ]
    },
    {
      questionText: " Выберите HTML-элемент для создания заголовка с высшим приоритетом:",
      answerOptions: [{ answerText: "h1", isCorrect: true }, { answerText: "a6", isCorrect: false }, { answerText: "head", isCorrect: false }, { answerText: "heading", isCorrect: false }
      ]
    },
    {
      questionText: " Какой атрибут используется в HTML, чтобы указать, что поле ввода должно быть заполнено?",
      answerOptions: [{ answerText: "formvalidate", isCorrect: false }, { answerText: "validate", isCorrect: false }, { answerText: "required", isCorrect: true }, { answerText: "placeholder", isCorrect: false }
      ]
    },
    {
      questionText: "  Какой тег нужно использовать, чтобы пробелы не вырезались?",
      answerOptions: [{ answerText: "<code>", isCorrect: false }, { answerText: "<address>", isCorrect: false }, { answerText: "<pre>", isCorrect: true }, { answerText: "<span>", isCorrect: false }
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
          <div className="section__score_one" > Правильных ответов<b> {score} </b> из {questions.length}
            <div> {score / questions.length > 0.5
              ?
              <div className="congrats">Поздравляем! Тест на знание HTML пройден успешно</div>
              :
              <div className='fail'>К сожалению, недостаточно правильных ответов. Вам стоит глубже изучить HTML </div>
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
              <span>Вопрос <b> {currentQuestion + 1} </b>  </span>из {questions.length}
            </div>
            <div className="question__text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map(
              item =>
                <button classname='answerbtn' onClick={() => handleOptionAnswerClick(item.isCorrect)} >{item.answerText}</button>
            )}
          </div>
        </div>}
    </div>
  )
}
export default HTMLQuizz;