--- 
title: security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - security_groups
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

Creates, updates, deletes, gets or lists a <code>security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_groups"
    values={[
        { label: 'describe_security_groups', value: 'describe_security_groups' }
    ]}
>
<TabItem value="describe_security_groups">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_permissions" /></td>
    <td><code>string</code></td>
    <td>The inbound rules associated with the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_permissions_egress" /></td>
    <td><code>string</code></td>
    <td>The outbound rules associated with the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the security group.</td>
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
    <td><a href="#describe_security_groups"><CopyableCode code="describe_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified security groups or all of your security groups.</td>
</tr>
<tr>
    <td><a href="#create_security_group"><CopyableCode code="create_security_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GroupDescription"><code>GroupDescription</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a security group. A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. For more information, see Amazon EC2 security groups in the Amazon EC2 User Guide and Security groups for your VPC in the Amazon VPC User Guide. When you create a security group, you specify a friendly name of your choice. You can't have two security groups for the same VPC with the same name. You have a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other. You can add or remove rules from your security groups using AuthorizeSecurityGroupIngress, AuthorizeSecurityGroupEgress, RevokeSecurityGroupIngress, and RevokeSecurityGroupEgress. For more information about VPC security group limits, see Amazon VPC Limits.</td>
</tr>
<tr>
    <td><a href="#authorize_security_group_egress"><CopyableCode code="authorize_security_group_egress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SourceSecurityGroupName"><code>SourceSecurityGroupName</code></a>, <a href="#parameter-SourceSecurityGroupOwnerId"><code>SourceSecurityGroupOwnerId</code></a>, <a href="#parameter-IpProtocol"><code>IpProtocol</code></a>, <a href="#parameter-FromPort"><code>FromPort</code></a>, <a href="#parameter-ToPort"><code>ToPort</code></a>, <a href="#parameter-CidrIp"><code>CidrIp</code></a>, <a href="#parameter-IpPermissions"><code>IpPermissions</code></a></td>
    <td>Adds the specified outbound (egress) rules to a security group. An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 address ranges, the IP address ranges specified by a prefix list, or the instances that are associated with a source security group. For more information, see Security group rules. You must specify exactly one of the following destinations: an IPv4 or IPv6 address range, a prefix list, or a security group. You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP type and code. Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur. For examples of rules that you can add to security groups for specific access scenarios, see Security group rules for different use cases in the Amazon EC2 User Guide. For information about security group quotas, see Amazon VPC quotas in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#authorize_security_group_ingress"><CopyableCode code="authorize_security_group_ingress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CidrIp"><code>CidrIp</code></a>, <a href="#parameter-FromPort"><code>FromPort</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-IpPermissions"><code>IpPermissions</code></a>, <a href="#parameter-IpProtocol"><code>IpProtocol</code></a>, <a href="#parameter-SourceSecurityGroupName"><code>SourceSecurityGroupName</code></a>, <a href="#parameter-SourceSecurityGroupOwnerId"><code>SourceSecurityGroupOwnerId</code></a>, <a href="#parameter-ToPort"><code>ToPort</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Adds the specified inbound (ingress) rules to a security group. An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 address range, the IP address ranges that are specified by a prefix list, or the instances that are associated with a destination security group. For more information, see Security group rules. You must specify exactly one of the following sources: an IPv4 or IPv6 address range, a prefix list, or a security group. You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code. Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur. For examples of rules that you can add to security groups for specific access scenarios, see Security group rules for different use cases in the Amazon EC2 User Guide. For more information about security group quotas, see Amazon VPC quotas in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_security_group"><CopyableCode code="delete_security_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a security group. If you attempt to delete a security group that is associated with an instance or network interface, is referenced by another security group in the same VPC, or has a VPC association, the operation fails with DependencyViolation.</td>
</tr>
<tr>
    <td><a href="#revoke_security_group_egress"><CopyableCode code="revoke_security_group_egress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SecurityGroupRuleId"><code>SecurityGroupRuleId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SourceSecurityGroupName"><code>SourceSecurityGroupName</code></a>, <a href="#parameter-SourceSecurityGroupOwnerId"><code>SourceSecurityGroupOwnerId</code></a>, <a href="#parameter-IpProtocol"><code>IpProtocol</code></a>, <a href="#parameter-FromPort"><code>FromPort</code></a>, <a href="#parameter-ToPort"><code>ToPort</code></a>, <a href="#parameter-CidrIp"><code>CidrIp</code></a>, <a href="#parameter-IpPermissions"><code>IpPermissions</code></a></td>
    <td>Removes the specified outbound (egress) rules from the specified security group. You can specify rules using either rule IDs or security group rule properties. If you use rule properties, the values that you specify (for example, ports) must match the existing rule's values exactly. Each rule has a protocol, from and to ports, and destination (CIDR range, security group, or prefix list). For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not need to specify the description to revoke the rule. For a default VPC, if the values you specify do not match the existing rule's values, no error is returned, and the output describes the security group rules that were not revoked. Amazon Web Services recommends that you describe the security group to verify that the rules were removed. Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</td>
</tr>
<tr>
    <td><a href="#revoke_security_group_ingress"><CopyableCode code="revoke_security_group_ingress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CidrIp"><code>CidrIp</code></a>, <a href="#parameter-FromPort"><code>FromPort</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-IpPermissions"><code>IpPermissions</code></a>, <a href="#parameter-IpProtocol"><code>IpProtocol</code></a>, <a href="#parameter-SourceSecurityGroupName"><code>SourceSecurityGroupName</code></a>, <a href="#parameter-SourceSecurityGroupOwnerId"><code>SourceSecurityGroupOwnerId</code></a>, <a href="#parameter-ToPort"><code>ToPort</code></a>, <a href="#parameter-SecurityGroupRuleId"><code>SecurityGroupRuleId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Removes the specified inbound (ingress) rules from a security group. You can specify rules using either rule IDs or security group rule properties. If you use rule properties, the values that you specify (for example, ports) must match the existing rule's values exactly. Each rule has a protocol, from and to ports, and source (CIDR range, security group, or prefix list). For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not need to specify the description to revoke the rule. For a default VPC, if the values you specify do not match the existing rule's values, no error is returned, and the output describes the security group rules that were not revoked. For a non-default VPC, if the values you specify do not match the existing rule's values, an InvalidPermission.NotFound client error is returned, and no rules are revoked. Amazon Web Services recommends that you describe the security group to verify that the rules were removed. Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</td>
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
<tr id="parameter-GroupDescription">
    <td><CopyableCode code="GroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the security group. Constraints: Up to 255 characters in length Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@&#91;&#93;+=&;&#123;&#125;!$*</td>
</tr>
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the security group. Names are case-insensitive and must be unique within the VPC. Constraints: Up to 255 characters in length. Can't start with sg-. Valid characters: a-z, A-Z, 0-9, spaces, and ._-:/()#,@&#91;&#93;+=&;&#123;&#125;!$*</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CidrIp">
    <td><CopyableCode code="CidrIp" /></td>
    <td><code>string</code></td>
    <td>The CIDR IP address range. You can't specify this parameter when specifying a source security group.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. If using multiple filters for rules, the results include security groups for which any combination of rules - not necessarily a single rule - match all filters. description - The description of the security group. egress.ip-permission.cidr - An IPv4 CIDR block for an outbound security group rule. egress.ip-permission.from-port - For an outbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number. egress.ip-permission.group-id - The ID of a security group that has been referenced in an outbound security group rule. egress.ip-permission.group-name - The name of a security group that is referenced in an outbound security group rule. egress.ip-permission.ipv6-cidr - An IPv6 CIDR block for an outbound security group rule. egress.ip-permission.prefix-list-id - The ID of a prefix list to which a security group rule allows outbound access. egress.ip-permission.protocol - The IP protocol for an outbound security group rule (tcp | udp | icmp, a protocol number, or -1 for all protocols). egress.ip-permission.to-port - For an outbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code. egress.ip-permission.user-id - The ID of an Amazon Web Services account that has been referenced in an outbound security group rule. group-id - The ID of the security group. group-name - The name of the security group. ip-permission.cidr - An IPv4 CIDR block for an inbound security group rule. ip-permission.from-port - For an inbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number. ip-permission.group-id - The ID of a security group that has been referenced in an inbound security group rule. ip-permission.group-name - The name of a security group that is referenced in an inbound security group rule. ip-permission.ipv6-cidr - An IPv6 CIDR block for an inbound security group rule. ip-permission.prefix-list-id - The ID of a prefix list from which a security group rule allows inbound access. ip-permission.protocol - The IP protocol for an inbound security group rule (tcp | udp | icmp, a protocol number, or -1 for all protocols). ip-permission.to-port - For an inbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code. ip-permission.user-id - The ID of an Amazon Web Services account that has been referenced in an inbound security group rule. owner-id - The Amazon Web Services account ID of the owner of the security group. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC specified when the security group was created.</td>
</tr>
<tr id="parameter-FromPort">
    <td><CopyableCode code="FromPort" /></td>
    <td><code>integer</code></td>
    <td>If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP, this is the ICMP type or -1 (all ICMP types).</td>
</tr>
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>&#91;Default VPC&#93; The name of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.</td>
</tr>
<tr id="parameter-IpPermissions">
    <td><CopyableCode code="IpPermissions" /></td>
    <td><code>array</code></td>
    <td>The sets of IP permissions. You can't specify a source security group and a CIDR IP address range in the same set of permissions.</td>
</tr>
<tr id="parameter-IpProtocol">
    <td><CopyableCode code="IpProtocol" /></td>
    <td><code>string</code></td>
    <td>The IP protocol name (tcp, udp, icmp) or number (see Protocol Numbers). Use -1 to specify all.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. This value can be between 5 and 1000. If this parameter is not specified, then all items are returned. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-SecurityGroupRuleId">
    <td><CopyableCode code="SecurityGroupRuleId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security group rules.</td>
</tr>
<tr id="parameter-SourceSecurityGroupName">
    <td><CopyableCode code="SourceSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>&#91;Default VPC&#93; The name of the source security group. You can't specify this parameter in combination with the following parameters: the CIDR IP address range, the start of the port range, the IP protocol, and the end of the port range. The source security group must be in the same VPC. To revoke a specific rule for an IP protocol and port range, use a set of IP permissions instead.</td>
</tr>
<tr id="parameter-SourceSecurityGroupOwnerId">
    <td><CopyableCode code="SourceSecurityGroupOwnerId" /></td>
    <td><code>string</code></td>
    <td>Not supported.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags applied to the security group rule.</td>
</tr>
<tr id="parameter-ToPort">
    <td><CopyableCode code="ToPort" /></td>
    <td><code>integer</code></td>
    <td>If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP, this is the ICMP code or -1 (all ICMP codes).</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC. Required for a nondefault VPC.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_security_groups"
    values={[
        { label: 'describe_security_groups', value: 'describe_security_groups' }
    ]}
>
<TabItem value="describe_security_groups">

Describes the specified security groups or all of your security groups.

```sql
SELECT
description,
group_id,
group_name,
ip_permissions,
ip_permissions_egress,
owner_id,
security_group_arn,
tags,
vpc_id
FROM aws.ec2.security_groups
WHERE region = '{{ region }}' -- required
AND GroupId = '{{ GroupId }}'
AND GroupName = '{{ GroupName }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_group"
    values={[
        { label: 'create_security_group', value: 'create_security_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_group">

Creates a security group. A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. For more information, see Amazon EC2 security groups in the Amazon EC2 User Guide and Security groups for your VPC in the Amazon VPC User Guide. When you create a security group, you specify a friendly name of your choice. You can't have two security groups for the same VPC with the same name. You have a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other. You can add or remove rules from your security groups using AuthorizeSecurityGroupIngress, AuthorizeSecurityGroupEgress, RevokeSecurityGroupIngress, and RevokeSecurityGroupEgress. For more information about VPC security group limits, see Amazon VPC Limits.

```sql
INSERT INTO aws.ec2.security_groups (
GroupDescription,
GroupName,
region,
VpcId,
TagSpecification,
DryRun
)
SELECT 
'{{ GroupDescription }}',
'{{ GroupName }}',
'{{ region }}',
'{{ VpcId }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
group_id,
security_group_arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_groups
  props:
    - name: GroupDescription
      value: "{{ GroupDescription }}"
      description: Required parameter for the security_groups resource.
    - name: GroupName
      value: "{{ GroupName }}"
      description: Required parameter for the security_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_groups resource.
    - name: VpcId
      value: "{{ VpcId }}"
      description: The ID of the VPC. Required for a nondefault VPC.
      description: The ID of the VPC. Required for a nondefault VPC.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the security group.
      description: The tags to assign to the security group.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_security_group_egress"
    values={[
        { label: 'authorize_security_group_egress', value: 'authorize_security_group_egress' },
        { label: 'authorize_security_group_ingress', value: 'authorize_security_group_ingress' }
    ]}
>
<TabItem value="authorize_security_group_egress">

Adds the specified outbound (egress) rules to a security group. An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 address ranges, the IP address ranges specified by a prefix list, or the instances that are associated with a source security group. For more information, see Security group rules. You must specify exactly one of the following destinations: an IPv4 or IPv6 address range, a prefix list, or a security group. You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP type and code. Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur. For examples of rules that you can add to security groups for specific access scenarios, see Security group rules for different use cases in the Amazon EC2 User Guide. For information about security group quotas, see Amazon VPC quotas in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.security_groups
SET 
-- No updatable properties
WHERE 
GroupId = '{{ GroupId }}' --required
AND region = '{{ region }}' --required
AND TagSpecification = '{{ TagSpecification}}'
AND DryRun = {{ DryRun}}
AND SourceSecurityGroupName = '{{ SourceSecurityGroupName}}'
AND SourceSecurityGroupOwnerId = '{{ SourceSecurityGroupOwnerId}}'
AND IpProtocol = '{{ IpProtocol}}'
AND FromPort = '{{ FromPort}}'
AND ToPort = '{{ ToPort}}'
AND CidrIp = '{{ CidrIp}}'
AND IpPermissions = '{{ IpPermissions}}'
RETURNING
return,
security_group_rules;
```
</TabItem>
<TabItem value="authorize_security_group_ingress">

Adds the specified inbound (ingress) rules to a security group. An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 address range, the IP address ranges that are specified by a prefix list, or the instances that are associated with a destination security group. For more information, see Security group rules. You must specify exactly one of the following sources: an IPv4 or IPv6 address range, a prefix list, or a security group. You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code. Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur. For examples of rules that you can add to security groups for specific access scenarios, see Security group rules for different use cases in the Amazon EC2 User Guide. For more information about security group quotas, see Amazon VPC quotas in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.security_groups
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND CidrIp = '{{ CidrIp}}'
AND FromPort = '{{ FromPort}}'
AND GroupId = '{{ GroupId}}'
AND GroupName = '{{ GroupName}}'
AND IpPermissions = '{{ IpPermissions}}'
AND IpProtocol = '{{ IpProtocol}}'
AND SourceSecurityGroupName = '{{ SourceSecurityGroupName}}'
AND SourceSecurityGroupOwnerId = '{{ SourceSecurityGroupOwnerId}}'
AND ToPort = '{{ ToPort}}'
AND TagSpecification = '{{ TagSpecification}}'
AND DryRun = {{ DryRun}}
RETURNING
return,
security_group_rules;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_group"
    values={[
        { label: 'delete_security_group', value: 'delete_security_group' }
    ]}
>
<TabItem value="delete_security_group">

Deletes a security group. If you attempt to delete a security group that is associated with an instance or network interface, is referenced by another security group in the same VPC, or has a VPC association, the operation fails with DependencyViolation.

```sql
DELETE FROM aws.ec2.security_groups
WHERE region = '{{ region }}' --required
AND GroupId = '{{ GroupId }}'
AND GroupName = '{{ GroupName }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_security_group_egress"
    values={[
        { label: 'revoke_security_group_egress', value: 'revoke_security_group_egress' },
        { label: 'revoke_security_group_ingress', value: 'revoke_security_group_ingress' }
    ]}
>
<TabItem value="revoke_security_group_egress">

Removes the specified outbound (egress) rules from the specified security group. You can specify rules using either rule IDs or security group rule properties. If you use rule properties, the values that you specify (for example, ports) must match the existing rule's values exactly. Each rule has a protocol, from and to ports, and destination (CIDR range, security group, or prefix list). For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not need to specify the description to revoke the rule. For a default VPC, if the values you specify do not match the existing rule's values, no error is returned, and the output describes the security group rules that were not revoked. Amazon Web Services recommends that you describe the security group to verify that the rules were removed. Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.

```sql
EXEC aws.ec2.security_groups.revoke_security_group_egress 
@GroupId='{{ GroupId }}' --required, 
@region='{{ region }}' --required, 
@SecurityGroupRuleId='{{ SecurityGroupRuleId }}', 
@DryRun={{ DryRun }}, 
@SourceSecurityGroupName='{{ SourceSecurityGroupName }}', 
@SourceSecurityGroupOwnerId='{{ SourceSecurityGroupOwnerId }}', 
@IpProtocol='{{ IpProtocol }}', 
@FromPort='{{ FromPort }}', 
@ToPort='{{ ToPort }}', 
@CidrIp='{{ CidrIp }}', 
@IpPermissions='{{ IpPermissions }}'
;
```
</TabItem>
<TabItem value="revoke_security_group_ingress">

Removes the specified inbound (ingress) rules from a security group. You can specify rules using either rule IDs or security group rule properties. If you use rule properties, the values that you specify (for example, ports) must match the existing rule's values exactly. Each rule has a protocol, from and to ports, and source (CIDR range, security group, or prefix list). For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not need to specify the description to revoke the rule. For a default VPC, if the values you specify do not match the existing rule's values, no error is returned, and the output describes the security group rules that were not revoked. For a non-default VPC, if the values you specify do not match the existing rule's values, an InvalidPermission.NotFound client error is returned, and no rules are revoked. Amazon Web Services recommends that you describe the security group to verify that the rules were removed. Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.

```sql
EXEC aws.ec2.security_groups.revoke_security_group_ingress 
@region='{{ region }}' --required, 
@CidrIp='{{ CidrIp }}', 
@FromPort='{{ FromPort }}', 
@GroupId='{{ GroupId }}', 
@GroupName='{{ GroupName }}', 
@IpPermissions='{{ IpPermissions }}', 
@IpProtocol='{{ IpProtocol }}', 
@SourceSecurityGroupName='{{ SourceSecurityGroupName }}', 
@SourceSecurityGroupOwnerId='{{ SourceSecurityGroupOwnerId }}', 
@ToPort='{{ ToPort }}', 
@SecurityGroupRuleId='{{ SecurityGroupRuleId }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
