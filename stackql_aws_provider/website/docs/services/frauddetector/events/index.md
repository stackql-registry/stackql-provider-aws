--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event"
    values={[
        { label: 'get_event', value: 'get_event' }
    ]}
>
<TabItem value="get_event">

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
    <td><CopyableCode code="currentLabel" /></td>
    <td><code>string</code></td>
    <td>The label associated with the event.</td>
</tr>
<tr>
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>The event entities.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The event ID.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp that defines when the event under evaluation occurred. The timestamp must be specified using ISO 8601 standard in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="eventTypeName" /></td>
    <td><code>string</code></td>
    <td>The event type.</td>
</tr>
<tr>
    <td><CopyableCode code="eventVariables" /></td>
    <td><code>object</code></td>
    <td>Names of the event type's variables you defined in Amazon Fraud Detector to represent data elements and their corresponding values for the event you are sending for evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="labelTimestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp associated with the label to update. The timestamp must be specified using ISO 8601 standard in UTC.</td>
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
    <td><a href="#get_event"><CopyableCode code="get_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.</td>
</tr>
<tr>
    <td><a href="#delete_event"><CopyableCode code="delete_event" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified event. When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector. If deleteAuditHistory is True, event data is available through search for up to 30 seconds after the delete operation is completed.</td>
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
    defaultValue="get_event"
    values={[
        { label: 'get_event', value: 'get_event' }
    ]}
>
<TabItem value="get_event">

Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.

```sql
SELECT
currentLabel,
entities,
eventId,
eventTimestamp,
eventTypeName,
eventVariables,
labelTimestamp
FROM aws.frauddetector.events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event"
    values={[
        { label: 'delete_event', value: 'delete_event' }
    ]}
>
<TabItem value="delete_event">

Deletes the specified event. When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector. If deleteAuditHistory is True, event data is available through search for up to 30 seconds after the delete operation is completed.

```sql
DELETE FROM aws.frauddetector.events
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
