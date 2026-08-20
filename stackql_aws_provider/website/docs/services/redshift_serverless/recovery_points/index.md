--- 
title: recovery_points
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_points
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>recovery_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.recovery_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_point"
    values={[
        { label: 'get_recovery_point', value: 'get_recovery_point' },
        { label: 'list_recovery_points', value: 'list_recovery_points' }
    ]}
>
<TabItem value="get_recovery_point">

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
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the namespace the recovery point is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace the recovery point is associated with. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the recovery point is created.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="total_size_in_mega_bytes" /></td>
    <td><code>number (double)</code></td>
    <td>The total size of the data in the recovery point in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup the recovery point is associated with. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recovery_points">

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
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the namespace the recovery point is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace the recovery point is associated with. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the recovery point is created.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="total_size_in_mega_bytes" /></td>
    <td><code>number (double)</code></td>
    <td>The total size of the data in the recovery point in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup the recovery point is associated with. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_recovery_point"><CopyableCode code="get_recovery_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a recovery point.</td>
</tr>
<tr>
    <td><a href="#list_recovery_points"><CopyableCode code="list_recovery_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of recovery points.</td>
</tr>
<tr>
    <td><a href="#convert_recovery_point_to_snapshot"><CopyableCode code="convert_recovery_point_to_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPointId"><code>recoveryPointId</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a></td>
    <td></td>
    <td>Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see Working with snapshots and recovery points.</td>
</tr>
<tr>
    <td><a href="#restore_from_recovery_point"><CopyableCode code="restore_from_recovery_point" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-recoveryPointId"><code>recoveryPointId</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Restore the data from a recovery point.</td>
</tr>
<tr>
    <td><a href="#restore_table_from_recovery_point"><CopyableCode code="restore_table_from_recovery_point" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-newTableName"><code>newTableName</code></a>, <a href="#parameter-recoveryPointId"><code>recoveryPointId</code></a>, <a href="#parameter-sourceDatabaseName"><code>sourceDatabaseName</code></a>, <a href="#parameter-sourceTableName"><code>sourceTableName</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Restores a table from a recovery point to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.</td>
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
    defaultValue="get_recovery_point"
    values={[
        { label: 'get_recovery_point', value: 'get_recovery_point' },
        { label: 'list_recovery_points', value: 'list_recovery_points' }
    ]}
>
<TabItem value="get_recovery_point">

Returns information about a recovery point.

```sql
SELECT
namespace_arn,
namespace_name,
recovery_point_create_time,
recovery_point_id,
total_size_in_mega_bytes,
workgroup_name
FROM aws.redshift_serverless.recovery_points
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recovery_points">

Returns an array of recovery points.

```sql
SELECT
namespace_arn,
namespace_name,
recovery_point_create_time,
recovery_point_id,
total_size_in_mega_bytes,
workgroup_name
FROM aws.redshift_serverless.recovery_points
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="convert_recovery_point_to_snapshot"
    values={[
        { label: 'convert_recovery_point_to_snapshot', value: 'convert_recovery_point_to_snapshot' },
        { label: 'restore_from_recovery_point', value: 'restore_from_recovery_point' },
        { label: 'restore_table_from_recovery_point', value: 'restore_table_from_recovery_point' }
    ]}
>
<TabItem value="convert_recovery_point_to_snapshot">

Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see Working with snapshots and recovery points.

```sql
EXEC aws.redshift_serverless.recovery_points.convert_recovery_point_to_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"recoveryPointId": "{{ recoveryPointId }}", 
"retentionPeriod": {{ retentionPeriod }}, 
"snapshotName": "{{ snapshotName }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="restore_from_recovery_point">

Restore the data from a recovery point.

```sql
EXEC aws.redshift_serverless.recovery_points.restore_from_recovery_point 
@region='{{ region }}' --required 
@@json=
'{
"maintainIntegration": {{ maintainIntegration }}, 
"namespaceName": "{{ namespaceName }}", 
"recoveryPointId": "{{ recoveryPointId }}", 
"workgroupName": "{{ workgroupName }}"
}'
;
```
</TabItem>
<TabItem value="restore_table_from_recovery_point">

Restores a table from a recovery point to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.

```sql
EXEC aws.redshift_serverless.recovery_points.restore_table_from_recovery_point 
@region='{{ region }}' --required 
@@json=
'{
"activateCaseSensitiveIdentifier": {{ activateCaseSensitiveIdentifier }}, 
"namespaceName": "{{ namespaceName }}", 
"newTableName": "{{ newTableName }}", 
"recoveryPointId": "{{ recoveryPointId }}", 
"sourceDatabaseName": "{{ sourceDatabaseName }}", 
"sourceSchemaName": "{{ sourceSchemaName }}", 
"sourceTableName": "{{ sourceTableName }}", 
"targetDatabaseName": "{{ targetDatabaseName }}", 
"targetSchemaName": "{{ targetSchemaName }}", 
"workgroupName": "{{ workgroupName }}"
}'
;
```
</TabItem>
</Tabs>
