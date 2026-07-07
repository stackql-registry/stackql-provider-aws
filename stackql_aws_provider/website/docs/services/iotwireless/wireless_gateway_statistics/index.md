--- 
title: wireless_gateway_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_gateway_statistics
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

Creates, updates, deletes, gets or lists a <code>wireless_gateway_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_gateway_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_gateway_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_gateway_statistics"
    values={[
        { label: 'get_wireless_gateway_statistics', value: 'get_wireless_gateway_statistics' }
    ]}
>
<TabItem value="get_wireless_gateway_statistics">

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
    <td><CopyableCode code="ConnectionStatus" /></td>
    <td><code>string</code></td>
    <td>The connection status of the wireless gateway. (Connected, Disconnected)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUplinkReceivedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time when the most recent uplink was received. This value is only valid for 3 months. (pattern: &lt;code&gt;^(&#91;\+-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d+(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d+)?)?(&#91;zZ&#93;|(&#91;\+-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the wireless gateway.</td>
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
    <td><a href="#get_wireless_gateway_statistics"><CopyableCode code="get_wireless_gateway_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets operating information about a wireless gateway.</td>
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
    <td>The ID of the wireless gateway for which to get the data.</td>
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
    defaultValue="get_wireless_gateway_statistics"
    values={[
        { label: 'get_wireless_gateway_statistics', value: 'get_wireless_gateway_statistics' }
    ]}
>
<TabItem value="get_wireless_gateway_statistics">

Gets operating information about a wireless gateway.

```sql
SELECT
ConnectionStatus,
LastUplinkReceivedAt,
WirelessGatewayId
FROM aws.iotwireless.wireless_gateway_statistics
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
