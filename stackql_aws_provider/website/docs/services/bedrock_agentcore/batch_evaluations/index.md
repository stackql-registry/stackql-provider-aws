--- 
title: batch_evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_evaluations
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

Creates, updates, deletes, gets or lists a <code>batch_evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.batch_evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_batch_evaluation"
    values={[
        { label: 'get_batch_evaluation', value: 'get_batch_evaluation' },
        { label: 'list_batch_evaluations', value: 'list_batch_evaluations' }
    ]}
>
<TabItem value="get_batch_evaluation">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="batchEvaluationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the batch evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="batchEvaluationId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a batch evaluation (name-prefixed format) (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="batchEvaluationName" /></td>
    <td><code>string</code></td>
    <td>The name of the batch evaluation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch evaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceConfig" /></td>
    <td><code>object</code></td>
    <td>The data source configuration specifying where agent traces are pulled from.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the batch evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetails" /></td>
    <td><code>array</code></td>
    <td>The error details if the batch evaluation encountered failures.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationResults" /></td>
    <td><code>object</code></td>
    <td>The aggregated evaluation results, including session completion counts and evaluator score summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluators" /></td>
    <td><code>array</code></td>
    <td>The list of evaluators applied during the batch evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration specifying where evaluation results are written.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the batch evaluation. (PENDING, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED, STOPPING, STOPPED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch evaluation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_batch_evaluations">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="batchEvaluationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the batch evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="batchEvaluationId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a batch evaluation (name-prefixed format) (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="batchEvaluationName" /></td>
    <td><code>string</code></td>
    <td>The name of the batch evaluation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch evaluation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the batch evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetails" /></td>
    <td><code>array</code></td>
    <td>The error details if the batch evaluation encountered failures.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluationResults" /></td>
    <td><code>object</code></td>
    <td>The aggregated evaluation results.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluators" /></td>
    <td><code>array</code></td>
    <td>The list of evaluators applied during the batch evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the batch evaluation. (PENDING, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED, STOPPING, STOPPED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch evaluation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#get_batch_evaluation"><CopyableCode code="get_batch_evaluation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-batch_evaluation_id"><code>batch_evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a batch evaluation, including its status, configuration, results, and any error details.</td>
</tr>
<tr>
    <td><a href="#list_batch_evaluations"><CopyableCode code="list_batch_evaluations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all batch evaluations in the account, providing summary information about each evaluation's status and configuration.</td>
</tr>
<tr>
    <td><a href="#delete_batch_evaluation"><CopyableCode code="delete_batch_evaluation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-batch_evaluation_id"><code>batch_evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a batch evaluation and its associated results.</td>
</tr>
<tr>
    <td><a href="#start_batch_evaluation"><CopyableCode code="start_batch_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-batchEvaluationName"><code>batchEvaluationName</code></a>, <a href="#parameter-dataSourceConfig"><code>dataSourceConfig</code></a></td>
    <td></td>
    <td>Starts a batch evaluation job that evaluates agent performance across multiple sessions. Batch evaluations pull agent traces from CloudWatch Logs or an existing online evaluation configuration and run specified evaluators and insights against them.</td>
</tr>
<tr>
    <td><a href="#stop_batch_evaluation"><CopyableCode code="stop_batch_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-batch_evaluation_id"><code>batch_evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running batch evaluation. Sessions that have already been evaluated retain their results.</td>
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
<tr id="parameter-batch_evaluation_id">
    <td><CopyableCode code="batch_evaluation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the batch evaluation to stop.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_batch_evaluation"
    values={[
        { label: 'get_batch_evaluation', value: 'get_batch_evaluation' },
        { label: 'list_batch_evaluations', value: 'list_batch_evaluations' }
    ]}
>
<TabItem value="get_batch_evaluation">

Retrieves detailed information about a batch evaluation, including its status, configuration, results, and any error details.

```sql
SELECT
batchEvaluationArn,
batchEvaluationId,
batchEvaluationName,
createdAt,
dataSourceConfig,
description,
errorDetails,
evaluationResults,
evaluators,
outputConfig,
status,
updatedAt
FROM aws.bedrock_agentcore.batch_evaluations
WHERE batch_evaluation_id = '{{ batch_evaluation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_batch_evaluations">

Lists all batch evaluations in the account, providing summary information about each evaluation's status and configuration.

```sql
SELECT
batchEvaluationArn,
batchEvaluationId,
batchEvaluationName,
createdAt,
description,
errorDetails,
evaluationResults,
evaluators,
status,
updatedAt
FROM aws.bedrock_agentcore.batch_evaluations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_batch_evaluation"
    values={[
        { label: 'delete_batch_evaluation', value: 'delete_batch_evaluation' }
    ]}
>
<TabItem value="delete_batch_evaluation">

Deletes a batch evaluation and its associated results.

```sql
DELETE FROM aws.bedrock_agentcore.batch_evaluations
WHERE batch_evaluation_id = '{{ batch_evaluation_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_batch_evaluation"
    values={[
        { label: 'start_batch_evaluation', value: 'start_batch_evaluation' },
        { label: 'stop_batch_evaluation', value: 'stop_batch_evaluation' }
    ]}
>
<TabItem value="start_batch_evaluation">

Starts a batch evaluation job that evaluates agent performance across multiple sessions. Batch evaluations pull agent traces from CloudWatch Logs or an existing online evaluation configuration and run specified evaluators and insights against them.

```sql
EXEC aws.bedrock_agentcore.batch_evaluations.start_batch_evaluation 
@region='{{ region }}' --required 
@@json=
'{
"batchEvaluationName": "{{ batchEvaluationName }}", 
"evaluators": "{{ evaluators }}", 
"dataSourceConfig": "{{ dataSourceConfig }}", 
"clientToken": "{{ clientToken }}", 
"evaluationMetadata": "{{ evaluationMetadata }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="stop_batch_evaluation">

Stops a running batch evaluation. Sessions that have already been evaluated retain their results.

```sql
EXEC aws.bedrock_agentcore.batch_evaluations.stop_batch_evaluation 
@batch_evaluation_id='{{ batch_evaluation_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
