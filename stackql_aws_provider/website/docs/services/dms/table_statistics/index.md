--- 
title: table_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - table_statistics
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

Creates, updates, deletes, gets or lists a <code>table_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.table_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_table_statistics"
    values={[
        { label: 'describe_table_statistics', value: 'describe_table_statistics' }
    ]}
>
<TabItem value="describe_table_statistics">

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
    <td><CopyableCode code="AppliedDdls" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of data definition language (DDL) statements used to build and modify the structure of your tables applied on the target.</td>
</tr>
<tr>
    <td><CopyableCode code="AppliedDeletes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of delete actions applied on a target table.</td>
</tr>
<tr>
    <td><CopyableCode code="AppliedInserts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of insert actions applied on a target table.</td>
</tr>
<tr>
    <td><CopyableCode code="AppliedUpdates" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of update actions applied on a target table.</td>
</tr>
<tr>
    <td><CopyableCode code="Ddls" /></td>
    <td><code>integer (int64)</code></td>
    <td>The data definition language (DDL) used to build and modify the structure of your tables.</td>
</tr>
<tr>
    <td><CopyableCode code="Deletes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of delete actions performed on a table.</td>
</tr>
<tr>
    <td><CopyableCode code="FullLoadCondtnlChkFailedRows" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of rows that failed conditional checks during the full load operation (valid only for migrations where DynamoDB is the target).</td>
</tr>
<tr>
    <td><CopyableCode code="FullLoadEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the full load operation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="FullLoadErrorRows" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of rows that failed to load during the full load operation (valid only for migrations where DynamoDB is the target).</td>
</tr>
<tr>
    <td><CopyableCode code="FullLoadReloaded" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates if the table was reloaded (true) or loaded as part of a new full load operation (false).</td>
</tr>
<tr>
    <td><CopyableCode code="FullLoadRows" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of rows added during the full load operation.</td>
</tr>
<tr>
    <td><CopyableCode code="FullLoadStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the full load operation started.</td>
</tr>
<tr>
    <td><CopyableCode code="Inserts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of insert actions performed on a table.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time a table was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ResyncProgress" /></td>
    <td><code>number (double)</code></td>
    <td>Calculates the percentage of failed validations that were successfully resynced to the system.</td>
</tr>
<tr>
    <td><CopyableCode code="ResyncRowsAttempted" /></td>
    <td><code>integer (int64)</code></td>
    <td>Records the total number of mismatched data rows where the system attempted to apply fixes in the target database.</td>
</tr>
<tr>
    <td><CopyableCode code="ResyncRowsFailed" /></td>
    <td><code>integer (int64)</code></td>
    <td>Records the total number of mismatched data rows where fix attempts failed in the target database.</td>
</tr>
<tr>
    <td><CopyableCode code="ResyncRowsSucceeded" /></td>
    <td><code>integer (int64)</code></td>
    <td>Records the total number of mismatched data rows where fixes were successfully applied in the target database.</td>
</tr>
<tr>
    <td><CopyableCode code="ResyncState" /></td>
    <td><code>string</code></td>
    <td>Records the current state of table resynchronization in the migration task. This parameter can have the following values: Not enabled – Resync is not enabled for the table in the migration task. Pending – The tables are waiting for resync. In progress – Resync in progress for some records in the table. No primary key – The table could not be resynced because it has no primary key. Last resync at: date/time – Resync session is finished at time. Time provided in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaName" /></td>
    <td><code>string</code></td>
    <td>The schema name.</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="TableState" /></td>
    <td><code>string</code></td>
    <td>The state of the tables described. Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table is being reloaded</td>
</tr>
<tr>
    <td><CopyableCode code="Updates" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of update actions performed on a table.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationFailedRecords" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that failed validation.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationPendingRecords" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that have yet to be validated.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationState" /></td>
    <td><code>string</code></td>
    <td>The validation state of the table. This parameter can have the following values: Not enabled – Validation isn't enabled for the table in the migration task. Pending records – Some records in the table are waiting for validation. Mismatched records – Some records in the table don't match between the source and target. Suspended records – Some records in the table couldn't be validated. No primary key –The table couldn't be validated because it has no primary key. Table error – The table wasn't validated because it's in an error state and some data wasn't migrated. Validated – All rows in the table are validated. If the table is updated, the status can change from Validated. Error – The table couldn't be validated because of an unexpected error. Pending validation – The table is waiting validation. Preparing table – Preparing the table enabled in the migration task for validation. Pending revalidation – All rows in the table are pending validation after the table was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationStateDetails" /></td>
    <td><code>string</code></td>
    <td>Additional details about the state of validation.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationSuspendedRecords" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records that couldn't be validated.</td>
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
    <td><a href="#describe_table_statistics"><CopyableCode code="describe_table_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</td>
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
    defaultValue="describe_table_statistics"
    values={[
        { label: 'describe_table_statistics', value: 'describe_table_statistics' }
    ]}
>
<TabItem value="describe_table_statistics">

Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.

```sql
SELECT
AppliedDdls,
AppliedDeletes,
AppliedInserts,
AppliedUpdates,
Ddls,
Deletes,
FullLoadCondtnlChkFailedRows,
FullLoadEndTime,
FullLoadErrorRows,
FullLoadReloaded,
FullLoadRows,
FullLoadStartTime,
Inserts,
LastUpdateTime,
ResyncProgress,
ResyncRowsAttempted,
ResyncRowsFailed,
ResyncRowsSucceeded,
ResyncState,
SchemaName,
TableName,
TableState,
Updates,
ValidationFailedRecords,
ValidationPendingRecords,
ValidationState,
ValidationStateDetails,
ValidationSuspendedRecords
FROM aws.dms.table_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
