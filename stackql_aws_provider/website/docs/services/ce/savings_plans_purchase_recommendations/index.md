--- 
title: savings_plans_purchase_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plans_purchase_recommendations
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

Creates, updates, deletes, gets or lists a <code>savings_plans_purchase_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plans_purchase_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.savings_plans_purchase_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_savings_plans_purchase_recommendation"
    values={[
        { label: 'get_savings_plans_purchase_recommendation', value: 'get_savings_plans_purchase_recommendation' }
    ]}
>
<TabItem value="get_savings_plans_purchase_recommendation">

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
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>Information that regards this specific recommendation set.</td>
</tr>
<tr>
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SavingsPlansPurchaseRecommendation" /></td>
    <td><code>object</code></td>
    <td>Contains your request parameters, Savings Plan Recommendations Summary, and Details.</td>
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
    <td><a href="#get_savings_plans_purchase_recommendation"><CopyableCode code="get_savings_plans_purchase_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Savings Plans recommendations for your account. First use StartSavingsPlansPurchaseRecommendationGeneration to generate a new set of recommendations, and then use GetSavingsPlansPurchaseRecommendation to retrieve them.</td>
</tr>
<tr>
    <td><a href="#start_savings_plans_purchase_recommendation_generation"><CopyableCode code="start_savings_plans_purchase_recommendation_generation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family. StartSavingsPlansPurchaseRecommendationGeneration has no request syntax because no input parameters are needed to support this operation.</td>
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
    defaultValue="get_savings_plans_purchase_recommendation"
    values={[
        { label: 'get_savings_plans_purchase_recommendation', value: 'get_savings_plans_purchase_recommendation' }
    ]}
>
<TabItem value="get_savings_plans_purchase_recommendation">

Retrieves the Savings Plans recommendations for your account. First use StartSavingsPlansPurchaseRecommendationGeneration to generate a new set of recommendations, and then use GetSavingsPlansPurchaseRecommendation to retrieve them.

```sql
SELECT
Metadata,
NextPageToken,
SavingsPlansPurchaseRecommendation
FROM aws.ce.savings_plans_purchase_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_savings_plans_purchase_recommendation_generation"
    values={[
        { label: 'start_savings_plans_purchase_recommendation_generation', value: 'start_savings_plans_purchase_recommendation_generation' }
    ]}
>
<TabItem value="start_savings_plans_purchase_recommendation_generation">

Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family. StartSavingsPlansPurchaseRecommendationGeneration has no request syntax because no input parameters are needed to support this operation.

```sql
EXEC aws.ce.savings_plans_purchase_recommendations.start_savings_plans_purchase_recommendation_generation 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
