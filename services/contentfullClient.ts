const contentful = require('contentful');

const client = contentful.createClient({
	accessToken: process.env.contentful_access_token,
	space: process.env.contentful_space_id
});

export default client;