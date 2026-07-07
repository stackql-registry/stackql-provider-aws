--- 
title: human_loops
hide_title: false
hide_table_of_contents: false
keywords:
  - human_loops
  - sagemaker_a2i_runtime
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

Creates, updates, deletes, gets or lists a <code>human_loops</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="human_loops" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_a2i_runtime.human_loops" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_human_loop"
    values={[
        { label: 'describe_human_loop', value: 'describe_human_loop' },
        { label: 'list_human_loops', value: 'list_human_loops' }
    ]}
>
<TabItem value="describe_human_loop">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time when Amazon Augmented AI created the human loop.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureCode" /></td>
    <td><code>string</code></td>
    <td>A failure code that identifies the type of failure. Possible values: ValidationError, Expired, InternalError</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why a human loop failed. The failure reason is returned when the status of the human loop is Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow definition. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:flow-definition/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the human loop. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:human-loop/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopName" /></td>
    <td><code>string</code></td>
    <td>The name of the human loop. The name must be lowercase, unique within the Region in your account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen). (pattern: &lt;code&gt;^&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopOutput" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the output of the human loop.</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the human loop. (InProgress, Failed, Completed, Stopped, Stopping)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_human_loops">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When Amazon Augmented AI created the human loop.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why the human loop failed. A failure reason is returned when the status of the human loop is Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow definition used to configure the human loop. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:flow-definition/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopName" /></td>
    <td><code>string</code></td>
    <td>The name of the human loop. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the human loop. (InProgress, Failed, Completed, Stopped, Stopping)</td>
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
    <td><a href="#describe_human_loop"><CopyableCode code="describe_human_loop" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-human_loop_name"><code>human_loop_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified human loop. If the human loop was deleted, this operation will return a ResourceNotFoundException error.</td>
</tr>
<tr>
    <td><a href="#list_human_loops"><CopyableCode code="list_human_loops" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-FlowDefinitionArn"><code>FlowDefinitionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CreationTimeAfter"><code>CreationTimeAfter</code></a>, <a href="#parameter-CreationTimeBefore"><code>CreationTimeBefore</code></a>, <a href="#parameter-SortOrder"><code>SortOrder</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.</td>
</tr>
<tr>
    <td><a href="#delete_human_loop"><CopyableCode code="delete_human_loop" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-human_loop_name"><code>human_loop_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified human loop for a flow definition. If the human loop was deleted, this operation will return a ResourceNotFoundException.</td>
</tr>
<tr>
    <td><a href="#start_human_loop"><CopyableCode code="start_human_loop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HumanLoopName"><code>HumanLoopName</code></a>, <a href="#parameter-FlowDefinitionArn"><code>FlowDefinitionArn</code></a>, <a href="#parameter-HumanLoopInput"><code>HumanLoopInput</code></a></td>
    <td></td>
    <td>Starts a human loop, provided that at least one activation condition is met.</td>
</tr>
<tr>
    <td><a href="#stop_human_loop"><CopyableCode code="stop_human_loop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HumanLoopName"><code>HumanLoopName</code></a></td>
    <td></td>
    <td>Stops the specified human loop.</td>
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
<tr id="parameter-FlowDefinitionArn">
    <td><CopyableCode code="FlowDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a flow definition.</td>
</tr>
<tr id="parameter-human_loop_name">
    <td><CopyableCode code="human_loop_name" /></td>
    <td><code>string</code></td>
    <td>The name of the human loop that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CreationTimeAfter">
    <td><CopyableCode code="CreationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, 2020-02-24.</td>
</tr>
<tr id="parameter-CreationTimeBefore">
    <td><CopyableCode code="CreationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, 2020-02-24.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of items to return. If the total number of available items is more than the value specified in MaxResults, then a NextToken is returned in the output. You can use this token to display the next page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token to display the next page of results.</td>
</tr>
<tr id="parameter-SortOrder">
    <td><CopyableCode code="SortOrder" /></td>
    <td><code>string</code></td>
    <td>Optional. The order for displaying results. Valid values: Ascending and Descending.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_human_loop"
    values={[
        { label: 'describe_human_loop', value: 'describe_human_loop' },
        { label: 'list_human_loops', value: 'list_human_loops' }
    ]}
>
<TabItem value="describe_human_loop">

Returns information about the specified human loop. If the human loop was deleted, this operation will return a ResourceNotFoundException error.

```sql
SELECT
CreationTime,
FailureCode,
FailureReason,
FlowDefinitionArn,
HumanLoopArn,
HumanLoopName,
HumanLoopOutput,
HumanLoopStatus
FROM aws.sagemaker_a2i_runtime.human_loops
WHERE human_loop_name = '{{ human_loop_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_human_loops">

Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.

```sql
SELECT
CreationTime,
FailureReason,
FlowDefinitionArn,
HumanLoopName,
HumanLoopStatus
FROM aws.sagemaker_a2i_runtime.human_loops
WHERE FlowDefinitionArn = '{{ FlowDefinitionArn }}' -- required
AND region = '{{ region }}' -- required
AND CreationTimeAfter = '{{ CreationTimeAfter }}'
AND CreationTimeBefore = '{{ CreationTimeBefore }}'
AND SortOrder = '{{ SortOrder }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_human_loop"
    values={[
        { label: 'delete_human_loop', value: 'delete_human_loop' }
    ]}
>
<TabItem value="delete_human_loop">

Deletes the specified human loop for a flow definition. If the human loop was deleted, this operation will return a ResourceNotFoundException.

```sql
DELETE FROM aws.sagemaker_a2i_runtime.human_loops
WHERE human_loop_name = '{{ human_loop_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_human_loop"
    values={[
        { label: 'start_human_loop', value: 'start_human_loop' },
        { label: 'stop_human_loop', value: 'stop_human_loop' }
    ]}
>
<TabItem value="start_human_loop">

Starts a human loop, provided that at least one activation condition is met.

```sql
EXEC aws.sagemaker_a2i_runtime.human_loops.start_human_loop 
@region='{{ region }}' --required 
@@json=
'{
"HumanLoopName": "{{ HumanLoopName }}", 
"FlowDefinitionArn": "{{ FlowDefinitionArn }}", 
"HumanLoopInput": "{{ HumanLoopInput }}", 
"DataAttributes": "{{ DataAttributes }}"
}'
;
```
</TabItem>
<TabItem value="stop_human_loop">

Stops the specified human loop.

```sql
EXEC aws.sagemaker_a2i_runtime.human_loops.stop_human_loop 
@region='{{ region }}' --required 
@@json=
'{
"HumanLoopName": "{{ HumanLoopName }}"
}'
;
```
</TabItem>
</Tabs>
