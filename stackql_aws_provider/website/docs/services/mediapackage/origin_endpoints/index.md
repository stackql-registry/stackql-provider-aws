--- 
title: origin_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoints
  - mediapackage
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

Creates, updates, deletes, gets or lists an <code>origin_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origin_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage.origin_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_origin_endpoint"
    values={[
        { label: 'describe_origin_endpoint', value: 'describe_origin_endpoint' },
        { label: 'list_origin_endpoints', value: 'list_origin_endpoints' }
    ]}
>
<TabItem value="describe_origin_endpoint">

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
    <td>The Amazon Resource Name (ARN) assigned to the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Authorization" /></td>
    <td><code>object</code></td>
    <td>CDN Authorization credentials</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel the OriginEndpoint is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="CmafPackage" /></td>
    <td><code>object</code></td>
    <td>A Common Media Application Format (CMAF) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time the OriginEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashPackage" /></td>
    <td><code>object</code></td>
    <td>A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A short text description of the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="HlsPackage" /></td>
    <td><code>object</code></td>
    <td>An HTTP Live Streaming (HLS) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ManifestName" /></td>
    <td><code>string</code></td>
    <td>A short string appended to the end of the OriginEndpoint URL.</td>
</tr>
<tr>
    <td><CopyableCode code="MssPackage" /></td>
    <td><code>object</code></td>
    <td>A Microsoft Smooth Streaming (MSS) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Origination" /></td>
    <td><code>string</code></td>
    <td>Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="StartoverWindowSeconds" /></td>
    <td><code>integer</code></td>
    <td>Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="TimeDelaySeconds" /></td>
    <td><code>integer</code></td>
    <td>Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The URL of the packaged OriginEndpoint for consumption.</td>
</tr>
<tr>
    <td><CopyableCode code="Whitelist" /></td>
    <td><code>array</code></td>
    <td>A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_origin_endpoints">

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
    <td>The Amazon Resource Name (ARN) assigned to the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Authorization" /></td>
    <td><code>object</code></td>
    <td>CDN Authorization credentials</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel the OriginEndpoint is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="CmafPackage" /></td>
    <td><code>object</code></td>
    <td>A Common Media Application Format (CMAF) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time the OriginEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashPackage" /></td>
    <td><code>object</code></td>
    <td>A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A short text description of the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="HlsPackage" /></td>
    <td><code>object</code></td>
    <td>An HTTP Live Streaming (HLS) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ManifestName" /></td>
    <td><code>string</code></td>
    <td>A short string appended to the end of the OriginEndpoint URL.</td>
</tr>
<tr>
    <td><CopyableCode code="MssPackage" /></td>
    <td><code>object</code></td>
    <td>A Microsoft Smooth Streaming (MSS) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Origination" /></td>
    <td><code>string</code></td>
    <td>Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="StartoverWindowSeconds" /></td>
    <td><code>integer</code></td>
    <td>Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="TimeDelaySeconds" /></td>
    <td><code>integer</code></td>
    <td>Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The URL of the packaged OriginEndpoint for consumption.</td>
</tr>
<tr>
    <td><CopyableCode code="Whitelist" /></td>
    <td><code>array</code></td>
    <td>A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.</td>
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
    <td><a href="#describe_origin_endpoint"><CopyableCode code="describe_origin_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about an existing OriginEndpoint.</td>
</tr>
<tr>
    <td><a href="#list_origin_endpoints"><CopyableCode code="list_origin_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-channelId"><code>channelId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a collection of OriginEndpoint records.</td>
</tr>
<tr>
    <td><a href="#create_origin_endpoint"><CopyableCode code="create_origin_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelId"><code>ChannelId</code></a></td>
    <td></td>
    <td>Creates a new OriginEndpoint record.</td>
</tr>
<tr>
    <td><a href="#update_origin_endpoint"><CopyableCode code="update_origin_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing OriginEndpoint.</td>
</tr>
<tr>
    <td><a href="#delete_origin_endpoint"><CopyableCode code="delete_origin_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing OriginEndpoint.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OriginEndpoint to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-channelId">
    <td><CopyableCode code="channelId" /></td>
    <td><code>string</code></td>
    <td>When specified, the request will return only OriginEndpoints associated with the given Channel ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The upper bound on the number of records to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to resume pagination from the end of a previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_origin_endpoint"
    values={[
        { label: 'describe_origin_endpoint', value: 'describe_origin_endpoint' },
        { label: 'list_origin_endpoints', value: 'list_origin_endpoints' }
    ]}
>
<TabItem value="describe_origin_endpoint">

Gets details about an existing OriginEndpoint.

```sql
SELECT
Arn,
Authorization,
ChannelId,
CmafPackage,
CreatedAt,
DashPackage,
Description,
HlsPackage,
Id,
ManifestName,
MssPackage,
Origination,
StartoverWindowSeconds,
Tags,
TimeDelaySeconds,
Url,
Whitelist
FROM aws.mediapackage.origin_endpoints
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_origin_endpoints">

Returns a collection of OriginEndpoint records.

```sql
SELECT
Arn,
Authorization,
ChannelId,
CmafPackage,
CreatedAt,
DashPackage,
Description,
HlsPackage,
Id,
ManifestName,
MssPackage,
Origination,
StartoverWindowSeconds,
Tags,
TimeDelaySeconds,
Url,
Whitelist
FROM aws.mediapackage.origin_endpoints
WHERE region = '{{ region }}' -- required
AND channelId = '{{ channelId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_origin_endpoint"
    values={[
        { label: 'create_origin_endpoint', value: 'create_origin_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_origin_endpoint">

Creates a new OriginEndpoint record.

```sql
INSERT INTO aws.mediapackage.origin_endpoints (
Authorization,
ChannelId,
CmafPackage,
DashPackage,
Description,
HlsPackage,
Id,
ManifestName,
MssPackage,
Origination,
StartoverWindowSeconds,
Tags,
TimeDelaySeconds,
Whitelist,
region
)
SELECT 
'{{ Authorization }}',
'{{ ChannelId }}' /* required */,
'{{ CmafPackage }}',
'{{ DashPackage }}',
'{{ Description }}',
'{{ HlsPackage }}',
'{{ Id }}',
'{{ ManifestName }}',
'{{ MssPackage }}',
'{{ Origination }}',
{{ StartoverWindowSeconds }},
'{{ Tags }}',
{{ TimeDelaySeconds }},
'{{ Whitelist }}',
'{{ region }}'
RETURNING
Arn,
Authorization,
ChannelId,
CmafPackage,
CreatedAt,
DashPackage,
Description,
HlsPackage,
Id,
ManifestName,
MssPackage,
Origination,
StartoverWindowSeconds,
Tags,
TimeDelaySeconds,
Url,
Whitelist
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: origin_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the origin_endpoints resource.
    - name: Authorization
      description: |
        CDN Authorization credentials
      value:
        CdnIdentifierSecret: "{{ CdnIdentifierSecret }}"
        SecretsRoleArn: "{{ SecretsRoleArn }}"
    - name: ChannelId
      value: "{{ ChannelId }}"
    - name: CmafPackage
      description: |
        A Common Media Application Format (CMAF) packaging configuration.
      value:
        Encryption:
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          EncryptionMethod: "{{ EncryptionMethod }}"
          KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
          SpekeKeyProvider:
            CertificateArn: "{{ CertificateArn }}"
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        HlsManifests:
          - AdMarkers: "{{ AdMarkers }}"
            AdTriggers: "{{ AdTriggers }}"
            AdsOnDeliveryRestrictions: "{{ AdsOnDeliveryRestrictions }}"
            Id: "{{ Id }}"
            IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
            ManifestName: "{{ ManifestName }}"
            PlaylistType: "{{ PlaylistType }}"
            PlaylistWindowSeconds: {{ PlaylistWindowSeconds }}
            ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        SegmentPrefix: "{{ SegmentPrefix }}"
        StreamSelection:
          MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
          MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
          StreamOrder: "{{ StreamOrder }}"
    - name: DashPackage
      description: |
        A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
      value:
        AdTriggers:
          - "{{ AdTriggers }}"
        AdsOnDeliveryRestrictions: "{{ AdsOnDeliveryRestrictions }}"
        Encryption:
          KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
          SpekeKeyProvider:
            CertificateArn: "{{ CertificateArn }}"
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
        ManifestLayout: "{{ ManifestLayout }}"
        ManifestWindowSeconds: {{ ManifestWindowSeconds }}
        MinBufferTimeSeconds: {{ MinBufferTimeSeconds }}
        MinUpdatePeriodSeconds: {{ MinUpdatePeriodSeconds }}
        PeriodTriggers:
          - "{{ PeriodTriggers }}"
        Profile: "{{ Profile }}"
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        SegmentTemplateFormat: "{{ SegmentTemplateFormat }}"
        StreamSelection:
          MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
          MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
          StreamOrder: "{{ StreamOrder }}"
        SuggestedPresentationDelaySeconds: {{ SuggestedPresentationDelaySeconds }}
        UtcTiming: "{{ UtcTiming }}"
        UtcTimingUri: "{{ UtcTimingUri }}"
    - name: Description
      value: "{{ Description }}"
    - name: HlsPackage
      description: |
        An HTTP Live Streaming (HLS) packaging configuration.
      value:
        AdMarkers: "{{ AdMarkers }}"
        AdTriggers:
          - "{{ AdTriggers }}"
        AdsOnDeliveryRestrictions: "{{ AdsOnDeliveryRestrictions }}"
        Encryption:
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          EncryptionMethod: "{{ EncryptionMethod }}"
          KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
          RepeatExtXKey: {{ RepeatExtXKey }}
          SpekeKeyProvider:
            CertificateArn: "{{ CertificateArn }}"
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        IncludeDvbSubtitles: {{ IncludeDvbSubtitles }}
        IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
        PlaylistType: "{{ PlaylistType }}"
        PlaylistWindowSeconds: {{ PlaylistWindowSeconds }}
        ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        StreamSelection:
          MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
          MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
          StreamOrder: "{{ StreamOrder }}"
        UseAudioRenditionGroup: {{ UseAudioRenditionGroup }}
    - name: Id
      value: "{{ Id }}"
    - name: ManifestName
      value: "{{ ManifestName }}"
    - name: MssPackage
      description: |
        A Microsoft Smooth Streaming (MSS) packaging configuration.
      value:
        Encryption:
          SpekeKeyProvider:
            CertificateArn: "{{ CertificateArn }}"
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        ManifestWindowSeconds: {{ ManifestWindowSeconds }}
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        StreamSelection:
          MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
          MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
          StreamOrder: "{{ StreamOrder }}"
    - name: Origination
      value: "{{ Origination }}"
      valid_values: ['ALLOW', 'DENY']
    - name: StartoverWindowSeconds
      value: {{ StartoverWindowSeconds }}
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource
    - name: TimeDelaySeconds
      value: {{ TimeDelaySeconds }}
    - name: Whitelist
      value:
        - "{{ Whitelist }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_origin_endpoint"
    values={[
        { label: 'update_origin_endpoint', value: 'update_origin_endpoint' }
    ]}
>
<TabItem value="update_origin_endpoint">

Updates an existing OriginEndpoint.

```sql
UPDATE aws.mediapackage.origin_endpoints
SET 
Authorization = '{{ Authorization }}',
CmafPackage = '{{ CmafPackage }}',
DashPackage = '{{ DashPackage }}',
Description = '{{ Description }}',
HlsPackage = '{{ HlsPackage }}',
ManifestName = '{{ ManifestName }}',
MssPackage = '{{ MssPackage }}',
Origination = '{{ Origination }}',
StartoverWindowSeconds = {{ StartoverWindowSeconds }},
TimeDelaySeconds = {{ TimeDelaySeconds }},
Whitelist = '{{ Whitelist }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
Authorization,
ChannelId,
CmafPackage,
CreatedAt,
DashPackage,
Description,
HlsPackage,
Id,
ManifestName,
MssPackage,
Origination,
StartoverWindowSeconds,
Tags,
TimeDelaySeconds,
Url,
Whitelist;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_origin_endpoint"
    values={[
        { label: 'delete_origin_endpoint', value: 'delete_origin_endpoint' }
    ]}
>
<TabItem value="delete_origin_endpoint">

Deletes an existing OriginEndpoint.

```sql
DELETE FROM aws.mediapackage.origin_endpoints
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
