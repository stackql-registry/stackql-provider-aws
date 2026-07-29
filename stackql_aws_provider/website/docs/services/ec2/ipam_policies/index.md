--- 
title: ipam_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_policies
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

Creates, updates, deletes, gets or lists an <code>ipam_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_policies"
    values={[
        { label: 'describe_ipam_policies', value: 'describe_ipam_policies' }
    ]}
>
<TabItem value="describe_ipam_policies">

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
    <td><CopyableCode code="ipam_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM this policy belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IPAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_policy_region" /></td>
    <td><code>string</code></td>
    <td>The Region of the IPAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The account ID that owns the IPAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the IPAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="state_message" /></td>
    <td><code>string</code></td>
    <td>A message about the state of the IPAM policy.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the IPAM policy.</td>
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
    <td><a href="#describe_ipam_policies"><CopyableCode code="describe_ipam_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamPolicyId"><code>IpamPolicyId</code></a></td>
    <td>Describes one or more IPAM policies. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</td>
</tr>
<tr>
    <td><a href="#create_ipam_policy"><CopyableCode code="create_ipam_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. For more information, see Define public IPv4 allocation strategy with IPAM policies in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_policy"><CopyableCode code="delete_ipam_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamPolicyId"><code>IpamPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</td>
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
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM for which you're creating the policy.</td>
</tr>
<tr id="parameter-IpamPolicyId">
    <td><CopyableCode code="IpamPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM policy to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters for the IPAM policy description.</td>
</tr>
<tr id="parameter-IpamPolicyId">
    <td><CopyableCode code="IpamPolicyId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the IPAM policies to describe.</td>
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
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the IPAM policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_policies"
    values={[
        { label: 'describe_ipam_policies', value: 'describe_ipam_policies' }
    ]}
>
<TabItem value="describe_ipam_policies">

Describes one or more IPAM policies. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.

```sql
SELECT
ipam_id,
ipam_policy_arn,
ipam_policy_id,
ipam_policy_region,
owner_id,
state,
state_message,
tags
FROM aws.ec2.ipam_policies
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamPolicyId = '{{ IpamPolicyId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_policy"
    values={[
        { label: 'create_ipam_policy', value: 'create_ipam_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_policy">

Creates an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations. For more information, see Define public IPv4 allocation strategy with IPAM policies in the Amazon VPC IPAM User Guide.

```sql
INSERT INTO aws.ec2.ipam_policies (
IpamId,
region,
DryRun,
TagSpecification,
ClientToken
)
SELECT 
'{{ IpamId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
ipam_id,
ipam_policy_arn,
ipam_policy_id,
ipam_policy_region,
owner_id,
state,
state_message,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_policies
  props:
    - name: IpamId
      value: "{{ IpamId }}"
      description: Required parameter for the ipam_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_policies resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the IPAM policy.
      description: The tags to assign to the IPAM policy.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier to ensure the idempotency of the request.
      description: A unique, case-sensitive identifier to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_policy"
    values={[
        { label: 'delete_ipam_policy', value: 'delete_ipam_policy' }
    ]}
>
<TabItem value="delete_ipam_policy">

Deletes an IPAM policy. An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.

```sql
DELETE FROM aws.ec2.ipam_policies
WHERE IpamPolicyId = '{{ IpamPolicyId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
