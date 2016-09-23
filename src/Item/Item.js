import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import RefreshIndicator from 'material-ui/RefreshIndicator';


import { getMd } from '../utils/helpers.js';
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let address = this.props.params.url
    getMd(address)
      .then( (rec) =>{
        this.setState({
          data:rec.getMd,
          wait:false
        })
      })
  }
  render() {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
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
      <div className="post-content" >
        {this.state.wait ? <div style={style.container}><RefreshIndicator  size={80} left={100} top={100} status="loading" style={style.refresh} /> </div>: <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />}
      </div>
    )
  }
}

export default Item ;
