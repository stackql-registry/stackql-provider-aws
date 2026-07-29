--- 
title: delivery_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_channels
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

Creates, updates, deletes, gets or lists a <code>delivery_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delivery_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.delivery_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_delivery_channels"
    values={[
        { label: 'describe_delivery_channels', value: 'describe_delivery_channels' }
    ]}
>
<TabItem value="describe_delivery_channels">

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
    <td><CopyableCode code="delivery_channels" /></td>
    <td><code>array</code></td>
    <td>A list that contains the descriptions of the specified delivery channel.</td>
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
    <td><a href="#describe_delivery_channels"><CopyableCode code="describe_delivery_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the specified delivery channel. If a delivery channel is not specified, this operation returns the details of all delivery channels associated with the account. Currently, you can specify only one delivery channel per region in your account.</td>
</tr>
<tr>
    <td><a href="#put_delivery_channel"><CopyableCode code="put_delivery_channel" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryChannel"><code>DeliveryChannel</code></a></td>
    <td></td>
    <td>Creates or updates a delivery channel to deliver configuration information and other compliance information. You can use this operation to create a new delivery channel or to update the Amazon S3 bucket and the Amazon SNS topic of an existing delivery channel. For more information, see Working with the Delivery Channel in the Config Developer Guide. One delivery channel per account per Region You can have only one delivery channel for each account for each Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#delete_delivery_channel"><CopyableCode code="delete_delivery_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the delivery channel. Before you can delete the delivery channel, you must stop the customer managed configuration recorder. You can use the StopConfigurationRecorder operation to stop the customer managed configuration recorder.</td>
</tr>
<tr>
    <td><a href="#deliver_config_snapshot"><CopyableCode code="deliver_config_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified. Notification of the start of the delivery. Notification of the completion of the delivery, if the delivery was successfully completed. Notification of delivery failure, if the delivery failed.</td>
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
    defaultValue="describe_delivery_channels"
    values={[
        { label: 'describe_delivery_channels', value: 'describe_delivery_channels' }
    ]}
>
<TabItem value="describe_delivery_channels">

Returns details about the specified delivery channel. If a delivery channel is not specified, this operation returns the details of all delivery channels associated with the account. Currently, you can specify only one delivery channel per region in your account.

```sql
SELECT
delivery_channels
FROM aws.config.delivery_channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_delivery_channel"
    values={[
        { label: 'put_delivery_channel', value: 'put_delivery_channel' }
    ]}
>
<TabItem value="put_delivery_channel">

Creates or updates a delivery channel to deliver configuration information and other compliance information. You can use this operation to create a new delivery channel or to update the Amazon S3 bucket and the Amazon SNS topic of an existing delivery channel. For more information, see Working with the Delivery Channel in the Config Developer Guide. One delivery channel per account per Region You can have only one delivery channel for each account for each Amazon Web Services Region.

```sql
REPLACE aws.config.delivery_channels
SET 
DeliveryChannel = '{{ DeliveryChannel }}'
WHERE 
region = '{{ region }}' --required
AND DeliveryChannel = '{{ DeliveryChannel }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_delivery_channel"
    values={[
        { label: 'delete_delivery_channel', value: 'delete_delivery_channel' }
    ]}
>
<TabItem value="delete_delivery_channel">

Deletes the delivery channel. Before you can delete the delivery channel, you must stop the customer managed configuration recorder. You can use the StopConfigurationRecorder operation to stop the customer managed configuration recorder.

```sql
DELETE FROM aws.config.delivery_channels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deliver_config_snapshot"
    values={[
        { label: 'deliver_config_snapshot', value: 'deliver_config_snapshot' }
    ]}
>
<TabItem value="deliver_config_snapshot">

Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified. Notification of the start of the delivery. Notification of the completion of the delivery, if the delivery was successfully completed. Notification of delivery failure, if the delivery failed.

```sql
EXEC aws.config.delivery_channels.deliver_config_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"deliveryChannelName": "{{ deliveryChannelName }}"
}'
;
```
</TabItem>
</Tabs>
