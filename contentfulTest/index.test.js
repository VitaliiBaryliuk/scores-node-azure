const contentfulTest = require('./index');
const context = require('../testing/defaultContext');

test('Http trigger should return known text', async () => {
	const request = {
		query: { name: 'Bill' }
	};

	await contentfulTest(context, request);

	expect(context.log.mock.calls.length).toBe(1);
	expect(context.res.body).toEqual('Hello Bill');
});

// {
// 	"sys":{
// 		 "type":"Array"
// 	},
// 	"total":1,
// 	"skip":0,
// 	"limit":100,
// 	"items":[
// 		 {
// 				"metadata":{
// 					 "tags":[
							
// 					 ]
// 				},
// 				"sys":{
// 					 "space":{
// 							"sys":{
// 								 "type":"Link",
// 								 "linkType":"Space",
// 								 "id":"x9fwfe9wil5e"
// 							}
// 					 },
// 					 "id":"3736yVhwDU21EKvHyqvaoi",
// 					 "type":"Entry",
// 					 "createdAt":"2021-09-19T20:01:21.287Z",
// 					 "updatedAt":"2021-09-19T20:01:21.287Z",
// 					 "environment":{
// 							"sys":{
// 								 "id":"master",
// 								 "type":"Link",
// 								 "linkType":"Environment"
// 							}
// 					 },
// 					 "revision":1,
// 					 "contentType":{
// 							"sys":{
// 								 "type":"Link",
// 								 "linkType":"ContentType",
// 								 "id":"testConent"
// 							}
// 					 },
// 					 "locale":"en-US"
// 				},
// 				"fields":{
// 					 "text":"I like pizza"
// 				}
// 		 }
// 	]
// }