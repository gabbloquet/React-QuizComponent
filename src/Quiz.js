import React, { useState } from 'react';

let quizData = require('./quiz_data.json');

const Quiz = (props) => {
  const [quiz_position] = useState(1);

  return (
    <div className="QuizQuestion">
      {quizData.quiz_questions[quiz_position].instruction_text}
    </div>
  );
};

export default Quiz;
