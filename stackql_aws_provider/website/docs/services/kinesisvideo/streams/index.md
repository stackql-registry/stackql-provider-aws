--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - kinesisvideo
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.streams" /></td></tr>
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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp that indicates when the stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_retention_in_hours" /></td>
    <td><code>integer</code></td>
    <td>How long the stream retains data, in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="device_name" /></td>
    <td><code>string</code></td>
    <td>The name of the device that is associated with the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key that Kinesis Video Streams uses to encrypt data on the stream. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_type" /></td>
    <td><code>string</code></td>
    <td>The MediaType of the stream. (pattern: &lt;code&gt;&#91;\w\-\.\+&#93;+/&#91;\w\-\.\+&#93;+(,&#91;\w\-\.\+&#93;+/&#91;\w\-\.\+&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the stream. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp that indicates when the stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_retention_in_hours" /></td>
    <td><code>integer</code></td>
    <td>How long the stream retains data, in hours.</td>
</tr>
<tr>
    <td><CopyableCode code="device_name" /></td>
    <td><code>string</code></td>
    <td>The name of the device that is associated with the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key that Kinesis Video Streams uses to encrypt data on the stream. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_type" /></td>
    <td><code>string</code></td>
    <td>The MediaType of the stream. (pattern: &lt;code&gt;&#91;\w\-\.\+&#93;+/&#91;\w\-\.\+&#93;+(,&#91;\w\-\.\+&#93;+/&#91;\w\-\.\+&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the stream. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
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
    <td>Returns the most current information about the specified stream. You must specify either the StreamName or the StreamARN.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of StreamInfo objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a StreamNameCondition.</td>
</tr>
<tr>
    <td><a href="#create_stream"><CopyableCode code="create_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamName"><code>StreamName</code></a></td>
    <td></td>
    <td>Creates a new Kinesis video stream. When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. CreateStream is an asynchronous operation. For information about how the service works, see How it Works. You must have permissions for the KinesisVideo:CreateStream action.</td>
</tr>
<tr>
    <td><a href="#update_stream"><CopyableCode code="update_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates stream metadata, such as the device name and media type. You must provide the stream name or the Amazon Resource Name (ARN) of the stream. To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API. UpdateStream is an asynchronous operation, and takes time to complete.</td>
</tr>
<tr>
    <td><a href="#delete_stream"><CopyableCode code="delete_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Kinesis video stream and the data contained in the stream. This method marks the stream for deletion, and makes the data in the stream inaccessible immediately. To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API. This operation requires permission for the KinesisVideo:DeleteStream action.</td>
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

Returns the most current information about the specified stream. You must specify either the StreamName or the StreamARN.

```sql
SELECT
creation_time,
data_retention_in_hours,
device_name,
kms_key_id,
media_type,
status,
stream_arn,
stream_name,
version
FROM aws.kinesisvideo.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streams">

Returns an array of StreamInfo objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a StreamNameCondition.

```sql
SELECT
creation_time,
data_retention_in_hours,
device_name,
kms_key_id,
media_type,
status,
stream_arn,
stream_name,
version
FROM aws.kinesisvideo.streams
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

Creates a new Kinesis video stream. When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. CreateStream is an asynchronous operation. For information about how the service works, see How it Works. You must have permissions for the KinesisVideo:CreateStream action.

```sql
INSERT INTO aws.kinesisvideo.streams (
DeviceName,
StreamName,
MediaType,
KmsKeyId,
DataRetentionInHours,
Tags,
StreamStorageConfiguration,
region
)
SELECT 
'{{ DeviceName }}',
'{{ StreamName }}' /* required */,
'{{ MediaType }}',
'{{ KmsKeyId }}',
{{ DataRetentionInHours }},
'{{ Tags }}',
'{{ StreamStorageConfiguration }}',
'{{ region }}'
RETURNING
stream_arn
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
    - name: DeviceName
      value: "{{ DeviceName }}"
    - name: StreamName
      value: "{{ StreamName }}"
    - name: MediaType
      value: "{{ MediaType }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
    - name: DataRetentionInHours
      value: {{ DataRetentionInHours }}
    - name: Tags
      value: "{{ Tags }}"
    - name: StreamStorageConfiguration
      description: |
        The configuration for stream storage, including the default storage tier for stream data. This configuration determines how stream data is stored and accessed, with different tiers offering varying levels of performance and cost optimization.
      value:
        DefaultStorageTier: "{{ DefaultStorageTier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stream"
    values={[
        { label: 'update_stream', value: 'update_stream' }
    ]}
>
<TabItem value="update_stream">

Updates stream metadata, such as the device name and media type. You must provide the stream name or the Amazon Resource Name (ARN) of the stream. To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API. UpdateStream is an asynchronous operation, and takes time to complete.

```sql
UPDATE aws.kinesisvideo.streams
SET 
StreamName = '{{ StreamName }}',
StreamARN = '{{ StreamARN }}',
CurrentVersion = '{{ CurrentVersion }}',
DeviceName = '{{ DeviceName }}',
MediaType = '{{ MediaType }}'
WHERE 
region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required;
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

Deletes a Kinesis video stream and the data contained in the stream. This method marks the stream for deletion, and makes the data in the stream inaccessible immediately. To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API. This operation requires permission for the KinesisVideo:DeleteStream action.

```sql
DELETE FROM aws.kinesisvideo.streams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
