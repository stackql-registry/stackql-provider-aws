--- 
title: resource_event_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_event_configurations
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

Creates, updates, deletes, gets or lists a <code>resource_event_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_event_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.resource_event_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_event_configuration"
    values={[
        { label: 'get_resource_event_configuration', value: 'get_resource_event_configuration' }
    ]}
>
<TabItem value="get_resource_event_configuration">

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
    <td><code>object</code></td>
    <td>Event configuration for the connection status event.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceRegistrationState" /></td>
    <td><code>object</code></td>
    <td>Event configuration for the device registration state event.</td>
</tr>
<tr>
    <td><CopyableCode code="Join" /></td>
    <td><code>object</code></td>
    <td>Event configuration for the join event.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageDeliveryStatus" /></td>
    <td><code>object</code></td>
    <td>Event configuration for the message delivery status event.</td>
</tr>
<tr>
    <td><CopyableCode code="Proximity" /></td>
    <td><code>object</code></td>
    <td>Event configuration for the proximity event.</td>
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
    <td><a href="#get_resource_event_configuration"><CopyableCode code="get_resource_event_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-identifierType"><code>identifierType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-partnerType"><code>partnerType</code></a></td>
    <td>Get the event configuration for a particular resource identifier.</td>
</tr>
<tr>
    <td><a href="#update_resource_event_configuration"><CopyableCode code="update_resource_event_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-identifierType"><code>identifierType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-partnerType"><code>partnerType</code></a></td>
    <td>Update the event configuration for a particular resource identifier.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Resource identifier to opt in for event messaging.</td>
</tr>
<tr id="parameter-identifierType">
    <td><CopyableCode code="identifierType" /></td>
    <td><code>string</code></td>
    <td>Identifier type of the particular resource identifier for event configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-partnerType">
    <td><CopyableCode code="partnerType" /></td>
    <td><code>string</code></td>
    <td>Partner type of the resource if the identifier type is PartnerAccountId</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_event_configuration"
    values={[
        { label: 'get_resource_event_configuration', value: 'get_resource_event_configuration' }
    ]}
>
<TabItem value="get_resource_event_configuration">

Get the event configuration for a particular resource identifier.

```sql
SELECT
ConnectionStatus,
DeviceRegistrationState,
Join,
MessageDeliveryStatus,
Proximity
FROM aws.iotwireless.resource_event_configurations
WHERE identifier = '{{ identifier }}' -- required
AND identifierType = '{{ identifierType }}' -- required
AND region = '{{ region }}' -- required
AND partnerType = '{{ partnerType }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_event_configuration"
    values={[
        { label: 'update_resource_event_configuration', value: 'update_resource_event_configuration' }
    ]}
>
<TabItem value="update_resource_event_configuration">

Update the event configuration for a particular resource identifier.

```sql
UPDATE aws.iotwireless.resource_event_configurations
SET 
DeviceRegistrationState = '{{ DeviceRegistrationState }}',
Proximity = '{{ Proximity }}',
Join = '{{ Join }}',
ConnectionStatus = '{{ ConnectionStatus }}',
MessageDeliveryStatus = '{{ MessageDeliveryStatus }}'
WHERE 
identifier = '{{ identifier }}' --required
AND identifierType = '{{ identifierType }}' --required
AND region = '{{ region }}' --required
AND partnerType = '{{ partnerType}}';
```
</TabItem>
</Tabs>
