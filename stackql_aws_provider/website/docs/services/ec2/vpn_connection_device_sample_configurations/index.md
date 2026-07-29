--- 
title: vpn_connection_device_sample_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpn_connection_device_sample_configurations
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

Creates, updates, deletes, gets or lists a <code>vpn_connection_device_sample_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpn_connection_device_sample_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpn_connection_device_sample_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpn_connection_device_sample_configuration"
    values={[
        { label: 'get_vpn_connection_device_sample_configuration', value: 'get_vpn_connection_device_sample_configuration' }
    ]}
>
<TabItem value="get_vpn_connection_device_sample_configuration">

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
    <td><CopyableCode code="vpn_connection_device_sample_configuration" /></td>
    <td><code>string</code></td>
    <td>Sample configuration file for the specified customer gateway device.</td>
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
    <td><a href="#get_vpn_connection_device_sample_configuration"><CopyableCode code="get_vpn_connection_device_sample_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VpnConnectionId"><code>VpnConnectionId</code></a>, <a href="#parameter-VpnConnectionDeviceTypeId"><code>VpnConnectionDeviceTypeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InternetKeyExchangeVersion"><code>InternetKeyExchangeVersion</code></a>, <a href="#parameter-SampleType"><code>SampleType</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Download an Amazon Web Services-provided sample configuration file to be used with the customer gateway device specified for your Site-to-Site VPN connection.</td>
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
<tr id="parameter-VpnConnectionDeviceTypeId">
    <td><CopyableCode code="VpnConnectionDeviceTypeId" /></td>
    <td><code>string</code></td>
    <td>Device identifier provided by the GetVpnConnectionDeviceTypes API.</td>
</tr>
<tr id="parameter-VpnConnectionId">
    <td><CopyableCode code="VpnConnectionId" /></td>
    <td><code>string</code></td>
    <td>The VpnConnectionId specifies the Site-to-Site VPN connection used for the sample configuration.</td>
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
<tr id="parameter-InternetKeyExchangeVersion">
    <td><CopyableCode code="InternetKeyExchangeVersion" /></td>
    <td><code>string</code></td>
    <td>The IKE version to be used in the sample configuration file for your customer gateway device. You can specify one of the following versions: ikev1 or ikev2.</td>
</tr>
<tr id="parameter-SampleType">
    <td><CopyableCode code="SampleType" /></td>
    <td><code>string</code></td>
    <td>The type of sample configuration to generate. Valid values are "compatibility" (includes IKEv1) or "recommended" (throws UnsupportedOperationException for IKEv1).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpn_connection_device_sample_configuration"
    values={[
        { label: 'get_vpn_connection_device_sample_configuration', value: 'get_vpn_connection_device_sample_configuration' }
    ]}
>
<TabItem value="get_vpn_connection_device_sample_configuration">

Download an Amazon Web Services-provided sample configuration file to be used with the customer gateway device specified for your Site-to-Site VPN connection.

```sql
SELECT
vpn_connection_device_sample_configuration
FROM aws.ec2.vpn_connection_device_sample_configurations
WHERE VpnConnectionId = '{{ VpnConnectionId }}' -- required
AND VpnConnectionDeviceTypeId = '{{ VpnConnectionDeviceTypeId }}' -- required
AND region = '{{ region }}' -- required
AND InternetKeyExchangeVersion = '{{ InternetKeyExchangeVersion }}'
AND SampleType = '{{ SampleType }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
