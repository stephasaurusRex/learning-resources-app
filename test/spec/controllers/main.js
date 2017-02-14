'use strict';

describe('Controller: ResourceCtrl', function () {

  // load the controller's module
  beforeEach(module('learningResourceWebApp'));

  var ResourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResourceCtrl = $controller('ResourceCtrl', {
      $scope: scope
    });
  }));

  it('should have an empty array of resources', function () {
    expect(ResourceCtrl.resources.length).toBe(0);
  });
  
  it('should be able to add a resource', function () {
    ResourceCtrl.addResourceForm();
    expect(ResourceCtrl.resources.length).toBe(1);
    expect(ResourceCtrl.resources[0].id).toBe(1);
  });
  
  it('should be able to delete a resource', function () {
    var resource = {
      id: 1
    }
    ResourceCtrl.addResourceForm();
    ResourceCtrl.deleteResource(resource);
    expect(ResourceCtrl.resources.length).toBe(0);
  });
  
});
