--- 
title: ipams
hide_title: false
hide_table_of_contents: false
keywords:
  - ipams
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

Creates, updates, deletes, gets or lists an <code>ipams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipams"
    values={[
        { label: 'describe_ipams', value: 'describe_ipams' }
    ]}
>
<TabItem value="describe_ipams">

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
    <td><CopyableCode code="default_resource_discovery_association_id" /></td>
    <td><code>string</code></td>
    <td>The IPAM's default resource discovery association ID.</td>
</tr>
<tr>
    <td><CopyableCode code="default_resource_discovery_id" /></td>
    <td><code>string</code></td>
    <td>The IPAM's default resource discovery ID.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_private_gua" /></td>
    <td><code>boolean</code></td>
    <td>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="metered_account" /></td>
    <td><code>string</code></td>
    <td>A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see Enable cost distribution in the Amazon VPC IPAM User Guide. Possible values: ipam-owner (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM. resource-owner: The Amazon Web Services account that owns the IP address is charged for the active IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="operating_regions" /></td>
    <td><code>string</code></td>
    <td>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="private_default_scope_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM's default private scope.</td>
</tr>
<tr>
    <td><CopyableCode code="public_default_scope_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM's default public scope.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_discovery_association_count" /></td>
    <td><code>integer</code></td>
    <td>The IPAM's resource discovery association count.</td>
</tr>
<tr>
    <td><CopyableCode code="scope_count" /></td>
    <td><code>integer</code></td>
    <td>The number of scopes in the IPAM. The scope quota is 5. For more information on quotas, see Quotas in IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="state_message" /></td>
    <td><code>string</code></td>
    <td>The state message.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see Amazon VPC pricing &gt; IPAM tab.</td>
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
    <td><a href="#describe_ipams"><CopyableCode code="describe_ipams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamId"><code>IpamId</code></a></td>
    <td>Get information about your IPAM pools. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#create_ipam"><CopyableCode code="create_ipam" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OperatingRegion"><code>OperatingRegion</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Tier"><code>Tier</code></a>, <a href="#parameter-EnablePrivateGua"><code>EnablePrivateGua</code></a>, <a href="#parameter-MeteredAccount"><code>MeteredAccount</code></a></td>
    <td>Create an IPAM. Amazon VPC IP Address Manager (IPAM) is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see Create an IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_ipam"><CopyableCode code="modify_ipam" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-AddOperatingRegion"><code>AddOperatingRegion</code></a>, <a href="#parameter-RemoveOperatingRegion"><code>RemoveOperatingRegion</code></a>, <a href="#parameter-Tier"><code>Tier</code></a>, <a href="#parameter-EnablePrivateGua"><code>EnablePrivateGua</code></a>, <a href="#parameter-MeteredAccount"><code>MeteredAccount</code></a></td>
    <td>Modify the configurations of an IPAM.</td>
</tr>
<tr>
    <td><a href="#delete_ipam"><CopyableCode code="delete_ipam" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cascade"><code>Cascade</code></a></td>
    <td>Delete an IPAM. Deleting an IPAM removes all monitored data associated with the IPAM including the historical data for CIDRs. For more information, see Delete an IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_ipam_organization_admin_account"><CopyableCode code="disable_ipam_organization_admin_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DelegatedAdminAccountId"><code>DelegatedAdminAccountId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disable the IPAM account. For more information, see Enable integration with Organizations in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_ipam_policy"><CopyableCode code="disable_ipam_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-IpamPolicyId"><code>IpamPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-OrganizationTargetId"><code>OrganizationTargetId</code></a></td>
    <td>Disables an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</td>
</tr>
<tr>
    <td><a href="#enable_ipam_organization_admin_account"><CopyableCode code="enable_ipam_organization_admin_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DelegatedAdminAccountId"><code>DelegatedAdminAccountId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see Enable integration with Organizations in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_ipam_policy"><CopyableCode code="enable_ipam_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-IpamPolicyId"><code>IpamPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-OrganizationTargetId"><code>OrganizationTargetId</code></a></td>
    <td>Enables an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. For more information, see Define public IPv4 allocation strategy with IPAM policies in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-DelegatedAdminAccountId">
    <td><CopyableCode code="DelegatedAdminAccountId" /></td>
    <td><code>string</code></td>
    <td>The Organizations member account ID that you want to enable as the IPAM account.</td>
</tr>
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM to delete.</td>
</tr>
<tr id="parameter-IpamPolicyId">
    <td><CopyableCode code="IpamPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM policy to enable.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddOperatingRegion">
    <td><CopyableCode code="AddOperatingRegion" /></td>
    <td><code>array</code></td>
    <td>Choose the operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-Cascade">
    <td><CopyableCode code="Cascade" /></td>
    <td><code>boolean</code></td>
    <td>Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes. You cannot delete the IPAM with this option if there is a pool in your public scope. If you use this option, IPAM does the following: Deallocates any CIDRs allocated to VPC resources (such as VPCs) in pools in private scopes. No VPC resources are deleted as a result of enabling this option. The CIDR associated with the resource will no longer be allocated from an IPAM pool, but the CIDR itself will remain unchanged. Deprovisions all IPv4 CIDRs provisioned to IPAM pools in private scopes. Deletes all IPAM pools in private scopes. Deletes all non-default private scopes in the IPAM. Deletes the default public and private scopes and the IPAM.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the IPAM you want to modify.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EnablePrivateGua">
    <td><CopyableCode code="EnablePrivateGua" /></td>
    <td><code>boolean</code></td>
    <td>Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters for the request. For more information about filtering, see Filtering CLI output.</td>
</tr>
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the IPAMs you want information on.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the request.</td>
</tr>
<tr id="parameter-MeteredAccount">
    <td><CopyableCode code="MeteredAccount" /></td>
    <td><code>string</code></td>
    <td>A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see Enable cost distribution in the Amazon VPC IPAM User Guide. Possible values: ipam-owner (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM. resource-owner: The Amazon Web Services account that owns the IP address is charged for the active IP address.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-OperatingRegion">
    <td><CopyableCode code="OperatingRegion" /></td>
    <td><code>array</code></td>
    <td>The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr id="parameter-OrganizationTargetId">
    <td><CopyableCode code="OrganizationTargetId" /></td>
    <td><code>string</code></td>
    <td>A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied. The ID of the Amazon Web Services Organizations target for which to enable the IPAM policy. This parameter is required only when IPAM is integrated with Amazon Web Services Organizations. When IPAM is not integrated with Amazon Web Services Organizations, omit this parameter and the policy will apply to the current account.</td>
</tr>
<tr id="parameter-RemoveOperatingRegion">
    <td><CopyableCode code="RemoveOperatingRegion" /></td>
    <td><code>array</code></td>
    <td>The operating Regions to remove.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
<tr id="parameter-Tier">
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see Amazon VPC pricing &gt; IPAM tab.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipams"
    values={[
        { label: 'describe_ipams', value: 'describe_ipams' }
    ]}
>
<TabItem value="describe_ipams">

Get information about your IPAM pools. For more information, see What is IPAM? in the Amazon VPC IPAM User Guide.

```sql
SELECT
default_resource_discovery_association_id,
default_resource_discovery_id,
description,
enable_private_gua,
ipam_arn,
ipam_id,
ipam_region,
metered_account,
operating_regions,
owner_id,
private_default_scope_id,
public_default_scope_id,
resource_discovery_association_count,
scope_count,
state,
state_message,
tags,
tier
FROM aws.ec2.ipams
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamId = '{{ IpamId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam"
    values={[
        { label: 'create_ipam', value: 'create_ipam' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam">

Create an IPAM. Amazon VPC IP Address Manager (IPAM) is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see Create an IPAM in the Amazon VPC IPAM User Guide.

```sql
INSERT INTO aws.ec2.ipams (
region,
DryRun,
Description,
OperatingRegion,
TagSpecification,
ClientToken,
Tier,
EnablePrivateGua,
MeteredAccount
)
SELECT 
'{{ region }}',
'{{ DryRun }}',
'{{ Description }}',
'{{ OperatingRegion }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ Tier }}',
'{{ EnablePrivateGua }}',
'{{ MeteredAccount }}'
RETURNING
default_resource_discovery_association_id,
default_resource_discovery_id,
description,
enable_private_gua,
ipam_arn,
ipam_id,
ipam_region,
metered_account,
operating_regions,
owner_id,
private_default_scope_id,
public_default_scope_id,
resource_discovery_association_count,
scope_count,
state,
state_message,
tags,
tier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipams resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Description
      value: "{{ Description }}"
      description: A description for the IPAM.
      description: A description for the IPAM.
    - name: OperatingRegion
      value: "{{ OperatingRegion }}"
      description: The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.
      description: The operating Regions for the IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions. For more information about operating Regions, see Create an IPAM in the Amazon VPC IPAM User Guide.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: Tier
      value: "{{ Tier }}"
      description: IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see Amazon VPC pricing > IPAM tab.
      description: IPAM is offered in a Free Tier and an Advanced Tier. For more information about the features available in each tier and the costs associated with the tiers, see Amazon VPC pricing > IPAM tab.
    - name: EnablePrivateGua
      value: {{ EnablePrivateGua }}
      description: Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.
      description: Enable this option to use your own GUA ranges as private IPv6 addresses. This option is disabled by default.
    - name: MeteredAccount
      value: "{{ MeteredAccount }}"
      description: A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see Enable cost distribution in the Amazon VPC IPAM User Guide. Possible values: ipam-owner (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM. resource-owner: The Amazon Web Services account that owns the IP address is charged for the active IP address.
      description: A metered account is an Amazon Web Services account that is charged for active IP addresses managed in IPAM. For more information, see Enable cost distribution in the Amazon VPC IPAM User Guide. Possible values: ipam-owner (default): The Amazon Web Services account which owns the IPAM is charged for all active IP addresses managed in IPAM. resource-owner: The Amazon Web Services account that owns the IP address is charged for the active IP address.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam"
    values={[
        { label: 'modify_ipam', value: 'modify_ipam' }
    ]}
>
<TabItem value="modify_ipam">

Modify the configurations of an IPAM.

```sql
UPDATE aws.ec2.ipams
SET 
-- No updatable properties
WHERE 
IpamId = '{{ IpamId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
AND AddOperatingRegion = '{{ AddOperatingRegion}}'
AND RemoveOperatingRegion = '{{ RemoveOperatingRegion}}'
AND Tier = '{{ Tier}}'
AND EnablePrivateGua = {{ EnablePrivateGua}}
AND MeteredAccount = '{{ MeteredAccount}}'
RETURNING
default_resource_discovery_association_id,
default_resource_discovery_id,
description,
enable_private_gua,
ipam_arn,
ipam_id,
ipam_region,
metered_account,
operating_regions,
owner_id,
private_default_scope_id,
public_default_scope_id,
resource_discovery_association_count,
scope_count,
state,
state_message,
tags,
tier;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam"
    values={[
        { label: 'delete_ipam', value: 'delete_ipam' }
    ]}
>
<TabItem value="delete_ipam">

Delete an IPAM. Deleting an IPAM removes all monitored data associated with the IPAM including the historical data for CIDRs. For more information, see Delete an IPAM in the Amazon VPC IPAM User Guide.

```sql
DELETE FROM aws.ec2.ipams
WHERE IpamId = '{{ IpamId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND Cascade = '{{ Cascade }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_ipam_organization_admin_account"
    values={[
        { label: 'disable_ipam_organization_admin_account', value: 'disable_ipam_organization_admin_account' },
        { label: 'disable_ipam_policy', value: 'disable_ipam_policy' },
        { label: 'enable_ipam_organization_admin_account', value: 'enable_ipam_organization_admin_account' },
        { label: 'enable_ipam_policy', value: 'enable_ipam_policy' }
    ]}
>
<TabItem value="disable_ipam_organization_admin_account">

Disable the IPAM account. For more information, see Enable integration with Organizations in the Amazon VPC IPAM User Guide.

```sql
EXEC aws.ec2.ipams.disable_ipam_organization_admin_account 
@DelegatedAdminAccountId='{{ DelegatedAdminAccountId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_ipam_policy">

Disables an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.

```sql
EXEC aws.ec2.ipams.disable_ipam_policy 
@IpamPolicyId='{{ IpamPolicyId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@OrganizationTargetId='{{ OrganizationTargetId }}'
;
```
</TabItem>
<TabItem value="enable_ipam_organization_admin_account">

Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see Enable integration with Organizations in the Amazon VPC IPAM User Guide.

```sql
EXEC aws.ec2.ipams.enable_ipam_organization_admin_account 
@DelegatedAdminAccountId='{{ DelegatedAdminAccountId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_ipam_policy">

Enables an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. For more information, see Define public IPv4 allocation strategy with IPAM policies in the Amazon VPC IPAM User Guide.

```sql
EXEC aws.ec2.ipams.enable_ipam_policy 
@IpamPolicyId='{{ IpamPolicyId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@OrganizationTargetId='{{ OrganizationTargetId }}'
;
```
</TabItem>
</Tabs>
