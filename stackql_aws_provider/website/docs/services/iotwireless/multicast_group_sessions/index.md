--- 
title: multicast_group_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - multicast_group_sessions
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>multicast_group_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multicast_group_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.multicast_group_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multicast_group_session"
    values={[
        { label: 'get_multicast_group_session', value: 'get_multicast_group_session' }
    ]}
>
<TabItem value="get_multicast_group_session">

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
    <td><CopyableCode code="dl_dr" /></td>
    <td><code>integer</code></td>
    <td>Downlink data rate.</td>
</tr>
<tr>
    <td><CopyableCode code="dl_freq" /></td>
    <td><code>integer</code></td>
    <td>Downlink frequency.</td>
</tr>
<tr>
    <td><CopyableCode code="ping_slot_period" /></td>
    <td><code>integer</code></td>
    <td>The PingSlotPeriod value.</td>
</tr>
<tr>
    <td><CopyableCode code="session_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the multicast group session is to start.</td>
</tr>
<tr>
    <td><CopyableCode code="session_timeout" /></td>
    <td><code>integer</code></td>
    <td>How long before a multicast group session is to timeout. We recommend that you provide a timeout value that is a power-of-two (such as 64, 128, 256). If a non-power-of-two value is provided, it will automatically be rounded up to the next supported power-of-two within the allowed range.</td>
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
    <td><a href="#get_multicast_group_session"><CopyableCode code="get_multicast_group_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a multicast group session.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
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
    defaultValue="get_multicast_group_session"
    values={[
        { label: 'get_multicast_group_session', value: 'get_multicast_group_session' }
    ]}
>
<TabItem value="get_multicast_group_session">

Gets information about a multicast group session.

```sql
SELECT
dl_dr,
dl_freq,
ping_slot_period,
session_start_time,
session_timeout
FROM aws.iotwireless.multicast_group_sessions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
