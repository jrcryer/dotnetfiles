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

        initialize: function() {
            this.collection.on('change', this.render, this);
        },

        render: function() {
            var list = this.$el.find('.items');
            list.html('');

            _.each(this.collection.models, function(model) {
                list.append(this.template({model: model.toJSON()}));
            }, this);
            return this;
        },

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