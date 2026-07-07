--- 
title: media_capture_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - media_capture_pipelines
  - chime_sdk_media_pipelines
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

Creates, updates, deletes, gets or lists a <code>media_capture_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_capture_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.media_capture_pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media_capture_pipeline"
    values={[
        { label: 'get_media_capture_pipeline', value: 'get_media_capture_pipeline' },
        { label: 'list_media_capture_pipelines', value: 'list_media_capture_pipelines' }
    ]}
>
<TabItem value="get_media_capture_pipeline">

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
    <td><CopyableCode code="ChimeSdkMeetingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. SourceType must be ChimeSdkMeeting.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the pipeline was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaPipelineArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the media capture pipeline (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MediaPipelineId" /></td>
    <td><code>string</code></td>
    <td>The ID of a media pipeline. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SinkArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the destination to which the media artifacts are saved. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SinkIamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the sink role to be used with AwsKmsKeyId in SseAwsKeyManagementParams. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SinkType" /></td>
    <td><code>string</code></td>
    <td>Destination type to which the media artifacts are saved. You must use an S3 Bucket. (S3Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the source from which the media artifacts are saved. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>Source type from which media artifacts are saved. You must use ChimeMeeting. (ChimeSdkMeeting)</td>
</tr>
<tr>
    <td><CopyableCode code="SseAwsKeyManagementParams" /></td>
    <td><code>object</code></td>
    <td>Contains server side encryption parameters to be used by media capture pipeline. The parameters can also be used by media concatenation pipeline taking media capture pipeline as a media source.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the media pipeline. (Initializing, InProgress, Failed, Stopping, Stopped, Paused, NotStarted)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the pipeline was updated, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_media_capture_pipelines">

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
    <td><CopyableCode code="MediaCapturePipelines" /></td>
    <td><code>array</code></td>
    <td>The media pipeline objects in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_media_capture_pipeline"><CopyableCode code="get_media_capture_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-media_pipeline_id"><code>media_pipeline_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an existing media pipeline.</td>
</tr>
<tr>
    <td><a href="#list_media_capture_pipelines"><CopyableCode code="list_media_capture_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Returns a list of media pipelines.</td>
</tr>
<tr>
    <td><a href="#create_media_capture_pipeline"><CopyableCode code="create_media_capture_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-SinkType"><code>SinkType</code></a>, <a href="#parameter-SinkArn"><code>SinkArn</code></a></td>
    <td></td>
    <td>Creates a media pipeline.</td>
</tr>
<tr>
    <td><a href="#delete_media_capture_pipeline"><CopyableCode code="delete_media_capture_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-media_pipeline_id"><code>media_pipeline_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the media pipeline.</td>
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
<tr id="parameter-media_pipeline_id">
    <td><CopyableCode code="media_pipeline_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the media pipeline being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Valid Range: 1 - 99.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_media_capture_pipeline"
    values={[
        { label: 'get_media_capture_pipeline', value: 'get_media_capture_pipeline' },
        { label: 'list_media_capture_pipelines', value: 'list_media_capture_pipelines' }
    ]}
>
<TabItem value="get_media_capture_pipeline">

Gets an existing media pipeline.

```sql
SELECT
ChimeSdkMeetingConfiguration,
CreatedTimestamp,
MediaPipelineArn,
MediaPipelineId,
SinkArn,
SinkIamRoleArn,
SinkType,
SourceArn,
SourceType,
SseAwsKeyManagementParams,
Status,
UpdatedTimestamp
FROM aws.chime_sdk_media_pipelines.media_capture_pipelines
WHERE media_pipeline_id = '{{ media_pipeline_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_media_capture_pipelines">

Returns a list of media pipelines.

```sql
SELECT
MediaCapturePipelines,
NextToken
FROM aws.chime_sdk_media_pipelines.media_capture_pipelines
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_media_capture_pipeline"
    values={[
        { label: 'create_media_capture_pipeline', value: 'create_media_capture_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_media_capture_pipeline">

Creates a media pipeline.

```sql
INSERT INTO aws.chime_sdk_media_pipelines.media_capture_pipelines (
SourceType,
SourceArn,
SinkType,
SinkArn,
ClientRequestToken,
ChimeSdkMeetingConfiguration,
SseAwsKeyManagementParams,
SinkIamRoleArn,
Tags,
region
)
SELECT 
'{{ SourceType }}' /* required */,
'{{ SourceArn }}' /* required */,
'{{ SinkType }}' /* required */,
'{{ SinkArn }}' /* required */,
'{{ ClientRequestToken }}',
'{{ ChimeSdkMeetingConfiguration }}',
'{{ SseAwsKeyManagementParams }}',
'{{ SinkIamRoleArn }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
MediaCapturePipeline
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: media_capture_pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the media_capture_pipelines resource.
    - name: SourceType
      value: "{{ SourceType }}"
      valid_values: ['ChimeSdkMeeting']
    - name: SourceArn
      value: "{{ SourceArn }}"
    - name: SinkType
      value: "{{ SinkType }}"
      valid_values: ['S3Bucket']
    - name: SinkArn
      value: "{{ SinkArn }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: ChimeSdkMeetingConfiguration
      description: |
        The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. SourceType must be ChimeSdkMeeting.
      value:
        SourceConfiguration:
          SelectedVideoStreams:
            AttendeeIds:
              - "{{ AttendeeIds }}"
            ExternalUserIds:
              - "{{ ExternalUserIds }}"
        ArtifactsConfiguration:
          Audio:
            MuxType: "{{ MuxType }}"
          Video:
            State: "{{ State }}"
            MuxType: "{{ MuxType }}"
          Content:
            State: "{{ State }}"
            MuxType: "{{ MuxType }}"
          CompositedVideo:
            Layout: "{{ Layout }}"
            Resolution: "{{ Resolution }}"
            GridViewConfiguration:
              ContentShareLayout: "{{ ContentShareLayout }}"
              PresenterOnlyConfiguration:
                PresenterPosition: "{{ PresenterPosition }}"
              ActiveSpeakerOnlyConfiguration:
                ActiveSpeakerPosition: "{{ ActiveSpeakerPosition }}"
              HorizontalLayoutConfiguration:
                TileOrder: "{{ TileOrder }}"
                TilePosition: "{{ TilePosition }}"
                TileCount: {{ TileCount }}
                TileAspectRatio: "{{ TileAspectRatio }}"
              VerticalLayoutConfiguration:
                TileOrder: "{{ TileOrder }}"
                TilePosition: "{{ TilePosition }}"
                TileCount: {{ TileCount }}
                TileAspectRatio: "{{ TileAspectRatio }}"
              VideoAttribute:
                CornerRadius: {{ CornerRadius }}
                BorderColor: "{{ BorderColor }}"
                HighlightColor: "{{ HighlightColor }}"
                BorderThickness: {{ BorderThickness }}
              CanvasOrientation: "{{ CanvasOrientation }}"
    - name: SseAwsKeyManagementParams
      description: |
        Contains server side encryption parameters to be used by media capture pipeline. The parameters can also be used by media concatenation pipeline taking media capture pipeline as a media source.
      value:
        AwsKmsKeyId: "{{ AwsKmsKeyId }}"
        AwsKmsEncryptionContext: "{{ AwsKmsEncryptionContext }}"
    - name: SinkIamRoleArn
      value: "{{ SinkIamRoleArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_media_capture_pipeline"
    values={[
        { label: 'delete_media_capture_pipeline', value: 'delete_media_capture_pipeline' }
    ]}
>
<TabItem value="delete_media_capture_pipeline">

Deletes the media pipeline.

```sql
DELETE FROM aws.chime_sdk_media_pipelines.media_capture_pipelines
WHERE media_pipeline_id = '{{ media_pipeline_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
