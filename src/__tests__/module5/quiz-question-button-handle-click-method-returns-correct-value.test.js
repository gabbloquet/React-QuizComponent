import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';

let quizQuestionButtonComponentExists = false;
let QuizQuestionButton;
try {
  QuizQuestionButton = require('../../QuizQuestionButton.js.js').default;
  quizQuestionButtonComponentExists = true;
} catch (e) {
  quizQuestionButtonComponentExists = false;
}

describe('QuizQuestionButton.js Component', () => {
  it('has a button with an onClick handler @quiz-question-button-handle-click-method-returns-correct-value', () => {
    assert(quizQuestionButtonComponentExists, "The QuizQuestionButton.js component hasn't been created yet.")

    let spy
    try {
      spy = sinon.spy(QuizQuestionButton.prototype, 'handleClick')
    } catch (e) {
      assert(false, "There's not a method named `handleClick()` that's being called on button click in the QuizQuestionButton.js class.")
    }

    let mockedPropHandler = sinon.spy()

    let quizQuestionButton
    try {
      quizQuestionButton = shallow(<QuizQuestionButton button_text='5' clickHandler={mockedPropHandler} />)
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestionButton.js component.")
    }

    quizQuestionButton.find('button').simulate('click')
    assert(spy.calledOnce, "There's not a method named `handleClick()` that's being called on button click in the QuizQuestionButton.js class.")
    assert(mockedPropHandler.calledOnce, "`this.props.clickHandler()` is not being called from the QuizQuestionButton.js component's `handleClick()` method.")
    assert(mockedPropHandler.args[0][0] != null && mockedPropHandler.args[0][0] == '5', "The correct `button_text` prop value was not passed to the `clickHandler` callback in QuizQuestionButton.js.")
  })
})
