--- 
title: evaluates
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluates
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists an <code>evaluates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.evaluates" /></td></tr>
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
    <td><a href="#evaluate"><CopyableCode code="evaluate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-evaluator_id"><code>evaluator_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-evaluationInput"><code>evaluationInput</code></a></td>
    <td></td>
    <td>Performs on-demand evaluation of agent traces using a specified evaluator. This synchronous API accepts traces in OpenTelemetry format and returns immediate scoring results with detailed explanations.</td>
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
<tr id="parameter-evaluator_id">
    <td><CopyableCode code="evaluator_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the evaluator to use for scoring. Can be a built-in evaluator (e.g., Builtin.Helpfulness, Builtin.Correctness) or a custom evaluator Id created through the control plane API.</td>
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
    defaultValue="evaluate"
    values={[
        { label: 'evaluate', value: 'evaluate' }
    ]}
>
<TabItem value="evaluate">

Performs on-demand evaluation of agent traces using a specified evaluator. This synchronous API accepts traces in OpenTelemetry format and returns immediate scoring results with detailed explanations.

```sql
EXEC aws.bedrock_agentcore.evaluates.evaluate 
@evaluator_id='{{ evaluator_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"evaluationInput": "{{ evaluationInput }}", 
"evaluationTarget": "{{ evaluationTarget }}", 
"evaluationReferenceInputs": "{{ evaluationReferenceInputs }}"
}'
;
```
</TabItem>
</Tabs>
