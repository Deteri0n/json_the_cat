
const fetchBreedDescription = function(breedString, callback) {
  const request = require('request');
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  
  request.get(url + breedString, (err, response, body) => {
    if (err) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    // console.log(data);
    if (!data.length) {
      callback(null, "This breed does not exist");
      // callback(err, null);
    } else {
      callback(null, data[0]['description'].trim());
    }
  });
};

module.exports = { fetchBreedDescription };