/**
 * page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      console.log(slug);

      const entity = await strapi.db.query("api::page.page").findOne({
        where: { slug: slug },
        populate: [
          "block",
          "block.button",
          "block.logos",
          "block.logos.image",
          "seo",
        ],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
