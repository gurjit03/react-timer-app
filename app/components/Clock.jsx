var React = require('react');

var Clock = React.createClass({
  getDefaultProps : function(totalSeconds) {
    totalSeconds : 0
  },
  propTypes : {
    totalSeconds : React.PropTypes.number
  },
  formatSeconds : function(total) {
    var seconds = total%60;
    var minutes = Math.floor(total/60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    return minutes +':'+seconds;
  },
  render : function() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-time">
        {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
})

module.exports = Clock;
