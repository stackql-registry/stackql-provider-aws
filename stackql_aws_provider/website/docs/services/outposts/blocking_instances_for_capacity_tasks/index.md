--- 
title: blocking_instances_for_capacity_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - blocking_instances_for_capacity_tasks
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

Creates, updates, deletes, gets or lists a <code>blocking_instances_for_capacity_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blocking_instances_for_capacity_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.blocking_instances_for_capacity_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_blocking_instances_for_capacity_task"
    values={[
        { label: 'list_blocking_instances_for_capacity_task', value: 'list_blocking_instances_for_capacity_task' }
    ]}
>
<TabItem value="list_blocking_instances_for_capacity_task">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_service_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service name that owns the specified blocking instance. (AWS, EC2, ELASTICACHE, ELB, RDS, ROUTE53)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the blocking instance. (pattern: &lt;code&gt;^i-&#91;0-9a-z&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_blocking_instances_for_capacity_task"><CopyableCode code="list_blocking_instances_for_capacity_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-capacity_task_id"><code>capacity_task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>A list of Amazon EC2 instances running on the Outpost and belonging to the account that initiated the capacity task. Use this list to specify the instances you cannot stop to free up capacity to run the capacity task.</td>
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
    <td>The ID of the capacity task.</td>
</tr>
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the Outpost associated with the specified capacity task.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_blocking_instances_for_capacity_task"
    values={[
        { label: 'list_blocking_instances_for_capacity_task', value: 'list_blocking_instances_for_capacity_task' }
    ]}
>
<TabItem value="list_blocking_instances_for_capacity_task">

A list of Amazon EC2 instances running on the Outpost and belonging to the account that initiated the capacity task. Use this list to specify the instances you cannot stop to free up capacity to run the capacity task.

```sql
SELECT
account_id,
aws_service_name,
instance_id
FROM aws.outposts.blocking_instances_for_capacity_tasks
WHERE outpost_id = '{{ outpost_id }}' -- required
AND capacity_task_id = '{{ capacity_task_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
