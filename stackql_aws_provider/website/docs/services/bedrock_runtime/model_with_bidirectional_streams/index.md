--- 
title: model_with_bidirectional_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - model_with_bidirectional_streams
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

Creates, updates, deletes, gets or lists a <code>model_with_bidirectional_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_with_bidirectional_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_runtime.model_with_bidirectional_streams" /></td></tr>
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
    <td><a href="#invoke_model_with_bidirectional_stream"><CopyableCode code="invoke_model_with_bidirectional_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Invoke the specified Amazon Bedrock model to run inference using the bidirectional stream. The response is returned in a stream that remains open for 8 minutes. A single session can contain multiple prompts and responses from the model. The prompts to the model are provided as audio files and the model's responses are spoken back to the user and transcribed. It is possible for users to interrupt the model's response with a new prompt, which will halt the response speech. The model will retain contextual awareness of the conversation while pivoting to respond to the new prompt.</td>
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
    <td>The model ID or ARN of the model ID to use. Currently, only amazon.nova-sonic-v1:0 is supported.</td>
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
    defaultValue="invoke_model_with_bidirectional_stream"
    values={[
        { label: 'invoke_model_with_bidirectional_stream', value: 'invoke_model_with_bidirectional_stream' }
    ]}
>
<TabItem value="invoke_model_with_bidirectional_stream">

Invoke the specified Amazon Bedrock model to run inference using the bidirectional stream. The response is returned in a stream that remains open for 8 minutes. A single session can contain multiple prompts and responses from the model. The prompts to the model are provided as audio files and the model's responses are spoken back to the user and transcribed. It is possible for users to interrupt the model's response with a new prompt, which will halt the response speech. The model will retain contextual awareness of the conversation while pivoting to respond to the new prompt.

```sql
EXEC aws.bedrock_runtime.model_with_bidirectional_streams.invoke_model_with_bidirectional_stream 
@model_id='{{ model_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"body": "{{ body }}"
}'
;
```
</TabItem>
</Tabs>
