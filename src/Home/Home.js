import React from 'react';

class Home extends React.Component {
  render() {
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h3 className="title">
               HI, I am &nbsp;
              <span className="name">MICKY</span>
            </h3>
            <p>web developer</p>
            <button type="button" className="btn btn-info"><a href="https://github.com/miwenqiang" style={{color:'#fff'}}>HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home ;
