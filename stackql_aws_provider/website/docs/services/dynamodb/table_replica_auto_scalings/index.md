--- 
title: table_replica_auto_scalings
hide_title: false
hide_table_of_contents: false
keywords:
  - table_replica_auto_scalings
  - dynamodb
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

Creates, updates, deletes, gets or lists a <code>table_replica_auto_scalings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_replica_auto_scalings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.table_replica_auto_scalings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_table_replica_auto_scaling"
    values={[
        { label: 'describe_table_replica_auto_scaling', value: 'describe_table_replica_auto_scaling' }
    ]}
>
<TabItem value="describe_table_replica_auto_scaling">

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
    <td><CopyableCode code="replicas" /></td>
    <td><code>array</code></td>
    <td>Represents replicas of the global table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the table: CREATING - The table is being created. UPDATING - The table is being updated. DELETING - The table is being deleted. ACTIVE - The table is ready for use. (CREATING, UPDATING, DELETING, ACTIVE, INACCESSIBLE_ENCRYPTION_CREDENTIALS, ARCHIVING, ARCHIVED, REPLICATION_NOT_AUTHORIZED)</td>
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
    <td><a href="#describe_table_replica_auto_scaling"><CopyableCode code="describe_table_replica_auto_scaling" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes auto scaling settings across replicas of the global table at once.</td>
</tr>
<tr>
    <td><a href="#update_table_replica_auto_scaling"><CopyableCode code="update_table_replica_auto_scaling" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Updates auto scaling settings on your global tables at once.</td>
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
    defaultValue="describe_table_replica_auto_scaling"
    values={[
        { label: 'describe_table_replica_auto_scaling', value: 'describe_table_replica_auto_scaling' }
    ]}
>
<TabItem value="describe_table_replica_auto_scaling">

Describes auto scaling settings across replicas of the global table at once.

```sql
SELECT
replicas,
table_name,
table_status
FROM aws.dynamodb.table_replica_auto_scalings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_table_replica_auto_scaling"
    values={[
        { label: 'update_table_replica_auto_scaling', value: 'update_table_replica_auto_scaling' }
    ]}
>
<TabItem value="update_table_replica_auto_scaling">

Updates auto scaling settings on your global tables at once.

```sql
UPDATE aws.dynamodb.table_replica_auto_scalings
SET 
GlobalSecondaryIndexUpdates = '{{ GlobalSecondaryIndexUpdates }}',
TableName = '{{ TableName }}',
ProvisionedWriteCapacityAutoScalingUpdate = '{{ ProvisionedWriteCapacityAutoScalingUpdate }}',
ReplicaUpdates = '{{ ReplicaUpdates }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
RETURNING
table_auto_scaling_description;
```
</TabItem>
</Tabs>
