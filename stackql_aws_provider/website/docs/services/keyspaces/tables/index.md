--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - keyspaces
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspaces.tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'list_tables', value: 'list_tables' }
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
    <td><CopyableCode code="capacitySpecification" /></td>
    <td><code>object</code></td>
    <td>The read/write throughput capacity mode for a table. The options are: throughputMode:PAY_PER_REQUEST throughputMode:PROVISIONED</td>
</tr>
<tr>
    <td><CopyableCode code="cdcSpecification" /></td>
    <td><code>object</code></td>
    <td>The CDC stream settings of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="clientSideTimestamps" /></td>
    <td><code>object</code></td>
    <td>The client-side timestamps setting of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>object</code></td>
    <td>The the description of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation timestamp of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultTimeToLive" /></td>
    <td><code>integer</code></td>
    <td>The default Time to Live settings in seconds of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSpecification" /></td>
    <td><code>object</code></td>
    <td>The encryption settings of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="keyspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace that the specified table is stored in. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latestStreamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pointInTimeRecovery" /></td>
    <td><code>object</code></td>
    <td>The point-in-time recovery status of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaSpecifications" /></td>
    <td><code>array</code></td>
    <td>Returns the Amazon Web Services Region specific settings of all Regions a multi-Region table is replicated in.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified table. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schemaDefinition" /></td>
    <td><code>object</code></td>
    <td>The schema definition of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the specified table. (ACTIVE, CREATING, UPDATING, DELETING, DELETED, RESTORING, INACCESSIBLE_ENCRYPTION_CREDENTIALS)</td>
</tr>
<tr>
    <td><CopyableCode code="tableName" /></td>
    <td><code>string</code></td>
    <td>The name of the specified table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>object</code></td>
    <td>The custom Time to Live settings of the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="warmThroughputSpecification" /></td>
    <td><code>object</code></td>
    <td>The warm throughput settings for the table, including the current status and configured read and write capacity units.</td>
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
    <td><CopyableCode code="keyspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace that the table is stored in. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the table in the format of an Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
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
    <td>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata. To read table metadata using GetTable, the IAM principal needs Select action permissions for the table and the system keyspace.</td>
</tr>
<tr>
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListTables operation returns a list of tables for a specified keyspace. To read keyspace metadata using ListTables, the IAM principal needs Select action permissions for the system keyspace.</td>
</tr>
<tr>
    <td><a href="#create_table"><CopyableCode code="create_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyspaceName"><code>keyspaceName</code></a>, <a href="#parameter-tableName"><code>tableName</code></a>, <a href="#parameter-schemaDefinition"><code>schemaDefinition</code></a></td>
    <td></td>
    <td>The CreateTable operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique. CreateTable is an asynchronous operation. When the request is received, the status of the table is set to CREATING. You can monitor the creation status of the new table by using the GetTable operation, which returns the current status of the table. You can start using a table when the status is ACTIVE. For more information, see Create a table in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_table"><CopyableCode code="update_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyspaceName"><code>keyspaceName</code></a>, <a href="#parameter-tableName"><code>tableName</code></a></td>
    <td></td>
    <td>Adds new columns to the table or updates one of the table's settings, for example capacity mode, auto scaling, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.</td>
</tr>
<tr>
    <td><a href="#delete_table"><CopyableCode code="delete_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteTable operation deletes a table and all of its data. After a DeleteTable request is received, the specified table is in the DELETING state until Amazon Keyspaces completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is either in the CREATING or UPDATING states, then Amazon Keyspaces returns a ResourceInUseException. If the specified table does not exist, Amazon Keyspaces returns a ResourceNotFoundException. If the table is already in the DELETING state, no error is returned.</td>
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
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="get_table">

Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata. To read table metadata using GetTable, the IAM principal needs Select action permissions for the table and the system keyspace.

```sql
SELECT
capacitySpecification,
cdcSpecification,
clientSideTimestamps,
comment,
creationTimestamp,
defaultTimeToLive,
encryptionSpecification,
keyspaceName,
latestStreamArn,
pointInTimeRecovery,
replicaSpecifications,
resourceArn,
schemaDefinition,
status,
tableName,
ttl,
warmThroughputSpecification
FROM aws.keyspaces.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tables">

The ListTables operation returns a list of tables for a specified keyspace. To read keyspace metadata using ListTables, the IAM principal needs Select action permissions for the system keyspace.

```sql
SELECT
keyspaceName,
resourceArn,
tableName
FROM aws.keyspaces.tables
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

The CreateTable operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique. CreateTable is an asynchronous operation. When the request is received, the status of the table is set to CREATING. You can monitor the creation status of the new table by using the GetTable operation, which returns the current status of the table. You can start using a table when the status is ACTIVE. For more information, see Create a table in the Amazon Keyspaces Developer Guide.

```sql
INSERT INTO aws.keyspaces.tables (
keyspaceName,
tableName,
schemaDefinition,
comment,
capacitySpecification,
encryptionSpecification,
pointInTimeRecovery,
ttl,
defaultTimeToLive,
tags,
clientSideTimestamps,
autoScalingSpecification,
replicaSpecifications,
cdcSpecification,
warmThroughputSpecification,
region
)
SELECT 
'{{ keyspaceName }}' /* required */,
'{{ tableName }}' /* required */,
'{{ schemaDefinition }}' /* required */,
'{{ comment }}',
'{{ capacitySpecification }}',
'{{ encryptionSpecification }}',
'{{ pointInTimeRecovery }}',
'{{ ttl }}',
{{ defaultTimeToLive }},
'{{ tags }}',
'{{ clientSideTimestamps }}',
'{{ autoScalingSpecification }}',
'{{ replicaSpecifications }}',
'{{ cdcSpecification }}',
'{{ warmThroughputSpecification }}',
'{{ region }}'
RETURNING
resourceArn
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
    - name: keyspaceName
      value: "{{ keyspaceName }}"
      description: |
        The name of the keyspace that the table is going to be created in.
    - name: tableName
      value: "{{ tableName }}"
      description: |
        The name of the table.
    - name: schemaDefinition
      description: |
        The schemaDefinition consists of the following parameters. For each column to be created: name - The name of the column. type - An Amazon Keyspaces data type. For more information, see Data types in the Amazon Keyspaces Developer Guide. The primary key of the table consists of the following columns: partitionKeys - The partition key can be a single column, or it can be a compound value composed of two or more columns. The partition key portion of the primary key is required and determines how Amazon Keyspaces stores your data. name - The name of each partition key column. clusteringKeys - The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition. name - The name of the clustering column. orderBy - Sets the ascendant (ASC) or descendant (DESC) order modifier. To define a column as static use staticColumns - Static columns store values that are shared by all rows in the same partition: name - The name of the column. type - An Amazon Keyspaces data type.
      value:
        allColumns:
          - name: "{{ name }}"
            type_: "{{ type_ }}"
        partitionKeys:
          - name: "{{ name }}"
        clusteringKeys:
          - name: "{{ name }}"
            orderBy: "{{ orderBy }}"
        staticColumns:
          - name: "{{ name }}"
    - name: comment
      description: |
        This parameter allows to enter a description of the table.
      value:
        message: "{{ message }}"
    - name: capacitySpecification
      description: |
        Specifies the read/write throughput capacity mode for the table. The options are: throughputMode:PAY_PER_REQUEST and throughputMode:PROVISIONED - Provisioned capacity mode requires readCapacityUnits and writeCapacityUnits as input. The default is throughput_mode:PAY_PER_REQUEST. For more information, see Read/write capacity modes in the Amazon Keyspaces Developer Guide.
      value:
        throughputMode: "{{ throughputMode }}"
        readCapacityUnits: {{ readCapacityUnits }}
        writeCapacityUnits: {{ writeCapacityUnits }}
    - name: encryptionSpecification
      description: |
        Specifies how the encryption key for encryption at rest is managed for the table. You can choose one of the following KMS key (KMS key): type:AWS_OWNED_KMS_KEY - This key is owned by Amazon Keyspaces. type:CUSTOMER_MANAGED_KMS_KEY - This key is stored in your account and is created, owned, and managed by you. This option requires the kms_key_identifier of the KMS key in Amazon Resource Name (ARN) format as input. The default is type:AWS_OWNED_KMS_KEY. For more information, see Encryption at rest in the Amazon Keyspaces Developer Guide.
      value:
        type_: "{{ type_ }}"
        kmsKeyIdentifier: "{{ kmsKeyIdentifier }}"
    - name: pointInTimeRecovery
      description: |
        Specifies if pointInTimeRecovery is enabled or disabled for the table. The options are: status=ENABLED status=DISABLED If it's not specified, the default is status=DISABLED. For more information, see Point-in-time recovery in the Amazon Keyspaces Developer Guide.
      value:
        status: "{{ status }}"
    - name: ttl
      description: |
        Enables Time to Live custom settings for the table. The options are: status:enabled status:disabled The default is status:disabled. After ttl is enabled, you can't disable it for the table. For more information, see Expiring data by using Amazon Keyspaces Time to Live (TTL) in the Amazon Keyspaces Developer Guide.
      value:
        status: "{{ status }}"
    - name: defaultTimeToLive
      value: {{ defaultTimeToLive }}
      description: |
        The default Time to Live setting in seconds for the table. For more information, see Setting the default TTL value for a table in the Amazon Keyspaces Developer Guide.
    - name: tags
      description: |
        A list of key-value pair tags to be attached to the resource. For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientSideTimestamps
      description: |
        Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option: status: "enabled" Once client-side timestamps are enabled for a table, this setting cannot be disabled.
      value:
        status: "{{ status }}"
    - name: autoScalingSpecification
      description: |
        The optional auto scaling settings for a table in provisioned capacity mode. Specifies if the service can manage throughput capacity automatically on your behalf. Auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide. By default, auto scaling is disabled for a table.
      value:
        writeCapacityAutoScaling:
          autoScalingDisabled: {{ autoScalingDisabled }}
          minimumUnits: {{ minimumUnits }}
          maximumUnits: {{ maximumUnits }}
          scalingPolicy:
            targetTrackingScalingPolicyConfiguration:
              disableScaleIn: {{ disableScaleIn }}
              scaleInCooldown: {{ scaleInCooldown }}
              scaleOutCooldown: {{ scaleOutCooldown }}
              targetValue: {{ targetValue }}
        readCapacityAutoScaling:
          autoScalingDisabled: {{ autoScalingDisabled }}
          minimumUnits: {{ minimumUnits }}
          maximumUnits: {{ maximumUnits }}
          scalingPolicy:
            targetTrackingScalingPolicyConfiguration:
              disableScaleIn: {{ disableScaleIn }}
              scaleInCooldown: {{ scaleInCooldown }}
              scaleOutCooldown: {{ scaleOutCooldown }}
              targetValue: {{ targetValue }}
    - name: replicaSpecifications
      description: |
        The optional Amazon Web Services Region specific settings of a multi-Region table. These settings overwrite the general settings of the table for the specified Region. For a multi-Region table in provisioned capacity mode, you can configure the table's read capacity differently for each Region's replica. The write capacity, however, remains synchronized between all replicas to ensure that there's enough capacity to replicate writes across all Regions. To define the read capacity for a table replica in a specific Region, you can do so by configuring the following parameters. region: The Region where these settings are applied. (Required) readCapacityUnits: The provisioned read capacity units. (Optional) readCapacityAutoScaling: The read capacity auto scaling settings for the table. (Optional)
      value:
        - region: "{{ region }}"
          readCapacityUnits: {{ readCapacityUnits }}
          readCapacityAutoScaling:
            autoScalingDisabled: {{ autoScalingDisabled }}
            minimumUnits: {{ minimumUnits }}
            maximumUnits: {{ maximumUnits }}
            scalingPolicy:
              targetTrackingScalingPolicyConfiguration:
                disableScaleIn: {{ disableScaleIn }}
                scaleInCooldown: {{ scaleInCooldown }}
                scaleOutCooldown: {{ scaleOutCooldown }}
                targetValue: {{ targetValue }}
    - name: cdcSpecification
      description: |
        The CDC stream settings of the table.
      value:
        status: "{{ status }}"
        viewType: "{{ viewType }}"
        tags:
          - key: "{{ key }}"
            value: "{{ value }}"
        propagateTags: "{{ propagateTags }}"
    - name: warmThroughputSpecification
      description: |
        Specifies the warm throughput settings for the table. Pre-warming a table helps you avoid capacity exceeded exceptions by pre-provisioning read and write capacity units to reduce cold start latency when your table receives traffic. For more information about pre-warming in Amazon Keyspaces, see Pre-warm a table in Amazon Keyspaces in the Amazon Keyspaces Developer Guide.
      value:
        readUnitsPerSecond: {{ readUnitsPerSecond }}
        writeUnitsPerSecond: {{ writeUnitsPerSecond }}
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

Adds new columns to the table or updates one of the table's settings, for example capacity mode, auto scaling, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

```sql
UPDATE aws.keyspaces.tables
SET 
keyspaceName = '{{ keyspaceName }}',
tableName = '{{ tableName }}',
addColumns = '{{ addColumns }}',
capacitySpecification = '{{ capacitySpecification }}',
encryptionSpecification = '{{ encryptionSpecification }}',
pointInTimeRecovery = '{{ pointInTimeRecovery }}',
ttl = '{{ ttl }}',
defaultTimeToLive = {{ defaultTimeToLive }},
clientSideTimestamps = '{{ clientSideTimestamps }}',
autoScalingSpecification = '{{ autoScalingSpecification }}',
replicaSpecifications = '{{ replicaSpecifications }}',
cdcSpecification = '{{ cdcSpecification }}',
warmThroughputSpecification = '{{ warmThroughputSpecification }}'
WHERE 
region = '{{ region }}' --required
AND keyspaceName = '{{ keyspaceName }}' --required
AND tableName = '{{ tableName }}' --required
RETURNING
resourceArn;
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

The DeleteTable operation deletes a table and all of its data. After a DeleteTable request is received, the specified table is in the DELETING state until Amazon Keyspaces completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is either in the CREATING or UPDATING states, then Amazon Keyspaces returns a ResourceInUseException. If the specified table does not exist, Amazon Keyspaces returns a ResourceNotFoundException. If the table is already in the DELETING state, no error is returned.

```sql
DELETE FROM aws.keyspaces.tables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
