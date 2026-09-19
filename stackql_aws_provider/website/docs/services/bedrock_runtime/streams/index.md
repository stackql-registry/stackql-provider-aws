--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - bedrock_runtime
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_runtime.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#converse_stream"><CopyableCode code="converse_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends messages to the specified Amazon Bedrock model and returns the response in a stream. ConverseStream provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. To find out if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response. The CLI doesn't support streaming operations in Amazon Bedrock, including ConverseStream. Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response. You can submit a prompt by including it in the messages field, specifying the modelId of a foundation model or inference profile to run inference on it, and including any other fields that are relevant to your use case. You can also submit a prompt from Prompt management by specifying the ARN of the prompt version and including a map of variables to values in the promptVariables field. You can append more messages to the prompt by using the messages field. If you use a prompt from Prompt management, you can't include the following fields in the request: additionalModelRequestFields, inferenceConfig, system, or toolConfig. Instead, these fields must be defined through Prompt management. For more information, see Use a prompt from Prompt management. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide For example code, see Conversation streaming example in the Amazon Bedrock User Guide. This operation requires permission for the bedrock:InvokeModelWithResponseStream action. To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the base inference actions (InvokeModel and InvokeModelWithResponseStream). For more information see Deny access for inference on specific models. For troubleshooting some of the common errors you might encounter when using the ConverseStream API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-model_id">
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the model or throughput with which to run inference, or the prompt resource to use in inference. The value depends on the resource that you use: If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide. If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see Supported Regions and models for cross-region inference in the Amazon Bedrock User Guide. If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide. If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide. To include a prompt that was defined in Prompt management, specify the ARN of the prompt version to use. The Converse API doesn't support imported models.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="converse_stream"
    values={[
        { label: 'converse_stream', value: 'converse_stream' }
    ]}
>
<TabItem value="converse_stream">

Sends messages to the specified Amazon Bedrock model and returns the response in a stream. ConverseStream provides a consistent API that works with all Amazon Bedrock models that support messages. This allows you to write code once and use it with different models. Should a model have unique inference parameters, you can also pass those unique parameters to the model. To find out if a model supports streaming, call GetFoundationModel and check the responseStreamingSupported field in the response. The CLI doesn't support streaming operations in Amazon Bedrock, including ConverseStream. Amazon Bedrock doesn't store any text, images, or documents that you provide as content. The data is only used to generate the response. You can submit a prompt by including it in the messages field, specifying the modelId of a foundation model or inference profile to run inference on it, and including any other fields that are relevant to your use case. You can also submit a prompt from Prompt management by specifying the ARN of the prompt version and including a map of variables to values in the promptVariables field. You can append more messages to the prompt by using the messages field. If you use a prompt from Prompt management, you can't include the following fields in the request: additionalModelRequestFields, inferenceConfig, system, or toolConfig. Instead, these fields must be defined through Prompt management. For more information, see Use a prompt from Prompt management. For information about the Converse API, see Use the Converse API in the Amazon Bedrock User Guide. To use a guardrail, see Use a guardrail with the Converse API in the Amazon Bedrock User Guide. To use a tool with a model, see Tool use (Function calling) in the Amazon Bedrock User Guide For example code, see Conversation streaming example in the Amazon Bedrock User Guide. This operation requires permission for the bedrock:InvokeModelWithResponseStream action. To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the base inference actions (InvokeModel and InvokeModelWithResponseStream). For more information see Deny access for inference on specific models. For troubleshooting some of the common errors you might encounter when using the ConverseStream API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide

```sql
EXEC aws.bedrock_runtime.streams.converse_stream 
@model_id='{{ model_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"messages": "{{ messages }}", 
"system": "{{ system }}", 
"inferenceConfig": "{{ inferenceConfig }}", 
"toolConfig": "{{ toolConfig }}", 
"guardrailConfig": "{{ guardrailConfig }}", 
"additionalModelRequestFields": "{{ additionalModelRequestFields }}", 
"promptVariables": "{{ promptVariables }}", 
"additionalModelResponseFieldPaths": "{{ additionalModelResponseFieldPaths }}", 
"requestMetadata": "{{ requestMetadata }}", 
"performanceConfig": "{{ performanceConfig }}", 
"serviceTier": "{{ serviceTier }}", 
"outputConfig": "{{ outputConfig }}"
}'
;
```
</TabItem>
</Tabs>
