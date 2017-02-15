var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var CountDownForm = require('CountDownForm');

describe('Countdown form',() => {
  it('should exist',() => {
    expect(CountDownForm).toExist();
  });

  it('should be called when seconds are valid',() => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.totalTime.value = '109';
    console.log($el.find('.countdown-input'),$el.find('.countdown-input').val(),"askldfjalsdjflsajdf")

    TestUtils.Simulate.submit($el.find('.countdown-input'));

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not be called when seconds are in valid',() => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.totalTime.value = 'ggty';
    TestUtils.Simulate.submit($el.find('.countdown-input'));

    expect(spy).toNotHaveBeenCalled();
  });
})
