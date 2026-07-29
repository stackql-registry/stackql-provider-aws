--- 
title: column_statistics_for_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - column_statistics_for_partitions
  - glue
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

Creates, updates, deletes, gets or lists a <code>column_statistics_for_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="column_statistics_for_partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.column_statistics_for_partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_column_statistics_for_partition"
    values={[
        { label: 'get_column_statistics_for_partition', value: 'get_column_statistics_for_partition' }
    ]}
>
<TabItem value="get_column_statistics_for_partition">

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
    <td><CopyableCode code="column_statistics_list" /></td>
    <td><code>array</code></td>
    <td>List of ColumnStatistics that failed to be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Error occurred during retrieving column statistics data.</td>
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
    <td><a href="#get_column_statistics_for_partition"><CopyableCode code="get_column_statistics_for_partition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetPartition.</td>
</tr>
<tr>
    <td><a href="#update_column_statistics_for_partition"><CopyableCode code="update_column_statistics_for_partition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-PartitionValues"><code>PartitionValues</code></a>, <a href="#parameter-ColumnStatisticsList"><code>ColumnStatisticsList</code></a></td>
    <td></td>
    <td>Creates or updates partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdatePartition.</td>
</tr>
<tr>
    <td><a href="#delete_column_statistics_for_partition"><CopyableCode code="delete_column_statistics_for_partition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the partition column statistics of a column. The Identity and Access Management (IAM) permission required for this operation is DeletePartition.</td>
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
    defaultValue="get_column_statistics_for_partition"
    values={[
        { label: 'get_column_statistics_for_partition', value: 'get_column_statistics_for_partition' }
    ]}
>
<TabItem value="get_column_statistics_for_partition">

Retrieves partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetPartition.

```sql
SELECT
column_statistics_list,
errors
FROM aws.glue.column_statistics_for_partitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_column_statistics_for_partition"
    values={[
        { label: 'update_column_statistics_for_partition', value: 'update_column_statistics_for_partition' }
    ]}
>
<TabItem value="update_column_statistics_for_partition">

Creates or updates partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdatePartition.

```sql
UPDATE aws.glue.column_statistics_for_partitions
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
PartitionValues = '{{ PartitionValues }}',
ColumnStatisticsList = '{{ ColumnStatisticsList }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required
AND PartitionValues = '{{ PartitionValues }}' --required
AND ColumnStatisticsList = '{{ ColumnStatisticsList }}' --required
RETURNING
errors;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_column_statistics_for_partition"
    values={[
        { label: 'delete_column_statistics_for_partition', value: 'delete_column_statistics_for_partition' }
    ]}
>
<TabItem value="delete_column_statistics_for_partition">

Delete the partition column statistics of a column. The Identity and Access Management (IAM) permission required for this operation is DeletePartition.

```sql
DELETE FROM aws.glue.column_statistics_for_partitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
