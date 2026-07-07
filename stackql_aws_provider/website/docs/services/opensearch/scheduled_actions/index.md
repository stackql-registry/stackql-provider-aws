--- 
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>scheduled_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.scheduled_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scheduled_actions"
    values={[
        { label: 'list_scheduled_actions', value: 'list_scheduled_actions' }
    ]}
>
<TabItem value="list_scheduled_actions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledActions" /></td>
    <td><code>array</code></td>
    <td>A list of actions that are scheduled for the domain.</td>
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
    <td><a href="#list_scheduled_actions"><CopyableCode code="list_scheduled_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of configuration changes that are scheduled for a domain. These changes can be service software updates or blue/green Auto-Tune enhancements.</td>
</tr>
<tr>
    <td><a href="#update_scheduled_action"><CopyableCode code="update_scheduled_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActionID"><code>ActionID</code></a>, <a href="#parameter-ActionType"><code>ActionType</code></a>, <a href="#parameter-ScheduleAt"><code>ScheduleAt</code></a></td>
    <td></td>
    <td>Reschedules a planned domain configuration change for a later time. This change can be a scheduled service software update or a blue/green Auto-Tune enhancement.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain to reschedule an action for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListScheduledActions operation returns a nextToken, you can include the returned nextToken in subsequent ListScheduledActions operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_scheduled_actions"
    values={[
        { label: 'list_scheduled_actions', value: 'list_scheduled_actions' }
    ]}
>
<TabItem value="list_scheduled_actions">

Retrieves a list of configuration changes that are scheduled for a domain. These changes can be service software updates or blue/green Auto-Tune enhancements.

```sql
SELECT
NextToken,
ScheduledActions
FROM aws.opensearch.scheduled_actions
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scheduled_action"
    values={[
        { label: 'update_scheduled_action', value: 'update_scheduled_action' }
    ]}
>
<TabItem value="update_scheduled_action">

Reschedules a planned domain configuration change for a later time. This change can be a scheduled service software update or a blue/green Auto-Tune enhancement.

```sql
UPDATE aws.opensearch.scheduled_actions
SET 
ActionID = '{{ ActionID }}',
ActionType = '{{ ActionType }}',
ScheduleAt = '{{ ScheduleAt }}',
DesiredStartTime = {{ DesiredStartTime }}
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND ActionID = '{{ ActionID }}' --required
AND ActionType = '{{ ActionType }}' --required
AND ScheduleAt = '{{ ScheduleAt }}' --required
RETURNING
ScheduledAction;
```
</TabItem>
</Tabs>
