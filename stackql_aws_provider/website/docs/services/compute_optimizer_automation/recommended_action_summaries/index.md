--- 
title: recommended_action_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - recommended_action_summaries
  - compute_optimizer_automation
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

Creates, updates, deletes, gets or lists a <code>recommended_action_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommended_action_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.recommended_action_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommended_action_summaries"
    values={[
        { label: 'list_recommended_action_summaries', value: 'list_recommended_action_summaries' }
    ]}
>
<TabItem value="list_recommended_action_summaries">

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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The grouping key used to categorize the recommended actions in this summary.</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>object</code></td>
    <td>Aggregate totals for the recommended actions in this group, including count and estimated savings.</td>
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
    <td><a href="#list_recommended_action_summaries"><CopyableCode code="list_recommended_action_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a summary of recommended actions based on specified filters. Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using AssociateAccounts.</td>
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
    defaultValue="list_recommended_action_summaries"
    values={[
        { label: 'list_recommended_action_summaries', value: 'list_recommended_action_summaries' }
    ]}
>
<TabItem value="list_recommended_action_summaries">

Provides a summary of recommended actions based on specified filters. Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using AssociateAccounts.

```sql
SELECT
key,
total
FROM aws.compute_optimizer_automation.recommended_action_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
