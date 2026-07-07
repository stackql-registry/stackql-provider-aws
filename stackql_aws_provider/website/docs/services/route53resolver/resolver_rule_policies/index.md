--- 
title: resolver_rule_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_rule_policies
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

Creates, updates, deletes, gets or lists a <code>resolver_rule_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_rule_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_rule_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_rule_policy"
    values={[
        { label: 'get_resolver_rule_policy', value: 'get_resolver_rule_policy' }
    ]}
>
<TabItem value="get_resolver_rule_policy">

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
    <td><CopyableCode code="ResolverRulePolicy" /></td>
    <td><code>string</code></td>
    <td>The Resolver rule policy for the rule that you specified in a GetResolverRulePolicy request.</td>
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
    <td><a href="#get_resolver_rule_policy"><CopyableCode code="get_resolver_rule_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use.</td>
</tr>
<tr>
    <td><a href="#put_resolver_rule_policy"><CopyableCode code="put_resolver_rule_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-ResolverRulePolicy"><code>ResolverRulePolicy</code></a></td>
    <td></td>
    <td>Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.</td>
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
    defaultValue="get_resolver_rule_policy"
    values={[
        { label: 'get_resolver_rule_policy', value: 'get_resolver_rule_policy' }
    ]}
>
<TabItem value="get_resolver_rule_policy">

Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use.

```sql
SELECT
ResolverRulePolicy
FROM aws.route53resolver.resolver_rule_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resolver_rule_policy"
    values={[
        { label: 'put_resolver_rule_policy', value: 'put_resolver_rule_policy' }
    ]}
>
<TabItem value="put_resolver_rule_policy">

Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.

```sql
REPLACE aws.route53resolver.resolver_rule_policies
SET 
Arn = '{{ Arn }}',
ResolverRulePolicy = '{{ ResolverRulePolicy }}'
WHERE 
region = '{{ region }}' --required
AND Arn = '{{ Arn }}' --required
AND ResolverRulePolicy = '{{ ResolverRulePolicy }}' --required
RETURNING
ReturnValue;
```
</TabItem>
</Tabs>
