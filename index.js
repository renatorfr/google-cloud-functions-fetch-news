/**
 * Responds to any HTTP request.
 *
 * @param {!Object} req HTTP request context.
 * @param {!Object} res HTTP response context.
 */
const request = require('request');
 
exports.fetchNews = (req, res) => {
  const message = request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    return body.url + ' ||| ' + body.explanation;
  });

  res.status(200).send(message);
};