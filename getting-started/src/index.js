// ES6 문법
import _ from 'lodash';
// ES5 문법
// var _ = require('lodash');

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
document.body.appendChild(component());