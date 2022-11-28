module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env("UPLOAD_FOLDER_NAME"),
        },
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "color-picker": {
    enabled: true,
    resolve: "./src/plugins/color-picker",
  },
});

// export default {
//   //
//   graphql: {
//     config: {
//       endpoint: "/graphql",
//       shadowCRUD: true,
//       playgroundAlways: false,
//       depthLimit: 7,
//       amountLimit: 100,
//       apolloServer: {
//         tracing: false,
//       },
//     },
//   },
//   "color-picker": {
//     enabled: true,
//     resolve: "./src/plugins/color-picker",
//   },
// };
