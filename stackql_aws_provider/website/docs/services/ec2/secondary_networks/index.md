--- 
title: secondary_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - secondary_networks
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

Creates, updates, deletes, gets or lists a <code>secondary_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secondary_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.secondary_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_secondary_networks"
    values={[
        { label: 'describe_secondary_networks', value: 'describe_secondary_networks' }
    ]}
>
<TabItem value="describe_secondary_networks">

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
    <td><CopyableCode code="ipv_4_cidr_block_associations" /></td>
    <td><code>string</code></td>
    <td>Information about the IPv4 CIDR blocks associated with the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current state of the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the secondary network.</td>
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
    <td><a href="#describe_secondary_networks"><CopyableCode code="describe_secondary_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-SecondaryNetworkId"><code>SecondaryNetworkId</code></a></td>
    <td>Describes one or more secondary networks.</td>
</tr>
<tr>
    <td><a href="#create_secondary_network"><CopyableCode code="create_secondary_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-Ipv4CidrBlock"><code>Ipv4CidrBlock</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a secondary network. The allowed size for a secondary network CIDR block is between /28 netmask (16 IP addresses) and /12 netmask (1,048,576 IP addresses).</td>
</tr>
<tr>
    <td><a href="#delete_secondary_network"><CopyableCode code="delete_secondary_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SecondaryNetworkId"><code>SecondaryNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a secondary network. You must delete all secondary subnets in the secondary network before you can delete the secondary network.</td>
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
<tr id="parameter-Ipv4CidrBlock">
    <td><CopyableCode code="Ipv4CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv4 CIDR block for the secondary network. The CIDR block size must be between /12 and /28.</td>
</tr>
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The type of secondary network.</td>
</tr>
<tr id="parameter-SecondaryNetworkId">
    <td><CopyableCode code="SecondaryNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the secondary network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. The following are the possible values: ipv4-cidr-block-association.association-id - The association ID for an IPv4 CIDR block associated with the secondary network. ipv4-cidr-block-association.cidr-block - An IPv4 CIDR block associated with the secondary network. ipv4-cidr-block-association.state - The state of an IPv4 CIDR block associated with the secondary network. owner-id - The ID of the Amazon Web Services account that owns the secondary network. secondary-network-id - The ID of the secondary network. secondary-network-arn - The ARN of the secondary network. state - The state of the secondary network (create-in-progress | create-complete | create-failed | delete-in-progress | delete-complete | delete-failed). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. type - The type of the secondary network (rdma).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-SecondaryNetworkId">
    <td><CopyableCode code="SecondaryNetworkId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the secondary networks.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the secondary network.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_secondary_networks"
    values={[
        { label: 'describe_secondary_networks', value: 'describe_secondary_networks' }
    ]}
>
<TabItem value="describe_secondary_networks">

Describes one or more secondary networks.

```sql
SELECT
ipv_4_cidr_block_associations,
owner_id,
secondary_network_arn,
secondary_network_id,
state,
state_reason,
tags,
type
FROM aws.ec2.secondary_networks
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND SecondaryNetworkId = '{{ SecondaryNetworkId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_secondary_network"
    values={[
        { label: 'create_secondary_network', value: 'create_secondary_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_secondary_network">

Creates a secondary network. The allowed size for a secondary network CIDR block is between /28 netmask (16 IP addresses) and /12 netmask (1,048,576 IP addresses).

```sql
INSERT INTO aws.ec2.secondary_networks (
Ipv4CidrBlock,
NetworkType,
region,
ClientToken,
DryRun,
TagSpecification
)
SELECT 
'{{ Ipv4CidrBlock }}',
'{{ NetworkType }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
ipv_4_cidr_block_associations,
owner_id,
secondary_network_arn,
secondary_network_id,
state,
state_reason,
tags,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secondary_networks
  props:
    - name: Ipv4CidrBlock
      value: "{{ Ipv4CidrBlock }}"
      description: Required parameter for the secondary_networks resource.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: Required parameter for the secondary_networks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the secondary_networks resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the secondary network.
      description: The tags to assign to the secondary network.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_secondary_network"
    values={[
        { label: 'delete_secondary_network', value: 'delete_secondary_network' }
    ]}
>
<TabItem value="delete_secondary_network">

Deletes a secondary network. You must delete all secondary subnets in the secondary network before you can delete the secondary network.

```sql
DELETE FROM aws.ec2.secondary_networks
WHERE SecondaryNetworkId = '{{ SecondaryNetworkId }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
