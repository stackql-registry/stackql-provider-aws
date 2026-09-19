--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
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

Creates, updates, deletes, gets or lists a <code>channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_channel"
    values={[
        { label: 'describe_channel', value: 'describe_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="describe_channel">

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
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the channel. (pattern: &lt;code&gt;arn:aws.*:kinesis:.*:\d&#123;12&#125;:channel/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the channel. Valid values: CREATING - The channel is being created. ACTIVE - The channel is ready to deliver records. UPDATING - The channel configuration is being updated. DELETING - The channel is being deleted. FAILED - See ChannelStatusReason for the failure cause. (CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_status_reason" /></td>
    <td><code>string</code></td>
    <td>A message describing the reason for a FAILED status.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The server-side encryption configuration for the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>The Amazon CloudWatch Logs configuration for the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_destination_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for delivery to a general purpose Amazon S3 bucket. Present only when the channel destination is a general purpose Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_tables_destination_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for delivery to streaming tables on Apache Iceberg in Amazon S3 Tables. Present only when the channel destination is a streaming table.</td>
</tr>
<tr>
    <td><CopyableCode code="service_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Data Streams assumes to write records to the destination. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:iam::\d&#123;12&#125;:role/&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_configuration_list" /></td>
    <td><code>array</code></td>
    <td>The source stream configuration for the channel.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channels">

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
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the channel. (pattern: &lt;code&gt;arn:aws.*:kinesis:.*:\d&#123;12&#125;:channel/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_destination_type" /></td>
    <td><code>string</code></td>
    <td>The destination type of the channel. Valid values: S3 - Delivery to a general purpose Amazon S3 bucket. S3_TABLES - Delivery to streaming tables on Apache Iceberg. (S3, S3_TABLES)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the channel. Valid values: CREATING - The channel is being created. ACTIVE - The channel is ready to deliver records. UPDATING - The channel configuration is being updated. DELETING - The channel is being deleted. FAILED - See ChannelStatusReason for the failure cause. (CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_status_reason" /></td>
    <td><code>string</code></td>
    <td>A message describing the reason for a FAILED status.</td>
</tr>
<tr>
    <td><CopyableCode code="streams" /></td>
    <td><code>array</code></td>
    <td>The source streams associated with the channel.</td>
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
    <td><a href="#describe_channel"><CopyableCode code="describe_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified channel, including its configuration and current status. Use this operation to verify that a channel reached the ACTIVE state after creation, or to diagnose a channel in the FAILED state by reading the ChannelStatusReason. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the channels in your account. You can filter the results by source stream. The results are paginated. Use the NextToken value returned in the response to retrieve additional results. Use this operation to find channels before deleting a stream, or to audit the channels configured in an Amazon Web Services Region. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelName"><code>ChannelName</code></a>, <a href="#parameter-ServiceExecutionRoleARN"><code>ServiceExecutionRoleARN</code></a>, <a href="#parameter-StreamConfigurationList"><code>StreamConfigurationList</code></a></td>
    <td></td>
    <td>Creates a channel that delivers records from a Kinesis data stream to a destination. A channel reads records from the specified stream and writes them to streaming tables on Apache Iceberg (Amazon S3 Tables) or to a general purpose Amazon S3 bucket. You must specify either S3DestinationConfiguration or S3TablesDestinationConfiguration, but not both. To use this operation, you must have permission to pass the specified service execution IAM role to Amazon Kinesis Data Streams (the iam:PassRole permission on that role). Creating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams returns immediately with the channel in the CREATING state. After provisioning is complete, Amazon Kinesis Data Streams sets the state to ACTIVE. You can use DescribeChannel to check the current state. This operation is only supported for data streams with the on-demand capacity mode. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelARN"><code>ChannelARN</code></a></td>
    <td></td>
    <td>Updates the data freshness interval or the Amazon CloudWatch Logs configuration of an existing channel. You cannot change the destination, source stream, record format, schema, encryption configuration, or service execution role of an existing channel. To change any other setting, delete the channel and create a new one. Updating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams sets the channel to the UPDATING state and returns immediately. After the change is applied, Amazon Kinesis Data Streams sets the channel back to the ACTIVE state. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified channel. Deleting a channel stops delivery from the source stream to the destination. Data already delivered to the destination is not deleted. A stream cannot be deleted while it has active channels. To delete the stream, first delete all channels attached to it. To find them, use ListChannels with a stream filter. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.</td>
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
    defaultValue="describe_channel"
    values={[
        { label: 'describe_channel', value: 'describe_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="describe_channel">

Describes the specified channel, including its configuration and current status. Use this operation to verify that a channel reached the ACTIVE state after creation, or to diagnose a channel in the FAILED state by reading the ChannelStatusReason. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.

```sql
SELECT
channel_arn,
channel_creation_timestamp,
channel_id,
channel_name,
channel_status,
channel_status_reason,
encryption_configuration,
logging_configuration,
s3_destination_configuration,
s3_tables_destination_configuration,
service_execution_role_arn,
stream_configuration_list
FROM aws.kinesis.channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Lists the channels in your account. You can filter the results by source stream. The results are paginated. Use the NextToken value returned in the response to retrieve additional results. Use this operation to find channels before deleting a stream, or to audit the channels configured in an Amazon Web Services Region. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.

```sql
SELECT
channel_arn,
channel_creation_timestamp,
channel_destination_type,
channel_id,
channel_name,
channel_status,
channel_status_reason,
streams
FROM aws.kinesis.channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel"
    values={[
        { label: 'create_channel', value: 'create_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel">

Creates a channel that delivers records from a Kinesis data stream to a destination. A channel reads records from the specified stream and writes them to streaming tables on Apache Iceberg (Amazon S3 Tables) or to a general purpose Amazon S3 bucket. You must specify either S3DestinationConfiguration or S3TablesDestinationConfiguration, but not both. To use this operation, you must have permission to pass the specified service execution IAM role to Amazon Kinesis Data Streams (the iam:PassRole permission on that role). Creating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams returns immediately with the channel in the CREATING state. After provisioning is complete, Amazon Kinesis Data Streams sets the state to ACTIVE. You can use DescribeChannel to check the current state. This operation is only supported for data streams with the on-demand capacity mode. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.

```sql
INSERT INTO aws.kinesis.channels (
ChannelName,
ServiceExecutionRoleARN,
StreamConfigurationList,
S3DestinationConfiguration,
S3TablesDestinationConfiguration,
EncryptionConfiguration,
Tags,
LoggingConfiguration,
region
)
SELECT 
'{{ ChannelName }}' /* required */,
'{{ ServiceExecutionRoleARN }}' /* required */,
'{{ StreamConfigurationList }}' /* required */,
'{{ S3DestinationConfiguration }}',
'{{ S3TablesDestinationConfiguration }}',
'{{ EncryptionConfiguration }}',
'{{ Tags }}',
'{{ LoggingConfiguration }}',
'{{ region }}'
RETURNING
channel_description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: ChannelName
      value: "{{ ChannelName }}"
      description: |
        The name of the channel. The name is unique within your Amazon Web Services account and Amazon Web Services Region.
    - name: ServiceExecutionRoleARN
      value: "{{ ServiceExecutionRoleARN }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Data Streams assumes to write records to the destination.
    - name: StreamConfigurationList
      description: |
        The source stream configuration for the channel. Currently, one stream is supported per channel.
      value:
        - StreamARN: "{{ StreamARN }}"
          RecordConfiguration:
            RecordFormatType: "{{ RecordFormatType }}"
            GSRSchemaARN: "{{ GSRSchemaARN }}"
    - name: S3DestinationConfiguration
      description: |
        The configuration for delivery to a general purpose Amazon S3 bucket. You must specify either S3DestinationConfiguration or S3TablesDestinationConfiguration, but not both.
      value:
        DataFreshnessInSeconds: {{ DataFreshnessInSeconds }}
        DeadLetterQueueS3Configuration:
          BucketARN: "{{ BucketARN }}"
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
        StorageConfiguration:
          BucketARN: "{{ BucketARN }}"
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
          OutputKeyTemplate: "{{ OutputKeyTemplate }}"
          StorageClass: "{{ StorageClass }}"
          CompressionType: "{{ CompressionType }}"
    - name: S3TablesDestinationConfiguration
      description: |
        The configuration for delivery to streaming tables on Apache Iceberg in Amazon S3 Tables. You must specify either S3DestinationConfiguration or S3TablesDestinationConfiguration, but not both.
      value:
        DataFreshnessInSeconds: {{ DataFreshnessInSeconds }}
        DeadLetterQueueS3Configuration:
          BucketARN: "{{ BucketARN }}"
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
        S3TablesConfigurationList:
          - TableBucketARN: "{{ TableBucketARN }}"
            Namespace: "{{ Namespace }}"
            TableName: "{{ TableName }}"
            CompressionType: "{{ CompressionType }}"
            PartitionSpec:
              PartitionFields:
                - Transform: "{{ Transform }}"
                  SourceName: "{{ SourceName }}"
    - name: EncryptionConfiguration
      description: |
        The server-side encryption configuration that uses an Amazon Web Services KMS key to encrypt data delivered to the destination.
      value:
        EncryptionType: "{{ EncryptionType }}"
        KeyId: "{{ KeyId }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of key-value pairs to assign to the channel. A tag consists of a required key and an optional value.
    - name: LoggingConfiguration
      description: |
        The Amazon CloudWatch Logs configuration for the channel.
      value:
        CloudWatchLogs:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel"
    values={[
        { label: 'update_channel', value: 'update_channel' }
    ]}
>
<TabItem value="update_channel">

Updates the data freshness interval or the Amazon CloudWatch Logs configuration of an existing channel. You cannot change the destination, source stream, record format, schema, encryption configuration, or service execution role of an existing channel. To change any other setting, delete the channel and create a new one. Updating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams sets the channel to the UPDATING state and returns immediately. After the change is applied, Amazon Kinesis Data Streams sets the channel back to the ACTIVE state. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.

```sql
UPDATE aws.kinesis.channels
SET 
ChannelARN = '{{ ChannelARN }}',
S3DestinationConfiguration = '{{ S3DestinationConfiguration }}',
S3TablesDestinationConfiguration = '{{ S3TablesDestinationConfiguration }}',
LoggingConfiguration = '{{ LoggingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ChannelARN = '{{ ChannelARN }}' --required
RETURNING
channel_description;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel"
    values={[
        { label: 'delete_channel', value: 'delete_channel' }
    ]}
>
<TabItem value="delete_channel">

Deletes the specified channel. Deleting a channel stops delivery from the source stream to the destination. Data already delivered to the destination is not deleted. A stream cannot be deleted while it has active channels. To delete the stream, first delete all channels attached to it. To find them, use ListChannels with a stream filter. This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a LimitExceededException.

```sql
DELETE FROM aws.kinesis.channels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
