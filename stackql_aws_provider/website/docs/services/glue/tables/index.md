--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
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

Creates, updates, deletes, gets or lists a <code>tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'search_tables', value: 'search_tables' }
    ]}
>
<TabItem value="get_table">

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
    <td>The ID of the Data Catalog in which the table resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the table definition was created in the Data Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The person or entity who created the table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="federated_table" /></td>
    <td><code>object</code></td>
    <td>A FederatedTable structure that references an entity outside the Glue Data Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="is_materialized_view" /></td>
    <td><code>boolean</code></td>
    <td>Indicates a table is a MaterializedView.</td>
</tr>
<tr>
    <td><CopyableCode code="is_multi_dialect_view" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the view supports the SQL dialects of one or more different query engines and can therefore be read by those engines.</td>
</tr>
<tr>
    <td><CopyableCode code="is_registered_with_lake_formation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the table has been registered with Lake Formation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the table was accessed. This is usually taken from HDFS, and might not be reliable.</td>
</tr>
<tr>
    <td><CopyableCode code="last_analyzed_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that column statistics were computed for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The table name. For Hive compatibility, this must be entirely lowercase. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>These key-value pairs define properties associated with the table.</td>
</tr>
<tr>
    <td><CopyableCode code="partition_keys" /></td>
    <td><code>array</code></td>
    <td>A list of columns by which the table is partitioned. Only primitive types are supported as partition keys. When you create a table used by Amazon Athena, and you do not specify any partitionKeys, you must at least set the value of partitionKeys to an empty list. For example: "PartitionKeys": &#91;&#93;</td>
</tr>
<tr>
    <td><CopyableCode code="retention" /></td>
    <td><code>integer</code></td>
    <td>The retention time for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>Indicates the the state of an asynchronous change to a table.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_descriptor" /></td>
    <td><code>object</code></td>
    <td>A storage descriptor containing information about the physical storage of this table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_type" /></td>
    <td><code>string</code></td>
    <td>The type of this table. Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types. Glue related table types: EXTERNAL_TABLE Hive compatible attribute - indicates a non-Hive managed table. GOVERNED Used by Lake Formation. The Glue Data Catalog understands GOVERNED.</td>
</tr>
<tr>
    <td><CopyableCode code="target_table" /></td>
    <td><code>object</code></td>
    <td>A TableIdentifier structure that describes a target table for resource linking.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the table was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the table version. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="view_definition" /></td>
    <td><code>object</code></td>
    <td>A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query.</td>
</tr>
<tr>
    <td><CopyableCode code="view_expanded_text" /></td>
    <td><code>string</code></td>
    <td>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</td>
</tr>
<tr>
    <td><CopyableCode code="view_original_text" /></td>
    <td><code>string</code></td>
    <td>Included for Apache Hive compatibility. Not used in the normal course of Glue operations. If the table is a VIRTUAL_VIEW, certain Athena configuration encoded in base64.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_tables">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A continuation token, present if the current list segment is not the last.</td>
</tr>
<tr>
    <td><CopyableCode code="table_list" /></td>
    <td><code>array</code></td>
    <td>A list of the requested Table objects. The SearchTables response returns only the tables that you have access to.</td>
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
    <td><a href="#get_table"><CopyableCode code="get_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Table definition in a Data Catalog for a specified table.</td>
</tr>
<tr>
    <td><a href="#search_tables"><CopyableCode code="search_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search.</td>
</tr>
<tr>
    <td><a href="#create_table"><CopyableCode code="create_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a></td>
    <td></td>
    <td>Creates a new table definition in the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#update_table"><CopyableCode code="update_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a></td>
    <td></td>
    <td>Updates a metadata table in the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_table"><CopyableCode code="delete_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a table definition from the Data Catalog. After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.</td>
</tr>
<tr>
    <td><a href="#get_tables"><CopyableCode code="get_tables" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a></td>
    <td></td>
    <td>Retrieves the definitions of some or all of the tables in a given Database.</td>
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
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'search_tables', value: 'search_tables' }
    ]}
>
<TabItem value="get_table">

Retrieves the Table definition in a Data Catalog for a specified table.

```sql
SELECT
catalog_id,
create_time,
created_by,
database_name,
description,
federated_table,
is_materialized_view,
is_multi_dialect_view,
is_registered_with_lake_formation,
last_access_time,
last_analyzed_time,
name,
owner,
parameters,
partition_keys,
retention,
status,
storage_descriptor,
table_type,
target_table,
update_time,
version_id,
view_definition,
view_expanded_text,
view_original_text
FROM aws.glue.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_tables">

Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search.

```sql
SELECT
next_token,
table_list
FROM aws.glue.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_table"
    values={[
        { label: 'create_table', value: 'create_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_table">

Creates a new table definition in the Data Catalog.

```sql
INSERT INTO aws.glue.tables (
CatalogId,
DatabaseName,
Name,
TableInput,
PartitionIndexes,
TransactionId,
OpenTableFormatInput,
region
)
SELECT 
'{{ CatalogId }}',
'{{ DatabaseName }}' /* required */,
'{{ Name }}',
'{{ TableInput }}',
'{{ PartitionIndexes }}',
'{{ TransactionId }}',
'{{ OpenTableFormatInput }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tables resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The ID of the Data Catalog in which to create the Table. If none is supplied, the Amazon Web Services account ID is used by default.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase.
    - name: Name
      value: "{{ Name }}"
      description: |
        The unique identifier for the table within the specified database that will be created in the Glue Data Catalog.
    - name: TableInput
      description: |
        The TableInput object that defines the metadata table to create in the catalog.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        Owner: "{{ Owner }}"
        LastAccessTime: "{{ LastAccessTime }}"
        LastAnalyzedTime: "{{ LastAnalyzedTime }}"
        Retention: {{ Retention }}
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
        PartitionKeys:
          - Name: "{{ Name }}"
            Type: "{{ Type }}"
            Comment: "{{ Comment }}"
            Parameters: "{{ Parameters }}"
        ViewOriginalText: "{{ ViewOriginalText }}"
        ViewExpandedText: "{{ ViewExpandedText }}"
        TableType: "{{ TableType }}"
        Parameters: "{{ Parameters }}"
        TargetTable:
          CatalogId: "{{ CatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          Name: "{{ Name }}"
          Region: "{{ Region }}"
        ViewDefinition:
          IsProtected: {{ IsProtected }}
          Definer: "{{ Definer }}"
          Representations:
            - Dialect: "{{ Dialect }}"
              DialectVersion: "{{ DialectVersion }}"
              ViewOriginalText: "{{ ViewOriginalText }}"
              ValidationConnection: "{{ ValidationConnection }}"
              ViewExpandedText: "{{ ViewExpandedText }}"
          ViewVersionId: {{ ViewVersionId }}
          ViewVersionToken: "{{ ViewVersionToken }}"
          RefreshSeconds: {{ RefreshSeconds }}
          LastRefreshType: "{{ LastRefreshType }}"
          SubObjects:
            - "{{ SubObjects }}"
          SubObjectVersionIds:
            - {{ SubObjectVersionIds }}
    - name: PartitionIndexes
      description: |
        A list of partition indexes, PartitionIndex structures, to create in the table.
      value:
        - Keys: "{{ Keys }}"
          IndexName: "{{ IndexName }}"
    - name: TransactionId
      value: "{{ TransactionId }}"
      description: |
        The ID of the transaction.
    - name: OpenTableFormatInput
      description: |
        Specifies an OpenTableFormatInput structure when creating an open format table.
      value:
        IcebergInput:
          MetadataOperation: "{{ MetadataOperation }}"
          Version: "{{ Version }}"
          CreateIcebergTableInput:
            Location: "{{ Location }}"
            Schema:
              SchemaId: {{ SchemaId }}
              IdentifierFieldIds:
                - {{ IdentifierFieldIds }}
              Type: "{{ Type }}"
              Fields:
                - Id: {{ Id }}
                  Name: "{{ Name }}"
                  Type: "{{ Type }}"
                  Required: {{ Required }}
                  Doc: "{{ Doc }}"
                  InitialDefault: "{{ InitialDefault }}"
                  WriteDefault: "{{ WriteDefault }}"
            PartitionSpec:
              Fields:
                - SourceId: {{ SourceId }}
                  Transform: "{{ Transform }}"
                  Name: "{{ Name }}"
                  FieldId: {{ FieldId }}
              SpecId: {{ SpecId }}
            WriteOrder:
              OrderId: {{ OrderId }}
              Fields:
                - SourceId: {{ SourceId }}
                  Transform: "{{ Transform }}"
                  Direction: "{{ Direction }}"
                  NullOrder: "{{ NullOrder }}"
            Properties: "{{ Properties }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_table"
    values={[
        { label: 'update_table', value: 'update_table' }
    ]}
>
<TabItem value="update_table">

Updates a metadata table in the Data Catalog.

```sql
UPDATE aws.glue.tables
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
Name = '{{ Name }}',
TableInput = '{{ TableInput }}',
SkipArchive = {{ SkipArchive }},
TransactionId = '{{ TransactionId }}',
VersionId = '{{ VersionId }}',
ViewUpdateAction = '{{ ViewUpdateAction }}',
Force = {{ Force }},
UpdateOpenTableFormatInput = '{{ UpdateOpenTableFormatInput }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table"
    values={[
        { label: 'delete_table', value: 'delete_table' }
    ]}
>
<TabItem value="delete_table">

Removes a table definition from the Data Catalog. After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.

```sql
DELETE FROM aws.glue.tables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_tables"
    values={[
        { label: 'get_tables', value: 'get_tables' }
    ]}
>
<TabItem value="get_tables">

Retrieves the definitions of some or all of the tables in a given Database.

```sql
EXEC aws.glue.tables.get_tables 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"Expression": "{{ Expression }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"TransactionId": "{{ TransactionId }}", 
"QueryAsOfTime": "{{ QueryAsOfTime }}", 
"AuditContext": "{{ AuditContext }}", 
"IncludeStatusDetails": {{ IncludeStatusDetails }}, 
"AttributesToGet": "{{ AttributesToGet }}"
}'
;
```
</TabItem>
</Tabs>
