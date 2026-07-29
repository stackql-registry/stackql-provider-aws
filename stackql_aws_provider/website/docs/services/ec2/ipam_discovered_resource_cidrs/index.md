--- 
title: ipam_discovered_resource_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_discovered_resource_cidrs
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

Creates, updates, deletes, gets or lists an <code>ipam_discovered_resource_cidrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_discovered_resource_cidrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_discovered_resource_cidrs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_discovered_resource_cidrs"
    values={[
        { label: 'get_ipam_discovered_resource_cidrs', value: 'get_ipam_discovered_resource_cidrs' }
    ]}
>
<TabItem value="get_ipam_discovered_resource_cidrs">

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
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_source" /></td>
    <td><code>string</code></td>
    <td>The source that allocated the IP address space. byoip or amazon indicates public IP address space allocated by Amazon or space that you have allocated with Bring your own IP (BYOIP). none indicates private space.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_usage" /></td>
    <td><code>number</code></td>
    <td>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following: For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs. For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated. For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_resource_discovery_id" /></td>
    <td><code>string</code></td>
    <td>The resource discovery ID.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_attachment_status" /></td>
    <td><code>string</code></td>
    <td>For elastic network interfaces, this is the status of whether or not the elastic network interface is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_cidr" /></td>
    <td><code>string</code></td>
    <td>The resource CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_id" /></td>
    <td><code>string</code></td>
    <td>The resource owner ID.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_region" /></td>
    <td><code>string</code></td>
    <td>The resource Region.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>string</code></td>
    <td>The resource tags.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_time" /></td>
    <td><code>string</code></td>
    <td>The last successful resource discovery time.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The subnet ID.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC ID.</td>
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
    <td><a href="#get_ipam_discovered_resource_cidrs"><CopyableCode code="get_ipam_discovered_resource_cidrs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamResourceDiscoveryId"><code>IpamResourceDiscoveryId</code></a>, <a href="#parameter-ResourceRegion"><code>ResourceRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns the resource CIDRs that are monitored as part of a resource discovery. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses.</td>
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
<tr id="parameter-IpamResourceDiscoveryId">
    <td><CopyableCode code="IpamResourceDiscoveryId" /></td>
    <td><code>string</code></td>
    <td>A resource discovery ID.</td>
</tr>
<tr id="parameter-ResourceRegion">
    <td><CopyableCode code="ResourceRegion" /></td>
    <td><code>string</code></td>
    <td>A resource Region.</td>
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
    <td>The maximum number of discovered resource CIDRs to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_discovered_resource_cidrs"
    values={[
        { label: 'get_ipam_discovered_resource_cidrs', value: 'get_ipam_discovered_resource_cidrs' }
    ]}
>
<TabItem value="get_ipam_discovered_resource_cidrs">

Returns the resource CIDRs that are monitored as part of a resource discovery. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses.

```sql
SELECT
availability_zone_id,
ip_source,
ip_usage,
ipam_resource_discovery_id,
network_interface_attachment_status,
resource_cidr,
resource_id,
resource_owner_id,
resource_region,
resource_tags,
resource_type,
sample_time,
subnet_id,
vpc_id
FROM aws.ec2.ipam_discovered_resource_cidrs
WHERE IpamResourceDiscoveryId = '{{ IpamResourceDiscoveryId }}' -- required
AND ResourceRegion = '{{ ResourceRegion }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
