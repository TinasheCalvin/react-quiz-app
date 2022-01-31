import React, {useState} from 'react';
import Question from './Question'

function QuizCard() {

  const [startGame, setStartGame] = useState(false)
  const questions = [
    {
      id: 1,
      qstn: 'What is your favorite football club',
      answers: ['MUFC','RMFC','BVB','ACM']
    },
    {
      id: 2,
      qstn: 'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?',
      answers: ['Cabbage Patch Kids','Transformers','Care Bears','Rubik’s Cube']
    },
    {
      id: 3,
      qstn: 'What is the hottest planet in our Solar System?',
      answers: ['Earth','Pluto','Mars','Saturn']
    },
    {
      id: 4,
      qstn: 'In which country was the caesar salad invented?',
      answers: ['Italy','Portugal','Mexico','France']
    },
    {
      id: 5,
      qstn: 'How Many Hearts Does An Octopus Have?',
      answers: ['One','Two','Three','Four']
    }
  ]

  return (
      <div className="card">
        {/* <>
          <h2 className="card-title">Quizzical App</h2>
          <p className="card-text">Short description of the application</p>
          <button className="card-btn">Start Quiz</button>
        </> */}
        {
          questions.map(question => (
            <Question 
              key={question.id}
              question={question}
            />
          ))
        }
        <button className="card-btn start-btn">Check Answers</button>
      </div>
  )
}

export default QuizCard;
