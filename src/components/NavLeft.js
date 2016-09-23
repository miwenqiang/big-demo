import React, { PropTypes } from 'react';
import { Link } from 'react-router';
class navLeft extends React.Component {
  render () {
    return(
      <div className="nav-left">
        <h3>Mickey@{this.props.title} </h3>
        <Link to="/" activeStyle={{color:'#Ff0',backgroundColor:'#000',opacity:'0.5'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Home</Link>
        <Link to="/blog" activeStyle={{color:'#Ff0',backgroundColor:'#000',opacity:'0.5'}}><span className="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Blog</Link>
        <Link to="/work" activeStyle={{color:'#Ff0',backgroundColor:'#000',opacity:'0.5'}}><span className="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;Work</Link>
        <Link to="/about" activeStyle={{color:'#Ff0',backgroundColor:'#000',opacity:'0.5'}}><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;About</Link>
      </div>
    )
  }
}

export default navLeft;
