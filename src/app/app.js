import angular from 'angular';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

angular.module('app', [
  Components,
  ngMaterial
  ])
  .config(($locationProvider, $httpProvider) => {
    'ngInject';
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .component('app', AppComponent);
