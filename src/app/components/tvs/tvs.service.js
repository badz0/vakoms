class TvsService {
 constructor($http, tvsConsts) {
   'ngInject';
   this.consts = tvsConsts.api;
   this.http = $http;
   this.list = [];
   this.getTvs();
 }
 getTvs() {
   this.http.get(this.consts.tvs).then( data => {
     this.list = data.data;
   },
   err => {
     throw err;
   });
 }
 delete(id) {
  this.list = this.list.filter( item => id !== item.id );
 }
}

export default TvsService;