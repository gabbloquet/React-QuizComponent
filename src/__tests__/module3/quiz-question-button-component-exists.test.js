let fs = require('fs');
import { assert } from 'chai';

describe('QuizQuestionButton.js Component', () => {
  it('exists @quiz-question-button-component-exists', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../QuizQuestionButton.js.js').toString();
    } catch (e) {
      assert(false, "The QuizQuestionButton.js.js file hasn't been created yet.")
    }
  });
})
