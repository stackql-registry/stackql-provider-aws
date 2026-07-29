--- 
title: pull_request_events
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_request_events
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>pull_request_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_request_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.pull_request_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pull_request_events"
    values={[
        { label: 'describe_pull_request_events', value: 'describe_pull_request_events' }
    ]}
>
<TabItem value="describe_pull_request_events">

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
    <td><CopyableCode code="actor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with more commits or changing the status of a pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_rule_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about a pull request event.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_rule_overridden_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about an approval rule override event for a pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_state_changed_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about an approval state change for a pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="event_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The day and time of the pull request event, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_created_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the source and destination branches for the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_event_type" /></td>
    <td><code>string</code></td>
    <td>The type of the pull request event (for example, a status change event (PULL_REQUEST_STATUS_CHANGED) or update event (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)). (PULL_REQUEST_CREATED, PULL_REQUEST_STATUS_CHANGED, PULL_REQUEST_SOURCE_REFERENCE_UPDATED, PULL_REQUEST_MERGE_STATE_CHANGED, PULL_REQUEST_APPROVAL_RULE_CREATED, PULL_REQUEST_APPROVAL_RULE_UPDATED, PULL_REQUEST_APPROVAL_RULE_DELETED, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN, PULL_REQUEST_APPROVAL_STATE_CHANGED)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_merged_state_changed_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the change in mergability state for the pull request event.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_source_reference_updated_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the updated source branch for the pull request event.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_status_changed_event_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the change in status for the pull request event.</td>
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
    <td><a href="#describe_pull_request_events"><CopyableCode code="describe_pull_request_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more pull request events.</td>
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
    defaultValue="describe_pull_request_events"
    values={[
        { label: 'describe_pull_request_events', value: 'describe_pull_request_events' }
    ]}
>
<TabItem value="describe_pull_request_events">

Returns information about one or more pull request events.

```sql
SELECT
actor_arn,
approval_rule_event_metadata,
approval_rule_overridden_event_metadata,
approval_state_changed_event_metadata,
event_date,
pull_request_created_event_metadata,
pull_request_event_type,
pull_request_id,
pull_request_merged_state_changed_event_metadata,
pull_request_source_reference_updated_event_metadata,
pull_request_status_changed_event_metadata
FROM aws.codecommit.pull_request_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
