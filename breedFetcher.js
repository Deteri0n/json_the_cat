const request = require('request');

const userInputs = function(callback) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let questions = {
    breed : 'What is the breed? ',
  };
  
  let requestObj = {};
  
  
  rl.question(questions.breed, (answer) => {
    requestObj["breed"] = answer;
    callback((requestObj['breed']));
    rl.close();
  });
};


const breedFetcher = (breedString) => {
  
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  
  request.get(url + breedString, (err, response, body) => {
    if (err) {
      throw err;
    }
    const data = JSON.parse(body);
    if (!data.length) {
      console.log("Breed not found!");
    } else {
      console.log(data[0]['description']);
    }
  });
};

userInputs(breedFetcher);