import React from 'react'

class NavHeader extends React.Component {
  handleClick(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
        <p onClick={this.handleClick.bind(this)}><span className="glyphicon glyphicon-arrow-left"></span>Back</p>
        <h3>Mickey@{this.props.title}</h3>
        <p><span className="glyphicon glyphicon-star"></span></p>
      </div>
    )
  }
}
NavHeader.contextTypes={
  router: React.PropTypes.object.isRequired
}
export default NavHeader;
