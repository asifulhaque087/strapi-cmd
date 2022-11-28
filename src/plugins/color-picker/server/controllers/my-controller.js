'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('color-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
