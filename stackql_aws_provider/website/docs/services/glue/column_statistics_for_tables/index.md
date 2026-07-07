--- 
title: column_statistics_for_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - column_statistics_for_tables
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

Creates, updates, deletes, gets or lists a <code>column_statistics_for_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="column_statistics_for_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.column_statistics_for_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_column_statistics_for_table"
    values={[
        { label: 'get_column_statistics_for_table', value: 'get_column_statistics_for_table' }
    ]}
>
<TabItem value="get_column_statistics_for_table">

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
    <td><CopyableCode code="ColumnStatisticsList" /></td>
    <td><code>array</code></td>
    <td>List of ColumnStatistics.</td>
</tr>
<tr>
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>List of ColumnStatistics that failed to be retrieved.</td>
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
    <td><a href="#get_column_statistics_for_table"><CopyableCode code="get_column_statistics_for_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetTable.</td>
</tr>
<tr>
    <td><a href="#update_column_statistics_for_table"><CopyableCode code="update_column_statistics_for_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-ColumnStatisticsList"><code>ColumnStatisticsList</code></a></td>
    <td></td>
    <td>Creates or updates table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdateTable.</td>
</tr>
<tr>
    <td><a href="#delete_column_statistics_for_table"><CopyableCode code="delete_column_statistics_for_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is DeleteTable.</td>
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
    defaultValue="get_column_statistics_for_table"
    values={[
        { label: 'get_column_statistics_for_table', value: 'get_column_statistics_for_table' }
    ]}
>
<TabItem value="get_column_statistics_for_table">

Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetTable.

```sql
SELECT
ColumnStatisticsList,
Errors
FROM aws.glue.column_statistics_for_tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_column_statistics_for_table"
    values={[
        { label: 'update_column_statistics_for_table', value: 'update_column_statistics_for_table' }
    ]}
>
<TabItem value="update_column_statistics_for_table">

Creates or updates table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdateTable.

```sql
UPDATE aws.glue.column_statistics_for_tables
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
ColumnStatisticsList = '{{ ColumnStatisticsList }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required
AND ColumnStatisticsList = '{{ ColumnStatisticsList }}' --required
RETURNING
Errors;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_column_statistics_for_table"
    values={[
        { label: 'delete_column_statistics_for_table', value: 'delete_column_statistics_for_table' }
    ]}
>
<TabItem value="delete_column_statistics_for_table">

Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is DeleteTable.

```sql
DELETE FROM aws.glue.column_statistics_for_tables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
