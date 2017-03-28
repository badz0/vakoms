class TvsController {
  constructor(tvsService) {
    'ngInject';
    this.tvsService = tvsService;
  }
  deleteTv(id) {
    this.tvsService.delete(id);
  }
}

export default TvsController;
