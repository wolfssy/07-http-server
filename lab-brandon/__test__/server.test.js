'use strict';

const superagent = require('superagent');

describe('POST /api/GET', () => {
  test('should respond with 200 response and echo the body', () => {
    return superagent.post('http://localhost:4000/echo')
    .send({
      title: 'aaaayyy',
    })
    .then(res => {
      expect(res.status).toEqual(200);
      expect(res.body).toEqual({`       ______________________
< The End is Naaaayy!! >
 ----------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
    `});
    });
  });

  test('should respond with a 400', () => {
    return superagent.post('http://localhost:4000/echo')
    .set({ 'Content-Type': 'application/json'})
    .send('{')
    .then(Promise.reject)
    .catch(res => {
      expect(res.status).toEqual(400);
      expect(res.res.text).toEqual('bad request');
    });
  });
});
