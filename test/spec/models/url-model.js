define(['../../../models/url-model'], function(UrlModel) {

    describe('Give a URL', function () {

        it('should have a URL for Google Shortener API', function () {
            var model = new UrlModel();
            expect(model.url).to.eql("https://www.googleapis.com/urlshortener/v1/url");
        });
    });
});