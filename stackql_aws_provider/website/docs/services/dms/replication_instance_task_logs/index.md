--- 
title: replication_instance_task_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_instance_task_logs
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_instance_task_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_instance_task_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_instance_task_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_instance_task_logs"
    values={[
        { label: 'describe_replication_instance_task_logs', value: 'describe_replication_instance_task_logs' }
    ]}
>
<TabItem value="describe_replication_instance_task_logs">

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
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceTaskLogs" /></td>
    <td><code>array</code></td>
    <td>An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes).</td>
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
    <td><a href="#describe_replication_instance_task_logs"><CopyableCode code="describe_replication_instance_task_logs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the task logs for the specified task.</td>
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
    defaultValue="describe_replication_instance_task_logs"
    values={[
        { label: 'describe_replication_instance_task_logs', value: 'describe_replication_instance_task_logs' }
    ]}
>
<TabItem value="describe_replication_instance_task_logs">

Returns information about the task logs for the specified task.

```sql
SELECT
Marker,
ReplicationInstanceArn,
ReplicationInstanceTaskLogs
FROM aws.dms.replication_instance_task_logs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
