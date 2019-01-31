const validLanguages = ["jp", "en"];

module.exports = function (req, res, next) {
    const {page, perPage, lng} = req.query;
    if (!page || page < 1) req.query.page = 1;
    if (!perPage || perPage < 10) req.query.perPage = 10;
    if (!lng || !validLanguages.includes(lng)) req.query.lng = "en";
    next();
};