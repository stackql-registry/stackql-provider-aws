--- 
title: presets
hide_title: false
hide_table_of_contents: false
keywords:
  - presets
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

Creates, updates, deletes, gets or lists a <code>presets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="presets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconvert.presets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_preset"
    values={[
        { label: 'get_preset', value: 'get_preset' },
        { label: 'list_presets', value: 'list_presets' }
    ]}
>
<TabItem value="get_preset">

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
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="Category" /></td>
    <td><code>string</code></td>
    <td>An optional category you create to organize your presets.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for preset creation.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description you create for each preset.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds when the preset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name you create for each preset. Each name must be unique within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>Settings for preset</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user. (SYSTEM, CUSTOM)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_presets">

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
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="Category" /></td>
    <td><code>string</code></td>
    <td>An optional category you create to organize your presets.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for preset creation.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description you create for each preset.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds when the preset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name you create for each preset. Each name must be unique within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>Settings for preset</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user. (SYSTEM, CUSTOM)</td>
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
    <td><a href="#get_preset"><CopyableCode code="get_preset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the JSON for a specific preset.</td>
</tr>
<tr>
    <td><a href="#list_presets"><CopyableCode code="list_presets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-category"><code>category</code></a>, <a href="#parameter-listBy"><code>listBy</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-order"><code>order</code></a></td>
    <td>Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.</td>
</tr>
<tr>
    <td><a href="#create_preset"><CopyableCode code="create_preset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new preset. For information about job templates see the User Guide at http:​//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html</td>
</tr>
<tr>
    <td><a href="#update_preset"><CopyableCode code="update_preset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modify one of your existing presets.</td>
</tr>
<tr>
    <td><a href="#delete_preset"><CopyableCode code="delete_preset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete a preset you have created.</td>
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
    <td>The name of the preset to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-category">
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Optionally, specify a preset category to limit responses to only presets from that category.</td>
</tr>
<tr id="parameter-listBy">
    <td><CopyableCode code="listBy" /></td>
    <td><code>string</code></td>
    <td>Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Optional. Number of presets, up to twenty, that will be returned at one time</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Use this string, provided with the response to a previous request, to request the next batch of presets.</td>
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
    defaultValue="get_preset"
    values={[
        { label: 'get_preset', value: 'get_preset' },
        { label: 'list_presets', value: 'list_presets' }
    ]}
>
<TabItem value="get_preset">

Retrieve the JSON for a specific preset.

```sql
SELECT
Arn,
Category,
CreatedAt,
Description,
LastUpdated,
Name,
Settings,
Type
FROM aws.mediaconvert.presets
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_presets">

Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.

```sql
SELECT
Arn,
Category,
CreatedAt,
Description,
LastUpdated,
Name,
Settings,
Type
FROM aws.mediaconvert.presets
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
    defaultValue="create_preset"
    values={[
        { label: 'create_preset', value: 'create_preset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_preset">

Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html

```sql
INSERT INTO aws.mediaconvert.presets (
Category,
Description,
Name,
Settings,
Tags,
region
)
SELECT 
'{{ Category }}',
'{{ Description }}',
'{{ Name }}',
'{{ Settings }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Preset
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: presets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the presets resource.
    - name: Category
      value: "{{ Category }}"
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: Settings
      description: |
        Settings for preset
      value:
        AudioDescriptions:
          - AudioChannelTaggingSettings:
              ChannelTag: "{{ ChannelTag }}"
              ChannelTags:
                - "{{ ChannelTags }}"
            AudioNormalizationSettings:
              Algorithm: "{{ Algorithm }}"
              AlgorithmControl: "{{ AlgorithmControl }}"
              CorrectionGateLevel: {{ CorrectionGateLevel }}
              LoudnessLogging: "{{ LoudnessLogging }}"
              PeakCalculation: "{{ PeakCalculation }}"
              TargetLkfs: {{ TargetLkfs }}
              TruePeakLimiterThreshold: {{ TruePeakLimiterThreshold }}
            AudioPitchCorrectionSettings:
              SlowPalPitchCorrection: "{{ SlowPalPitchCorrection }}"
            AudioSourceName: "{{ AudioSourceName }}"
            AudioType: {{ AudioType }}
            AudioTypeControl: "{{ AudioTypeControl }}"
            CodecSettings:
              AacSettings:
                AudioDescriptionBroadcasterMix: "{{ AudioDescriptionBroadcasterMix }}"
                Bitrate: {{ Bitrate }}
                CodecProfile: "{{ CodecProfile }}"
                CodingMode: "{{ CodingMode }}"
                LoudnessMeasurementMode: "{{ LoudnessMeasurementMode }}"
                RapInterval: {{ RapInterval }}
                RateControlMode: "{{ RateControlMode }}"
                RawFormat: "{{ RawFormat }}"
                SampleRate: {{ SampleRate }}
                Specification: "{{ Specification }}"
                TargetLoudnessRange: {{ TargetLoudnessRange }}
                VbrQuality: "{{ VbrQuality }}"
              Ac3Settings:
                Bitrate: {{ Bitrate }}
                BitstreamMode: "{{ BitstreamMode }}"
                CodingMode: "{{ CodingMode }}"
                Dialnorm: {{ Dialnorm }}
                DynamicRangeCompressionLine: "{{ DynamicRangeCompressionLine }}"
                DynamicRangeCompressionProfile: "{{ DynamicRangeCompressionProfile }}"
                DynamicRangeCompressionRf: "{{ DynamicRangeCompressionRf }}"
                LfeFilter: "{{ LfeFilter }}"
                MetadataControl: "{{ MetadataControl }}"
                SampleRate: {{ SampleRate }}
              Ac4Settings:
                Bitrate: {{ Bitrate }}
                BitstreamMode: "{{ BitstreamMode }}"
                CodingMode: "{{ CodingMode }}"
                DynamicRangeCompressionFlatPanelTv: "{{ DynamicRangeCompressionFlatPanelTv }}"
                DynamicRangeCompressionHomeTheater: "{{ DynamicRangeCompressionHomeTheater }}"
                DynamicRangeCompressionPortableHeadphones: "{{ DynamicRangeCompressionPortableHeadphones }}"
                DynamicRangeCompressionPortableSpeakers: "{{ DynamicRangeCompressionPortableSpeakers }}"
                LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
                LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
                LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
                LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
                SampleRate: {{ SampleRate }}
                StereoDownmix: "{{ StereoDownmix }}"
              AiffSettings:
                BitDepth: {{ BitDepth }}
                Channels: {{ Channels }}
                SampleRate: {{ SampleRate }}
              Codec: "{{ Codec }}"
              Eac3AtmosSettings:
                Bitrate: {{ Bitrate }}
                BitstreamMode: "{{ BitstreamMode }}"
                CodingMode: "{{ CodingMode }}"
                DialogueIntelligence: "{{ DialogueIntelligence }}"
                DownmixControl: "{{ DownmixControl }}"
                DynamicRangeCompressionLine: "{{ DynamicRangeCompressionLine }}"
                DynamicRangeCompressionRf: "{{ DynamicRangeCompressionRf }}"
                DynamicRangeControl: "{{ DynamicRangeControl }}"
                LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
                LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
                LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
                LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
                MeteringMode: "{{ MeteringMode }}"
                SampleRate: {{ SampleRate }}
                SpeechThreshold: {{ SpeechThreshold }}
                StereoDownmix: "{{ StereoDownmix }}"
                SurroundExMode: "{{ SurroundExMode }}"
              Eac3Settings:
                AttenuationControl: "{{ AttenuationControl }}"
                Bitrate: {{ Bitrate }}
                BitstreamMode: "{{ BitstreamMode }}"
                CodingMode: "{{ CodingMode }}"
                DcFilter: "{{ DcFilter }}"
                Dialnorm: {{ Dialnorm }}
                DynamicRangeCompressionLine: "{{ DynamicRangeCompressionLine }}"
                DynamicRangeCompressionRf: "{{ DynamicRangeCompressionRf }}"
                LfeControl: "{{ LfeControl }}"
                LfeFilter: "{{ LfeFilter }}"
                LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
                LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
                LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
                LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
                MetadataControl: "{{ MetadataControl }}"
                PassthroughControl: "{{ PassthroughControl }}"
                PhaseControl: "{{ PhaseControl }}"
                SampleRate: {{ SampleRate }}
                StereoDownmix: "{{ StereoDownmix }}"
                SurroundExMode: "{{ SurroundExMode }}"
                SurroundMode: "{{ SurroundMode }}"
              FlacSettings:
                BitDepth: {{ BitDepth }}
                Channels: {{ Channels }}
                SampleRate: {{ SampleRate }}
              Mp2Settings:
                AudioDescriptionMix: "{{ AudioDescriptionMix }}"
                Bitrate: {{ Bitrate }}
                Channels: {{ Channels }}
                SampleRate: {{ SampleRate }}
              Mp3Settings:
                Bitrate: {{ Bitrate }}
                Channels: {{ Channels }}
                RateControlMode: "{{ RateControlMode }}"
                SampleRate: {{ SampleRate }}
                VbrQuality: {{ VbrQuality }}
              OpusSettings:
                Bitrate: {{ Bitrate }}
                Channels: {{ Channels }}
                SampleRate: {{ SampleRate }}
              VorbisSettings:
                Channels: {{ Channels }}
                SampleRate: {{ SampleRate }}
                VbrQuality: {{ VbrQuality }}
              WavSettings:
                BitDepth: {{ BitDepth }}
                Channels: {{ Channels }}
                Format: "{{ Format }}"
                SampleRate: {{ SampleRate }}
            CustomLanguageCode: "{{ CustomLanguageCode }}"
            LanguageCode: "{{ LanguageCode }}"
            LanguageCodeControl: "{{ LanguageCodeControl }}"
            RemixSettings:
              AudioDescriptionAudioChannel: {{ AudioDescriptionAudioChannel }}
              AudioDescriptionDataChannel: {{ AudioDescriptionDataChannel }}
              ChannelMapping:
                OutputChannels:
                  - InputChannels: "{{ InputChannels }}"
                    InputChannelsFineTune: "{{ InputChannelsFineTune }}"
              ChannelsIn: {{ ChannelsIn }}
              ChannelsOut: {{ ChannelsOut }}
            StreamName: "{{ StreamName }}"
        CaptionDescriptions:
          - CustomLanguageCode: "{{ CustomLanguageCode }}"
            DestinationSettings:
              BurninDestinationSettings:
                Alignment: "{{ Alignment }}"
                ApplyFontColor: "{{ ApplyFontColor }}"
                BackgroundColor: "{{ BackgroundColor }}"
                BackgroundOpacity: {{ BackgroundOpacity }}
                FallbackFont: "{{ FallbackFont }}"
                FontColor: "{{ FontColor }}"
                FontFileBold: "{{ FontFileBold }}"
                FontFileBoldItalic: "{{ FontFileBoldItalic }}"
                FontFileItalic: "{{ FontFileItalic }}"
                FontFileRegular: "{{ FontFileRegular }}"
                FontOpacity: {{ FontOpacity }}
                FontResolution: {{ FontResolution }}
                FontScript: "{{ FontScript }}"
                FontSize: {{ FontSize }}
                HexFontColor: "{{ HexFontColor }}"
                OutlineColor: "{{ OutlineColor }}"
                OutlineSize: {{ OutlineSize }}
                RemoveRubyReserveAttributes: "{{ RemoveRubyReserveAttributes }}"
                ShadowColor: "{{ ShadowColor }}"
                ShadowOpacity: {{ ShadowOpacity }}
                ShadowXOffset: {{ ShadowXOffset }}
                ShadowYOffset: {{ ShadowYOffset }}
                StylePassthrough: "{{ StylePassthrough }}"
                TeletextSpacing: "{{ TeletextSpacing }}"
                XPosition: {{ XPosition }}
                YPosition: {{ YPosition }}
              DestinationType: "{{ DestinationType }}"
              DvbSubDestinationSettings:
                Alignment: "{{ Alignment }}"
                ApplyFontColor: "{{ ApplyFontColor }}"
                BackgroundColor: "{{ BackgroundColor }}"
                BackgroundOpacity: {{ BackgroundOpacity }}
                DdsHandling: "{{ DdsHandling }}"
                DdsXCoordinate: {{ DdsXCoordinate }}
                DdsYCoordinate: {{ DdsYCoordinate }}
                FallbackFont: "{{ FallbackFont }}"
                FontColor: "{{ FontColor }}"
                FontFileBold: "{{ FontFileBold }}"
                FontFileBoldItalic: "{{ FontFileBoldItalic }}"
                FontFileItalic: "{{ FontFileItalic }}"
                FontFileRegular: "{{ FontFileRegular }}"
                FontOpacity: {{ FontOpacity }}
                FontResolution: {{ FontResolution }}
                FontScript: "{{ FontScript }}"
                FontSize: {{ FontSize }}
                Height: {{ Height }}
                HexFontColor: "{{ HexFontColor }}"
                OutlineColor: "{{ OutlineColor }}"
                OutlineSize: {{ OutlineSize }}
                ShadowColor: "{{ ShadowColor }}"
                ShadowOpacity: {{ ShadowOpacity }}
                ShadowXOffset: {{ ShadowXOffset }}
                ShadowYOffset: {{ ShadowYOffset }}
                StylePassthrough: "{{ StylePassthrough }}"
                SubtitlingType: "{{ SubtitlingType }}"
                TeletextSpacing: "{{ TeletextSpacing }}"
                Width: {{ Width }}
                XPosition: {{ XPosition }}
                YPosition: {{ YPosition }}
              EmbeddedDestinationSettings:
                Destination608ChannelNumber: {{ Destination608ChannelNumber }}
                Destination708ServiceNumber: {{ Destination708ServiceNumber }}
              ImscDestinationSettings:
                Accessibility: "{{ Accessibility }}"
                StylePassthrough: "{{ StylePassthrough }}"
              SccDestinationSettings:
                Framerate: "{{ Framerate }}"
              SrtDestinationSettings:
                StylePassthrough: "{{ StylePassthrough }}"
              TeletextDestinationSettings:
                PageNumber: "{{ PageNumber }}"
                PageTypes:
                  - "{{ PageTypes }}"
              TtmlDestinationSettings:
                StylePassthrough: "{{ StylePassthrough }}"
              WebvttDestinationSettings:
                Accessibility: "{{ Accessibility }}"
                StylePassthrough: "{{ StylePassthrough }}"
            LanguageCode: "{{ LanguageCode }}"
            LanguageDescription: "{{ LanguageDescription }}"
        ContainerSettings:
          CmfcSettings:
            AudioDuration: "{{ AudioDuration }}"
            AudioGroupId: "{{ AudioGroupId }}"
            AudioRenditionSets: "{{ AudioRenditionSets }}"
            AudioTrackType: "{{ AudioTrackType }}"
            C2paManifest: "{{ C2paManifest }}"
            CertificateSecret: "{{ CertificateSecret }}"
            DescriptiveVideoServiceFlag: "{{ DescriptiveVideoServiceFlag }}"
            IFrameOnlyManifest: "{{ IFrameOnlyManifest }}"
            KlvMetadata: "{{ KlvMetadata }}"
            ManifestMetadataSignaling: "{{ ManifestMetadataSignaling }}"
            Scte35Esam: "{{ Scte35Esam }}"
            Scte35Source: "{{ Scte35Source }}"
            SigningKmsKey: "{{ SigningKmsKey }}"
            TimedMetadata: "{{ TimedMetadata }}"
            TimedMetadataBoxVersion: "{{ TimedMetadataBoxVersion }}"
            TimedMetadataSchemeIdUri: "{{ TimedMetadataSchemeIdUri }}"
            TimedMetadataValue: "{{ TimedMetadataValue }}"
          Container: "{{ Container }}"
          F4vSettings:
            MoovPlacement: "{{ MoovPlacement }}"
          M2tsSettings:
            AudioBufferModel: "{{ AudioBufferModel }}"
            AudioDuration: "{{ AudioDuration }}"
            AudioFramesPerPes: {{ AudioFramesPerPes }}
            AudioPids:
              - {{ AudioPids }}
            AudioPtsOffsetDelta: {{ AudioPtsOffsetDelta }}
            Bitrate: {{ Bitrate }}
            BufferModel: "{{ BufferModel }}"
            DataPTSControl: "{{ DataPTSControl }}"
            DvbNitSettings:
              NetworkId: {{ NetworkId }}
              NetworkName: "{{ NetworkName }}"
              NitInterval: {{ NitInterval }}
            DvbSdtSettings:
              OutputSdt: "{{ OutputSdt }}"
              SdtInterval: {{ SdtInterval }}
              ServiceName: "{{ ServiceName }}"
              ServiceProviderName: "{{ ServiceProviderName }}"
            DvbSubPids:
              - {{ DvbSubPids }}
            DvbTdtSettings:
              TdtInterval: {{ TdtInterval }}
            DvbTeletextPid: {{ DvbTeletextPid }}
            EbpAudioInterval: "{{ EbpAudioInterval }}"
            EbpPlacement: "{{ EbpPlacement }}"
            EsRateInPes: "{{ EsRateInPes }}"
            ForceTsVideoEbpOrder: "{{ ForceTsVideoEbpOrder }}"
            FragmentTime: {{ FragmentTime }}
            KlvMetadata: "{{ KlvMetadata }}"
            MaxPcrInterval: {{ MaxPcrInterval }}
            MinEbpInterval: {{ MinEbpInterval }}
            NielsenId3: "{{ NielsenId3 }}"
            NullPacketBitrate: {{ NullPacketBitrate }}
            PatInterval: {{ PatInterval }}
            PcrControl: "{{ PcrControl }}"
            PcrPid: {{ PcrPid }}
            PmtInterval: {{ PmtInterval }}
            PmtPid: {{ PmtPid }}
            PreventBufferUnderflow: "{{ PreventBufferUnderflow }}"
            PrivateMetadataPid: {{ PrivateMetadataPid }}
            ProgramNumber: {{ ProgramNumber }}
            PtsOffset: {{ PtsOffset }}
            PtsOffsetMode: "{{ PtsOffsetMode }}"
            RateMode: "{{ RateMode }}"
            Scte35Esam:
              Scte35EsamPid: {{ Scte35EsamPid }}
            Scte35Pid: {{ Scte35Pid }}
            Scte35Source: "{{ Scte35Source }}"
            SegmentationMarkers: "{{ SegmentationMarkers }}"
            SegmentationStyle: "{{ SegmentationStyle }}"
            SegmentationTime: {{ SegmentationTime }}
            TimedMetadataPid: {{ TimedMetadataPid }}
            TransportStreamId: {{ TransportStreamId }}
            VideoPid: {{ VideoPid }}
          M3u8Settings:
            AudioDuration: "{{ AudioDuration }}"
            AudioFramesPerPes: {{ AudioFramesPerPes }}
            AudioPids:
              - {{ AudioPids }}
            AudioPtsOffsetDelta: {{ AudioPtsOffsetDelta }}
            DataPTSControl: "{{ DataPTSControl }}"
            MaxPcrInterval: {{ MaxPcrInterval }}
            NielsenId3: "{{ NielsenId3 }}"
            PatInterval: {{ PatInterval }}
            PcrControl: "{{ PcrControl }}"
            PcrPid: {{ PcrPid }}
            PmtInterval: {{ PmtInterval }}
            PmtPid: {{ PmtPid }}
            PrivateMetadataPid: {{ PrivateMetadataPid }}
            ProgramNumber: {{ ProgramNumber }}
            PtsOffset: {{ PtsOffset }}
            PtsOffsetMode: "{{ PtsOffsetMode }}"
            Scte35Pid: {{ Scte35Pid }}
            Scte35Source: "{{ Scte35Source }}"
            TimedMetadata: "{{ TimedMetadata }}"
            TimedMetadataPid: {{ TimedMetadataPid }}
            TransportStreamId: {{ TransportStreamId }}
            VideoPid: {{ VideoPid }}
          MovSettings:
            ClapAtom: "{{ ClapAtom }}"
            CslgAtom: "{{ CslgAtom }}"
            Mpeg2FourCCControl: "{{ Mpeg2FourCCControl }}"
            PaddingControl: "{{ PaddingControl }}"
            Reference: "{{ Reference }}"
          Mp4Settings:
            AudioDuration: "{{ AudioDuration }}"
            C2paManifest: "{{ C2paManifest }}"
            CertificateSecret: "{{ CertificateSecret }}"
            CslgAtom: "{{ CslgAtom }}"
            CttsVersion: {{ CttsVersion }}
            FreeSpaceBox: "{{ FreeSpaceBox }}"
            MoovPlacement: "{{ MoovPlacement }}"
            Mp4MajorBrand: "{{ Mp4MajorBrand }}"
            SigningKmsKey: "{{ SigningKmsKey }}"
          MpdSettings:
            AccessibilityCaptionHints: "{{ AccessibilityCaptionHints }}"
            AudioDuration: "{{ AudioDuration }}"
            C2paManifest: "{{ C2paManifest }}"
            CaptionContainerType: "{{ CaptionContainerType }}"
            CertificateSecret: "{{ CertificateSecret }}"
            KlvMetadata: "{{ KlvMetadata }}"
            ManifestMetadataSignaling: "{{ ManifestMetadataSignaling }}"
            Scte35Esam: "{{ Scte35Esam }}"
            Scte35Source: "{{ Scte35Source }}"
            SigningKmsKey: "{{ SigningKmsKey }}"
            TimedMetadata: "{{ TimedMetadata }}"
            TimedMetadataBoxVersion: "{{ TimedMetadataBoxVersion }}"
            TimedMetadataSchemeIdUri: "{{ TimedMetadataSchemeIdUri }}"
            TimedMetadataValue: "{{ TimedMetadataValue }}"
          MxfSettings:
            AfdSignaling: "{{ AfdSignaling }}"
            Profile: "{{ Profile }}"
            UncompressedAudioWrapping: "{{ UncompressedAudioWrapping }}"
            XavcProfileSettings:
              DurationMode: "{{ DurationMode }}"
              MaxAncDataSize: {{ MaxAncDataSize }}
        VideoDescription:
          AfdSignaling: "{{ AfdSignaling }}"
          AntiAlias: "{{ AntiAlias }}"
          ChromaPositionMode: "{{ ChromaPositionMode }}"
          CodecSettings:
            Av1Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              BitDepth: "{{ BitDepth }}"
              FilmGrainSynthesis: "{{ FilmGrainSynthesis }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopSize: {{ GopSize }}
              MaxBitrate: {{ MaxBitrate }}
              NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              QvbrSettings:
                QvbrQualityLevel: {{ QvbrQualityLevel }}
                QvbrQualityLevelFineTune: {{ QvbrQualityLevelFineTune }}
              RateControlMode: "{{ RateControlMode }}"
              Slices: {{ Slices }}
              SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
            AvcIntraSettings:
              AvcIntraClass: "{{ AvcIntraClass }}"
              AvcIntraUhdSettings:
                QualityTuningLevel: "{{ QualityTuningLevel }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              InterlaceMode: "{{ InterlaceMode }}"
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SlowPal: "{{ SlowPal }}"
              Telecine: "{{ Telecine }}"
            Codec: "{{ Codec }}"
            FrameCaptureSettings:
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              MaxCaptures: {{ MaxCaptures }}
              Quality: {{ Quality }}
            GifSettings:
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
            H264Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              BandwidthReductionFilter:
                Sharpening: "{{ Sharpening }}"
                Strength: "{{ Strength }}"
              Bitrate: {{ Bitrate }}
              CodecLevel: "{{ CodecLevel }}"
              CodecProfile: "{{ CodecProfile }}"
              DynamicSubGop: "{{ DynamicSubGop }}"
              EndOfStreamMarkers: "{{ EndOfStreamMarkers }}"
              EntropyEncoding: "{{ EntropyEncoding }}"
              FieldEncoding: "{{ FieldEncoding }}"
              FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopBReference: "{{ GopBReference }}"
              GopClosedCadence: {{ GopClosedCadence }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              HrdBufferFinalFillPercentage: {{ HrdBufferFinalFillPercentage }}
              HrdBufferInitialFillPercentage: {{ HrdBufferInitialFillPercentage }}
              HrdBufferSize: {{ HrdBufferSize }}
              InterlaceMode: "{{ InterlaceMode }}"
              MaxBitrate: {{ MaxBitrate }}
              MinIInterval: {{ MinIInterval }}
              NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
              NumberReferenceFrames: {{ NumberReferenceFrames }}
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              QvbrSettings:
                MaxAverageBitrate: {{ MaxAverageBitrate }}
                QvbrQualityLevel: {{ QvbrQualityLevel }}
                QvbrQualityLevelFineTune: {{ QvbrQualityLevelFineTune }}
              RateControlMode: "{{ RateControlMode }}"
              RepeatPps: "{{ RepeatPps }}"
              SaliencyAwareEncoding: "{{ SaliencyAwareEncoding }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SceneChangeDetect: "{{ SceneChangeDetect }}"
              Slices: {{ Slices }}
              SlowPal: "{{ SlowPal }}"
              Softness: {{ Softness }}
              SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
              Syntax: "{{ Syntax }}"
              Telecine: "{{ Telecine }}"
              TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
              UnregisteredSeiTimecode: "{{ UnregisteredSeiTimecode }}"
              WriteMp4PackagingType: "{{ WriteMp4PackagingType }}"
            H265Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              AlternateTransferFunctionSei: "{{ AlternateTransferFunctionSei }}"
              BandwidthReductionFilter:
                Sharpening: "{{ Sharpening }}"
                Strength: "{{ Strength }}"
              Bitrate: {{ Bitrate }}
              CodecLevel: "{{ CodecLevel }}"
              CodecProfile: "{{ CodecProfile }}"
              Deblocking: "{{ Deblocking }}"
              DynamicSubGop: "{{ DynamicSubGop }}"
              EndOfStreamMarkers: "{{ EndOfStreamMarkers }}"
              FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopBReference: "{{ GopBReference }}"
              GopClosedCadence: {{ GopClosedCadence }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              HrdBufferFinalFillPercentage: {{ HrdBufferFinalFillPercentage }}
              HrdBufferInitialFillPercentage: {{ HrdBufferInitialFillPercentage }}
              HrdBufferSize: {{ HrdBufferSize }}
              InterlaceMode: "{{ InterlaceMode }}"
              MaxBitrate: {{ MaxBitrate }}
              MinIInterval: {{ MinIInterval }}
              MvOverPictureBoundaries: "{{ MvOverPictureBoundaries }}"
              MvTemporalPredictor: "{{ MvTemporalPredictor }}"
              NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
              NumberReferenceFrames: {{ NumberReferenceFrames }}
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              QvbrSettings:
                MaxAverageBitrate: {{ MaxAverageBitrate }}
                QvbrQualityLevel: {{ QvbrQualityLevel }}
                QvbrQualityLevelFineTune: {{ QvbrQualityLevelFineTune }}
              RateControlMode: "{{ RateControlMode }}"
              SampleAdaptiveOffsetFilterMode: "{{ SampleAdaptiveOffsetFilterMode }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SceneChangeDetect: "{{ SceneChangeDetect }}"
              Slices: {{ Slices }}
              SlowPal: "{{ SlowPal }}"
              SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
              Telecine: "{{ Telecine }}"
              TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
              TemporalIds: "{{ TemporalIds }}"
              TileHeight: {{ TileHeight }}
              TilePadding: "{{ TilePadding }}"
              TileWidth: {{ TileWidth }}
              Tiles: "{{ Tiles }}"
              TreeBlockSize: "{{ TreeBlockSize }}"
              UnregisteredSeiTimecode: "{{ UnregisteredSeiTimecode }}"
              WriteMp4PackagingType: "{{ WriteMp4PackagingType }}"
            Mpeg2Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              Bitrate: {{ Bitrate }}
              CodecLevel: "{{ CodecLevel }}"
              CodecProfile: "{{ CodecProfile }}"
              DynamicSubGop: "{{ DynamicSubGop }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopClosedCadence: {{ GopClosedCadence }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              HrdBufferFinalFillPercentage: {{ HrdBufferFinalFillPercentage }}
              HrdBufferInitialFillPercentage: {{ HrdBufferInitialFillPercentage }}
              HrdBufferSize: {{ HrdBufferSize }}
              InterlaceMode: "{{ InterlaceMode }}"
              IntraDcPrecision: "{{ IntraDcPrecision }}"
              MaxBitrate: {{ MaxBitrate }}
              MinIInterval: {{ MinIInterval }}
              NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              RateControlMode: "{{ RateControlMode }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SceneChangeDetect: "{{ SceneChangeDetect }}"
              SlowPal: "{{ SlowPal }}"
              Softness: {{ Softness }}
              SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
              Syntax: "{{ Syntax }}"
              Telecine: "{{ Telecine }}"
              TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
            PassthroughSettings:
              FrameControl: "{{ FrameControl }}"
              VideoSelectorMode: "{{ VideoSelectorMode }}"
            ProresSettings:
              ChromaSampling: "{{ ChromaSampling }}"
              CodecProfile: "{{ CodecProfile }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              InterlaceMode: "{{ InterlaceMode }}"
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SlowPal: "{{ SlowPal }}"
              Telecine: "{{ Telecine }}"
            UncompressedSettings:
              Fourcc: "{{ Fourcc }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              InterlaceMode: "{{ InterlaceMode }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SlowPal: "{{ SlowPal }}"
              Telecine: "{{ Telecine }}"
            Vc3Settings:
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              InterlaceMode: "{{ InterlaceMode }}"
              ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
              SlowPal: "{{ SlowPal }}"
              Telecine: "{{ Telecine }}"
              Vc3Class: "{{ Vc3Class }}"
            Vp8Settings:
              Bitrate: {{ Bitrate }}
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopSize: {{ GopSize }}
              HrdBufferSize: {{ HrdBufferSize }}
              MaxBitrate: {{ MaxBitrate }}
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              RateControlMode: "{{ RateControlMode }}"
            Vp9Settings:
              Bitrate: {{ Bitrate }}
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopSize: {{ GopSize }}
              HrdBufferSize: {{ HrdBufferSize }}
              MaxBitrate: {{ MaxBitrate }}
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              RateControlMode: "{{ RateControlMode }}"
            XavcSettings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              EntropyEncoding: "{{ EntropyEncoding }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              Profile: "{{ Profile }}"
              SlowPal: "{{ SlowPal }}"
              Softness: {{ Softness }}
              SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
              TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
              Xavc4kIntraCbgProfileSettings:
                XavcClass: "{{ XavcClass }}"
              Xavc4kIntraVbrProfileSettings:
                XavcClass: "{{ XavcClass }}"
              Xavc4kProfileSettings:
                BitrateClass: "{{ BitrateClass }}"
                CodecProfile: "{{ CodecProfile }}"
                FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
                GopBReference: "{{ GopBReference }}"
                GopClosedCadence: {{ GopClosedCadence }}
                HrdBufferSize: {{ HrdBufferSize }}
                QualityTuningLevel: "{{ QualityTuningLevel }}"
                Slices: {{ Slices }}
              XavcHdIntraCbgProfileSettings:
                XavcClass: "{{ XavcClass }}"
              XavcHdProfileSettings:
                BitrateClass: "{{ BitrateClass }}"
                FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
                GopBReference: "{{ GopBReference }}"
                GopClosedCadence: {{ GopClosedCadence }}
                HrdBufferSize: {{ HrdBufferSize }}
                InterlaceMode: "{{ InterlaceMode }}"
                QualityTuningLevel: "{{ QualityTuningLevel }}"
                Slices: {{ Slices }}
                Telecine: "{{ Telecine }}"
          ColorMetadata: "{{ ColorMetadata }}"
          Crop:
            Height: {{ Height }}
            Width: {{ Width }}
            X: {{ X }}
            Y: {{ Y }}
          DropFrameTimecode: "{{ DropFrameTimecode }}"
          FixedAfd: {{ FixedAfd }}
          Height: {{ Height }}
          Position:
            Height: {{ Height }}
            Width: {{ Width }}
            X: {{ X }}
            Y: {{ Y }}
          RespondToAfd: "{{ RespondToAfd }}"
          ScalingBehavior: "{{ ScalingBehavior }}"
          Sharpness: {{ Sharpness }}
          TimecodeInsertion: "{{ TimecodeInsertion }}"
          TimecodeTrack: "{{ TimecodeTrack }}"
          VideoPreprocessors:
            ColorCorrector:
              Brightness: {{ Brightness }}
              ClipLimits:
                MaximumRGBTolerance: {{ MaximumRGBTolerance }}
                MaximumYUV: {{ MaximumYUV }}
                MinimumRGBTolerance: {{ MinimumRGBTolerance }}
                MinimumYUV: {{ MinimumYUV }}
              ColorSpaceConversion: "{{ ColorSpaceConversion }}"
              Contrast: {{ Contrast }}
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
              HdrToSdrToneMapper: "{{ HdrToSdrToneMapper }}"
              Hue: {{ Hue }}
              MaxLuminance: {{ MaxLuminance }}
              SampleRangeConversion: "{{ SampleRangeConversion }}"
              Saturation: {{ Saturation }}
              SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
            Deinterlacer:
              Algorithm: "{{ Algorithm }}"
              Control: "{{ Control }}"
              Mode: "{{ Mode }}"
            DolbyVision:
              Compatibility: "{{ Compatibility }}"
              L6Metadata:
                MaxCll: {{ MaxCll }}
                MaxFall: {{ MaxFall }}
              L6Mode: "{{ L6Mode }}"
              Mapping: "{{ Mapping }}"
              Profile: "{{ Profile }}"
            Hdr10Plus:
              MasteringMonitorNits: {{ MasteringMonitorNits }}
              TargetMonitorNits: {{ TargetMonitorNits }}
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
            NoiseReducer:
              Filter: "{{ Filter }}"
              FilterSettings:
                Strength: {{ Strength }}
              SpatialFilterSettings:
                PostFilterSharpenStrength: {{ PostFilterSharpenStrength }}
                Speed: {{ Speed }}
                Strength: {{ Strength }}
              TemporalFilterSettings:
                AggressiveMode: {{ AggressiveMode }}
                PostTemporalSharpening: "{{ PostTemporalSharpening }}"
                PostTemporalSharpeningStrength: "{{ PostTemporalSharpeningStrength }}"
                Speed: {{ Speed }}
                Strength: {{ Strength }}
            PartnerWatermarking:
              NexguardFileMarkerSettings:
                License: "{{ License }}"
                Payload: {{ Payload }}
                Preset: "{{ Preset }}"
                Strength: "{{ Strength }}"
            TimecodeBurnin:
              FontSize: {{ FontSize }}
              Position: "{{ Position }}"
              Prefix: "{{ Prefix }}"
          Width: {{ Width }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_preset"
    values={[
        { label: 'update_preset', value: 'update_preset' }
    ]}
>
<TabItem value="update_preset">

Modify one of your existing presets.

```sql
UPDATE aws.mediaconvert.presets
SET 
Category = '{{ Category }}',
Description = '{{ Description }}',
Settings = '{{ Settings }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
Preset;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_preset"
    values={[
        { label: 'delete_preset', value: 'delete_preset' }
    ]}
>
<TabItem value="delete_preset">

Permanently delete a preset you have created.

```sql
DELETE FROM aws.mediaconvert.presets
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
