import React from 'react';
import { Link } from 'react-router';


class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to="/" activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span><br/>Home</Link>
        <Link to="/blog" activeStyle={{color:'#7C4DFF'}}><span className="glyphicon glyphicon-plus"></span><br/>Blog</Link>
        <Link to="/work" activeStyle={{color:'#7C4DFF'}}><span className="glyphicon glyphicon-tasks"></span><br/>Work</Link>
        <Link to="/about" activeStyle={{color:'#7C4DFF'}}><span className="glyphicon glyphicon-user"></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
