--- 
title: global_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - global_tables
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

Creates, updates, deletes, gets or lists a <code>global_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.global_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_table"
    values={[
        { label: 'describe_global_table', value: 'describe_global_table' },
        { label: 'list_global_tables', value: 'list_global_tables' }
    ]}
>
<TabItem value="describe_global_table">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the global table.</td>
</tr>
<tr>
    <td><CopyableCode code="global_table_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the global table.</td>
</tr>
<tr>
    <td><CopyableCode code="global_table_name" /></td>
    <td><code>string</code></td>
    <td>The global table name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="global_table_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the global table: CREATING - The global table is being created. UPDATING - The global table is being updated. DELETING - The global table is being deleted. ACTIVE - The global table is ready for use. (CREATING, ACTIVE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_group" /></td>
    <td><code>array</code></td>
    <td>The Regions where the global table has replicas.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_global_tables">

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
    <td><CopyableCode code="global_tables" /></td>
    <td><code>array</code></td>
    <td>List of global table names.</td>
</tr>
<tr>
    <td><CopyableCode code="last_evaluated_global_table_name" /></td>
    <td><code>string</code></td>
    <td>Last evaluated global table name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_global_table"><CopyableCode code="describe_global_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified global table. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.</td>
</tr>
<tr>
    <td><a href="#list_global_tables"><CopyableCode code="list_global_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all global tables that have a replica in the specified Region. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.</td>
</tr>
<tr>
    <td><a href="#create_global_table"><CopyableCode code="create_global_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GlobalTableName"><code>GlobalTableName</code></a>, <a href="#parameter-ReplicationGroup"><code>ReplicationGroup</code></a></td>
    <td></td>
    <td>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables. If you want to add a new replica table to a global table, each of the following conditions must be true: The table must have the same primary key as all of the other replicas. The table must have the same name as all of the other replicas. The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item. None of the replica tables in the global table can contain any data. If global secondary indexes are specified, then the following conditions must also be met: The global secondary indexes must have the same name. The global secondary indexes must have the same hash key and sort key (if present). If local secondary indexes are specified, then the following conditions must also be met: The local secondary indexes must have the same name. The local secondary indexes must have the same hash key and sort key (if present). Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table.</td>
</tr>
<tr>
    <td><a href="#update_global_table"><CopyableCode code="update_global_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GlobalTableName"><code>GlobalTableName</code></a>, <a href="#parameter-ReplicaUpdates"><code>ReplicaUpdates</code></a></td>
    <td></td>
    <td>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables. If you are using global tables Version 2019.11.21 (Current) you can use UpdateTable instead. Although you can use UpdateGlobalTable to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. If global secondary indexes are specified, then the following conditions must also be met: The global secondary indexes must have the same name. The global secondary indexes must have the same hash key and sort key (if present). The global secondary indexes must have the same provisioned and maximum write capacity units.</td>
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
    defaultValue="describe_global_table"
    values={[
        { label: 'describe_global_table', value: 'describe_global_table' },
        { label: 'list_global_tables', value: 'list_global_tables' }
    ]}
>
<TabItem value="describe_global_table">

Returns information about the specified global table. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.

```sql
SELECT
creation_date_time,
global_table_arn,
global_table_name,
global_table_status,
replication_group
FROM aws.dynamodb.global_tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_global_tables">

Lists all global tables that have a replica in the specified Region. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.

```sql
SELECT
global_tables,
last_evaluated_global_table_name
FROM aws.dynamodb.global_tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_table"
    values={[
        { label: 'create_global_table', value: 'create_global_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_table">

Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables. If you want to add a new replica table to a global table, each of the following conditions must be true: The table must have the same primary key as all of the other replicas. The table must have the same name as all of the other replicas. The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item. None of the replica tables in the global table can contain any data. If global secondary indexes are specified, then the following conditions must also be met: The global secondary indexes must have the same name. The global secondary indexes must have the same hash key and sort key (if present). If local secondary indexes are specified, then the following conditions must also be met: The local secondary indexes must have the same name. The local secondary indexes must have the same hash key and sort key (if present). Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table.

```sql
INSERT INTO aws.dynamodb.global_tables (
GlobalTableName,
ReplicationGroup,
region
)
SELECT 
'{{ GlobalTableName }}' /* required */,
'{{ ReplicationGroup }}' /* required */,
'{{ region }}'
RETURNING
global_table_description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_tables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the global_tables resource.
    - name: GlobalTableName
      value: "{{ GlobalTableName }}"
      description: |
        The global table name.
    - name: ReplicationGroup
      description: |
        The Regions where the global table needs to be created.
      value:
        - RegionName: "{{ RegionName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_global_table"
    values={[
        { label: 'update_global_table', value: 'update_global_table' }
    ]}
>
<TabItem value="update_global_table">

Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables. If you are using global tables Version 2019.11.21 (Current) you can use UpdateTable instead. Although you can use UpdateGlobalTable to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. If global secondary indexes are specified, then the following conditions must also be met: The global secondary indexes must have the same name. The global secondary indexes must have the same hash key and sort key (if present). The global secondary indexes must have the same provisioned and maximum write capacity units.

```sql
UPDATE aws.dynamodb.global_tables
SET 
GlobalTableName = '{{ GlobalTableName }}',
ReplicaUpdates = '{{ ReplicaUpdates }}'
WHERE 
region = '{{ region }}' --required
AND GlobalTableName = '{{ GlobalTableName }}' --required
AND ReplicaUpdates = '{{ ReplicaUpdates }}' --required
RETURNING
global_table_description;
```
</TabItem>
</Tabs>
