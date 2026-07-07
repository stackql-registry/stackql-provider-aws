--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - medialive
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.channels" /></td></tr>
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
    <td><CopyableCode code="AnywhereSettings" /></td>
    <td><code>object</code></td>
    <td>Anywhere settings for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="CdiInputSpecification" /></td>
    <td><code>object</code></td>
    <td>Placeholder documentation for CdiInputSpecification</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelClass" /></td>
    <td><code>string</code></td>
    <td>A standard channel has two encoding pipelines and a single pipeline channel only has one. (STANDARD, SINGLE_PIPELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelEngineVersion" /></td>
    <td><code>object</code></td>
    <td>Placeholder documentation for ChannelEngineVersionResponse</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="Destinations" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfOutputDestination</td>
</tr>
<tr>
    <td><CopyableCode code="EgressEndpoints" /></td>
    <td><code>array</code></td>
    <td>The endpoints where outgoing connections initiate from</td>
</tr>
<tr>
    <td><CopyableCode code="EncoderSettings" /></td>
    <td><code>object</code></td>
    <td>Encoder Settings</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="InferenceSettings" /></td>
    <td><code>object</code></td>
    <td>Include this setting to include Elemental Inference features in this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="InputAttachments" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfInputAttachment</td>
</tr>
<tr>
    <td><CopyableCode code="InputSpecification" /></td>
    <td><code>object</code></td>
    <td>Placeholder documentation for InputSpecification</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedChannelSettings" /></td>
    <td><code>object</code></td>
    <td>Linked Channel Settings for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="LogLevel" /></td>
    <td><code>string</code></td>
    <td>The log level the user wants for their channel. (ERROR, WARNING, INFO, DEBUG, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="Maintenance" /></td>
    <td><code>object</code></td>
    <td>Maintenance settings for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="PipelineDetails" /></td>
    <td><code>array</code></td>
    <td>Runtime details for the pipelines of a running channel.</td>
</tr>
<tr>
    <td><CopyableCode code="PipelinesRunningCount" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for ChannelState (CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED, UPDATING, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="Vpc" /></td>
    <td><code>object</code></td>
    <td>Settings for VPC output</td>
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
    <td><CopyableCode code="AnywhereSettings" /></td>
    <td><code>object</code></td>
    <td>AnywhereSettings settings for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="CdiInputSpecification" /></td>
    <td><code>object</code></td>
    <td>Placeholder documentation for CdiInputSpecification</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelClass" /></td>
    <td><code>string</code></td>
    <td>A standard channel has two encoding pipelines and a single pipeline channel only has one. (STANDARD, SINGLE_PIPELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelEngineVersion" /></td>
    <td><code>object</code></td>
    <td>The engine version that you requested for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="Destinations" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfOutputDestination</td>
</tr>
<tr>
    <td><CopyableCode code="EgressEndpoints" /></td>
    <td><code>array</code></td>
    <td>The endpoints where outgoing connections initiate from</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="InferenceSettings" /></td>
    <td><code>object</code></td>
    <td>Include this setting to include Elemental Inference features in this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="InputAttachments" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOfInputAttachment</td>
</tr>
<tr>
    <td><CopyableCode code="InputSpecification" /></td>
    <td><code>object</code></td>
    <td>Placeholder documentation for InputSpecification</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedChannelSettings" /></td>
    <td><code>object</code></td>
    <td>Linked Channel Settings for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="LogLevel" /></td>
    <td><code>string</code></td>
    <td>The log level the user wants for their channel. (ERROR, WARNING, INFO, DEBUG, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="Maintenance" /></td>
    <td><code>object</code></td>
    <td>Maintenance settings for this channel.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="PipelinesRunningCount" /></td>
    <td><code>integer</code></td>
    <td>The number of currently healthy pipelines.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for ChannelState (CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED, UPDATING, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="UsedChannelEngineVersions" /></td>
    <td><code>array</code></td>
    <td>The engine version that the running pipelines are using.</td>
</tr>
<tr>
    <td><CopyableCode code="Vpc" /></td>
    <td><code>object</code></td>
    <td>Settings for any VPC outputs.</td>
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
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a channel</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Produces list of channels that have been created</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new channel</td>
</tr>
<tr>
    <td><a href="#update_channel_class"><CopyableCode code="update_channel_class" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelClass"><code>ChannelClass</code></a></td>
    <td></td>
    <td>Changes the class of the channel.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a channel.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts deletion of channel. The associated outputs are also deleted.</td>
</tr>
<tr>
    <td><a href="#batch_update_schedule"><CopyableCode code="batch_update_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a channel schedule</td>
</tr>
<tr>
    <td><a href="#restart_channel_pipelines"><CopyableCode code="restart_channel_pipelines" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Restart pipelines in one channel that is currently running.</td>
</tr>
<tr>
    <td><a href="#start_channel"><CopyableCode code="start_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an existing channel</td>
</tr>
<tr>
    <td><a href="#stop_channel"><CopyableCode code="stop_channel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running channel</td>
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
<tr id="parameter-channel_id">
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>A request to stop a running channel</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
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

Gets details about a channel

```sql
SELECT
AnywhereSettings,
Arn,
CdiInputSpecification,
ChannelClass,
ChannelEngineVersion,
ChannelSecurityGroups,
Destinations,
EgressEndpoints,
EncoderSettings,
Id,
InferenceSettings,
InputAttachments,
InputSpecification,
LinkedChannelSettings,
LogLevel,
Maintenance,
Name,
PipelineDetails,
PipelinesRunningCount,
RoleArn,
State,
Tags,
Vpc
FROM aws.medialive.channels
WHERE channel_id = '{{ channel_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Produces list of channels that have been created

```sql
SELECT
AnywhereSettings,
Arn,
CdiInputSpecification,
ChannelClass,
ChannelEngineVersion,
ChannelSecurityGroups,
Destinations,
EgressEndpoints,
Id,
InferenceSettings,
InputAttachments,
InputSpecification,
LinkedChannelSettings,
LogLevel,
Maintenance,
Name,
PipelinesRunningCount,
RoleArn,
State,
Tags,
UsedChannelEngineVersions,
Vpc
FROM aws.medialive.channels
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

Creates a new channel

```sql
INSERT INTO aws.medialive.channels (
CdiInputSpecification,
ChannelClass,
Destinations,
EncoderSettings,
InputAttachments,
InputSpecification,
LogLevel,
Maintenance,
Name,
RequestId,
Reserved,
RoleArn,
Tags,
Vpc,
AnywhereSettings,
ChannelEngineVersion,
DryRun,
LinkedChannelSettings,
ChannelSecurityGroups,
InferenceSettings,
region
)
SELECT 
'{{ CdiInputSpecification }}',
'{{ ChannelClass }}',
'{{ Destinations }}',
'{{ EncoderSettings }}',
'{{ InputAttachments }}',
'{{ InputSpecification }}',
'{{ LogLevel }}',
'{{ Maintenance }}',
'{{ Name }}',
'{{ RequestId }}',
'{{ Reserved }}',
'{{ RoleArn }}',
'{{ Tags }}',
'{{ Vpc }}',
'{{ AnywhereSettings }}',
'{{ ChannelEngineVersion }}',
{{ DryRun }},
'{{ LinkedChannelSettings }}',
'{{ ChannelSecurityGroups }}',
'{{ InferenceSettings }}',
'{{ region }}'
RETURNING
Channel
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
    - name: CdiInputSpecification
      description: |
        Placeholder documentation for CdiInputSpecification
      value:
        Resolution: "{{ Resolution }}"
    - name: ChannelClass
      value: "{{ ChannelClass }}"
      description: |
        A standard channel has two encoding pipelines and a single pipeline channel only has one.
      valid_values: ['STANDARD', 'SINGLE_PIPELINE']
    - name: Destinations
      description: |
        Placeholder documentation for __listOfOutputDestination
      value:
        - Id: "{{ Id }}"
          MediaPackageSettings: "{{ MediaPackageSettings }}"
          MultiplexSettings:
            MultiplexId: "{{ MultiplexId }}"
            ProgramName: "{{ ProgramName }}"
          Settings: "{{ Settings }}"
          SrtSettings: "{{ SrtSettings }}"
          LogicalInterfaceNames: "{{ LogicalInterfaceNames }}"
          MediaConnectRouterSettings: "{{ MediaConnectRouterSettings }}"
    - name: EncoderSettings
      description: |
        Encoder Settings
      value:
        AudioDescriptions:
          - AudioNormalizationSettings:
              Algorithm: "{{ Algorithm }}"
              AlgorithmControl: "{{ AlgorithmControl }}"
              TargetLkfs: {{ TargetLkfs }}
            AudioSelectorName: "{{ AudioSelectorName }}"
            AudioType: "{{ AudioType }}"
            AudioTypeControl: "{{ AudioTypeControl }}"
            AudioWatermarkingSettings:
              NielsenWatermarksSettings:
                NielsenCbetSettings:
                  CbetCheckDigitString: "{{ CbetCheckDigitString }}"
                  CbetStepaside: "{{ CbetStepaside }}"
                  Csid: "{{ Csid }}"
                NielsenDistributionType: "{{ NielsenDistributionType }}"
                NielsenNaesIiNwSettings:
                  CheckDigitString: "{{ CheckDigitString }}"
                  Sid: {{ Sid }}
                  Timezone: "{{ Timezone }}"
            CodecSettings:
              AacSettings:
                Bitrate: {{ Bitrate }}
                CodingMode: "{{ CodingMode }}"
                InputType: "{{ InputType }}"
                Profile: "{{ Profile }}"
                RateControlMode: "{{ RateControlMode }}"
                RawFormat: "{{ RawFormat }}"
                SampleRate: {{ SampleRate }}
                Spec: "{{ Spec }}"
                VbrQuality: "{{ VbrQuality }}"
              Ac3Settings:
                Bitrate: {{ Bitrate }}
                BitstreamMode: "{{ BitstreamMode }}"
                CodingMode: "{{ CodingMode }}"
                Dialnorm: {{ Dialnorm }}
                DrcProfile: "{{ DrcProfile }}"
                LfeFilter: "{{ LfeFilter }}"
                MetadataControl: "{{ MetadataControl }}"
                AttenuationControl: "{{ AttenuationControl }}"
              Eac3AtmosSettings:
                Bitrate: {{ Bitrate }}
                CodingMode: "{{ CodingMode }}"
                Dialnorm: {{ Dialnorm }}
                DrcLine: "{{ DrcLine }}"
                DrcRf: "{{ DrcRf }}"
                HeightTrim: {{ HeightTrim }}
                SurroundTrim: {{ SurroundTrim }}
              Eac3Settings:
                AttenuationControl: "{{ AttenuationControl }}"
                Bitrate: {{ Bitrate }}
                BitstreamMode: "{{ BitstreamMode }}"
                CodingMode: "{{ CodingMode }}"
                DcFilter: "{{ DcFilter }}"
                Dialnorm: {{ Dialnorm }}
                DrcLine: "{{ DrcLine }}"
                DrcRf: "{{ DrcRf }}"
                LfeControl: "{{ LfeControl }}"
                LfeFilter: "{{ LfeFilter }}"
                LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
                LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
                LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
                LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
                MetadataControl: "{{ MetadataControl }}"
                PassthroughControl: "{{ PassthroughControl }}"
                PhaseControl: "{{ PhaseControl }}"
                StereoDownmix: "{{ StereoDownmix }}"
                SurroundExMode: "{{ SurroundExMode }}"
                SurroundMode: "{{ SurroundMode }}"
              Mp2Settings:
                Bitrate: {{ Bitrate }}
                CodingMode: "{{ CodingMode }}"
                SampleRate: {{ SampleRate }}
              PassThroughSettings: "{{ PassThroughSettings }}"
              WavSettings:
                BitDepth: {{ BitDepth }}
                CodingMode: "{{ CodingMode }}"
                SampleRate: {{ SampleRate }}
            LanguageCode: "{{ LanguageCode }}"
            LanguageCodeControl: "{{ LanguageCodeControl }}"
            Name: "{{ Name }}"
            RemixSettings:
              ChannelMappings:
                - InputChannelLevels: "{{ InputChannelLevels }}"
                  OutputChannel: {{ OutputChannel }}
              ChannelsIn: {{ ChannelsIn }}
              ChannelsOut: {{ ChannelsOut }}
            StreamName: "{{ StreamName }}"
            AudioDashRoles: "{{ AudioDashRoles }}"
            DvbDashAccessibility: "{{ DvbDashAccessibility }}"
        AvailBlanking:
          AvailBlankingImage:
            PasswordParam: "{{ PasswordParam }}"
            Uri: "{{ Uri }}"
            Username: "{{ Username }}"
          State: "{{ State }}"
        AvailConfiguration:
          AvailSettings:
            Esam:
              AcquisitionPointId: "{{ AcquisitionPointId }}"
              AdAvailOffset: {{ AdAvailOffset }}
              PasswordParam: "{{ PasswordParam }}"
              PoisEndpoint: "{{ PoisEndpoint }}"
              Username: "{{ Username }}"
              ZoneIdentity: "{{ ZoneIdentity }}"
            Scte35SpliceInsert:
              AdAvailOffset: {{ AdAvailOffset }}
              NoRegionalBlackoutFlag: "{{ NoRegionalBlackoutFlag }}"
              WebDeliveryAllowedFlag: "{{ WebDeliveryAllowedFlag }}"
            Scte35TimeSignalApos:
              AdAvailOffset: {{ AdAvailOffset }}
              NoRegionalBlackoutFlag: "{{ NoRegionalBlackoutFlag }}"
              WebDeliveryAllowedFlag: "{{ WebDeliveryAllowedFlag }}"
          Scte35SegmentationScope: "{{ Scte35SegmentationScope }}"
        BlackoutSlate:
          BlackoutSlateImage:
            PasswordParam: "{{ PasswordParam }}"
            Uri: "{{ Uri }}"
            Username: "{{ Username }}"
          NetworkEndBlackout: "{{ NetworkEndBlackout }}"
          NetworkEndBlackoutImage:
            PasswordParam: "{{ PasswordParam }}"
            Uri: "{{ Uri }}"
            Username: "{{ Username }}"
          NetworkId: "{{ NetworkId }}"
          State: "{{ State }}"
        CaptionDescriptions:
          - Accessibility: "{{ Accessibility }}"
            CaptionSelectorName: "{{ CaptionSelectorName }}"
            DestinationSettings:
              AribDestinationSettings: "{{ AribDestinationSettings }}"
              BurnInDestinationSettings:
                Alignment: "{{ Alignment }}"
                BackgroundColor: "{{ BackgroundColor }}"
                BackgroundOpacity: {{ BackgroundOpacity }}
                Font:
                  PasswordParam: "{{ PasswordParam }}"
                  Uri: "{{ Uri }}"
                  Username: "{{ Username }}"
                FontColor: "{{ FontColor }}"
                FontOpacity: {{ FontOpacity }}
                FontResolution: {{ FontResolution }}
                FontSize: "{{ FontSize }}"
                OutlineColor: "{{ OutlineColor }}"
                OutlineSize: {{ OutlineSize }}
                ShadowColor: "{{ ShadowColor }}"
                ShadowOpacity: {{ ShadowOpacity }}
                ShadowXOffset: {{ ShadowXOffset }}
                ShadowYOffset: {{ ShadowYOffset }}
                TeletextGridControl: "{{ TeletextGridControl }}"
                XPosition: {{ XPosition }}
                YPosition: {{ YPosition }}
                SubtitleRows: "{{ SubtitleRows }}"
              DvbSubDestinationSettings:
                Alignment: "{{ Alignment }}"
                BackgroundColor: "{{ BackgroundColor }}"
                BackgroundOpacity: {{ BackgroundOpacity }}
                Font:
                  PasswordParam: "{{ PasswordParam }}"
                  Uri: "{{ Uri }}"
                  Username: "{{ Username }}"
                FontColor: "{{ FontColor }}"
                FontOpacity: {{ FontOpacity }}
                FontResolution: {{ FontResolution }}
                FontSize: "{{ FontSize }}"
                OutlineColor: "{{ OutlineColor }}"
                OutlineSize: {{ OutlineSize }}
                ShadowColor: "{{ ShadowColor }}"
                ShadowOpacity: {{ ShadowOpacity }}
                ShadowXOffset: {{ ShadowXOffset }}
                ShadowYOffset: {{ ShadowYOffset }}
                TeletextGridControl: "{{ TeletextGridControl }}"
                XPosition: {{ XPosition }}
                YPosition: {{ YPosition }}
                SubtitleRows: "{{ SubtitleRows }}"
              EbuTtDDestinationSettings:
                CopyrightHolder: "{{ CopyrightHolder }}"
                FillLineGap: "{{ FillLineGap }}"
                FontFamily: "{{ FontFamily }}"
                StyleControl: "{{ StyleControl }}"
                DefaultFontSize: {{ DefaultFontSize }}
                DefaultLineHeight: {{ DefaultLineHeight }}
              EmbeddedDestinationSettings: "{{ EmbeddedDestinationSettings }}"
              EmbeddedPlusScte20DestinationSettings: "{{ EmbeddedPlusScte20DestinationSettings }}"
              RtmpCaptionInfoDestinationSettings: "{{ RtmpCaptionInfoDestinationSettings }}"
              Scte20PlusEmbeddedDestinationSettings: "{{ Scte20PlusEmbeddedDestinationSettings }}"
              Scte27DestinationSettings: "{{ Scte27DestinationSettings }}"
              SmpteTtDestinationSettings: "{{ SmpteTtDestinationSettings }}"
              TeletextDestinationSettings: "{{ TeletextDestinationSettings }}"
              TtmlDestinationSettings:
                StyleControl: "{{ StyleControl }}"
              WebvttDestinationSettings:
                StyleControl: "{{ StyleControl }}"
            LanguageCode: "{{ LanguageCode }}"
            LanguageDescription: "{{ LanguageDescription }}"
            Name: "{{ Name }}"
            CaptionDashRoles: "{{ CaptionDashRoles }}"
            DvbDashAccessibility: "{{ DvbDashAccessibility }}"
        FeatureActivations:
          InputPrepareScheduleActions: "{{ InputPrepareScheduleActions }}"
          OutputStaticImageOverlayScheduleActions: "{{ OutputStaticImageOverlayScheduleActions }}"
        GlobalConfiguration:
          InitialAudioGain: {{ InitialAudioGain }}
          InputEndAction: "{{ InputEndAction }}"
          InputLossBehavior:
            BlackFrameMsec: {{ BlackFrameMsec }}
            InputLossImageColor: "{{ InputLossImageColor }}"
            InputLossImageSlate:
              PasswordParam: "{{ PasswordParam }}"
              Uri: "{{ Uri }}"
              Username: "{{ Username }}"
            InputLossImageType: "{{ InputLossImageType }}"
            RepeatFrameMsec: {{ RepeatFrameMsec }}
          OutputLockingMode: "{{ OutputLockingMode }}"
          OutputTimingSource: "{{ OutputTimingSource }}"
          SupportLowFramerateInputs: "{{ SupportLowFramerateInputs }}"
          OutputLockingSettings:
            EpochLockingSettings:
              CustomEpoch: "{{ CustomEpoch }}"
              JamSyncTime: "{{ JamSyncTime }}"
            PipelineLockingSettings:
              PipelineLockingMethod: "{{ PipelineLockingMethod }}"
              CustomEpoch: "{{ CustomEpoch }}"
            DisabledLockingSettings:
              CustomEpoch: "{{ CustomEpoch }}"
        MotionGraphicsConfiguration:
          MotionGraphicsInsertion: "{{ MotionGraphicsInsertion }}"
          MotionGraphicsSettings:
            HtmlMotionGraphicsSettings: "{{ HtmlMotionGraphicsSettings }}"
        NielsenConfiguration:
          DistributorId: "{{ DistributorId }}"
          NielsenPcmToId3Tagging: "{{ NielsenPcmToId3Tagging }}"
        OutputGroups:
          - Name: "{{ Name }}"
            OutputGroupSettings:
              ArchiveGroupSettings:
                ArchiveCdnSettings:
                  ArchiveS3Settings: "{{ ArchiveS3Settings }}"
                Destination:
                  DestinationRefId: "{{ DestinationRefId }}"
                RolloverInterval: {{ RolloverInterval }}
              FrameCaptureGroupSettings:
                Destination:
                  DestinationRefId: "{{ DestinationRefId }}"
                FrameCaptureCdnSettings:
                  FrameCaptureS3Settings: "{{ FrameCaptureS3Settings }}"
              HlsGroupSettings:
                AdMarkers:
                  - "{{ AdMarkers }}"
                BaseUrlContent: "{{ BaseUrlContent }}"
                BaseUrlContent1: "{{ BaseUrlContent1 }}"
                BaseUrlManifest: "{{ BaseUrlManifest }}"
                BaseUrlManifest1: "{{ BaseUrlManifest1 }}"
                CaptionLanguageMappings:
                  - CaptionChannel: {{ CaptionChannel }}
                    LanguageCode: "{{ LanguageCode }}"
                    LanguageDescription: "{{ LanguageDescription }}"
                CaptionLanguageSetting: "{{ CaptionLanguageSetting }}"
                ClientCache: "{{ ClientCache }}"
                CodecSpecification: "{{ CodecSpecification }}"
                ConstantIv: "{{ ConstantIv }}"
                Destination:
                  DestinationRefId: "{{ DestinationRefId }}"
                DirectoryStructure: "{{ DirectoryStructure }}"
                DiscontinuityTags: "{{ DiscontinuityTags }}"
                EncryptionType: "{{ EncryptionType }}"
                HlsCdnSettings:
                  HlsAkamaiSettings: "{{ HlsAkamaiSettings }}"
                  HlsBasicPutSettings: "{{ HlsBasicPutSettings }}"
                  HlsMediaStoreSettings: "{{ HlsMediaStoreSettings }}"
                  HlsS3Settings: "{{ HlsS3Settings }}"
                  HlsWebdavSettings: "{{ HlsWebdavSettings }}"
                HlsId3SegmentTagging: "{{ HlsId3SegmentTagging }}"
                IFrameOnlyPlaylists: "{{ IFrameOnlyPlaylists }}"
                IncompleteSegmentBehavior: "{{ IncompleteSegmentBehavior }}"
                IndexNSegments: {{ IndexNSegments }}
                InputLossAction: "{{ InputLossAction }}"
                IvInManifest: "{{ IvInManifest }}"
                IvSource: "{{ IvSource }}"
                KeepSegments: {{ KeepSegments }}
                KeyFormat: "{{ KeyFormat }}"
                KeyFormatVersions: "{{ KeyFormatVersions }}"
                KeyProviderSettings:
                  StaticKeySettings: "{{ StaticKeySettings }}"
                ManifestCompression: "{{ ManifestCompression }}"
                ManifestDurationFormat: "{{ ManifestDurationFormat }}"
                MinSegmentLength: {{ MinSegmentLength }}
                Mode: "{{ Mode }}"
                OutputSelection: "{{ OutputSelection }}"
                ProgramDateTime: "{{ ProgramDateTime }}"
                ProgramDateTimeClock: "{{ ProgramDateTimeClock }}"
                ProgramDateTimePeriod: {{ ProgramDateTimePeriod }}
                RedundantManifest: "{{ RedundantManifest }}"
                SegmentLength: {{ SegmentLength }}
                SegmentationMode: "{{ SegmentationMode }}"
                SegmentsPerSubdirectory: {{ SegmentsPerSubdirectory }}
                StreamInfResolution: "{{ StreamInfResolution }}"
                TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                TimedMetadataId3Period: {{ TimedMetadataId3Period }}
                TimestampDeltaMilliseconds: {{ TimestampDeltaMilliseconds }}
                TsFileMode: "{{ TsFileMode }}"
              MediaPackageGroupSettings:
                Destination:
                  DestinationRefId: "{{ DestinationRefId }}"
                MediapackageV2GroupSettings:
                  CaptionLanguageMappings: "{{ CaptionLanguageMappings }}"
                  Id3Behavior: "{{ Id3Behavior }}"
                  KlvBehavior: "{{ KlvBehavior }}"
                  NielsenId3Behavior: "{{ NielsenId3Behavior }}"
                  Scte35Type: "{{ Scte35Type }}"
                  SegmentLength: {{ SegmentLength }}
                  SegmentLengthUnits: "{{ SegmentLengthUnits }}"
                  TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                  TimedMetadataId3Period: {{ TimedMetadataId3Period }}
                  TimedMetadataPassthrough: "{{ TimedMetadataPassthrough }}"
                  AdditionalDestinations: "{{ AdditionalDestinations }}"
              MsSmoothGroupSettings:
                AcquisitionPointId: "{{ AcquisitionPointId }}"
                AudioOnlyTimecodeControl: "{{ AudioOnlyTimecodeControl }}"
                CertificateMode: "{{ CertificateMode }}"
                ConnectionRetryInterval: {{ ConnectionRetryInterval }}
                Destination:
                  DestinationRefId: "{{ DestinationRefId }}"
                EventId: "{{ EventId }}"
                EventIdMode: "{{ EventIdMode }}"
                EventStopBehavior: "{{ EventStopBehavior }}"
                FilecacheDuration: {{ FilecacheDuration }}
                FragmentLength: {{ FragmentLength }}
                InputLossAction: "{{ InputLossAction }}"
                NumRetries: {{ NumRetries }}
                RestartDelay: {{ RestartDelay }}
                SegmentationMode: "{{ SegmentationMode }}"
                SendDelayMs: {{ SendDelayMs }}
                SparseTrackType: "{{ SparseTrackType }}"
                StreamManifestBehavior: "{{ StreamManifestBehavior }}"
                TimestampOffset: "{{ TimestampOffset }}"
                TimestampOffsetMode: "{{ TimestampOffsetMode }}"
              MultiplexGroupSettings: "{{ MultiplexGroupSettings }}"
              RtmpGroupSettings:
                AdMarkers:
                  - "{{ AdMarkers }}"
                AuthenticationScheme: "{{ AuthenticationScheme }}"
                CacheFullBehavior: "{{ CacheFullBehavior }}"
                CacheLength: {{ CacheLength }}
                CaptionData: "{{ CaptionData }}"
                InputLossAction: "{{ InputLossAction }}"
                RestartDelay: {{ RestartDelay }}
                IncludeFillerNalUnits: "{{ IncludeFillerNalUnits }}"
              UdpGroupSettings:
                InputLossAction: "{{ InputLossAction }}"
                TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                TimedMetadataId3Period: {{ TimedMetadataId3Period }}
              CmafIngestGroupSettings:
                Destination:
                  DestinationRefId: "{{ DestinationRefId }}"
                NielsenId3Behavior: "{{ NielsenId3Behavior }}"
                Scte35Type: "{{ Scte35Type }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthUnits: "{{ SegmentLengthUnits }}"
                SendDelayMs: {{ SendDelayMs }}
                KlvBehavior: "{{ KlvBehavior }}"
                KlvNameModifier: "{{ KlvNameModifier }}"
                NielsenId3NameModifier: "{{ NielsenId3NameModifier }}"
                Scte35NameModifier: "{{ Scte35NameModifier }}"
                Id3Behavior: "{{ Id3Behavior }}"
                Id3NameModifier: "{{ Id3NameModifier }}"
                CaptionLanguageMappings:
                  - CaptionChannel: {{ CaptionChannel }}
                    LanguageCode: "{{ LanguageCode }}"
                TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                TimedMetadataId3Period: {{ TimedMetadataId3Period }}
                TimedMetadataPassthrough: "{{ TimedMetadataPassthrough }}"
                AdditionalDestinations:
                  - Destination:
                      DestinationRefId: "{{ DestinationRefId }}"
              SrtGroupSettings:
                InputLossAction: "{{ InputLossAction }}"
              MediaConnectRouterGroupSettings:
                AvailabilityZones:
                  - "{{ AvailabilityZones }}"
            Outputs: "{{ Outputs }}"
        TimecodeConfig:
          Source: "{{ Source }}"
          SyncThreshold: {{ SyncThreshold }}
        VideoDescriptions:
          - CodecSettings:
              FrameCaptureSettings:
                CaptureInterval: {{ CaptureInterval }}
                CaptureIntervalUnits: "{{ CaptureIntervalUnits }}"
                TimecodeBurninSettings:
                  FontSize: "{{ FontSize }}"
                  Position: "{{ Position }}"
                  Prefix: "{{ Prefix }}"
              H264Settings:
                AdaptiveQuantization: "{{ AdaptiveQuantization }}"
                AfdSignaling: "{{ AfdSignaling }}"
                Bitrate: {{ Bitrate }}
                BufFillPct: {{ BufFillPct }}
                BufSize: {{ BufSize }}
                ColorMetadata: "{{ ColorMetadata }}"
                ColorSpaceSettings:
                  ColorSpacePassthroughSettings: "{{ ColorSpacePassthroughSettings }}"
                  Rec601Settings: "{{ Rec601Settings }}"
                  Rec709Settings: "{{ Rec709Settings }}"
                EntropyEncoding: "{{ EntropyEncoding }}"
                FilterSettings:
                  TemporalFilterSettings: "{{ TemporalFilterSettings }}"
                  BandwidthReductionFilterSettings: "{{ BandwidthReductionFilterSettings }}"
                FixedAfd: "{{ FixedAfd }}"
                FlickerAq: "{{ FlickerAq }}"
                ForceFieldPictures: "{{ ForceFieldPictures }}"
                FramerateControl: "{{ FramerateControl }}"
                FramerateDenominator: {{ FramerateDenominator }}
                FramerateNumerator: {{ FramerateNumerator }}
                GopBReference: "{{ GopBReference }}"
                GopClosedCadence: {{ GopClosedCadence }}
                GopNumBFrames: {{ GopNumBFrames }}
                GopSize: {{ GopSize }}
                GopSizeUnits: "{{ GopSizeUnits }}"
                Level: "{{ Level }}"
                LookAheadRateControl: "{{ LookAheadRateControl }}"
                MaxBitrate: {{ MaxBitrate }}
                MinIInterval: {{ MinIInterval }}
                NumRefFrames: {{ NumRefFrames }}
                ParControl: "{{ ParControl }}"
                ParDenominator: {{ ParDenominator }}
                ParNumerator: {{ ParNumerator }}
                Profile: "{{ Profile }}"
                QualityLevel: "{{ QualityLevel }}"
                QvbrQualityLevel: {{ QvbrQualityLevel }}
                RateControlMode: "{{ RateControlMode }}"
                ScanType: "{{ ScanType }}"
                SceneChangeDetect: "{{ SceneChangeDetect }}"
                Slices: {{ Slices }}
                Softness: {{ Softness }}
                SpatialAq: "{{ SpatialAq }}"
                SubgopLength: "{{ SubgopLength }}"
                Syntax: "{{ Syntax }}"
                TemporalAq: "{{ TemporalAq }}"
                TimecodeInsertion: "{{ TimecodeInsertion }}"
                TimecodeBurninSettings:
                  FontSize: "{{ FontSize }}"
                  Position: "{{ Position }}"
                  Prefix: "{{ Prefix }}"
                MinQp: {{ MinQp }}
                MinBitrate: {{ MinBitrate }}
              H265Settings:
                AdaptiveQuantization: "{{ AdaptiveQuantization }}"
                AfdSignaling: "{{ AfdSignaling }}"
                AlternativeTransferFunction: "{{ AlternativeTransferFunction }}"
                Bitrate: {{ Bitrate }}
                BufSize: {{ BufSize }}
                ColorMetadata: "{{ ColorMetadata }}"
                ColorSpaceSettings:
                  ColorSpacePassthroughSettings: "{{ ColorSpacePassthroughSettings }}"
                  DolbyVision81Settings: "{{ DolbyVision81Settings }}"
                  Hdr10Settings: "{{ Hdr10Settings }}"
                  Rec601Settings: "{{ Rec601Settings }}"
                  Rec709Settings: "{{ Rec709Settings }}"
                  Hlg2020Settings: "{{ Hlg2020Settings }}"
                FilterSettings:
                  TemporalFilterSettings: "{{ TemporalFilterSettings }}"
                  BandwidthReductionFilterSettings: "{{ BandwidthReductionFilterSettings }}"
                FixedAfd: "{{ FixedAfd }}"
                FlickerAq: "{{ FlickerAq }}"
                FramerateDenominator: {{ FramerateDenominator }}
                FramerateNumerator: {{ FramerateNumerator }}
                GopClosedCadence: {{ GopClosedCadence }}
                GopSize: {{ GopSize }}
                GopSizeUnits: "{{ GopSizeUnits }}"
                Level: "{{ Level }}"
                LookAheadRateControl: "{{ LookAheadRateControl }}"
                MaxBitrate: {{ MaxBitrate }}
                MinIInterval: {{ MinIInterval }}
                ParDenominator: {{ ParDenominator }}
                ParNumerator: {{ ParNumerator }}
                Profile: "{{ Profile }}"
                QvbrQualityLevel: {{ QvbrQualityLevel }}
                RateControlMode: "{{ RateControlMode }}"
                ScanType: "{{ ScanType }}"
                SceneChangeDetect: "{{ SceneChangeDetect }}"
                Slices: {{ Slices }}
                Tier: "{{ Tier }}"
                TimecodeInsertion: "{{ TimecodeInsertion }}"
                TimecodeBurninSettings:
                  FontSize: "{{ FontSize }}"
                  Position: "{{ Position }}"
                  Prefix: "{{ Prefix }}"
                MvOverPictureBoundaries: "{{ MvOverPictureBoundaries }}"
                MvTemporalPredictor: "{{ MvTemporalPredictor }}"
                TileHeight: {{ TileHeight }}
                TilePadding: "{{ TilePadding }}"
                TileWidth: {{ TileWidth }}
                TreeblockSize: "{{ TreeblockSize }}"
                MinQp: {{ MinQp }}
                Deblocking: "{{ Deblocking }}"
                GopBReference: "{{ GopBReference }}"
                GopNumBFrames: {{ GopNumBFrames }}
                MinBitrate: {{ MinBitrate }}
                SubgopLength: "{{ SubgopLength }}"
              Mpeg2Settings:
                AdaptiveQuantization: "{{ AdaptiveQuantization }}"
                AfdSignaling: "{{ AfdSignaling }}"
                ColorMetadata: "{{ ColorMetadata }}"
                ColorSpace: "{{ ColorSpace }}"
                DisplayAspectRatio: "{{ DisplayAspectRatio }}"
                FilterSettings:
                  TemporalFilterSettings: "{{ TemporalFilterSettings }}"
                FixedAfd: "{{ FixedAfd }}"
                FramerateDenominator: {{ FramerateDenominator }}
                FramerateNumerator: {{ FramerateNumerator }}
                GopClosedCadence: {{ GopClosedCadence }}
                GopNumBFrames: {{ GopNumBFrames }}
                GopSize: {{ GopSize }}
                GopSizeUnits: "{{ GopSizeUnits }}"
                ScanType: "{{ ScanType }}"
                SubgopLength: "{{ SubgopLength }}"
                TimecodeInsertion: "{{ TimecodeInsertion }}"
                TimecodeBurninSettings:
                  FontSize: "{{ FontSize }}"
                  Position: "{{ Position }}"
                  Prefix: "{{ Prefix }}"
              Av1Settings:
                AfdSignaling: "{{ AfdSignaling }}"
                BufSize: {{ BufSize }}
                ColorSpaceSettings:
                  ColorSpacePassthroughSettings: "{{ ColorSpacePassthroughSettings }}"
                  Hdr10Settings: "{{ Hdr10Settings }}"
                  Rec601Settings: "{{ Rec601Settings }}"
                  Rec709Settings: "{{ Rec709Settings }}"
                  Hlg2020Settings: "{{ Hlg2020Settings }}"
                FixedAfd: "{{ FixedAfd }}"
                FramerateDenominator: {{ FramerateDenominator }}
                FramerateNumerator: {{ FramerateNumerator }}
                GopSize: {{ GopSize }}
                GopSizeUnits: "{{ GopSizeUnits }}"
                Level: "{{ Level }}"
                LookAheadRateControl: "{{ LookAheadRateControl }}"
                MaxBitrate: {{ MaxBitrate }}
                MinIInterval: {{ MinIInterval }}
                ParDenominator: {{ ParDenominator }}
                ParNumerator: {{ ParNumerator }}
                QvbrQualityLevel: {{ QvbrQualityLevel }}
                SceneChangeDetect: "{{ SceneChangeDetect }}"
                TimecodeBurninSettings:
                  FontSize: "{{ FontSize }}"
                  Position: "{{ Position }}"
                  Prefix: "{{ Prefix }}"
                Bitrate: {{ Bitrate }}
                RateControlMode: "{{ RateControlMode }}"
                MinBitrate: {{ MinBitrate }}
                SpatialAq: "{{ SpatialAq }}"
                TemporalAq: "{{ TemporalAq }}"
                TimecodeInsertion: "{{ TimecodeInsertion }}"
                BitDepth: "{{ BitDepth }}"
            Height: {{ Height }}
            Name: "{{ Name }}"
            RespondToAfd: "{{ RespondToAfd }}"
            ScalingBehavior: "{{ ScalingBehavior }}"
            Sharpness: {{ Sharpness }}
            Width: {{ Width }}
        ThumbnailConfiguration:
          State: "{{ State }}"
        ColorCorrectionSettings:
          GlobalColorCorrections:
            - InputColorSpace: "{{ InputColorSpace }}"
              OutputColorSpace: "{{ OutputColorSpace }}"
              Uri: "{{ Uri }}"
    - name: InputAttachments
      description: |
        Placeholder documentation for __listOfInputAttachment
      value:
        - AutomaticInputFailoverSettings:
            ErrorClearTimeMsec: {{ ErrorClearTimeMsec }}
            FailoverConditions:
              - FailoverConditionSettings:
                  AudioSilenceSettings:
                    AudioSelectorName: "{{ AudioSelectorName }}"
                    AudioSilenceThresholdMsec: {{ AudioSilenceThresholdMsec }}
                  InputLossSettings:
                    InputLossThresholdMsec: {{ InputLossThresholdMsec }}
                  VideoBlackSettings:
                    BlackDetectThreshold: {{ BlackDetectThreshold }}
                    VideoBlackThresholdMsec: {{ VideoBlackThresholdMsec }}
            InputPreference: "{{ InputPreference }}"
            SecondaryInputId: "{{ SecondaryInputId }}"
          InputAttachmentName: "{{ InputAttachmentName }}"
          InputId: "{{ InputId }}"
          InputSettings:
            AudioSelectors:
              - Name: "{{ Name }}"
                SelectorSettings:
                  AudioHlsRenditionSelection:
                    GroupId: "{{ GroupId }}"
                    Name: "{{ Name }}"
                  AudioLanguageSelection:
                    LanguageCode: "{{ LanguageCode }}"
                    LanguageSelectionPolicy: "{{ LanguageSelectionPolicy }}"
                  AudioPidSelection:
                    Pid: {{ Pid }}
                  AudioTrackSelection:
                    Tracks: "{{ Tracks }}"
                    DolbyEDecode: "{{ DolbyEDecode }}"
            CaptionSelectors:
              - LanguageCode: "{{ LanguageCode }}"
                Name: "{{ Name }}"
                SelectorSettings:
                  AncillarySourceSettings:
                    SourceAncillaryChannelNumber: {{ SourceAncillaryChannelNumber }}
                  AribSourceSettings: "{{ AribSourceSettings }}"
                  DvbSubSourceSettings:
                    OcrLanguage: "{{ OcrLanguage }}"
                    Pid: {{ Pid }}
                  EmbeddedSourceSettings:
                    Convert608To708: "{{ Convert608To708 }}"
                    Scte20Detection: "{{ Scte20Detection }}"
                    Source608ChannelNumber: {{ Source608ChannelNumber }}
                    Source608TrackNumber: {{ Source608TrackNumber }}
                  Scte20SourceSettings:
                    Convert608To708: "{{ Convert608To708 }}"
                    Source608ChannelNumber: {{ Source608ChannelNumber }}
                  Scte27SourceSettings:
                    OcrLanguage: "{{ OcrLanguage }}"
                    Pid: {{ Pid }}
                  TeletextSourceSettings:
                    OutputRectangle: "{{ OutputRectangle }}"
                    PageNumber: "{{ PageNumber }}"
            DeblockFilter: "{{ DeblockFilter }}"
            DenoiseFilter: "{{ DenoiseFilter }}"
            FilterStrength: {{ FilterStrength }}
            InputFilter: "{{ InputFilter }}"
            NetworkInputSettings:
              HlsInputSettings:
                Bandwidth: {{ Bandwidth }}
                BufferSegments: {{ BufferSegments }}
                Retries: {{ Retries }}
                RetryInterval: {{ RetryInterval }}
                Scte35Source: "{{ Scte35Source }}"
              ServerValidation: "{{ ServerValidation }}"
              MulticastInputSettings:
                SourceIpAddress: "{{ SourceIpAddress }}"
            Scte35Pid: {{ Scte35Pid }}
            Smpte2038DataPreference: "{{ Smpte2038DataPreference }}"
            SourceEndBehavior: "{{ SourceEndBehavior }}"
            VideoSelector:
              ColorSpace: "{{ ColorSpace }}"
              ColorSpaceSettings:
                Hdr10Settings:
                  MaxCll: {{ MaxCll }}
                  MaxFall: {{ MaxFall }}
              ColorSpaceUsage: "{{ ColorSpaceUsage }}"
              SelectorSettings:
                VideoSelectorPid:
                  Pid: {{ Pid }}
                VideoSelectorProgramId:
                  ProgramId: {{ ProgramId }}
          LogicalInterfaceNames: "{{ LogicalInterfaceNames }}"
    - name: InputSpecification
      description: |
        Placeholder documentation for InputSpecification
      value:
        Codec: "{{ Codec }}"
        MaximumBitrate: "{{ MaximumBitrate }}"
        Resolution: "{{ Resolution }}"
    - name: LogLevel
      value: "{{ LogLevel }}"
      description: |
        The log level the user wants for their channel.
      valid_values: ['ERROR', 'WARNING', 'INFO', 'DEBUG', 'DISABLED']
    - name: Maintenance
      description: |
        Placeholder documentation for MaintenanceCreateSettings
      value:
        MaintenanceDay: "{{ MaintenanceDay }}"
        MaintenanceStartTime: "{{ MaintenanceStartTime }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Reserved
      value: "{{ Reserved }}"
      description: |
        Placeholder documentation for __string
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        Placeholder documentation for __string
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
    - name: Vpc
      description: |
        The properties for a private VPC Output When this property is specified, the output egress addresses will be created in a user specified VPC
      value:
        PublicAddressAllocationIds:
          - "{{ PublicAddressAllocationIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        SubnetIds:
          - "{{ SubnetIds }}"
    - name: AnywhereSettings
      description: |
        Elemental anywhere settings
      value:
        ChannelPlacementGroupId: "{{ ChannelPlacementGroupId }}"
        ClusterId: "{{ ClusterId }}"
    - name: ChannelEngineVersion
      description: |
        Placeholder documentation for ChannelEngineVersionRequest
      value:
        Version: "{{ Version }}"
    - name: DryRun
      value: {{ DryRun }}
      description: |
        Placeholder documentation for __boolean
    - name: LinkedChannelSettings
      description: |
        Configuration for linked channel relationships
      value:
        FollowerChannelSettings:
          LinkedChannelType: "{{ LinkedChannelType }}"
          PrimaryChannelArn: "{{ PrimaryChannelArn }}"
        PrimaryChannelSettings:
          LinkedChannelType: "{{ LinkedChannelType }}"
    - name: ChannelSecurityGroups
      value:
        - "{{ ChannelSecurityGroups }}"
      description: |
        Placeholder documentation for __listOf__string
    - name: InferenceSettings
      description: |
        Configures Elemental Inference features in a channel.
      value:
        FeedArn: "{{ FeedArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel_class"
    values={[
        { label: 'update_channel_class', value: 'update_channel_class' },
        { label: 'update_channel', value: 'update_channel' }
    ]}
>
<TabItem value="update_channel_class">

Changes the class of the channel.

```sql
UPDATE aws.medialive.channels
SET 
ChannelClass = '{{ ChannelClass }}',
Destinations = '{{ Destinations }}'
WHERE 
channel_id = '{{ channel_id }}' --required
AND region = '{{ region }}' --required
AND ChannelClass = '{{ ChannelClass }}' --required
RETURNING
Channel;
```
</TabItem>
<TabItem value="update_channel">

Updates a channel.

```sql
UPDATE aws.medialive.channels
SET 
CdiInputSpecification = '{{ CdiInputSpecification }}',
Destinations = '{{ Destinations }}',
EncoderSettings = '{{ EncoderSettings }}',
InputAttachments = '{{ InputAttachments }}',
InputSpecification = '{{ InputSpecification }}',
LogLevel = '{{ LogLevel }}',
Maintenance = '{{ Maintenance }}',
Name = '{{ Name }}',
RoleArn = '{{ RoleArn }}',
ChannelEngineVersion = '{{ ChannelEngineVersion }}',
DryRun = {{ DryRun }},
AnywhereSettings = '{{ AnywhereSettings }}',
LinkedChannelSettings = '{{ LinkedChannelSettings }}',
ChannelSecurityGroups = '{{ ChannelSecurityGroups }}',
InferenceSettings = '{{ InferenceSettings }}',
SpecialRouterSettings = '{{ SpecialRouterSettings }}'
WHERE 
channel_id = '{{ channel_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Channel;
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

Starts deletion of channel. The associated outputs are also deleted.

```sql
DELETE FROM aws.medialive.channels
WHERE channel_id = '{{ channel_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_schedule"
    values={[
        { label: 'batch_update_schedule', value: 'batch_update_schedule' },
        { label: 'restart_channel_pipelines', value: 'restart_channel_pipelines' },
        { label: 'start_channel', value: 'start_channel' },
        { label: 'stop_channel', value: 'stop_channel' }
    ]}
>
<TabItem value="batch_update_schedule">

Update a channel schedule

```sql
EXEC aws.medialive.channels.batch_update_schedule 
@channel_id='{{ channel_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Creates": "{{ Creates }}", 
"Deletes": "{{ Deletes }}"
}'
;
```
</TabItem>
<TabItem value="restart_channel_pipelines">

Restart pipelines in one channel that is currently running.

```sql
EXEC aws.medialive.channels.restart_channel_pipelines 
@channel_id='{{ channel_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"PipelineIds": "{{ PipelineIds }}"
}'
;
```
</TabItem>
<TabItem value="start_channel">

Starts an existing channel

```sql
EXEC aws.medialive.channels.start_channel 
@channel_id='{{ channel_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_channel">

Stops a running channel

```sql
EXEC aws.medialive.channels.stop_channel 
@channel_id='{{ channel_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
