--- 
title: event_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - event_logs
  - codecatalyst
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

Creates, updates, deletes, gets or lists an <code>event_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.event_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_event_logs"
    values={[
        { label: 'list_event_logs', value: 'list_event_logs' }
    ]}
>
<TabItem value="list_event_logs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The code of the error, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="event_category" /></td>
    <td><code>string</code></td>
    <td>The category for the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_source" /></td>
    <td><code>string</code></td>
    <td>The source of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the event took place, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_type" /></td>
    <td><code>string</code></td>
    <td>The type of the event. (READONLY, MUTATION)</td>
</tr>
<tr>
    <td><CopyableCode code="project_information" /></td>
    <td><code>object</code></td>
    <td>Information about the project where the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="request_payload" /></td>
    <td><code>object</code></td>
    <td>Information about the payload of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="response_payload" /></td>
    <td><code>object</code></td>
    <td>Information about the payload of the response, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="source_ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the user whose actions are recorded in the event.</td>
</tr>
<tr>
    <td><CopyableCode code="user_agent" /></td>
    <td><code>string</code></td>
    <td>The user agent whose actions are recorded in the event.</td>
</tr>
<tr>
    <td><CopyableCode code="user_identity" /></td>
    <td><code>object</code></td>
    <td>The system-generated unique ID of the user whose actions are recorded in the event.</td>
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
    <td><a href="#list_event_logs"><CopyableCode code="list_event_logs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of events that occurred during a specific time in a space. You can use these events to audit user and system activity in a space. For more information, see Monitoring in the Amazon CodeCatalyst User Guide. ListEventLogs guarantees events for the last 30 days in a given space. You can also view and retrieve a list of management events over the last 90 days for Amazon CodeCatalyst in the CloudTrail console by viewing Event history, or by creating a trail to create and maintain a record of events that extends past 90 days. For more information, see Working with CloudTrail Event History and Working with CloudTrail trails.</td>
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
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_event_logs"
    values={[
        { label: 'list_event_logs', value: 'list_event_logs' }
    ]}
>
<TabItem value="list_event_logs">

Retrieves a list of events that occurred during a specific time in a space. You can use these events to audit user and system activity in a space. For more information, see Monitoring in the Amazon CodeCatalyst User Guide. ListEventLogs guarantees events for the last 30 days in a given space. You can also view and retrieve a list of management events over the last 90 days for Amazon CodeCatalyst in the CloudTrail console by viewing Event history, or by creating a trail to create and maintain a record of events that extends past 90 days. For more information, see Working with CloudTrail Event History and Working with CloudTrail trails.

```sql
SELECT
id,
error_code,
event_category,
event_name,
event_source,
event_time,
event_type,
operation_type,
project_information,
request_id,
request_payload,
response_payload,
source_ip_address,
user_agent,
user_identity
FROM aws.codecatalyst.event_logs
WHERE space_name = '{{ space_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
