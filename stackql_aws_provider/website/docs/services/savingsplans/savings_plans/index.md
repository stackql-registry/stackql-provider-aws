--- 
title: savings_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plans
  - savingsplans
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

Creates, updates, deletes, gets or lists a <code>savings_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.savingsplans.savings_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_savings_plans"
    values={[
        { label: 'describe_savings_plans', value: 'describe_savings_plans' }
    ]}
>
<TabItem value="describe_savings_plans">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;A-Za-z0-9/=\+&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="savingsPlans" /></td>
    <td><code>array</code></td>
    <td>Information about the Savings Plans.</td>
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
    <td><a href="#describe_savings_plans"><CopyableCode code="describe_savings_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified Savings Plans.</td>
</tr>
<tr>
    <td><a href="#create_savings_plan"><CopyableCode code="create_savings_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-savingsPlanOfferingId"><code>savingsPlanOfferingId</code></a>, <a href="#parameter-commitment"><code>commitment</code></a></td>
    <td></td>
    <td>Creates a Savings Plan.</td>
</tr>
<tr>
    <td><a href="#delete_queued_savings_plan"><CopyableCode code="delete_queued_savings_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the queued purchase for the specified Savings Plan.</td>
</tr>
<tr>
    <td><a href="#return_savings_plan"><CopyableCode code="return_savings_plan" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-savingsPlanId"><code>savingsPlanId</code></a></td>
    <td></td>
    <td>Returns the specified Savings Plan.</td>
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
    defaultValue="describe_savings_plans"
    values={[
        { label: 'describe_savings_plans', value: 'describe_savings_plans' }
    ]}
>
<TabItem value="describe_savings_plans">

Describes the specified Savings Plans.

```sql
SELECT
nextToken,
savingsPlans
FROM aws.savingsplans.savings_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_savings_plan"
    values={[
        { label: 'create_savings_plan', value: 'create_savings_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_savings_plan">

Creates a Savings Plan.

```sql
INSERT INTO aws.savingsplans.savings_plans (
savingsPlanOfferingId,
commitment,
upfrontPaymentAmount,
purchaseTime,
clientToken,
tags,
region
)
SELECT 
'{{ savingsPlanOfferingId }}' /* required */,
'{{ commitment }}' /* required */,
'{{ upfrontPaymentAmount }}',
'{{ purchaseTime }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
savingsPlanId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: savings_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the savings_plans resource.
    - name: savingsPlanOfferingId
      value: "{{ savingsPlanOfferingId }}"
    - name: commitment
      value: "{{ commitment }}"
    - name: upfrontPaymentAmount
      value: "{{ upfrontPaymentAmount }}"
    - name: purchaseTime
      value: "{{ purchaseTime }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queued_savings_plan"
    values={[
        { label: 'delete_queued_savings_plan', value: 'delete_queued_savings_plan' }
    ]}
>
<TabItem value="delete_queued_savings_plan">

Deletes the queued purchase for the specified Savings Plan.

```sql
DELETE FROM aws.savingsplans.savings_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="return_savings_plan"
    values={[
        { label: 'return_savings_plan', value: 'return_savings_plan' }
    ]}
>
<TabItem value="return_savings_plan">

Returns the specified Savings Plan.

```sql
EXEC aws.savingsplans.savings_plans.return_savings_plan 
@region='{{ region }}' --required 
@@json=
'{
"savingsPlanId": "{{ savingsPlanId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
