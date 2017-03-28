import template from './tv.html';
import controller from './tv.controller';
import './tv.scss';

let tvComponent = {
  template,
  controller,
  bindings: {
    tv: '<',
    deleteTv: '&'
  }
};

export default tvComponent;
