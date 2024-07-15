const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const response = await fetch('https://api.exemplo.com/dados');
  const data = await response.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
