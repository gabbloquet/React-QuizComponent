import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let babylon = require("babylon");

describe('QuizQuestionButton.js Component', () => {
  it('has a QuizQuestionButton.js class that extends Component @quiz-question-button-component-has-quiz-question-button-class', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../QuizQuestionButton.js.js').toString();
    } catch (e) {
      assert(false, "The QuizQuestionButton.js.js file hasn't been created yet.")
    }

    let ast = babylon.parse(file, { sourceType: "module", plugins: ["jsx"] })

    let class_declaration_count = 0;

    ast['program']['body'].forEach(element => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'QuizQuestion') {
          if (element.superClass.name == 'Component') {
            
          } else {
            assert(false, "We found a class named QuizQuestionButton.js, but it doesn't extend the Component class.")
          }
        }
        class_declaration_count = class_declaration_count + 1
      }
    })

    assert(class_declaration_count > 0, "We couldn't find any class declarations.")
    assert(class_declaration_count == 1, "We found more than one class declaration, but there's only supposed to be one class named QuizQuestionButton.js.")
  })

  it('exports the QuizQuestionButton.js class as default @quiz-question-button-component-has-quiz-question-button-class', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../QuizQuestionButton.js.js').toString();
    } catch (e) {
      assert(false, "The QuizQuestionButton.js.js file hasn't been created yet.")
    }

    let re = /\nexport default QuizQuestionButton.js\;*\s*$/g
    let match = file.match(re)
    assert(match != null && match.length > 0, "We couldn't find `export default QuizQuestionButton.js` at the end of your QuizQuestionButton.js.js file.")
  })
})
