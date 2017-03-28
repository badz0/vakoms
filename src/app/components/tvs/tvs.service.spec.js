import tvsService from './tvs.service';
import tvsConsts from './tvs.constants';

describe('Tvs Service', () => {
  let service, httpBackend, http;
  const tvList = [
    {
      "id": 1, 
      "title": "Телевизор Mystery Electronics MTV-3231LW",
    },
    {
      "id": 2, 
      "title": "Телевизор Ergo LE32CT200", 
    },
    {
      "id": 3,  
      "title": "Телевизор Samsung UE32K5500BUXUA", 
    }];

  beforeEach(inject(($injector) => {
    httpBackend = $injector.get('$httpBackend');
    http = $injector.get('$http');
    httpBackend.when('GET', 'http://localhost:3000/tvs.json')
      .respond(tvList);

    service = new tvsService(http, tvsConsts);
    httpBackend.flush();
  }));

  it('Check if get request was made and data was assigned', () => {
    expect(service.list).toEqual(tvList);
  });

  it('Check if delete method works', () => {
    service.delete(2);
    expect(service.list).toEqual([
      {
        "id": 1, 
        "title": "Телевизор Mystery Electronics MTV-3231LW",
      },
      {
        "id": 3,  
        "title": "Телевизор Samsung UE32K5500BUXUA", 
      }]);
  });
});
