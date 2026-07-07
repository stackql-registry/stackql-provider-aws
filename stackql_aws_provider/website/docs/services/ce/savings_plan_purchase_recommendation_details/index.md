--- 
title: savings_plan_purchase_recommendation_details
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plan_purchase_recommendation_details
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

Creates, updates, deletes, gets or lists a <code>savings_plan_purchase_recommendation_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plan_purchase_recommendation_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.savings_plan_purchase_recommendation_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_savings_plan_purchase_recommendation_details"
    values={[
        { label: 'get_savings_plan_purchase_recommendation_details', value: 'get_savings_plan_purchase_recommendation_details' }
    ]}
>
<TabItem value="get_savings_plan_purchase_recommendation_details">

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
    <td><CopyableCode code="RecommendationDetailData" /></td>
    <td><code>object</code></td>
    <td>Contains detailed information about a specific Savings Plan recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="RecommendationDetailId" /></td>
    <td><code>string</code></td>
    <td>The ID that is associated with the Savings Plan recommendation. (pattern: &lt;code&gt;^&#91;\S\s&#93;&#123;8&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_savings_plan_purchase_recommendation_details"><CopyableCode code="get_savings_plan_purchase_recommendation_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details for a Savings Plan recommendation. These details include the hourly data-points that construct the cost, coverage, and utilization charts.</td>
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
    defaultValue="get_savings_plan_purchase_recommendation_details"
    values={[
        { label: 'get_savings_plan_purchase_recommendation_details', value: 'get_savings_plan_purchase_recommendation_details' }
    ]}
>
<TabItem value="get_savings_plan_purchase_recommendation_details">

Retrieves the details for a Savings Plan recommendation. These details include the hourly data-points that construct the cost, coverage, and utilization charts.

```sql
SELECT
RecommendationDetailData,
RecommendationDetailId
FROM aws.ce.savings_plan_purchase_recommendation_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
