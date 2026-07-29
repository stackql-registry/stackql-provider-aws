--- 
title: flow_execution_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_execution_messages
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>flow_execution_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_execution_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.flow_execution_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_flow_execution_messages"
    values={[
        { label: 'list_flow_execution_messages', value: 'list_flow_execution_messages' }
    ]}
>
<TabItem value="list_flow_execution_messages">

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
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of flow event . (EXECUTION_STARTED, EXECUTION_FAILED, EXECUTION_ABORTED, EXECUTION_SUCCEEDED, STEP_STARTED, STEP_FAILED, STEP_SUCCEEDED, ACTIVITY_SCHEDULED, ACTIVITY_STARTED, ACTIVITY_FAILED, ACTIVITY_SUCCEEDED, START_FLOW_EXECUTION_TASK, SCHEDULE_NEXT_READY_STEPS_TASK, THING_ACTION_TASK, THING_ACTION_TASK_FAILED, THING_ACTION_TASK_SUCCEEDED, ACKNOWLEDGE_TASK_MESSAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the message.</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>string</code></td>
    <td>A string containing information about the flow event.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the message was last updated.</td>
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
    <td><a href="#list_flow_execution_messages"><CopyableCode code="list_flow_execution_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of objects that contain information about events in a flow execution.</td>
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
    defaultValue="list_flow_execution_messages"
    values={[
        { label: 'list_flow_execution_messages', value: 'list_flow_execution_messages' }
    ]}
>
<TabItem value="list_flow_execution_messages">

Returns a list of objects that contain information about events in a flow execution.

```sql
SELECT
event_type,
message_id,
payload,
timestamp
FROM aws.iotthingsgraph.flow_execution_messages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
