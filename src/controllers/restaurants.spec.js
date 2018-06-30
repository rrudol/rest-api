const request = require('supertest');
const app = require('../app');
const assert = require('assert');
const resourcePath = '/restaurants';

describe('GET /restaurants', () => {
  test('It should response the GET method', async () => {
    return request(app).get(resourcePath).expect(200);
  });
});

describe('POST /restaurants', () => {
  test('It should response the POST method', async () => {
    return request(app).post(resourcePath).expect(200);
  });
  test('It should response the POST method with id', async () => {
    return request(app).post(resourcePath).expect(200).then(response => {
      assert(Object.keys(response), ["_id", "__v"]);
    });
  });
});
