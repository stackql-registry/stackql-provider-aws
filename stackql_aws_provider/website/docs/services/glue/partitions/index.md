--- 
title: partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - partitions
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

Creates, updates, deletes, gets or lists a <code>partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_partition"
    values={[
        { label: 'batch_get_partition', value: 'batch_get_partition' },
        { label: 'get_partition', value: 'get_partition' },
        { label: 'get_partitions', value: 'get_partitions' }
    ]}
>
<TabItem value="batch_get_partition">

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
    <td><CopyableCode code="partitions" /></td>
    <td><code>array</code></td>
    <td>A list of the requested partitions.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_keys" /></td>
    <td><code>array</code></td>
    <td>A list of the partition values in the request for which partitions were not returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_partition">

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
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog in which the partition resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the partition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog database in which to create the partition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time at which the partition was accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_analyzed_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time at which column statistics were computed for this partition.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>These key-value pairs define partition parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_descriptor" /></td>
    <td><code>object</code></td>
    <td>Provides information about the physical location where the partition is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database table in which to create the partition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>The values of the partition.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_partitions">

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
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog in which the partition resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the partition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog database in which to create the partition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time at which the partition was accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_analyzed_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time at which column statistics were computed for this partition.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>These key-value pairs define partition parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_descriptor" /></td>
    <td><code>object</code></td>
    <td>Provides information about the physical location where the partition is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database table in which to create the partition. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>The values of the partition.</td>
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
    <td><a href="#batch_get_partition"><CopyableCode code="batch_get_partition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves partitions in a batch request.</td>
</tr>
<tr>
    <td><a href="#get_partition"><CopyableCode code="get_partition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specified partition.</td>
</tr>
<tr>
    <td><a href="#get_partitions"><CopyableCode code="get_partitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the partitions in a table.</td>
</tr>
<tr>
    <td><a href="#create_partition"><CopyableCode code="create_partition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-PartitionInput"><code>PartitionInput</code></a></td>
    <td></td>
    <td>Creates a new partition.</td>
</tr>
<tr>
    <td><a href="#update_partition"><CopyableCode code="update_partition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-PartitionValueList"><code>PartitionValueList</code></a>, <a href="#parameter-PartitionInput"><code>PartitionInput</code></a></td>
    <td></td>
    <td>Updates a partition.</td>
</tr>
<tr>
    <td><a href="#delete_partition"><CopyableCode code="delete_partition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified partition.</td>
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
    defaultValue="batch_get_partition"
    values={[
        { label: 'batch_get_partition', value: 'batch_get_partition' },
        { label: 'get_partition', value: 'get_partition' },
        { label: 'get_partitions', value: 'get_partitions' }
    ]}
>
<TabItem value="batch_get_partition">

Retrieves partitions in a batch request.

```sql
SELECT
partitions,
unprocessed_keys
FROM aws.glue.partitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_partition">

Retrieves information about a specified partition.

```sql
SELECT
catalog_id,
creation_time,
database_name,
last_access_time,
last_analyzed_time,
parameters,
storage_descriptor,
table_name,
values
FROM aws.glue.partitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_partitions">

Retrieves information about the partitions in a table.

```sql
SELECT
catalog_id,
creation_time,
database_name,
last_access_time,
last_analyzed_time,
parameters,
storage_descriptor,
table_name,
values
FROM aws.glue.partitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partition"
    values={[
        { label: 'create_partition', value: 'create_partition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partition">

Creates a new partition.

```sql
INSERT INTO aws.glue.partitions (
CatalogId,
DatabaseName,
TableName,
PartitionInput,
region
)
SELECT 
'{{ CatalogId }}',
'{{ DatabaseName }}' /* required */,
'{{ TableName }}' /* required */,
'{{ PartitionInput }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partitions resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The Amazon Web Services account ID of the catalog in which the partition is to be created.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The name of the metadata database in which the partition is to be created.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the metadata table in which the partition is to be created.
    - name: PartitionInput
      description: |
        The structure used to create and update a partition.
      value:
        Values:
          - "{{ Values }}"
        LastAccessTime: "{{ LastAccessTime }}"
        StorageDescriptor:
          Columns:
            - Name: "{{ Name }}"
              Type: "{{ Type }}"
              Comment: "{{ Comment }}"
              Parameters: "{{ Parameters }}"
          Location: "{{ Location }}"
          AdditionalLocations:
            - "{{ AdditionalLocations }}"
          InputFormat: "{{ InputFormat }}"
          OutputFormat: "{{ OutputFormat }}"
          Compressed: {{ Compressed }}
          NumberOfBuckets: {{ NumberOfBuckets }}
          SerdeInfo:
            Name: "{{ Name }}"
            SerializationLibrary: "{{ SerializationLibrary }}"
            Parameters: "{{ Parameters }}"
          BucketColumns:
            - "{{ BucketColumns }}"
          SortColumns:
            - Column: "{{ Column }}"
              SortOrder: {{ SortOrder }}
          Parameters: "{{ Parameters }}"
          SkewedInfo:
            SkewedColumnNames:
              - "{{ SkewedColumnNames }}"
            SkewedColumnValues:
              - "{{ SkewedColumnValues }}"
            SkewedColumnValueLocationMaps: "{{ SkewedColumnValueLocationMaps }}"
          StoredAsSubDirectories: {{ StoredAsSubDirectories }}
          SchemaReference:
            SchemaId:
              SchemaArn: "{{ SchemaArn }}"
              SchemaName: "{{ SchemaName }}"
              RegistryName: "{{ RegistryName }}"
            SchemaVersionId: "{{ SchemaVersionId }}"
            SchemaVersionNumber: {{ SchemaVersionNumber }}
        Parameters: "{{ Parameters }}"
        LastAnalyzedTime: "{{ LastAnalyzedTime }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_partition"
    values={[
        { label: 'update_partition', value: 'update_partition' }
    ]}
>
<TabItem value="update_partition">

Updates a partition.

```sql
UPDATE aws.glue.partitions
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
PartitionValueList = '{{ PartitionValueList }}',
PartitionInput = '{{ PartitionInput }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required
AND PartitionValueList = '{{ PartitionValueList }}' --required
AND PartitionInput = '{{ PartitionInput }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_partition"
    values={[
        { label: 'delete_partition', value: 'delete_partition' }
    ]}
>
<TabItem value="delete_partition">

Deletes a specified partition.

```sql
DELETE FROM aws.glue.partitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
