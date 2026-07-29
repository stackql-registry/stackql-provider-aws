--- 
title: capacity_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_tasks
  - outposts
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

Creates, updates, deletes, gets or lists a <code>capacity_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.capacity_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_task"
    values={[
        { label: 'get_capacity_task', value: 'get_capacity_task' },
        { label: 'list_capacity_tasks', value: 'list_capacity_tasks' }
    ]}
>
<TabItem value="get_capacity_task">

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
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration. (pattern: &lt;code&gt;^(\w+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_task_id" /></td>
    <td><code>string</code></td>
    <td>ID of the capacity task. (pattern: &lt;code&gt;^cap-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_task_status" /></td>
    <td><code>string</code></td>
    <td>Status of the capacity task. A capacity task can have one of the following statuses: REQUESTED - The capacity task was created and is awaiting the next step by Amazon Web Services Outposts. IN_PROGRESS - The capacity task is running and cannot be cancelled. FAILED - The capacity task could not be completed. COMPLETED - The capacity task has completed successfully. WAITING_FOR_EVACUATION - The capacity task requires capacity to run. You must stop the recommended EC2 running instances to free up capacity for the task to run. CANCELLATION_IN_PROGRESS - The capacity task has been cancelled and is in the process of cleaning up resources. CANCELLED - The capacity task is cancelled. (REQUESTED, IN_PROGRESS, FAILED, COMPLETED, WAITING_FOR_EVACUATION, CANCELLATION_IN_PROGRESS, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the capacity task ran successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the capacity task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dry_run" /></td>
    <td><code>boolean</code></td>
    <td>Performs a dry run to determine if you are above or below instance capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="failed" /></td>
    <td><code>object</code></td>
    <td>Reason why the capacity task failed.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_to_exclude" /></td>
    <td><code>object</code></td>
    <td>Instances that the user specified they cannot stop in order to free up the capacity needed to run the capacity task.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the capacity task was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Amazon Web Services Outposts order associated with the specified capacity task. (pattern: &lt;code&gt;oo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Outpost associated with the specified capacity task. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/)?op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_instance_pools" /></td>
    <td><code>array</code></td>
    <td>List of instance pools requested in the capacity task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_action_on_blocking_instances" /></td>
    <td><code>string</code></td>
    <td>User-specified option in case an instance is blocking the capacity task from running. Shows one of the following options: WAIT_FOR_EVACUATION - Checks every 10 minutes over 48 hours to determine if instances have stopped and capacity is available to complete the task. FAIL_TASK - The capacity task fails. (WAIT_FOR_EVACUATION, FAIL_TASK)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_capacity_tasks">

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
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset. An Outpost asset can be a single server within an Outposts rack or an Outposts server configuration. (pattern: &lt;code&gt;^(\w+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the specified capacity task. (pattern: &lt;code&gt;^cap-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_task_status" /></td>
    <td><code>string</code></td>
    <td>The status of the capacity task. (REQUESTED, IN_PROGRESS, FAILED, COMPLETED, WAITING_FOR_EVACUATION, CANCELLATION_IN_PROGRESS, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the specified capacity task successfully ran.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the specified capacity task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the specified capacity was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Outposts order of the host associated with the capacity task. (pattern: &lt;code&gt;oo-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost associated with the specified capacity task. (pattern: &lt;code&gt;^(arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/)?op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_capacity_task"><CopyableCode code="get_capacity_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-capacity_task_id"><code>capacity_task_id</code></a>, <a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details of the specified capacity task.</td>
</tr>
<tr>
    <td><a href="#list_capacity_tasks"><CopyableCode code="list_capacity_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OutpostIdentifierFilter"><code>OutpostIdentifierFilter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-CapacityTaskStatusFilter"><code>CapacityTaskStatusFilter</code></a></td>
    <td>Lists the capacity tasks for your Amazon Web Services account. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</td>
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
<tr id="parameter-capacity_task_id">
    <td><CopyableCode code="capacity_task_id" /></td>
    <td><code>string</code></td>
    <td>ID of the capacity task.</td>
</tr>
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>ID or ARN of the Outpost associated with the specified capacity task.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CapacityTaskStatusFilter">
    <td><CopyableCode code="CapacityTaskStatusFilter" /></td>
    <td><code>array</code></td>
    <td>A list of statuses. For example, REQUESTED or WAITING_FOR_EVACUATION.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-OutpostIdentifierFilter">
    <td><CopyableCode code="OutpostIdentifierFilter" /></td>
    <td><code>string</code></td>
    <td>Filters the results by an Outpost ID or an Outpost ARN.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capacity_task"
    values={[
        { label: 'get_capacity_task', value: 'get_capacity_task' },
        { label: 'list_capacity_tasks', value: 'list_capacity_tasks' }
    ]}
>
<TabItem value="get_capacity_task">

Gets details of the specified capacity task.

```sql
SELECT
asset_id,
capacity_task_id,
capacity_task_status,
completion_date,
creation_date,
dry_run,
failed,
instances_to_exclude,
last_modified_date,
order_id,
outpost_id,
requested_instance_pools,
task_action_on_blocking_instances
FROM aws.outposts.capacity_tasks
WHERE capacity_task_id = '{{ capacity_task_id }}' -- required
AND outpost_id = '{{ outpost_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_capacity_tasks">

Lists the capacity tasks for your Amazon Web Services account. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.

```sql
SELECT
asset_id,
capacity_task_id,
capacity_task_status,
completion_date,
creation_date,
last_modified_date,
order_id,
outpost_id
FROM aws.outposts.capacity_tasks
WHERE region = '{{ region }}' -- required
AND OutpostIdentifierFilter = '{{ OutpostIdentifierFilter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND CapacityTaskStatusFilter = '{{ CapacityTaskStatusFilter }}'
;
```
</TabItem>
</Tabs>
