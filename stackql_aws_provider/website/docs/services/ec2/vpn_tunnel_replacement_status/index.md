--- 
title: vpn_tunnel_replacement_status
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_tunnel_replacement_status
  - ec2
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

Creates, updates, deletes, gets or lists a <code>vpn_tunnel_replacement_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpn_tunnel_replacement_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpn_tunnel_replacement_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpn_tunnel_replacement_status"
    values={[
        { label: 'get_vpn_tunnel_replacement_status', value: 'get_vpn_tunnel_replacement_status' }
    ]}
>
<TabItem value="get_vpn_tunnel_replacement_status">

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
    <td><CopyableCode code="CustomerGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="MaintenanceDetails" /></td>
    <td><code>string</code></td>
    <td>Get details of pending tunnel endpoint maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway associated with the VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Site-to-Site VPN connection.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="VpnTunnelOutsideIpAddress" /></td>
    <td><code>string</code></td>
    <td>The external IP address of the VPN tunnel.</td>
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
    <td><a href="#get_vpn_tunnel_replacement_status"><CopyableCode code="get_vpn_tunnel_replacement_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-VpnTunnelOutsideIpAddress"><code>VpnTunnelOutsideIpAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Get details of available tunnel endpoint maintenance.</td>
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
<tr id="parameter-VpnConnectionId">
    <td><CopyableCode code="VpnConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Site-to-Site VPN connection.</td>
</tr>
<tr id="parameter-VpnTunnelOutsideIpAddress">
    <td><CopyableCode code="VpnTunnelOutsideIpAddress" /></td>
    <td><code>string</code></td>
    <td>The external IP address of the VPN tunnel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpn_tunnel_replacement_status"
    values={[
        { label: 'get_vpn_tunnel_replacement_status', value: 'get_vpn_tunnel_replacement_status' }
    ]}
>
<TabItem value="get_vpn_tunnel_replacement_status">

Get details of available tunnel endpoint maintenance.

```sql
SELECT
CustomerGatewayId,
MaintenanceDetails,
TransitGatewayId,
VpnConnectionId,
VpnGatewayId,
VpnTunnelOutsideIpAddress
FROM aws.ec2.vpn_tunnel_replacement_status
WHERE VpnConnectionId = '{{ VpnConnectionId }}' -- required
AND VpnTunnelOutsideIpAddress = '{{ VpnTunnelOutsideIpAddress }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
