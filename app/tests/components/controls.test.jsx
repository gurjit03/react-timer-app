var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls',() => {
  it('should exist',() => {
    var controls = TestUtils.renderIntoDocument(<Controls countDownStatus={'started'} />);
    expect(controls).toExist();
  });

  it('should be having a pause button',() => {
    var controls = TestUtils.renderIntoDocument(<Controls countDownStatus={'started'} />);
    var el = $(ReactDOM.findDOMNode(controls));
    var pauseButton = el.find('button:contains(Pause)');
    expect(pauseButton.length).toBe(1);
  })
    

  it('should be having a stop button',() => {
    var controls = TestUtils.renderIntoDocument(<Controls countDownStatus={'paused'} />);
    var el = $(ReactDOM.findDOMNode(controls));
    var stopButton = el.find('button:contains(Stop)');
    expect(stopButton.length).toBe(1);
  })
});
