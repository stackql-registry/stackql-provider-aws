--- 
title: packaging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - packaging_configurations
  - mediapackage_vod
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

Creates, updates, deletes, gets or lists a <code>packaging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packaging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage_vod.packaging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_packaging_configuration"
    values={[
        { label: 'describe_packaging_configuration', value: 'describe_packaging_configuration' },
        { label: 'list_packaging_configurations', value: 'list_packaging_configurations' }
    ]}
>
<TabItem value="describe_packaging_configuration">

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
    <td>The ARN of the PackagingConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="cmaf_package" /></td>
    <td><code>object</code></td>
    <td>A CMAF packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The time the PackagingConfiguration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dash_package" /></td>
    <td><code>object</code></td>
    <td>A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="hls_package" /></td>
    <td><code>object</code></td>
    <td>An HTTP Live Streaming (HLS) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the PackagingConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="mss_package" /></td>
    <td><code>object</code></td>
    <td>A Microsoft Smooth Streaming (MSS) PackagingConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="packaging_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_packaging_configurations">

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
    <td>The ARN of the PackagingConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="cmaf_package" /></td>
    <td><code>object</code></td>
    <td>A CMAF packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The time the PackagingConfiguration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dash_package" /></td>
    <td><code>object</code></td>
    <td>A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="hls_package" /></td>
    <td><code>object</code></td>
    <td>An HTTP Live Streaming (HLS) packaging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the PackagingConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="mss_package" /></td>
    <td><code>object</code></td>
    <td>A Microsoft Smooth Streaming (MSS) PackagingConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="packaging_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#describe_packaging_configuration"><CopyableCode code="describe_packaging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a MediaPackage VOD PackagingConfiguration resource.</td>
</tr>
<tr>
    <td><a href="#list_packaging_configurations"><CopyableCode code="list_packaging_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-packagingGroupId"><code>packagingGroupId</code></a></td>
    <td>Returns a collection of MediaPackage VOD PackagingConfiguration resources.</td>
</tr>
<tr>
    <td><a href="#create_packaging_configuration"><CopyableCode code="create_packaging_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackagingGroupId"><code>PackagingGroupId</code></a></td>
    <td></td>
    <td>Creates a new MediaPackage VOD PackagingConfiguration resource.</td>
</tr>
<tr>
    <td><a href="#delete_packaging_configuration"><CopyableCode code="delete_packaging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a MediaPackage VOD PackagingConfiguration resource.</td>
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
    <td>The ID of the MediaPackage VOD PackagingConfiguration resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Upper bound on number of records to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to resume pagination from the end of a previous request.</td>
</tr>
<tr id="parameter-packagingGroupId">
    <td><CopyableCode code="packagingGroupId" /></td>
    <td><code>string</code></td>
    <td>Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_packaging_configuration"
    values={[
        { label: 'describe_packaging_configuration', value: 'describe_packaging_configuration' },
        { label: 'list_packaging_configurations', value: 'list_packaging_configurations' }
    ]}
>
<TabItem value="describe_packaging_configuration">

Returns a description of a MediaPackage VOD PackagingConfiguration resource.

```sql
SELECT
arn,
cmaf_package,
created_at,
dash_package,
hls_package,
id,
mss_package,
packaging_group_id,
tags
FROM aws.mediapackage_vod.packaging_configurations
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_packaging_configurations">

Returns a collection of MediaPackage VOD PackagingConfiguration resources.

```sql
SELECT
arn,
cmaf_package,
created_at,
dash_package,
hls_package,
id,
mss_package,
packaging_group_id,
tags
FROM aws.mediapackage_vod.packaging_configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND packagingGroupId = '{{ packagingGroupId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_packaging_configuration"
    values={[
        { label: 'create_packaging_configuration', value: 'create_packaging_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_packaging_configuration">

Creates a new MediaPackage VOD PackagingConfiguration resource.

```sql
INSERT INTO aws.mediapackage_vod.packaging_configurations (
CmafPackage,
DashPackage,
HlsPackage,
Id,
MssPackage,
PackagingGroupId,
Tags,
region
)
SELECT 
'{{ CmafPackage }}',
'{{ DashPackage }}',
'{{ HlsPackage }}',
'{{ Id }}',
'{{ MssPackage }}',
'{{ PackagingGroupId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
cmaf_package,
created_at,
dash_package,
hls_package,
id,
mss_package,
packaging_group_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: packaging_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the packaging_configurations resource.
    - name: CmafPackage
      description: |
        A CMAF packaging configuration.
      value:
        Encryption:
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          SpekeKeyProvider:
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        HlsManifests:
          - AdMarkers: "{{ AdMarkers }}"
            IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
            ManifestName: "{{ ManifestName }}"
            ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
            RepeatExtXKey: {{ RepeatExtXKey }}
            StreamSelection:
              MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
              MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
              StreamOrder: "{{ StreamOrder }}"
        IncludeEncoderConfigurationInSegments: {{ IncludeEncoderConfigurationInSegments }}
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
    - name: DashPackage
      description: |
        A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
      value:
        DashManifests:
          - ManifestLayout: "{{ ManifestLayout }}"
            ManifestName: "{{ ManifestName }}"
            MinBufferTimeSeconds: {{ MinBufferTimeSeconds }}
            Profile: "{{ Profile }}"
            ScteMarkersSource: "{{ ScteMarkersSource }}"
            StreamSelection:
              MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
              MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
              StreamOrder: "{{ StreamOrder }}"
        Encryption:
          SpekeKeyProvider:
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        IncludeEncoderConfigurationInSegments: {{ IncludeEncoderConfigurationInSegments }}
        IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
        PeriodTriggers:
          - "{{ PeriodTriggers }}"
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        SegmentTemplateFormat: "{{ SegmentTemplateFormat }}"
    - name: HlsPackage
      description: |
        An HTTP Live Streaming (HLS) packaging configuration.
      value:
        Encryption:
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          EncryptionMethod: "{{ EncryptionMethod }}"
          SpekeKeyProvider:
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        HlsManifests:
          - AdMarkers: "{{ AdMarkers }}"
            IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
            ManifestName: "{{ ManifestName }}"
            ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
            RepeatExtXKey: {{ RepeatExtXKey }}
            StreamSelection:
              MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
              MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
              StreamOrder: "{{ StreamOrder }}"
        IncludeDvbSubtitles: {{ IncludeDvbSubtitles }}
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        UseAudioRenditionGroup: {{ UseAudioRenditionGroup }}
    - name: Id
      value: "{{ Id }}"
    - name: MssPackage
      description: |
        A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
      value:
        Encryption:
          SpekeKeyProvider:
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            RoleArn: "{{ RoleArn }}"
            SystemIds:
              - "{{ SystemIds }}"
            Url: "{{ Url }}"
        MssManifests:
          - ManifestName: "{{ ManifestName }}"
            StreamSelection:
              MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
              MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
              StreamOrder: "{{ StreamOrder }}"
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
    - name: PackagingGroupId
      value: "{{ PackagingGroupId }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_packaging_configuration"
    values={[
        { label: 'delete_packaging_configuration', value: 'delete_packaging_configuration' }
    ]}
>
<TabItem value="delete_packaging_configuration">

Deletes a MediaPackage VOD PackagingConfiguration resource.

```sql
DELETE FROM aws.mediapackage_vod.packaging_configurations
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
