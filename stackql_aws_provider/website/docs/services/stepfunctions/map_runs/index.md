--- 
title: map_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - map_runs
  - stepfunctions
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

Creates, updates, deletes, gets or lists a <code>map_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="map_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.map_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_map_run"
    values={[
        { label: 'describe_map_run', value: 'describe_map_run' },
        { label: 'list_map_runs', value: 'list_map_runs' }
    ]}
>
<TabItem value="describe_map_run">

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
    <td><CopyableCode code="executionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="executionCounts" /></td>
    <td><code>object</code></td>
    <td>A JSON object that contains information about the total number of child workflow executions for the Map Run, and the count of child workflow executions for each status, such as failed and succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="itemCounts" /></td>
    <td><code>object</code></td>
    <td>A JSON object that contains information about the total number of items, and the item count for each processing status, such as pending and failed.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies a Map Run.</td>
</tr>
<tr>
    <td><CopyableCode code="maxConcurrency" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of child workflow executions configured to run in parallel for the Map Run at the same time.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveCount" /></td>
    <td><code>integer</code></td>
    <td>The number of times you've redriven a Map Run. If you have not yet redriven a Map Run, the redriveCount is 0. This count is only updated if you successfully redrive a Map Run.</td>
</tr>
<tr>
    <td><CopyableCode code="redriveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date a Map Run was last redriven. If you have not yet redriven a Map Run, the redriveDate is null.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Map Run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Map Run. (RUNNING, SUCCEEDED, FAILED, ABORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="stopDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Map Run was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="toleratedFailureCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of failed child workflow executions before the Map Run fails.</td>
</tr>
<tr>
    <td><CopyableCode code="toleratedFailurePercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The maximum percentage of failed child workflow executions before the Map Run fails.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_map_runs">

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
    <td><CopyableCode code="executionArn" /></td>
    <td><code>string</code></td>
    <td>The executionArn of the execution from which the Map Run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="mapRunArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Map Run.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the Map Run started.</td>
</tr>
<tr>
    <td><CopyableCode code="stateMachineArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the executed state machine.</td>
</tr>
<tr>
    <td><CopyableCode code="stopDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the Map Run stopped.</td>
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
    <td><a href="#describe_map_run"><CopyableCode code="describe_map_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run, this API action also returns information about the redrives of that Map Run. For more information, see Examining Map Run in the Step Functions Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_map_runs"><CopyableCode code="list_map_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call DescribeMapRun to obtain more information, if needed.</td>
</tr>
<tr>
    <td><a href="#update_map_run"><CopyableCode code="update_map_run" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-mapRunArn"><code>mapRunArn</code></a></td>
    <td></td>
    <td>Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_map_run"
    values={[
        { label: 'describe_map_run', value: 'describe_map_run' },
        { label: 'list_map_runs', value: 'list_map_runs' }
    ]}
>
<TabItem value="describe_map_run">

Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run, this API action also returns information about the redrives of that Map Run. For more information, see Examining Map Run in the Step Functions Developer Guide.

```sql
SELECT
executionArn,
executionCounts,
itemCounts,
mapRunArn,
maxConcurrency,
redriveCount,
redriveDate,
startDate,
status,
stopDate,
toleratedFailureCount,
toleratedFailurePercentage
FROM aws.stepfunctions.map_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_map_runs">

Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

```sql
SELECT
executionArn,
mapRunArn,
startDate,
stateMachineArn,
stopDate
FROM aws.stepfunctions.map_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_map_run"
    values={[
        { label: 'update_map_run', value: 'update_map_run' }
    ]}
>
<TabItem value="update_map_run">

Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.

```sql
UPDATE aws.stepfunctions.map_runs
SET 
mapRunArn = '{{ mapRunArn }}',
maxConcurrency = {{ maxConcurrency }},
toleratedFailurePercentage = {{ toleratedFailurePercentage }},
toleratedFailureCount = {{ toleratedFailureCount }}
WHERE 
region = '{{ region }}' --required
AND mapRunArn = '{{ mapRunArn }}' --required;
```
</TabItem>
</Tabs>
