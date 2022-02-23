
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();
const tableName = process.env.USERTABLE;

exports.handler = async (event) => {
  // insert code to be executed by your lambda trigger
  // save a new user to dynamoDB
  if(!event?.request?.userAttributes?.sub) {
    
    return;

  }

  const now = new Date();
  const timestamp = now.getTime();


  const userItem = {
    __typername: {S: 'User' },
    _lastChangeAt: {N: timestamp.toString()},
    _version: {N: 1},
    createdAt: {S: now.toISOString()},
    updatedAt: {S: now.toISOString()},
    id:{ S: event.request.userAttributes.sub },
    name:{ S: event.request.userAttributes.email},
     
  }

  const params = {
    Item : userItem,
    TableName: tableName
  };
  
  try{
    await ddb.putItem(params).promise();
    console.log("success");
  } 
  catch (e) {
    console.log(e)
  }


  callback(null, event);
};
