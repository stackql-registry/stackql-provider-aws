--- 
title: notifications_for_budgets
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications_for_budgets
  - budgets
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

Creates, updates, deletes, gets or lists a <code>notifications_for_budgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications_for_budgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.budgets.notifications_for_budgets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notifications_for_budget"
    values={[
        { label: 'describe_notifications_for_budget', value: 'describe_notifications_for_budget' }
    ]}
>
<TabItem value="describe_notifications_for_budget">

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
    <td><CopyableCode code="ComparisonOperator" /></td>
    <td><code>string</code></td>
    <td>The comparison that's used for this notification. (GREATER_THAN, LESS_THAN, EQUAL_TO)</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationState" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this notification is in alarm. If a budget notification is in the ALARM state, you passed the set threshold for the budget. (OK, ALARM)</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the notification is for how much you have spent (ACTUAL) or for how much that you're forecasted to spend (FORECASTED). (ACTUAL, FORECASTED)</td>
</tr>
<tr>
    <td><CopyableCode code="Threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The threshold that's associated with a notification. Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.</td>
</tr>
<tr>
    <td><CopyableCode code="ThresholdType" /></td>
    <td><code>string</code></td>
    <td>The type of threshold for a notification. For ABSOLUTE_VALUE thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over your total cost threshold. For PERCENTAGE thresholds, Amazon Web Services notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a PERCENTAGE threshold of 80%, Amazon Web Services notifies you when you go over 160 dollars. (PERCENTAGE, ABSOLUTE_VALUE)</td>
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
    <td><a href="#describe_notifications_for_budget"><CopyableCode code="describe_notifications_for_budget" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the notifications that are associated with a budget.</td>
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
    defaultValue="describe_notifications_for_budget"
    values={[
        { label: 'describe_notifications_for_budget', value: 'describe_notifications_for_budget' }
    ]}
>
<TabItem value="describe_notifications_for_budget">

Lists the notifications that are associated with a budget.

```sql
SELECT
ComparisonOperator,
NotificationState,
NotificationType,
Threshold,
ThresholdType
FROM aws.budgets.notifications_for_budgets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
