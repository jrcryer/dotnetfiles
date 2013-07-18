/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var UrlModel = Backbone.Model.extend({
        defaults: {
        },

        url: "https://www.googleapis.com/urlshortener/v1/url"
    });

    return UrlModel;
});