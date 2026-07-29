--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_database"
    values={[
        { label: 'get_database', value: 'get_database' }
    ]}
>
<TabItem value="get_database">

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
    <td>The ID of the Data Catalog in which the database resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_table_default_permissions" /></td>
    <td><code>array</code></td>
    <td>Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the metadata database was created in the catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the database. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="federated_database" /></td>
    <td><code>object</code></td>
    <td>A FederatedDatabase structure that references an entity outside the Glue Data Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The location of the database (for example, an HDFS path). (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the database. For Hive compatibility, this is folded to lowercase when it is stored. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>These key-value pairs define parameters and properties of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="target_database" /></td>
    <td><code>object</code></td>
    <td>A DatabaseIdentifier structure that describes a target database for resource linking.</td>
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
    <td><a href="#get_database"><CopyableCode code="get_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the definition of a specified database.</td>
</tr>
<tr>
    <td><a href="#create_database"><CopyableCode code="create_database" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseInput"><code>DatabaseInput</code></a></td>
    <td></td>
    <td>Creates a new database in a Data Catalog.</td>
</tr>
<tr>
    <td><a href="#update_database"><CopyableCode code="update_database" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseInput"><code>DatabaseInput</code></a></td>
    <td></td>
    <td>Updates an existing database definition in a Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_database"><CopyableCode code="delete_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a specified database from a Data Catalog. After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteDatabase, use DeleteTableVersion or BatchDeleteTableVersion, DeletePartition or BatchDeletePartition, DeleteUserDefinedFunction, and DeleteTable or BatchDeleteTable, to delete any resources that belong to the database.</td>
</tr>
<tr>
    <td><a href="#batch_create_partition"><CopyableCode code="batch_create_partition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-PartitionInputList"><code>PartitionInputList</code></a></td>
    <td></td>
    <td>Creates one or more partitions in a batch operation.</td>
</tr>
<tr>
    <td><a href="#batch_delete_partition"><CopyableCode code="batch_delete_partition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-PartitionsToDelete"><code>PartitionsToDelete</code></a></td>
    <td></td>
    <td>Deletes one or more partitions in a batch operation.</td>
</tr>
<tr>
    <td><a href="#batch_delete_table"><CopyableCode code="batch_delete_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TablesToDelete"><code>TablesToDelete</code></a></td>
    <td></td>
    <td>Deletes multiple tables at once. After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling BatchDeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.</td>
</tr>
<tr>
    <td><a href="#batch_delete_table_version"><CopyableCode code="batch_delete_table_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-VersionIds"><code>VersionIds</code></a></td>
    <td></td>
    <td>Deletes a specified batch of versions of a table.</td>
</tr>
<tr>
    <td><a href="#batch_update_partition"><CopyableCode code="batch_update_partition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Entries"><code>Entries</code></a></td>
    <td></td>
    <td>Updates one or more partitions in a batch operation.</td>
</tr>
<tr>
    <td><a href="#get_databases"><CopyableCode code="get_databases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all databases defined in a given Data Catalog.</td>
</tr>
<tr>
    <td><a href="#start_column_statistics_task_run"><CopyableCode code="start_column_statistics_task_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Role"><code>Role</code></a></td>
    <td></td>
    <td>Starts a column statistics task run, for a specified table and columns.</td>
</tr>
<tr>
    <td><a href="#start_materialized_view_refresh_task_run"><CopyableCode code="start_materialized_view_refresh_task_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CatalogId"><code>CatalogId</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Starts a materialized view refresh task run, for a specified table and columns.</td>
</tr>
<tr>
    <td><a href="#stop_column_statistics_task_run"><CopyableCode code="stop_column_statistics_task_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Stops a task run for the specified table.</td>
</tr>
<tr>
    <td><a href="#stop_materialized_view_refresh_task_run"><CopyableCode code="stop_materialized_view_refresh_task_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CatalogId"><code>CatalogId</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Stops a materialized view refresh task run, for a specified table and columns.</td>
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
    defaultValue="get_database"
    values={[
        { label: 'get_database', value: 'get_database' }
    ]}
>
<TabItem value="get_database">

Retrieves the definition of a specified database.

```sql
SELECT
catalog_id,
create_table_default_permissions,
create_time,
description,
federated_database,
location_uri,
name,
parameters,
target_database
FROM aws.glue.databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_database"
    values={[
        { label: 'create_database', value: 'create_database' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_database">

Creates a new database in a Data Catalog.

```sql
INSERT INTO aws.glue.databases (
CatalogId,
DatabaseInput,
Tags,
region
)
SELECT 
'{{ CatalogId }}',
'{{ DatabaseInput }}' /* required */,
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the databases resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The ID of the Data Catalog in which to create the database. If none is provided, the Amazon Web Services account ID is used by default.
    - name: DatabaseInput
      description: |
        The metadata for the database.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        LocationUri: "{{ LocationUri }}"
        Parameters: "{{ Parameters }}"
        CreateTableDefaultPermissions:
          - Principal:
              DataLakePrincipalIdentifier: "{{ DataLakePrincipalIdentifier }}"
            Permissions: "{{ Permissions }}"
        TargetDatabase:
          CatalogId: "{{ CatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          Region: "{{ Region }}"
        FederatedDatabase:
          Identifier: "{{ Identifier }}"
          ConnectionName: "{{ ConnectionName }}"
          ConnectionType: "{{ ConnectionType }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags you assign to the database.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_database"
    values={[
        { label: 'update_database', value: 'update_database' }
    ]}
>
<TabItem value="update_database">

Updates an existing database definition in a Data Catalog.

```sql
UPDATE aws.glue.databases
SET 
CatalogId = '{{ CatalogId }}',
Name = '{{ Name }}',
DatabaseInput = '{{ DatabaseInput }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseInput = '{{ DatabaseInput }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_database"
    values={[
        { label: 'delete_database', value: 'delete_database' }
    ]}
>
<TabItem value="delete_database">

Removes a specified database from a Data Catalog. After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteDatabase, use DeleteTableVersion or BatchDeleteTableVersion, DeletePartition or BatchDeletePartition, DeleteUserDefinedFunction, and DeleteTable or BatchDeleteTable, to delete any resources that belong to the database.

```sql
DELETE FROM aws.glue.databases
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_partition"
    values={[
        { label: 'batch_create_partition', value: 'batch_create_partition' },
        { label: 'batch_delete_partition', value: 'batch_delete_partition' },
        { label: 'batch_delete_table', value: 'batch_delete_table' },
        { label: 'batch_delete_table_version', value: 'batch_delete_table_version' },
        { label: 'batch_update_partition', value: 'batch_update_partition' },
        { label: 'get_databases', value: 'get_databases' },
        { label: 'start_column_statistics_task_run', value: 'start_column_statistics_task_run' },
        { label: 'start_materialized_view_refresh_task_run', value: 'start_materialized_view_refresh_task_run' },
        { label: 'stop_column_statistics_task_run', value: 'stop_column_statistics_task_run' },
        { label: 'stop_materialized_view_refresh_task_run', value: 'stop_materialized_view_refresh_task_run' }
    ]}
>
<TabItem value="batch_create_partition">

Creates one or more partitions in a batch operation.

```sql
EXEC aws.glue.databases.batch_create_partition 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"PartitionInputList": "{{ PartitionInputList }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_partition">

Deletes one or more partitions in a batch operation.

```sql
EXEC aws.glue.databases.batch_delete_partition 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"PartitionsToDelete": "{{ PartitionsToDelete }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_table">

Deletes multiple tables at once. After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling BatchDeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.

```sql
EXEC aws.glue.databases.batch_delete_table 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TablesToDelete": "{{ TablesToDelete }}", 
"TransactionId": "{{ TransactionId }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_table_version">

Deletes a specified batch of versions of a table.

```sql
EXEC aws.glue.databases.batch_delete_table_version 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"VersionIds": "{{ VersionIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_partition">

Updates one or more partitions in a batch operation.

```sql
EXEC aws.glue.databases.batch_update_partition 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"Entries": "{{ Entries }}"
}'
;
```
</TabItem>
<TabItem value="get_databases">

Retrieves all databases defined in a given Data Catalog.

```sql
EXEC aws.glue.databases.get_databases 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"ResourceShareType": "{{ ResourceShareType }}", 
"AttributesToGet": "{{ AttributesToGet }}"
}'
;
```
</TabItem>
<TabItem value="start_column_statistics_task_run">

Starts a column statistics task run, for a specified table and columns.

```sql
EXEC aws.glue.databases.start_column_statistics_task_run 
@region='{{ region }}' --required 
@@json=
'{
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"ColumnNameList": "{{ ColumnNameList }}", 
"Role": "{{ Role }}", 
"SampleSize": {{ SampleSize }}, 
"CatalogID": "{{ CatalogID }}", 
"SecurityConfiguration": "{{ SecurityConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="start_materialized_view_refresh_task_run">

Starts a materialized view refresh task run, for a specified table and columns.

```sql
EXEC aws.glue.databases.start_materialized_view_refresh_task_run 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"FullRefresh": {{ FullRefresh }}
}'
;
```
</TabItem>
<TabItem value="stop_column_statistics_task_run">

Stops a task run for the specified table.

```sql
EXEC aws.glue.databases.stop_column_statistics_task_run 
@region='{{ region }}' --required 
@@json=
'{
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}"
}'
;
```
</TabItem>
<TabItem value="stop_materialized_view_refresh_task_run">

Stops a materialized view refresh task run, for a specified table and columns.

```sql
EXEC aws.glue.databases.stop_materialized_view_refresh_task_run 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}"
}'
;
```
</TabItem>
</Tabs>
