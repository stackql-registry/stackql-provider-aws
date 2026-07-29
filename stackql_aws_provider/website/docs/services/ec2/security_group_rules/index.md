--- 
title: security_group_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - security_group_rules
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

Creates, updates, deletes, gets or lists a <code>security_group_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_group_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.security_group_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_group_rules"
    values={[
        { label: 'describe_security_group_rules', value: 'describe_security_group_rules' }
    ]}
>
<TabItem value="describe_security_group_rules">

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
    <td><CopyableCode code="cidr_ipv_4" /></td>
    <td><code>string</code></td>
    <td>The IPv4 CIDR range.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_ipv_6" /></td>
    <td><code>string</code></td>
    <td>The IPv6 CIDR range.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The security group rule description.</td>
</tr>
<tr>
    <td><CopyableCode code="from_port" /></td>
    <td><code>integer</code></td>
    <td>If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_protocol" /></td>
    <td><code>string</code></td>
    <td>The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). Use -1 to specify all protocols.</td>
</tr>
<tr>
    <td><CopyableCode code="is_egress" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the security group rule is an outbound rule.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix_list_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="referenced_group_info" /></td>
    <td><code>string</code></td>
    <td>Describes the security group that is referenced in the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_rule_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the security group rule.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group rule.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags applied to the security group rule.</td>
</tr>
<tr>
    <td><CopyableCode code="to_port" /></td>
    <td><code>integer</code></td>
    <td>If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).</td>
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
    <td><a href="#describe_security_group_rules"><CopyableCode code="describe_security_group_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-SecurityGroupRuleId"><code>SecurityGroupRuleId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes one or more of your security group rules.</td>
</tr>
<tr>
    <td><a href="#modify_security_group_rules"><CopyableCode code="modify_security_group_rules" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-SecurityGroupRule"><code>SecurityGroupRule</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the rules of a security group.</td>
</tr>
<tr>
    <td><a href="#update_security_group_rule_descriptions_egress"><CopyableCode code="update_security_group_rule_descriptions_egress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-IpPermissions"><code>IpPermissions</code></a>, <a href="#parameter-SecurityGroupRuleDescription"><code>SecurityGroupRuleDescription</code></a></td>
    <td>Updates the description of an egress (outbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously. You can remove a description for a security group rule by omitting the description parameter in the request.</td>
</tr>
<tr>
    <td><a href="#update_security_group_rule_descriptions_ingress"><CopyableCode code="update_security_group_rule_descriptions_ingress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-IpPermissions"><code>IpPermissions</code></a>, <a href="#parameter-SecurityGroupRuleDescription"><code>SecurityGroupRuleDescription</code></a></td>
    <td>Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously. You can remove a description for a security group rule by omitting the description parameter in the request.</td>
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
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr id="parameter-SecurityGroupRule">
    <td><CopyableCode code="SecurityGroupRule" /></td>
    <td><code>array</code></td>
    <td>Information about the security group properties to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. group-id - The ID of the security group. security-group-rule-id - The ID of the security group rule. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>&#91;Default VPC&#93; The name of the security group. You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.</td>
</tr>
<tr id="parameter-IpPermissions">
    <td><CopyableCode code="IpPermissions" /></td>
    <td><code>array</code></td>
    <td>The IP permissions for the security group rule. You must specify either IP permissions or a description.</td>
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
<tr id="parameter-SecurityGroupRuleDescription">
    <td><CopyableCode code="SecurityGroupRuleDescription" /></td>
    <td><code>array</code></td>
    <td>The description for the ingress security group rules. You must specify either a description or IP permissions.</td>
</tr>
<tr id="parameter-SecurityGroupRuleId">
    <td><CopyableCode code="SecurityGroupRuleId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security group rules.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_security_group_rules"
    values={[
        { label: 'describe_security_group_rules', value: 'describe_security_group_rules' }
    ]}
>
<TabItem value="describe_security_group_rules">

Describes one or more of your security group rules.

```sql
SELECT
cidr_ipv_4,
cidr_ipv_6,
description,
from_port,
group_id,
group_owner_id,
ip_protocol,
is_egress,
prefix_list_id,
referenced_group_info,
security_group_rule_arn,
security_group_rule_id,
tags,
to_port
FROM aws.ec2.security_group_rules
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND SecurityGroupRuleId = '{{ SecurityGroupRuleId }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_security_group_rules"
    values={[
        { label: 'modify_security_group_rules', value: 'modify_security_group_rules' },
        { label: 'update_security_group_rule_descriptions_egress', value: 'update_security_group_rule_descriptions_egress' }
    ]}
>
<TabItem value="modify_security_group_rules">

Modifies the rules of a security group.

```sql
UPDATE aws.ec2.security_group_rules
SET 
-- No updatable properties
WHERE 
GroupId = '{{ GroupId }}' --required
AND SecurityGroupRule = '{{ SecurityGroupRule }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
return;
```
</TabItem>
<TabItem value="update_security_group_rule_descriptions_egress">

Updates the description of an egress (outbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously. You can remove a description for a security group rule by omitting the description parameter in the request.

```sql
UPDATE aws.ec2.security_group_rules
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND GroupId = '{{ GroupId}}'
AND GroupName = '{{ GroupName}}'
AND IpPermissions = '{{ IpPermissions}}'
AND SecurityGroupRuleDescription = '{{ SecurityGroupRuleDescription}}'
RETURNING
return;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_security_group_rule_descriptions_ingress"
    values={[
        { label: 'update_security_group_rule_descriptions_ingress', value: 'update_security_group_rule_descriptions_ingress' }
    ]}
>
<TabItem value="update_security_group_rule_descriptions_ingress">

Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously. You can remove a description for a security group rule by omitting the description parameter in the request.

```sql
EXEC aws.ec2.security_group_rules.update_security_group_rule_descriptions_ingress 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@GroupId='{{ GroupId }}', 
@GroupName='{{ GroupName }}', 
@IpPermissions='{{ IpPermissions }}', 
@SecurityGroupRuleDescription='{{ SecurityGroupRuleDescription }}'
;
```
</TabItem>
</Tabs>
