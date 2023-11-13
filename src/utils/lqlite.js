import AWS from 'aws-sdk';
import awsconfig from '../aws-exports';
import Amplify, { Auth } from 'aws-amplify';

export async function GetNSNDetails(nsn) {
  const credentials = await Auth.currentCredentials();

  const lambda = new AWS.Lambda({
    region: awsconfig.aws_project_region,
    credentials: credentials,
    token: credentials.sessionToken,
  });

  const params = {
    FunctionName: 'lq-nsn-details',
    Payload: JSON.stringify({
      operation: 'GetNSNDetails',
      nsn: nsn,
    }),
  };

  try {
    const response = await lambda.invoke(params).promise();
    const result = JSON.parse(response.Payload);
    return result;
  } catch (error) {
    console.error('Error invoking Lambda function:', error);
    throw error;
  }
}
