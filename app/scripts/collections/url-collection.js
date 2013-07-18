/*global define*/

define([
    'underscore',
    'backbone',
    'models/url-model'
], function (_, Backbone, UrlModel) {
    'use strict';

    var UrlCollection = Backbone.Collection.extend({
        model: UrlModel
    });

    return UrlCollection;
});