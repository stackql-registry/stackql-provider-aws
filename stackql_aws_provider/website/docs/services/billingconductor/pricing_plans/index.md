--- 
title: pricing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - pricing_plans
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

Creates, updates, deletes, gets or lists a <code>pricing_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pricing_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.pricing_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pricing_plans"
    values={[
        { label: 'list_pricing_plans', value: 'list_pricing_plans' }
    ]}
>
<TabItem value="list_pricing_plans">

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
    <td>The pricing plan Amazon Resource Names (ARN). This can be used to uniquely identify a pricing plan. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::(aws|&#91;0-9&#93;&#123;12&#125;):pricingplan/)?(BasicPricingPlan|Passthrough|&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time when the pricing plan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The pricing plan description.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The most recent time when the pricing plan was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of a pricing plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The pricing rules count that's currently associated with this pricing plan list element.</td>
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
    <td><a href="#list_pricing_plans"><CopyableCode code="list_pricing_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used.</td>
</tr>
<tr>
    <td><a href="#create_pricing_plan"><CopyableCode code="create_pricing_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.</td>
</tr>
<tr>
    <td><a href="#update_pricing_plan"><CopyableCode code="update_pricing_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This updates an existing pricing plan.</td>
</tr>
<tr>
    <td><a href="#delete_pricing_plan"><CopyableCode code="delete_pricing_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.</td>
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
    defaultValue="list_pricing_plans"
    values={[
        { label: 'list_pricing_plans', value: 'list_pricing_plans' }
    ]}
>
<TabItem value="list_pricing_plans">

A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used.

```sql
SELECT
Arn,
CreationTime,
Description,
LastModifiedTime,
Name,
Size
FROM aws.billingconductor.pricing_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pricing_plan"
    values={[
        { label: 'create_pricing_plan', value: 'create_pricing_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pricing_plan">

Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.

```sql
INSERT INTO aws.billingconductor.pricing_plans (
Name,
Description,
PricingRuleArns,
Tags,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ PricingRuleArns }}',
'{{ Tags }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pricing_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pricing_plans resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: PricingRuleArns
      value:
        - "{{ PricingRuleArns }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pricing_plan"
    values={[
        { label: 'update_pricing_plan', value: 'update_pricing_plan' }
    ]}
>
<TabItem value="update_pricing_plan">

This updates an existing pricing plan.

```sql
UPDATE aws.billingconductor.pricing_plans
SET 
Arn = '{{ Arn }}',
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Arn,
Description,
LastModifiedTime,
Name,
Size;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pricing_plan"
    values={[
        { label: 'delete_pricing_plan', value: 'delete_pricing_plan' }
    ]}
>
<TabItem value="delete_pricing_plan">

Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.

```sql
DELETE FROM aws.billingconductor.pricing_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
