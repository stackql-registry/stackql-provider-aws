--- 
title: event_configuration_by_resource_types
hide_title: false
hide_table_of_contents: false
keywords:
  - event_configuration_by_resource_types
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

Creates, updates, deletes, gets or lists an <code>event_configuration_by_resource_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_configuration_by_resource_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.event_configuration_by_resource_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_configuration_by_resource_types"
    values={[
        { label: 'get_event_configuration_by_resource_types', value: 'get_event_configuration_by_resource_types' }
    ]}
>
<TabItem value="get_event_configuration_by_resource_types">

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
    <td><CopyableCode code="connection_status" /></td>
    <td><code>object</code></td>
    <td>Resource type event configuration for the connection status event.</td>
</tr>
<tr>
    <td><CopyableCode code="device_registration_state" /></td>
    <td><code>object</code></td>
    <td>Resource type event configuration for the device registration state event.</td>
</tr>
<tr>
    <td><CopyableCode code="join" /></td>
    <td><code>object</code></td>
    <td>Resource type event configuration for the join event.</td>
</tr>
<tr>
    <td><CopyableCode code="message_delivery_status" /></td>
    <td><code>object</code></td>
    <td>Resource type event configuration object for the message delivery status event.</td>
</tr>
<tr>
    <td><CopyableCode code="proximity" /></td>
    <td><code>object</code></td>
    <td>Resource type event configuration for the proximity event.</td>
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
    <td><a href="#get_event_configuration_by_resource_types"><CopyableCode code="get_event_configuration_by_resource_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the event configuration based on resource types.</td>
</tr>
<tr>
    <td><a href="#update_event_configuration_by_resource_types"><CopyableCode code="update_event_configuration_by_resource_types" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the event configuration based on resource types.</td>
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
    defaultValue="get_event_configuration_by_resource_types"
    values={[
        { label: 'get_event_configuration_by_resource_types', value: 'get_event_configuration_by_resource_types' }
    ]}
>
<TabItem value="get_event_configuration_by_resource_types">

Get the event configuration based on resource types.

```sql
SELECT
connection_status,
device_registration_state,
join,
message_delivery_status,
proximity
FROM aws.iotwireless.event_configuration_by_resource_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_configuration_by_resource_types"
    values={[
        { label: 'update_event_configuration_by_resource_types', value: 'update_event_configuration_by_resource_types' }
    ]}
>
<TabItem value="update_event_configuration_by_resource_types">

Update the event configuration based on resource types.

```sql
UPDATE aws.iotwireless.event_configuration_by_resource_types
SET 
DeviceRegistrationState = '{{ DeviceRegistrationState }}',
Proximity = '{{ Proximity }}',
Join = '{{ Join }}',
ConnectionStatus = '{{ ConnectionStatus }}',
MessageDeliveryStatus = '{{ MessageDeliveryStatus }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
