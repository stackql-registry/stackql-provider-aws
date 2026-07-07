--- 
title: pricing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_rules
  - billingconductor
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

Creates, updates, deletes, gets or lists a <code>pricing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pricing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.pricing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pricing_rules"
    values={[
        { label: 'list_pricing_rules', value: 'list_pricing_rules' }
    ]}
>
<TabItem value="list_pricing_rules">

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
    <td>The Amazon Resource Name (ARN) used to uniquely identify a pricing rule. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:pricingrule/)?&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedPricingPlanCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The pricing plans count that this pricing rule is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="BillingEntity" /></td>
    <td><code>string</code></td>
    <td>The seller of services provided by Amazon Web Services, their affiliates, or third-party providers selling services via Amazon Web Services Marketplace. (pattern: &lt;code&gt;&#91;a-zA-Z0-9() &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time when the pricing rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The pricing rule description.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The most recent time when the pricing rule was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifierPercentage" /></td>
    <td><code>number (double)</code></td>
    <td>A percentage modifier applied on the public pricing rates.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of a pricing rule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Operation" /></td>
    <td><code>string</code></td>
    <td>Operation is the specific Amazon Web Services action covered by this line item. This describes the specific usage of the line item. If the Scope attribute is set to SKU, this attribute indicates which operation the PricingRule is modifying. For example, a value of RunInstances:0202 indicates the operation of running an Amazon EC2 instance. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Scope" /></td>
    <td><code>string</code></td>
    <td>The scope of pricing rule that indicates if it is globally applicable, or if it is service-specific. (GLOBAL, SERVICE, BILLING_ENTITY, SKU)</td>
</tr>
<tr>
    <td><CopyableCode code="Service" /></td>
    <td><code>string</code></td>
    <td>If the Scope attribute is SERVICE, this attribute indicates which service the PricingRule is applicable for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tiering" /></td>
    <td><code>object</code></td>
    <td>The set of tiering configurations for the pricing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of pricing rule. (MARKUP, DISCOUNT, TIERING)</td>
</tr>
<tr>
    <td><CopyableCode code="UsageType" /></td>
    <td><code>string</code></td>
    <td>Usage type is the unit that each service uses to measure the usage of a specific type of resource. If the Scope attribute is set to SKU, this attribute indicates which usage type the PricingRule is modifying. For example, USW2-BoxUsage:m2.2xlarge describes an M2 High Memory Double Extra Large instance in the US West (Oregon) Region. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#list_pricing_rules"><CopyableCode code="list_pricing_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.</td>
</tr>
<tr>
    <td><a href="#create_pricing_rule"><CopyableCode code="create_pricing_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.</td>
</tr>
<tr>
    <td><a href="#associate_pricing_rules"><CopyableCode code="associate_pricing_rules" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PricingRuleArns"><code>PricingRuleArns</code></a></td>
    <td></td>
    <td>Connects an array of PricingRuleArns to a defined PricingPlan. The maximum number PricingRuleArn that can be associated in one call is 30.</td>
</tr>
<tr>
    <td><a href="#update_pricing_rule"><CopyableCode code="update_pricing_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing pricing rule.</td>
</tr>
<tr>
    <td><a href="#delete_pricing_rule"><CopyableCode code="delete_pricing_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#disassociate_pricing_rules"><CopyableCode code="disassociate_pricing_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PricingRuleArns"><code>PricingRuleArns</code></a></td>
    <td></td>
    <td>Disassociates a list of pricing rules from a pricing plan.</td>
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
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_pricing_rules"
    values={[
        { label: 'list_pricing_rules', value: 'list_pricing_rules' }
    ]}
>
<TabItem value="list_pricing_rules">

Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.

```sql
SELECT
Arn,
AssociatedPricingPlanCount,
BillingEntity,
CreationTime,
Description,
LastModifiedTime,
ModifierPercentage,
Name,
Operation,
Scope,
Service,
Tiering,
Type,
UsageType
FROM aws.billingconductor.pricing_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pricing_rule"
    values={[
        { label: 'create_pricing_rule', value: 'create_pricing_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pricing_rule">

Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.

```sql
INSERT INTO aws.billingconductor.pricing_rules (
Name,
Description,
Scope,
Type,
ModifierPercentage,
Service,
Tags,
BillingEntity,
Tiering,
UsageType,
Operation,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Scope }}',
'{{ Type }}',
{{ ModifierPercentage }},
'{{ Service }}',
'{{ Tags }}',
'{{ BillingEntity }}',
'{{ Tiering }}',
'{{ UsageType }}',
'{{ Operation }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pricing_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pricing_rules resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Scope
      value: "{{ Scope }}"
      valid_values: ['GLOBAL', 'SERVICE', 'BILLING_ENTITY', 'SKU']
    - name: Type
      value: "{{ Type }}"
      valid_values: ['MARKUP', 'DISCOUNT', 'TIERING']
    - name: ModifierPercentage
      value: {{ ModifierPercentage }}
    - name: Service
      value: "{{ Service }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: BillingEntity
      value: "{{ BillingEntity }}"
    - name: Tiering
      description: |
        The set of tiering configurations for the pricing rule.
      value:
        FreeTier:
          Activated: {{ Activated }}
    - name: UsageType
      value: "{{ UsageType }}"
    - name: Operation
      value: "{{ Operation }}"
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_pricing_rules"
    values={[
        { label: 'associate_pricing_rules', value: 'associate_pricing_rules' },
        { label: 'update_pricing_rule', value: 'update_pricing_rule' }
    ]}
>
<TabItem value="associate_pricing_rules">

Connects an array of PricingRuleArns to a defined PricingPlan. The maximum number PricingRuleArn that can be associated in one call is 30.

```sql
UPDATE aws.billingconductor.pricing_rules
SET 
Arn = '{{ Arn }}',
PricingRuleArns = '{{ PricingRuleArns }}'
WHERE 
region = '{{ region }}' --required
AND PricingRuleArns = '{{ PricingRuleArns }}' --required
RETURNING
Arn;
```
</TabItem>
<TabItem value="update_pricing_rule">

Updates an existing pricing rule.

```sql
UPDATE aws.billingconductor.pricing_rules
SET 
Arn = '{{ Arn }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Type = '{{ Type }}',
ModifierPercentage = {{ ModifierPercentage }},
Tiering = '{{ Tiering }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Arn,
AssociatedPricingPlanCount,
BillingEntity,
Description,
LastModifiedTime,
ModifierPercentage,
Name,
Operation,
Scope,
Service,
Tiering,
Type,
UsageType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pricing_rule"
    values={[
        { label: 'delete_pricing_rule', value: 'delete_pricing_rule' }
    ]}
>
<TabItem value="delete_pricing_rule">

Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN).

```sql
DELETE FROM aws.billingconductor.pricing_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_pricing_rules"
    values={[
        { label: 'disassociate_pricing_rules', value: 'disassociate_pricing_rules' }
    ]}
>
<TabItem value="disassociate_pricing_rules">

Disassociates a list of pricing rules from a pricing plan.

```sql
EXEC aws.billingconductor.pricing_rules.disassociate_pricing_rules 
@region='{{ region }}' --required 
@@json=
'{
"Arn": "{{ Arn }}", 
"PricingRuleArns": "{{ PricingRuleArns }}"
}'
;
```
</TabItem>
</Tabs>
