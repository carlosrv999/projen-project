import { HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class CdkSampleLib extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const handler = new Function(this, 'HelloWorld', {
      handler: 'index.handler',
      code: Code.fromAsset('functions'),
      runtime: Runtime.NODEJS_16_X,
    });

    const api = new HttpApi(this, 'API', {
      defaultIntegration: new HttpLambdaIntegration('LambdaIntegration', handler),
    });

    new cdk.CfnOutput(this, 'ApiURL', { value: api.url! });
  }
}
