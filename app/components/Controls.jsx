var React = require('react');

var Controls = React.createClass({
  propTypes : {
    countDownStatus : React.PropTypes.string.isRequired
  },
  render: function() {
    var {countDownStatus} = this.props;
    var renderPauseStopButton = function() {
      if(countDownStatus == 'started') {
        return <button className="button alert">Pause</button>
      }else if(countDownStatus == 'paused'){
        return <button className="button primary">Stop</button>
      }
    }
    return(
      <div>
      {renderPauseStopButton()}
      <button className="button default hollow">Clear</button>
      </div>
    )
  }
})

module.exports = Controls;
