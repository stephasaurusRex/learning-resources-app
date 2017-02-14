# learning-resource-web-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

It is available on Github Pages via https://stephasaurusrex.github.io/learning-resources-app/

Other resources used to build this app include:

https://github.com/shinwang1/Angular-deployment-tutorial/blob/master/README.md

https://github.com/robwierzbowski/grunt-build-control

This application was built with one simple view for adding, editing, and deleting resources.
 
The corresponding controller is used to keep track of an array of resources. 

The scope of this project does not include data persistence, so, a reload of the page clears the json array in the controller. 

## Architecture Notes

Single page and single route application. 

Uses a single controller and single view (main.js/main.html).

Interactions between the view and controller rely heavily on the two-way data binding conventions provided by the angular framework in order to make updates to the "model" - which since persistence is not a consideration - is a simple json object.

404 page not a consideration as the application redirects to the view by default.

## Questions/Thoughts

Right now this is a very simple view, and a signle page application. As the application grows, it would potentially be appropriate to create custom directives for both editing and displaying rows.

The naming conventions and 'copy' as it were, followed the language of the application prompt, but further consideration of how a user might reference a "Learning Resource" in a different way or with a different name would be a good next step.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

A `grunt test` task is available to run tests.
