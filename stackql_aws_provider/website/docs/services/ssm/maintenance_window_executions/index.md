--- 
title: maintenance_window_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_executions
  - ssm
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

Creates, updates, deletes, gets or lists a <code>maintenance_window_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_window_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_window_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_maintenance_window_executions"
    values={[
        { label: 'describe_maintenance_window_executions', value: 'describe_maintenance_window_executions' },
        { label: 'get_maintenance_window_execution', value: 'get_maintenance_window_execution' }
    ]}
>
<TabItem value="describe_maintenance_window_executions">

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
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution finished.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the execution. (PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>The details explaining the status. Not available for all status values.</td>
</tr>
<tr>
    <td><CopyableCode code="WindowExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window execution. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window. (pattern: &lt;code&gt;^mw-&#91;0-9a-f&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_maintenance_window_execution">

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
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the maintenance window finished running.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the maintenance window started running.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the maintenance window execution. (PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>The details explaining the status. Not available for all status values.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskIds" /></td>
    <td><code>array</code></td>
    <td>The ID of the task executions from the maintenance window execution.</td>
</tr>
<tr>
    <td><CopyableCode code="WindowExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window execution. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_maintenance_window_executions"><CopyableCode code="describe_maintenance_window_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.</td>
</tr>
<tr>
    <td><a href="#get_maintenance_window_execution"><CopyableCode code="get_maintenance_window_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific a maintenance window execution.</td>
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
    defaultValue="describe_maintenance_window_executions"
    values={[
        { label: 'describe_maintenance_window_executions', value: 'describe_maintenance_window_executions' },
        { label: 'get_maintenance_window_execution', value: 'get_maintenance_window_execution' }
    ]}
>
<TabItem value="describe_maintenance_window_executions">

Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.

```sql
SELECT
EndTime,
StartTime,
Status,
StatusDetails,
WindowExecutionId,
WindowId
FROM aws.ssm.maintenance_window_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_maintenance_window_execution">

Retrieves details about a specific a maintenance window execution.

```sql
SELECT
EndTime,
StartTime,
Status,
StatusDetails,
TaskIds,
WindowExecutionId
FROM aws.ssm.maintenance_window_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
