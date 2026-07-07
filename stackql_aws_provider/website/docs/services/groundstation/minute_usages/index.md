--- 
title: minute_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - minute_usages
  - groundstation
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

Creates, updates, deletes, gets or lists a <code>minute_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="minute_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.minute_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_minute_usage"
    values={[
        { label: 'get_minute_usage', value: 'get_minute_usage' }
    ]}
>
<TabItem value="get_minute_usage">

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
    <td><CopyableCode code="estimatedMinutesRemaining" /></td>
    <td><code>integer</code></td>
    <td>Estimated number of minutes remaining for an account, specific to the month being requested.</td>
</tr>
<tr>
    <td><CopyableCode code="isReservedMinutesCustomer" /></td>
    <td><code>boolean</code></td>
    <td>Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.</td>
</tr>
<tr>
    <td><CopyableCode code="totalReservedMinuteAllocation" /></td>
    <td><code>integer</code></td>
    <td>Total number of reserved minutes allocated, specific to the month being requested.</td>
</tr>
<tr>
    <td><CopyableCode code="totalScheduledMinutes" /></td>
    <td><code>integer</code></td>
    <td>Total scheduled minutes for an account, specific to the month being requested.</td>
</tr>
<tr>
    <td><CopyableCode code="upcomingMinutesScheduled" /></td>
    <td><code>integer</code></td>
    <td>Upcoming minutes scheduled for an account, specific to the month being requested.</td>
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
    <td><a href="#get_minute_usage"><CopyableCode code="get_minute_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the number of reserved minutes used by account.</td>
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
    defaultValue="get_minute_usage"
    values={[
        { label: 'get_minute_usage', value: 'get_minute_usage' }
    ]}
>
<TabItem value="get_minute_usage">

Returns the number of reserved minutes used by account.

```sql
SELECT
estimatedMinutesRemaining,
isReservedMinutesCustomer,
totalReservedMinuteAllocation,
totalScheduledMinutes,
upcomingMinutesScheduled
FROM aws.groundstation.minute_usages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
