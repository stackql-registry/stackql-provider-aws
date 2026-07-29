--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - cloudtrail
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="lookup_events"
    values={[
        { label: 'lookup_events', value: 'lookup_events' }
    ]}
>
<TabItem value="lookup_events">

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
    <td><CopyableCode code="access_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services access key ID that was used to sign the request. If the request was made with temporary security credentials, this is the access key ID of the temporary credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_trail_event" /></td>
    <td><code>string</code></td>
    <td>A JSON string that contains a representation of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The CloudTrail ID of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="event_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="event_source" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service to which the request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="read_only" /></td>
    <td><code>string</code></td>
    <td>Information about whether the event is a write event or a read event.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>A list of resources referenced by the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>A user name or role name of the requester that called the API in the event returned.</td>
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
    <td><a href="#lookup_events"><CopyableCode code="lookup_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Looks up management events or CloudTrail Insights events that are captured by CloudTrail. You can look up events that occurred in a Region within the last 90 days. LookupEvents returns recent Insights events for trails that enable Insights. To view Insights events for an event data store, you can run queries on your Insights event data store, and you can also view the Lake dashboard for Insights. Lookup supports the following attributes for management events: Amazon Web Services access key Event ID Event name Event source Read only Resource name Resource type User name Lookup supports the following attributes for Insights events: Event ID Event name Event source All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results. The rate of lookup requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.</td>
</tr>
<tr>
    <td><a href="#restore_event_data_store"><CopyableCode code="restore_event_data_store" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStore"><code>EventDataStore</code></a></td>
    <td></td>
    <td>Restores a deleted event data store specified by EventDataStore, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.</td>
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
    defaultValue="lookup_events"
    values={[
        { label: 'lookup_events', value: 'lookup_events' }
    ]}
>
<TabItem value="lookup_events">

Looks up management events or CloudTrail Insights events that are captured by CloudTrail. You can look up events that occurred in a Region within the last 90 days. LookupEvents returns recent Insights events for trails that enable Insights. To view Insights events for an event data store, you can run queries on your Insights event data store, and you can also view the Lake dashboard for Insights. Lookup supports the following attributes for management events: Amazon Web Services access key Event ID Event name Event source Read only Resource name Resource type User name Lookup supports the following attributes for Insights events: Event ID Event name Event source All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results. The rate of lookup requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.

```sql
SELECT
access_key_id,
cloud_trail_event,
event_id,
event_name,
event_source,
event_time,
read_only,
resources,
username
FROM aws.cloudtrail.events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_event_data_store"
    values={[
        { label: 'restore_event_data_store', value: 'restore_event_data_store' }
    ]}
>
<TabItem value="restore_event_data_store">

Restores a deleted event data store specified by EventDataStore, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.

```sql
EXEC aws.cloudtrail.events.restore_event_data_store 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStore": "{{ EventDataStore }}"
}'
;
```
</TabItem>
</Tabs>
