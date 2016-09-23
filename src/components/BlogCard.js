import React, { PropTypes } from 'react';

import { Link } from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        borderRadius:'5px',
        margin:'0 auto',
        marginBottom:'20px',
      },
      index:{
        backgroundColor: '#00bcd4',
        padding:'10px 0'
      },
      span:{
        display:'block',
        width:'50px',
        height:'50px',
        fontSize:'30px',
        border:'2px solid #fff',
        borderRadius: '50%',
        margin: '0 auto',
        textAlign:'center',
        color:'#fff'
      },
      content:{
       padding:'16px',
       color:'#727272',
     },
     title:{
       fontSize:'18px',
       marginBottom:'20px'
     },
     desc:{
       fontSize:'16px',
       marginBottom:'20px'
     }
    }
    let address=`/item/${this.props.url}`
    return(
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.span}>{this.props.index}</span></div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link  to={address} className="blog-btn">阅读更多</Link>
        </div>
      </div>

    )
  }
}

BlogCard.defaultProps = {
  index:1,
  title:'这是标题',
  desc:'这是描述'
}
BlogCard.propTypes = {
  index: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
}
export default BlogCard;
