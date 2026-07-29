--- 
title: voice_tone_analysis_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_tone_analysis_tasks
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

Creates, updates, deletes, gets or lists a <code>voice_tone_analysis_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_tone_analysis_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.voice_tone_analysis_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_tone_analysis_task"
    values={[
        { label: 'get_voice_tone_analysis_task', value: 'get_voice_tone_analysis_task' }
    ]}
>
<TabItem value="get_voice_tone_analysis_task">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a voice tone analysis task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a voice tone analysis task was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="voice_tone_analysis_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the voice tone analysis task. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="voice_tone_analysis_task_status" /></td>
    <td><code>string</code></td>
    <td>The status of a voice tone analysis task. (NotStarted, Initializing, InProgress, Failed, Stopping, Stopped)</td>
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
    <td><a href="#get_voice_tone_analysis_task"><CopyableCode code="get_voice_tone_analysis_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-voice_tone_analysis_task_id"><code>voice_tone_analysis_task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a voice tone analysis task.</td>
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
    <td>The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-voice_tone_analysis_task_id">
    <td><CopyableCode code="voice_tone_analysis_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the voice tone analysis task.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_voice_tone_analysis_task"
    values={[
        { label: 'get_voice_tone_analysis_task', value: 'get_voice_tone_analysis_task' }
    ]}
>
<TabItem value="get_voice_tone_analysis_task">

Retrieves the details of a voice tone analysis task.

```sql
SELECT
created_timestamp,
updated_timestamp,
voice_tone_analysis_task_id,
voice_tone_analysis_task_status
FROM aws.chime_sdk_media_pipelines.voice_tone_analysis_tasks
WHERE identifier = '{{ identifier }}' -- required
AND voice_tone_analysis_task_id = '{{ voice_tone_analysis_task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
