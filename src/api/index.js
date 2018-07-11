

const giphy = require('giphy-api')('y61hi3xU2jeFGkMmQ782qdh3YsCb8Ffe');

export const searchGif = (q, rating, limit, cb) => {
  giphy.search({ q, rating, limit }, cb);
};

export default function () {}
