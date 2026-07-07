--- 
title: delivery_channel_status
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_channel_status
  - config
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

Creates, updates, deletes, gets or lists a <code>delivery_channel_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delivery_channel_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.delivery_channel_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_delivery_channel_status"
    values={[
        { label: 'describe_delivery_channel_status', value: 'describe_delivery_channel_status' }
    ]}
>
<TabItem value="describe_delivery_channel_status">

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
    <td><CopyableCode code="DeliveryChannelsStatus" /></td>
    <td><code>array</code></td>
    <td>A list that contains the status of a specified delivery channel.</td>
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
    <td><a href="#describe_delivery_channel_status"><CopyableCode code="describe_delivery_channel_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this operation returns the current status of all delivery channels associated with the account. Currently, you can specify only one delivery channel per region in your account.</td>
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
    defaultValue="describe_delivery_channel_status"
    values={[
        { label: 'describe_delivery_channel_status', value: 'describe_delivery_channel_status' }
    ]}
>
<TabItem value="describe_delivery_channel_status">

Returns the current status of the specified delivery channel. If a delivery channel is not specified, this operation returns the current status of all delivery channels associated with the account. Currently, you can specify only one delivery channel per region in your account.

```sql
SELECT
DeliveryChannelsStatus
FROM aws.config.delivery_channel_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
