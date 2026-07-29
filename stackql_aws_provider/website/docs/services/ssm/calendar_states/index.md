--- 
title: calendar_states
hide_title: false
hide_table_of_contents: false
keywords:
  - calendar_states
  - ssm
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

Creates, updates, deletes, gets or lists a <code>calendar_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="calendar_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.calendar_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_calendar_state"
    values={[
        { label: 'get_calendar_state', value: 'get_calendar_state' }
    ]}
>
<TabItem value="get_calendar_state">

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
    <td><CopyableCode code="at_time" /></td>
    <td><code>string</code></td>
    <td>The time, as an ISO 8601 string, that you specified in your command. If you don't specify a time, GetCalendarState uses the current time.</td>
</tr>
<tr>
    <td><CopyableCode code="next_transition_time" /></td>
    <td><code>string</code></td>
    <td>The time, as an ISO 8601 string, that the calendar state will change. If the current calendar state is OPEN, NextTransitionTime indicates when the calendar state changes to CLOSED, and vice-versa.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the calendar. An OPEN calendar indicates that actions are allowed to proceed, and a CLOSED calendar indicates that actions aren't allowed to proceed. (OPEN, CLOSED)</td>
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
    <td><a href="#get_calendar_state"><CopyableCode code="get_calendar_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, GetCalendarState returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, GetCalendarState uses the current time. Change Calendar entries have two possible states: OPEN or CLOSED. If you specify more than one calendar in a request, the command returns the status of OPEN only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is CLOSED. For more information about Change Calendar, a tool in Amazon Web Services Systems Manager, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.</td>
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
    defaultValue="get_calendar_state"
    values={[
        { label: 'get_calendar_state', value: 'get_calendar_state' }
    ]}
>
<TabItem value="get_calendar_state">

Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, GetCalendarState returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, GetCalendarState uses the current time. Change Calendar entries have two possible states: OPEN or CLOSED. If you specify more than one calendar in a request, the command returns the status of OPEN only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is CLOSED. For more information about Change Calendar, a tool in Amazon Web Services Systems Manager, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.

```sql
SELECT
at_time,
next_transition_time,
state
FROM aws.ssm.calendar_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
