--- 
title: ipam_discovered_public_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_discovered_public_addresses
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

Creates, updates, deletes, gets or lists an <code>ipam_discovered_public_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_discovered_public_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_discovered_public_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_discovered_public_addresses"
    values={[
        { label: 'get_ipam_discovered_public_addresses', value: 'get_ipam_discovered_public_addresses' }
    ]}
>
<TabItem value="get_ipam_discovered_public_addresses">

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
    <td><CopyableCode code="Address" /></td>
    <td><code>string</code></td>
    <td>The IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="AddressAllocationId" /></td>
    <td><code>string</code></td>
    <td>The allocation ID of the resource the IP address is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="AddressOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owner of the resource the IP address is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="AddressRegion" /></td>
    <td><code>string</code></td>
    <td>The Region of the resource the IP address is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="AddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationStatus" /></td>
    <td><code>string</code></td>
    <td>The association status.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The instance ID of the instance the assigned IP address is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>The resource discovery ID.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkBorderGroup" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see Local Zone availability in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the network interface that IP address is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The network interface ID of the resource with the assigned IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicIpv4PoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the public IPv4 pool that the resource with the assigned IP address is from.</td>
</tr>
<tr>
    <td><CopyableCode code="SampleTime" /></td>
    <td><code>string</code></td>
    <td>The last successful resource discovery time.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>string</code></td>
    <td>Security groups associated with the resource that the IP address is assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="Service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service associated with the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceResource" /></td>
    <td><code>string</code></td>
    <td>The resource ARN or ID.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet that the resource with the assigned IP address is in.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Tags associated with the IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that the resource with the assigned IP address is in.</td>
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
    <td><a href="#get_ipam_discovered_public_addresses"><CopyableCode code="get_ipam_discovered_public_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-AddressRegion"><code>AddressRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Gets the public IP addresses that have been discovered by IPAM.</td>
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
<tr id="parameter-AddressRegion">
    <td><CopyableCode code="AddressRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for the IP address.</td>
</tr>
<tr id="parameter-IpamResourceDiscoveryId">
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>An IPAM resource discovery ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Filters.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of IPAM discovered public addresses to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_discovered_public_addresses"
    values={[
        { label: 'get_ipam_discovered_public_addresses', value: 'get_ipam_discovered_public_addresses' }
    ]}
>
<TabItem value="get_ipam_discovered_public_addresses">

Gets the public IP addresses that have been discovered by IPAM.

```sql
SELECT
Address,
AddressAllocationId,
AddressOwnerId,
AddressRegion,
AddressType,
AssociationStatus,
InstanceId,
IpamResourceDiscoveryId,
NetworkBorderGroup,
NetworkInterfaceDescription,
NetworkInterfaceId,
PublicIpv4PoolId,
SampleTime,
SecurityGroups,
Service,
ServiceResource,
SubnetId,
Tags,
VpcId
FROM aws.ec2.ipam_discovered_public_addresses
WHERE IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' -- required
AND AddressRegion = '{{ AddressRegion }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
