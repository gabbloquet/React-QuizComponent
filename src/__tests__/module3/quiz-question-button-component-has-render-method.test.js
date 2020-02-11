import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let quizQuestionButtonComponentExists = false;
let QuizQuestionButton;
try {
  QuizQuestionButton = require('../../QuizQuestionButton.js.js').default;
  quizQuestionButtonComponentExists = true;
} catch (e) {
  quizQuestionButtonComponentExists = false;
}

let fs = require('fs');

describe('QuizQuestionButton.js Component', () => {
  it('has a render method that returns the correct HTML  @quiz-question-button-component-has-render-method', () => {
    assert(quizQuestionButtonComponentExists, "The QuizQuestionButton.js component hasn't been created yet.")

    let mock_prop = {button_text: 5}

    let quizQuestionButton;
    try {
      quizQuestionButton = shallow(<QuizQuestionButton button_text={mock_prop.button_text} />)
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestionButton.js component.")
    }

    let html = quizQuestionButton.html()
    let div = document.createElement('div')
    div.innerHTML = html

    assert(div.querySelector('li') != null, "We can't find an `li` tag in the QuizQuestionButton.js component's JSX.")
    assert(div.querySelectorAll('li button') != null, "We can't find a `button` tag that's a child of an `li` tag in the QuizQuestionButton.js component's JSX.")
    assert(div.querySelectorAll('li button').length == 1, "We found more than one `button` tag that's a child of an `li` tag in the QuizQuestionButton.js component's JSX, but we'd like for there to be exactly one.")
  })
})
