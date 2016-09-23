import React from 'react';
import axios from 'axios';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { getJson } from '../utils/helpers.js';
import BlogCard from '../components/BlogCard.js';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (rec) =>{
        this.setState({
          data:rec.getJson,
          wait:false
        });
      })
  }
  render(){
    let cards =this.state.data.map( (item,i) => (<BlogCard {...item} key={i} />))
    let style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        {this.state.wait ? <div style={style.container}><RefreshIndicator  size={80} left={50} top={50} status="loading" style={style.refresh} /></div> : cards}

      </div>
    )
  }
}

export default Blog ;
