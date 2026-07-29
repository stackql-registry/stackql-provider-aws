--- 
title: maintenance_window_execution_task_invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_window_execution_task_invocations
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

Creates, updates, deletes, gets or lists a <code>maintenance_window_execution_task_invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_window_execution_task_invocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.maintenance_window_execution_task_invocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance_window_execution_task_invocation"
    values={[
        { label: 'get_maintenance_window_execution_task_invocation', value: 'get_maintenance_window_execution_task_invocation' },
        { label: 'describe_maintenance_window_execution_task_invocations', value: 'describe_maintenance_window_execution_task_invocations' }
    ]}
>
<TabItem value="get_maintenance_window_execution_task_invocation">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the task finished running on the target.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution ID.</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_id" /></td>
    <td><code>string</code></td>
    <td>The invocation ID. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_information" /></td>
    <td><code>string</code></td>
    <td>User-provided value to be included in any Amazon CloudWatch Events or Amazon EventBridge events raised while running tasks for these targets in this maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string</code></td>
    <td>The parameters used at the time that the task ran.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the task started running on the target.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The task status for an invocation. (PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>The details explaining the status. Details are only available for certain status values.</td>
</tr>
<tr>
    <td><CopyableCode code="task_execution_id" /></td>
    <td><code>string</code></td>
    <td>The task execution ID. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>Retrieves the task type for a maintenance window. (RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="window_execution_id" /></td>
    <td><code>string</code></td>
    <td>The maintenance window execution ID. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="window_target_id" /></td>
    <td><code>string</code></td>
    <td>The maintenance window target ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_maintenance_window_execution_task_invocations">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the invocation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the action performed in the service that actually handled the task invocation. If the task type is RUN_COMMAND, this value is the command ID.</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the task invocation. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_information" /></td>
    <td><code>string</code></td>
    <td>User-provided value that was specified when the target was registered with the maintenance window. This was also included in any Amazon CloudWatch Events events raised during the task invocation.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string</code></td>
    <td>The parameters that were provided for the invocation when it was run.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the invocation started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the task invocation. (PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, CANCELLED, SKIPPED_OVERLAPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>The details explaining the status of the task invocation. Not available for all status values.</td>
</tr>
<tr>
    <td><CopyableCode code="task_execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the specific task execution in the maintenance window execution. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_type" /></td>
    <td><code>string</code></td>
    <td>The task type. (RUN_COMMAND, AUTOMATION, STEP_FUNCTIONS, LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="window_execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the maintenance window execution that ran the task. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="window_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target definition in this maintenance window the invocation was performed for.</td>
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
    <td><a href="#get_maintenance_window_execution_task_invocation"><CopyableCode code="get_maintenance_window_execution_task_invocation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific task running on a specific target.</td>
</tr>
<tr>
    <td><a href="#describe_maintenance_window_execution_task_invocations"><CopyableCode code="describe_maintenance_window_execution_task_invocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.</td>
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
    defaultValue="get_maintenance_window_execution_task_invocation"
    values={[
        { label: 'get_maintenance_window_execution_task_invocation', value: 'get_maintenance_window_execution_task_invocation' },
        { label: 'describe_maintenance_window_execution_task_invocations', value: 'describe_maintenance_window_execution_task_invocations' }
    ]}
>
<TabItem value="get_maintenance_window_execution_task_invocation">

Retrieves information about a specific task running on a specific target.

```sql
SELECT
end_time,
execution_id,
invocation_id,
owner_information,
parameters,
start_time,
status,
status_details,
task_execution_id,
task_type,
window_execution_id,
window_target_id
FROM aws.ssm.maintenance_window_execution_task_invocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_maintenance_window_execution_task_invocations">

Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.

```sql
SELECT
end_time,
execution_id,
invocation_id,
owner_information,
parameters,
start_time,
status,
status_details,
task_execution_id,
task_type,
window_execution_id,
window_target_id
FROM aws.ssm.maintenance_window_execution_task_invocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
