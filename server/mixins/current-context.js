'use strict';

module.exports = (Model, options) => {

    Model.observe('access', (ctx, next) => {
        const token = ctx.options && ctx.options.accessToken;

        const modelName = ctx.Model.modelName;

        console.log("CurrentContext Mixin", ctx.options);

        next();
    });
};

