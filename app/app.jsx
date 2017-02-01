var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

// Load the foundation css for the component
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
