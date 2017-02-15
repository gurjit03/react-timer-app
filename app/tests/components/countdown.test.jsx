var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Countdown = require('Countdown');

describe('countdown',() => {
  it('should exist',() => {
    expect(Countdown).toExist();
  })

  describe('handleCountDown',() => {
      it('should set state to started and count down',(done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.handleCountDown(10);

        expect(countdown.state.seconds).toBe(10);
        expect(countdown.state.countDownStatus).toBe('started');

        setTimeout(()=> {
          expect(countdown.state.seconds).toBe(9);
          done();
        },1005)
      });

      it('should set count down to 0',(done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.handleCountDown(1);

        setTimeout(()=> {
          expect(countdown.state.seconds).toBe(0);
          done();
        },3005)
      })
  })
})
