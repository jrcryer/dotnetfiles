/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var UrlView = Backbone.View.extend({
        template: JST['app/scripts/templates/url.ejs']
    });

    return UrlView;
});