/*global define*/

define([
    'jquery',
    'backbone',
    'collections/url-collection',
    'views/url-view'
], function ($, Backbone, UrlCollection, UrlView) {
    'use strict';

    var UrlRouter = Backbone.Router.extend({
        routes: {
            "" : "onAppLoad"
        },
        onAppLoad: function() {
            var url = new UrlCollection();
            var view = new UrlView({
                el: '#urls',
                collection: url
            });
            view.render();
        }
    });

    return UrlRouter;
});