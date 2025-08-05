export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://13.233.0.42:1337'), // <- Important for admin login
  app: {
    keys: env('APP_KEYS', '').split(','),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    url: '/admin',
  },
});

