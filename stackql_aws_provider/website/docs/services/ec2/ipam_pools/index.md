--- 
title: ipam_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_pools
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

Creates, updates, deletes, gets or lists an <code>ipam_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_pools"
    values={[
        { label: 'describe_ipam_pools', value: 'describe_ipam_pools' }
    ]}
>
<TabItem value="describe_ipam_pools">

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
    <td><CopyableCode code="AddressFamily" /></td>
    <td><code>string</code></td>
    <td>The address family of the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="AllocationDefaultNetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.</td>
</tr>
<tr>
    <td><CopyableCode code="AllocationMaxNetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.</td>
</tr>
<tr>
    <td><CopyableCode code="AllocationMinNetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.</td>
</tr>
<tr>
    <td><CopyableCode code="AllocationResourceTags" /></td>
    <td><code>string</code></td>
    <td>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoImport" /></td>
    <td><code>boolean</code></td>
    <td>If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only. A locale must be set on the pool for this feature to work.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsService" /></td>
    <td><code>string</code></td>
    <td>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPoolArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamScopeArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scope of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IpamScopeType" /></td>
    <td><code>string</code></td>
    <td>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</td>
</tr>
<tr>
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The locale of the IPAM pool. The locale for the pool should be one of the following: An Amazon Web Services Region where you want this IPAM pool to be available for allocations. The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (supported Local Zones). This option is only available for IPAM IPv4 pools in the public scope. If you choose an Amazon Web Services Region for locale that has not been configured as an operating Region for the IPAM, you'll get an error.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="PoolDepth" /></td>
    <td><code>integer</code></td>
    <td>The depth of pools in your IPAM pool. The pool depth quota is 10. For more information, see Quotas in IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicIpSource" /></td>
    <td><code>string</code></td>
    <td>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is BYOIP. For more information, see Create IPv6 pools in the Amazon VPC IPAM User Guide. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool. For information on increasing the default limit, see Quotas for your IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="PubliclyAdvertisable" /></td>
    <td><code>boolean</code></td>
    <td>Determines if a pool is publicly advertisable. This option is not available for pools with AddressFamily set to ipv4.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source IPAM pool. You can use this option to create an IPAM pool within an existing source pool.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceResource" /></td>
    <td><code>string</code></td>
    <td>The resource used to provision CIDRs to a resource planning pool.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the IPAM pool.</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>The state message.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
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
    <td><a href="#describe_ipam_pools"><CopyableCode code="describe_ipam_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a></td>
    <td>Get information about your IPAM pools.</td>
</tr>
<tr>
    <td><a href="#create_ipam_pool"><CopyableCode code="create_ipam_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamScopeId"><code>IpamScopeId</code></a>, <a href="#parameter-AddressFamily"><code>AddressFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Locale"><code>Locale</code></a>, <a href="#parameter-SourceIpamPoolId"><code>SourceIpamPoolId</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-AutoImport"><code>AutoImport</code></a>, <a href="#parameter-PubliclyAdvertisable"><code>PubliclyAdvertisable</code></a>, <a href="#parameter-AllocationMinNetmaskLength"><code>AllocationMinNetmaskLength</code></a>, <a href="#parameter-AllocationMaxNetmaskLength"><code>AllocationMaxNetmaskLength</code></a>, <a href="#parameter-AllocationDefaultNetmaskLength"><code>AllocationDefaultNetmaskLength</code></a>, <a href="#parameter-AllocationResourceTag"><code>AllocationResourceTag</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-AwsService"><code>AwsService</code></a>, <a href="#parameter-PublicIpSource"><code>PublicIpSource</code></a>, <a href="#parameter-SourceResource"><code>SourceResource</code></a></td>
    <td>Create an IP address pool for Amazon VPC IP Address Manager (IPAM). In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each. For more information, see Create a top-level pool in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_pool"><CopyableCode code="modify_ipam_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-AutoImport"><code>AutoImport</code></a>, <a href="#parameter-AllocationMinNetmaskLength"><code>AllocationMinNetmaskLength</code></a>, <a href="#parameter-AllocationMaxNetmaskLength"><code>AllocationMaxNetmaskLength</code></a>, <a href="#parameter-AllocationDefaultNetmaskLength"><code>AllocationDefaultNetmaskLength</code></a>, <a href="#parameter-ClearAllocationDefaultNetmaskLength"><code>ClearAllocationDefaultNetmaskLength</code></a>, <a href="#parameter-AddAllocationResourceTag"><code>AddAllocationResourceTag</code></a>, <a href="#parameter-RemoveAllocationResourceTag"><code>RemoveAllocationResourceTag</code></a></td>
    <td>Modify the configurations of an IPAM pool. For more information, see Modify a pool in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_pool"><CopyableCode code="delete_ipam_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cascade"><code>Cascade</code></a></td>
    <td>Delete an IPAM pool. You cannot delete an IPAM pool if there are allocations in it or CIDRs provisioned to it. To release allocations, see ReleaseIpamPoolAllocation. To deprovision pool CIDRs, see DeprovisionIpamPoolCidr. For more information, see Delete a pool in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-AddressFamily">
    <td><CopyableCode code="AddressFamily" /></td>
    <td><code>string</code></td>
    <td>The IP protocol assigned to this IPAM pool. You must choose either IPv4 or IPv6 protocol for a pool.</td>
</tr>
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the pool to delete.</td>
</tr>
<tr id="parameter-IpamScopeId">
    <td><CopyableCode code="IpamScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the scope in which you would like to create the IPAM pool.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddAllocationResourceTag">
    <td><CopyableCode code="AddAllocationResourceTag" /></td>
    <td><code>array</code></td>
    <td>Add tag allocation rules to a pool. For more information about allocation rules, see Create a top-level pool in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-AllocationDefaultNetmaskLength">
    <td><CopyableCode code="AllocationDefaultNetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.</td>
</tr>
<tr id="parameter-AllocationMaxNetmaskLength">
    <td><CopyableCode code="AllocationMaxNetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.The maximum netmask length must be greater than the minimum netmask length.</td>
</tr>
<tr id="parameter-AllocationMinNetmaskLength">
    <td><CopyableCode code="AllocationMinNetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128. The minimum netmask length must be less than the maximum netmask length.</td>
</tr>
<tr id="parameter-AllocationResourceTag">
    <td><CopyableCode code="AllocationResourceTag" /></td>
    <td><code>array</code></td>
    <td>Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.</td>
</tr>
<tr id="parameter-AutoImport">
    <td><CopyableCode code="AutoImport" /></td>
    <td><code>boolean</code></td>
    <td>If true, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only. A locale must be set on the pool for this feature to work.</td>
</tr>
<tr id="parameter-AwsService">
    <td><CopyableCode code="AwsService" /></td>
    <td><code>string</code></td>
    <td>Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.</td>
</tr>
<tr id="parameter-Cascade">
    <td><CopyableCode code="Cascade" /></td>
    <td><code>boolean</code></td>
    <td>Enables you to quickly delete an IPAM pool and all resources within that pool, including provisioned CIDRs, allocations, and other pools. You can only use this option to delete pools in the private scope or pools in the public scope with a source resource. A source resource is a resource used to provision CIDRs to a resource planning pool.</td>
</tr>
<tr id="parameter-ClearAllocationDefaultNetmaskLength">
    <td><CopyableCode code="ClearAllocationDefaultNetmaskLength" /></td>
    <td><code>boolean</code></td>
    <td>Clear the default netmask length allocation rule for this pool.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the IPAM pool you want to modify.</td>
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
    <td><code>array</code></td>
    <td>The IDs of the IPAM pools you would like information on.</td>
</tr>
<tr id="parameter-Locale">
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The locale for the pool should be one of the following: An Amazon Web Services Region where you want this IPAM pool to be available for allocations. The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (supported Local Zones). This option is only available for IPAM IPv4 pools in the public scope. Possible values: Any Amazon Web Services Region or supported Amazon Web Services Local Zone. Default is none and means any locale.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PublicIpSource">
    <td><CopyableCode code="PublicIpSource" /></td>
    <td><code>string</code></td>
    <td>The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is byoip. For more information, see Create IPv6 pools in the Amazon VPC IPAM User Guide. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is amazon. For information on increasing the default limit, see Quotas for your IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-PubliclyAdvertisable">
    <td><CopyableCode code="PubliclyAdvertisable" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the pool is publicly advertisable. The request can only contain PubliclyAdvertisable if AddressFamily is ipv6 and PublicIpSource is byoip.</td>
</tr>
<tr id="parameter-RemoveAllocationResourceTag">
    <td><CopyableCode code="RemoveAllocationResourceTag" /></td>
    <td><code>array</code></td>
    <td>Remove tag allocation rules from a pool.</td>
</tr>
<tr id="parameter-SourceIpamPoolId">
    <td><CopyableCode code="SourceIpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.</td>
</tr>
<tr id="parameter-SourceResource">
    <td><CopyableCode code="SourceResource" /></td>
    <td><code>object</code></td>
    <td>The resource used to provision CIDRs to a resource planning pool.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_pools"
    values={[
        { label: 'describe_ipam_pools', value: 'describe_ipam_pools' }
    ]}
>
<TabItem value="describe_ipam_pools">

Get information about your IPAM pools.

```sql
SELECT
AddressFamily,
AllocationDefaultNetmaskLength,
AllocationMaxNetmaskLength,
AllocationMinNetmaskLength,
AllocationResourceTags,
AutoImport,
AwsService,
Description,
IpamArn,
IpamPoolArn,
IpamPoolId,
IpamRegion,
IpamScopeArn,
IpamScopeType,
Locale,
OwnerId,
PoolDepth,
PublicIpSource,
PubliclyAdvertisable,
SourceIpamPoolId,
SourceResource,
State,
StateMessage,
Tags
FROM aws.ec2.ipam_pools
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamPoolId = '{{ IpamPoolId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_pool"
    values={[
        { label: 'create_ipam_pool', value: 'create_ipam_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_pool">

Create an IP address pool for Amazon VPC IP Address Manager (IPAM). In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each. For more information, see Create a top-level pool in the Amazon VPC IPAM User Guide.

```sql
INSERT INTO aws.ec2.ipam_pools (
IpamScopeId,
AddressFamily,
region,
DryRun,
Locale,
SourceIpamPoolId,
Description,
AutoImport,
PubliclyAdvertisable,
AllocationMinNetmaskLength,
AllocationMaxNetmaskLength,
AllocationDefaultNetmaskLength,
AllocationResourceTag,
TagSpecification,
ClientToken,
AwsService,
PublicIpSource,
SourceResource
)
SELECT 
'{{ IpamScopeId }}',
'{{ AddressFamily }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Locale }}',
'{{ SourceIpamPoolId }}',
'{{ Description }}',
'{{ AutoImport }}',
'{{ PubliclyAdvertisable }}',
'{{ AllocationMinNetmaskLength }}',
'{{ AllocationMaxNetmaskLength }}',
'{{ AllocationDefaultNetmaskLength }}',
'{{ AllocationResourceTag }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ AwsService }}',
'{{ PublicIpSource }}',
'{{ SourceResource }}'
RETURNING
AddressFamily,
AllocationDefaultNetmaskLength,
AllocationMaxNetmaskLength,
AllocationMinNetmaskLength,
AllocationResourceTags,
AutoImport,
AwsService,
Description,
IpamArn,
IpamPoolArn,
IpamPoolId,
IpamRegion,
IpamScopeArn,
IpamScopeType,
Locale,
OwnerId,
PoolDepth,
PublicIpSource,
PubliclyAdvertisable,
SourceIpamPoolId,
SourceResource,
State,
StateMessage,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_pools
  props:
    - name: IpamScopeId
      value: "{{ IpamScopeId }}"
      description: Required parameter for the ipam_pools resource.
    - name: AddressFamily
      value: "{{ AddressFamily }}"
      description: Required parameter for the ipam_pools resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_pools resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Locale
      value: "{{ Locale }}"
      description: The locale for the pool should be one of the following: An Amazon Web Services Region where you want this IPAM pool to be available for allocations. The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (supported Local Zones). This option is only available for IPAM IPv4 pools in the public scope. Possible values: Any Amazon Web Services Region or supported Amazon Web Services Local Zone. Default is none and means any locale.
      description: The locale for the pool should be one of the following: An Amazon Web Services Region where you want this IPAM pool to be available for allocations. The network border group for an Amazon Web Services Local Zone where you want this IPAM pool to be available for allocations (supported Local Zones). This option is only available for IPAM IPv4 pools in the public scope. Possible values: Any Amazon Web Services Region or supported Amazon Web Services Local Zone. Default is none and means any locale.
    - name: SourceIpamPoolId
      value: "{{ SourceIpamPoolId }}"
      description: The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.
      description: The ID of the source IPAM pool. Use this option to create a pool within an existing pool. Note that the CIDR you provision for the pool within the source pool must be available in the source pool's CIDR range.
    - name: Description
      value: "{{ Description }}"
      description: A description for the IPAM pool.
      description: A description for the IPAM pool.
    - name: AutoImport
      value: {{ AutoImport }}
      description: If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only. A locale must be set on the pool for this feature to work.
      description: If selected, IPAM will continuously look for resources within the CIDR range of this pool and automatically import them as allocations into your IPAM. The CIDRs that will be allocated for these resources must not already be allocated to other resources in order for the import to succeed. IPAM will import a CIDR regardless of its compliance with the pool's allocation rules, so a resource might be imported and subsequently marked as noncompliant. If IPAM discovers multiple CIDRs that overlap, IPAM will import the largest CIDR only. If IPAM discovers multiple CIDRs with matching CIDRs, IPAM will randomly import one of them only. A locale must be set on the pool for this feature to work.
    - name: PubliclyAdvertisable
      value: {{ PubliclyAdvertisable }}
      description: Determines if the pool is publicly advertisable. The request can only contain PubliclyAdvertisable if AddressFamily is ipv6 and PublicIpSource is byoip.
      description: Determines if the pool is publicly advertisable. The request can only contain PubliclyAdvertisable if AddressFamily is ipv6 and PublicIpSource is byoip.
    - name: AllocationMinNetmaskLength
      value: {{ AllocationMinNetmaskLength }}
      description: The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
      description: The minimum netmask length required for CIDR allocations in this IPAM pool to be compliant. The minimum netmask length must be less than the maximum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
    - name: AllocationMaxNetmaskLength
      value: {{ AllocationMaxNetmaskLength }}
      description: The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
      description: The maximum netmask length possible for CIDR allocations in this IPAM pool to be compliant. The maximum netmask length must be greater than the minimum netmask length. Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
    - name: AllocationDefaultNetmaskLength
      value: {{ AllocationDefaultNetmaskLength }}
      description: The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.
      description: The default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16.
    - name: AllocationResourceTag
      value: "{{ AllocationResourceTag }}"
      description: Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.
      description: Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: AwsService
      value: "{{ AwsService }}"
      description: Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.
      description: Limits which service in Amazon Web Services that the pool can be used in. "ec2", for example, allows users to use space for Elastic IP addresses and VPCs.
    - name: PublicIpSource
      value: "{{ PublicIpSource }}"
      description: The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is byoip. For more information, see Create IPv6 pools in the Amazon VPC IPAM User Guide. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is amazon. For information on increasing the default limit, see Quotas for your IPAM in the Amazon VPC IPAM User Guide.
      description: The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is byoip. For more information, see Create IPv6 pools in the Amazon VPC IPAM User Guide. By default, you can add only one Amazon-provided IPv6 CIDR block to a top-level IPv6 pool if PublicIpSource is amazon. For information on increasing the default limit, see Quotas for your IPAM in the Amazon VPC IPAM User Guide.
    - name: SourceResource
      value: "{{ SourceResource }}"
      description: The resource used to provision CIDRs to a resource planning pool.
      description: The resource used to provision CIDRs to a resource planning pool.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_pool"
    values={[
        { label: 'modify_ipam_pool', value: 'modify_ipam_pool' }
    ]}
>
<TabItem value="modify_ipam_pool">

Modify the configurations of an IPAM pool. For more information, see Modify a pool in the Amazon VPC IPAM User Guide.

```sql
UPDATE aws.ec2.ipam_pools
SET 
-- No updatable properties
WHERE 
IpamPoolId = '{{ IpamPoolId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
AND AutoImport = {{ AutoImport}}
AND AllocationMinNetmaskLength = '{{ AllocationMinNetmaskLength}}'
AND AllocationMaxNetmaskLength = '{{ AllocationMaxNetmaskLength}}'
AND AllocationDefaultNetmaskLength = '{{ AllocationDefaultNetmaskLength}}'
AND ClearAllocationDefaultNetmaskLength = {{ ClearAllocationDefaultNetmaskLength}}
AND AddAllocationResourceTag = '{{ AddAllocationResourceTag}}'
AND RemoveAllocationResourceTag = '{{ RemoveAllocationResourceTag}}'
RETURNING
AddressFamily,
AllocationDefaultNetmaskLength,
AllocationMaxNetmaskLength,
AllocationMinNetmaskLength,
AllocationResourceTags,
AutoImport,
AwsService,
Description,
IpamArn,
IpamPoolArn,
IpamPoolId,
IpamRegion,
IpamScopeArn,
IpamScopeType,
Locale,
OwnerId,
PoolDepth,
PublicIpSource,
PubliclyAdvertisable,
SourceIpamPoolId,
SourceResource,
State,
StateMessage,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_pool"
    values={[
        { label: 'delete_ipam_pool', value: 'delete_ipam_pool' }
    ]}
>
<TabItem value="delete_ipam_pool">

Delete an IPAM pool. You cannot delete an IPAM pool if there are allocations in it or CIDRs provisioned to it. To release allocations, see ReleaseIpamPoolAllocation. To deprovision pool CIDRs, see DeprovisionIpamPoolCidr. For more information, see Delete a pool in the Amazon VPC IPAM User Guide.

```sql
DELETE FROM aws.ec2.ipam_pools
WHERE IpamPoolId = '{{ IpamPoolId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND Cascade = '{{ Cascade }}'
;
```
</TabItem>
</Tabs>
