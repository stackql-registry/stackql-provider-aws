--- 
title: ipam_pool_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_pool_cidrs
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

Creates, updates, deletes, gets or lists an <code>ipam_pool_cidrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_pool_cidrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_pool_cidrs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_pool_cidrs"
    values={[
        { label: 'get_ipam_pool_cidrs', value: 'get_ipam_pool_cidrs' }
    ]}
>
<TabItem value="get_ipam_pool_cidrs">

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
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses. An IPv4 CIDR example is 10.24.34.0/23. An IPv6 CIDR example is 2001:DB8::/32.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>Details related to why an IPAM pool CIDR failed to be provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPoolCidrId" /></td>
    <td><code>string</code></td>
    <td>The IPAM pool CIDR ID.</td>
</tr>
<tr>
    <td><CopyableCode code="NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the CIDR.</td>
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
    <td><a href="#get_ipam_pool_cidrs"><CopyableCode code="get_ipam_pool_cidrs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Get the CIDRs provisioned to an IPAM pool.</td>
</tr>
<tr>
    <td><a href="#allocate_ipam_pool_cidr"><CopyableCode code="allocate_ipam_pool_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-NetmaskLength"><code>NetmaskLength</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-PreviewNextCidr"><code>PreviewNextCidr</code></a>, <a href="#parameter-AllowedCidr"><code>AllowedCidr</code></a>, <a href="#parameter-DisallowedCidr"><code>DisallowedCidr</code></a></td>
    <td>Allocate a CIDR from an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see Allocate CIDRs in the Amazon VPC IPAM User Guide. This action creates an allocation with strong consistency. The returned CIDR will not overlap with any other allocations from the same pool.</td>
</tr>
<tr>
    <td><a href="#deprovision_ipam_pool_cidr"><CopyableCode code="deprovision_ipam_pool_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a></td>
    <td>Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see Deprovision pool CIDRs in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#provision_ipam_pool_cidr"><CopyableCode code="provision_ipam_pool_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-CidrAuthorizationContext"><code>CidrAuthorizationContext</code></a>, <a href="#parameter-NetmaskLength"><code>NetmaskLength</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-VerificationMethod"><code>VerificationMethod</code></a>, <a href="#parameter-IpamExternalResourceVerificationTokenId"><code>IpamExternalResourceVerificationTokenId</code></a></td>
    <td>Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it. For more information, see Provision CIDRs to pools in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool to which you want to assign a CIDR.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllowedCidr">
    <td><CopyableCode code="AllowedCidr" /></td>
    <td><code>array</code></td>
    <td>Include a particular CIDR range that can be returned by the pool. Allowed CIDRs are only allowed if using netmask length for allocation.</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR you want to assign to the IPAM pool. Either "NetmaskLength" or "Cidr" is required. This value will be null if you specify "NetmaskLength" and will be filled in during the provisioning process.</td>
</tr>
<tr id="parameter-CidrAuthorizationContext">
    <td><CopyableCode code="CidrAuthorizationContext" /></td>
    <td><code>object</code></td>
    <td>A signed document that proves that you are authorized to bring a specified IP address range to Amazon using BYOIP. This option only applies to IPv4 and IPv6 pools in the public scope.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the allocation.</td>
</tr>
<tr id="parameter-DisallowedCidr">
    <td><CopyableCode code="DisallowedCidr" /></td>
    <td><code>array</code></td>
    <td>Exclude a particular CIDR range from being returned by the pool. Disallowed CIDRs are only allowed if using netmask length for allocation.</td>
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
<tr id="parameter-IpamExternalResourceVerificationTokenId">
    <td><CopyableCode code="IpamExternalResourceVerificationTokenId" /></td>
    <td><code>string</code></td>
    <td>Verification token ID. This option only applies to IPv4 and IPv6 pools in the public scope.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the request.</td>
</tr>
<tr id="parameter-NetmaskLength">
    <td><CopyableCode code="NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. Either "NetmaskLength" or "Cidr" is required.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PreviewNextCidr">
    <td><CopyableCode code="PreviewNextCidr" /></td>
    <td><code>boolean</code></td>
    <td>A preview of the next available CIDR in a pool.</td>
</tr>
<tr id="parameter-VerificationMethod">
    <td><CopyableCode code="VerificationMethod" /></td>
    <td><code>string</code></td>
    <td>The method for verifying control of a public IP address range. Defaults to remarks-x509 if not specified. This option only applies to IPv4 and IPv6 pools in the public scope.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_pool_cidrs"
    values={[
        { label: 'get_ipam_pool_cidrs', value: 'get_ipam_pool_cidrs' }
    ]}
>
<TabItem value="get_ipam_pool_cidrs">

Get the CIDRs provisioned to an IPAM pool.

```sql
SELECT
Cidr,
FailureReason,
IpamPoolCidrId,
NetmaskLength,
State
FROM aws.ec2.ipam_pool_cidrs
WHERE IpamPoolId = '{{ IpamPoolId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="allocate_ipam_pool_cidr"
    values={[
        { label: 'allocate_ipam_pool_cidr', value: 'allocate_ipam_pool_cidr' }
    ]}
>
<TabItem value="allocate_ipam_pool_cidr">

Allocate a CIDR from an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see Allocate CIDRs in the Amazon VPC IPAM User Guide. This action creates an allocation with strong consistency. The returned CIDR will not overlap with any other allocations from the same pool.

```sql
UPDATE aws.ec2.ipam_pool_cidrs
SET 
-- No updatable properties
WHERE 
IpamPoolId = '{{ IpamPoolId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Cidr = '{{ Cidr}}'
AND NetmaskLength = '{{ NetmaskLength}}'
AND ClientToken = '{{ ClientToken}}'
AND Description = '{{ Description}}'
AND PreviewNextCidr = {{ PreviewNextCidr}}
AND AllowedCidr = '{{ AllowedCidr}}'
AND DisallowedCidr = '{{ DisallowedCidr}}'
RETURNING
Cidr,
Description,
IpamPoolAllocationId,
ResourceId,
ResourceOwner,
ResourceRegion,
ResourceType;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deprovision_ipam_pool_cidr"
    values={[
        { label: 'deprovision_ipam_pool_cidr', value: 'deprovision_ipam_pool_cidr' },
        { label: 'provision_ipam_pool_cidr', value: 'provision_ipam_pool_cidr' }
    ]}
>
<TabItem value="deprovision_ipam_pool_cidr">

Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see Deprovision pool CIDRs in the Amazon VPC IPAM User Guide.

```sql
EXEC aws.ec2.ipam_pool_cidrs.deprovision_ipam_pool_cidr 
@IpamPoolId='{{ IpamPoolId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Cidr='{{ Cidr }}'
;
```
</TabItem>
<TabItem value="provision_ipam_pool_cidr">

Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it. For more information, see Provision CIDRs to pools in the Amazon VPC IPAM User Guide.

```sql
EXEC aws.ec2.ipam_pool_cidrs.provision_ipam_pool_cidr 
@IpamPoolId='{{ IpamPoolId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Cidr='{{ Cidr }}', 
@CidrAuthorizationContext='{{ CidrAuthorizationContext }}', 
@NetmaskLength='{{ NetmaskLength }}', 
@ClientToken='{{ ClientToken }}', 
@VerificationMethod='{{ VerificationMethod }}', 
@IpamExternalResourceVerificationTokenId='{{ IpamExternalResourceVerificationTokenId }}'
;
```
</TabItem>
</Tabs>
