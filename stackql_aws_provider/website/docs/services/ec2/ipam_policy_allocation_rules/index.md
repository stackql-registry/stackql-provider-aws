--- 
title: ipam_policy_allocation_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_policy_allocation_rules
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

Creates, updates, deletes, gets or lists an <code>ipam_policy_allocation_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_policy_allocation_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_policy_allocation_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_policy_allocation_rules"
    values={[
        { label: 'get_ipam_policy_allocation_rules', value: 'get_ipam_policy_allocation_rules' }
    ]}
>
<TabItem value="get_ipam_policy_allocation_rules">

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
    <td><CopyableCode code="ipam_policy_documents" /></td>
    <td><code>string</code></td>
    <td>The IPAM policy documents containing the allocation rules. Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
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
    <td><a href="#get_ipam_policy_allocation_rules"><CopyableCode code="get_ipam_policy_allocation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamPolicyId"><code>IpamPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-Locale"><code>Locale</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Gets the allocation rules for an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_policy_allocation_rules"><CopyableCode code="modify_ipam_policy_allocation_rules" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPolicyId"><code>IpamPolicyId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Locale"><code>Locale</code></a>, <a href="#parameter-AllocationRule"><code>AllocationRule</code></a></td>
    <td>Modifies the allocation rules in an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</td>
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
<tr id="parameter-IpamPolicyId">
    <td><CopyableCode code="IpamPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM policy whose allocation rules you want to modify.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type for which to modify the allocation rules. The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include: Elastic IP addresses</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllocationRule">
    <td><CopyableCode code="AllocationRule" /></td>
    <td><code>array</code></td>
    <td>The new allocation rules to apply to the IPAM policy. Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters for the allocation rules.</td>
</tr>
<tr id="parameter-Locale">
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The locale for which to modify the allocation rules.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type for which to get the allocation rules. The Amazon Web Services service or resource type that can use IP addresses through IPAM policies. Supported services and resource types include: Elastic IP addresses</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_policy_allocation_rules"
    values={[
        { label: 'get_ipam_policy_allocation_rules', value: 'get_ipam_policy_allocation_rules' }
    ]}
>
<TabItem value="get_ipam_policy_allocation_rules">

Gets the allocation rules for an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.

```sql
SELECT
ipam_policy_documents,
next_token
FROM aws.ec2.ipam_policy_allocation_rules
WHERE IpamPolicyId = '{{ IpamPolicyId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND Locale = '{{ Locale }}'
AND ResourceType = '{{ ResourceType }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_policy_allocation_rules"
    values={[
        { label: 'modify_ipam_policy_allocation_rules', value: 'modify_ipam_policy_allocation_rules' }
    ]}
>
<TabItem value="modify_ipam_policy_allocation_rules">

Modifies the allocation rules in an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.

```sql
UPDATE aws.ec2.ipam_policy_allocation_rules
SET 
-- No updatable properties
WHERE 
IpamPolicyId = '{{ IpamPolicyId }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Locale = '{{ Locale}}'
AND AllocationRule = '{{ AllocationRule}}'
RETURNING
allocation_rules,
ipam_policy_id,
locale,
resource_type;
```
</TabItem>
</Tabs>
