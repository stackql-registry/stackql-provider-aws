--- 
title: recommended_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - recommended_actions
  - bcm_recommended_actions
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

Creates, updates, deletes, gets or lists a <code>recommended_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommended_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_recommended_actions.recommended_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommended_actions"
    values={[
        { label: 'list_recommended_actions', value: 'list_recommended_actions' }
    ]}
>
<TabItem value="list_recommended_actions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for the recommended action.</td>
</tr>
<tr>
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The account that the recommended action is for. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>object</code></td>
    <td>Context that applies to the recommended action.</td>
</tr>
<tr>
    <td><CopyableCode code="feature" /></td>
    <td><code>string</code></td>
    <td>The feature associated with the recommended action. (ACCOUNT, BUDGETS, COST_ANOMALY_DETECTION, COST_OPTIMIZATION_HUB, FREE_TIER, IAM, PAYMENTS, RESERVATIONS, SAVINGS_PLANS, TAX_SETTINGS)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTimeStamp" /></td>
    <td><code>string</code></td>
    <td>The time when the recommended action status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="nextSteps" /></td>
    <td><code>array</code></td>
    <td>The possible next steps to execute the recommended action.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity associated with the recommended action. (INFO, WARNING, CRITICAL)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of action you can take by adopting the recommended action. (ADD_ALTERNATE_BILLING_CONTACT, CREATE_ANOMALY_MONITOR, CREATE_BUDGET, ENABLE_COST_OPTIMIZATION_HUB, MIGRATE_TO_GRANULAR_PERMISSIONS, PAYMENTS_DUE, PAYMENTS_PAST_DUE, REVIEW_ANOMALIES, REVIEW_BUDGET_ALERTS, REVIEW_BUDGETS_EXCEEDED, REVIEW_EXPIRING_RI, REVIEW_EXPIRING_SP, REVIEW_FREETIER_USAGE_ALERTS, REVIEW_FREETIER_CREDITS_REMAINING, REVIEW_FREETIER_DAYS_REMAINING, REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS, UPDATE_EXPIRED_PAYMENT_METHOD, UPDATE_INVALID_PAYMENT_METHOD, UPDATE_TAX_EXEMPTION_CERTIFICATE, UPDATE_TAX_REGISTRATION_NUMBER)</td>
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
    <td><a href="#list_recommended_actions"><CopyableCode code="list_recommended_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of recommended actions that match the filter criteria.</td>
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
    defaultValue="list_recommended_actions"
    values={[
        { label: 'list_recommended_actions', value: 'list_recommended_actions' }
    ]}
>
<TabItem value="list_recommended_actions">

Returns a list of recommended actions that match the filter criteria.

```sql
SELECT
id,
accountId,
context,
feature,
lastUpdatedTimeStamp,
nextSteps,
severity,
type_
FROM aws.bcm_recommended_actions.recommended_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
