'use strict';

/**
 * @ngdoc function
 * @name learningResourceWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningResourceWebApp
 */
angular.module('learningResourceWebApp')
  .controller('ResourceCtrl', function ($scope, $log) {
    this.title = "Learning Resources";
    
    this.resources = [];
    
    this.types = ['Podcast', 'Blog', 'Article', 'Tutorial', 'Other'];
    
    this.addResourceForm = function() {
      this.resources = this.resources.concat({
        name: '',
        link: '',
        id: this.resources.length + 1,
        date: moment(new Date()).format('MM/DD/YYYY'),
        type: '',
        edit: true
      })
    };
    
    this.saveResource = function(resource) {
      if(resource.name.length == 0 ||
            resource.link.length == 0 ||
              resource.type.length == 0) {
        alert('Please enter all values to save the resource.');
        return;
      }
      
      resource.edit = false;
      
      if(resource.link.indexOf('http://') != 0 && resource.link.indexOf('https://') != 0) {
        resource.link = 'http://' + resource.link;
      }
      
      this.resources[_.findWhere(this.resources, {
        id: resource.id
      })] = resource;
    };
    
    this.deleteResource = function(resource) {
      this.resources = _.without(this.resources, _.findWhere(this.resources, {
        id: resource.id
      }));
    };
    
    this.editResource = function(resource) {
      resource.edit = true;
      
      this.resources[_.findWhere(this.resources, {
        id: resource.id
      })] = resource;
    };
    
    this.selectType = function(resource, type) {
      resource.type = type;
      
      this.resources[_.findWhere(this.resources, {
        id: resource.id
      })] = resource;
    }
    
    
  });
