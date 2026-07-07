--- 
title: origin_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoints
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

Creates, updates, deletes, gets or lists an <code>origin_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origin_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackagev2.origin_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_origin_endpoint"
    values={[
        { label: 'get_origin_endpoint', value: 'get_origin_endpoint' },
        { label: 'list_origin_endpoints', value: 'list_origin_endpoints' }
    ]}
>
<TabItem value="get_origin_endpoint">

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
    <td>The Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelGroupName" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContainerType" /></td>
    <td><code>string</code></td>
    <td>The type of container attached to this origin endpoint. (TS, CMAF, ISM)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the origin endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashManifests" /></td>
    <td><code>array</code></td>
    <td>A DASH manifest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for your origin endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ForceEndpointErrorConfiguration" /></td>
    <td><code>object</code></td>
    <td>The failover settings for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="HlsManifests" /></td>
    <td><code>array</code></td>
    <td>An HTTP live streaming (HLS) manifest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LowLatencyHlsManifests" /></td>
    <td><code>array</code></td>
    <td>A low-latency HLS manifest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the origin endpoint was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MssManifests" /></td>
    <td><code>array</code></td>
    <td>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResetAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the origin endpoint was last reset.</td>
</tr>
<tr>
    <td><CopyableCode code="Segment" /></td>
    <td><code>object</code></td>
    <td>The segment configuration, including the segment name, duration, and other configuration values.</td>
</tr>
<tr>
    <td><CopyableCode code="StartoverWindowSeconds" /></td>
    <td><code>integer</code></td>
    <td>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="UriSeparator" /></td>
    <td><code>string</code></td>
    <td>The separator character used in generated URIs for this origin endpoint. (UNDERSCORE, HYPHEN)</td>
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
    <td>The Amazon Resource Name (ARN) associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelGroupName" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContainerType" /></td>
    <td><code>string</code></td>
    <td>The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. (TS, CMAF, ISM)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the origin endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashManifests" /></td>
    <td><code>array</code></td>
    <td>A DASH manifest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Any descriptive information that you want to add to the origin endpoint for future identification purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="ForceEndpointErrorConfiguration" /></td>
    <td><code>object</code></td>
    <td>The failover settings for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="HlsManifests" /></td>
    <td><code>array</code></td>
    <td>An HTTP live streaming (HLS) manifest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LowLatencyHlsManifests" /></td>
    <td><code>array</code></td>
    <td>A low-latency HLS manifest configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the origin endpoint was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MssManifests" /></td>
    <td><code>array</code></td>
    <td>A list of Microsoft Smooth Streaming (MSS) manifest configurations associated with the origin endpoint. Each configuration represents a different MSS streaming option available from this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UriSeparator" /></td>
    <td><code>string</code></td>
    <td>The separator character used in generated URIs for this origin endpoint. (UNDERSCORE, HYPHEN)</td>
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
    <td><a href="#get_origin_endpoint"><CopyableCode code="get_origin_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified origin endpoint that's configured in AWS Elemental MediaPackage to obtain its playback URL and to view the packaging settings that it's currently using.</td>
</tr>
<tr>
    <td><a href="#list_origin_endpoints"><CopyableCode code="list_origin_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves all origin endpoints in a specific channel that are configured in AWS Elemental MediaPackage.</td>
</tr>
<tr>
    <td><a href="#create_origin_endpoint"><CopyableCode code="create_origin_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginEndpointName"><code>OriginEndpointName</code></a>, <a href="#parameter-ContainerType"><code>ContainerType</code></a></td>
    <td><a href="#parameter-x-amzn-client-token"><code>x-amzn-client-token</code></a></td>
    <td>The endpoint is attached to a channel, and represents the output of the live content. You can associate multiple endpoints to a single channel. Each endpoint gives players and downstream CDNs (such as Amazon CloudFront) access to the content for playback. Content can't be served from a channel until it has an endpoint. You can create only one endpoint with each request.</td>
</tr>
<tr>
    <td><a href="#update_origin_endpoint"><CopyableCode code="update_origin_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerType"><code>ContainerType</code></a></td>
    <td><a href="#parameter-x-amzn-update-if-match"><code>x-amzn-update-if-match</code></a></td>
    <td>Update the specified origin endpoint. Edit the packaging preferences on an endpoint to optimize the viewing experience. You can't edit the name of the endpoint. Any edits you make that impact the video output may not be reflected for a few minutes.</td>
</tr>
<tr>
    <td><a href="#delete_origin_endpoint"><CopyableCode code="delete_origin_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Origin endpoints can serve content until they're deleted. Delete the endpoint if it should no longer respond to playback requests. You must delete all endpoints from a channel before you can delete the channel.</td>
</tr>
<tr>
    <td><a href="#cancel_harvest_job"><CopyableCode code="cancel_harvest_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-harvest_job_name"><code>harvest_job_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-update-if-match"><code>x-amzn-update-if-match</code></a></td>
    <td>Cancels an in-progress harvest job.</td>
</tr>
<tr>
    <td><a href="#reset_origin_endpoint_state"><CopyableCode code="reset_origin_endpoint_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resetting the origin endpoint can help to resolve unexpected behavior and other content packaging issues. It also helps to preserve special events when you don't want the previous content to be available for viewing. A reset clears out all previous content from the origin endpoint. MediaPackage might return old content from this endpoint in the first 30 seconds after the endpoint reset. For best results, when possible, wait 30 seconds from endpoint reset to send playback requests to this endpoint.</td>
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
    <td>The name of the channel group that contains the channel with the origin endpoint that you are resetting.</td>
</tr>
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel with the origin endpoint that you are resetting.</td>
</tr>
<tr id="parameter-harvest_job_name">
    <td><CopyableCode code="harvest_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the harvest job to cancel. This name must be unique within the channel and cannot be changed after the harvest job is submitted.</td>
</tr>
<tr id="parameter-origin_endpoint_name">
    <td><CopyableCode code="origin_endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the origin endpoint that you are resetting.</td>
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
    <td>The current Entity Tag (ETag) associated with the harvest job. Used for concurrency control.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_origin_endpoint"
    values={[
        { label: 'get_origin_endpoint', value: 'get_origin_endpoint' },
        { label: 'list_origin_endpoints', value: 'list_origin_endpoints' }
    ]}
>
<TabItem value="get_origin_endpoint">

Retrieves the specified origin endpoint that's configured in AWS Elemental MediaPackage to obtain its playback URL and to view the packaging settings that it's currently using.

```sql
SELECT
Arn,
ChannelGroupName,
ChannelName,
ContainerType,
CreatedAt,
DashManifests,
Description,
ETag,
ForceEndpointErrorConfiguration,
HlsManifests,
LowLatencyHlsManifests,
ModifiedAt,
MssManifests,
OriginEndpointName,
ResetAt,
Segment,
StartoverWindowSeconds,
Tags,
UriSeparator
FROM aws.mediapackagev2.origin_endpoints
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_origin_endpoints">

Retrieves all origin endpoints in a specific channel that are configured in AWS Elemental MediaPackage.

```sql
SELECT
Arn,
ChannelGroupName,
ChannelName,
ContainerType,
CreatedAt,
DashManifests,
Description,
ForceEndpointErrorConfiguration,
HlsManifests,
LowLatencyHlsManifests,
ModifiedAt,
MssManifests,
OriginEndpointName,
UriSeparator
FROM aws.mediapackagev2.origin_endpoints
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
AND region = '{{ region }}' -- required
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

The endpoint is attached to a channel, and represents the output of the live content. You can associate multiple endpoints to a single channel. Each endpoint gives players and downstream CDNs (such as Amazon CloudFront) access to the content for playback. Content can't be served from a channel until it has an endpoint. You can create only one endpoint with each request.

```sql
INSERT INTO aws.mediapackagev2.origin_endpoints (
OriginEndpointName,
ContainerType,
Segment,
Description,
StartoverWindowSeconds,
HlsManifests,
LowLatencyHlsManifests,
DashManifests,
MssManifests,
ForceEndpointErrorConfiguration,
UriSeparator,
Tags,
channel_group_name,
channel_name,
region,
`x-amzn-client-token`
)
SELECT 
'{{ OriginEndpointName }}' /* required */,
'{{ ContainerType }}' /* required */,
'{{ Segment }}',
'{{ Description }}',
{{ StartoverWindowSeconds }},
'{{ HlsManifests }}',
'{{ LowLatencyHlsManifests }}',
'{{ DashManifests }}',
'{{ MssManifests }}',
'{{ ForceEndpointErrorConfiguration }}',
'{{ UriSeparator }}',
'{{ Tags }}',
'{{ channel_group_name }}',
'{{ channel_name }}',
'{{ region }}',
'{{ x-amzn-client-token }}'
RETURNING
Arn,
ChannelGroupName,
ChannelName,
ContainerType,
CreatedAt,
DashManifests,
Description,
ETag,
ForceEndpointErrorConfiguration,
HlsManifests,
LowLatencyHlsManifests,
ModifiedAt,
MssManifests,
OriginEndpointName,
Segment,
StartoverWindowSeconds,
Tags,
UriSeparator
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: origin_endpoints
  props:
    - name: channel_group_name
      value: "{{ channel_group_name }}"
      description: Required parameter for the origin_endpoints resource.
    - name: channel_name
      value: "{{ channel_name }}"
      description: Required parameter for the origin_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the origin_endpoints resource.
    - name: OriginEndpointName
      value: "{{ OriginEndpointName }}"
    - name: ContainerType
      value: "{{ ContainerType }}"
      valid_values: ['TS', 'CMAF', 'ISM']
    - name: Segment
      description: |
        The segment configuration, including the segment name, duration, and other configuration values.
      value:
        SegmentDurationSeconds: {{ SegmentDurationSeconds }}
        SegmentName: "{{ SegmentName }}"
        TsUseAudioRenditionGroup: {{ TsUseAudioRenditionGroup }}
        IncludeIframeOnlyStreams: {{ IncludeIframeOnlyStreams }}
        TsIncludeDvbSubtitles: {{ TsIncludeDvbSubtitles }}
        Scte:
          ScteFilter:
            - "{{ ScteFilter }}"
          ScteInSegments: "{{ ScteInSegments }}"
          CustomAdTypes:
            - "{{ CustomAdTypes }}"
        Encryption:
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          EncryptionMethod:
            TsEncryptionMethod: "{{ TsEncryptionMethod }}"
            CmafEncryptionMethod: "{{ CmafEncryptionMethod }}"
            IsmEncryptionMethod: "{{ IsmEncryptionMethod }}"
          KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
          CmafExcludeSegmentDrmMetadata: {{ CmafExcludeSegmentDrmMetadata }}
          SpekeKeyProvider:
            EncryptionContractConfiguration:
              PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
              PresetSpeke20Video: "{{ PresetSpeke20Video }}"
            ResourceId: "{{ ResourceId }}"
            DrmSystems:
              - "{{ DrmSystems }}"
            RoleArn: "{{ RoleArn }}"
            Url: "{{ Url }}"
            CertificateArn: "{{ CertificateArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: StartoverWindowSeconds
      value: {{ StartoverWindowSeconds }}
    - name: HlsManifests
      value:
        - ManifestName: "{{ ManifestName }}"
          ChildManifestName: "{{ ChildManifestName }}"
          ScteHls:
            AdMarkerHls: "{{ AdMarkerHls }}"
            ScteInManifests: "{{ ScteInManifests }}"
          StartTag:
            TimeOffset: {{ TimeOffset }}
            Precise: {{ Precise }}
          ManifestWindowSeconds: {{ ManifestWindowSeconds }}
          ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
          FilterConfiguration:
            ManifestFilter: "{{ ManifestFilter }}"
            DrmSettings: "{{ DrmSettings }}"
            Start: "{{ Start }}"
            End: "{{ End }}"
            TimeDelaySeconds: {{ TimeDelaySeconds }}
            ClipStartTime: "{{ ClipStartTime }}"
          UrlEncodeChildManifest: {{ UrlEncodeChildManifest }}
          UriPathType: "{{ UriPathType }}"
    - name: LowLatencyHlsManifests
      value:
        - ManifestName: "{{ ManifestName }}"
          ChildManifestName: "{{ ChildManifestName }}"
          ScteHls:
            AdMarkerHls: "{{ AdMarkerHls }}"
            ScteInManifests: "{{ ScteInManifests }}"
          StartTag:
            TimeOffset: {{ TimeOffset }}
            Precise: {{ Precise }}
          ManifestWindowSeconds: {{ ManifestWindowSeconds }}
          ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
          FilterConfiguration:
            ManifestFilter: "{{ ManifestFilter }}"
            DrmSettings: "{{ DrmSettings }}"
            Start: "{{ Start }}"
            End: "{{ End }}"
            TimeDelaySeconds: {{ TimeDelaySeconds }}
            ClipStartTime: "{{ ClipStartTime }}"
          UrlEncodeChildManifest: {{ UrlEncodeChildManifest }}
          UriPathType: "{{ UriPathType }}"
    - name: DashManifests
      value:
        - ManifestName: "{{ ManifestName }}"
          ManifestWindowSeconds: {{ ManifestWindowSeconds }}
          FilterConfiguration:
            ManifestFilter: "{{ ManifestFilter }}"
            DrmSettings: "{{ DrmSettings }}"
            Start: "{{ Start }}"
            End: "{{ End }}"
            TimeDelaySeconds: {{ TimeDelaySeconds }}
            ClipStartTime: "{{ ClipStartTime }}"
          MinUpdatePeriodSeconds: {{ MinUpdatePeriodSeconds }}
          MinBufferTimeSeconds: {{ MinBufferTimeSeconds }}
          SuggestedPresentationDelaySeconds: {{ SuggestedPresentationDelaySeconds }}
          SegmentTemplateFormat: "{{ SegmentTemplateFormat }}"
          PeriodTriggers: "{{ PeriodTriggers }}"
          ScteDash:
            AdMarkerDash: "{{ AdMarkerDash }}"
            ScteInManifests: "{{ ScteInManifests }}"
          DrmSignaling: "{{ DrmSignaling }}"
          UtcTiming:
            TimingMode: "{{ TimingMode }}"
            TimingSource: "{{ TimingSource }}"
          Profiles: "{{ Profiles }}"
          BaseUrls: "{{ BaseUrls }}"
          ProgramInformation:
            Title: "{{ Title }}"
            Source: "{{ Source }}"
            Copyright: "{{ Copyright }}"
            LanguageCode: "{{ LanguageCode }}"
            MoreInformationUrl: "{{ MoreInformationUrl }}"
          DvbSettings:
            FontDownload:
              Url: "{{ Url }}"
              MimeType: "{{ MimeType }}"
              FontFamily: "{{ FontFamily }}"
            ErrorMetrics:
              - ReportingUrl: "{{ ReportingUrl }}"
                Probability: {{ Probability }}
          Compactness: "{{ Compactness }}"
          SubtitleConfiguration:
            TtmlConfiguration:
              TtmlProfile: "{{ TtmlProfile }}"
          UriPathType: "{{ UriPathType }}"
          AvailabilityStartTimeConfiguration:
            FixedAvailabilityStartTime: "{{ FixedAvailabilityStartTime }}"
    - name: MssManifests
      value:
        - ManifestName: "{{ ManifestName }}"
          ManifestWindowSeconds: {{ ManifestWindowSeconds }}
          FilterConfiguration:
            ManifestFilter: "{{ ManifestFilter }}"
            DrmSettings: "{{ DrmSettings }}"
            Start: "{{ Start }}"
            End: "{{ End }}"
            TimeDelaySeconds: {{ TimeDelaySeconds }}
            ClipStartTime: "{{ ClipStartTime }}"
          ManifestLayout: "{{ ManifestLayout }}"
    - name: ForceEndpointErrorConfiguration
      description: |
        The failover settings for the endpoint.
      value:
        EndpointErrorConditions:
          - "{{ EndpointErrorConditions }}"
    - name: UriSeparator
      value: "{{ UriSeparator }}"
      valid_values: ['UNDERSCORE', 'HYPHEN']
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
    defaultValue="update_origin_endpoint"
    values={[
        { label: 'update_origin_endpoint', value: 'update_origin_endpoint' }
    ]}
>
<TabItem value="update_origin_endpoint">

Update the specified origin endpoint. Edit the packaging preferences on an endpoint to optimize the viewing experience. You can't edit the name of the endpoint. Any edits you make that impact the video output may not be reflected for a few minutes.

```sql
UPDATE aws.mediapackagev2.origin_endpoints
SET 
ContainerType = '{{ ContainerType }}',
Segment = '{{ Segment }}',
Description = '{{ Description }}',
StartoverWindowSeconds = {{ StartoverWindowSeconds }},
HlsManifests = '{{ HlsManifests }}',
LowLatencyHlsManifests = '{{ LowLatencyHlsManifests }}',
DashManifests = '{{ DashManifests }}',
MssManifests = '{{ MssManifests }}',
ForceEndpointErrorConfiguration = '{{ ForceEndpointErrorConfiguration }}',
UriSeparator = '{{ UriSeparator }}'
WHERE 
channel_group_name = '{{ channel_group_name }}' --required
AND channel_name = '{{ channel_name }}' --required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' --required
AND region = '{{ region }}' --required
AND ContainerType = '{{ ContainerType }}' --required
AND `x-amzn-update-if-match` = '{{ x-amzn-update-if-match}}'
RETURNING
Arn,
ChannelGroupName,
ChannelName,
ContainerType,
CreatedAt,
DashManifests,
Description,
ETag,
ForceEndpointErrorConfiguration,
HlsManifests,
LowLatencyHlsManifests,
ModifiedAt,
MssManifests,
OriginEndpointName,
Segment,
StartoverWindowSeconds,
Tags,
UriSeparator;
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

Origin endpoints can serve content until they're deleted. Delete the endpoint if it should no longer respond to playback requests. You must delete all endpoints from a channel before you can delete the channel.

```sql
DELETE FROM aws.mediapackagev2.origin_endpoints
WHERE channel_group_name = '{{ channel_group_name }}' --required
AND channel_name = '{{ channel_name }}' --required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_harvest_job"
    values={[
        { label: 'cancel_harvest_job', value: 'cancel_harvest_job' },
        { label: 'reset_origin_endpoint_state', value: 'reset_origin_endpoint_state' }
    ]}
>
<TabItem value="cancel_harvest_job">

Cancels an in-progress harvest job.

```sql
EXEC aws.mediapackagev2.origin_endpoints.cancel_harvest_job 
@channel_group_name='{{ channel_group_name }}' --required, 
@channel_name='{{ channel_name }}' --required, 
@origin_endpoint_name='{{ origin_endpoint_name }}' --required, 
@harvest_job_name='{{ harvest_job_name }}' --required, 
@region='{{ region }}' --required, 
@x-amzn-update-if-match='{{ x-amzn-update-if-match }}'
;
```
</TabItem>
<TabItem value="reset_origin_endpoint_state">

Resetting the origin endpoint can help to resolve unexpected behavior and other content packaging issues. It also helps to preserve special events when you don't want the previous content to be available for viewing. A reset clears out all previous content from the origin endpoint. MediaPackage might return old content from this endpoint in the first 30 seconds after the endpoint reset. For best results, when possible, wait 30 seconds from endpoint reset to send playback requests to this endpoint.

```sql
EXEC aws.mediapackagev2.origin_endpoints.reset_origin_endpoint_state 
@channel_group_name='{{ channel_group_name }}' --required, 
@channel_name='{{ channel_name }}' --required, 
@origin_endpoint_name='{{ origin_endpoint_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
