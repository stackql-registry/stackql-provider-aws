--- 
title: shard_iterators
hide_title: false
hide_table_of_contents: false
keywords:
  - shard_iterators
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

Creates, updates, deletes, gets or lists a <code>shard_iterators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shard_iterators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.shard_iterators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_shard_iterator"
    values={[
        { label: 'get_shard_iterator', value: 'get_shard_iterator' }
    ]}
>
<TabItem value="get_shard_iterator">

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
    <td><CopyableCode code="ShardIterator" /></td>
    <td><code>string</code></td>
    <td>The position in the shard from which to start reading data records sequentially. A shard iterator specifies this position using the sequence number of a data record in a shard.</td>
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
    <td><a href="#get_shard_iterator"><CopyableCode code="get_shard_iterator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards. You must specify the shard iterator type. For example, you can set the ShardIteratorType parameter to read exactly from the position denoted by a specific sequence number by using the AT_SEQUENCE_NUMBER shard iterator type. Alternatively, the parameter can read right after the sequence number by using the AFTER_SEQUENCE_NUMBER shard iterator type, using sequence numbers returned by earlier calls to PutRecord, PutRecords, GetRecords, or DescribeStream. In the request, you can specify the shard iterator type AT_TIMESTAMP to read records from an arbitrary point in time, TRIM_HORIZON to cause ShardIterator to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or LATEST so that you always read the most recent data in the shard. When you read repeatedly from a stream, use a GetShardIterator request to get the first shard iterator for use in your first GetRecords request and for subsequent reads use the shard iterator returned by the GetRecords request in NextShardIterator. A new shard iterator is returned by every GetRecords request in NextShardIterator, which you use in the ShardIterator parameter of the next GetRecords request. If a GetShardIterator request is made too often, you receive a ProvisionedThroughputExceededException. For more information about throughput limits, see GetRecords, and Streams Limits in the Amazon Kinesis Data Streams Developer Guide. If the shard is closed, GetShardIterator returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using SplitShard or MergeShards. GetShardIterator has a limit of five transactions per second per account per open shard.</td>
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
    defaultValue="get_shard_iterator"
    values={[
        { label: 'get_shard_iterator', value: 'get_shard_iterator' }
    ]}
>
<TabItem value="get_shard_iterator">

Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards. You must specify the shard iterator type. For example, you can set the ShardIteratorType parameter to read exactly from the position denoted by a specific sequence number by using the AT_SEQUENCE_NUMBER shard iterator type. Alternatively, the parameter can read right after the sequence number by using the AFTER_SEQUENCE_NUMBER shard iterator type, using sequence numbers returned by earlier calls to PutRecord, PutRecords, GetRecords, or DescribeStream. In the request, you can specify the shard iterator type AT_TIMESTAMP to read records from an arbitrary point in time, TRIM_HORIZON to cause ShardIterator to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or LATEST so that you always read the most recent data in the shard. When you read repeatedly from a stream, use a GetShardIterator request to get the first shard iterator for use in your first GetRecords request and for subsequent reads use the shard iterator returned by the GetRecords request in NextShardIterator. A new shard iterator is returned by every GetRecords request in NextShardIterator, which you use in the ShardIterator parameter of the next GetRecords request. If a GetShardIterator request is made too often, you receive a ProvisionedThroughputExceededException. For more information about throughput limits, see GetRecords, and Streams Limits in the Amazon Kinesis Data Streams Developer Guide. If the shard is closed, GetShardIterator returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using SplitShard or MergeShards. GetShardIterator has a limit of five transactions per second per account per open shard.

```sql
SELECT
ShardIterator
FROM aws.kinesis.shard_iterators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
