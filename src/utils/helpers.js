import axios from 'axios';



function getJson(){
  let address=`https://raw.githubusercontent.com/miwenqiang/demodata/master/bigDemo.json?${Math.random()}`
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}


function getMd(add){
  let address = `https://raw.githubusercontent.com/miwenqiang/demodata/master/BigDemo-blog/${add}.md`;
  return axios.get(address)
    .then( (res) => (
      { getMd:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function searchGit(userName){
  let address =`https://api.github.com/users/${userName}`
  return axios.get(address)
      .then( (res) =>(
        {data:res.data}
      ))
      .catch(function (error) {
        alert(error);
      });
}
export { getJson , getMd , searchGit }
