--- 
title: ipam_resource_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_resource_cidrs
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

Creates, updates, deletes, gets or lists an <code>ipam_resource_cidrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_resource_cidrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_resource_cidrs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_resource_cidrs"
    values={[
        { label: 'get_ipam_resource_cidrs', value: 'get_ipam_resource_cidrs' }
    ]}
>
<TabItem value="get_ipam_resource_cidrs">

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
    <td><CopyableCode code="compliance_status" /></td>
    <td><code>string</code></td>
    <td>The compliance status of the IPAM resource. For more information on compliance statuses, see Monitor CIDR usage by resource in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_usage" /></td>
    <td><code>number</code></td>
    <td>The percentage of IP address space in use. To convert the decimal to a percentage, multiply the decimal by 100. Note the following: For resources that are VPCs, this is the percentage of IP address space in the VPC that's taken up by subnet CIDRs. For resources that are subnets, if the subnet has an IPv4 CIDR provisioned to it, this is the percentage of IPv4 address space in the subnet that's in use. If the subnet has an IPv6 CIDR provisioned to it, the percentage of IPv6 address space in use is not represented. The percentage of IPv6 address space in use cannot currently be calculated. For resources that are public IPv4 pools, this is the percentage of IP address space in the pool that's been allocated to Elastic IP addresses (EIPs).</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_id" /></td>
    <td><code>string</code></td>
    <td>The IPAM ID for an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_pool_id" /></td>
    <td><code>string</code></td>
    <td>The pool ID for an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_scope_id" /></td>
    <td><code>string</code></td>
    <td>The scope ID for an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="management_state" /></td>
    <td><code>string</code></td>
    <td>The management state of the resource. For more information about management states, see Monitor CIDR usage by resource in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="overlap_status" /></td>
    <td><code>string</code></td>
    <td>The overlap status of an IPAM resource. The overlap status tells you if the CIDR for a resource overlaps with another CIDR in the scope. For more information on overlap statuses, see Monitor CIDR usage by resource in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR for an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The name of an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account number of the owner of an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>string</code></td>
    <td>The tags for an IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of IPAM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a VPC.</td>
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
    <td><a href="#get_ipam_resource_cidrs"><CopyableCode code="get_ipam_resource_cidrs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamScopeId"><code>IpamScopeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ResourceTag"><code>ResourceTag</code></a>, <a href="#parameter-ResourceOwner"><code>ResourceOwner</code></a></td>
    <td>Returns resource CIDRs managed by IPAM in a given scope. If an IPAM is associated with more than one resource discovery, the resource CIDRs across all of the resource discoveries is returned. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_resource_cidr"><CopyableCode code="modify_ipam_resource_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ResourceCidr"><code>ResourceCidr</code></a>, <a href="#parameter-ResourceRegion"><code>ResourceRegion</code></a>, <a href="#parameter-CurrentIpamScopeId"><code>CurrentIpamScopeId</code></a>, <a href="#parameter-Monitored"><code>Monitored</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DestinationIpamScopeId"><code>DestinationIpamScopeId</code></a></td>
    <td>Modify a resource CIDR. You can use this action to transfer resource CIDRs between scopes and ignore resource CIDRs that you do not want to manage. If set to false, the resource will not be tracked for overlap, it cannot be auto-imported into a pool, and it will be removed from any pool it has an allocation in. For more information, see Move resource CIDRs between scopes and Change the monitoring state of resource CIDRs in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-CurrentIpamScopeId">
    <td><CopyableCode code="CurrentIpamScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the current scope that the resource CIDR is in.</td>
</tr>
<tr id="parameter-IpamScopeId">
    <td><CopyableCode code="IpamScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the scope that the resource is in.</td>
</tr>
<tr id="parameter-Monitored">
    <td><CopyableCode code="Monitored" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the resource is monitored by IPAM. If a resource is monitored, the resource is discovered by IPAM and you can view details about the resource’s CIDR.</td>
</tr>
<tr id="parameter-ResourceCidr">
    <td><CopyableCode code="ResourceCidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR of the resource you want to modify.</td>
</tr>
<tr id="parameter-ResourceId">
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource you want to modify.</td>
</tr>
<tr id="parameter-ResourceRegion">
    <td><CopyableCode code="ResourceRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the resource you want to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DestinationIpamScopeId">
    <td><CopyableCode code="DestinationIpamScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the scope you want to transfer the resource CIDR to.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters for the request. For more information about filtering, see Filtering CLI output.</td>
</tr>
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool that the resource is in.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-ResourceId">
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-ResourceOwner">
    <td><CopyableCode code="ResourceOwner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the resource.</td>
</tr>
<tr id="parameter-ResourceTag">
    <td><CopyableCode code="ResourceTag" /></td>
    <td><code>object</code></td>
    <td>The resource tag.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_resource_cidrs"
    values={[
        { label: 'get_ipam_resource_cidrs', value: 'get_ipam_resource_cidrs' }
    ]}
>
<TabItem value="get_ipam_resource_cidrs">

Returns resource CIDRs managed by IPAM in a given scope. If an IPAM is associated with more than one resource discovery, the resource CIDRs across all of the resource discoveries is returned. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.

```sql
SELECT
availability_zone_id,
compliance_status,
ip_usage,
ipam_id,
ipam_pool_id,
ipam_scope_id,
management_state,
overlap_status,
resource_cidr,
resource_id,
resource_name,
resource_owner_id,
resource_region,
resource_tags,
resource_type,
vpc_id
FROM aws.ec2.ipam_resource_cidrs
WHERE IpamScopeId = '{{ IpamScopeId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamPoolId = '{{ IpamPoolId }}'
AND ResourceId = '{{ ResourceId }}'
AND ResourceType = '{{ ResourceType }}'
AND ResourceTag = '{{ ResourceTag }}'
AND ResourceOwner = '{{ ResourceOwner }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_resource_cidr"
    values={[
        { label: 'modify_ipam_resource_cidr', value: 'modify_ipam_resource_cidr' }
    ]}
>
<TabItem value="modify_ipam_resource_cidr">

Modify a resource CIDR. You can use this action to transfer resource CIDRs between scopes and ignore resource CIDRs that you do not want to manage. If set to false, the resource will not be tracked for overlap, it cannot be auto-imported into a pool, and it will be removed from any pool it has an allocation in. For more information, see Move resource CIDRs between scopes and Change the monitoring state of resource CIDRs in the Amazon VPC IPAM User Guide.

```sql
UPDATE aws.ec2.ipam_resource_cidrs
SET 
-- No updatable properties
WHERE 
ResourceId = '{{ ResourceId }}' --required
AND ResourceCidr = '{{ ResourceCidr }}' --required
AND ResourceRegion = '{{ ResourceRegion }}' --required
AND CurrentIpamScopeId = '{{ CurrentIpamScopeId }}' --required
AND Monitored = '{{ Monitored }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND DestinationIpamScopeId = '{{ DestinationIpamScopeId}}'
RETURNING
availability_zone_id,
compliance_status,
ip_usage,
ipam_id,
ipam_pool_id,
ipam_scope_id,
management_state,
overlap_status,
resource_cidr,
resource_id,
resource_name,
resource_owner_id,
resource_region,
resource_tags,
resource_type,
vpc_id;
```
</TabItem>
</Tabs>
