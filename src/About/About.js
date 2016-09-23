import React from 'react';
import { searchGit } from '../utils/helpers.js';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class About extends React.Component {
  constructor(){
   super();
   this.state={
     data:{},
     wait:true,
     inputValue:''
   }
 }
componentDidMount(){
  searchGit()
    .then((data) => {
      this.setState({
        data:data.data,
        wait:false

      })
    })
}
handleInput(e){
  let value=e.target.value;
  this.setState({
    inputValue:value
  })
}
handleClick(){
  let name=this.state.inputValue;
  searchGit(name )
      .then((data) => {
        this.setState({
          data:data.data,
          wait:false
        })
      })
      .catch(function (error) {
        alert(error);
      });

}
 render () {
   let gitInfo =(
     <div className="about-info">
       <img src={this.state.data.avatar_url} />
       <p>{this.state.data.name}</p>
       <div className="row">
         <div className="col-xs-6">
           <p>followers</p>
           <span>{this.state.data.followers}</span>
         </div>
         <div className="col-xs-6">
           <p>following</p>
           <span>{this.state.data.following}</span>
         </div>
       </div>
     </div>
   )
   let style = {
     container: {
       position: 'relative',
     },
     refresh: {
       display: 'inline-block',
       position: 'relative',
     }
   }
   return(
     <div className="about-container">
       <h2 >Github Search</h2>
       <div className="about-search">
         <input placeholder="user name" type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
         &nbsp; &nbsp;
         <button onClick={this.handleClick.bind(this)} >搜索</button>
       </div>
       {this.state.wait ? <div style={style.container}><RefreshIndicator  size={80} left={150} top={50} status="loading" style={style.refresh} /></div> : gitInfo }
     </div>
   )
 }
}

export default About ;
