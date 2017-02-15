var React = require('react')
var Clock = require('Clock')
var CountDownForm = require('CountDownForm');

var Countdown = React.createClass({
  getInitialState : function() {
    return {
      seconds : 0,
      countDownStatus : 'stopped'
    }
  },
  componentDidUpdate(prevProps,prevState) {
    if(this.state.countDownStatus !== prevState.countDownStatus) {
      switch(this.state.countDownStatus) {
        case 'started' :
        this.startTimer();
      }
    }
  },
  startTimer : function() {
    this.timerInterval = setInterval(() => {
      var time = this.state.seconds - 1;
      this.setState({
        seconds : time >= 0 ? time : 0
      })
    },1000)
  },
  handleCountDown : function(seconds) {
    console.log(seconds,'handle count down')
    this.setState({
      seconds : seconds,
      countDownStatus : 'started'
    })
  },
  render: function() {
    return (
      <div>
        <Clock totalSeconds={this.state.seconds}/>
        <CountDownForm onSetCountDown={this.handleCountDown}/>
      </div>
    );
  }
})

module.exports = Countdown;
