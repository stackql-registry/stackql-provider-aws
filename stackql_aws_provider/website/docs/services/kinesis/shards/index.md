--- 
title: shards
hide_title: false
hide_table_of_contents: false
keywords:
  - shards
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

Creates, updates, deletes, gets or lists a <code>shards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.shards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_shards"
    values={[
        { label: 'list_shards', value: 'list_shards' }
    ]}
>
<TabItem value="list_shards">

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
    <td><CopyableCode code="adjacent_parent_shard_id" /></td>
    <td><code>string</code></td>
    <td>The shard ID of the shard adjacent to the shard's parent. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hash_key_range" /></td>
    <td><code>object</code></td>
    <td>The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_shard_id" /></td>
    <td><code>string</code></td>
    <td>The shard ID of the shard's parent. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sequence_number_range" /></td>
    <td><code>object</code></td>
    <td>The range of possible sequence numbers for the shard.</td>
</tr>
<tr>
    <td><CopyableCode code="shard_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the shard within the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_shards"><CopyableCode code="list_shards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the shards in a stream and provides information about each shard. This operation has a limit of 1000 transactions per second per data stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. This action does not list expired shards. For information about expired shards, see Data Routing, Data Persistence, and Shard State after a Reshard. This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see Controlling Access to Amazon Kinesis Data Streams Resources Using IAM.</td>
</tr>
<tr>
    <td><a href="#update_shard_count"><CopyableCode code="update_shard_count" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetShardCount"><code>TargetShardCount</code></a>, <a href="#parameter-ScalingType"><code>ScalingType</code></a></td>
    <td></td>
    <td>Updates the shard count of the specified stream to the specified number of shards. This API is only supported for the data streams with the provisioned capacity mode. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Updating the shard count is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is UPDATING. To update the shard count, Kinesis Data Streams performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. These short-lived shards count towards your total shard limit for your account in the Region. When using this operation, we recommend that you specify a target shard count that is a multiple of 25% (25%, 50%, 75%, 100%). You can specify any target value within your shard limit. However, if you specify a target that isn't a multiple of 25%, the scaling action might take longer to complete. This operation has the following default limits. By default, you cannot do the following: Scale more than ten times per rolling 24-hour period per stream Scale up to more than double your current shard count for a stream Scale down below half your current shard count for a stream Scale up to more than 10000 shards in a stream Scale a stream with more than 10000 shards down unless the result is less than 10000 shards Scale up to more than the shard limit for your account Make over 10 TPS. TPS over 10 will trigger the LimitExceededException For the default limits for an Amazon Web Services account, see Streams Limits in the Amazon Kinesis Data Streams Developer Guide. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the limits form.</td>
</tr>
<tr>
    <td><a href="#merge_shards"><CopyableCode code="merge_shards" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ShardToMerge"><code>ShardToMerge</code></a>, <a href="#parameter-AdjacentShardToMerge"><code>AdjacentShardToMerge</code></a></td>
    <td></td>
    <td>Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. This API is only supported for the data streams with the provisioned capacity mode. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. MergeShards is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see Merge Two Shards in the Amazon Kinesis Data Streams Developer Guide. If the stream is in the ACTIVE state, you can call MergeShards. If a stream is in the CREATING, UPDATING, or DELETING state, MergeShards returns a ResourceInUseException. If the specified stream does not exist, MergeShards returns a ResourceNotFoundException. You can use DescribeStreamSummary to check the state of the stream, which is returned in StreamStatus. MergeShards is an asynchronous operation. Upon receiving a MergeShards request, Amazon Kinesis Data Streams immediately returns a response and sets the StreamStatus to UPDATING. After the operation is completed, Kinesis Data Streams sets the StreamStatus to ACTIVE. Read and write operations continue to work while the stream is in the UPDATING state. You use DescribeStreamSummary and the ListShards APIs to determine the shard IDs that are specified in the MergeShards request. If you try to operate on too many streams in parallel using CreateStream, DeleteStream, MergeShards, or SplitShard, you receive a LimitExceededException. MergeShards has a limit of five transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#subscribe_to_shard"><CopyableCode code="subscribe_to_shard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConsumerARN"><code>ConsumerARN</code></a>, <a href="#parameter-ShardId"><code>ShardId</code></a>, <a href="#parameter-StartingPosition"><code>StartingPosition</code></a></td>
    <td></td>
    <td>This operation establishes an HTTP/2 connection between the consumer you specify in the ConsumerARN parameter and the shard you specify in the ShardId parameter. After the connection is successfully established, Kinesis Data Streams pushes records from the shard to the consumer over this connection. Before you call this operation, call RegisterStreamConsumer to register the consumer with Kinesis Data Streams. When the SubscribeToShard call succeeds, your consumer starts receiving events of type SubscribeToShardEvent over the HTTP/2 connection for up to 5 minutes, after which time you need to call SubscribeToShard again to renew the subscription if you want to continue to receive records. You can make one call to SubscribeToShard per second per registered consumer per shard. For example, if you have a 4000 shard stream and two registered stream consumers, you can make one SubscribeToShard request per second for each combination of shard and registered consumer, allowing you to subscribe both consumers to all 4000 shards in one second. If you call SubscribeToShard again with the same ConsumerARN and ShardId within 5 seconds of a successful call, you'll get a ResourceInUseException. If you call SubscribeToShard 5 seconds or more after a successful call, the second call takes over the subscription and the previous connection expires or fails with a ResourceInUseException. For an example of how to use this operation, see Enhanced Fan-Out Using the Kinesis Data Streams API.</td>
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
    defaultValue="list_shards"
    values={[
        { label: 'list_shards', value: 'list_shards' }
    ]}
>
<TabItem value="list_shards">

Lists the shards in a stream and provides information about each shard. This operation has a limit of 1000 transactions per second per data stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. This action does not list expired shards. For information about expired shards, see Data Routing, Data Persistence, and Shard State after a Reshard. This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see Controlling Access to Amazon Kinesis Data Streams Resources Using IAM.

```sql
SELECT
adjacent_parent_shard_id,
hash_key_range,
parent_shard_id,
sequence_number_range,
shard_id
FROM aws.kinesis.shards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_shard_count"
    values={[
        { label: 'update_shard_count', value: 'update_shard_count' }
    ]}
>
<TabItem value="update_shard_count">

Updates the shard count of the specified stream to the specified number of shards. This API is only supported for the data streams with the provisioned capacity mode. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. Updating the shard count is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to UPDATING. After the update is complete, Kinesis Data Streams sets the status of the stream back to ACTIVE. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is UPDATING. To update the shard count, Kinesis Data Streams performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. These short-lived shards count towards your total shard limit for your account in the Region. When using this operation, we recommend that you specify a target shard count that is a multiple of 25% (25%, 50%, 75%, 100%). You can specify any target value within your shard limit. However, if you specify a target that isn't a multiple of 25%, the scaling action might take longer to complete. This operation has the following default limits. By default, you cannot do the following: Scale more than ten times per rolling 24-hour period per stream Scale up to more than double your current shard count for a stream Scale down below half your current shard count for a stream Scale up to more than 10000 shards in a stream Scale a stream with more than 10000 shards down unless the result is less than 10000 shards Scale up to more than the shard limit for your account Make over 10 TPS. TPS over 10 will trigger the LimitExceededException For the default limits for an Amazon Web Services account, see Streams Limits in the Amazon Kinesis Data Streams Developer Guide. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the limits form.

```sql
UPDATE aws.kinesis.shards
SET 
StreamName = '{{ StreamName }}',
TargetShardCount = {{ TargetShardCount }},
ScalingType = '{{ ScalingType }}',
StreamARN = '{{ StreamARN }}',
StreamId = '{{ StreamId }}'
WHERE 
region = '{{ region }}' --required
AND TargetShardCount = '{{ TargetShardCount }}' --required
AND ScalingType = '{{ ScalingType }}' --required
RETURNING
current_shard_count,
stream_arn,
stream_name,
target_shard_count;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="merge_shards"
    values={[
        { label: 'merge_shards', value: 'merge_shards' },
        { label: 'subscribe_to_shard', value: 'subscribe_to_shard' }
    ]}
>
<TabItem value="merge_shards">

Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. This API is only supported for the data streams with the provisioned capacity mode. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. MergeShards is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see Merge Two Shards in the Amazon Kinesis Data Streams Developer Guide. If the stream is in the ACTIVE state, you can call MergeShards. If a stream is in the CREATING, UPDATING, or DELETING state, MergeShards returns a ResourceInUseException. If the specified stream does not exist, MergeShards returns a ResourceNotFoundException. You can use DescribeStreamSummary to check the state of the stream, which is returned in StreamStatus. MergeShards is an asynchronous operation. Upon receiving a MergeShards request, Amazon Kinesis Data Streams immediately returns a response and sets the StreamStatus to UPDATING. After the operation is completed, Kinesis Data Streams sets the StreamStatus to ACTIVE. Read and write operations continue to work while the stream is in the UPDATING state. You use DescribeStreamSummary and the ListShards APIs to determine the shard IDs that are specified in the MergeShards request. If you try to operate on too many streams in parallel using CreateStream, DeleteStream, MergeShards, or SplitShard, you receive a LimitExceededException. MergeShards has a limit of five transactions per second per account.

```sql
EXEC aws.kinesis.shards.merge_shards 
@region='{{ region }}' --required 
@@json=
'{
"StreamName": "{{ StreamName }}", 
"ShardToMerge": "{{ ShardToMerge }}", 
"AdjacentShardToMerge": "{{ AdjacentShardToMerge }}", 
"StreamARN": "{{ StreamARN }}", 
"StreamId": "{{ StreamId }}"
}'
;
```
</TabItem>
<TabItem value="subscribe_to_shard">

This operation establishes an HTTP/2 connection between the consumer you specify in the ConsumerARN parameter and the shard you specify in the ShardId parameter. After the connection is successfully established, Kinesis Data Streams pushes records from the shard to the consumer over this connection. Before you call this operation, call RegisterStreamConsumer to register the consumer with Kinesis Data Streams. When the SubscribeToShard call succeeds, your consumer starts receiving events of type SubscribeToShardEvent over the HTTP/2 connection for up to 5 minutes, after which time you need to call SubscribeToShard again to renew the subscription if you want to continue to receive records. You can make one call to SubscribeToShard per second per registered consumer per shard. For example, if you have a 4000 shard stream and two registered stream consumers, you can make one SubscribeToShard request per second for each combination of shard and registered consumer, allowing you to subscribe both consumers to all 4000 shards in one second. If you call SubscribeToShard again with the same ConsumerARN and ShardId within 5 seconds of a successful call, you'll get a ResourceInUseException. If you call SubscribeToShard 5 seconds or more after a successful call, the second call takes over the subscription and the previous connection expires or fails with a ResourceInUseException. For an example of how to use this operation, see Enhanced Fan-Out Using the Kinesis Data Streams API.

```sql
EXEC aws.kinesis.shards.subscribe_to_shard 
@region='{{ region }}' --required 
@@json=
'{
"ConsumerARN": "{{ ConsumerARN }}", 
"StreamId": "{{ StreamId }}", 
"ShardId": "{{ ShardId }}", 
"StartingPosition": "{{ StartingPosition }}"
}'
;
```
</TabItem>
</Tabs>
