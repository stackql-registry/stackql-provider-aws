--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - dynamodbstreams
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodbstreams.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stream"
    values={[
        { label: 'describe_stream', value: 'describe_stream' },
        { label: 'list_streams', value: 'list_streams' }
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
    <td><CopyableCode code="CreationRequestDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the request to create this stream was issued.</td>
</tr>
<tr>
    <td><CopyableCode code="KeySchema" /></td>
    <td><code>array</code></td>
    <td>The key attribute(s) of the stream's DynamoDB table.</td>
</tr>
<tr>
    <td><CopyableCode code="LastEvaluatedShardId" /></td>
    <td><code>string</code></td>
    <td>The shard ID of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedShardId is empty, then the "last page" of results has been processed and there is currently no more data to be retrieved. If LastEvaluatedShardId is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedShardId is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="Shards" /></td>
    <td><code>array</code></td>
    <td>The shards that comprise the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamLabel" /></td>
    <td><code>string</code></td>
    <td>A timestamp, in ISO 8601 format, for this stream. Note that LatestStreamLabel is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique: the Amazon Web Services customer ID. the table name the StreamLabel</td>
</tr>
<tr>
    <td><CopyableCode code="StreamStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the current status of the stream: ENABLING - Streams is currently being enabled on the DynamoDB table. ENABLED - the stream is enabled. DISABLING - Streams is currently being disabled on the DynamoDB table. DISABLED - the stream is disabled. (ENABLING, ENABLED, DISABLING, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamViewType" /></td>
    <td><code>string</code></td>
    <td>Indicates the format of the records within this stream: KEYS_ONLY - only the key attributes of items that were modified in the DynamoDB table. NEW_IMAGE - entire items from the table, as they appeared after they were modified. OLD_IMAGE - entire items from the table, as they appeared before they were modified. NEW_AND_OLD_IMAGES - both the new and the old images of the items from the table. (NEW_IMAGE, OLD_IMAGE, NEW_AND_OLD_IMAGES, KEYS_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The DynamoDB table with which the stream is associated. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_streams">

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
    <td><CopyableCode code="LastEvaluatedStreamArn" /></td>
    <td><code>string</code></td>
    <td>The stream ARN of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedStreamArn is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedStreamArn is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedStreamArn is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="Streams" /></td>
    <td><code>array</code></td>
    <td>A list of stream descriptors associated with the current account and endpoint.</td>
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
    <td>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table. You can call DescribeStream at a maximum rate of 10 times per second. Each shard in the stream has a SequenceNumberRange associated with it. If the SequenceNumberRange has a StartingSequenceNumber but no EndingSequenceNumber, then the shard is still open (able to receive more stream records). If both StartingSequenceNumber and EndingSequenceNumber are present, then that shard is closed and can no longer receive more data.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of stream ARNs associated with the current account and endpoint. If the TableName parameter is present, then ListStreams will return only the streams ARNs for that table. You can call ListStreams at a maximum rate of 5 times per second.</td>
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
        { label: 'describe_stream', value: 'describe_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="describe_stream">

Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table. You can call DescribeStream at a maximum rate of 10 times per second. Each shard in the stream has a SequenceNumberRange associated with it. If the SequenceNumberRange has a StartingSequenceNumber but no EndingSequenceNumber, then the shard is still open (able to receive more stream records). If both StartingSequenceNumber and EndingSequenceNumber are present, then that shard is closed and can no longer receive more data.

```sql
SELECT
CreationRequestDateTime,
KeySchema,
LastEvaluatedShardId,
Shards,
StreamArn,
StreamLabel,
StreamStatus,
StreamViewType,
TableName
FROM aws.dynamodbstreams.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streams">

Returns an array of stream ARNs associated with the current account and endpoint. If the TableName parameter is present, then ListStreams will return only the streams ARNs for that table. You can call ListStreams at a maximum rate of 5 times per second.

```sql
SELECT
LastEvaluatedStreamArn,
Streams
FROM aws.dynamodbstreams.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
