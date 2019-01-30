const services = require('../mocks/services');

const findServiceByPath = function (path, lng, callback) {
    const service = services[lng].filter(service => service.path === path);
    const serviceExist = service.length > 0;
    if (!serviceExist) {
        return callback({
            code: 404,
            message: `No service matching path ${path}`
        });
    }


    return callback(null, service[0]);
};

module.exports = app => {
    app.get('/services', (req, res) => {
        const lng = req.query.lng || 'en';
        res.send(services[lng]);
    });

    app.get('/services/:path', (req, res) => {
        const {path} = req.params;
        const lng = req.query.lng || 'en';
        findServiceByPath(path, lng, function (error, service) {
            if(error) {
                res.status(error.code);
                return res.send(error);
            }

            res.send(service);
        });
    });
};
