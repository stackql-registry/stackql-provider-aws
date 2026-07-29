--- 
title: speaker_search_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - speaker_search_tasks
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

Creates, updates, deletes, gets or lists a <code>speaker_search_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="speaker_search_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.speaker_search_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_speaker_search_task"
    values={[
        { label: 'get_speaker_search_task', value: 'get_speaker_search_task' }
    ]}
>
<TabItem value="get_speaker_search_task">

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
    <td>The time at which a speaker search task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="speaker_search_task_id" /></td>
    <td><code>string</code></td>
    <td>The speaker search task ID. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="speaker_search_task_status" /></td>
    <td><code>string</code></td>
    <td>The status of the speaker search task. (NotStarted, Initializing, InProgress, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a speaker search task was updated.</td>
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
    <td><a href="#get_speaker_search_task"><CopyableCode code="get_speaker_search_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-speaker_search_task_id"><code>speaker_search_task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of the specified speaker search task.</td>
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
<tr id="parameter-speaker_search_task_id">
    <td><CopyableCode code="speaker_search_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the speaker search task.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_speaker_search_task"
    values={[
        { label: 'get_speaker_search_task', value: 'get_speaker_search_task' }
    ]}
>
<TabItem value="get_speaker_search_task">

Retrieves the details of the specified speaker search task.

```sql
SELECT
created_timestamp,
speaker_search_task_id,
speaker_search_task_status,
updated_timestamp
FROM aws.chime_sdk_media_pipelines.speaker_search_tasks
WHERE identifier = '{{ identifier }}' -- required
AND speaker_search_task_id = '{{ speaker_search_task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
