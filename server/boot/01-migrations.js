'use strict';

module.exports = function migrations(app, cb) {
    const dataSources = app.dataSources;
    const pg = dataSources.pg;

    console.log('> base model tables autoupdate');

    pg.autoupdate([
        'ACL',
        'Role',
        'RoleMapping',
        'AccessToken',
    ], (errorBaseTables) => {
        // Check for errors
        if (errorBaseTables) {
            throw errorBaseTables;
        }

        // Output
        console.log('> base model tables created sucessfully');

        // Create blindspot app tables
        pg.autoupdate([
            'ExtendedAccessToken',
            'RecruiterUser',
            'CandidateUser',
        ], (errorAppTables) => {
            // Catch errors
            if (errorAppTables) {
                throw errorAppTables;
            }

            // Output
            console.error('> RecruiterDeck tables created successfully');
            cb(errorAppTables);
        });
    });
};
