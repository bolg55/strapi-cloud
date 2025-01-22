module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_DEFAULT_FROM"),
        defaultReplyTo: env("SENDGRID_DEFAULT_TO"),
        testAddress: env("SENDGRID_DEFAULT_FROM"),
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: "cloudinary",
  //     providerOptions: {
  //       cloud_name: env("CLOUDINARY_NAME"),
  //       api_key: env("CLOUDINARY_KEY"),
  //       api_secret: env("CLOUDINARY_SECRET"),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //     breakpoints:{
  //       xlarge: 1920,
  //       thumbnail: 100,
  //     },
  //   },
  // },
  // ...
});
