--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - timestream_write
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_write.tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_table"
    values={[
        { label: 'describe_table', value: 'describe_table' },
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="describe_table">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name that uniquely identifies this table.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Timestream table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Timestream database that contains this table.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Timestream table was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="magnetic_store_write_properties" /></td>
    <td><code>object</code></td>
    <td>Contains properties to set on the table when enabling magnetic store writes.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_properties" /></td>
    <td><code>object</code></td>
    <td>The retention duration for the memory store and magnetic store.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The schema of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Timestream table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the table: DELETING - The table is being deleted. ACTIVE - The table is ready for use. (ACTIVE, DELETING, RESTORING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tables">

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
    <td>A token to specify where to start paginating. This is the NextToken from a previously truncated response.</td>
</tr>
<tr>
    <td><CopyableCode code="tables" /></td>
    <td><code>array</code></td>
    <td>A list of tables.</td>
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
    <td><a href="#describe_table"><CopyableCode code="describe_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of tables, along with the name, status, and retention properties of each table. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#create_table"><CopyableCode code="create_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. Service quotas apply. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#update_table"><CopyableCode code="update_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#delete_table"><CopyableCode code="delete_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent. See code sample for details.</td>
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
    defaultValue="describe_table"
    values={[
        { label: 'describe_table', value: 'describe_table' },
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="describe_table">

Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. Service quotas apply. See code sample for details.

```sql
SELECT
arn,
creation_time,
database_name,
last_updated_time,
magnetic_store_write_properties,
retention_properties,
schema,
table_name,
table_status
FROM aws.timestream_write.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tables">

Provides a list of tables, along with the name, status, and retention properties of each table. See code sample for details.

```sql
SELECT
next_token,
tables
FROM aws.timestream_write.tables
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

Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. Service quotas apply. See code sample for details.

```sql
INSERT INTO aws.timestream_write.tables (
DatabaseName,
TableName,
RetentionProperties,
Tags,
MagneticStoreWriteProperties,
Schema,
region
)
SELECT 
'{{ DatabaseName }}' /* required */,
'{{ TableName }}' /* required */,
'{{ RetentionProperties }}',
'{{ Tags }}',
'{{ MagneticStoreWriteProperties }}',
'{{ Schema }}',
'{{ region }}'
RETURNING
table
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
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The name of the Timestream database.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the Timestream table.
    - name: RetentionProperties
      description: |
        The duration for which your time-series data must be stored in the memory store and the magnetic store.
      value:
        MemoryStoreRetentionPeriodInHours: {{ MemoryStoreRetentionPeriodInHours }}
        MagneticStoreRetentionPeriodInDays: {{ MagneticStoreRetentionPeriodInDays }}
    - name: Tags
      description: |
        A list of key-value pairs to label the table.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: MagneticStoreWriteProperties
      description: |
        Contains properties to set on the table when enabling magnetic store writes.
      value:
        EnableMagneticStoreWrites: {{ EnableMagneticStoreWrites }}
        MagneticStoreRejectedDataLocation:
          S3Configuration:
            BucketName: "{{ BucketName }}"
            ObjectKeyPrefix: "{{ ObjectKeyPrefix }}"
            EncryptionOption: "{{ EncryptionOption }}"
            KmsKeyId: "{{ KmsKeyId }}"
    - name: Schema
      description: |
        The schema of the table.
      value:
        CompositePartitionKey:
          - Type: "{{ Type }}"
            Name: "{{ Name }}"
            EnforcementInRecord: "{{ EnforcementInRecord }}"
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

Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. See code sample for details.

```sql
UPDATE aws.timestream_write.tables
SET 
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
RetentionProperties = '{{ RetentionProperties }}',
MagneticStoreWriteProperties = '{{ MagneticStoreWriteProperties }}',
Schema = '{{ Schema }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required
RETURNING
table;
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

Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent. See code sample for details.

```sql
DELETE FROM aws.timestream_write.tables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
