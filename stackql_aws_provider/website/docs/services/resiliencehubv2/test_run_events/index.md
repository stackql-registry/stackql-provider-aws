--- 
title: test_run_events
hide_title: false
hide_table_of_contents: false
keywords:
  - test_run_events
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

Creates, updates, deletes, gets or lists a <code>test_run_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_run_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.test_run_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_run_events"
    values={[
        { label: 'list_test_run_events', value: 'list_test_run_events' }
    ]}
>
<TabItem value="list_test_run_events">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Machine-parseable key-value attributes for the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of the event, such as action_started, action_completed, or rto_recovery_detected.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of what happened.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the event occurred.</td>
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
    <td><a href="#list_test_run_events"><CopyableCode code="list_test_run_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_run_id"><code>test_run_id</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-startedAt"><code>startedAt</code></a>, <a href="#parameter-endedAt"><code>endedAt</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the events in a test run's timeline.</td>
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
    <td>The ARN of the service the test run belongs to.</td>
</tr>
<tr id="parameter-test_run_id">
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test run to list events for.</td>
</tr>
<tr id="parameter-endedAt">
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return events at or before this timestamp.</td>
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
<tr id="parameter-startedAt">
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Return events at or after this timestamp.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_run_events"
    values={[
        { label: 'list_test_run_events', value: 'list_test_run_events' }
    ]}
>
<TabItem value="list_test_run_events">

Lists the events in a test run's timeline.

```sql
SELECT
attributes,
event_id,
event_type,
message,
timestamp
FROM aws.resiliencehubv2.test_run_events
WHERE test_run_id = '{{ test_run_id }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND startedAt = '{{ startedAt }}'
AND endedAt = '{{ endedAt }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
