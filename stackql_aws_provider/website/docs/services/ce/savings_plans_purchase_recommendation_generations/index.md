--- 
title: savings_plans_purchase_recommendation_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plans_purchase_recommendation_generations
  - ce
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

Creates, updates, deletes, gets or lists a <code>savings_plans_purchase_recommendation_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plans_purchase_recommendation_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.savings_plans_purchase_recommendation_generations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_savings_plans_purchase_recommendation_generation"
    values={[
        { label: 'list_savings_plans_purchase_recommendation_generation', value: 'list_savings_plans_purchase_recommendation_generation' }
    ]}
>
<TabItem value="list_savings_plans_purchase_recommendation_generation">

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
    <td><CopyableCode code="EstimatedCompletionTime" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GenerationCompletionTime" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GenerationStartedTime" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GenerationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the recommendation generation succeeded, is processing, or failed. (SUCCEEDED, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="RecommendationId" /></td>
    <td><code>string</code></td>
    <td>Indicates the ID for this specific recommendation. (pattern: &lt;code&gt;^&#91;\S\s&#93;&#123;8&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_savings_plans_purchase_recommendation_generation"><CopyableCode code="list_savings_plans_purchase_recommendation_generation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of your historical recommendation generations within the past 30 days.</td>
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
    defaultValue="list_savings_plans_purchase_recommendation_generation"
    values={[
        { label: 'list_savings_plans_purchase_recommendation_generation', value: 'list_savings_plans_purchase_recommendation_generation' }
    ]}
>
<TabItem value="list_savings_plans_purchase_recommendation_generation">

Retrieves a list of your historical recommendation generations within the past 30 days.

```sql
SELECT
EstimatedCompletionTime,
GenerationCompletionTime,
GenerationStartedTime,
GenerationStatus,
RecommendationId
FROM aws.ce.savings_plans_purchase_recommendation_generations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
