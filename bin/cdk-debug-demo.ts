#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkDebugDemoStack } from '../lib/cdk-debug-demo-stack';

const app = new cdk.App();
new CdkDebugDemoStack(app, 'CdkDebugDemoStack');
