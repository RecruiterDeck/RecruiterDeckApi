'use strict';

module.exports = function (server) {
    const router = server.loopback.Router();

    router.get('/status', server.loopback.status());

    router.get('/', (req, res) => {
        res.redirect(301, '/api');
    });

    router.get('/explorer', (req, res) => {
        res.redirect(301, '/api');
    });

    server.use(router);
};
