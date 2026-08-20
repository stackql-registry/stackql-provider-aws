--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - mediapackagev2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackagev2.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel"
    values={[
        { label: 'get_channel', value: 'get_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="get_channel">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for your channel.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingest_endpoints" /></td>
    <td><code>array</code></td>
    <td>The list of ingest endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="input_switch_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</td>
</tr>
<tr>
    <td><CopyableCode code="input_type" /></td>
    <td><code>string</code></td>
    <td>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior. The allowed values are: HLS - The HLS streaming specification (which defines M3U8 manifests and TS segments). CMAF - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests). (HLS, CMAF)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="output_header_configuration" /></td>
    <td><code>object</code></td>
    <td>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</td>
</tr>
<tr>
    <td><CopyableCode code="output_locking_mode" /></td>
    <td><code>string</code></td>
    <td>The output locking mode configured for the channel. The allowed values are: EPOCH_LOCKED - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time. NON_EPOCH_LOCKED - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0. (EPOCH_LOCKED, NON_EPOCH_LOCKED)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the channel was last reset.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The comma-separated list of tag key:value pairs assigned to the channel.</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Any descriptive information that you want to add to the channel for future identification purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="input_type" /></td>
    <td><code>string</code></td>
    <td>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior. The allowed values are: HLS - The HLS streaming specification (which defines M3U8 manifests and TS segments). CMAF - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests). (HLS, CMAF)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the channel was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="output_locking_mode" /></td>
    <td><code>string</code></td>
    <td>The output locking mode configured for the channel. The allowed values are: EPOCH_LOCKED - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time. NON_EPOCH_LOCKED - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0. (EPOCH_LOCKED, NON_EPOCH_LOCKED)</td>
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
    <td><a href="#get_channel"><CopyableCode code="get_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified channel that's configured in AWS Elemental MediaPackage.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves all channels in a specific channel group that are configured in AWS Elemental MediaPackage.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelName"><code>ChannelName</code></a></td>
    <td><a href="#parameter-x-amzn-client-token"><code>x-amzn-client-token</code></a></td>
    <td>Create a channel to start receiving content streams. The channel represents the input to MediaPackage for incoming live content from an encoder such as AWS Elemental MediaLive. The channel receives content, and after packaging it, outputs it through an origin endpoint to downstream devices (such as video players or CDNs) that request the content. You can create only one channel with each request. We recommend that you spread out channels between channel groups, such as putting redundant channels in the same AWS Region in different channel groups.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-update-if-match"><code>x-amzn-update-if-match</code></a></td>
    <td>Update the specified channel. You can edit if MediaPackage sends ingest or egress access logs to the CloudWatch log group, if content will be encrypted, the description on a channel, and your channel's policy settings. You can't edit the name of the channel or CloudFront distribution details. Any edits you make that impact the video output may not be reflected for a few minutes.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a channel to stop AWS Elemental MediaPackage from receiving further content. You must delete the channel's origin endpoints before you can delete the channel.</td>
</tr>
<tr>
    <td><a href="#reset_channel_state"><CopyableCode code="reset_channel_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resetting the channel can help to clear errors from misconfigurations in the encoder. A reset refreshes the ingest stream and removes previous content. Be sure to stop the encoder before you reset the channel, and wait at least 30 seconds before you restart the encoder.</td>
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
<tr id="parameter-channel_group_name">
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel group that contains the channel that you are resetting.</td>
</tr>
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel that you are resetting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the GET list request. Use the token to fetch the next page of results.</td>
</tr>
<tr id="parameter-x-amzn-client-token">
    <td><CopyableCode code="x-amzn-client-token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-x-amzn-update-if-match">
    <td><CopyableCode code="x-amzn-update-if-match" /></td>
    <td><code>string</code></td>
    <td>The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel"
    values={[
        { label: 'get_channel', value: 'get_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="get_channel">

Retrieves the specified channel that's configured in AWS Elemental MediaPackage.

```sql
SELECT
arn,
channel_group_name,
channel_name,
created_at,
description,
e_tag,
ingest_endpoints,
input_switch_configuration,
input_type,
modified_at,
output_header_configuration,
output_locking_mode,
reset_at,
tags
FROM aws.mediapackagev2.channels
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Retrieves all channels in a specific channel group that are configured in AWS Elemental MediaPackage.

```sql
SELECT
arn,
channel_group_name,
channel_name,
created_at,
description,
input_type,
modified_at,
output_locking_mode
FROM aws.mediapackagev2.channels
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Create a channel to start receiving content streams. The channel represents the input to MediaPackage for incoming live content from an encoder such as AWS Elemental MediaLive. The channel receives content, and after packaging it, outputs it through an origin endpoint to downstream devices (such as video players or CDNs) that request the content. You can create only one channel with each request. We recommend that you spread out channels between channel groups, such as putting redundant channels in the same AWS Region in different channel groups.

```sql
INSERT INTO aws.mediapackagev2.channels (
ChannelName,
InputType,
Description,
InputSwitchConfiguration,
OutputHeaderConfiguration,
OutputLockingMode,
Tags,
channel_group_name,
region,
`x-amzn-client-token`
)
SELECT 
'{{ ChannelName }}' /* required */,
'{{ InputType }}',
'{{ Description }}',
'{{ InputSwitchConfiguration }}',
'{{ OutputHeaderConfiguration }}',
'{{ OutputLockingMode }}',
'{{ Tags }}',
'{{ channel_group_name }}',
'{{ region }}',
'{{ x-amzn-client-token }}'
RETURNING
arn,
channel_group_name,
channel_name,
created_at,
description,
e_tag,
ingest_endpoints,
input_switch_configuration,
input_type,
modified_at,
output_header_configuration,
output_locking_mode,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: channel_group_name
      value: "{{ channel_group_name }}"
      description: Required parameter for the channels resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: ChannelName
      value: "{{ ChannelName }}"
    - name: InputType
      value: "{{ InputType }}"
      valid_values: ['HLS', 'CMAF']
    - name: Description
      value: "{{ Description }}"
    - name: InputSwitchConfiguration
      description: |
        The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.
      value:
        MQCSInputSwitching: {{ MQCSInputSwitching }}
        PreferredInput: {{ PreferredInput }}
    - name: OutputHeaderConfiguration
      description: |
        The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.
      value:
        PublishMQCS: {{ PublishMQCS }}
    - name: OutputLockingMode
      value: "{{ OutputLockingMode }}"
      valid_values: ['EPOCH_LOCKED', 'NON_EPOCH_LOCKED']
    - name: Tags
      value: "{{ Tags }}"
    - name: x-amzn-client-token
      value: "{{ x-amzn-client-token }}"
      description: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
      description: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
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

Update the specified channel. You can edit if MediaPackage sends ingest or egress access logs to the CloudWatch log group, if content will be encrypted, the description on a channel, and your channel's policy settings. You can't edit the name of the channel or CloudFront distribution details. Any edits you make that impact the video output may not be reflected for a few minutes.

```sql
UPDATE aws.mediapackagev2.channels
SET 
Description = '{{ Description }}',
InputSwitchConfiguration = '{{ InputSwitchConfiguration }}',
OutputHeaderConfiguration = '{{ OutputHeaderConfiguration }}'
WHERE 
channel_group_name = '{{ channel_group_name }}' --required
AND channel_name = '{{ channel_name }}' --required
AND region = '{{ region }}' --required
AND `x-amzn-update-if-match` = '{{ x-amzn-update-if-match}}'
RETURNING
arn,
channel_group_name,
channel_name,
created_at,
description,
e_tag,
ingest_endpoints,
input_switch_configuration,
input_type,
modified_at,
output_header_configuration,
output_locking_mode,
tags;
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

Delete a channel to stop AWS Elemental MediaPackage from receiving further content. You must delete the channel's origin endpoints before you can delete the channel.

```sql
DELETE FROM aws.mediapackagev2.channels
WHERE channel_group_name = '{{ channel_group_name }}' --required
AND channel_name = '{{ channel_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_channel_state"
    values={[
        { label: 'reset_channel_state', value: 'reset_channel_state' }
    ]}
>
<TabItem value="reset_channel_state">

Resetting the channel can help to clear errors from misconfigurations in the encoder. A reset refreshes the ingest stream and removes previous content. Be sure to stop the encoder before you reset the channel, and wait at least 30 seconds before you restart the encoder.

```sql
EXEC aws.mediapackagev2.channels.reset_channel_state 
@channel_group_name='{{ channel_group_name }}' --required, 
@channel_name='{{ channel_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
