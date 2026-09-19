--- 
title: response_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - response_streams
  - sagemakerjobruntime
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

Creates, updates, deletes, gets or lists a <code>response_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="response_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemakerjobruntime.response_streams" /></td></tr>
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
    <td><a href="#sample_with_response_stream"><CopyableCode code="sample_with_response_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amzn-SageMaker-Job-Arn"><code>X-Amzn-SageMaker-Job-Arn</code></a>, <a href="#parameter-X-Amzn-SageMaker-Trajectory-Id"><code>X-Amzn-SageMaker-Trajectory-Id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends a streaming inference request to the model during a job execution. Returns the response as a stream of payload chunks. Each turn is captured for later use.</td>
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
<tr id="parameter-X-Amzn-SageMaker-Job-Arn">
    <td><CopyableCode code="X-Amzn-SageMaker-Job-Arn" /></td>
    <td><code>string</code></td>
    <td>The job ARN that identifies which model session to route the inference request to.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Trajectory-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Trajectory-Id" /></td>
    <td><code>string</code></td>
    <td>The trajectory ID for grouping turns into a single rollout. Each turn is captured for later use.</td>
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
    defaultValue="sample_with_response_stream"
    values={[
        { label: 'sample_with_response_stream', value: 'sample_with_response_stream' }
    ]}
>
<TabItem value="sample_with_response_stream">

Sends a streaming inference request to the model during a job execution. Returns the response as a stream of payload chunks. Each turn is captured for later use.

```sql
EXEC aws.sagemakerjobruntime.response_streams.sample_with_response_stream 
@X-Amzn-SageMaker-Job-Arn='{{ X-Amzn-SageMaker-Job-Arn }}' --required, 
@X-Amzn-SageMaker-Trajectory-Id='{{ X-Amzn-SageMaker-Trajectory-Id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Body": "{{ Body }}"
}'
;
```
</TabItem>
</Tabs>
