--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - kafka
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.channels" /></td></tr>
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
    <td>The Amazon Resource Name (ARN) that uniquely identifies the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_operation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the in-flight cluster operation. Returned only while the channel is in CREATING, UPDATING, or DELETING.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_type" /></td>
    <td><code>string</code></td>
    <td>The type of destination configured for the channel. (ICEBERG, S3)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The AWS KMS encryption configuration applied to data at rest.</td>
</tr>
<tr>
    <td><CopyableCode code="iceberg_destination_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration of an Apache Iceberg destination for a channel.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_info" /></td>
    <td><code>object</code></td>
    <td>Configuration for the destinations to which the channel publishes operational logs.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_destination_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration of an Amazon S3 destination for a channel.</td>
</tr>
<tr>
    <td><CopyableCode code="state_info" /></td>
    <td><code>object</code></td>
    <td>Additional context for the current channel state, populated when the channel is in FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the channel. (CREATING, ACTIVE, UPDATING, DELETING, FAILED, SUSPENDING, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags attached to the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_configuration_list" /></td>
    <td><code>array</code></td>
    <td>The list of topic configurations for the channel.</td>
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
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>The list of channels in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If the response from ListChannels is truncated, this token is included. Send it as the nextToken parameter on a subsequent ListChannels call to retrieve the next page.</td>
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
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current configuration and state of a channel.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-topicNameFilter"><code>topicNameFilter</code></a></td>
    <td>Returns the list of channels in a cluster.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelName"><code>ChannelName</code></a>, <a href="#parameter-TopicConfigurationList"><code>TopicConfigurationList</code></a></td>
    <td></td>
    <td>Creates a Channel that streams records from an Amazon MSK Express cluster topic to Amazon S3 or Apache Iceberg.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the destination configuration of an existing channel. Exactly one of icebergDestinationUpdate or s3DestinationUpdate must be supplied.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_arn"><code>channel_arn</code></a>, <a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the channel specified by channelArn from the cluster specified by clusterArn. The channel transitions through DELETING and is removed when the asynchronous delete completes.</td>
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
<tr id="parameter-channel_arn">
    <td><CopyableCode code="channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the channel.</td>
</tr>
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of channels to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the response of ListChannels is truncated, it returns a nextToken in the response. This nextToken should be sent in the subsequent request to ListChannels.</td>
</tr>
<tr id="parameter-topicNameFilter">
    <td><CopyableCode code="topicNameFilter" /></td>
    <td><code>string</code></td>
    <td>Filters results to channels whose topic name matches the specified value.</td>
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

Returns the current configuration and state of a channel.

```sql
SELECT
channel_arn,
channel_name,
cluster_operation_arn,
creation_time,
destination_type,
encryption_configuration,
iceberg_destination_configuration,
logging_info,
s3_destination_configuration,
state_info,
status,
tags,
topic_configuration_list
FROM aws.kafka.channels
WHERE channel_arn = '{{ channel_arn }}' -- required
AND cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Returns the list of channels in a cluster.

```sql
SELECT
channels,
next_token
FROM aws.kafka.channels
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND topicNameFilter = '{{ topicNameFilter }}'
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

Creates a Channel that streams records from an Amazon MSK Express cluster topic to Amazon S3 or Apache Iceberg.

```sql
INSERT INTO aws.kafka.channels (
ChannelName,
EncryptionConfiguration,
IcebergDestinationConfiguration,
S3DestinationConfiguration,
Tags,
TopicConfigurationList,
LoggingInfo,
cluster_arn,
region
)
SELECT 
'{{ ChannelName }}' /* required */,
'{{ EncryptionConfiguration }}',
'{{ IcebergDestinationConfiguration }}',
'{{ S3DestinationConfiguration }}',
'{{ Tags }}',
'{{ TopicConfigurationList }}' /* required */,
'{{ LoggingInfo }}',
'{{ cluster_arn }}',
'{{ region }}'
RETURNING
channel_arn,
cluster_operation_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: cluster_arn
      value: "{{ cluster_arn }}"
      description: Required parameter for the channels resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: ChannelName
      value: "{{ ChannelName }}"
    - name: EncryptionConfiguration
      description: |
        The AWS KMS encryption configuration applied to data at rest.
      value:
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: IcebergDestinationConfiguration
      description: |
        Configuration of an Apache Iceberg destination for a channel.
      value:
        AppendOnly: {{ AppendOnly }}
        Catalog:
          CatalogArn: "{{ CatalogArn }}"
          WarehouseLocation: "{{ WarehouseLocation }}"
        DataFreshnessInSeconds: {{ DataFreshnessInSeconds }}
        DeadLetterQueueS3:
          BucketArn: "{{ BucketArn }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
        DestinationTableList:
          - DestinationDatabaseName: "{{ DestinationDatabaseName }}"
            DestinationTableName: "{{ DestinationTableName }}"
            PartitionSpec:
              PartitionStrategy: "{{ PartitionStrategy }}"
              SourceList:
                - SourceName: "{{ SourceName }}"
        SchemaEvolution:
          EnableSchemaEvolution: {{ EnableSchemaEvolution }}
        ServiceExecutionRoleArn: "{{ ServiceExecutionRoleArn }}"
        TableCreation:
          EnableTableCreation: {{ EnableTableCreation }}
        CompressionType: "{{ CompressionType }}"
    - name: S3DestinationConfiguration
      description: |
        Configuration of an Amazon S3 destination for a channel.
      value:
        DataFreshnessInSeconds: {{ DataFreshnessInSeconds }}
        DeadLetterQueueS3:
          BucketArn: "{{ BucketArn }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
        ServiceExecutionRoleArn: "{{ ServiceExecutionRoleArn }}"
        Storage:
          BucketArn: "{{ BucketArn }}"
          CompressionType: "{{ CompressionType }}"
          OutputPrefix: "{{ OutputPrefix }}"
          OutputKeyTemplate: "{{ OutputKeyTemplate }}"
          StorageClass: "{{ StorageClass }}"
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: TopicConfigurationList
      value:
        - RecordConverter:
            ValueConverter: "{{ ValueConverter }}"
          RecordSchema:
            GsrArn: "{{ GsrArn }}"
          TopicArn: "{{ TopicArn }}"
    - name: LoggingInfo
      description: |
        Configuration for the destinations to which the channel publishes operational logs.
      value:
        CloudWatchLogs:
          Enabled: {{ Enabled }}
          LogGroup: "{{ LogGroup }}"
        Firehose:
          DeliveryStream: "{{ DeliveryStream }}"
          Enabled: {{ Enabled }}
        S3:
          Bucket: "{{ Bucket }}"
          Enabled: {{ Enabled }}
          Prefix: "{{ Prefix }}"
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

Updates the destination configuration of an existing channel. Exactly one of icebergDestinationUpdate or s3DestinationUpdate must be supplied.

```sql
UPDATE aws.kafka.channels
SET 
IcebergDestinationUpdate = '{{ IcebergDestinationUpdate }}',
S3DestinationUpdate = '{{ S3DestinationUpdate }}'
WHERE 
channel_arn = '{{ channel_arn }}' --required
AND cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
channel_arn,
cluster_operation_arn;
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

Deletes the channel specified by channelArn from the cluster specified by clusterArn. The channel transitions through DELETING and is removed when the asynchronous delete completes.

```sql
DELETE FROM aws.kafka.channels
WHERE channel_arn = '{{ channel_arn }}' --required
AND cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
