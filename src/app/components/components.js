import angular from 'angular';
import Tvs from './tvs/tvs';

let componentModule = angular.module('app.components', [
  Tvs
])

.name;

export default componentModule;
