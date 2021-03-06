var React = require('react');
var {Link,IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">

      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/timer" activeClassName="active-link">Timer</IndexLink>
            </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">CountDown</Link>
          </li>

        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li>
            Created by <a href="http://www.gurjitmehta.wordpress.com" target="_blank">Gurjit Singh</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Navigation;
