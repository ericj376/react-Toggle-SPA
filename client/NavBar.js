var React = require('react');

var links = ['cookies', 'fish', 'bears', 'beer'];

var NavBar = React.createClass({
  render: function() {
    var self = this;
    var link = links.map(function(item){
    return (
      <li className="nav-item">
      <a className="nav-link" onClick={self.props.setActiveComponent.bind(null, item)} >{ item }</a>
    </li>
    )

  });

    return (
    <nav className="navbar navbar-light bg-faded">
  <a className="navbar-brand" href="#">Navbar</a>
  <ul className="nav navbar-nav">
    {link}
  </ul>
  
</nav>
    )
    
  }
});

module.exports = NavBar;