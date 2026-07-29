--- 
title: media_storage_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - media_storage_configurations
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

Creates, updates, deletes, gets or lists a <code>media_storage_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_storage_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.media_storage_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_media_storage_configuration"
    values={[
        { label: 'describe_media_storage_configuration', value: 'describe_media_storage_configuration' }
    ]}
>
<TabItem value="describe_media_storage_configuration">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the media storage configuration. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_media_storage_configuration"><CopyableCode code="describe_media_storage_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the most current information about the channel. Specify the ChannelName or ChannelARN in the input.</td>
</tr>
<tr>
    <td><a href="#update_media_storage_configuration"><CopyableCode code="update_media_storage_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelARN"><code>ChannelARN</code></a>, <a href="#parameter-MediaStorageConfiguration"><code>MediaStorageConfiguration</code></a></td>
    <td></td>
    <td>Associates a SignalingChannel to a stream to store the media. There are two signaling modes that you can specify : If StorageStatus is enabled, the data will be stored in the StreamARN provided. In order for WebRTC Ingestion to work, the stream must have data retention enabled. If StorageStatus is disabled, no data will be stored, and the StreamARN parameter will not be needed. If StorageStatus is enabled, direct peer-to-peer (master-viewer) connections no longer occur. Peers connect directly to the storage session. You must call the JoinStorageSession API to trigger an SDP offer send and establish a connection between a peer and the storage session.</td>
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
    defaultValue="describe_media_storage_configuration"
    values={[
        { label: 'describe_media_storage_configuration', value: 'describe_media_storage_configuration' }
    ]}
>
<TabItem value="describe_media_storage_configuration">

Returns the most current information about the channel. Specify the ChannelName or ChannelARN in the input.

```sql
SELECT
status,
stream_arn
FROM aws.kinesisvideo.media_storage_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_media_storage_configuration"
    values={[
        { label: 'update_media_storage_configuration', value: 'update_media_storage_configuration' }
    ]}
>
<TabItem value="update_media_storage_configuration">

Associates a SignalingChannel to a stream to store the media. There are two signaling modes that you can specify : If StorageStatus is enabled, the data will be stored in the StreamARN provided. In order for WebRTC Ingestion to work, the stream must have data retention enabled. If StorageStatus is disabled, no data will be stored, and the StreamARN parameter will not be needed. If StorageStatus is enabled, direct peer-to-peer (master-viewer) connections no longer occur. Peers connect directly to the storage session. You must call the JoinStorageSession API to trigger an SDP offer send and establish a connection between a peer and the storage session.

```sql
UPDATE aws.kinesisvideo.media_storage_configurations
SET 
ChannelARN = '{{ ChannelARN }}',
MediaStorageConfiguration = '{{ MediaStorageConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ChannelARN = '{{ ChannelARN }}' --required
AND MediaStorageConfiguration = '{{ MediaStorageConfiguration }}' --required;
```
</TabItem>
</Tabs>
