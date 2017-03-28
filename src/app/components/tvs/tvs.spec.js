import tvsModule from './tvs';

describe('Tvs component', () => {

  describe('Controller', () => {
    let controller, componentController, tvsService;

    beforeEach(angular.mock.module('tvs'));
    beforeEach(inject(($injector) => {
      componentController = $injector.get('$componentController');

      tvsService = jasmine.createSpyObj('tvsService', ['delete']);
      controller = componentController('tvs', {
        tvsService: tvsService
      });
    }));

    it('Check if tvsService method delete was called with right id', () => {
      controller.deleteTv(10);
      expect(tvsService.delete).toHaveBeenCalledWith(10);
    });
  });
});
