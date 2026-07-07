--- 
title: data_integration_events
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integration_events
  - supplychain
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

Creates, updates, deletes, gets or lists a <code>data_integration_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_integration_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supplychain.data_integration_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_integration_event"
    values={[
        { label: 'get_data_integration_event', value: 'get_data_integration_event' },
        { label: 'list_data_integration_events', value: 'list_data_integration_events' }
    ]}
>
<TabItem value="get_data_integration_event">

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
    <td><CopyableCode code="datasetTargetDetails" /></td>
    <td><code>object</code></td>
    <td>The target dataset details for a DATASET event type.</td>
</tr>
<tr>
    <td><CopyableCode code="eventGroupId" /></td>
    <td><code>string</code></td>
    <td>Event identifier (for example, orderId for InboundOrder) used for data sharding or partitioning.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The unique event identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eventTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The event timestamp (in epoch seconds).</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The data event type. (scn.data.forecast, scn.data.inventorylevel, scn.data.inboundorder, scn.data.inboundorderline, scn.data.inboundorderlineschedule, scn.data.outboundorderline, scn.data.outboundshipment, scn.data.processheader, scn.data.processoperation, scn.data.processproduct, scn.data.reservation, scn.data.shipment, scn.data.shipmentstop, scn.data.shipmentstoporder, scn.data.supplyplan, scn.data.dataset)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The AWS Supply Chain instance identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_integration_events">

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
    <td><CopyableCode code="datasetTargetDetails" /></td>
    <td><code>object</code></td>
    <td>The target dataset details for a DATASET event type.</td>
</tr>
<tr>
    <td><CopyableCode code="eventGroupId" /></td>
    <td><code>string</code></td>
    <td>Event identifier (for example, orderId for InboundOrder) used for data sharding or partitioning.</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The unique event identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eventTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The event timestamp (in epoch seconds).</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The data event type. (scn.data.forecast, scn.data.inventorylevel, scn.data.inboundorder, scn.data.inboundorderline, scn.data.inboundorderlineschedule, scn.data.outboundorderline, scn.data.outboundshipment, scn.data.processheader, scn.data.processoperation, scn.data.processproduct, scn.data.reservation, scn.data.shipment, scn.data.shipmentstop, scn.data.shipmentstoporder, scn.data.supplyplan, scn.data.dataset)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The AWS Supply Chain instance identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_data_integration_event"><CopyableCode code="get_data_integration_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically view an Amazon Web Services Supply Chain Data Integration Event. Developers can view the eventType, eventGroupId, eventTimestamp, datasetTarget, datasetLoadExecution.</td>
</tr>
<tr>
    <td><a href="#list_data_integration_events"><CopyableCode code="list_data_integration_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-eventType"><code>eventType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Enables you to programmatically list all data integration events for the provided Amazon Web Services Supply Chain instance.</td>
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
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique event identifier.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-eventType">
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>List data integration events for the specified eventType.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Specify the maximum number of data integration events to fetch in one paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to fetch the next page of the data integration events.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_integration_event"
    values={[
        { label: 'get_data_integration_event', value: 'get_data_integration_event' },
        { label: 'list_data_integration_events', value: 'list_data_integration_events' }
    ]}
>
<TabItem value="get_data_integration_event">

Enables you to programmatically view an Amazon Web Services Supply Chain Data Integration Event. Developers can view the eventType, eventGroupId, eventTimestamp, datasetTarget, datasetLoadExecution.

```sql
SELECT
datasetTargetDetails,
eventGroupId,
eventId,
eventTimestamp,
eventType,
instanceId
FROM aws.supplychain.data_integration_events
WHERE instance_id = '{{ instance_id }}' -- required
AND event_id = '{{ event_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_integration_events">

Enables you to programmatically list all data integration events for the provided Amazon Web Services Supply Chain instance.

```sql
SELECT
datasetTargetDetails,
eventGroupId,
eventId,
eventTimestamp,
eventType,
instanceId
FROM aws.supplychain.data_integration_events
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND eventType = '{{ eventType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
