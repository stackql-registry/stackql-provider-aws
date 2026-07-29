--- 
title: stream_consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_consumers
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

Creates, updates, deletes, gets or lists a <code>stream_consumers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_consumers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.stream_consumers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stream_consumers"
    values={[
        { label: 'list_stream_consumers', value: 'list_stream_consumers' },
        { label: 'describe_stream_consumer', value: 'describe_stream_consumer' }
    ]}
>
<TabItem value="list_stream_consumers">

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
    <td><CopyableCode code="consumer_arn" /></td>
    <td><code>string</code></td>
    <td>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call SubscribeToShard. If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs. (pattern: &lt;code&gt;^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/&#91;a-zA-Z0-9_.-&#93;+\/consumer\/&#91;a-zA-Z0-9_.-&#93;+:&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="consumer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the consumer is something you choose when you register the consumer. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_status" /></td>
    <td><code>string</code></td>
    <td>A consumer can't read data while in the CREATING or DELETING states. (CREATING, DELETING, ACTIVE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_stream_consumer">

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
    <td><CopyableCode code="consumer_arn" /></td>
    <td><code>string</code></td>
    <td>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call SubscribeToShard. If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs. (pattern: &lt;code&gt;^(arn):aws.*:kinesis:.*:\d&#123;12&#125;:.*stream\/&#91;a-zA-Z0-9_.-&#93;+\/consumer\/&#91;a-zA-Z0-9_.-&#93;+:&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="consumer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the consumer is something you choose when you register the consumer. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_status" /></td>
    <td><code>string</code></td>
    <td>A consumer can't read data while in the CREATING or DELETING states. (CREATING, DELETING, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the stream with which you registered the consumer. (pattern: &lt;code&gt;arn:aws.*:kinesis:.*:\d&#123;12&#125;:stream/\S+&lt;/code&gt;)</td>
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
    <td><a href="#list_stream_consumers"><CopyableCode code="list_stream_consumers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer. This operation has a limit of 5 transactions per second per stream.</td>
</tr>
<tr>
    <td><a href="#describe_stream_consumer"><CopyableCode code="describe_stream_consumer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. This operation has a limit of 20 transactions per second per stream. When making a cross-account call with DescribeStreamConsumer, make sure to provide the ARN of the consumer.</td>
</tr>
<tr>
    <td><a href="#register_stream_consumer"><CopyableCode code="register_stream_consumer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamARN"><code>StreamARN</code></a>, <a href="#parameter-ConsumerName"><code>ConsumerName</code></a></td>
    <td></td>
    <td>Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can then call SubscribeToShard to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream. You can add tags to the registered consumer when making a RegisterStreamConsumer request by setting the Tags parameter. If you pass the Tags parameter, in addition to having the kinesis:RegisterStreamConsumer permission, you must also have the kinesis:TagResource permission for the consumer that will be registered. Tags will take effect from the CREATING status of the consumer. With On-demand Advantage streams, you can register up to 50 consumers per stream to use Enhanced Fan-out. With On-demand Standard and Provisioned streams, you can register up to 20 consumers per stream to use Enhanced Fan-out. A given consumer can only be registered with one stream at a time. For an example of how to use this operation, see Enhanced Fan-Out Using the Kinesis Data Streams API. The use of this operation has a limit of five transactions per second per account. Also, only 5 consumers can be created simultaneously. In other words, you cannot have more than 5 consumers in a CREATING status at the same time. Registering a 6th consumer while there are 5 in a CREATING status results in a LimitExceededException.</td>
</tr>
<tr>
    <td><a href="#deregister_stream_consumer"><CopyableCode code="deregister_stream_consumer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN. This operation has a limit of five transactions per second per stream.</td>
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
    defaultValue="list_stream_consumers"
    values={[
        { label: 'list_stream_consumers', value: 'list_stream_consumers' },
        { label: 'describe_stream_consumer', value: 'describe_stream_consumer' }
    ]}
>
<TabItem value="list_stream_consumers">

Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer. This operation has a limit of 5 transactions per second per stream.

```sql
SELECT
consumer_arn,
consumer_creation_timestamp,
consumer_name,
consumer_status
FROM aws.kinesis.stream_consumers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_stream_consumer">

To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. This operation has a limit of 20 transactions per second per stream. When making a cross-account call with DescribeStreamConsumer, make sure to provide the ARN of the consumer.

```sql
SELECT
consumer_arn,
consumer_creation_timestamp,
consumer_name,
consumer_status,
stream_arn
FROM aws.kinesis.stream_consumers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_stream_consumer"
    values={[
        { label: 'register_stream_consumer', value: 'register_stream_consumer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_stream_consumer">

Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can then call SubscribeToShard to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream. You can add tags to the registered consumer when making a RegisterStreamConsumer request by setting the Tags parameter. If you pass the Tags parameter, in addition to having the kinesis:RegisterStreamConsumer permission, you must also have the kinesis:TagResource permission for the consumer that will be registered. Tags will take effect from the CREATING status of the consumer. With On-demand Advantage streams, you can register up to 50 consumers per stream to use Enhanced Fan-out. With On-demand Standard and Provisioned streams, you can register up to 20 consumers per stream to use Enhanced Fan-out. A given consumer can only be registered with one stream at a time. For an example of how to use this operation, see Enhanced Fan-Out Using the Kinesis Data Streams API. The use of this operation has a limit of five transactions per second per account. Also, only 5 consumers can be created simultaneously. In other words, you cannot have more than 5 consumers in a CREATING status at the same time. Registering a 6th consumer while there are 5 in a CREATING status results in a LimitExceededException.

```sql
INSERT INTO aws.kinesis.stream_consumers (
StreamARN,
ConsumerName,
StreamId,
Tags,
region
)
SELECT 
'{{ StreamARN }}' /* required */,
'{{ ConsumerName }}' /* required */,
'{{ StreamId }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
consumer
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_consumers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_consumers resource.
    - name: StreamARN
      value: "{{ StreamARN }}"
      description: |
        The ARN of the Kinesis data stream that you want to register the consumer with. For more info, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces.
    - name: ConsumerName
      value: "{{ ConsumerName }}"
      description: |
        For a given Kinesis data stream, each consumer must have a unique name. However, consumer names don't have to be unique across data streams.
    - name: StreamId
      value: "{{ StreamId }}"
      description: |
        Not Implemented. Reserved for future use.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of up to 50 key-value pairs. A tag consists of a required key and an optional value.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_stream_consumer"
    values={[
        { label: 'deregister_stream_consumer', value: 'deregister_stream_consumer' }
    ]}
>
<TabItem value="deregister_stream_consumer">

To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN. This operation has a limit of five transactions per second per stream.

```sql
DELETE FROM aws.kinesis.stream_consumers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
