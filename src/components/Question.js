import React from 'react';

function Question({question}) {
  return (
    <div className='quiz-qstns'>
        <p className='question'>{question.qstn}</p>
        <div className='btn-group'>
        {
          (question.answers).map((answer,index) => (
            <button key={index} className='btn'>{answer}</button>
          ))
        }
        </div>
    </div>
  )
}

export default Question;
