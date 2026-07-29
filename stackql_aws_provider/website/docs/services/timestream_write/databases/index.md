--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_write.databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_database"
    values={[
        { label: 'describe_database', value: 'describe_database' },
        { label: 'list_databases', value: 'list_databases' }
    ]}
>
<TabItem value="describe_database">

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
    <td>The Amazon Resource Name that uniquely identifies this database.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the database was created, calculated from the Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Timestream database.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS key used to encrypt the data stored in the database.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this database was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="table_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of tables found within a Timestream database.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_databases">

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
    <td><CopyableCode code="databases" /></td>
    <td><code>array</code></td>
    <td>A list of database names.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token. This parameter is returned when the response is truncated.</td>
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
    <td><a href="#describe_database"><CopyableCode code="describe_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. Service quotas apply. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#list_databases"><CopyableCode code="list_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of your Timestream databases. Service quotas apply. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#create_database"><CopyableCode code="create_database" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a></td>
    <td></td>
    <td>Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see Amazon Web Services managed keys. Service quotas apply. For details, see code sample.</td>
</tr>
<tr>
    <td><a href="#update_database"><CopyableCode code="update_database" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a></td>
    <td></td>
    <td>Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (KmsKeyId). If there are any concurrent UpdateDatabase requests, first writer wins. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#delete_database"><CopyableCode code="delete_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a given Timestream database. This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered. All tables in the database must be deleted first, or a ValidationException error will be thrown. Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#write_records"><CopyableCode code="write_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Records"><code>Records</code></a></td>
    <td></td>
    <td>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. Service quotas apply. See code sample for details. Upserts You can use the Version parameter in a WriteRecords request to update data points. Timestream tracks a version number with each record. Version defaults to 1 when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its Version when it receives a write request with a higher Version number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates Version, if it is greater than the existing value of Version. You can update a data point as many times as desired, as long as the value of Version continuously increases. For example, suppose you write a new record without indicating Version in the request. Timestream stores this record, and set Version to 1. Now, suppose you try to update this record with a WriteRecords request of the same record with a different measure value but, like before, do not provide Version. In this case, Timestream will reject this update with a RejectedRecordsException since the updated record’s version is not greater than the existing value of Version. However, if you were to resend the update request with Version set to 2, Timestream would then succeed in updating the record’s value, and the Version would be set to 2. Next, suppose you sent a WriteRecords request with this same record and an identical measure value, but with Version set to 3. In this case, Timestream would only update Version to 3. Any further updates would need to send a version number greater than 3, or the update requests would receive a RejectedRecordsException.</td>
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
    defaultValue="describe_database"
    values={[
        { label: 'describe_database', value: 'describe_database' },
        { label: 'list_databases', value: 'list_databases' }
    ]}
>
<TabItem value="describe_database">

Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. Service quotas apply. See code sample for details.

```sql
SELECT
arn,
creation_time,
database_name,
kms_key_id,
last_updated_time,
table_count
FROM aws.timestream_write.databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_databases">

Returns a list of your Timestream databases. Service quotas apply. See code sample for details.

```sql
SELECT
databases,
next_token
FROM aws.timestream_write.databases
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

Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see Amazon Web Services managed keys. Service quotas apply. For details, see code sample.

```sql
INSERT INTO aws.timestream_write.databases (
DatabaseName,
KmsKeyId,
Tags,
region
)
SELECT 
'{{ DatabaseName }}' /* required */,
'{{ KmsKeyId }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
database
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
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The name of the Timestream database.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see Amazon Web Services managed keys.
    - name: Tags
      description: |
        A list of key-value pairs to label the table.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (KmsKeyId). If there are any concurrent UpdateDatabase requests, first writer wins. See code sample for details.

```sql
UPDATE aws.timestream_write.databases
SET 
DatabaseName = '{{ DatabaseName }}',
KmsKeyId = '{{ KmsKeyId }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND KmsKeyId = '{{ KmsKeyId }}' --required
RETURNING
database;
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

Deletes a given Timestream database. This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered. All tables in the database must be deleted first, or a ValidationException error will be thrown. Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent. See code sample for details.

```sql
DELETE FROM aws.timestream_write.databases
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="write_records"
    values={[
        { label: 'write_records', value: 'write_records' }
    ]}
>
<TabItem value="write_records">

Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. Service quotas apply. See code sample for details. Upserts You can use the Version parameter in a WriteRecords request to update data points. Timestream tracks a version number with each record. Version defaults to 1 when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its Version when it receives a write request with a higher Version number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates Version, if it is greater than the existing value of Version. You can update a data point as many times as desired, as long as the value of Version continuously increases. For example, suppose you write a new record without indicating Version in the request. Timestream stores this record, and set Version to 1. Now, suppose you try to update this record with a WriteRecords request of the same record with a different measure value but, like before, do not provide Version. In this case, Timestream will reject this update with a RejectedRecordsException since the updated record’s version is not greater than the existing value of Version. However, if you were to resend the update request with Version set to 2, Timestream would then succeed in updating the record’s value, and the Version would be set to 2. Next, suppose you sent a WriteRecords request with this same record and an identical measure value, but with Version set to 3. In this case, Timestream would only update Version to 3. Any further updates would need to send a version number greater than 3, or the update requests would receive a RejectedRecordsException.

```sql
EXEC aws.timestream_write.databases.write_records 
@region='{{ region }}' --required 
@@json=
'{
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"CommonAttributes": "{{ CommonAttributes }}", 
"Records": "{{ Records }}"
}'
;
```
</TabItem>
</Tabs>
