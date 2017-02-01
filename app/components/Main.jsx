var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
        <Navigation />
        <p>Main rendered</p>
        {props.children}
      </div>
  );
}
module.exports = Main;
