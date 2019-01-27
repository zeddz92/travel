const services = require('../mocks/services');

const findServiceById = function (id, callback) {
    const serviceId = Number(id);
    const service = services.filter(service => service.id === serviceId);
    const serviceExist = service.length > 0;
    if (!serviceExist) {
        return callback({
            code: 404,
            message: `No service matching id ${serviceId}`
        });
    }


    return callback(null, service[0]);
};

module.exports = app => {
    app.get('/services', (req, res) => {
        const lng = req.query.lng || 'en';
        res.send(services[lng]);
    });

    app.get('/services/:id', (req, res) => {
        const {id} = req.params;
        findServiceById(id, function (error, service) {
            if(error) {
                res.status(error.code);
                return res.send(error);
            }

            res.send(service);
        });
    });
};
