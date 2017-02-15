var React = require('react')
var Clock = require('Clock')
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState : function() {
    return {
      seconds : 0,
      countDownStatus : 'stopped'
    }
  },
  componentDidUpdate(prevProps,prevState) {
    console.log(this.state.countDownStatus,"current state",prevState,"prevState",)
    if(this.state.countDownStatus !== prevState.countDownStatus) {
      switch(this.state.countDownStatus) {
        case 'started' :
        this.startTimer();
        break;
        case 'stopped' :
        this.setState({seconds : 0});
        case 'paused' :
        clearInterval(this.timerInterval);
        break;
      }
    }
  },
  startTimer : function() {
    this.timerInterval = setInterval(() => {
      var time = this.state.seconds - 1;
      if(time == 0) {
        this.setState({
          countDownStatus : 'stopped'
        })
      }
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
  handleStatusChange : function(newStatus) {
    this.setState({countDownStatus : newStatus})
  },
  render: function() {
    var status = this.state.countDownStatus;
    var renderConditional = () => {
      if(status == 'stopped') {
        return <CountDownForm onSetCountDown={this.handleCountDown}/>
      }else {
        return <Controls countDownStatus={this.state.countDownStatus} onStatusChange={this.handleStatusChange}/>
      }
    }
    return (
      <div className="countdown-wrapper">
        <Clock totalSeconds={this.state.seconds}/>
        {renderConditional()}
      </div>
    );
  }
})

module.exports = Countdown;
