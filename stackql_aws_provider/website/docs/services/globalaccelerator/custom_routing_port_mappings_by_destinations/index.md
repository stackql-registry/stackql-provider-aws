--- 
title: custom_routing_port_mappings_by_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_routing_port_mappings_by_destinations
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>custom_routing_port_mappings_by_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_routing_port_mappings_by_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.custom_routing_port_mappings_by_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_custom_routing_port_mappings_by_destination"
    values={[
        { label: 'list_custom_routing_port_mappings_by_destination', value: 'list_custom_routing_port_mappings_by_destination' }
    ]}
>
<TabItem value="list_custom_routing_port_mappings_by_destination">

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
    <td><CopyableCode code="accelerator_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom routing accelerator that you have port mappings for.</td>
</tr>
<tr>
    <td><CopyableCode code="accelerator_socket_addresses" /></td>
    <td><code>array</code></td>
    <td>The IP address/port combinations (sockets) that map to a given destination socket address.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_socket_address" /></td>
    <td><code>object</code></td>
    <td>An IP address/port combination.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_traffic_state" /></td>
    <td><code>string</code></td>
    <td>Indicates whether or not a port mapping destination can receive traffic. The value is either ALLOW, if traffic is allowed to the destination, or DENY, if traffic is not allowed to the destination. (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_group_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the virtual private cloud (VPC) subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type that an accelerator supports. For a custom routing accelerator, the value must be IPV4. (IPV4, DUAL_STACK)</td>
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
    <td><a href="#list_custom_routing_port_mappings_by_destination"><CopyableCode code="list_custom_routing_port_mappings_by_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.</td>
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
    defaultValue="list_custom_routing_port_mappings_by_destination"
    values={[
        { label: 'list_custom_routing_port_mappings_by_destination', value: 'list_custom_routing_port_mappings_by_destination' }
    ]}
>
<TabItem value="list_custom_routing_port_mappings_by_destination">

List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.

```sql
SELECT
accelerator_arn,
accelerator_socket_addresses,
destination_socket_address,
destination_traffic_state,
endpoint_group_arn,
endpoint_group_region,
endpoint_id,
ip_address_type
FROM aws.globalaccelerator.custom_routing_port_mappings_by_destinations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
