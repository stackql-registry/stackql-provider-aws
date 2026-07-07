--- 
title: stream_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_summaries
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

Creates, updates, deletes, gets or lists a <code>stream_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.stream_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stream_summary"
    values={[
        { label: 'describe_stream_summary', value: 'describe_stream_summary' }
    ]}
>
<TabItem value="describe_stream_summary">

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
    <td><CopyableCode code="ConsumerCount" /></td>
    <td><code>integer</code></td>
    <td>The number of enhanced fan-out consumers registered with the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionType" /></td>
    <td><code>string</code></td>
    <td>The encryption type used. This value is one of the following: KMS NONE (NONE, KMS)</td>
</tr>
<tr>
    <td><CopyableCode code="EnhancedMonitoring" /></td>
    <td><code>array</code></td>
    <td>Represents the current enhanced monitoring settings of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis. Key ARN example: arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012 Alias ARN example: arn:aws:kms:us-east-1:123456789012:alias/MyAliasName Globally unique key ID example: 12345678-1234-1234-1234-123456789012 Alias name example: alias/MyAliasName Master key owned by Kinesis Data Streams: alias/aws/kinesis</td>
</tr>
<tr>
    <td><CopyableCode code="MaxRecordSizeInKiB" /></td>
    <td><code>integer</code></td>
    <td>The maximum record size of a single record in kibibyte (KiB) that you can write to, and read from a stream.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenShardCount" /></td>
    <td><code>integer</code></td>
    <td>The number of open shards in the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionPeriodHours" /></td>
    <td><code>integer</code></td>
    <td>The current retention period, in hours.</td>
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
    <td><CopyableCode code="StreamId" /></td>
    <td><code>string</code></td>
    <td>Not Implemented. Reserved for future use. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;20&#125;-&#91;a-z0-9&#93;&#123;3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamModeDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an on-demand ycapacity mode and a provisioned capacity mode for your data streams.</td>
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
<tr>
    <td><CopyableCode code="WarmThroughput" /></td>
    <td><code>object</code></td>
    <td>The warm throughput in MB/s for the stream. This represents the throughput capacity that will be immediately available for write operations.</td>
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
    <td><a href="#describe_stream_summary"><CopyableCode code="describe_stream_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a summarized description of the specified Kinesis data stream without the shard list. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. The information returned includes the stream name, Amazon Resource Name (ARN), status, record retention period, approximate creation time, monitoring, encryption details, and open shard count. DescribeStreamSummary has a limit of 20 transactions per second per account.</td>
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
    defaultValue="describe_stream_summary"
    values={[
        { label: 'describe_stream_summary', value: 'describe_stream_summary' }
    ]}
>
<TabItem value="describe_stream_summary">

Provides a summarized description of the specified Kinesis data stream without the shard list. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. The information returned includes the stream name, Amazon Resource Name (ARN), status, record retention period, approximate creation time, monitoring, encryption details, and open shard count. DescribeStreamSummary has a limit of 20 transactions per second per account.

```sql
SELECT
ConsumerCount,
EncryptionType,
EnhancedMonitoring,
KeyId,
MaxRecordSizeInKiB,
OpenShardCount,
RetentionPeriodHours,
StreamARN,
StreamCreationTimestamp,
StreamId,
StreamModeDetails,
StreamName,
StreamStatus,
WarmThroughput
FROM aws.kinesis.stream_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
