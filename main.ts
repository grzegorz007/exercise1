
  import axios from 'axios';
  import * as Mustache from 'mustache';
  const url = "http://jsonplaceholder.typicode.com/posts";
  axios
    .get(url)
    .then(response => {
      var userOne = [];
      
      for (let i = 0; i < 10; i++ ) {
        userOne.push(response.data[i])
      }
      let template = document.getElementById('template1').innerHTML;
      document.getElementById('target').innerHTML = render(template, userOne);
      
      template = document.getElementById('template2').innerHTML;
      document.getElementById('target3').innerHTML = render(template, userOne);
  
    })
    .catch(error => {
      console.error(error);
    });
  axios
    .get(url)
    .then(response => {
      let userTwo = [];
      for (let i = 10; i < 20; i++ ) {
        userTwo.push(response.data[i])
      }
      let template = document.getElementById('template1').innerHTML;
      document.getElementById('target2').innerHTML = render(template, userTwo);
      template = document.getElementById('template2').innerHTML;
      document.getElementById('target4').innerHTML = render(template, userTwo);
    })
    .catch(error => {
      console.error(error);
    });
  
  let render = (temp, scope) => {
    return Mustache.render(temp, scope)
  }
  let getTarget = (target) => {
    return document.getElementById(target).innerHTML
  
  }
  let x = "target4";
  getTarget(x);
  