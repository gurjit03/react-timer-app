var React = require('react')
var Clock = require('Clock')
var CountDownForm = require('CountDownForm');

var Countdown = React.createClass({
  getInitialState : function() {
    return {seconds : 0}
  },
  handleCountDown : function(seconds) {
    console.log(seconds,'handle count down')
    this.setState({
      seconds : seconds
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
