'use strict';

describe('Directive: pinterestGrid', function () {

  // load the directive's module
  beforeEach(module('ListaHuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pinterest-grid></pinterest-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pinterestGrid directive');
  }));
});
