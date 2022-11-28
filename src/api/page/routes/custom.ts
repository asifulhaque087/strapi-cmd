export default {
  routes: [
    {
      method: "GET",
      path: "/pages/:slug",
      handler: "page.findBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
