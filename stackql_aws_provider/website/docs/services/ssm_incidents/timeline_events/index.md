--- 
title: timeline_events
hide_title: false
hide_table_of_contents: false
keywords:
  - timeline_events
  - ssm_incidents
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

Creates, updates, deletes, gets or lists a <code>timeline_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="timeline_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.timeline_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_timeline_event"
    values={[
        { label: 'get_timeline_event', value: 'get_timeline_event' },
        { label: 'list_timeline_events', value: 'list_timeline_events' }
    ]}
>
<TabItem value="get_timeline_event">

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
    <td><CopyableCode code="eventData" /></td>
    <td><code>string</code></td>
    <td>A short description of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the timeline event.</td>
</tr>
<tr>
    <td><CopyableCode code="eventReferences" /></td>
    <td><code>array</code></td>
    <td>A list of references in a TimelineEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The type of event that occurred. Currently Incident Manager supports only the Custom Event and Note types.</td>
</tr>
<tr>
    <td><CopyableCode code="eventUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the timeline event was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="incidentRecordArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the incident that the event occurred during. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_timeline_events">

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
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The timeline event ID.</td>
</tr>
<tr>
    <td><CopyableCode code="eventReferences" /></td>
    <td><code>array</code></td>
    <td>A list of references in a TimelineEvent.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The type of event. The timeline event must be Custom Event or Note.</td>
</tr>
<tr>
    <td><CopyableCode code="eventUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the timeline event was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="incidentRecordArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the incident that the event happened during. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
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
    <td><a href="#get_timeline_event"><CopyableCode code="get_timeline_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-eventId"><code>eventId</code></a>, <a href="#parameter-incidentRecordArn"><code>incidentRecordArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a timeline event based on its ID and incident record.</td>
</tr>
<tr>
    <td><a href="#list_timeline_events"><CopyableCode code="list_timeline_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists timeline events for the specified incident record.</td>
</tr>
<tr>
    <td><a href="#create_timeline_event"><CopyableCode code="create_timeline_event" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventData"><code>eventData</code></a>, <a href="#parameter-eventTime"><code>eventTime</code></a>, <a href="#parameter-eventType"><code>eventType</code></a>, <a href="#parameter-incidentRecordArn"><code>incidentRecordArn</code></a></td>
    <td></td>
    <td>Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.</td>
</tr>
<tr>
    <td><a href="#update_timeline_event"><CopyableCode code="update_timeline_event" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventId"><code>eventId</code></a>, <a href="#parameter-incidentRecordArn"><code>incidentRecordArn</code></a></td>
    <td></td>
    <td>Updates a timeline event. You can update events of type Custom Event.</td>
</tr>
<tr>
    <td><a href="#delete_timeline_event"><CopyableCode code="delete_timeline_event" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a timeline event from an incident.</td>
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
<tr id="parameter-eventId">
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the event. You can get an event's ID when you create it, or by using ListTimelineEvents.</td>
</tr>
<tr id="parameter-incidentRecordArn">
    <td><CopyableCode code="incidentRecordArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_timeline_event"
    values={[
        { label: 'get_timeline_event', value: 'get_timeline_event' },
        { label: 'list_timeline_events', value: 'list_timeline_events' }
    ]}
>
<TabItem value="get_timeline_event">

Retrieves a timeline event based on its ID and incident record.

```sql
SELECT
eventData,
eventId,
eventReferences,
eventTime,
eventType,
eventUpdatedTime,
incidentRecordArn
FROM aws.ssm_incidents.timeline_events
WHERE eventId = '{{ eventId }}' -- required
AND incidentRecordArn = '{{ incidentRecordArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_timeline_events">

Lists timeline events for the specified incident record.

```sql
SELECT
eventId,
eventReferences,
eventTime,
eventType,
eventUpdatedTime,
incidentRecordArn
FROM aws.ssm_incidents.timeline_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_timeline_event"
    values={[
        { label: 'create_timeline_event', value: 'create_timeline_event' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_timeline_event">

Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.

```sql
INSERT INTO aws.ssm_incidents.timeline_events (
clientToken,
eventData,
eventReferences,
eventTime,
eventType,
incidentRecordArn,
region
)
SELECT 
'{{ clientToken }}',
'{{ eventData }}' /* required */,
'{{ eventReferences }}',
'{{ eventTime }}' /* required */,
'{{ eventType }}' /* required */,
'{{ incidentRecordArn }}' /* required */,
'{{ region }}'
RETURNING
eventId,
incidentRecordArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: timeline_events
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the timeline_events resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: eventData
      value: "{{ eventData }}"
    - name: eventReferences
      value:
        - relatedItemId: "{{ relatedItemId }}"
          resource: "{{ resource }}"
    - name: eventTime
      value: "{{ eventTime }}"
    - name: eventType
      value: "{{ eventType }}"
    - name: incidentRecordArn
      value: "{{ incidentRecordArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_timeline_event"
    values={[
        { label: 'update_timeline_event', value: 'update_timeline_event' }
    ]}
>
<TabItem value="update_timeline_event">

Updates a timeline event. You can update events of type Custom Event.

```sql
UPDATE aws.ssm_incidents.timeline_events
SET 
clientToken = '{{ clientToken }}',
eventData = '{{ eventData }}',
eventId = '{{ eventId }}',
eventReferences = '{{ eventReferences }}',
eventTime = '{{ eventTime }}',
eventType = '{{ eventType }}',
incidentRecordArn = '{{ incidentRecordArn }}'
WHERE 
region = '{{ region }}' --required
AND eventId = '{{ eventId }}' --required
AND incidentRecordArn = '{{ incidentRecordArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_timeline_event"
    values={[
        { label: 'delete_timeline_event', value: 'delete_timeline_event' }
    ]}
>
<TabItem value="delete_timeline_event">

Deletes a timeline event from an incident.

```sql
DELETE FROM aws.ssm_incidents.timeline_events
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
