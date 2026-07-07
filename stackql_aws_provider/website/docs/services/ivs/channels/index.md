--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - ivs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_channel"
    values={[
        { label: 'batch_get_channel', value: 'batch_get_channel' },
        { label: 'get_channel', value: 'get_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="batch_get_channel">

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
    <td><CopyableCode code="accessControlAllowOrigin" /></td>
    <td><code>string</code></td>
    <td>See Access-Control-Allow-Origin in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="accessControlExposeHeaders" /></td>
    <td><code>string</code></td>
    <td>See Access-Control-Expose-Headers in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheControl" /></td>
    <td><code>string</code></td>
    <td>See Cache-Control in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="contentSecurityPolicy" /></td>
    <td><code>string</code></td>
    <td>See Content-Security-Policy in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Each error object is related to a specific ARN in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="strictTransportSecurity" /></td>
    <td><code>string</code></td>
    <td>See Strict-Transport-Security in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="xContentTypeOptions" /></td>
    <td><code>string</code></td>
    <td>See X-Content-Type-Options in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="xFrameOptions" /></td>
    <td><code>string</code></td>
    <td>See X-Frame-Options in the MDN Web Docs.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Channel name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="adConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the ad configuration associated with the channel. (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ad-configuration/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Channel ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:channel/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized" /></td>
    <td><code>boolean</code></td>
    <td>Whether the channel is private (enabled for playback authorization). Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="containerFormat" /></td>
    <td><code>string</code></td>
    <td>Indicates which content-packaging format is used (MPEG-TS or fMP4). If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS. (TS, FRAGMENTED_MP4)</td>
</tr>
<tr>
    <td><CopyableCode code="ingestEndpoint" /></td>
    <td><code>string</code></td>
    <td>Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.</td>
</tr>
<tr>
    <td><CopyableCode code="insecureIngest" /></td>
    <td><code>boolean</code></td>
    <td>Whether the channel allows insecure RTMP ingest. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="latencyMode" /></td>
    <td><code>string</code></td>
    <td>Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. Default: LOW. (NORMAL, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="multitrackInputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Object specifying multitrack input configuration. Default: no multitrack input configuration is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="playbackRestrictionPolicyArn" /></td>
    <td><code>string</code></td>
    <td>Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. Default: "" (empty string, no playback restriction policy is applied). (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:playback-restriction-policy/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="playbackUrl" /></td>
    <td><code>string</code></td>
    <td>Channel playback URL.</td>
</tr>
<tr>
    <td><CopyableCode code="preset" /></td>
    <td><code>string</code></td>
    <td>Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string (""). (HIGHER_BANDWIDTH_DELIVERY, CONSTRAINED_BANDWIDTH_DELIVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="recordingConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording. Default: "" (empty string, recording is disabled). (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:recording-configuration/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="srt" /></td>
    <td><code>object</code></td>
    <td>Specifies the endpoint and optional passphrase for streaming with the SRT protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately. Default: STANDARD. For details, see Channel Types. (BASIC, STANDARD, ADVANCED_SD, ADVANCED_HD)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Channel name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="adConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the ad configuration associated with the channel. (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ad-configuration/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Channel ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:channel/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized" /></td>
    <td><code>boolean</code></td>
    <td>Whether the channel is private (enabled for playback authorization). Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="insecureIngest" /></td>
    <td><code>boolean</code></td>
    <td>Whether the channel allows insecure RTMP ingest. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="latencyMode" /></td>
    <td><code>string</code></td>
    <td>Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. Default: LOW. (NORMAL, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="playbackRestrictionPolicyArn" /></td>
    <td><code>string</code></td>
    <td>Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. Default: "" (empty string, no playback restriction policy is applied). (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:playback-restriction-policy/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="preset" /></td>
    <td><code>string</code></td>
    <td>Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string (""). (HIGHER_BANDWIDTH_DELIVERY, CONSTRAINED_BANDWIDTH_DELIVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="recordingConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording. Default: "" (empty string, recording is disabled). (pattern: &lt;code&gt;^$|^arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:recording-configuration/&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately. Default: STANDARD. For details, see Channel Types. (BASIC, STANDARD, ADVANCED_SD, ADVANCED_HD)</td>
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
    <td><a href="#batch_get_channel"><CopyableCode code="batch_get_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Performs GetChannel on multiple ARNs simultaneously.</td>
</tr>
<tr>
    <td><a href="#get_channel"><CopyableCode code="get_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the channel configuration for the specified channel ARN. See also BatchGetChannel.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new channel and an associated stream key to start streaming.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a channel's configuration. Live channels cannot be updated. You must stop the ongoing stream, update the channel, and restart the stream for the changes to take effect.</td>
</tr>
<tr>
    <td><a href="#put_metadata"><CopyableCode code="put_metadata" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see Embedding Metadata within a Video Stream in the Amazon IVS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified channel and its associated stream keys. If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call StopStream, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See Using EventBridge with Amazon IVS.)</td>
</tr>
<tr>
    <td><a href="#insert_ad_break"><CopyableCode code="insert_ad_break" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a>, <a href="#parameter-durationSeconds"><code>durationSeconds</code></a></td>
    <td></td>
    <td>Inserts an ad marker in the playlist for the specified channel and duration using the ad configuration associated with the channel. Note: AWS Elemental MediaTailor (EMT), the service that handles ad requests, provides CloudWatch metrics to help you monitor the success or failure of each InsertAdBreak operation. See Monitoring AWS Elemental MediaTailor with Amazon CloudWatch metrics in the AWS Elemental MediaTailor User Guide for details on available metrics.</td>
</tr>
<tr>
    <td><a href="#start_viewer_session_revocation"><CopyableCode code="start_viewer_session_revocation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a>, <a href="#parameter-viewerId"><code>viewerId</code></a></td>
    <td></td>
    <td>Starts the process of revoking the viewer session associated with a specified channel ARN and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and including that version. For instructions on associating a viewer ID with a viewer session, see Setting Up Private Channels.</td>
</tr>
<tr>
    <td><a href="#stop_stream"><CopyableCode code="stop_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a></td>
    <td></td>
    <td>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel. Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the streamKey attached to the channel.</td>
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
    defaultValue="batch_get_channel"
    values={[
        { label: 'batch_get_channel', value: 'batch_get_channel' },
        { label: 'get_channel', value: 'get_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="batch_get_channel">

Performs GetChannel on multiple ARNs simultaneously.

```sql
SELECT
accessControlAllowOrigin,
accessControlExposeHeaders,
cacheControl,
channels,
contentSecurityPolicy,
errors,
strictTransportSecurity,
xContentTypeOptions,
xFrameOptions
FROM aws.ivs.channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_channel">

Gets the channel configuration for the specified channel ARN. See also BatchGetChannel.

```sql
SELECT
name,
adConfigurationArn,
arn,
authorized,
containerFormat,
ingestEndpoint,
insecureIngest,
latencyMode,
multitrackInputConfiguration,
playbackRestrictionPolicyArn,
playbackUrl,
preset,
recordingConfigurationArn,
srt,
tags,
type_
FROM aws.ivs.channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).

```sql
SELECT
name,
adConfigurationArn,
arn,
authorized,
insecureIngest,
latencyMode,
playbackRestrictionPolicyArn,
preset,
recordingConfigurationArn,
tags,
type_
FROM aws.ivs.channels
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

Creates a new channel and an associated stream key to start streaming.

```sql
INSERT INTO aws.ivs.channels (
name,
latencyMode,
type,
authorized,
recordingConfigurationArn,
tags,
insecureIngest,
preset,
playbackRestrictionPolicyArn,
multitrackInputConfiguration,
containerFormat,
adConfigurationArn,
region
)
SELECT 
'{{ name }}',
'{{ latencyMode }}',
'{{ type }}',
{{ authorized }},
'{{ recordingConfigurationArn }}',
'{{ tags }}',
{{ insecureIngest }},
'{{ preset }}',
'{{ playbackRestrictionPolicyArn }}',
'{{ multitrackInputConfiguration }}',
'{{ containerFormat }}',
'{{ adConfigurationArn }}',
'{{ region }}'
RETURNING
channel,
streamKey
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
    - name: name
      value: "{{ name }}"
    - name: latencyMode
      value: "{{ latencyMode }}"
      valid_values: ['NORMAL', 'LOW']
    - name: type
      value: "{{ type }}"
      valid_values: ['BASIC', 'STANDARD', 'ADVANCED_SD', 'ADVANCED_HD']
    - name: authorized
      value: {{ authorized }}
    - name: recordingConfigurationArn
      value: "{{ recordingConfigurationArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: insecureIngest
      value: {{ insecureIngest }}
    - name: preset
      value: "{{ preset }}"
      valid_values: ['HIGHER_BANDWIDTH_DELIVERY', 'CONSTRAINED_BANDWIDTH_DELIVERY']
    - name: playbackRestrictionPolicyArn
      value: "{{ playbackRestrictionPolicyArn }}"
    - name: multitrackInputConfiguration
      description: |
        A complex type that specifies multitrack input configuration.
      value:
        enabled: {{ enabled }}
        policy: "{{ policy }}"
        maximumResolution: "{{ maximumResolution }}"
    - name: containerFormat
      value: "{{ containerFormat }}"
      valid_values: ['TS', 'FRAGMENTED_MP4']
    - name: adConfigurationArn
      value: "{{ adConfigurationArn }}"
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

Updates a channel's configuration. Live channels cannot be updated. You must stop the ongoing stream, update the channel, and restart the stream for the changes to take effect.

```sql
UPDATE aws.ivs.channels
SET 
arn = '{{ arn }}',
name = '{{ name }}',
latencyMode = '{{ latencyMode }}',
type = '{{ type }}',
authorized = {{ authorized }},
recordingConfigurationArn = '{{ recordingConfigurationArn }}',
insecureIngest = {{ insecureIngest }},
preset = '{{ preset }}',
playbackRestrictionPolicyArn = '{{ playbackRestrictionPolicyArn }}',
multitrackInputConfiguration = '{{ multitrackInputConfiguration }}',
containerFormat = '{{ containerFormat }}',
adConfigurationArn = '{{ adConfigurationArn }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
channel;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metadata"
    values={[
        { label: 'put_metadata', value: 'put_metadata' }
    ]}
>
<TabItem value="put_metadata">

Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see Embedding Metadata within a Video Stream in the Amazon IVS User Guide.

```sql
REPLACE aws.ivs.channels
SET 
channelArn = '{{ channelArn }}',
metadata = '{{ metadata }}'
WHERE 
region = '{{ region }}' --required
AND channelArn = '{{ channelArn }}' --required
AND metadata = '{{ metadata }}' --required;
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

Deletes the specified channel and its associated stream keys. If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call StopStream, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See Using EventBridge with Amazon IVS.)

```sql
DELETE FROM aws.ivs.channels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="insert_ad_break"
    values={[
        { label: 'insert_ad_break', value: 'insert_ad_break' },
        { label: 'start_viewer_session_revocation', value: 'start_viewer_session_revocation' },
        { label: 'stop_stream', value: 'stop_stream' }
    ]}
>
<TabItem value="insert_ad_break">

Inserts an ad marker in the playlist for the specified channel and duration using the ad configuration associated with the channel. Note: AWS Elemental MediaTailor (EMT), the service that handles ad requests, provides CloudWatch metrics to help you monitor the success or failure of each InsertAdBreak operation. See Monitoring AWS Elemental MediaTailor with Amazon CloudWatch metrics in the AWS Elemental MediaTailor User Guide for details on available metrics.

```sql
EXEC aws.ivs.channels.insert_ad_break 
@region='{{ region }}' --required 
@@json=
'{
"channelArn": "{{ channelArn }}", 
"durationSeconds": {{ durationSeconds }}
}'
;
```
</TabItem>
<TabItem value="start_viewer_session_revocation">

Starts the process of revoking the viewer session associated with a specified channel ARN and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and including that version. For instructions on associating a viewer ID with a viewer session, see Setting Up Private Channels.

```sql
EXEC aws.ivs.channels.start_viewer_session_revocation 
@region='{{ region }}' --required 
@@json=
'{
"channelArn": "{{ channelArn }}", 
"viewerId": "{{ viewerId }}", 
"viewerSessionVersionsLessThanOrEqualTo": {{ viewerSessionVersionsLessThanOrEqualTo }}
}'
;
```
</TabItem>
<TabItem value="stop_stream">

Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel. Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the streamKey attached to the channel.

```sql
EXEC aws.ivs.channels.stop_stream 
@region='{{ region }}' --required 
@@json=
'{
"channelArn": "{{ channelArn }}"
}'
;
```
</TabItem>
</Tabs>
