--- 
title: segment_subscription_events
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_subscription_events
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

Creates, updates, deletes, gets or lists a <code>segment_subscription_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_subscription_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.segment_subscription_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_segment_subscription_events"
    values={[
        { label: 'list_segment_subscription_events', value: 'list_segment_subscription_events' }
    ]}
>
<TabItem value="list_segment_subscription_events">

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
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td>Whether the profile joined or left the segment. The following are valid values: JOINED: The profile joined the segment. LEFT: The profile left the segment. (JOINED, LEFT)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of event that triggered the membership change. The following are valid values: LIVE: Real-time event triggered by a profile or calculated attribute change (Classic segments only). SCHEDULE: Event generated during a scheduled execution. (LIVE, SCHEDULE)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a customer profile. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the membership change was detected.</td>
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
    <td><a href="#list_segment_subscription_events"><CopyableCode code="list_segment_subscription_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns the most recent membership events for a segment. Each event represents a profile that entered or exited the segment. This operation is paginated.</td>
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
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of events to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_segment_subscription_events"
    values={[
        { label: 'list_segment_subscription_events', value: 'list_segment_subscription_events' }
    ]}
>
<TabItem value="list_segment_subscription_events">

Returns the most recent membership events for a segment. Each event represents a profile that entered or exited the segment. This operation is paginated.

```sql
SELECT
event,
event_type,
profile_id,
updated_at
FROM aws.customer_profiles.segment_subscription_events
WHERE domain_name = '{{ domain_name }}' -- required
AND segment_definition_name = '{{ segment_definition_name }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
