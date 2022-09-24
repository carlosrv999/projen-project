import * as cdk from 'aws-cdk-lib';
import { CdkSampleLib } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new CdkSampleLib(stack, 'Cdk-Sample-Lib');
