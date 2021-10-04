import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import loadDB from '../repository/db';
import { instance } from "../src/common/logger";
const logger = instance('function: ping');

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  logger.info('JavaScript HTTP trigger function processed a request.');
  try {
		const db = await loadDB();
		const scores = await db.collection('scores');
		const scoresList = await scores.find({})
		context.res = {
			status: 200,
			body: scoresList
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