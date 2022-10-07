
// url al servidor de heroku
module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
  });
  