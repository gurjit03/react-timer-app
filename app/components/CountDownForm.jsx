var React = require('react');

var CountDownForm = React.createClass({
  onSubmit : function(e) {
    e.preventDefault();
    var totalTime = this.refs.totalTime;
    console.log('clicked',totalTime.value.match(/^[0-9]$/),totalTime.value)
    if(totalTime.value.match(/^[0-9]+$/)) {
      var seconds = totalTime.value;
      totalTime.value = '';
      this.props.onSetCountDown(Number(seconds));
    }
  },
  render : function() {
    return (
      <form ref="countdownForm" onSubmit={this.onSubmit} className="countdown-form">
        <input ref="totalTime" className="countdown-input" placeholder="enter time in seconds"/>
        <button className="button expanded">Start</button>
      </form>
    );
  }
});

module.exports = CountDownForm;
