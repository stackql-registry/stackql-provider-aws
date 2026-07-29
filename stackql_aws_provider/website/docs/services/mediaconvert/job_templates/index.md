--- 
title: job_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - job_templates
  - mediaconvert
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

Creates, updates, deletes, gets or lists a <code>job_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconvert.job_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_template"
    values={[
        { label: 'get_job_template', value: 'get_job_template' },
        { label: 'list_job_templates', value: 'list_job_templates' }
    ]}
>
<TabItem value="get_job_template">

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
    <td><CopyableCode code="acceleration_settings" /></td>
    <td><code>object</code></td>
    <td>Accelerated transcoding can significantly speed up jobs with long, visually complex content.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>An optional category you create to organize your job templates.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for Job template creation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description you create for each job template.</td>
</tr>
<tr>
    <td><CopyableCode code="hop_destinations" /></td>
    <td><code>array</code></td>
    <td>Optional list of hop destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds when the Job template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name you create for each job template. Each name must be unique within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>Relative priority on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.</td>
</tr>
<tr>
    <td><CopyableCode code="status_update_interval" /></td>
    <td><code>string</code></td>
    <td>Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user. (SYSTEM, CUSTOM)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_job_templates">

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
    <td><CopyableCode code="acceleration_settings" /></td>
    <td><code>object</code></td>
    <td>Accelerated transcoding can significantly speed up jobs with long, visually complex content.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>An optional category you create to organize your job templates.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for Job template creation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description you create for each job template.</td>
</tr>
<tr>
    <td><CopyableCode code="hop_destinations" /></td>
    <td><code>array</code></td>
    <td>Optional list of hop destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds when the Job template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name you create for each job template. Each name must be unique within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>Relative priority on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.</td>
</tr>
<tr>
    <td><CopyableCode code="status_update_interval" /></td>
    <td><code>string</code></td>
    <td>Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user. (SYSTEM, CUSTOM)</td>
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
    <td><a href="#get_job_template"><CopyableCode code="get_job_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the JSON for a specific job template.</td>
</tr>
<tr>
    <td><a href="#list_job_templates"><CopyableCode code="list_job_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-category"><code>category</code></a>, <a href="#parameter-listBy"><code>listBy</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-order"><code>order</code></a></td>
    <td>Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array</td>
</tr>
<tr>
    <td><a href="#create_job_template"><CopyableCode code="create_job_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new job template. For information about job templates see the User Guide at http:​//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html</td>
</tr>
<tr>
    <td><a href="#update_job_template"><CopyableCode code="update_job_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modify one of your existing job templates.</td>
</tr>
<tr>
    <td><a href="#delete_job_template"><CopyableCode code="delete_job_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete a job template you have created.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job template to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Optionally, specify a job template category to limit responses to only job templates from that category.</td>
</tr>
<tr id="parameter-listBy">
    <td><CopyableCode code="listBy" /></td>
    <td><code>string</code></td>
    <td>Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Optional. Number of job templates, up to twenty, that will be returned at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Use this string, provided with the response to a previous request, to request the next batch of job templates.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job_template"
    values={[
        { label: 'get_job_template', value: 'get_job_template' },
        { label: 'list_job_templates', value: 'list_job_templates' }
    ]}
>
<TabItem value="get_job_template">

Retrieve the JSON for a specific job template.

```sql
SELECT
acceleration_settings,
arn,
category,
created_at,
description,
hop_destinations,
last_updated,
name,
priority,
queue,
settings,
status_update_interval,
type
FROM aws.mediaconvert.job_templates
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_job_templates">

Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array

```sql
SELECT
acceleration_settings,
arn,
category,
created_at,
description,
hop_destinations,
last_updated,
name,
priority,
queue,
settings,
status_update_interval,
type
FROM aws.mediaconvert.job_templates
WHERE region = '{{ region }}' -- required
AND category = '{{ category }}'
AND listBy = '{{ listBy }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND order = '{{ order }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job_template"
    values={[
        { label: 'create_job_template', value: 'create_job_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job_template">

Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html

```sql
INSERT INTO aws.mediaconvert.job_templates (
AccelerationSettings,
Category,
Description,
HopDestinations,
Name,
Priority,
Queue,
Settings,
StatusUpdateInterval,
Tags,
region
)
SELECT 
'{{ AccelerationSettings }}',
'{{ Category }}',
'{{ Description }}',
'{{ HopDestinations }}',
'{{ Name }}',
{{ Priority }},
'{{ Queue }}',
'{{ Settings }}',
'{{ StatusUpdateInterval }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
job_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: job_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the job_templates resource.
    - name: AccelerationSettings
      description: |
        Accelerated transcoding can significantly speed up jobs with long, visually complex content.
      value:
        Mode: "{{ Mode }}"
    - name: Category
      value: "{{ Category }}"
    - name: Description
      value: "{{ Description }}"
    - name: HopDestinations
      value:
        - Priority: {{ Priority }}
          Queue: "{{ Queue }}"
          WaitMinutes: {{ WaitMinutes }}
    - name: Name
      value: "{{ Name }}"
    - name: Priority
      value: {{ Priority }}
    - name: Queue
      value: "{{ Queue }}"
    - name: Settings
      description: |
        JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
      value:
        AdAvailOffset: {{ AdAvailOffset }}
        AvailBlanking:
          AvailBlankingImage: "{{ AvailBlankingImage }}"
        ColorConversion3DLUTSettings:
          - FileInput: "{{ FileInput }}"
            InputColorSpace: "{{ InputColorSpace }}"
            InputMasteringLuminance: {{ InputMasteringLuminance }}
            OutputColorSpace: "{{ OutputColorSpace }}"
            OutputMasteringLuminance: {{ OutputMasteringLuminance }}
        Esam:
          ManifestConfirmConditionNotification:
            MccXml: "{{ MccXml }}"
          ResponseSignalPreroll: {{ ResponseSignalPreroll }}
          SignalProcessingNotification:
            SccXml: "{{ SccXml }}"
        ExtendedDataServices:
          CopyProtectionAction: "{{ CopyProtectionAction }}"
          VchipAction: "{{ VchipAction }}"
        FollowSource: {{ FollowSource }}
        Inputs:
          - AdvancedInputFilter: "{{ AdvancedInputFilter }}"
            AdvancedInputFilterSettings:
              AddTexture: "{{ AddTexture }}"
              Sharpening: "{{ Sharpening }}"
            AudioSelectorGroups: "{{ AudioSelectorGroups }}"
            AudioSelectors: "{{ AudioSelectors }}"
            CaptionSelectors: "{{ CaptionSelectors }}"
            Crop:
              Height: {{ Height }}
              Width: {{ Width }}
              X: {{ X }}
              Y: {{ Y }}
            DeblockFilter: "{{ DeblockFilter }}"
            DenoiseFilter: "{{ DenoiseFilter }}"
            DolbyVisionMetadataXml: "{{ DolbyVisionMetadataXml }}"
            DynamicAudioSelectors: "{{ DynamicAudioSelectors }}"
            FilterEnable: "{{ FilterEnable }}"
            FilterStrength: {{ FilterStrength }}
            ImageInserter:
              InsertableImages:
                - Duration: {{ Duration }}
                  FadeIn: {{ FadeIn }}
                  FadeOut: {{ FadeOut }}
                  Height: {{ Height }}
                  ImageInserterInput: "{{ ImageInserterInput }}"
                  ImageX: {{ ImageX }}
                  ImageY: {{ ImageY }}
                  Layer: {{ Layer }}
                  Opacity: {{ Opacity }}
                  StartTime: "{{ StartTime }}"
                  Width: {{ Width }}
              SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
            InputClippings: "{{ InputClippings }}"
            InputScanType: "{{ InputScanType }}"
            MultiViewSettings: "{{ MultiViewSettings }}"
            Position:
              Height: {{ Height }}
              Width: {{ Width }}
              X: {{ X }}
              Y: {{ Y }}
            ProgramNumber: {{ ProgramNumber }}
            PsiControl: "{{ PsiControl }}"
            TimecodeSource: "{{ TimecodeSource }}"
            TimecodeStart: "{{ TimecodeStart }}"
            VideoOverlays: "{{ VideoOverlays }}"
            VideoSelector:
              AlphaBehavior: "{{ AlphaBehavior }}"
              ColorSpace: "{{ ColorSpace }}"
              ColorSpaceUsage: "{{ ColorSpaceUsage }}"
              EmbeddedTimecodeOverride: "{{ EmbeddedTimecodeOverride }}"
              Hdr10Metadata:
                BluePrimaryX: {{ BluePrimaryX }}
                BluePrimaryY: {{ BluePrimaryY }}
                GreenPrimaryX: {{ GreenPrimaryX }}
                GreenPrimaryY: {{ GreenPrimaryY }}
                MaxContentLightLevel: {{ MaxContentLightLevel }}
                MaxFrameAverageLightLevel: {{ MaxFrameAverageLightLevel }}
                MaxLuminance: {{ MaxLuminance }}
                MinLuminance: {{ MinLuminance }}
                RedPrimaryX: {{ RedPrimaryX }}
                RedPrimaryY: {{ RedPrimaryY }}
                WhitePointX: {{ WhitePointX }}
                WhitePointY: {{ WhitePointY }}
              MaxLuminance: {{ MaxLuminance }}
              PadVideo: "{{ PadVideo }}"
              Pid: {{ Pid }}
              ProgramNumber: {{ ProgramNumber }}
              Rotate: "{{ Rotate }}"
              SampleRange: "{{ SampleRange }}"
              SelectorType: "{{ SelectorType }}"
              Streams:
                - {{ Streams }}
        KantarWatermark:
          ChannelName: "{{ ChannelName }}"
          ContentReference: "{{ ContentReference }}"
          CredentialsSecretName: "{{ CredentialsSecretName }}"
          FileOffset: {{ FileOffset }}
          KantarLicenseId: {{ KantarLicenseId }}
          KantarServerUrl: "{{ KantarServerUrl }}"
          LogDestination: "{{ LogDestination }}"
          Metadata3: "{{ Metadata3 }}"
          Metadata4: "{{ Metadata4 }}"
          Metadata5: "{{ Metadata5 }}"
          Metadata6: "{{ Metadata6 }}"
          Metadata7: "{{ Metadata7 }}"
          Metadata8: "{{ Metadata8 }}"
        MotionImageInserter:
          Framerate:
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
          Input: "{{ Input }}"
          InsertionMode: "{{ InsertionMode }}"
          Offset:
            ImageX: {{ ImageX }}
            ImageY: {{ ImageY }}
          Playback: "{{ Playback }}"
          StartTime: "{{ StartTime }}"
        NielsenConfiguration:
          BreakoutCode: {{ BreakoutCode }}
          DistributorId: "{{ DistributorId }}"
        NielsenNonLinearWatermark:
          ActiveWatermarkProcess: "{{ ActiveWatermarkProcess }}"
          AdiFilename: "{{ AdiFilename }}"
          AssetId: "{{ AssetId }}"
          AssetName: "{{ AssetName }}"
          CbetSourceId: "{{ CbetSourceId }}"
          EpisodeId: "{{ EpisodeId }}"
          MetadataDestination: "{{ MetadataDestination }}"
          SourceId: {{ SourceId }}
          SourceWatermarkStatus: "{{ SourceWatermarkStatus }}"
          TicServerUrl: "{{ TicServerUrl }}"
          UniqueTicPerAudioTrack: "{{ UniqueTicPerAudioTrack }}"
        OutputGroups:
          - AutomatedEncodingSettings:
              AbrSettings:
                MaxAbrBitrate: {{ MaxAbrBitrate }}
                MaxQualityLevel: {{ MaxQualityLevel }}
                MaxRenditions: {{ MaxRenditions }}
                MinAbrBitrate: {{ MinAbrBitrate }}
                Rules:
                  - AllowedRenditions: "{{ AllowedRenditions }}"
                    ForceIncludeRenditions: "{{ ForceIncludeRenditions }}"
                    MinBottomRenditionSize:
                      Height: {{ Height }}
                      Width: {{ Width }}
                    MinTopRenditionSize:
                      Height: {{ Height }}
                      Width: {{ Width }}
                    Type: "{{ Type }}"
            CustomName: "{{ CustomName }}"
            Name: "{{ Name }}"
            OutputGroupSettings:
              CmafGroupSettings:
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                BaseUrl: "{{ BaseUrl }}"
                ClientCache: "{{ ClientCache }}"
                CodecSpecification: "{{ CodecSpecification }}"
                DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
                DashManifestStyle: "{{ DashManifestStyle }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                Encryption:
                  ClearLead: "{{ ClearLead }}"
                  ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                  EncryptionMethod: "{{ EncryptionMethod }}"
                  InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                  StaticKeyProvider: "{{ StaticKeyProvider }}"
                  Type: "{{ Type }}"
                FragmentLength: {{ FragmentLength }}
                ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
                ImageBasedTrickPlaySettings:
                  IntervalCadence: "{{ IntervalCadence }}"
                  ThumbnailHeight: {{ ThumbnailHeight }}
                  ThumbnailInterval: {{ ThumbnailInterval }}
                  ThumbnailWidth: {{ ThumbnailWidth }}
                  TileHeight: {{ TileHeight }}
                  TileWidth: {{ TileWidth }}
                ManifestCompression: "{{ ManifestCompression }}"
                ManifestDurationFormat: "{{ ManifestDurationFormat }}"
                MinBufferTime: {{ MinBufferTime }}
                MinFinalSegmentLength: {{ MinFinalSegmentLength }}
                MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
                MpdProfile: "{{ MpdProfile }}"
                PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
                SegmentControl: "{{ SegmentControl }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthControl: "{{ SegmentLengthControl }}"
                StreamInfResolution: "{{ StreamInfResolution }}"
                TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
                VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
                WriteDashManifest: "{{ WriteDashManifest }}"
                WriteHlsManifest: "{{ WriteHlsManifest }}"
                WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
              DashIsoGroupSettings:
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                AudioChannelConfigSchemeIdUri: "{{ AudioChannelConfigSchemeIdUri }}"
                BaseUrl: "{{ BaseUrl }}"
                DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
                DashManifestStyle: "{{ DashManifestStyle }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                Encryption:
                  PlaybackDeviceCompatibility: "{{ PlaybackDeviceCompatibility }}"
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                FragmentLength: {{ FragmentLength }}
                HbbtvCompliance: "{{ HbbtvCompliance }}"
                ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
                ImageBasedTrickPlaySettings:
                  IntervalCadence: "{{ IntervalCadence }}"
                  ThumbnailHeight: {{ ThumbnailHeight }}
                  ThumbnailInterval: {{ ThumbnailInterval }}
                  ThumbnailWidth: {{ ThumbnailWidth }}
                  TileHeight: {{ TileHeight }}
                  TileWidth: {{ TileWidth }}
                MinBufferTime: {{ MinBufferTime }}
                MinFinalSegmentLength: {{ MinFinalSegmentLength }}
                MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
                MpdProfile: "{{ MpdProfile }}"
                PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
                SegmentControl: "{{ SegmentControl }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthControl: "{{ SegmentLengthControl }}"
                VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
                WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
              FileGroupSettings:
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
              HlsGroupSettings:
                AdMarkers:
                  - "{{ AdMarkers }}"
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                AudioOnlyHeader: "{{ AudioOnlyHeader }}"
                BaseUrl: "{{ BaseUrl }}"
                CaptionLanguageMappings:
                  - CaptionChannel: {{ CaptionChannel }}
                    CustomLanguageCode: "{{ CustomLanguageCode }}"
                    LanguageCode: "{{ LanguageCode }}"
                    LanguageDescription: "{{ LanguageDescription }}"
                CaptionLanguageSetting: "{{ CaptionLanguageSetting }}"
                CaptionSegmentLengthControl: "{{ CaptionSegmentLengthControl }}"
                ClientCache: "{{ ClientCache }}"
                CodecSpecification: "{{ CodecSpecification }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                DirectoryStructure: "{{ DirectoryStructure }}"
                Encryption:
                  ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                  EncryptionMethod: "{{ EncryptionMethod }}"
                  InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                  OfflineEncrypted: "{{ OfflineEncrypted }}"
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                  StaticKeyProvider: "{{ StaticKeyProvider }}"
                  Type: "{{ Type }}"
                ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
                ImageBasedTrickPlaySettings:
                  IntervalCadence: "{{ IntervalCadence }}"
                  ThumbnailHeight: {{ ThumbnailHeight }}
                  ThumbnailInterval: {{ ThumbnailInterval }}
                  ThumbnailWidth: {{ ThumbnailWidth }}
                  TileHeight: {{ TileHeight }}
                  TileWidth: {{ TileWidth }}
                ManifestCompression: "{{ ManifestCompression }}"
                ManifestDurationFormat: "{{ ManifestDurationFormat }}"
                MinFinalSegmentLength: {{ MinFinalSegmentLength }}
                MinSegmentLength: {{ MinSegmentLength }}
                OutputSelection: "{{ OutputSelection }}"
                ProgramDateTime: "{{ ProgramDateTime }}"
                ProgramDateTimePeriod: {{ ProgramDateTimePeriod }}
                ProgressiveWriteHlsManifest: "{{ ProgressiveWriteHlsManifest }}"
                SegmentControl: "{{ SegmentControl }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthControl: "{{ SegmentLengthControl }}"
                SegmentsPerSubdirectory: {{ SegmentsPerSubdirectory }}
                StreamInfResolution: "{{ StreamInfResolution }}"
                TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
                TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                TimedMetadataId3Period: {{ TimedMetadataId3Period }}
                TimestampDeltaMilliseconds: {{ TimestampDeltaMilliseconds }}
              MsSmoothGroupSettings:
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                AudioDeduplication: "{{ AudioDeduplication }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                Encryption:
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                FragmentLength: {{ FragmentLength }}
                FragmentLengthControl: "{{ FragmentLengthControl }}"
                ManifestEncoding: "{{ ManifestEncoding }}"
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              Type: "{{ Type }}"
            Outputs: "{{ Outputs }}"
        TimecodeConfig:
          Anchor: "{{ Anchor }}"
          Source: "{{ Source }}"
          Start: "{{ Start }}"
          TimestampOffset: "{{ TimestampOffset }}"
        TimedMetadataInsertion:
          Id3Insertions:
            - Id3: "{{ Id3 }}"
              Timecode: "{{ Timecode }}"
    - name: StatusUpdateInterval
      value: "{{ StatusUpdateInterval }}"
      description: |
        Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
      valid_values: ['SECONDS_10', 'SECONDS_12', 'SECONDS_15', 'SECONDS_20', 'SECONDS_30', 'SECONDS_60', 'SECONDS_120', 'SECONDS_180', 'SECONDS_240', 'SECONDS_300', 'SECONDS_360', 'SECONDS_420', 'SECONDS_480', 'SECONDS_540', 'SECONDS_600']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job_template"
    values={[
        { label: 'update_job_template', value: 'update_job_template' }
    ]}
>
<TabItem value="update_job_template">

Modify one of your existing job templates.

```sql
UPDATE aws.mediaconvert.job_templates
SET 
AccelerationSettings = '{{ AccelerationSettings }}',
Category = '{{ Category }}',
Description = '{{ Description }}',
HopDestinations = '{{ HopDestinations }}',
Priority = {{ Priority }},
Queue = '{{ Queue }}',
Settings = '{{ Settings }}',
StatusUpdateInterval = '{{ StatusUpdateInterval }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
job_template;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job_template"
    values={[
        { label: 'delete_job_template', value: 'delete_job_template' }
    ]}
>
<TabItem value="delete_job_template">

Permanently delete a job template you have created.

```sql
DELETE FROM aws.mediaconvert.job_templates
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
