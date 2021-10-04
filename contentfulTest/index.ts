import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as contentfulTestService from '../services/contentfulTest';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  try {
		// const testContentReponse = await contentfulTestService.getTestContent();
		const images = await contentfulTestService.getCLPImages();
		console.log("testContentReponse", images)
		context.res = {
				status: 200, /* Defaults to 200 */
				body: JSON.stringify(images)
		};
  } catch (error) {
		context.log(`Error code: ${error.code} message: ${error.message}`);
		context.res = {
			status: 500,
			body: { message: 'An error has occured, please try again later' }
		};
  }
};

export default httpTrigger;