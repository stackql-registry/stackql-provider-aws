--- 
title: service_events
hide_title: false
hide_table_of_contents: false
keywords:
  - service_events
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>service_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.service_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_events"
    values={[
        { label: 'list_service_events', value: 'list_service_events' }
    ]}
>
<TabItem value="list_service_events">

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
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>The actor that triggered the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_details" /></td>
    <td><code>object</code></td>
    <td>The details of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the event. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of the event. (SERVICE_CREATED, SERVICE_DELETED, SERVICE_SYSTEM_ASSOCIATED, SERVICE_SYSTEM_DISASSOCIATED, SERVICE_RESOURCES_ASSOCIATED, SERVICE_RESOURCES_DISASSOCIATED, SERVICE_WORKFLOW_UPDATED, SERVICE_INPUT_SOURCES_UPDATED, SERVICE_POLICY_ASSOCIATED, SERVICE_POLICY_DISASSOCIATED, SERVICE_FUNCTION_CREATED, SERVICE_FUNCTION_UPDATED, SERVICE_FUNCTION_DELETED, SERVICE_FUNCTION_RESOURCES_ADDED, SERVICE_FUNCTION_RESOURCES_REMOVED, SERVICE_ACHIEVABILITY_UPDATED, ASSERTION_CREATED, ASSERTION_UPDATED, ASSERTION_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the event.</td>
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
    <td><a href="#list_service_events"><CopyableCode code="list_service_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-eventTypes"><code>eventTypes</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists events for a service.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for filtering events.</td>
</tr>
<tr id="parameter-eventTypes">
    <td><CopyableCode code="eventTypes" /></td>
    <td><code>array</code></td>
    <td>Filter events by type.</td>
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
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for filtering events.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_service_events"
    values={[
        { label: 'list_service_events', value: 'list_service_events' }
    ]}
>
<TabItem value="list_service_events">

Lists events for a service.

```sql
SELECT
actor,
event_details,
event_id,
event_type,
service_arn,
timestamp
FROM aws.resiliencehubv2.service_events
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND eventTypes = '{{ eventTypes }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
