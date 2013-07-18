/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var UrlModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return UrlModel;
});