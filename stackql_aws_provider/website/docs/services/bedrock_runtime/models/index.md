--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_runtime.models" /></td></tr>
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
    <td><a href="#invoke_model"><CopyableCode code="invoke_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-X-Amzn-Bedrock-Trace"><code>X-Amzn-Bedrock-Trace</code></a>, <a href="#parameter-X-Amzn-Bedrock-GuardrailIdentifier"><code>X-Amzn-Bedrock-GuardrailIdentifier</code></a>, <a href="#parameter-X-Amzn-Bedrock-GuardrailVersion"><code>X-Amzn-Bedrock-GuardrailVersion</code></a>, <a href="#parameter-X-Amzn-Bedrock-PerformanceConfig-Latency"><code>X-Amzn-Bedrock-PerformanceConfig-Latency</code></a>, <a href="#parameter-X-Amzn-Bedrock-Service-Tier"><code>X-Amzn-Bedrock-Service-Tier</code></a>, <a href="#parameter-X-Amzn-Bedrock-Request-Metadata"><code>X-Amzn-Bedrock-Request-Metadata</code></a></td>
    <td>Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide. This operation requires permission for the bedrock:InvokeModel action. To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models. For troubleshooting some of the common errors you might encounter when using the InvokeModel API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide</td>
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
    <td>The unique identifier of the model to invoke to run inference. The modelId to provide depends on the type of model or throughput that you use: If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see Amazon Bedrock base model IDs (on-demand throughput) in the Amazon Bedrock User Guide. If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see Supported Regions and models for cross-region inference in the Amazon Bedrock User Guide. If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see Run inference using a Provisioned Throughput in the Amazon Bedrock User Guide. If you use a custom model, specify the ARN of the custom model deployment (for on-demand inference) or the ARN of your provisioned model (for Provisioned Throughput). For more information, see Use a custom model in Amazon Bedrock in the Amazon Bedrock User Guide. If you use an imported model, specify the ARN of the imported model. You can get the model ARN from a successful call to CreateModelImportJob or from the Imported models page in the Amazon Bedrock console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The desired MIME type of the inference body in the response. The default value is application/json.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the input data in the request. You must specify application/json.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-GuardrailIdentifier">
    <td><CopyableCode code="X-Amzn-Bedrock-GuardrailIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation. An error will be thrown in the following situations. You don't provide a guardrail identifier but you specify the amazon-bedrock-guardrailConfig field in the request body. You enable the guardrail but the contentType isn't application/json. You provide a guardrail identifier, but guardrailVersion isn't specified.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-GuardrailVersion">
    <td><CopyableCode code="X-Amzn-Bedrock-GuardrailVersion" /></td>
    <td><code>string</code></td>
    <td>The version number for the guardrail. The value can also be DRAFT.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-PerformanceConfig-Latency">
    <td><CopyableCode code="X-Amzn-Bedrock-PerformanceConfig-Latency" /></td>
    <td><code>string</code></td>
    <td>Model performance settings for the request.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-Request-Metadata">
    <td><CopyableCode code="X-Amzn-Bedrock-Request-Metadata" /></td>
    <td><code>string</code></td>
    <td>Key-value pairs that you can use to filter invocation logs.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-Service-Tier">
    <td><CopyableCode code="X-Amzn-Bedrock-Service-Tier" /></td>
    <td><code>string</code></td>
    <td>Specifies the processing tier type used for serving the request.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-Trace">
    <td><CopyableCode code="X-Amzn-Bedrock-Trace" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_model"
    values={[
        { label: 'invoke_model', value: 'invoke_model' }
    ]}
>
<TabItem value="invoke_model">

Invokes the specified Amazon Bedrock model to run inference using the prompt and inference parameters provided in the request body. You use model inference to generate text, images, and embeddings. For example code, see Invoke model code examples in the Amazon Bedrock User Guide. This operation requires permission for the bedrock:InvokeModel action. To deny all inference access to resources that you specify in the modelId field, you need to deny access to the bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream actions. Doing this also denies access to the resource through the Converse API actions (Converse and ConverseStream). For more information see Deny access for inference on specific models. For troubleshooting some of the common errors you might encounter when using the InvokeModel API, see Troubleshooting Amazon Bedrock API Error Codes in the Amazon Bedrock User Guide

```sql
EXEC aws.bedrock_runtime.models.invoke_model 
@model_id='{{ model_id }}' --required, 
@region='{{ region }}' --required, 
@Content-Type='{{ Content-Type }}', 
@Accept='{{ Accept }}', 
@X-Amzn-Bedrock-Trace='{{ X-Amzn-Bedrock-Trace }}', 
@X-Amzn-Bedrock-GuardrailIdentifier='{{ X-Amzn-Bedrock-GuardrailIdentifier }}', 
@X-Amzn-Bedrock-GuardrailVersion='{{ X-Amzn-Bedrock-GuardrailVersion }}', 
@X-Amzn-Bedrock-PerformanceConfig-Latency='{{ X-Amzn-Bedrock-PerformanceConfig-Latency }}', 
@X-Amzn-Bedrock-Service-Tier='{{ X-Amzn-Bedrock-Service-Tier }}', 
@X-Amzn-Bedrock-Request-Metadata='{{ X-Amzn-Bedrock-Request-Metadata }}' 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
