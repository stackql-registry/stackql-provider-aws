--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
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

Creates, updates, deletes, gets or lists a <code>tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.tables" /></td></tr>
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
    <td><CopyableCode code="archival_summary" /></td>
    <td><code>object</code></td>
    <td>Contains information about the table archive.</td>
</tr>
<tr>
    <td><CopyableCode code="attribute_definitions" /></td>
    <td><code>array</code></td>
    <td>An array of AttributeDefinition objects. Each of these objects describes one attribute in the table and index key schema. Each AttributeDefinition object in this array is composed of: AttributeName - The name of the attribute. AttributeType - The data type for the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_mode_summary" /></td>
    <td><code>object</code></td>
    <td>Contains the details for the read/write capacity mode.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the table was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether deletion protection is enabled (true) or disabled (false) on the table.</td>
</tr>
<tr>
    <td><CopyableCode code="global_secondary_indexes" /></td>
    <td><code>array</code></td>
    <td>The global secondary indexes, if any, on the table. Each index is scoped to a given partition key value. Each element is composed of: Backfilling - If true, then the index is currently in the backfilling phase. Backfilling occurs only when a new global secondary index is added to the table. It is the process by which DynamoDB populates the new index with data from the table. (This attribute does not appear for indexes that were created during a CreateTable operation.) You can delete an index that is being created during the Backfilling phase when IndexStatus is set to CREATING and Backfilling is true. You can't delete the index that is being created when IndexStatus is set to CREATING and Backfilling is false. (This attribute does not appear for indexes that were created during a CreateTable operation.) IndexName - The name of the global secondary index. IndexSizeBytes - The total size of the global secondary index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. IndexStatus - The current status of the global secondary index: CREATING - The index is being created. UPDATING - The index is being updated. DELETING - The index is being deleted. ACTIVE - The index is ready for use. ItemCount - The number of items in the global secondary index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. KeySchema - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table. Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of: ProjectionType - One of the following: KEYS_ONLY - Only the index and primary keys are projected into the index. INCLUDE - In addition to the attributes described in KEYS_ONLY, the secondary index will include other non-key attributes that you specify. ALL - All of the table attributes are projected into the index. NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of INCLUDE. You still can specify the ProjectionType of ALL to project all attributes from the source table, even if the table has more than 100 attributes. ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units, along with data about increases and decreases. If the table is in the DELETING state, no information about indexes will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="global_table_settings_replication_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates one of the settings synchronization modes for the global table: ENABLED: Indicates that the settings synchronization mode for the global table is enabled. DISABLED: Indicates that the settings synchronization mode for the global table is disabled. ENABLED_WITH_OVERRIDES: This mode is set by default for a same account global table. Indicates that certain global table settings can be overridden. (ENABLED, DISABLED, ENABLED_WITH_OVERRIDES)</td>
</tr>
<tr>
    <td><CopyableCode code="global_table_version" /></td>
    <td><code>string</code></td>
    <td>Represents the version of global tables in use, if the table is replicated across Amazon Web Services Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="global_table_witnesses" /></td>
    <td><code>array</code></td>
    <td>The witness Region and its current status in the MRSC global table. Only one witness Region can be configured per MRSC global table.</td>
</tr>
<tr>
    <td><CopyableCode code="item_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</td>
</tr>
<tr>
    <td><CopyableCode code="key_schema" /></td>
    <td><code>array</code></td>
    <td>The primary key structure for the table. Each KeySchemaElement consists of: AttributeName - The name of the attribute. KeyType - The role of the attribute: HASH - partition key RANGE - sort key The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_stream_label" /></td>
    <td><code>string</code></td>
    <td>A timestamp, in ISO 8601 format, for this stream. Note that LatestStreamLabel is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique: Amazon Web Services customer ID Table name StreamLabel</td>
</tr>
<tr>
    <td><CopyableCode code="local_secondary_indexes" /></td>
    <td><code>array</code></td>
    <td>Represents one or more local secondary indexes on the table. Each index is scoped to a given partition key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB. Each element is composed of: IndexName - The name of the local secondary index. KeySchema - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table. Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of: ProjectionType - One of the following: KEYS_ONLY - Only the index and primary keys are projected into the index. INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes. ALL - All of the table attributes are projected into the index. NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of INCLUDE. You still can specify the ProjectionType of ALL to project all attributes from the source table, even if the table has more than 100 attributes. IndexSizeBytes - Represents the total size of the index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. ItemCount - Represents the number of items in the index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. If the table is in the DELETING state, no information about indexes will be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_consistency" /></td>
    <td><code>string</code></td>
    <td>Indicates one of the following consistency modes for a global table: EVENTUAL: Indicates that the global table is configured for multi-Region eventual consistency (MREC). STRONG: Indicates that the global table is configured for multi-Region strong consistency (MRSC). If you don't specify this field, the global table consistency mode defaults to EVENTUAL. For more information about global tables consistency modes, see Consistency modes in DynamoDB developer guide. (EVENTUAL, STRONG)</td>
</tr>
<tr>
    <td><CopyableCode code="on_demand_throughput" /></td>
    <td><code>object</code></td>
    <td>The maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify MaxReadRequestUnits, MaxWriteRequestUnits, or both.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_throughput" /></td>
    <td><code>object</code></td>
    <td>The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.</td>
</tr>
<tr>
    <td><CopyableCode code="replicas" /></td>
    <td><code>array</code></td>
    <td>Represents replicas of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_summary" /></td>
    <td><code>object</code></td>
    <td>Contains details for the restore.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_description" /></td>
    <td><code>object</code></td>
    <td>The description of the server-side encryption status on the specified table.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_specification" /></td>
    <td><code>object</code></td>
    <td>The current DynamoDB Streams configuration for the table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_class_summary" /></td>
    <td><code>object</code></td>
    <td>Contains details of the table class.</td>
</tr>
<tr>
    <td><CopyableCode code="table_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the table for which the backup was created. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</td>
</tr>
<tr>
    <td><CopyableCode code="table_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the table: CREATING - The table is being created. UPDATING - The table/index configuration is being updated. The table/index remains available for data operations when UPDATING. DELETING - The table is being deleted. ACTIVE - The table is ready for use. INACCESSIBLE_ENCRYPTION_CREDENTIALS - The KMS key used to encrypt the table in inaccessible. Table operations may fail due to failure to use the KMS key. DynamoDB will initiate the table archival process when a table's KMS key remains inaccessible for more than seven days. ARCHIVING - The table is being archived. Operations are not allowed until archival is complete. ARCHIVED - The table has been archived. See the ArchivalReason for more information. (CREATING, UPDATING, DELETING, ACTIVE, INACCESSIBLE_ENCRYPTION_CREDENTIALS, ARCHIVING, ARCHIVED, REPLICATION_NOT_AUTHORIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="warm_throughput" /></td>
    <td><code>object</code></td>
    <td>Describes the warm throughput value of the base table.</td>
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
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100. If LastEvaluatedTableName also appears in the output, you can use this value as the ExclusiveStartTableName parameter in a subsequent ListTables request and obtain the next page of results.</td>
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
    <td>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table. If you issue a DescribeTable request immediately after a CreateTable request, DynamoDB might return a ResourceNotFoundException. This is because DescribeTable uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the DescribeTable request again.</td>
</tr>
<tr>
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of table names associated with the current account and endpoint. The output from ListTables is paginated, with each page returning a maximum of 100 table names.</td>
</tr>
<tr>
    <td><a href="#create_table"><CopyableCode code="create_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>The CreateTable operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions. CreateTable is an asynchronous operation. Upon receiving a CreateTable request, DynamoDB immediately returns a response with a TableStatus of CREATING. After the table is created, DynamoDB sets the TableStatus to ACTIVE. You can perform read and write operations only on an ACTIVE table. You can optionally define secondary indexes on the new table, as part of the CreateTable operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the CREATING state at any given time. You can use the DescribeTable action to check the table status.</td>
</tr>
<tr>
    <td><a href="#update_table"><CopyableCode code="update_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table. You can only perform one of the following operations at once: Modify the provisioned throughput settings of the table. Remove a global secondary index from the table. Create a new global secondary index on the table. After the index begins backfilling, you can use UpdateTable to perform other operations. UpdateTable is an asynchronous operation; while it's executing, the table status changes from ACTIVE to UPDATING. While it's UPDATING, you can't issue another UpdateTable request. When the table returns to the ACTIVE state, the UpdateTable operation is complete.</td>
</tr>
<tr>
    <td><a href="#delete_table"><CopyableCode code="delete_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteTable operation deletes a table and all of its items. After a DeleteTable request, the specified table is in the DELETING state until DynamoDB completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is in CREATING or UPDATING states, then DynamoDB returns a ResourceInUseException. If the specified table does not exist, DynamoDB returns a ResourceNotFoundException. If table is already in the DELETING state, no error is returned. DynamoDB might continue to accept data read and write operations, such as GetItem and PutItem, on a table in the DELETING state until the table deletion is complete. For the full list of table states, see TableStatus. When you delete a table, any indexes on that table are also deleted. If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the DISABLED state, and the stream is automatically deleted after 24 hours. Use the DescribeTable action to check the status of the table.</td>
</tr>
<tr>
    <td><a href="#disable_kinesis_streaming_destination"><CopyableCode code="disable_kinesis_streaming_destination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-StreamArn"><code>StreamArn</code></a></td>
    <td></td>
    <td>Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.</td>
</tr>
<tr>
    <td><a href="#enable_kinesis_streaming_destination"><CopyableCode code="enable_kinesis_streaming_destination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-StreamArn"><code>StreamArn</code></a></td>
    <td></td>
    <td>Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.</td>
</tr>
<tr>
    <td><a href="#export_table_to_point_in_time"><CopyableCode code="export_table_to_point_in_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableArn"><code>TableArn</code></a>, <a href="#parameter-S3Bucket"><code>S3Bucket</code></a></td>
    <td></td>
    <td>Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>You must provide the name of the partition key attribute and a single value for that attribute. Query returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results. Use the KeyConditionExpression parameter to provide a specific value for the partition key. The Query operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the Query operation by specifying a sort key value and a comparison operator in KeyConditionExpression. To further refine the Query results, you can optionally provide a FilterExpression. A FilterExpression determines which items within the results should be returned to you. All of the other results are discarded. A Query operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a FilterExpression. Query results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the ScanIndexForward parameter to false. A single Query operation will read up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you will need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide. FilterExpression is applied after a Query finishes, but before the results are returned. A FilterExpression cannot contain partition key or sort key attributes. You need to specify those attributes in the KeyConditionExpression. A Query operation can return an empty result set and a LastEvaluatedKey if all the items read for the page of results are filtered out. You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the ConsistentRead parameter to true and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify ConsistentRead when querying a global secondary index.</td>
</tr>
<tr>
    <td><a href="#restore_table_from_backup"><CopyableCode code="restore_table_from_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetTableName"><code>TargetTableName</code></a>, <a href="#parameter-BackupArn"><code>BackupArn</code></a></td>
    <td></td>
    <td>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. You can call RestoreTableFromBackup at a maximum rate of 10 times per second. You must manually set up the following on the restored table: Auto scaling policies IAM policies Amazon CloudWatch metrics and alarms Tags Stream settings Time to Live (TTL) settings</td>
</tr>
<tr>
    <td><a href="#restore_table_to_point_in_time"><CopyableCode code="restore_table_to_point_in_time" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetTableName"><code>TargetTableName</code></a></td>
    <td></td>
    <td>Restores the specified table to the specified point in time within EarliestRestorableDateTime and LatestRestorableDateTime. You can restore your table to any point in time in the last 35 days. You can set the recovery period to any value between 1 and 35 days. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. Along with data, the following are also included on the new restored table using point in time recovery: Global secondary indexes (GSIs) Local secondary indexes (LSIs) Provisioned read and write capacity Encryption settings All these settings come from the current settings of the source table at the time of restore. You must manually set up the following on the restored table: Auto scaling policies IAM policies Amazon CloudWatch metrics and alarms Tags Stream settings Time to Live (TTL) settings Point in time recovery settings</td>
</tr>
<tr>
    <td><a href="#scan"><CopyableCode code="scan" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>The Scan operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a FilterExpression operation. If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The LastEvaluatedKey value is also returned and the requestor can use the LastEvaluatedKey to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a FilterExpression, a scan result can result in no items meeting the criteria and the Count will result in zero. If you did not use a FilterExpression in the scan request, then Count is the same as ScannedCount. Count and ScannedCount only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table. A single Scan operation first reads up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a FilterExpression is provided. If LastEvaluatedKey is present in the response, pagination is required to complete the full table scan. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide. Scan operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel Scan operation by providing the Segment and TotalSegments parameters. For more information, see Parallel Scan in the Amazon DynamoDB Developer Guide. By default, a Scan uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent Scan may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the ConsistentRead parameter to true. Strong consistency only relates to the consistency of the read at the item level. DynamoDB does not provide snapshot isolation for a scan operation when the ConsistentRead parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested.</td>
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

Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table. If you issue a DescribeTable request immediately after a CreateTable request, DynamoDB might return a ResourceNotFoundException. This is because DescribeTable uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the DescribeTable request again.

```sql
SELECT
archival_summary,
attribute_definitions,
billing_mode_summary,
creation_date_time,
deletion_protection_enabled,
global_secondary_indexes,
global_table_settings_replication_mode,
global_table_version,
global_table_witnesses,
item_count,
key_schema,
latest_stream_arn,
latest_stream_label,
local_secondary_indexes,
multi_region_consistency,
on_demand_throughput,
provisioned_throughput,
replicas,
restore_summary,
sse_description,
stream_specification,
table_arn,
table_class_summary,
table_id,
table_name,
table_size_bytes,
table_status,
warm_throughput
FROM aws.dynamodb.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tables">

Returns an array of table names associated with the current account and endpoint. The output from ListTables is paginated, with each page returning a maximum of 100 table names.

```sql
SELECT
table_name
FROM aws.dynamodb.tables
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

The CreateTable operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions. CreateTable is an asynchronous operation. Upon receiving a CreateTable request, DynamoDB immediately returns a response with a TableStatus of CREATING. After the table is created, DynamoDB sets the TableStatus to ACTIVE. You can perform read and write operations only on an ACTIVE table. You can optionally define secondary indexes on the new table, as part of the CreateTable operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the CREATING state at any given time. You can use the DescribeTable action to check the table status.

```sql
INSERT INTO aws.dynamodb.tables (
AttributeDefinitions,
TableName,
KeySchema,
LocalSecondaryIndexes,
GlobalSecondaryIndexes,
BillingMode,
ProvisionedThroughput,
StreamSpecification,
SSESpecification,
Tags,
TableClass,
DeletionProtectionEnabled,
WarmThroughput,
ResourcePolicy,
OnDemandThroughput,
GlobalTableSourceArn,
GlobalTableSettingsReplicationMode,
region
)
SELECT 
'{{ AttributeDefinitions }}',
'{{ TableName }}' /* required */,
'{{ KeySchema }}',
'{{ LocalSecondaryIndexes }}',
'{{ GlobalSecondaryIndexes }}',
'{{ BillingMode }}',
'{{ ProvisionedThroughput }}',
'{{ StreamSpecification }}',
'{{ SSESpecification }}',
'{{ Tags }}',
'{{ TableClass }}',
{{ DeletionProtectionEnabled }},
'{{ WarmThroughput }}',
'{{ ResourcePolicy }}',
'{{ OnDemandThroughput }}',
'{{ GlobalTableSourceArn }}',
'{{ GlobalTableSettingsReplicationMode }}',
'{{ region }}'
RETURNING
table_description
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
    - name: AttributeDefinitions
      description: |
        An array of attributes that describe the key schema for the table and indexes.
      value:
        - AttributeName: "{{ AttributeName }}"
          AttributeType: "{{ AttributeType }}"
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the table to create. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
    - name: KeySchema
      description: |
        Specifies the attributes that make up the primary key for a table or an index. The attributes in KeySchema must also be defined in the AttributeDefinitions array. For more information, see Data Model in the Amazon DynamoDB Developer Guide. Each KeySchemaElement in the array is composed of: AttributeName - The name of this key attribute. KeyType - The role that the key attribute will assume: HASH - partition key RANGE - sort key The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. For a simple primary key (partition key), you must provide exactly one element with a KeyType of HASH. For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a KeyType of HASH, and the second element must have a KeyType of RANGE. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide.
      value:
        - AttributeName: "{{ AttributeName }}"
          KeyType: "{{ KeyType }}"
    - name: LocalSecondaryIndexes
      description: |
        One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained. Each local secondary index in the array includes the following: IndexName - The name of the local secondary index. Must be unique only for this table. KeySchema - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table. Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of: ProjectionType - One of the following: KEYS_ONLY - Only the index and primary keys are projected into the index. INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes. ALL - All of the table attributes are projected into the index. NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of INCLUDE. You still can specify the ProjectionType of ALL to project all attributes from the source table, even if the table has more than 100 attributes.
      value:
        - IndexName: "{{ IndexName }}"
          KeySchema: "{{ KeySchema }}"
          Projection:
            ProjectionType: "{{ ProjectionType }}"
            NonKeyAttributes:
              - "{{ NonKeyAttributes }}"
    - name: GlobalSecondaryIndexes
      description: |
        One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following: IndexName - The name of the global secondary index. Must be unique only for this table. KeySchema - Specifies the key schema for the global secondary index. Each global secondary index supports up to 4 partition keys and up to 4 sort keys. Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of: ProjectionType - One of the following: KEYS_ONLY - Only the index and primary keys are projected into the index. INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes. ALL - All of the table attributes are projected into the index. NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of INCLUDE. You still can specify the ProjectionType of ALL to project all attributes from the source table, even if the table has more than 100 attributes. ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.
      value:
        - IndexName: "{{ IndexName }}"
          KeySchema: "{{ KeySchema }}"
          Projection:
            ProjectionType: "{{ ProjectionType }}"
            NonKeyAttributes:
              - "{{ NonKeyAttributes }}"
          ProvisionedThroughput:
            ReadCapacityUnits: {{ ReadCapacityUnits }}
            WriteCapacityUnits: {{ WriteCapacityUnits }}
          OnDemandThroughput:
            MaxReadRequestUnits: {{ MaxReadRequestUnits }}
            MaxWriteRequestUnits: {{ MaxWriteRequestUnits }}
          WarmThroughput:
            ReadUnitsPerSecond: {{ ReadUnitsPerSecond }}
            WriteUnitsPerSecond: {{ WriteUnitsPerSecond }}
    - name: BillingMode
      value: "{{ BillingMode }}"
      description: |
        Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later. PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for most DynamoDB workloads. PAY_PER_REQUEST sets the billing mode to On-demand capacity mode. PROVISIONED - We recommend using PROVISIONED for steady workloads with predictable growth where capacity requirements can be reliably forecasted. PROVISIONED sets the billing mode to Provisioned capacity mode.
      valid_values: ['PROVISIONED', 'PAY_PER_REQUEST']
    - name: ProvisionedThroughput
      description: |
        Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the UpdateTable operation. If you set BillingMode as PROVISIONED, you must specify this property. If you set BillingMode as PAY_PER_REQUEST, you cannot specify this property. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
      value:
        ReadCapacityUnits: {{ ReadCapacityUnits }}
        WriteCapacityUnits: {{ WriteCapacityUnits }}
    - name: StreamSpecification
      description: |
        The settings for DynamoDB Streams on the table. These settings consist of: StreamEnabled - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false). StreamViewType - When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values for StreamViewType are: KEYS_ONLY - Only the key attributes of the modified item are written to the stream. NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream. OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream. NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream.
      value:
        StreamEnabled: {{ StreamEnabled }}
        StreamViewType: "{{ StreamViewType }}"
    - name: SSESpecification
      description: |
        Represents the settings used to enable server-side encryption.
      value:
        Enabled: {{ Enabled }}
        SSEType: "{{ SSEType }}"
        KMSMasterKeyId: "{{ KMSMasterKeyId }}"
    - name: Tags
      description: |
        A list of key-value pairs to label the table. For more information, see Tagging for DynamoDB.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TableClass
      value: "{{ TableClass }}"
      description: |
        The table class of the new table. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS.
      valid_values: ['STANDARD', 'STANDARD_INFREQUENT_ACCESS']
    - name: DeletionProtectionEnabled
      value: {{ DeletionProtectionEnabled }}
      description: |
        Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.
    - name: WarmThroughput
      description: |
        Represents the warm throughput (in read units per second and write units per second) for creating a table.
      value:
        ReadUnitsPerSecond: {{ ReadUnitsPerSecond }}
        WriteUnitsPerSecond: {{ WriteUnitsPerSecond }}
    - name: ResourcePolicy
      value: "{{ ResourcePolicy }}"
      description: |
        An Amazon Web Services resource-based policy document in JSON format that will be attached to the table. When you attach a resource-based policy while creating a table, the policy application is strongly consistent. The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see Resource-based policy considerations. You need to specify the CreateTable and PutResourcePolicy IAM actions for authorizing a user to create a table with a resource-based policy.
    - name: OnDemandThroughput
      description: |
        Sets the maximum number of read and write units for the specified table in on-demand capacity mode. If you use this parameter, you must specify MaxReadRequestUnits, MaxWriteRequestUnits, or both.
      value:
        MaxReadRequestUnits: {{ MaxReadRequestUnits }}
        MaxWriteRequestUnits: {{ MaxWriteRequestUnits }}
    - name: GlobalTableSourceArn
      value: "{{ GlobalTableSourceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the source table used for the creation of a multi-account global table.
    - name: GlobalTableSettingsReplicationMode
      value: "{{ GlobalTableSettingsReplicationMode }}"
      description: |
        Controls the settings synchronization mode for the global table. For multi-account global tables, this parameter is required and the only supported value is ENABLED. For same-account global tables, this parameter is set to ENABLED_WITH_OVERRIDES.
      valid_values: ['ENABLED', 'DISABLED', 'ENABLED_WITH_OVERRIDES']
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

Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table. You can only perform one of the following operations at once: Modify the provisioned throughput settings of the table. Remove a global secondary index from the table. Create a new global secondary index on the table. After the index begins backfilling, you can use UpdateTable to perform other operations. UpdateTable is an asynchronous operation; while it's executing, the table status changes from ACTIVE to UPDATING. While it's UPDATING, you can't issue another UpdateTable request. When the table returns to the ACTIVE state, the UpdateTable operation is complete.

```sql
UPDATE aws.dynamodb.tables
SET 
AttributeDefinitions = '{{ AttributeDefinitions }}',
TableName = '{{ TableName }}',
BillingMode = '{{ BillingMode }}',
ProvisionedThroughput = '{{ ProvisionedThroughput }}',
GlobalSecondaryIndexUpdates = '{{ GlobalSecondaryIndexUpdates }}',
StreamSpecification = '{{ StreamSpecification }}',
SSESpecification = '{{ SSESpecification }}',
ReplicaUpdates = '{{ ReplicaUpdates }}',
TableClass = '{{ TableClass }}',
DeletionProtectionEnabled = {{ DeletionProtectionEnabled }},
MultiRegionConsistency = '{{ MultiRegionConsistency }}',
GlobalTableWitnessUpdates = '{{ GlobalTableWitnessUpdates }}',
OnDemandThroughput = '{{ OnDemandThroughput }}',
WarmThroughput = '{{ WarmThroughput }}',
GlobalTableSettingsReplicationMode = '{{ GlobalTableSettingsReplicationMode }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
RETURNING
table_description;
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

The DeleteTable operation deletes a table and all of its items. After a DeleteTable request, the specified table is in the DELETING state until DynamoDB completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is in CREATING or UPDATING states, then DynamoDB returns a ResourceInUseException. If the specified table does not exist, DynamoDB returns a ResourceNotFoundException. If table is already in the DELETING state, no error is returned. DynamoDB might continue to accept data read and write operations, such as GetItem and PutItem, on a table in the DELETING state until the table deletion is complete. For the full list of table states, see TableStatus. When you delete a table, any indexes on that table are also deleted. If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the DISABLED state, and the stream is automatically deleted after 24 hours. Use the DescribeTable action to check the status of the table.

```sql
DELETE FROM aws.dynamodb.tables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_kinesis_streaming_destination"
    values={[
        { label: 'disable_kinesis_streaming_destination', value: 'disable_kinesis_streaming_destination' },
        { label: 'enable_kinesis_streaming_destination', value: 'enable_kinesis_streaming_destination' },
        { label: 'export_table_to_point_in_time', value: 'export_table_to_point_in_time' },
        { label: 'query', value: 'query' },
        { label: 'restore_table_from_backup', value: 'restore_table_from_backup' },
        { label: 'restore_table_to_point_in_time', value: 'restore_table_to_point_in_time' },
        { label: 'scan', value: 'scan' }
    ]}
>
<TabItem value="disable_kinesis_streaming_destination">

Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.

```sql
EXEC aws.dynamodb.tables.disable_kinesis_streaming_destination 
@region='{{ region }}' --required 
@@json=
'{
"TableName": "{{ TableName }}", 
"StreamArn": "{{ StreamArn }}", 
"EnableKinesisStreamingConfiguration": "{{ EnableKinesisStreamingConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="enable_kinesis_streaming_destination">

Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.

```sql
EXEC aws.dynamodb.tables.enable_kinesis_streaming_destination 
@region='{{ region }}' --required 
@@json=
'{
"TableName": "{{ TableName }}", 
"StreamArn": "{{ StreamArn }}", 
"EnableKinesisStreamingConfiguration": "{{ EnableKinesisStreamingConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="export_table_to_point_in_time">

Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.

```sql
EXEC aws.dynamodb.tables.export_table_to_point_in_time 
@region='{{ region }}' --required 
@@json=
'{
"TableArn": "{{ TableArn }}", 
"ExportTime": "{{ ExportTime }}", 
"ClientToken": "{{ ClientToken }}", 
"S3Bucket": "{{ S3Bucket }}", 
"S3BucketOwner": "{{ S3BucketOwner }}", 
"S3Prefix": "{{ S3Prefix }}", 
"S3SseAlgorithm": "{{ S3SseAlgorithm }}", 
"S3SseKmsKeyId": "{{ S3SseKmsKeyId }}", 
"ExportFormat": "{{ ExportFormat }}", 
"ExportType": "{{ ExportType }}", 
"IncrementalExportSpecification": "{{ IncrementalExportSpecification }}"
}'
;
```
</TabItem>
<TabItem value="query">

You must provide the name of the partition key attribute and a single value for that attribute. Query returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results. Use the KeyConditionExpression parameter to provide a specific value for the partition key. The Query operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the Query operation by specifying a sort key value and a comparison operator in KeyConditionExpression. To further refine the Query results, you can optionally provide a FilterExpression. A FilterExpression determines which items within the results should be returned to you. All of the other results are discarded. A Query operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a FilterExpression. Query results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the ScanIndexForward parameter to false. A single Query operation will read up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you will need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide. FilterExpression is applied after a Query finishes, but before the results are returned. A FilterExpression cannot contain partition key or sort key attributes. You need to specify those attributes in the KeyConditionExpression. A Query operation can return an empty result set and a LastEvaluatedKey if all the items read for the page of results are filtered out. You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the ConsistentRead parameter to true and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify ConsistentRead when querying a global secondary index.

```sql
EXEC aws.dynamodb.tables.query 
@region='{{ region }}' --required 
@@json=
'{
"TableName": "{{ TableName }}", 
"IndexName": "{{ IndexName }}", 
"Select": "{{ Select }}", 
"AttributesToGet": "{{ AttributesToGet }}", 
"Limit": {{ Limit }}, 
"ConsistentRead": {{ ConsistentRead }}, 
"KeyConditions": "{{ KeyConditions }}", 
"QueryFilter": "{{ QueryFilter }}", 
"ConditionalOperator": "{{ ConditionalOperator }}", 
"ScanIndexForward": {{ ScanIndexForward }}, 
"ExclusiveStartKey": "{{ ExclusiveStartKey }}", 
"ReturnConsumedCapacity": "{{ ReturnConsumedCapacity }}", 
"ProjectionExpression": "{{ ProjectionExpression }}", 
"FilterExpression": "{{ FilterExpression }}", 
"KeyConditionExpression": "{{ KeyConditionExpression }}", 
"ExpressionAttributeNames": "{{ ExpressionAttributeNames }}", 
"ExpressionAttributeValues": "{{ ExpressionAttributeValues }}"
}'
;
```
</TabItem>
<TabItem value="restore_table_from_backup">

Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. You can call RestoreTableFromBackup at a maximum rate of 10 times per second. You must manually set up the following on the restored table: Auto scaling policies IAM policies Amazon CloudWatch metrics and alarms Tags Stream settings Time to Live (TTL) settings

```sql
EXEC aws.dynamodb.tables.restore_table_from_backup 
@region='{{ region }}' --required 
@@json=
'{
"TargetTableName": "{{ TargetTableName }}", 
"BackupArn": "{{ BackupArn }}", 
"BillingModeOverride": "{{ BillingModeOverride }}", 
"GlobalSecondaryIndexOverride": "{{ GlobalSecondaryIndexOverride }}", 
"LocalSecondaryIndexOverride": "{{ LocalSecondaryIndexOverride }}", 
"ProvisionedThroughputOverride": "{{ ProvisionedThroughputOverride }}", 
"OnDemandThroughputOverride": "{{ OnDemandThroughputOverride }}", 
"SSESpecificationOverride": "{{ SSESpecificationOverride }}"
}'
;
```
</TabItem>
<TabItem value="restore_table_to_point_in_time">

Restores the specified table to the specified point in time within EarliestRestorableDateTime and LatestRestorableDateTime. You can restore your table to any point in time in the last 35 days. You can set the recovery period to any value between 1 and 35 days. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. Along with data, the following are also included on the new restored table using point in time recovery: Global secondary indexes (GSIs) Local secondary indexes (LSIs) Provisioned read and write capacity Encryption settings All these settings come from the current settings of the source table at the time of restore. You must manually set up the following on the restored table: Auto scaling policies IAM policies Amazon CloudWatch metrics and alarms Tags Stream settings Time to Live (TTL) settings Point in time recovery settings

```sql
EXEC aws.dynamodb.tables.restore_table_to_point_in_time 
@region='{{ region }}' --required 
@@json=
'{
"SourceTableArn": "{{ SourceTableArn }}", 
"SourceTableName": "{{ SourceTableName }}", 
"TargetTableName": "{{ TargetTableName }}", 
"UseLatestRestorableTime": {{ UseLatestRestorableTime }}, 
"RestoreDateTime": "{{ RestoreDateTime }}", 
"BillingModeOverride": "{{ BillingModeOverride }}", 
"GlobalSecondaryIndexOverride": "{{ GlobalSecondaryIndexOverride }}", 
"LocalSecondaryIndexOverride": "{{ LocalSecondaryIndexOverride }}", 
"ProvisionedThroughputOverride": "{{ ProvisionedThroughputOverride }}", 
"OnDemandThroughputOverride": "{{ OnDemandThroughputOverride }}", 
"SSESpecificationOverride": "{{ SSESpecificationOverride }}"
}'
;
```
</TabItem>
<TabItem value="scan">

The Scan operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a FilterExpression operation. If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The LastEvaluatedKey value is also returned and the requestor can use the LastEvaluatedKey to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a FilterExpression, a scan result can result in no items meeting the criteria and the Count will result in zero. If you did not use a FilterExpression in the scan request, then Count is the same as ScannedCount. Count and ScannedCount only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table. A single Scan operation first reads up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a FilterExpression is provided. If LastEvaluatedKey is present in the response, pagination is required to complete the full table scan. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide. Scan operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel Scan operation by providing the Segment and TotalSegments parameters. For more information, see Parallel Scan in the Amazon DynamoDB Developer Guide. By default, a Scan uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent Scan may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the ConsistentRead parameter to true. Strong consistency only relates to the consistency of the read at the item level. DynamoDB does not provide snapshot isolation for a scan operation when the ConsistentRead parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested.

```sql
EXEC aws.dynamodb.tables.scan 
@region='{{ region }}' --required 
@@json=
'{
"TableName": "{{ TableName }}", 
"IndexName": "{{ IndexName }}", 
"AttributesToGet": "{{ AttributesToGet }}", 
"Limit": {{ Limit }}, 
"Select": "{{ Select }}", 
"ScanFilter": "{{ ScanFilter }}", 
"ConditionalOperator": "{{ ConditionalOperator }}", 
"ExclusiveStartKey": "{{ ExclusiveStartKey }}", 
"ReturnConsumedCapacity": "{{ ReturnConsumedCapacity }}", 
"TotalSegments": {{ TotalSegments }}, 
"Segment": {{ Segment }}, 
"ProjectionExpression": "{{ ProjectionExpression }}", 
"FilterExpression": "{{ FilterExpression }}", 
"ExpressionAttributeNames": "{{ ExpressionAttributeNames }}", 
"ExpressionAttributeValues": "{{ ExpressionAttributeValues }}", 
"ConsistentRead": {{ ConsistentRead }}
}'
;
```
</TabItem>
</Tabs>
