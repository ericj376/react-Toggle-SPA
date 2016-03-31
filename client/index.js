var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./NavBar');
var Footer = require('./Footer')
var Welcome = require('./Welcome')
var Cookies = require('./Cookies')
var FishApp = require('./FishApp')
var Bears = require('./Bears')
var Beer = require('./Beer')
require('./stylesheets/main.scss')


var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'welcome'
    }
  },

  setActiveComponent: function(componentName){
    console.log(componentName)
    this.setState({
      activeComponent: componentName
    })
  },

  showWhichComponent: function() {
    switch(this.state.activeComponent) {
    case 'welcome':
        return <Welcome/>
        break;
    case 'cookies':
        return <Cookies/>
        break;
    case 'fish':
        return <FishApp/>
    case 'bears':
        return <Bears/>
    case 'beer':
        return <Beer/>
    default:
        return <Welcome/>
    };
  },
  render: function(){
    return (
      
    <div>
      
      <NavBar setActiveComponent={this.setActiveComponent}/>
        <div>
          {this.showWhichComponent()}
        </div>
      <Footer />
      
    </div>
      )
  }
})

ReactDom.render(
  <App />, document.getElementById('app')
);
