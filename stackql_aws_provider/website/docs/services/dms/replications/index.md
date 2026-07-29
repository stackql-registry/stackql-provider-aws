--- 
title: replications
hide_title: false
hide_table_of_contents: false
keywords:
  - replications
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

Creates, updates, deletes, gets or lists a <code>replications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replications"
    values={[
        { label: 'describe_replications', value: 'describe_replications' }
    ]}
>
<TabItem value="describe_replications">

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
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr>
    <td><CopyableCode code="replications" /></td>
    <td><code>array</code></td>
    <td>The replication descriptions.</td>
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
    <td><a href="#describe_replications"><CopyableCode code="describe_replications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details on replication progress by returning status information for one or more provisioned DMS Serverless replications.</td>
</tr>
<tr>
    <td><a href="#move_replication_task"><CopyableCode code="move_replication_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a>, <a href="#parameter-TargetReplicationInstanceArn"><code>TargetReplicationInstanceArn</code></a></td>
    <td></td>
    <td>Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.</td>
</tr>
<tr>
    <td><a href="#reboot_replication_instance"><CopyableCode code="reboot_replication_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationInstanceArn"><code>ReplicationInstanceArn</code></a></td>
    <td></td>
    <td>Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.</td>
</tr>
<tr>
    <td><a href="#start_replication_task"><CopyableCode code="start_replication_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a>, <a href="#parameter-StartReplicationTaskType"><code>StartReplicationTaskType</code></a></td>
    <td></td>
    <td>Starts the replication task. For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_replication_task"><CopyableCode code="stop_replication_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a></td>
    <td></td>
    <td>Stops the replication task.</td>
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
    defaultValue="describe_replications"
    values={[
        { label: 'describe_replications', value: 'describe_replications' }
    ]}
>
<TabItem value="describe_replications">

Provides details on replication progress by returning status information for one or more provisioned DMS Serverless replications.

```sql
SELECT
marker,
replications
FROM aws.dms.replications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="move_replication_task"
    values={[
        { label: 'move_replication_task', value: 'move_replication_task' },
        { label: 'reboot_replication_instance', value: 'reboot_replication_instance' },
        { label: 'start_replication_task', value: 'start_replication_task' },
        { label: 'stop_replication_task', value: 'stop_replication_task' }
    ]}
>
<TabItem value="move_replication_task">

Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.

```sql
EXEC aws.dms.replications.move_replication_task 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskArn": "{{ ReplicationTaskArn }}", 
"TargetReplicationInstanceArn": "{{ TargetReplicationInstanceArn }}"
}'
;
```
</TabItem>
<TabItem value="reboot_replication_instance">

Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.

```sql
EXEC aws.dms.replications.reboot_replication_instance 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationInstanceArn": "{{ ReplicationInstanceArn }}", 
"ForceFailover": {{ ForceFailover }}, 
"ForcePlannedFailover": {{ ForcePlannedFailover }}
}'
;
```
</TabItem>
<TabItem value="start_replication_task">

Starts the replication task. For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide.

```sql
EXEC aws.dms.replications.start_replication_task 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskArn": "{{ ReplicationTaskArn }}", 
"StartReplicationTaskType": "{{ StartReplicationTaskType }}", 
"CdcStartTime": "{{ CdcStartTime }}", 
"CdcStartPosition": "{{ CdcStartPosition }}", 
"CdcStopPosition": "{{ CdcStopPosition }}"
}'
;
```
</TabItem>
<TabItem value="stop_replication_task">

Stops the replication task.

```sql
EXEC aws.dms.replications.stop_replication_task 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskArn": "{{ ReplicationTaskArn }}"
}'
;
```
</TabItem>
</Tabs>
