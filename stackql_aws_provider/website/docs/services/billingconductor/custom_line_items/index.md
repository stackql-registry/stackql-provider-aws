--- 
title: custom_line_items
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_line_items
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

Creates, updates, deletes, gets or lists a <code>custom_line_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_line_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.custom_line_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_custom_line_items"
    values={[
        { label: 'list_custom_line_items', value: 'list_custom_line_items' }
    ]}
>
<TabItem value="list_custom_line_items">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account in which this custom line item will be applied to. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARNs) for custom line items. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:customlineitem/)?&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of resources that are associated to the custom line item.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:billinggroup/)?&#91;a-zA-Z0-9&#93;&#123;10,12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="charge_details" /></td>
    <td><code>object</code></td>
    <td>A representation of the charge details of a custom line item.</td>
</tr>
<tr>
    <td><CopyableCode code="computation_rule" /></td>
    <td><code>string</code></td>
    <td>The display settings of the custom line item (ITEMIZED, CONSOLIDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time created.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The custom line item's charge value currency. Only one of the valid values can be used. (USD, CNY)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom line item's description. This is shown on the Bills page in association with the charge value.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The most recent time when the custom line item was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom line item's name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="presentation_details" /></td>
    <td><code>object</code></td>
    <td>An object that defines how custom line item charges are presented in the bill, containing specifications for service presentation.</td>
</tr>
<tr>
    <td><CopyableCode code="product_code" /></td>
    <td><code>string</code></td>
    <td>The product code that's associated with the custom line item.</td>
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
    <td><a href="#list_custom_line_items"><CopyableCode code="list_custom_line_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.</td>
</tr>
<tr>
    <td><a href="#create_custom_line_item"><CopyableCode code="create_custom_line_item" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BillingGroupArn"><code>BillingGroupArn</code></a>, <a href="#parameter-ChargeDetails"><code>ChargeDetails</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.</td>
</tr>
<tr>
    <td><a href="#update_custom_line_item"><CopyableCode code="update_custom_line_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing custom line item in the current or previous billing period.</td>
</tr>
<tr>
    <td><a href="#delete_custom_line_item"><CopyableCode code="delete_custom_line_item" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the custom line item identified by the given ARN in the current, or previous billing period.</td>
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
    defaultValue="list_custom_line_items"
    values={[
        { label: 'list_custom_line_items', value: 'list_custom_line_items' }
    ]}
>
<TabItem value="list_custom_line_items">

A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.

```sql
SELECT
account_id,
arn,
association_size,
billing_group_arn,
charge_details,
computation_rule,
creation_time,
currency_code,
description,
last_modified_time,
name,
presentation_details,
product_code
FROM aws.billingconductor.custom_line_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_line_item"
    values={[
        { label: 'create_custom_line_item', value: 'create_custom_line_item' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_line_item">

Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.

```sql
INSERT INTO aws.billingconductor.custom_line_items (
Name,
Description,
BillingGroupArn,
BillingPeriodRange,
Tags,
ChargeDetails,
AccountId,
ComputationRule,
PresentationDetails,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ BillingGroupArn }}' /* required */,
'{{ BillingPeriodRange }}',
'{{ Tags }}',
'{{ ChargeDetails }}' /* required */,
'{{ AccountId }}',
'{{ ComputationRule }}',
'{{ PresentationDetails }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_line_items
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_line_items resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: BillingGroupArn
      value: "{{ BillingGroupArn }}"
    - name: BillingPeriodRange
      description: |
        The billing period range in which the custom line item request will be applied.
      value:
        InclusiveStartBillingPeriod: "{{ InclusiveStartBillingPeriod }}"
        ExclusiveEndBillingPeriod: "{{ ExclusiveEndBillingPeriod }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ChargeDetails
      description: |
        The charge details of a custom line item. It should contain only one of Flat or Percentage.
      value:
        Flat:
          ChargeValue: {{ ChargeValue }}
        Percentage:
          PercentageValue: {{ PercentageValue }}
          AssociatedValues:
            - "{{ AssociatedValues }}"
        Type: "{{ Type }}"
        LineItemFilters:
          - Attribute: "{{ Attribute }}"
            MatchOption: "{{ MatchOption }}"
            Values: "{{ Values }}"
            AttributeValues: "{{ AttributeValues }}"
    - name: AccountId
      value: "{{ AccountId }}"
    - name: ComputationRule
      value: "{{ ComputationRule }}"
      description: |
        The display settings of the custom line item
      valid_values: ['ITEMIZED', 'CONSOLIDATED']
    - name: PresentationDetails
      description: |
        An object that defines how custom line item charges are presented in the bill, containing specifications for service presentation.
      value:
        Service: "{{ Service }}"
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
      description: A unique, case-sensitive identifier that you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_line_item"
    values={[
        { label: 'update_custom_line_item', value: 'update_custom_line_item' }
    ]}
>
<TabItem value="update_custom_line_item">

Update an existing custom line item in the current or previous billing period.

```sql
UPDATE aws.billingconductor.custom_line_items
SET 
Arn = '{{ Arn }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
ChargeDetails = '{{ ChargeDetails }}',
BillingPeriodRange = '{{ BillingPeriodRange }}'
WHERE 
region = '{{ region }}' --required
RETURNING
arn,
association_size,
billing_group_arn,
charge_details,
description,
last_modified_time,
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_line_item"
    values={[
        { label: 'delete_custom_line_item', value: 'delete_custom_line_item' }
    ]}
>
<TabItem value="delete_custom_line_item">

Deletes the custom line item identified by the given ARN in the current, or previous billing period.

```sql
DELETE FROM aws.billingconductor.custom_line_items
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
