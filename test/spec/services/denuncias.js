'use strict';

describe('Service: Denuncias', function () {

  // load the service's module
  beforeEach(module('ListaHuApp'));

  // instantiate service
  var Denuncias;
  beforeEach(inject(function (_Denuncias_) {
    Denuncias = _Denuncias_;
  }));

  it('should do something', function () {
    expect(!!Denuncias).toBe(true);
  });

});
