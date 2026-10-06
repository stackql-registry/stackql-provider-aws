--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_runtime.tokens" /></td></tr>
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
    <td><a href="#count_tokens"><CopyableCode code="count_tokens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-input"><code>input</code></a></td>
    <td></td>
    <td>Returns the token count for a given inference request. This operation helps you estimate token usage before sending requests to foundation models by returning the token count that would be used if the same input were sent to the model in an inference request. Token counting is model-specific because different models use different tokenization strategies. The token count returned by this operation will match the token count that would be charged if the same input were sent to the model in an InvokeModel or Converse request. You can use this operation to: Estimate costs before sending inference requests. Optimize prompts to fit within token limits. Plan for token usage in your applications. This operation accepts the same input formats as InvokeModel and Converse, allowing you to count tokens for both raw text inputs and structured conversation formats. The following operations are related to CountTokens: InvokeModel - Sends inference requests to foundation models Converse - Sends conversation-based inference requests to foundation models</td>
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
    <td>The unique identifier or ARN of the foundation model to use for token counting. Each model processes tokens differently, so the token count is specific to the model you specify.</td>
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
    defaultValue="count_tokens"
    values={[
        { label: 'count_tokens', value: 'count_tokens' }
    ]}
>
<TabItem value="count_tokens">

Returns the token count for a given inference request. This operation helps you estimate token usage before sending requests to foundation models by returning the token count that would be used if the same input were sent to the model in an inference request. Token counting is model-specific because different models use different tokenization strategies. The token count returned by this operation will match the token count that would be charged if the same input were sent to the model in an InvokeModel or Converse request. You can use this operation to: Estimate costs before sending inference requests. Optimize prompts to fit within token limits. Plan for token usage in your applications. This operation accepts the same input formats as InvokeModel and Converse, allowing you to count tokens for both raw text inputs and structured conversation formats. The following operations are related to CountTokens: InvokeModel - Sends inference requests to foundation models Converse - Sends conversation-based inference requests to foundation models

```sql
EXEC aws.bedrock_runtime.tokens.count_tokens 
@model_id='{{ model_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"input": "{{ input }}"
}'
;
```
</TabItem>
</Tabs>
