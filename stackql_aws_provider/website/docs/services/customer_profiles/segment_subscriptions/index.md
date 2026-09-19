--- 
title: segment_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_subscriptions
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>segment_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.segment_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment_subscription"
    values={[
        { label: 'get_segment_subscription', value: 'get_segment_subscription' }
    ]}
>
<TabItem value="get_segment_subscription">

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
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent configuration change.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A status message providing additional context, such as a failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_configuration" /></td>
    <td><code>object</code></td>
    <td>The schedule configuration for periodic membership event notifications.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_executions" /></td>
    <td><code>object</code></td>
    <td>Information about scheduled execution timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription was first started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle status of the subscription. The following are valid values: STARTING: Initial snapshot is in progress. RUNNING: Notifications are active and running. STOPPED: Notifications have been stopped. FAILED: Notifications failed (for example, the Amazon Kinesis data stream became inaccessible). (STARTING, RUNNING, STOPPED, FAILED)</td>
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
    <td><a href="#get_segment_subscription"><CopyableCode code="get_segment_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current subscription configuration, execution schedule, and status for segment membership events.</td>
</tr>
<tr>
    <td><a href="#put_segment_subscription"><CopyableCode code="put_segment_subscription" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates a segment subscription for membership events. When a subscription is created, an initial snapshot is taken and the system begins monitoring for membership changes. You can optionally set a schedule configuration interval to control how often membership snapshots are run. The interval can be from 1 to 24 hours. If not set, the interval defaults to 24 hours. Scheduled snapshots run on a best-effort basis. If a scheduled snapshot takes longer than the configured interval, the next scheduled run does not start until the in-progress snapshot completes, so a run might be delayed or skipped and is not guaranteed to occur at exactly the requested time. For Classic segments, membership events are generated from these scheduled snapshots and also in near real-time as profile attribute changes occur. For SQL segments, membership events are generated only from the scheduled snapshots.</td>
</tr>
<tr>
    <td><a href="#delete_segment_subscription"><CopyableCode code="delete_segment_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a segment subscription for membership events. All active event notifications for this segment are stopped.</td>
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
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-segment_definition_name">
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the segment definition.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_segment_subscription"
    values={[
        { label: 'get_segment_subscription', value: 'get_segment_subscription' }
    ]}
>
<TabItem value="get_segment_subscription">

Returns the current subscription configuration, execution schedule, and status for segment membership events.

```sql
SELECT
last_updated_at,
message,
schedule_configuration,
scheduled_executions,
started_at,
status
FROM aws.customer_profiles.segment_subscriptions
WHERE domain_name = '{{ domain_name }}' -- required
AND segment_definition_name = '{{ segment_definition_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_segment_subscription"
    values={[
        { label: 'put_segment_subscription', value: 'put_segment_subscription' }
    ]}
>
<TabItem value="put_segment_subscription">

Creates or updates a segment subscription for membership events. When a subscription is created, an initial snapshot is taken and the system begins monitoring for membership changes. You can optionally set a schedule configuration interval to control how often membership snapshots are run. The interval can be from 1 to 24 hours. If not set, the interval defaults to 24 hours. Scheduled snapshots run on a best-effort basis. If a scheduled snapshot takes longer than the configured interval, the next scheduled run does not start until the in-progress snapshot completes, so a run might be delayed or skipped and is not guaranteed to occur at exactly the requested time. For Classic segments, membership events are generated from these scheduled snapshots and also in near real-time as profile attribute changes occur. For SQL segments, membership events are generated only from the scheduled snapshots.

```sql
REPLACE aws.customer_profiles.segment_subscriptions
SET 
ScheduleConfiguration = '{{ ScheduleConfiguration }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND segment_definition_name = '{{ segment_definition_name }}' --required
AND region = '{{ region }}' --required
RETURNING
schedule_configuration,
started_at,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_segment_subscription"
    values={[
        { label: 'delete_segment_subscription', value: 'delete_segment_subscription' }
    ]}
>
<TabItem value="delete_segment_subscription">

Deletes a segment subscription for membership events. All active event notifications for this segment are stopped.

```sql
DELETE FROM aws.customer_profiles.segment_subscriptions
WHERE domain_name = '{{ domain_name }}' --required
AND segment_definition_name = '{{ segment_definition_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
