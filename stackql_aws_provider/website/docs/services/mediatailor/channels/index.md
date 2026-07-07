--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - mediatailor
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.channels" /></td></tr>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Audiences" /></td>
    <td><code>array</code></td>
    <td>The list of audiences defined in channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelState" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the channel is in a running state or not. (RUNNING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FillerSlate" /></td>
    <td><code>object</code></td>
    <td>Slate VOD source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LogConfiguration" /></td>
    <td><code>object</code></td>
    <td>The log configuration for the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>The channel's output properties.</td>
</tr>
<tr>
    <td><CopyableCode code="PlaybackMode" /></td>
    <td><code>string</code></td>
    <td>The channel's playback mode.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>The channel's tier.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeShiftConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for time-shifted viewing.</td>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Audiences" /></td>
    <td><code>array</code></td>
    <td>The list of audiences defined in channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelState" /></td>
    <td><code>string</code></td>
    <td>Returns the state whether the channel is running or not.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FillerSlate" /></td>
    <td><code>object</code></td>
    <td>Slate VOD source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LogConfiguration" /></td>
    <td><code>object</code></td>
    <td>The log configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>The channel's output properties.</td>
</tr>
<tr>
    <td><CopyableCode code="PlaybackMode" /></td>
    <td><code>string</code></td>
    <td>The type of playback mode for this channel. LINEAR - Programs play back-to-back only once. LOOP - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>The tier for this channel. STANDARD tier channels can contain live programs.</td>
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
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about the channels that are associated with the current AWS account.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PlaybackMode"><code>PlaybackMode</code></a></td>
    <td></td>
    <td>Creates a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#configure_logs_for_channel"><CopyableCode code="configure_logs_for_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelName"><code>ChannelName</code></a>, <a href="#parameter-LogTypes"><code>LogTypes</code></a></td>
    <td></td>
    <td>Configures Amazon CloudWatch log settings for a channel.</td>
</tr>
<tr>
    <td><a href="#start_channel"><CopyableCode code="start_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_channel"><CopyableCode code="stop_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.</td>
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
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than MaxResults channels, use the value of NextToken in the response to get the next page of results. The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than MaxResults items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the NextToken value from each response until the response no longer includes a NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results. For the first ListChannels request, omit this value. For subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. Continue making requests until the response no longer includes a NextToken value, which indicates that all results have been retrieved.</td>
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

Describes a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.

```sql
SELECT
Arn,
Audiences,
ChannelName,
ChannelState,
CreationTime,
FillerSlate,
LastModifiedTime,
LogConfiguration,
Outputs,
PlaybackMode,
Tags,
Tier,
TimeShiftConfiguration
FROM aws.mediatailor.channels
WHERE channel_name = '{{ channel_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Retrieves information about the channels that are associated with the current AWS account.

```sql
SELECT
Arn,
Audiences,
ChannelName,
ChannelState,
CreationTime,
FillerSlate,
LastModifiedTime,
LogConfiguration,
Outputs,
PlaybackMode,
Tags,
Tier
FROM aws.mediatailor.channels
WHERE region = '{{ region }}' -- required
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

Creates a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.

```sql
INSERT INTO aws.mediatailor.channels (
FillerSlate,
Outputs,
PlaybackMode,
Tags,
Tier,
TimeShiftConfiguration,
Audiences,
channel_name,
region
)
SELECT 
'{{ FillerSlate }}',
'{{ Outputs }}',
'{{ PlaybackMode }}' /* required */,
'{{ Tags }}',
'{{ Tier }}',
'{{ TimeShiftConfiguration }}',
'{{ Audiences }}',
'{{ channel_name }}',
'{{ region }}'
RETURNING
Arn,
Audiences,
ChannelName,
ChannelState,
CreationTime,
FillerSlate,
LastModifiedTime,
Outputs,
PlaybackMode,
Tags,
Tier,
TimeShiftConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: channel_name
      value: "{{ channel_name }}"
      description: Required parameter for the channels resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: FillerSlate
      description: |
        Slate VOD source configuration.
      value:
        SourceLocationName: "{{ SourceLocationName }}"
        VodSourceName: "{{ VodSourceName }}"
    - name: Outputs
      description: |
        An object that represents an object in the CreateChannel request.
      value:
        - DashPlaylistSettings:
            ManifestWindowSeconds: {{ ManifestWindowSeconds }}
            MinBufferTimeSeconds: {{ MinBufferTimeSeconds }}
            MinUpdatePeriodSeconds: {{ MinUpdatePeriodSeconds }}
            SuggestedPresentationDelaySeconds: {{ SuggestedPresentationDelaySeconds }}
          HlsPlaylistSettings:
            ManifestWindowSeconds: {{ ManifestWindowSeconds }}
            AdMarkupType:
              - "{{ AdMarkupType }}"
          ManifestName: "{{ ManifestName }}"
          SourceGroup: "{{ SourceGroup }}"
    - name: PlaybackMode
      value: "{{ PlaybackMode }}"
      valid_values: ['LOOP', 'LINEAR']
    - name: Tags
      value: "{{ Tags }}"
    - name: Tier
      value: "{{ Tier }}"
      valid_values: ['BASIC', 'STANDARD']
    - name: TimeShiftConfiguration
      description: |
        The configuration for time-shifted viewing.
      value:
        MaxTimeDelaySeconds: {{ MaxTimeDelaySeconds }}
    - name: Audiences
      value:
        - "{{ Audiences }}"
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

Updates a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.

```sql
UPDATE aws.mediatailor.channels
SET 
FillerSlate = '{{ FillerSlate }}',
Outputs = '{{ Outputs }}',
TimeShiftConfiguration = '{{ TimeShiftConfiguration }}',
Audiences = '{{ Audiences }}'
WHERE 
channel_name = '{{ channel_name }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
Audiences,
ChannelName,
ChannelState,
CreationTime,
FillerSlate,
LastModifiedTime,
Outputs,
PlaybackMode,
Tags,
Tier,
TimeShiftConfiguration;
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

Deletes a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.

```sql
DELETE FROM aws.mediatailor.channels
WHERE channel_name = '{{ channel_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="configure_logs_for_channel"
    values={[
        { label: 'configure_logs_for_channel', value: 'configure_logs_for_channel' },
        { label: 'start_channel', value: 'start_channel' },
        { label: 'stop_channel', value: 'stop_channel' }
    ]}
>
<TabItem value="configure_logs_for_channel">

Configures Amazon CloudWatch log settings for a channel.

```sql
EXEC aws.mediatailor.channels.configure_logs_for_channel 
@region='{{ region }}' --required 
@@json=
'{
"ChannelName": "{{ ChannelName }}", 
"LogTypes": "{{ LogTypes }}"
}'
;
```
</TabItem>
<TabItem value="start_channel">

Starts a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.

```sql
EXEC aws.mediatailor.channels.start_channel 
@channel_name='{{ channel_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_channel">

Stops a channel. For information about MediaTailor channels, see Working with channels in the MediaTailor User Guide.

```sql
EXEC aws.mediatailor.channels.stop_channel 
@channel_name='{{ channel_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
