--- 
title: event_triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - event_triggers
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

Creates, updates, deletes, gets or lists an <code>event_triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.event_triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_trigger"
    values={[
        { label: 'get_event_trigger', value: 'get_event_trigger' },
        { label: 'list_event_triggers', value: 'list_event_triggers' }
    ]}
>
<TabItem value="get_event_trigger">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the event trigger was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the event trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="EventTriggerConditions" /></td>
    <td><code>array</code></td>
    <td>A list of conditions that determine when an event should trigger the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="EventTriggerLimits" /></td>
    <td><code>object</code></td>
    <td>Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.</td>
</tr>
<tr>
    <td><CopyableCode code="EventTriggerName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the event trigger. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the event trigger was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectTypeName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the object type. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SegmentFilter" /></td>
    <td><code>string</code></td>
    <td>The destination is triggered only for profiles that meet the criteria of a segment definition. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>An array of key-value pairs to apply to this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_triggers">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the event trigger was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the event trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="EventTriggerName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the event trigger. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the event trigger was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectTypeName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the object type. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>An array of key-value pairs to apply to this resource.</td>
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
    <td><a href="#get_event_trigger"><CopyableCode code="get_event_trigger" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_trigger_name"><code>event_trigger_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a specific Event Trigger from the domain.</td>
</tr>
<tr>
    <td><a href="#list_event_triggers"><CopyableCode code="list_event_triggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>List all Event Triggers under a domain.</td>
</tr>
<tr>
    <td><a href="#create_event_trigger"><CopyableCode code="create_event_trigger" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_trigger_name"><code>event_trigger_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ObjectTypeName"><code>ObjectTypeName</code></a>, <a href="#parameter-EventTriggerConditions"><code>EventTriggerConditions</code></a></td>
    <td></td>
    <td>Creates an event trigger, which specifies the rules when to perform action based on customer's ingested data. Each event stream can be associated with only one integration in the same region and AWS account as the event stream.</td>
</tr>
<tr>
    <td><a href="#update_event_trigger"><CopyableCode code="update_event_trigger" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_trigger_name"><code>event_trigger_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the properties of an Event Trigger.</td>
</tr>
<tr>
    <td><a href="#delete_event_trigger"><CopyableCode code="delete_event_trigger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_trigger_name"><code>event_trigger_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disable and deletes the Event Trigger. You cannot delete an Event Trigger with an active Integration associated.</td>
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
<tr id="parameter-event_trigger_name">
    <td><CopyableCode code="event_trigger_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the event trigger.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use with ListEventTriggers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_trigger"
    values={[
        { label: 'get_event_trigger', value: 'get_event_trigger' },
        { label: 'list_event_triggers', value: 'list_event_triggers' }
    ]}
>
<TabItem value="get_event_trigger">

Get a specific Event Trigger from the domain.

```sql
SELECT
CreatedAt,
Description,
EventTriggerConditions,
EventTriggerLimits,
EventTriggerName,
LastUpdatedAt,
ObjectTypeName,
SegmentFilter,
Tags
FROM aws.customer_profiles.event_triggers
WHERE domain_name = '{{ domain_name }}' -- required
AND event_trigger_name = '{{ event_trigger_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_triggers">

List all Event Triggers under a domain.

```sql
SELECT
CreatedAt,
Description,
EventTriggerName,
LastUpdatedAt,
ObjectTypeName,
Tags
FROM aws.customer_profiles.event_triggers
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_trigger"
    values={[
        { label: 'create_event_trigger', value: 'create_event_trigger' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_trigger">

Creates an event trigger, which specifies the rules when to perform action based on customer's ingested data. Each event stream can be associated with only one integration in the same region and AWS account as the event stream.

```sql
INSERT INTO aws.customer_profiles.event_triggers (
ObjectTypeName,
Description,
EventTriggerConditions,
SegmentFilter,
EventTriggerLimits,
Tags,
domain_name,
event_trigger_name,
region
)
SELECT 
'{{ ObjectTypeName }}' /* required */,
'{{ Description }}',
'{{ EventTriggerConditions }}' /* required */,
'{{ SegmentFilter }}',
'{{ EventTriggerLimits }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ event_trigger_name }}',
'{{ region }}'
RETURNING
CreatedAt,
Description,
EventTriggerConditions,
EventTriggerLimits,
EventTriggerName,
LastUpdatedAt,
ObjectTypeName,
SegmentFilter,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_triggers
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the event_triggers resource.
    - name: event_trigger_name
      value: "{{ event_trigger_name }}"
      description: Required parameter for the event_triggers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_triggers resource.
    - name: ObjectTypeName
      value: "{{ ObjectTypeName }}"
    - name: Description
      value: "{{ Description }}"
    - name: EventTriggerConditions
      value:
        - EventTriggerDimensions: "{{ EventTriggerDimensions }}"
          LogicalOperator: "{{ LogicalOperator }}"
    - name: SegmentFilter
      value: "{{ SegmentFilter }}"
    - name: EventTriggerLimits
      description: |
        Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
      value:
        EventExpiration: {{ EventExpiration }}
        Periods:
          - Unit: "{{ Unit }}"
            Value: {{ Value }}
            MaxInvocationsPerProfile: {{ MaxInvocationsPerProfile }}
            Unlimited: {{ Unlimited }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_trigger"
    values={[
        { label: 'update_event_trigger', value: 'update_event_trigger' }
    ]}
>
<TabItem value="update_event_trigger">

Update the properties of an Event Trigger.

```sql
UPDATE aws.customer_profiles.event_triggers
SET 
ObjectTypeName = '{{ ObjectTypeName }}',
Description = '{{ Description }}',
EventTriggerConditions = '{{ EventTriggerConditions }}',
SegmentFilter = '{{ SegmentFilter }}',
EventTriggerLimits = '{{ EventTriggerLimits }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND event_trigger_name = '{{ event_trigger_name }}' --required
AND region = '{{ region }}' --required
RETURNING
CreatedAt,
Description,
EventTriggerConditions,
EventTriggerLimits,
EventTriggerName,
LastUpdatedAt,
ObjectTypeName,
SegmentFilter,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_trigger"
    values={[
        { label: 'delete_event_trigger', value: 'delete_event_trigger' }
    ]}
>
<TabItem value="delete_event_trigger">

Disable and deletes the Event Trigger. You cannot delete an Event Trigger with an active Integration associated.

```sql
DELETE FROM aws.customer_profiles.event_triggers
WHERE domain_name = '{{ domain_name }}' --required
AND event_trigger_name = '{{ event_trigger_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
