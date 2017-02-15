var React = require('react');

var Controls = React.createClass({
  propTypes : {
    countDownStatus : React.PropTypes.string.isRequired,
    onStatusChange : React.PropTypes.func.isRequired
  },
  statusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function() {
    var {countDownStatus} = this.props;
    var renderPauseStopButton = () => {
      console.log(countDownStatus);
      if(countDownStatus == 'started') {
        return <button className="button alert" onClick={this.statusChange('paused')}>Pause</button>
      }
      else if(countDownStatus == 'paused') {
        return <button className="button primary" onClick={this.statusChange('started')}>Start</button>
      }
    }
    return(
      <div className="controls">
      {renderPauseStopButton()}
      <button className="button default hollow" onClick={this.statusChange('stopped')}>Clear</button>
      </div>
    )
  }
})

module.exports = Controls;
