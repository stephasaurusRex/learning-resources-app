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
    
    //Adds an empty resource object except for the created date
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
    
    //Changes the resource edit state to false, adds http to resource link if the link does not being with http(s)://
    //Note: if a persistence layer were being utilized the call to persist the data would also go here
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
    
    //Deletes resource from resources array
    this.deleteResource = function(resource) {
      this.resources = _.without(this.resources, _.findWhere(this.resources, {
        id: resource.id
      }));
    };
    
    //Changes the resource edit state to true
    this.editResource = function(resource) {
      resource.edit = true;
      
      this.resources[_.findWhere(this.resources, {
        id: resource.id
      })] = resource;
    };
    
    //Selects type in the type dropdown
    this.selectType = function(resource, type) {
      resource.type = type;
      
      this.resources[_.findWhere(this.resources, {
        id: resource.id
      })] = resource;
    }
    
    
  });
