--- 
title: table_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - table_metadatas
  - athena
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

Creates, updates, deletes, gets or lists a <code>table_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.table_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_metadata"
    values={[
        { label: 'get_table_metadata', value: 'get_table_metadata' },
        { label: 'list_table_metadata', value: 'list_table_metadata' }
    ]}
>
<TabItem value="get_table_metadata">

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
    <td><CopyableCode code="Columns" /></td>
    <td><code>array</code></td>
    <td>A list of the columns in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the table was accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>A set of custom key/value pairs for table properties.</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionKeys" /></td>
    <td><code>array</code></td>
    <td>A list of the partition keys in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="TableType" /></td>
    <td><code>string</code></td>
    <td>The type of table. In Athena, only EXTERNAL_TABLE is supported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_table_metadata">

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
    <td><CopyableCode code="Columns" /></td>
    <td><code>array</code></td>
    <td>A list of the columns in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastAccessTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the table was accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>A set of custom key/value pairs for table properties.</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionKeys" /></td>
    <td><code>array</code></td>
    <td>A list of the partition keys in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="TableType" /></td>
    <td><code>string</code></td>
    <td>The type of table. In Athena, only EXTERNAL_TABLE is supported.</td>
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
    <td><a href="#get_table_metadata"><CopyableCode code="get_table_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns table metadata for the specified catalog, database, and table.</td>
</tr>
<tr>
    <td><a href="#list_table_metadata"><CopyableCode code="list_table_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the metadata for the tables in the specified data catalog database.</td>
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
    defaultValue="get_table_metadata"
    values={[
        { label: 'get_table_metadata', value: 'get_table_metadata' },
        { label: 'list_table_metadata', value: 'list_table_metadata' }
    ]}
>
<TabItem value="get_table_metadata">

Returns table metadata for the specified catalog, database, and table.

```sql
SELECT
Columns,
CreateTime,
LastAccessTime,
Name,
Parameters,
PartitionKeys,
TableType
FROM aws.athena.table_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_table_metadata">

Lists the metadata for the tables in the specified data catalog database.

```sql
SELECT
Columns,
CreateTime,
LastAccessTime,
Name,
Parameters,
PartitionKeys,
TableType
FROM aws.athena.table_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
