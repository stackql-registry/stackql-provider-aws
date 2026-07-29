--- 
title: preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - preferences
  - cost_optimization_hub
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

Creates, updates, deletes, gets or lists a <code>preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cost_optimization_hub.preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_preferences"
    values={[
        { label: 'get_preferences', value: 'get_preferences' }
    ]}
>
<TabItem value="get_preferences">

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
    <td><CopyableCode code="member_account_discount_visibility" /></td>
    <td><code>string</code></td>
    <td>Retrieves the status of the "member account discount visibility" preference. (All, None)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_commitment" /></td>
    <td><code>object</code></td>
    <td>Retrieves the current preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.</td>
</tr>
<tr>
    <td><CopyableCode code="savings_estimation_mode" /></td>
    <td><code>string</code></td>
    <td>Retrieves the status of the "savings estimation mode" preference. (BeforeDiscounts, AfterDiscounts)</td>
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
    <td><a href="#get_preferences"><CopyableCode code="get_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented—estimated savings after discounts or estimated savings before discounts, for example.</td>
</tr>
<tr>
    <td><a href="#update_preferences"><CopyableCode code="update_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented.</td>
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
    defaultValue="get_preferences"
    values={[
        { label: 'get_preferences', value: 'get_preferences' }
    ]}
>
<TabItem value="get_preferences">

Returns a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented—estimated savings after discounts or estimated savings before discounts, for example.

```sql
SELECT
member_account_discount_visibility,
preferred_commitment,
savings_estimation_mode
FROM aws.cost_optimization_hub.preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_preferences"
    values={[
        { label: 'update_preferences', value: 'update_preferences' }
    ]}
>
<TabItem value="update_preferences">

Updates a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented.

```sql
UPDATE aws.cost_optimization_hub.preferences
SET 
savingsEstimationMode = '{{ savingsEstimationMode }}',
memberAccountDiscountVisibility = '{{ memberAccountDiscountVisibility }}',
preferredCommitment = '{{ preferredCommitment }}'
WHERE 
region = '{{ region }}' --required
RETURNING
member_account_discount_visibility,
preferred_commitment,
savings_estimation_mode;
```
</TabItem>
</Tabs>
