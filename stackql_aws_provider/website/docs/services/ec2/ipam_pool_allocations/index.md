--- 
title: ipam_pool_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_pool_allocations
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

Creates, updates, deletes, gets or lists an <code>ipam_pool_allocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_pool_allocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_pool_allocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_pool_allocations"
    values={[
        { label: 'get_ipam_pool_allocations', value: 'get_ipam_pool_allocations' },
        { label: 'describe_ipam_pool_allocations', value: 'describe_ipam_pool_allocations' }
    ]}
>
<TabItem value="get_ipam_pool_allocations">

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
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR for the allocation. A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses. An IPv4 CIDR example is 10.24.34.0/23. An IPv6 CIDR example is 2001:DB8::/32.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the pool allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_pool_allocation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the IPAM pool allocation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_ipam_pool_allocations">

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
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR for the allocation. A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses. An IPv4 CIDR example is 10.24.34.0/23. An IPv6 CIDR example is 2001:DB8::/32.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the pool allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_pool_allocation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the IPAM pool allocation.</td>
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
    <td><a href="#get_ipam_pool_allocations"><CopyableCode code="get_ipam_pool_allocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpamPoolAllocationId"><code>IpamPoolAllocationId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Get a list of all the CIDR allocations in an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. If you use this action after AllocateIpamPoolCidr or ReleaseIpamPoolAllocation, note that all EC2 API actions follow an eventual consistency model.</td>
</tr>
<tr>
    <td><a href="#describe_ipam_pool_allocations"><CopyableCode code="describe_ipam_pool_allocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpamPoolAllocationId"><code>IpamPoolAllocationId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes IPAM pool allocations. You can describe all allocations owned by you across all pools, or you can describe specific allocations by ID. If you specify IpamPoolAllocationIds, the results include only the specified allocations. If you do not specify IpamPoolAllocationIds, the results include all allocations owned by you. You can use Filters to narrow the results. This action returns only allocations directly owned by you. To view all allocations in a pool you own or that has been shared with you, including allocations owned by other accounts, use GetIpamPoolAllocations.</td>
</tr>
<tr>
    <td><a href="#release_ipam_pool_allocation"><CopyableCode code="release_ipam_pool_allocation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-IpamPoolAllocationId"><code>IpamPoolAllocationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a></td>
    <td>Release an allocation within an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. You can only use this action to release manual allocations. To remove an allocation for a resource without deleting the resource, set its monitored state to false using ModifyIpamResourceCidr. For more information, see Release an allocation in the Amazon VPC IPAM User Guide. All EC2 API actions follow an eventual consistency model.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_pool_allocation"><CopyableCode code="modify_ipam_pool_allocation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPoolAllocationId"><code>IpamPoolAllocationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td>Modifies the description of an IPAM pool allocation. For more information, see Modify an IPAM pool allocation in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-IpamPoolAllocationId">
    <td><CopyableCode code="IpamPoolAllocationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool allocation you want to modify.</td>
</tr>
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool which contains the allocation you want to release.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR of the allocation you want to release.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The new description for the IPAM pool allocation. If you submit a null value, the description is removed from the allocation.</td>
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
<tr id="parameter-IpamPoolAllocationId">
    <td><CopyableCode code="IpamPoolAllocationId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the IPAM pool allocations you want to describe.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_pool_allocations"
    values={[
        { label: 'get_ipam_pool_allocations', value: 'get_ipam_pool_allocations' },
        { label: 'describe_ipam_pool_allocations', value: 'describe_ipam_pool_allocations' }
    ]}
>
<TabItem value="get_ipam_pool_allocations">

Get a list of all the CIDR allocations in an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. If you use this action after AllocateIpamPoolCidr or ReleaseIpamPoolAllocation, note that all EC2 API actions follow an eventual consistency model.

```sql
SELECT
cidr,
description,
ipam_pool_allocation_id,
resource_id,
resource_owner,
resource_region,
resource_type,
tags
FROM aws.ec2.ipam_pool_allocations
WHERE IpamPoolId = '{{ IpamPoolId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND IpamPoolAllocationId = '{{ IpamPoolAllocationId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
<TabItem value="describe_ipam_pool_allocations">

Describes IPAM pool allocations. You can describe all allocations owned by you across all pools, or you can describe specific allocations by ID. If you specify IpamPoolAllocationIds, the results include only the specified allocations. If you do not specify IpamPoolAllocationIds, the results include all allocations owned by you. You can use Filters to narrow the results. This action returns only allocations directly owned by you. To view all allocations in a pool you own or that has been shared with you, including allocations owned by other accounts, use GetIpamPoolAllocations.

```sql
SELECT
cidr,
description,
ipam_pool_allocation_id,
resource_id,
resource_owner,
resource_region,
resource_type,
tags
FROM aws.ec2.ipam_pool_allocations
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND IpamPoolAllocationId = '{{ IpamPoolAllocationId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="release_ipam_pool_allocation"
    values={[
        { label: 'release_ipam_pool_allocation', value: 'release_ipam_pool_allocation' },
        { label: 'modify_ipam_pool_allocation', value: 'modify_ipam_pool_allocation' }
    ]}
>
<TabItem value="release_ipam_pool_allocation">

Release an allocation within an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. You can only use this action to release manual allocations. To remove an allocation for a resource without deleting the resource, set its monitored state to false using ModifyIpamResourceCidr. For more information, see Release an allocation in the Amazon VPC IPAM User Guide. All EC2 API actions follow an eventual consistency model.

```sql
UPDATE aws.ec2.ipam_pool_allocations
SET 
-- No updatable properties
WHERE 
IpamPoolId = '{{ IpamPoolId }}' --required
AND IpamPoolAllocationId = '{{ IpamPoolAllocationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Cidr = '{{ Cidr}}'
RETURNING
success;
```
</TabItem>
<TabItem value="modify_ipam_pool_allocation">

Modifies the description of an IPAM pool allocation. For more information, see Modify an IPAM pool allocation in the Amazon VPC IPAM User Guide.

```sql
UPDATE aws.ec2.ipam_pool_allocations
SET 
-- No updatable properties
WHERE 
IpamPoolAllocationId = '{{ IpamPoolAllocationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
RETURNING
cidr,
description,
ipam_pool_allocation_id,
resource_id,
resource_owner,
resource_region,
resource_type,
tags;
```
</TabItem>
</Tabs>
