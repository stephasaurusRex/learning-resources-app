'use strict';

/**
 * @ngdoc function
 * @name learningResourceWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningResourceWebAppApp
 */
angular.module('learningResourceWebAppApp')
  .controller('ResourceCtrl', function () {
    this.title = "Learning Resources";
    
    this.resources = [];
    
    this.types = ['Podcast', 'Blog', 'Article', 'Tutorial', 'Other'];
    
    this.addResourceForm = function() {
      this.resources = this.resources.concat({
        name: '',
        link: '',
        id: this.resources.length + 1,
        date: moment(new Date()).format('MM/DD/YYYY'),
        edit: true
      })
    };
    
    this.saveResource = function(resource) {
      if(resource.name.length == 0 ||
            resource.link.length == 0) {
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
  
    this.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];
  
    this.status = {
      isopen: false
    };
  
    this.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };
  
    this.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      this.status.isopen = !this.status.isopen;
    };
  });
