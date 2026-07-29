--- 
title: media_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - media_pipelines
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

Creates, updates, deletes, gets or lists a <code>media_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.media_pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media_pipeline"
    values={[
        { label: 'get_media_pipeline', value: 'get_media_pipeline' },
        { label: 'list_media_pipelines', value: 'list_media_pipelines' }
    ]}
>
<TabItem value="get_media_pipeline">

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
    <td><CopyableCode code="media_capture_pipeline" /></td>
    <td><code>object</code></td>
    <td>A pipeline that enables users to capture audio and video.</td>
</tr>
<tr>
    <td><CopyableCode code="media_concatenation_pipeline" /></td>
    <td><code>object</code></td>
    <td>The media concatenation pipeline in a media pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="media_insights_pipeline" /></td>
    <td><code>object</code></td>
    <td>The media insights pipeline of a media pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="media_live_connector_pipeline" /></td>
    <td><code>object</code></td>
    <td>The connector pipeline of the media pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="media_stream_pipeline" /></td>
    <td><code>object</code></td>
    <td>Designates a media pipeline as a media stream pipeline.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_media_pipelines">

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
    <td><CopyableCode code="media_pipelines" /></td>
    <td><code>array</code></td>
    <td>The media pipeline objects in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
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
    <td><a href="#get_media_pipeline"><CopyableCode code="get_media_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-media_pipeline_id"><code>media_pipeline_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an existing media pipeline.</td>
</tr>
<tr>
    <td><a href="#list_media_pipelines"><CopyableCode code="list_media_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Returns a list of media pipelines.</td>
</tr>
<tr>
    <td><a href="#delete_media_pipeline"><CopyableCode code="delete_media_pipeline" /></a></td>
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
    <td>The ID of the media pipeline to delete.</td>
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
    defaultValue="get_media_pipeline"
    values={[
        { label: 'get_media_pipeline', value: 'get_media_pipeline' },
        { label: 'list_media_pipelines', value: 'list_media_pipelines' }
    ]}
>
<TabItem value="get_media_pipeline">

Gets an existing media pipeline.

```sql
SELECT
media_capture_pipeline,
media_concatenation_pipeline,
media_insights_pipeline,
media_live_connector_pipeline,
media_stream_pipeline
FROM aws.chime_sdk_media_pipelines.media_pipelines
WHERE media_pipeline_id = '{{ media_pipeline_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_media_pipelines">

Returns a list of media pipelines.

```sql
SELECT
media_pipelines,
next_token
FROM aws.chime_sdk_media_pipelines.media_pipelines
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_media_pipeline"
    values={[
        { label: 'delete_media_pipeline', value: 'delete_media_pipeline' }
    ]}
>
<TabItem value="delete_media_pipeline">

Deletes the media pipeline.

```sql
DELETE FROM aws.chime_sdk_media_pipelines.media_pipelines
WHERE media_pipeline_id = '{{ media_pipeline_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
