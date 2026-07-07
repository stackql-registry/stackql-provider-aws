--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - kinesis
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stream"
    values={[
        { label: 'describe_stream', value: 'describe_stream' }
    ]}
>
<TabItem value="describe_stream">

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
    <td><CopyableCode code="EncryptionType" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption type used on the stream. This parameter can be one of the following values: NONE: Do not encrypt the records in the stream. KMS: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key. (NONE, KMS)</td>
</tr>
<tr>
    <td><CopyableCode code="EnhancedMonitoring" /></td>
    <td><code>array</code></td>
    <td>Represents the current enhanced monitoring settings of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="HasMoreShards" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, more shards in the stream are available to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis. Key ARN example: arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012 Alias ARN example: arn:aws:kms:us-east-1:123456789012:alias/MyAliasName Globally unique key ID example: 12345678-1234-1234-1234-123456789012 Alias name example: alias/MyAliasName Master key owned by Kinesis Data Streams: alias/aws/kinesis</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionPeriodHours" /></td>
    <td><code>integer</code></td>
    <td>The current retention period, in hours. Minimum value of 24. Maximum value of 168.</td>
</tr>
<tr>
    <td><CopyableCode code="Shards" /></td>
    <td><code>array</code></td>
    <td>The shards that comprise the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the stream being described. (pattern: &lt;code&gt;arn:aws.*:kinesis:.*:\d&#123;12&#125;:stream/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamCreationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The approximate time that the stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamModeDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an on-demand capacity mode and a provisioned capacity mode for your data streams.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamName" /></td>
    <td><code>string</code></td>
    <td>The name of the stream being described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream being described. The stream status is one of the following states: CREATING - The stream is being created. Kinesis Data Streams immediately returns and sets StreamStatus to CREATING. DELETING - The stream is being deleted. The specified stream is in the DELETING state until Kinesis Data Streams completes the deletion. ACTIVE - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an ACTIVE stream. UPDATING - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the UPDATING state. (CREATING, DELETING, ACTIVE, UPDATING)</td>
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
    <td><a href="#describe_stream"><CopyableCode code="describe_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified Kinesis data stream. This API has been revised. It's highly recommended that you use the DescribeStreamSummary API to get a summarized description of the specified Kinesis data stream and the ListShards API to list the shards in a specified data stream and obtain information about each shard. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream. You can limit the number of shards returned by each call. For more information, see Retrieving Shards from a Stream in the Amazon Kinesis Data Streams Developer Guide. There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard. This operation has a limit of 10 transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#create_stream"><CopyableCode code="create_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamName"><code>StreamName</code></a></td>
    <td></td>
    <td>Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or producers. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream. You can create your data stream using either on-demand or provisioned capacity mode. Data streams with an on-demand mode require no capacity planning and automatically scale to handle gigabytes of write and read throughput per minute. With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput. If you'd still like to proactively scale your on-demand data stream’s capacity, you can unlock the warm throughput feature for on-demand data streams by enabling MinimumThroughputBillingCommitment for your account. Once your account has MinimumThroughputBillingCommitment enabled, you can specify the warm throughput in MiB per second that your stream can support in writes. For the data streams with a provisioned mode, you must specify the number of shards for the data stream. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MiB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second. If the amount of data input increases or decreases, you can add or remove shards. The stream name identifies the stream. The name is scoped to the Amazon Web Services account used by the application. It is also scoped by Amazon Web Services Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name. CreateStream is an asynchronous operation. Upon receiving a CreateStream request, Kinesis Data Streams immediately returns and sets the stream status to CREATING. After the stream is created, Kinesis Data Streams sets the stream status to ACTIVE. You should perform read and write operations only on an ACTIVE stream. You receive a LimitExceededException when making a CreateStream request when you try to do one of the following: Have more than five streams in the CREATING state at any point in time. Create more shards than are authorized for your account. For the default shard or on-demand throughput limits for an Amazon Web Services account, see Amazon Kinesis Data Streams Limits in the Amazon Kinesis Data Streams Developer Guide. To increase this limit, contact Amazon Web Services Support. You can use DescribeStreamSummary to check the stream status, which is returned in StreamStatus. CreateStream has a limit of five transactions per second per account. You can add tags to the stream when making a CreateStream request by setting the Tags parameter. If you pass the Tags parameter, in addition to having the kinesis:CreateStream permission, you must also have the kinesis:AddTagsToStream permission for the stream that will be created. The kinesis:TagResource permission won’t work to tag streams on creation. Tags will take effect from the CREATING status of the stream, but you can't make any updates to the tags until the stream is in ACTIVE state.</td>
</tr>
<tr>
    <td><a href="#update_stream_mode"><CopyableCode code="update_stream_mode" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamARN"><code>StreamARN</code></a>, <a href="#parameter-StreamModeDetails"><code>StreamModeDetails</code></a></td>
    <td></td>
    <td>Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an on-demand capacity mode and a provisioned capacity mode for your data stream. If you'd still like to proactively scale your on-demand data stream’s capacity, you can unlock the warm throughput feature for on-demand data streams by enabling MinimumThroughputBillingCommitment for your account. Once your account has MinimumThroughputBillingCommitment enabled, you can specify the warm throughput in MiB per second that your stream can support in writes.</td>
</tr>
<tr>
    <td><a href="#update_stream_warm_throughput"><CopyableCode code="update_stream_warm_throughput" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WarmThroughputMiBps"><code>WarmThroughputMiBps</code></a></td>
    <td></td>
    <td>Updates the warm throughput configuration for the specified Amazon Kinesis Data Streams on-demand data stream. This operation allows you to proactively scale your on-demand data stream to a specified throughput level, enabling better performance for sudden traffic spikes. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Updating the warm throughput is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is UPDATING. This operation is only supported for data streams with the on-demand capacity mode in accounts that have MinimumThroughputBillingCommitment enabled. Provisioned capacity mode streams do not support warm throughput configuration. This operation has the following default limits. By default, you cannot do the following: Scale to more than 10 GiBps for an on-demand stream. This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the LimitExceededException. For the default limits for an Amazon Web Services account, see Streams Limits in the Amazon Kinesis Data Streams Developer Guide. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the limits form.</td>
</tr>
<tr>
    <td><a href="#delete_stream"><CopyableCode code="delete_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Kinesis data stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it receives the exception ResourceNotFoundException. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. If the stream is in the ACTIVE state, you can delete it. After a DeleteStream request, the specified stream is in the DELETING state until Kinesis Data Streams completes the deletion. Note: Kinesis Data Streams might continue to accept data read and write operations, such as PutRecord, PutRecords, and GetRecords, on a stream in the DELETING state until the stream deletion is complete. When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream. You can use the DescribeStreamSummary operation to check the state of the stream, which is returned in StreamStatus. DeleteStream has a limit of five transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your Kinesis data streams. The number of streams may be too large to return from a single call to ListStreams. You can limit the number of returned streams using the Limit parameter. If you do not specify a value for the Limit parameter, Kinesis Data Streams uses the default limit, which is currently 100. You can detect if there are more streams available to list by using the HasMoreStreams flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the ListStreams request in the ExclusiveStartStreamName parameter in a subsequent request to ListStreams. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list. ListStreams has a limit of five transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#start_stream_encryption"><CopyableCode code="start_stream_encryption" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EncryptionType"><code>EncryptionType</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Enables or updates server-side encryption using an Amazon Web Services KMS key for a specified stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE, encryption begins for records written to the stream. API Limits: You can successfully apply a new Amazon Web Services KMS key for server-side encryption 25 times in a rolling 24-hour period. Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from PutRecord or PutRecords.</td>
</tr>
<tr>
    <td><a href="#stop_stream_encryption"><CopyableCode code="stop_stream_encryption" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EncryptionType"><code>EncryptionType</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Disables server-side encryption for a specified stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE, records written to the stream are no longer encrypted by Kinesis Data Streams. API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period. Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from PutRecord or PutRecords.</td>
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
    defaultValue="describe_stream"
    values={[
        { label: 'describe_stream', value: 'describe_stream' }
    ]}
>
<TabItem value="describe_stream">

Describes the specified Kinesis data stream. This API has been revised. It's highly recommended that you use the DescribeStreamSummary API to get a summarized description of the specified Kinesis data stream and the ListShards API to list the shards in a specified data stream and obtain information about each shard. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream. You can limit the number of shards returned by each call. For more information, see Retrieving Shards from a Stream in the Amazon Kinesis Data Streams Developer Guide. There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard. This operation has a limit of 10 transactions per second per account.

```sql
SELECT
EncryptionType,
EnhancedMonitoring,
HasMoreShards,
KeyId,
RetentionPeriodHours,
Shards,
StreamARN,
StreamCreationTimestamp,
StreamModeDetails,
StreamName,
StreamStatus
FROM aws.kinesis.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream"
    values={[
        { label: 'create_stream', value: 'create_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream">

Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or producers. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream. You can create your data stream using either on-demand or provisioned capacity mode. Data streams with an on-demand mode require no capacity planning and automatically scale to handle gigabytes of write and read throughput per minute. With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput. If you'd still like to proactively scale your on-demand data stream’s capacity, you can unlock the warm throughput feature for on-demand data streams by enabling MinimumThroughputBillingCommitment for your account. Once your account has MinimumThroughputBillingCommitment enabled, you can specify the warm throughput in MiB per second that your stream can support in writes. For the data streams with a provisioned mode, you must specify the number of shards for the data stream. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MiB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second. If the amount of data input increases or decreases, you can add or remove shards. The stream name identifies the stream. The name is scoped to the Amazon Web Services account used by the application. It is also scoped by Amazon Web Services Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name. CreateStream is an asynchronous operation. Upon receiving a CreateStream request, Kinesis Data Streams immediately returns and sets the stream status to CREATING. After the stream is created, Kinesis Data Streams sets the stream status to ACTIVE. You should perform read and write operations only on an ACTIVE stream. You receive a LimitExceededException when making a CreateStream request when you try to do one of the following: Have more than five streams in the CREATING state at any point in time. Create more shards than are authorized for your account. For the default shard or on-demand throughput limits for an Amazon Web Services account, see Amazon Kinesis Data Streams Limits in the Amazon Kinesis Data Streams Developer Guide. To increase this limit, contact Amazon Web Services Support. You can use DescribeStreamSummary to check the stream status, which is returned in StreamStatus. CreateStream has a limit of five transactions per second per account. You can add tags to the stream when making a CreateStream request by setting the Tags parameter. If you pass the Tags parameter, in addition to having the kinesis:CreateStream permission, you must also have the kinesis:AddTagsToStream permission for the stream that will be created. The kinesis:TagResource permission won’t work to tag streams on creation. Tags will take effect from the CREATING status of the stream, but you can't make any updates to the tags until the stream is in ACTIVE state.

```sql
INSERT INTO aws.kinesis.streams (
StreamName,
ShardCount,
StreamModeDetails,
Tags,
WarmThroughputMiBps,
MaxRecordSizeInKiB,
region
)
SELECT 
'{{ StreamName }}' /* required */,
{{ ShardCount }},
'{{ StreamModeDetails }}',
'{{ Tags }}',
{{ WarmThroughputMiBps }},
{{ MaxRecordSizeInKiB }},
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: streams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the streams resource.
    - name: StreamName
      value: "{{ StreamName }}"
      description: |
        A name to identify the stream. The stream name is scoped to the Amazon Web Services account used by the application that creates the stream. It is also scoped by Amazon Web Services Region. That is, two streams in two different Amazon Web Services accounts can have the same name. Two streams in the same Amazon Web Services account but in two different Regions can also have the same name.
    - name: ShardCount
      value: {{ ShardCount }}
      description: |
        The number of shards that the stream will use. The throughput of the stream is a function of the number of shards; more shards are required for greater provisioned throughput.
    - name: StreamModeDetails
      description: |
        Indicates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an on-demand capacity mode and a provisioned capacity mode for your data streams.
      value:
        StreamMode: "{{ StreamMode }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of up to 50 key-value pairs to use to create the tags. A tag consists of a required key and an optional value.
    - name: WarmThroughputMiBps
      value: {{ WarmThroughputMiBps }}
      description: |
        The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations.
    - name: MaxRecordSizeInKiB
      value: {{ MaxRecordSizeInKiB }}
      description: |
        The maximum record size of a single record in kibibyte (KiB) that you can write to, and read from a stream.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stream_mode"
    values={[
        { label: 'update_stream_mode', value: 'update_stream_mode' },
        { label: 'update_stream_warm_throughput', value: 'update_stream_warm_throughput' }
    ]}
>
<TabItem value="update_stream_mode">

Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an on-demand capacity mode and a provisioned capacity mode for your data stream. If you'd still like to proactively scale your on-demand data stream’s capacity, you can unlock the warm throughput feature for on-demand data streams by enabling MinimumThroughputBillingCommitment for your account. Once your account has MinimumThroughputBillingCommitment enabled, you can specify the warm throughput in MiB per second that your stream can support in writes.

```sql
UPDATE aws.kinesis.streams
SET 
StreamARN = '{{ StreamARN }}',
StreamId = '{{ StreamId }}',
StreamModeDetails = '{{ StreamModeDetails }}',
WarmThroughputMiBps = {{ WarmThroughputMiBps }}
WHERE 
region = '{{ region }}' --required
AND StreamARN = '{{ StreamARN }}' --required
AND StreamModeDetails = '{{ StreamModeDetails }}' --required;
```
</TabItem>
<TabItem value="update_stream_warm_throughput">

Updates the warm throughput configuration for the specified Amazon Kinesis Data Streams on-demand data stream. This operation allows you to proactively scale your on-demand data stream to a specified throughput level, enabling better performance for sudden traffic spikes. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Updating the warm throughput is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is UPDATING. This operation is only supported for data streams with the on-demand capacity mode in accounts that have MinimumThroughputBillingCommitment enabled. Provisioned capacity mode streams do not support warm throughput configuration. This operation has the following default limits. By default, you cannot do the following: Scale to more than 10 GiBps for an on-demand stream. This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the LimitExceededException. For the default limits for an Amazon Web Services account, see Streams Limits in the Amazon Kinesis Data Streams Developer Guide. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the limits form.

```sql
UPDATE aws.kinesis.streams
SET 
StreamARN = '{{ StreamARN }}',
StreamName = '{{ StreamName }}',
StreamId = '{{ StreamId }}',
WarmThroughputMiBps = {{ WarmThroughputMiBps }}
WHERE 
region = '{{ region }}' --required
AND WarmThroughputMiBps = '{{ WarmThroughputMiBps }}' --required
RETURNING
StreamARN,
StreamName,
WarmThroughput;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stream"
    values={[
        { label: 'delete_stream', value: 'delete_stream' }
    ]}
>
<TabItem value="delete_stream">

Deletes a Kinesis data stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it receives the exception ResourceNotFoundException. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. If the stream is in the ACTIVE state, you can delete it. After a DeleteStream request, the specified stream is in the DELETING state until Kinesis Data Streams completes the deletion. Note: Kinesis Data Streams might continue to accept data read and write operations, such as PutRecord, PutRecords, and GetRecords, on a stream in the DELETING state until the stream deletion is complete. When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream. You can use the DescribeStreamSummary operation to check the state of the stream, which is returned in StreamStatus. DeleteStream has a limit of five transactions per second per account.

```sql
DELETE FROM aws.kinesis.streams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_streams"
    values={[
        { label: 'list_streams', value: 'list_streams' },
        { label: 'start_stream_encryption', value: 'start_stream_encryption' },
        { label: 'stop_stream_encryption', value: 'stop_stream_encryption' }
    ]}
>
<TabItem value="list_streams">

Lists your Kinesis data streams. The number of streams may be too large to return from a single call to ListStreams. You can limit the number of returned streams using the Limit parameter. If you do not specify a value for the Limit parameter, Kinesis Data Streams uses the default limit, which is currently 100. You can detect if there are more streams available to list by using the HasMoreStreams flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the ListStreams request in the ExclusiveStartStreamName parameter in a subsequent request to ListStreams. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list. ListStreams has a limit of five transactions per second per account.

```sql
EXEC aws.kinesis.streams.list_streams 
@region='{{ region }}' --required 
@@json=
'{
"Limit": {{ Limit }}, 
"ExclusiveStartStreamName": "{{ ExclusiveStartStreamName }}", 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="start_stream_encryption">

Enables or updates server-side encryption using an Amazon Web Services KMS key for a specified stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE, encryption begins for records written to the stream. API Limits: You can successfully apply a new Amazon Web Services KMS key for server-side encryption 25 times in a rolling 24-hour period. Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from PutRecord or PutRecords.

```sql
EXEC aws.kinesis.streams.start_stream_encryption 
@region='{{ region }}' --required 
@@json=
'{
"StreamName": "{{ StreamName }}", 
"EncryptionType": "{{ EncryptionType }}", 
"KeyId": "{{ KeyId }}", 
"StreamARN": "{{ StreamARN }}", 
"StreamId": "{{ StreamId }}"
}'
;
```
</TabItem>
<TabItem value="stop_stream_encryption">

Disables server-side encryption for a specified stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is UPDATING. Once the status of the stream is ACTIVE, records written to the stream are no longer encrypted by Kinesis Data Streams. API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period. Note: It can take up to 5 seconds after the stream is in an ACTIVE status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from PutRecord or PutRecords.

```sql
EXEC aws.kinesis.streams.stop_stream_encryption 
@region='{{ region }}' --required 
@@json=
'{
"StreamName": "{{ StreamName }}", 
"EncryptionType": "{{ EncryptionType }}", 
"KeyId": "{{ KeyId }}", 
"StreamARN": "{{ StreamARN }}", 
"StreamId": "{{ StreamId }}"
}'
;
```
</TabItem>
</Tabs>
