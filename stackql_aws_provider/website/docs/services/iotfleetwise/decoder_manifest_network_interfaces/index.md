--- 
title: decoder_manifest_network_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - decoder_manifest_network_interfaces
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>decoder_manifest_network_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="decoder_manifest_network_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.decoder_manifest_network_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_decoder_manifest_network_interfaces"
    values={[
        { label: 'list_decoder_manifest_network_interfaces', value: 'list_decoder_manifest_network_interfaces' }
    ]}
>
<TabItem value="list_decoder_manifest_network_interfaces">

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
    <td><CopyableCode code="can_interface" /></td>
    <td><code>object</code></td>
    <td>Information about a network interface specified by the Controller Area Network (CAN) protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_decoding_interface" /></td>
    <td><code>object</code></td>
    <td>Information about a custom network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="obd_interface" /></td>
    <td><code>object</code></td>
    <td>Information about a network interface specified by the on-board diagnostic (OBD) II protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The network protocol for the vehicle. For example, CAN_SIGNAL specifies a protocol that defines how data is communicated between electronic control units (ECUs). OBD_SIGNAL specifies a protocol that defines how self-diagnostic data is communicated between ECUs. (CAN_INTERFACE, OBD_INTERFACE, VEHICLE_MIDDLEWARE, CUSTOM_DECODING_INTERFACE)</td>
</tr>
<tr>
    <td><CopyableCode code="vehicle_middleware" /></td>
    <td><code>object</code></td>
    <td>The vehicle middleware defined as a type of network interface. Examples of vehicle middleware include ROS2 and SOME/IP.</td>
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
    <td><a href="#list_decoder_manifest_network_interfaces"><CopyableCode code="list_decoder_manifest_network_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the network interfaces specified in a decoder manifest. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
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
    defaultValue="list_decoder_manifest_network_interfaces"
    values={[
        { label: 'list_decoder_manifest_network_interfaces', value: 'list_decoder_manifest_network_interfaces' }
    ]}
>
<TabItem value="list_decoder_manifest_network_interfaces">

Lists the network interfaces specified in a decoder manifest. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
can_interface,
custom_decoding_interface,
interface_id,
obd_interface,
type_,
vehicle_middleware
FROM aws.iotfleetwise.decoder_manifest_network_interfaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
