--- 
title: table_restore_status
hide_title: false
hide_table_of_contents: false
keywords:
  - table_restore_status
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

Creates, updates, deletes, gets or lists a <code>table_restore_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_restore_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.table_restore_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_restore_status"
    values={[
        { label: 'get_table_restore_status', value: 'get_table_restore_status' },
        { label: 'list_table_restore_status', value: 'list_table_restore_status' }
    ]}
>
<TabItem value="get_table_restore_status">

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
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message that explains the returned status. For example, if the status of the operation is FAILED, the message explains why the operation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The namespace of the table being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="new_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table to create from the restore operation.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_in_mega_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of data restored to the new table so far, in megabytes (MB).</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the recovery point being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="request_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the table restore request was made, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source database being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source schema being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source table being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A value that describes the current state of the table restore request. Possible values are SUCCEEDED, FAILED, CANCELED, PENDING, and IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="table_restore_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the RestoreTableFromSnapshot request.</td>
</tr>
<tr>
    <td><CopyableCode code="target_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database to restore to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema to restore to.</td>
</tr>
<tr>
    <td><CopyableCode code="total_data_in_mega_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total amount of data to restore to the new table, in megabytes (MB).</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup being restored from.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_table_restore_status">

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
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message that explains the returned status. For example, if the status of the operation is FAILED, the message explains why the operation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The namespace of the table being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="new_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table to create from the restore operation.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_in_mega_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of data restored to the new table so far, in megabytes (MB).</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the recovery point being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="request_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the table restore request was made, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the snapshot being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source database being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source schema being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source table being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A value that describes the current state of the table restore request. Possible values are SUCCEEDED, FAILED, CANCELED, PENDING, and IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="table_restore_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the RestoreTableFromSnapshot request.</td>
</tr>
<tr>
    <td><CopyableCode code="target_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database to restore to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema to restore to.</td>
</tr>
<tr>
    <td><CopyableCode code="total_data_in_mega_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total amount of data to restore to the new table, in megabytes (MB).</td>
</tr>
<tr>
    <td><CopyableCode code="workgroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup being restored from.</td>
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
    <td><a href="#get_table_restore_status"><CopyableCode code="get_table_restore_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a TableRestoreStatus object.</td>
</tr>
<tr>
    <td><a href="#list_table_restore_status"><CopyableCode code="list_table_restore_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an array of TableRestoreStatus objects.</td>
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
    defaultValue="get_table_restore_status"
    values={[
        { label: 'get_table_restore_status', value: 'get_table_restore_status' },
        { label: 'list_table_restore_status', value: 'list_table_restore_status' }
    ]}
>
<TabItem value="get_table_restore_status">

Returns information about a TableRestoreStatus object.

```sql
SELECT
message,
namespace_name,
new_table_name,
progress_in_mega_bytes,
recovery_point_id,
request_time,
snapshot_name,
source_database_name,
source_schema_name,
source_table_name,
status,
table_restore_request_id,
target_database_name,
target_schema_name,
total_data_in_mega_bytes,
workgroup_name
FROM aws.redshift_serverless.table_restore_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_table_restore_status">

Returns information about an array of TableRestoreStatus objects.

```sql
SELECT
message,
namespace_name,
new_table_name,
progress_in_mega_bytes,
recovery_point_id,
request_time,
snapshot_name,
source_database_name,
source_schema_name,
source_table_name,
status,
table_restore_request_id,
target_database_name,
target_schema_name,
total_data_in_mega_bytes,
workgroup_name
FROM aws.redshift_serverless.table_restore_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
