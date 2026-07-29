--- 
title: network_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - network_acls
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

Creates, updates, deletes, gets or lists a <code>network_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_acls"
    values={[
        { label: 'describe_network_acls', value: 'describe_network_acls' }
    ]}
>
<TabItem value="describe_network_acls">

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
    <td><CopyableCode code="associations" /></td>
    <td><code>string</code></td>
    <td>Any associations between the network ACL and your subnets</td>
</tr>
<tr>
    <td><CopyableCode code="entries" /></td>
    <td><code>string</code></td>
    <td>The entries (rules) in the network ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this is the default network ACL for the VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="network_acl_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the network ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the network ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the network ACL.</td>
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
    <td><a href="#describe_network_acls"><CopyableCode code="describe_network_acls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkAclId"><code>NetworkAclId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your network ACLs. The default is to describe all your network ACLs. Alternatively, you can specify specific network ACL IDs or filter the results to include only the network ACLs that match specific criteria. For more information, see Network ACLs in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_network_acl_entry"><CopyableCode code="create_network_acl_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-NetworkAclId"><code>NetworkAclId</code></a>, <a href="#parameter-RuleNumber"><code>RuleNumber</code></a>, <a href="#parameter-RuleAction"><code>RuleAction</code></a>, <a href="#parameter-Egress"><code>Egress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-CidrBlock"><code>CidrBlock</code></a>, <a href="#parameter-Ipv6CidrBlock"><code>Ipv6CidrBlock</code></a>, <a href="#parameter-Icmp"><code>Icmp</code></a>, <a href="#parameter-PortRange"><code>PortRange</code></a></td>
    <td>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of ingress rules and a separate set of egress rules. We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules. After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one. For more information about network ACLs, see Network ACLs in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_network_acl"><CopyableCode code="create_network_acl" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC. For more information, see Network ACLs in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#replace_network_acl_entry"><CopyableCode code="replace_network_acl_entry" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-NetworkAclId"><code>NetworkAclId</code></a>, <a href="#parameter-RuleNumber"><code>RuleNumber</code></a>, <a href="#parameter-RuleAction"><code>RuleAction</code></a>, <a href="#parameter-Egress"><code>Egress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-CidrBlock"><code>CidrBlock</code></a>, <a href="#parameter-Ipv6CidrBlock"><code>Ipv6CidrBlock</code></a>, <a href="#parameter-Icmp"><code>Icmp</code></a>, <a href="#parameter-PortRange"><code>PortRange</code></a></td>
    <td>Replaces an entry (rule) in a network ACL. For more information, see Network ACLs in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#replace_network_acl_association"><CopyableCode code="replace_network_acl_association" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-NetworkAclId"><code>NetworkAclId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Changes which network ACL a subnet is associated with. By default when you create a subnet, it's automatically associated with the default network ACL. For more information, see Network ACLs in the Amazon VPC User Guide. This is an idempotent operation.</td>
</tr>
<tr>
    <td><a href="#delete_network_acl_entry"><CopyableCode code="delete_network_acl_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkAclId"><code>NetworkAclId</code></a>, <a href="#parameter-RuleNumber"><code>RuleNumber</code></a>, <a href="#parameter-Egress"><code>Egress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</td>
</tr>
<tr>
    <td><a href="#delete_network_acl"><CopyableCode code="delete_network_acl" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkAclId"><code>NetworkAclId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the current association between the original network ACL and the subnet.</td>
</tr>
<tr id="parameter-Egress">
    <td><CopyableCode code="Egress" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the rule is an egress rule.</td>
</tr>
<tr id="parameter-NetworkAclId">
    <td><CopyableCode code="NetworkAclId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network ACL.</td>
</tr>
<tr id="parameter-RuleAction">
    <td><CopyableCode code="RuleAction" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to allow or deny the traffic that matches the rule.</td>
</tr>
<tr id="parameter-RuleNumber">
    <td><CopyableCode code="RuleNumber" /></td>
    <td><code>integer</code></td>
    <td>The rule number of the entry to delete.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CidrBlock">
    <td><CopyableCode code="CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv4 network range to allow or deny, in CIDR notation (for example 172.16.0.0/24).</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. association.association-id - The ID of an association ID for the ACL. association.network-acl-id - The ID of the network ACL involved in the association. association.subnet-id - The ID of the subnet involved in the association. default - Indicates whether the ACL is the default network ACL for the VPC. entry.cidr - The IPv4 CIDR range specified in the entry. entry.icmp.code - The ICMP code specified in the entry, if any. entry.icmp.type - The ICMP type specified in the entry, if any. entry.ipv6-cidr - The IPv6 CIDR range specified in the entry. entry.port-range.from - The start of the port range specified in the entry. entry.port-range.to - The end of the port range specified in the entry. entry.protocol - The protocol specified in the entry (tcp | udp | icmp or a protocol number). entry.rule-action - Allows or denies the matching traffic (allow | deny). entry.egress - A Boolean that indicates the type of rule. Specify true for egress rules, or false for ingress rules. entry.rule-number - The number of an entry (in other words, rule) in the set of ACL entries. network-acl-id - The ID of the network ACL. owner-id - The ID of the Amazon Web Services account that owns the network ACL. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC for the network ACL.</td>
</tr>
<tr id="parameter-Icmp">
    <td><CopyableCode code="Icmp" /></td>
    <td><code>object</code></td>
    <td>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</td>
</tr>
<tr id="parameter-Ipv6CidrBlock">
    <td><CopyableCode code="Ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>The IPv6 network range to allow or deny, in CIDR notation (for example 2001:bd8:1234:1a00::/64).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NetworkAclId">
    <td><CopyableCode code="NetworkAclId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the network ACLs.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-PortRange">
    <td><CopyableCode code="PortRange" /></td>
    <td><code>object</code></td>
    <td>TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the network ACL.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_acls"
    values={[
        { label: 'describe_network_acls', value: 'describe_network_acls' }
    ]}
>
<TabItem value="describe_network_acls">

Describes your network ACLs. The default is to describe all your network ACLs. Alternatively, you can specify specific network ACL IDs or filter the results to include only the network ACLs that match specific criteria. For more information, see Network ACLs in the Amazon VPC User Guide.

```sql
SELECT
associations,
entries,
is_default,
network_acl_id,
owner_id,
tags,
vpc_id
FROM aws.ec2.network_acls
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND NetworkAclId = '{{ NetworkAclId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_acl_entry"
    values={[
        { label: 'create_network_acl_entry', value: 'create_network_acl_entry' },
        { label: 'create_network_acl', value: 'create_network_acl' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_acl_entry">

Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of ingress rules and a separate set of egress rules. We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules. After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one. For more information about network ACLs, see Network ACLs in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.network_acls (
NetworkAclId,
RuleNumber,
RuleAction,
Egress,
region,
DryRun,
Protocol,
CidrBlock,
Ipv6CidrBlock,
Icmp,
PortRange
)
SELECT 
'{{ NetworkAclId }}',
'{{ RuleNumber }}',
'{{ RuleAction }}',
'{{ Egress }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Protocol }}',
'{{ CidrBlock }}',
'{{ Ipv6CidrBlock }}',
'{{ Icmp }}',
'{{ PortRange }}'
;
```
</TabItem>
<TabItem value="create_network_acl">

Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC. For more information, see Network ACLs in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.network_acls (
VpcId,
region,
TagSpecification,
ClientToken,
DryRun
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ DryRun }}'
RETURNING
associations,
entries,
is_default,
network_acl_id,
owner_id,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_acls
  props:
    - name: NetworkAclId
      value: "{{ NetworkAclId }}"
      description: Required parameter for the network_acls resource.
    - name: RuleNumber
      value: {{ RuleNumber }}
      description: Required parameter for the network_acls resource.
    - name: RuleAction
      value: "{{ RuleAction }}"
      description: Required parameter for the network_acls resource.
    - name: Egress
      value: {{ Egress }}
      description: Required parameter for the network_acls resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_acls resource.
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the network_acls resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Protocol
      value: "{{ Protocol }}"
      description: The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.
      description: The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.
    - name: CidrBlock
      value: "{{ CidrBlock }}"
      description: The IPv4 network range to allow or deny, in CIDR notation (for example 172.16.0.0/24). We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18.
      description: The IPv4 network range to allow or deny, in CIDR notation (for example 172.16.0.0/24). We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18.
    - name: Ipv6CidrBlock
      value: "{{ Ipv6CidrBlock }}"
      description: The IPv6 network range to allow or deny, in CIDR notation (for example 2001:db8:1234:1a00::/64).
      description: The IPv6 network range to allow or deny, in CIDR notation (for example 2001:db8:1234:1a00::/64).
    - name: Icmp
      value: "{{ Icmp }}"
      description: ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
      description: ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
    - name: PortRange
      value: "{{ PortRange }}"
      description: TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
      description: TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the network ACL.
      description: The tags to assign to the network ACL.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_network_acl_entry"
    values={[
        { label: 'replace_network_acl_entry', value: 'replace_network_acl_entry' },
        { label: 'replace_network_acl_association', value: 'replace_network_acl_association' }
    ]}
>
<TabItem value="replace_network_acl_entry">

Replaces an entry (rule) in a network ACL. For more information, see Network ACLs in the Amazon VPC User Guide.

```sql
REPLACE aws.ec2.network_acls
SET 
-- No updatable properties
WHERE 
NetworkAclId = '{{ NetworkAclId }}' --required
AND RuleNumber = '{{ RuleNumber }}' --required
AND RuleAction = '{{ RuleAction }}' --required
AND Egress = '{{ Egress }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Protocol = '{{ Protocol}}'
AND CidrBlock = '{{ CidrBlock}}'
AND Ipv6CidrBlock = '{{ Ipv6CidrBlock}}'
AND Icmp = '{{ Icmp}}'
AND PortRange = '{{ PortRange}}';
```
</TabItem>
<TabItem value="replace_network_acl_association">

Changes which network ACL a subnet is associated with. By default when you create a subnet, it's automatically associated with the default network ACL. For more information, see Network ACLs in the Amazon VPC User Guide. This is an idempotent operation.

```sql
REPLACE aws.ec2.network_acls
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND NetworkAclId = '{{ NetworkAclId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
new_association_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_acl_entry"
    values={[
        { label: 'delete_network_acl_entry', value: 'delete_network_acl_entry' },
        { label: 'delete_network_acl', value: 'delete_network_acl' }
    ]}
>
<TabItem value="delete_network_acl_entry">

Deletes the specified ingress or egress entry (rule) from the specified network ACL.

```sql
DELETE FROM aws.ec2.network_acls
WHERE NetworkAclId = '{{ NetworkAclId }}' --required
AND RuleNumber = '{{ RuleNumber }}' --required
AND Egress = '{{ Egress }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
<TabItem value="delete_network_acl">

Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.

```sql
DELETE FROM aws.ec2.network_acls
WHERE NetworkAclId = '{{ NetworkAclId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
