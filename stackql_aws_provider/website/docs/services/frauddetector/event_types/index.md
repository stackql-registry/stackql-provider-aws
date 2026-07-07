--- 
title: event_types
hide_title: false
hide_table_of_contents: false
keywords:
  - event_types
  - frauddetector
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

Creates, updates, deletes, gets or lists an <code>event_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.event_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_types"
    values={[
        { label: 'get_event_types', value: 'get_event_types' }
    ]}
>
<TabItem value="get_event_types">

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
    <td><CopyableCode code="eventTypes" /></td>
    <td><code>array</code></td>
    <td>An array of event types.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
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
    <td><a href="#get_event_types"><CopyableCode code="get_event_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#put_event_type"><CopyableCode code="put_event_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-eventVariables"><code>eventVariables</code></a>, <a href="#parameter-entityTypes"><code>entityTypes</code></a></td>
    <td></td>
    <td>Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.</td>
</tr>
<tr>
    <td><a href="#delete_event_type"><CopyableCode code="delete_event_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an event type. You cannot delete an event type that is used in a detector or a model. When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.</td>
</tr>
<tr>
    <td><a href="#delete_events_by_event_type"><CopyableCode code="delete_events_by_event_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all events of a particular event type.</td>
</tr>
<tr>
    <td><a href="#send_event"><CopyableCode code="send_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventId"><code>eventId</code></a>, <a href="#parameter-eventTypeName"><code>eventTypeName</code></a>, <a href="#parameter-eventTimestamp"><code>eventTimestamp</code></a>, <a href="#parameter-eventVariables"><code>eventVariables</code></a>, <a href="#parameter-entities"><code>entities</code></a></td>
    <td></td>
    <td>Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use SendEvent to upload a historical dataset, which you can then later use to train a model.</td>
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
    defaultValue="get_event_types"
    values={[
        { label: 'get_event_types', value: 'get_event_types' }
    ]}
>
<TabItem value="get_event_types">

Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
eventTypes,
nextToken
FROM aws.frauddetector.event_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_event_type"
    values={[
        { label: 'put_event_type', value: 'put_event_type' }
    ]}
>
<TabItem value="put_event_type">

Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.

```sql
REPLACE aws.frauddetector.event_types
SET 
name = '{{ name }}',
description = '{{ description }}',
eventVariables = '{{ eventVariables }}',
labels = '{{ labels }}',
entityTypes = '{{ entityTypes }}',
eventIngestion = '{{ eventIngestion }}',
tags = '{{ tags }}',
eventOrchestration = '{{ eventOrchestration }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND eventVariables = '{{ eventVariables }}' --required
AND entityTypes = '{{ entityTypes }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_type"
    values={[
        { label: 'delete_event_type', value: 'delete_event_type' },
        { label: 'delete_events_by_event_type', value: 'delete_events_by_event_type' }
    ]}
>
<TabItem value="delete_event_type">

Deletes an event type. You cannot delete an event type that is used in a detector or a model. When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.event_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_events_by_event_type">

Deletes all events of a particular event type.

```sql
DELETE FROM aws.frauddetector.event_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_event"
    values={[
        { label: 'send_event', value: 'send_event' }
    ]}
>
<TabItem value="send_event">

Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use SendEvent to upload a historical dataset, which you can then later use to train a model.

```sql
EXEC aws.frauddetector.event_types.send_event 
@region='{{ region }}' --required 
@@json=
'{
"eventId": "{{ eventId }}", 
"eventTypeName": "{{ eventTypeName }}", 
"eventTimestamp": "{{ eventTimestamp }}", 
"eventVariables": "{{ eventVariables }}", 
"assignedLabel": "{{ assignedLabel }}", 
"labelTimestamp": "{{ labelTimestamp }}", 
"entities": "{{ entities }}"
}'
;
```
</TabItem>
</Tabs>
