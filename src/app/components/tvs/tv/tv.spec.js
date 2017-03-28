import tvsModule from '../tvs';

describe('Tv component', () => {

  describe('Controller', () => {
    let controller, componentController, deleteTv;

    beforeEach(angular.mock.module('tvs'));
    beforeEach(inject(($injector) => {
      componentController = $injector.get('$componentController');

      deleteTv = jasmine.createSpy('deleteTv');
      controller = componentController('tv', null, {
        tv: { id: 10 },
        deleteTv: deleteTv
      });
    }));

    it('Check if the parent function deleteTv was called with right argument', () => {
      controller.delete();
      expect(deleteTv).toHaveBeenCalledWith({ id: 10 });
    });
  });
});
