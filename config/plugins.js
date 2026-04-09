module.exports = ({ env }) => ({
  // ...
  "strapi-plugin-rate-limit": {
    enabled: true,
    config: {
      defaults: {
        limit: 5,
        interval: "1m",
        blockDuration: 0,
      },
      // redis: {
      //   url: env("REDIS_URL"),
      //   tls: true,
      // },
      rules: [{ path: "/api/upload", limit: 10, interval: "1m" }],
      maskClientIps: true,
    },
  },
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
        uploadStream: {},
        delete: {},
      },
      breakpoints: {
        xlarge: 1920,
        thumbnail: 100,
      },
    },
  },
  // ...
});
