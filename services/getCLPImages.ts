import contentfulClient from './contentfullClient';

// export function getTestContent(id: any = 'testConent', query: any = {}) {
// 	query['content_type'] = 'test content'
//   query['sys.id'] = id

// 	console.log('queryqueryqueryquery', query)
//   return contentfulClient.getEntries(query)
// }

export function getCLPImages() {
	const query = {};
	query['content_type'] = 'linksGroup';
  return contentfulClient.getEntries(query)
}