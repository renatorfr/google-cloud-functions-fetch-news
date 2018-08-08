/**
 * Responds to any HTTP request.
 *
 * @param {!Object} req HTTP request context.
 * @param {!Object} res HTTP response context.
 */
const request = require('request');
 
exports.fetchNews = (req, res) => {
  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, response, body) => {
    if (err) {
      return console.log(err);
    }
    const message = body.url + ' ||| ' + body.explanation;
    res.status(200).send(message);
  });
};