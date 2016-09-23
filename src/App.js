import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavHeader from './components/NavHeader.js';
import NavFooter from './components/NavFooter.js';
import NavLeft from './components/NavLeft.js';
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      showNav:false,
      title:"Home"
    }
  }
  componentWillMount(){
    this.setTitle()
  }
  componentDidMount(){
    this.setNavState();
    window.onresize = this.setNavState.bind(this);
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? "Home" :
            this.context.router.isActive('/blog') ? "Blog" :
            this.context.router.isActive('/work') ? "Work" :
            this.context.router.isActive('/about') ? "About" : "Item"
    })
  }
  setNavState(){
    this.setState({
      showNav: window.innerWidth > 600 ? true : false
    })
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.showNav ? <NavLeft title={this.state.title}/> : <NavHeader title={this.state.title}/> }
        <div className="content-main">{this.props.children}</div>
        {this.state.showNav ? null : <NavFooter /> }
      </div>
    )
  }
}
App.contextTypes={
  router: React.PropTypes.object.isRequired
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
