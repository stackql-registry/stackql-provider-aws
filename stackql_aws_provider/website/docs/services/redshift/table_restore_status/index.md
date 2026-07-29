--- 
title: table_restore_status
hide_title: false
hide_table_of_contents: false
keywords:
  - table_restore_status
  - redshift
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.table_restore_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_table_restore_status"
    values={[
        { label: 'describe_table_restore_status', value: 'describe_table_restore_status' }
    ]}
>
<TabItem value="describe_table_restore_status">

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
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Redshift cluster that the table is being restored to.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the table restore request. Status values include SUCCEEDED, FAILED, CANCELED, PENDING, IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="new_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table to create as a result of the table restore request.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_in_mega_bytes" /></td>
    <td><code>integer</code></td>
    <td>The amount of data restored to the new table so far, in megabytes (MB).</td>
</tr>
<tr>
    <td><CopyableCode code="request_time" /></td>
    <td><code>string</code></td>
    <td>The time that the table restore request was made, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the snapshot that the table is being restored from.</td>
</tr>
<tr>
    <td><CopyableCode code="source_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source database that contains the table being restored.</td>
</tr>
<tr>
    <td><CopyableCode code="source_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source schema that contains the table being restored.</td>
</tr>
<tr>
    <td><CopyableCode code="source_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source table being restored.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A value that describes the current state of the table restore request. Valid Values: SUCCEEDED, FAILED, CANCELED, PENDING, IN_PROGRESS</td>
</tr>
<tr>
    <td><CopyableCode code="table_restore_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the table restore request.</td>
</tr>
<tr>
    <td><CopyableCode code="target_database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database to restore the table to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema to restore the table to.</td>
</tr>
<tr>
    <td><CopyableCode code="total_data_in_mega_bytes" /></td>
    <td><code>integer</code></td>
    <td>The total amount of data to restore to the new table, in megabytes (MB).</td>
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
    <td><a href="#describe_table_restore_status"><CopyableCode code="describe_table_restore_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-TableRestoreRequestId"><code>TableRestoreRequestId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Lists the status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action. If you don't specify a value for the TableRestoreRequestId parameter, then DescribeTableRestoreStatus returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise DescribeTableRestoreStatus returns the status of the table specified by TableRestoreRequestId.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift cluster that the table is being restored to.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeTableRestoreStatus request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-TableRestoreRequestId">
    <td><CopyableCode code="TableRestoreRequestId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the table restore request to return status for. If you don't specify a TableRestoreRequestId value, then DescribeTableRestoreStatus returns the status of all in-progress table restore requests.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_table_restore_status"
    values={[
        { label: 'describe_table_restore_status', value: 'describe_table_restore_status' }
    ]}
>
<TabItem value="describe_table_restore_status">

Lists the status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action. If you don't specify a value for the TableRestoreRequestId parameter, then DescribeTableRestoreStatus returns the status of all table restore requests ordered by the date and time of the request in ascending order. Otherwise DescribeTableRestoreStatus returns the status of the table specified by TableRestoreRequestId.

```sql
SELECT
cluster_identifier,
message,
new_table_name,
progress_in_mega_bytes,
request_time,
snapshot_identifier,
source_database_name,
source_schema_name,
source_table_name,
status,
table_restore_request_id,
target_database_name,
target_schema_name,
total_data_in_mega_bytes
FROM aws.redshift.table_restore_status
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND TableRestoreRequestId = '{{ TableRestoreRequestId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
