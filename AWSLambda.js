/*

GET

'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

      let responseBody = "";
      let statusCode = 0;

      const params = {
          TableName: "Pierre-Bakery",

      }
      //creates a promise, not sure if this try catch is based on the promise that is made inside of it or what. must be
    try {
      const data = await documentClient.scan(params).promise();
      responseBody = JSON.stringify(data.Items);
      statusCode = 200;
    } catch(err){
      responseBody = "Unable to get products" + err;
      statusCode = 403;
    }

    //returns the response
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody,
            "access-control-allow-origin:":"*"
    };

    return response;

};

UPDATE

'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

      let responseBody = "";
      let statusCode = 0;
    const {id, productname} = JSON.parse(event.body);
      const params = {
          TableName: "Pierre-Bakery",
          Key:  {
              id: '12345',

          },
          UpdateExpression: "set productname = :n",
          ExpressionAttributeValues: {
              ":n" : productname
          },
          ReturnValues: "UPDATED_NEW"
      }
      //creates a promise, not sure if this try catch is based on the promise that is made inside of it or what. must be
    try {
      const data = await documentClient.update(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 204;
    } catch(err){
      responseBody = "Unable to update product" + err;
      statusCode = 403;
    }

    //returns the response
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin:":"*"
        },
        body: responseBody
    };

    return response;

};


PUT

'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

      let responseBody = "";
      let statusCode = 0;

    const {id, productname} = JSON.parse(event.body);

      const params = {
          TableName: "Pierre-Bakery",
          Item:  {
              id: id,
              productname: productname
          }
      }
      //creates a promise, not sure if this try catch is based on the promise that is made inside of it or what. must be
    try {
      const data = await documentClient.put(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 201;
    } catch(err){
      responseBody = "Unable to put product" + err;
      statusCode = 403;
    }

    //returns the response
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin:":"*"
        },
        body: responseBody
    };

    return response;

};

DELETE

'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();

      let responseBody = "";
      let statusCode = 0;

      const params = {
          TableName: "Pierre-Bakery",
          Key:  {
              id: '12345'

          }
      }
      //creates a promise, not sure if this try catch is based on the promise that is made inside of it or what. must be
    try {
      const data = await documentClient.delete(params).promise();
      responseBody = JSON.stringify(data);
      statusCode = 204;
    } catch(err){
      responseBody = "Unable to delete product" + err;
      statusCode = 403;
    }

    //returns the response
    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin:":"*"
        },
        body: responseBody
    };

    return response;

};

*/