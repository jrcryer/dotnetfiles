/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var UrlView = Backbone.View.extend({

        events: {
            "submit form": "create",
        },

        template: JST['app/scripts/templates/url.ejs'],

        create: function(e) {
            e.preventDefault();
            var input = this.$el.find('input');
            var value = input.val();

            if (value) {
                this.collection.create({longUrl: value});
                input.val("");
                input.focus();
            }
        }
    });

    return UrlView;
});