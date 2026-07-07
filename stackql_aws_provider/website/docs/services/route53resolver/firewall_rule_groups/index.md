--- 
title: firewall_rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_groups
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>firewall_rule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_rule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_firewall_rule_group"
    values={[
        { label: 'get_firewall_rule_group', value: 'get_firewall_rule_group' },
        { label: 'list_firewall_rule_groups', value: 'list_firewall_rule_groups' }
    ]}
>
<TabItem value="get_firewall_rule_group">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule group. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleCount" /></td>
    <td><code>integer</code></td>
    <td>The number of rules in the rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="ShareStatus" /></td>
    <td><code>string</code></td>
    <td>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM). (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain list. (COMPLETE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the rule group, if available.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_firewall_rule_groups">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule group. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you.</td>
</tr>
<tr>
    <td><CopyableCode code="ShareStatus" /></td>
    <td><code>string</code></td>
    <td>Whether the rule group is shared with other Amazon Web Services accounts, or was shared with the current account by another Amazon Web Services account. Sharing is configured through Resource Access Manager (RAM). (NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME)</td>
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
    <td><a href="#get_firewall_rule_group"><CopyableCode code="get_firewall_rule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified firewall rule group.</td>
</tr>
<tr>
    <td><a href="#list_firewall_rule_groups"><CopyableCode code="list_firewall_rule_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the minimal high-level information for the rule groups that you have defined. A single call might return only a partial list of the rule groups. For information, see MaxResults.</td>
</tr>
<tr>
    <td><a href="#create_firewall_rule_group"><CopyableCode code="create_firewall_rule_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a></td>
    <td></td>
    <td>Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling CreateFirewallRule.</td>
</tr>
<tr>
    <td><a href="#associate_firewall_rule_group"><CopyableCode code="associate_firewall_rule_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a>, <a href="#parameter-FirewallRuleGroupId"><code>FirewallRuleGroupId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-Priority"><code>Priority</code></a></td>
    <td></td>
    <td>Associates a FirewallRuleGroup with a VPC, to provide DNS filtering for the VPC.</td>
</tr>
<tr>
    <td><a href="#disassociate_firewall_rule_group"><CopyableCode code="disassociate_firewall_rule_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallRuleGroupAssociationId"><code>FirewallRuleGroupAssociationId</code></a></td>
    <td></td>
    <td>Disassociates a FirewallRuleGroup from a VPC, to remove DNS filtering from the VPC.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_rule_group"><CopyableCode code="delete_firewall_rule_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified firewall rule group.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_firewall_rule_group"
    values={[
        { label: 'get_firewall_rule_group', value: 'get_firewall_rule_group' },
        { label: 'list_firewall_rule_groups', value: 'list_firewall_rule_groups' }
    ]}
>
<TabItem value="get_firewall_rule_group">

Retrieves the specified firewall rule group.

```sql
SELECT
Arn,
CreationTime,
CreatorRequestId,
Id,
ModificationTime,
Name,
OwnerId,
RuleCount,
ShareStatus,
Status,
StatusMessage
FROM aws.route53resolver.firewall_rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_firewall_rule_groups">

Retrieves the minimal high-level information for the rule groups that you have defined. A single call might return only a partial list of the rule groups. For information, see MaxResults.

```sql
SELECT
Arn,
CreatorRequestId,
Id,
Name,
OwnerId,
ShareStatus
FROM aws.route53resolver.firewall_rule_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall_rule_group"
    values={[
        { label: 'create_firewall_rule_group', value: 'create_firewall_rule_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall_rule_group">

Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling CreateFirewallRule.

```sql
INSERT INTO aws.route53resolver.firewall_rule_groups (
CreatorRequestId,
Name,
Tags,
region
)
SELECT 
'{{ CreatorRequestId }}' /* required */,
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
FirewallRuleGroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_rule_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewall_rule_groups resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name that lets you identify the rule group, to manage and use it.
    - name: Tags
      description: |
        A list of the tag keys and values that you want to associate with the rule group.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_firewall_rule_group"
    values={[
        { label: 'associate_firewall_rule_group', value: 'associate_firewall_rule_group' },
        { label: 'disassociate_firewall_rule_group', value: 'disassociate_firewall_rule_group' }
    ]}
>
<TabItem value="associate_firewall_rule_group">

Associates a FirewallRuleGroup with a VPC, to provide DNS filtering for the VPC.

```sql
UPDATE aws.route53resolver.firewall_rule_groups
SET 
CreatorRequestId = '{{ CreatorRequestId }}',
FirewallRuleGroupId = '{{ FirewallRuleGroupId }}',
VpcId = '{{ VpcId }}',
Priority = {{ Priority }},
Name = '{{ Name }}',
MutationProtection = '{{ MutationProtection }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND CreatorRequestId = '{{ CreatorRequestId }}' --required
AND FirewallRuleGroupId = '{{ FirewallRuleGroupId }}' --required
AND VpcId = '{{ VpcId }}' --required
AND Priority = '{{ Priority }}' --required
RETURNING
FirewallRuleGroupAssociation;
```
</TabItem>
<TabItem value="disassociate_firewall_rule_group">

Disassociates a FirewallRuleGroup from a VPC, to remove DNS filtering from the VPC.

```sql
UPDATE aws.route53resolver.firewall_rule_groups
SET 
FirewallRuleGroupAssociationId = '{{ FirewallRuleGroupAssociationId }}'
WHERE 
region = '{{ region }}' --required
AND FirewallRuleGroupAssociationId = '{{ FirewallRuleGroupAssociationId }}' --required
RETURNING
FirewallRuleGroupAssociation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall_rule_group"
    values={[
        { label: 'delete_firewall_rule_group', value: 'delete_firewall_rule_group' }
    ]}
>
<TabItem value="delete_firewall_rule_group">

Deletes the specified firewall rule group.

```sql
DELETE FROM aws.route53resolver.firewall_rule_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
