# Wildly Minimalistic WordPress Theme

A super-minimalistic theme for the [Wildly Inaccurate blog](http://wildlyinaccurate.com).

Very much inspired by Matt Banks' [WordPress Starter Theme](https://github.com/mattbanks/WordPress-Starter-Theme).

![](src/screenshot.gif)

## Install

To install the theme, create a new directory `wp-content/themes/wildly-minimalistic` and copy the contents of the `dist` directory into it.

## Build

To build the theme from source, you need to run the following:

 * `bower install`
 * `npm install`
 * `grunt build`

If you're modifying the theme, you can run `grunt watch` which will automatically update the CSS and JavaScript when you modify the SCSS and CoffeeScript source.
