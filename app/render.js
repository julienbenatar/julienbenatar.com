/*
* Render file
*/

React.render (
	(
	<Router>
  	  <Route path="/" component={IndexComponent} />
    </Router>
    ),
	document.getElementById('container')
);