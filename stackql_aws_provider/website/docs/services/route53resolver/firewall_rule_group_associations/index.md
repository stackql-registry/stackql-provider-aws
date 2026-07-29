--- 
title: firewall_rule_group_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rule_group_associations
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

Creates, updates, deletes, gets or lists a <code>firewall_rule_group_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rule_group_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_rule_group_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_firewall_rule_group_association"
    values={[
        { label: 'get_firewall_rule_group_association', value: 'get_firewall_rule_group_association' },
        { label: 'list_firewall_rule_group_associations', value: 'list_firewall_rule_group_associations' }
    ]}
>
<TabItem value="get_firewall_rule_group_association">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall rule group association.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_rule_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the firewall rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the association.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_owner_name" /></td>
    <td><code>string</code></td>
    <td>The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="mutation_protection" /></td>
    <td><code>string</code></td>
    <td>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the association. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting from rule group with the lowest numeric priority setting.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association. (COMPLETE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the response, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the VPC that is associated with the rule group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_firewall_rule_group_associations">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall rule group association.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_rule_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the firewall rule group.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the association.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_owner_name" /></td>
    <td><code>string</code></td>
    <td>The owner of the association, used only for associations that are not managed by you. If you use Firewall Manager to manage your DNS Firewalls, then this reports Firewall Manager as the managed owner.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="mutation_protection" /></td>
    <td><code>string</code></td>
    <td>If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the association. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC. DNS Firewall filters VPC traffic starting from rule group with the lowest numeric priority setting.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association. (COMPLETE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the response, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the VPC that is associated with the rule group.</td>
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
    <td><a href="#get_firewall_rule_group_association"><CopyableCode code="get_firewall_rule_group_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</td>
</tr>
<tr>
    <td><a href="#list_firewall_rule_group_associations"><CopyableCode code="list_firewall_rule_group_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. A single call might return only a partial list of the associations. For information, see MaxResults.</td>
</tr>
<tr>
    <td><a href="#update_firewall_rule_group_association"><CopyableCode code="update_firewall_rule_group_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallRuleGroupAssociationId"><code>FirewallRuleGroupAssociationId</code></a></td>
    <td></td>
    <td>Changes the association of a FirewallRuleGroup with a VPC. The association enables DNS filtering for the VPC.</td>
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
    defaultValue="get_firewall_rule_group_association"
    values={[
        { label: 'get_firewall_rule_group_association', value: 'get_firewall_rule_group_association' },
        { label: 'list_firewall_rule_group_associations', value: 'list_firewall_rule_group_associations' }
    ]}
>
<TabItem value="get_firewall_rule_group_association">

Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.

```sql
SELECT
arn,
creation_time,
creator_request_id,
firewall_rule_group_id,
id,
managed_owner_name,
modification_time,
mutation_protection,
name,
priority,
status,
status_message,
vpc_id
FROM aws.route53resolver.firewall_rule_group_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_firewall_rule_group_associations">

Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. A single call might return only a partial list of the associations. For information, see MaxResults.

```sql
SELECT
arn,
creation_time,
creator_request_id,
firewall_rule_group_id,
id,
managed_owner_name,
modification_time,
mutation_protection,
name,
priority,
status,
status_message,
vpc_id
FROM aws.route53resolver.firewall_rule_group_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_rule_group_association"
    values={[
        { label: 'update_firewall_rule_group_association', value: 'update_firewall_rule_group_association' }
    ]}
>
<TabItem value="update_firewall_rule_group_association">

Changes the association of a FirewallRuleGroup with a VPC. The association enables DNS filtering for the VPC.

```sql
UPDATE aws.route53resolver.firewall_rule_group_associations
SET 
FirewallRuleGroupAssociationId = '{{ FirewallRuleGroupAssociationId }}',
Priority = {{ Priority }},
MutationProtection = '{{ MutationProtection }}',
Name = '{{ Name }}'
WHERE 
region = '{{ region }}' --required
AND FirewallRuleGroupAssociationId = '{{ FirewallRuleGroupAssociationId }}' --required
RETURNING
firewall_rule_group_association;
```
</TabItem>
</Tabs>
