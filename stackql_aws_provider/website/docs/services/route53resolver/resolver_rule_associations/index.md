--- 
title: resolver_rule_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_rule_associations
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

Creates, updates, deletes, gets or lists a <code>resolver_rule_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_rule_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_rule_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_rule_association"
    values={[
        { label: 'get_resolver_rule_association', value: 'get_resolver_rule_association' },
        { label: 'list_resolver_rule_associations', value: 'list_resolver_rule_associations' }
    ]}
>
<TabItem value="get_resolver_rule_association">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an AssociateResolverRule request.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of an association between a Resolver rule and a VPC. The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResolverRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Resolver rule that you associated with the VPC that is specified by VPCId.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A code that specifies the current status of the association between a Resolver rule and a VPC. (CREATING, COMPLETE, DELETING, FAILED, OVERRIDDEN)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the status of the association between a Resolver rule and a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="VPCId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that you associated the Resolver rule with.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_rule_associations">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an AssociateResolverRule request.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of an association between a Resolver rule and a VPC. The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResolverRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Resolver rule that you associated with the VPC that is specified by VPCId.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A code that specifies the current status of the association between a Resolver rule and a VPC. (CREATING, COMPLETE, DELETING, FAILED, OVERRIDDEN)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the status of the association between a Resolver rule and a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="VPCId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that you associated the Resolver rule with.</td>
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
    <td><a href="#get_resolver_rule_association"><CopyableCode code="get_resolver_rule_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using AssociateResolverRule.</td>
</tr>
<tr>
    <td><a href="#list_resolver_rule_associations"><CopyableCode code="list_resolver_rule_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.</td>
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
    defaultValue="get_resolver_rule_association"
    values={[
        { label: 'get_resolver_rule_association', value: 'get_resolver_rule_association' },
        { label: 'list_resolver_rule_associations', value: 'list_resolver_rule_associations' }
    ]}
>
<TabItem value="get_resolver_rule_association">

Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using AssociateResolverRule.

```sql
SELECT
Id,
Name,
ResolverRuleId,
Status,
StatusMessage,
VPCId
FROM aws.route53resolver.resolver_rule_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_rule_associations">

Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.

```sql
SELECT
Id,
Name,
ResolverRuleId,
Status,
StatusMessage,
VPCId
FROM aws.route53resolver.resolver_rule_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
