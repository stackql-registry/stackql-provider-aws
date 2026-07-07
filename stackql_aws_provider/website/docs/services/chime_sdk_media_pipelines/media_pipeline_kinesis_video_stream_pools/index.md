--- 
title: media_pipeline_kinesis_video_stream_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - media_pipeline_kinesis_video_stream_pools
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

Creates, updates, deletes, gets or lists a <code>media_pipeline_kinesis_video_stream_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_pipeline_kinesis_video_stream_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.media_pipeline_kinesis_video_stream_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media_pipeline_kinesis_video_stream_pool"
    values={[
        { label: 'get_media_pipeline_kinesis_video_stream_pool', value: 'get_media_pipeline_kinesis_video_stream_pool' },
        { label: 'list_media_pipeline_kinesis_video_stream_pools', value: 'list_media_pipeline_kinesis_video_stream_pools' }
    ]}
>
<TabItem value="get_media_pipeline_kinesis_video_stream_pool">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="PoolArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the video stream pool configuration. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the video stream pool in the configuration. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PoolName" /></td>
    <td><code>string</code></td>
    <td>The name of the video stream pool configuration. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PoolSize" /></td>
    <td><code>integer</code></td>
    <td>The size of the video stream pool in the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="PoolStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the video stream pool in the configuration. (CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of an Kinesis video stream. If a meeting uses an opt-in Region as its MediaRegion, the KVS stream must be in that same Region. For example, if a meeting uses the af-south-1 Region, the KVS stream must also be in af-south-1. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses ca-central-1, the KVS stream can be in eu-west-2, us-east-1, af-south-1, or any other Region that the Amazon Chime SDK supports. To learn which AWS Region a meeting uses, call the GetMeeting API and use the MediaRegion parameter from the response. For more information about opt-in Regions, refer to Available Regions in the Amazon Chime SDK Developer Guide, and Specify which AWS Regions your account can use, in the AWS Account Management Reference Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_media_pipeline_kinesis_video_stream_pools">

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
    <td><CopyableCode code="KinesisVideoStreamPools" /></td>
    <td><code>array</code></td>
    <td>The list of video stream pools.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_media_pipeline_kinesis_video_stream_pool"><CopyableCode code="get_media_pipeline_kinesis_video_stream_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Kinesis video stream pool.</td>
</tr>
<tr>
    <td><a href="#list_media_pipeline_kinesis_video_stream_pools"><CopyableCode code="list_media_pipeline_kinesis_video_stream_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the video stream pools in the media pipeline.</td>
</tr>
<tr>
    <td><a href="#create_media_pipeline_kinesis_video_stream_pool"><CopyableCode code="create_media_pipeline_kinesis_video_stream_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamConfiguration"><code>StreamConfiguration</code></a>, <a href="#parameter-PoolName"><code>PoolName</code></a></td>
    <td></td>
    <td>Creates an Amazon Kinesis Video Stream pool for use with media stream pipelines. If a meeting uses an opt-in Region as its MediaRegion, the KVS stream must be in that same Region. For example, if a meeting uses the af-south-1 Region, the KVS stream must also be in af-south-1. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses ca-central-1, the KVS stream can be in eu-west-2, us-east-1, af-south-1, or any other Region that the Amazon Chime SDK supports. To learn which AWS Region a meeting uses, call the GetMeeting API and use the MediaRegion parameter from the response. For more information about opt-in Regions, refer to Available Regions in the Amazon Chime SDK Developer Guide, and Specify which AWS Regions your account can use, in the AWS Account Management Reference Guide.</td>
</tr>
<tr>
    <td><a href="#update_media_pipeline_kinesis_video_stream_pool"><CopyableCode code="update_media_pipeline_kinesis_video_stream_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Kinesis Video Stream pool in a media pipeline.</td>
</tr>
<tr>
    <td><a href="#delete_media_pipeline_kinesis_video_stream_pool"><CopyableCode code="delete_media_pipeline_kinesis_video_stream_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Kinesis Video Stream pool.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_media_pipeline_kinesis_video_stream_pool"
    values={[
        { label: 'get_media_pipeline_kinesis_video_stream_pool', value: 'get_media_pipeline_kinesis_video_stream_pool' },
        { label: 'list_media_pipeline_kinesis_video_stream_pools', value: 'list_media_pipeline_kinesis_video_stream_pools' }
    ]}
>
<TabItem value="get_media_pipeline_kinesis_video_stream_pool">

Gets an Kinesis video stream pool.

```sql
SELECT
CreatedTimestamp,
PoolArn,
PoolId,
PoolName,
PoolSize,
PoolStatus,
StreamConfiguration,
UpdatedTimestamp
FROM aws.chime_sdk_media_pipelines.media_pipeline_kinesis_video_stream_pools
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_media_pipeline_kinesis_video_stream_pools">

Lists the video stream pools in the media pipeline.

```sql
SELECT
KinesisVideoStreamPools,
NextToken
FROM aws.chime_sdk_media_pipelines.media_pipeline_kinesis_video_stream_pools
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_media_pipeline_kinesis_video_stream_pool"
    values={[
        { label: 'create_media_pipeline_kinesis_video_stream_pool', value: 'create_media_pipeline_kinesis_video_stream_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_media_pipeline_kinesis_video_stream_pool">

Creates an Amazon Kinesis Video Stream pool for use with media stream pipelines. If a meeting uses an opt-in Region as its MediaRegion, the KVS stream must be in that same Region. For example, if a meeting uses the af-south-1 Region, the KVS stream must also be in af-south-1. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses ca-central-1, the KVS stream can be in eu-west-2, us-east-1, af-south-1, or any other Region that the Amazon Chime SDK supports. To learn which AWS Region a meeting uses, call the GetMeeting API and use the MediaRegion parameter from the response. For more information about opt-in Regions, refer to Available Regions in the Amazon Chime SDK Developer Guide, and Specify which AWS Regions your account can use, in the AWS Account Management Reference Guide.

```sql
INSERT INTO aws.chime_sdk_media_pipelines.media_pipeline_kinesis_video_stream_pools (
StreamConfiguration,
PoolName,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ StreamConfiguration }}' /* required */,
'{{ PoolName }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
KinesisVideoStreamPoolConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: media_pipeline_kinesis_video_stream_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the media_pipeline_kinesis_video_stream_pools resource.
    - name: StreamConfiguration
      description: |
        The configuration of an Kinesis video stream. If a meeting uses an opt-in Region as its MediaRegion, the KVS stream must be in that same Region. For example, if a meeting uses the af-south-1 Region, the KVS stream must also be in af-south-1. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses ca-central-1, the KVS stream can be in eu-west-2, us-east-1, af-south-1, or any other Region that the Amazon Chime SDK supports. To learn which AWS Region a meeting uses, call the GetMeeting API and use the MediaRegion parameter from the response. For more information about opt-in Regions, refer to Available Regions in the Amazon Chime SDK Developer Guide, and Specify which AWS Regions your account can use, in the AWS Account Management Reference Guide.
      value:
        Region: "{{ Region }}"
        DataRetentionInHours: {{ DataRetentionInHours }}
    - name: PoolName
      value: "{{ PoolName }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_media_pipeline_kinesis_video_stream_pool"
    values={[
        { label: 'update_media_pipeline_kinesis_video_stream_pool', value: 'update_media_pipeline_kinesis_video_stream_pool' }
    ]}
>
<TabItem value="update_media_pipeline_kinesis_video_stream_pool">

Updates an Amazon Kinesis Video Stream pool in a media pipeline.

```sql
UPDATE aws.chime_sdk_media_pipelines.media_pipeline_kinesis_video_stream_pools
SET 
StreamConfiguration = '{{ StreamConfiguration }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
KinesisVideoStreamPoolConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_media_pipeline_kinesis_video_stream_pool"
    values={[
        { label: 'delete_media_pipeline_kinesis_video_stream_pool', value: 'delete_media_pipeline_kinesis_video_stream_pool' }
    ]}
>
<TabItem value="delete_media_pipeline_kinesis_video_stream_pool">

Deletes an Amazon Kinesis Video Stream pool.

```sql
DELETE FROM aws.chime_sdk_media_pipelines.media_pipeline_kinesis_video_stream_pools
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
