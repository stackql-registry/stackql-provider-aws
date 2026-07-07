--- 
title: stage_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - stage_sessions
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>stage_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stage_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.stage_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stage_session"
    values={[
        { label: 'get_stage_session', value: 'get_stage_session' },
        { label: 'list_stage_sessions', value: 'list_stage_sessions' }
    ]}
>
<TabItem value="get_stage_session">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if the stage is active.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>ID of the session within the stage. (pattern: &lt;code&gt;st-&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>ISO 8601 timestamp (returned as a string) when this stage session began.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stage_sessions">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more stage sessions than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stageSessions" /></td>
    <td><code>array</code></td>
    <td>List of matching stage sessions.</td>
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
    <td><a href="#get_stage_session"><CopyableCode code="get_stage_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified stage session.</td>
</tr>
<tr>
    <td><a href="#list_stage_sessions"><CopyableCode code="list_stage_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all sessions for a specified stage.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_stage_session"
    values={[
        { label: 'get_stage_session', value: 'get_stage_session' },
        { label: 'list_stage_sessions', value: 'list_stage_sessions' }
    ]}
>
<TabItem value="get_stage_session">

Gets information for the specified stage session.

```sql
SELECT
endTime,
sessionId,
startTime
FROM aws.ivs_realtime.stage_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stage_sessions">

Gets all sessions for a specified stage.

```sql
SELECT
nextToken,
stageSessions
FROM aws.ivs_realtime.stage_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
