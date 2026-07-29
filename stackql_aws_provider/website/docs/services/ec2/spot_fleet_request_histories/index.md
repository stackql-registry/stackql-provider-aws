--- 
title: spot_fleet_request_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - spot_fleet_request_histories
  - ec2
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

Creates, updates, deletes, gets or lists a <code>spot_fleet_request_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spot_fleet_request_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.spot_fleet_request_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_spot_fleet_request_history"
    values={[
        { label: 'describe_spot_fleet_request_history', value: 'describe_spot_fleet_request_history' }
    ]}
>
<TabItem value="describe_spot_fleet_request_history">

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
    <td><CopyableCode code="event_information" /></td>
    <td><code>string</code></td>
    <td>Information about the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The event type. error - An error with the Spot Fleet request. fleetRequestChange - A change in the status or configuration of the Spot Fleet request. instanceChange - An instance was launched or terminated. Information - An informational event.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time of the event, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
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
    <td><a href="#describe_spot_fleet_request_history"><CopyableCode code="describe_spot_fleet_request_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SpotFleetRequestId"><code>SpotFleetRequestId</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-EventType"><code>EventType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the events for the specified Spot Fleet request during the specified time. Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours. For more information, see Monitor fleet events using Amazon EventBridge in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-SpotFleetRequestId">
    <td><CopyableCode code="SpotFleetRequestId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Spot Fleet request.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The starting date and time for the events, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EventType">
    <td><CopyableCode code="EventType" /></td>
    <td><code>string</code></td>
    <td>The type of events to describe. By default, all events are described.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to include in another request to get the next page of items. This value is null when there are no more items to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_spot_fleet_request_history"
    values={[
        { label: 'describe_spot_fleet_request_history', value: 'describe_spot_fleet_request_history' }
    ]}
>
<TabItem value="describe_spot_fleet_request_history">

Describes the events for the specified Spot Fleet request during the specified time. Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours. For more information, see Monitor fleet events using Amazon EventBridge in the Amazon EC2 User Guide.

```sql
SELECT
event_information,
event_type,
timestamp
FROM aws.ec2.spot_fleet_request_histories
WHERE SpotFleetRequestId = '{{ SpotFleetRequestId }}' -- required
AND StartTime = '{{ StartTime }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND EventType = '{{ EventType }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
