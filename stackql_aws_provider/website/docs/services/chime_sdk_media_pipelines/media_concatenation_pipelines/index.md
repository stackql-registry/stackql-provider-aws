--- 
title: media_concatenation_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - media_concatenation_pipelines
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

Creates, updates, deletes, gets or lists a <code>media_concatenation_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_concatenation_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.media_concatenation_pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_media_concatenation_pipeline"><CopyableCode code="create_media_concatenation_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Sources"><code>Sources</code></a>, <a href="#parameter-Sinks"><code>Sinks</code></a></td>
    <td></td>
    <td>Creates a media concatenation pipeline.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_media_concatenation_pipeline"
    values={[
        { label: 'create_media_concatenation_pipeline', value: 'create_media_concatenation_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_media_concatenation_pipeline">

Creates a media concatenation pipeline.

```sql
INSERT INTO aws.chime_sdk_media_pipelines.media_concatenation_pipelines (
Sources,
Sinks,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ Sources }}' /* required */,
'{{ Sinks }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
MediaConcatenationPipeline
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: media_concatenation_pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the media_concatenation_pipelines resource.
    - name: Sources
      value:
        - Type: "{{ Type }}"
          MediaCapturePipelineSourceConfiguration:
            MediaPipelineArn: "{{ MediaPipelineArn }}"
            ChimeSdkMeetingConfiguration:
              ArtifactsConfiguration:
                Audio:
                  State: "{{ State }}"
                Video:
                  State: "{{ State }}"
                Content:
                  State: "{{ State }}"
                DataChannel:
                  State: "{{ State }}"
                TranscriptionMessages:
                  State: "{{ State }}"
                MeetingEvents:
                  State: "{{ State }}"
                CompositedVideo:
                  State: "{{ State }}"
    - name: Sinks
      value:
        - Type: "{{ Type }}"
          S3BucketSinkConfiguration:
            Destination: "{{ Destination }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
