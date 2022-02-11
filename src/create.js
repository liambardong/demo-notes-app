import * as uuid from "uuid";

import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {
	console.log(event);
	console.log(event.requestContext.authorizer.iam.cognitoIdentity.identityId);
	console.log("after");
	const data = JSON.parse(event.body);
	const params = {
		TableName: process.env.TABLE_NAME,
		Item: {
			// The attributes of the item to be created
			userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
			noteId: uuid.v1(),
			content: data.content,
			attachment: data.attachment,
			createdAt: Date.now(),
		},
	};

	await dynamoDb.put(params);
	
	return params.Item;
});

