--- 
title: maintenance_start_times
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_start_times
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>maintenance_start_times</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_start_times" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.maintenance_start_times" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_maintenance_start_time"
    values={[
        { label: 'describe_maintenance_start_time', value: 'describe_maintenance_start_time' }
    ]}
>
<TabItem value="describe_maintenance_start_time">

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
    <td><CopyableCode code="DayOfMonth" /></td>
    <td><code>integer</code></td>
    <td>The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month. It is not possible to set the maintenance schedule to start on days 29 through 31.</td>
</tr>
<tr>
    <td><CopyableCode code="DayOfWeek" /></td>
    <td><code>integer</code></td>
    <td>An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="HourOfDay" /></td>
    <td><code>integer</code></td>
    <td>The hour component of the maintenance start time represented as hh, where hh is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="MinuteOfHour" /></td>
    <td><code>integer</code></td>
    <td>The minute component of the maintenance start time represented as mm, where mm is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareUpdatePreferences" /></td>
    <td><code>object</code></td>
    <td>A set of variables indicating the software update preferences for the gateway. Includes AutomaticUpdatePolicy parameter with the following inputs: ALL_VERSIONS - Enables regular gateway maintenance updates. EMERGENCY_VERSIONS_ONLY - Disables regular gateway maintenance updates. The gateway will still receive emergency version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be notified before an emergency version update is applied. These updates are applied during your gateway's scheduled maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="Timezone" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the time zone that is set for the gateway. The start time and day of week specified should be in the time zone of the gateway.</td>
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
    <td><a href="#describe_maintenance_start_time"><CopyableCode code="describe_maintenance_start_time" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for the gateway's time zone.</td>
</tr>
<tr>
    <td><a href="#update_maintenance_start_time"><CopyableCode code="update_maintenance_start_time" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused by updating the gateway could critically impact your deployment.</td>
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
    defaultValue="describe_maintenance_start_time"
    values={[
        { label: 'describe_maintenance_start_time', value: 'describe_maintenance_start_time' }
    ]}
>
<TabItem value="describe_maintenance_start_time">

Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for the gateway's time zone.

```sql
SELECT
DayOfMonth,
DayOfWeek,
GatewayARN,
HourOfDay,
MinuteOfHour,
SoftwareUpdatePreferences,
Timezone
FROM aws.storagegateway.maintenance_start_times
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_maintenance_start_time"
    values={[
        { label: 'update_maintenance_start_time', value: 'update_maintenance_start_time' }
    ]}
>
<TabItem value="update_maintenance_start_time">

Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused by updating the gateway could critically impact your deployment.

```sql
UPDATE aws.storagegateway.maintenance_start_times
SET 
GatewayARN = '{{ GatewayARN }}',
HourOfDay = {{ HourOfDay }},
MinuteOfHour = {{ MinuteOfHour }},
DayOfWeek = {{ DayOfWeek }},
DayOfMonth = {{ DayOfMonth }},
SoftwareUpdatePreferences = '{{ SoftwareUpdatePreferences }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
RETURNING
GatewayARN;
```
</TabItem>
</Tabs>
