--- 
title: partition_indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - partition_indexes
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

Creates, updates, deletes, gets or lists a <code>partition_indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partition_indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.partition_indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partition_indexes"
    values={[
        { label: 'get_partition_indexes', value: 'get_partition_indexes' }
    ]}
>
<TabItem value="get_partition_indexes">

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
    <td><CopyableCode code="BackfillErrors" /></td>
    <td><code>array</code></td>
    <td>A list of errors that can occur when registering partition indexes for an existing table.</td>
</tr>
<tr>
    <td><CopyableCode code="IndexName" /></td>
    <td><code>string</code></td>
    <td>The name of the partition index. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the partition index. The possible statuses are: CREATING: The index is being created. When an index is in a CREATING state, the index or its table cannot be deleted. ACTIVE: The index creation succeeds. FAILED: The index creation fails. DELETING: The index is deleted from the list of indexes. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Keys" /></td>
    <td><code>array</code></td>
    <td>A list of one or more keys, as KeySchemaElement structures, for the partition index.</td>
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
    <td><a href="#get_partition_indexes"><CopyableCode code="get_partition_indexes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the partition indexes associated with a table.</td>
</tr>
<tr>
    <td><a href="#create_partition_index"><CopyableCode code="create_partition_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-PartitionIndex"><code>PartitionIndex</code></a></td>
    <td></td>
    <td>Creates a specified partition index in an existing table.</td>
</tr>
<tr>
    <td><a href="#delete_partition_index"><CopyableCode code="delete_partition_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified partition index from an existing table.</td>
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
    defaultValue="get_partition_indexes"
    values={[
        { label: 'get_partition_indexes', value: 'get_partition_indexes' }
    ]}
>
<TabItem value="get_partition_indexes">

Retrieves the partition indexes associated with a table.

```sql
SELECT
BackfillErrors,
IndexName,
IndexStatus,
Keys
FROM aws.glue.partition_indexes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partition_index"
    values={[
        { label: 'create_partition_index', value: 'create_partition_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partition_index">

Creates a specified partition index in an existing table.

```sql
INSERT INTO aws.glue.partition_indexes (
CatalogId,
DatabaseName,
TableName,
PartitionIndex,
region
)
SELECT 
'{{ CatalogId }}',
'{{ DatabaseName }}' /* required */,
'{{ TableName }}' /* required */,
'{{ PartitionIndex }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partition_indexes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partition_indexes resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The catalog ID where the table resides.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        Specifies the name of a database in which you want to create a partition index.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        Specifies the name of a table in which you want to create a partition index.
    - name: PartitionIndex
      description: |
        Specifies a PartitionIndex structure to create a partition index in an existing table.
      value:
        Keys:
          - "{{ Keys }}"
        IndexName: "{{ IndexName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_partition_index"
    values={[
        { label: 'delete_partition_index', value: 'delete_partition_index' }
    ]}
>
<TabItem value="delete_partition_index">

Deletes a specified partition index from an existing table.

```sql
DELETE FROM aws.glue.partition_indexes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
