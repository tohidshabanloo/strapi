module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '869a66469276a7531adf25fbc00edaad'),
  },
});
