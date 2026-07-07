--- 
title: active_vpn_tunnel_status
hide_title: false
hide_table_of_contents: false
keywords:
  - active_vpn_tunnel_status
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

Creates, updates, deletes, gets or lists an <code>active_vpn_tunnel_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="active_vpn_tunnel_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.active_vpn_tunnel_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_active_vpn_tunnel_status"
    values={[
        { label: 'get_active_vpn_tunnel_status', value: 'get_active_vpn_tunnel_status' }
    ]}
>
<TabItem value="get_active_vpn_tunnel_status">

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
    <td><CopyableCode code="IkeVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the Internet Key Exchange (IKE) protocol being used.</td>
</tr>
<tr>
    <td><CopyableCode code="Phase1DHGroup" /></td>
    <td><code>integer</code></td>
    <td>The Diffie-Hellman group number being used in Phase 1 IKE negotiations.</td>
</tr>
<tr>
    <td><CopyableCode code="Phase1EncryptionAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The encryption algorithm negotiated in Phase 1 IKE negotiations.</td>
</tr>
<tr>
    <td><CopyableCode code="Phase1IntegrityAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The integrity algorithm negotiated in Phase 1 IKE negotiations.</td>
</tr>
<tr>
    <td><CopyableCode code="Phase2DHGroup" /></td>
    <td><code>integer</code></td>
    <td>The Diffie-Hellman group number being used in Phase 2 IKE negotiations.</td>
</tr>
<tr>
    <td><CopyableCode code="Phase2EncryptionAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The encryption algorithm negotiated in Phase 2 IKE negotiations.</td>
</tr>
<tr>
    <td><CopyableCode code="Phase2IntegrityAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The integrity algorithm negotiated in Phase 2 IKE negotiations.</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningStatus" /></td>
    <td><code>string</code></td>
    <td>The current provisioning status of the VPN tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningStatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current provisioning status.</td>
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
    <td><a href="#get_active_vpn_tunnel_status"><CopyableCode code="get_active_vpn_tunnel_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-VpnTunnelOutsideIpAddress"><code>VpnTunnelOutsideIpAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Returns the currently negotiated security parameters for an active VPN tunnel, including IKE version, DH groups, encryption algorithms, and integrity algorithms.</td>
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
    <td>The ID of the VPN connection for which to retrieve the active tunnel status.</td>
</tr>
<tr id="parameter-VpnTunnelOutsideIpAddress">
    <td><CopyableCode code="VpnTunnelOutsideIpAddress" /></td>
    <td><code>string</code></td>
    <td>The external IP address of the VPN tunnel for which to retrieve the active status.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_active_vpn_tunnel_status"
    values={[
        { label: 'get_active_vpn_tunnel_status', value: 'get_active_vpn_tunnel_status' }
    ]}
>
<TabItem value="get_active_vpn_tunnel_status">

Returns the currently negotiated security parameters for an active VPN tunnel, including IKE version, DH groups, encryption algorithms, and integrity algorithms.

```sql
SELECT
IkeVersion,
Phase1DHGroup,
Phase1EncryptionAlgorithm,
Phase1IntegrityAlgorithm,
Phase2DHGroup,
Phase2EncryptionAlgorithm,
Phase2IntegrityAlgorithm,
ProvisioningStatus,
ProvisioningStatusReason
FROM aws.ec2.active_vpn_tunnel_status
WHERE VpnConnectionId = '{{ VpnConnectionId }}' -- required
AND VpnTunnelOutsideIpAddress = '{{ VpnTunnelOutsideIpAddress }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
