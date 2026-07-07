--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - medialive
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_schedule"
    values={[
        { label: 'describe_schedule', value: 'describe_schedule' }
    ]}
>
<TabItem value="describe_schedule">

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
    <td><CopyableCode code="ActionName" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleActionSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for this schedule action.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleActionStartSettings" /></td>
    <td><code>object</code></td>
    <td>The time for the action to start in the channel.</td>
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
    <td><a href="#describe_schedule"><CopyableCode code="describe_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Get a channel schedule</td>
</tr>
<tr>
    <td><a href="#delete_schedule"><CopyableCode code="delete_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_id"><code>channel_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete all schedule actions on a channel.</td>
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
<tr id="parameter-channel_id">
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>Id of the channel whose schedule is being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_schedule"
    values={[
        { label: 'describe_schedule', value: 'describe_schedule' }
    ]}
>
<TabItem value="describe_schedule">

Get a channel schedule

```sql
SELECT
ActionName,
ScheduleActionSettings,
ScheduleActionStartSettings
FROM aws.medialive.schedules
WHERE channel_id = '{{ channel_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schedule"
    values={[
        { label: 'delete_schedule', value: 'delete_schedule' }
    ]}
>
<TabItem value="delete_schedule">

Delete all schedule actions on a channel.

```sql
DELETE FROM aws.medialive.schedules
WHERE channel_id = '{{ channel_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
