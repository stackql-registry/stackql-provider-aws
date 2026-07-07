--- 
title: endpoint_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_attributes
  - sns
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

Creates, updates, deletes, gets or lists an <code>endpoint_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.endpoint_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_endpoint_attributes"
    values={[
        { label: 'get_endpoint_attributes', value: 'get_endpoint_attributes' }
    ]}
>
<TabItem value="get_endpoint_attributes">

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
    <td><CopyableCode code="Attributes" /></td>
    <td><code>string</code></td>
    <td>Attributes include the following: CustomUserData – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB. Enabled – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token. Token – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service. The device token for the iOS platform is returned in lowercase.</td>
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
    <td><a href="#get_endpoint_attributes"><CopyableCode code="get_endpoint_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-EndpointArn"><code>EndpointArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see Using Amazon SNS Mobile Push Notifications.</td>
</tr>
<tr>
    <td><a href="#set_endpoint_attributes"><CopyableCode code="set_endpoint_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-EndpointArn"><code>EndpointArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td>Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see Using Amazon SNS Mobile Push Notifications.</td>
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
<tr id="parameter-EndpointArn">
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>EndpointArn used for SetEndpointAttributes action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>A map of the endpoint attributes. Attributes in this map include the following: CustomUserData – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB. Enabled – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token. Token – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_endpoint_attributes"
    values={[
        { label: 'get_endpoint_attributes', value: 'get_endpoint_attributes' }
    ]}
>
<TabItem value="get_endpoint_attributes">

Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see Using Amazon SNS Mobile Push Notifications.

```sql
SELECT
Attributes
FROM aws.sns.endpoint_attributes
WHERE EndpointArn = '{{ EndpointArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_endpoint_attributes"
    values={[
        { label: 'set_endpoint_attributes', value: 'set_endpoint_attributes' }
    ]}
>
<TabItem value="set_endpoint_attributes">

Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see Using Amazon SNS Mobile Push Notifications.

```sql
UPDATE aws.sns.endpoint_attributes
SET 
-- No updatable properties
WHERE 
EndpointArn = '{{ EndpointArn }}' --required
AND region = '{{ region }}' --required
AND Attributes = '{{ Attributes}}';
```
</TabItem>
</Tabs>
