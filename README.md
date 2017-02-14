# learning-resource-web-app

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

It is available on Github Pages via https://stephasaurusrex.github.io/learning-resources-app/

Other resources used to build this app include:

https://github.com/shinwang1/Angular-deployment-tutorial/blob/master/README.md

https://github.com/robwierzbowski/grunt-build-control

Angular Bootstrap

Underscore JS

Font-awesome icons

This application was built with one simple view for adding, editing, and deleting resources.
 
The corresponding controller is used to keep track of an array of resources. 

The scope of this project does not include data persistence, so, a reload of the page clears the json array in the controller. 

## Architecture Notes

Single page and single route application. 

Uses a single controller and single view (main.js/main.html).

Interactions between the view and controller rely heavily on the two-way data binding conventions provided by the angular framework in order to make updates to the "model" - which since persistence is not a consideration - is a simple json object.

404 page not a consideration as the application redirects to the view by default.

## Questions/Thoughts

Right now this is a very simple view, and a single page application. As the application grows, it would potentially be appropriate to create custom directives for both editing and displaying rows.

The naming conventions and 'copy' as it were, followed the language of the application prompt, but further consideration of how a user might reference a "Learning Resource" in a different way or with a different name would be a good next step.

I'm not a huge fan of the alert pop up to warn the user about issues with save - and on a subsequent iteration would want to come up with something prettier - but this has the desired functionality.

What other features might be useful to a user?
  • Taking notes on resources? The inline editing might not be ideal in this case.
  
  • Playing videos (or previewing articles) on the site directly - again this might preclude this particular design - or this design could be used with another route to a details page about the resource
  
  • Adding some sort of pattern matching to the link field might prevent user error as far as adding links - but for now flexibility is the trade off for potential error here

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

A `grunt test` task is available to run tests.
