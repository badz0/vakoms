import angular from 'angular';
import tvComponent from './tv/tv.component';
import tvsComponent from './tvs.component';
import tvsService from './tvs.service';
import tvsConsts from './tvs.constants';

let tvsModule = angular.module('tvs', [
])
.component('tv', tvComponent)
.component('tvs', tvsComponent)

.service('tvsService', tvsService)
.constant('tvsConsts', tvsConsts)
.name;

export default tvsModule;
