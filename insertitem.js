"use strict"

const {v4} = requeire("uuid")
const AWS = require("aws-sdk")

const insertItem = async (event) => {

    const item = JSON.parse(evet.body);
    const createdAt = new Date().toISOString();
    const id = v4()

    const dynamoDB = AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        createdAt,
        itemStatus: false
    }


    await dynamoDB.put(
        {
            TableName:"ItemTable",
            Item: newItem 
        }
    )

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    };
}

module.exports = {
    handler:insertItem
}