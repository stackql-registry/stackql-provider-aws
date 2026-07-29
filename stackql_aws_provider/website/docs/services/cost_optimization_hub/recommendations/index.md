--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cost_optimization_hub.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommendation"
    values={[
        { label: 'get_recommendation', value: 'get_recommendation' },
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="get_recommendation">

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
    <td>The account to which the recommendation applies.</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of action you can take by adopting the recommendation. (Rightsize, Stop, Upgrade, PurchaseSavingsPlans, PurchaseReservedInstances, MigrateToGraviton, Delete, ScaleIn)</td>
</tr>
<tr>
    <td><CopyableCode code="cost_calculation_lookback_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The lookback period used to calculate cost impact for a recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code used for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="current_resource_details" /></td>
    <td><code>object</code></td>
    <td>The details for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="current_resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. (Ec2Instance, LambdaFunction, EbsVolume, EcsService, Ec2AutoScalingGroup, Ec2InstanceSavingsPlans, ComputeSavingsPlans, SageMakerSavingsPlans, Ec2ReservedInstances, RdsReservedInstances, OpenSearchReservedInstances, RedshiftReservedInstances, ElastiCacheReservedInstances, RdsDbInstanceStorage, RdsDbInstance, AuroraDbClusterStorage, DynamoDbReservedCapacity, MemoryDbReservedInstances, NatGateway)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_cost" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_savings" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated monthly savings amount for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_savings_over_cost_calculation_lookback_period" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated savings amount over the lookback period used to calculate cost impact for a recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_savings_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated savings percentage relative to the total cost over the cost calculation lookback period.</td>
</tr>
<tr>
    <td><CopyableCode code="implementation_effort" /></td>
    <td><code>string</code></td>
    <td>The effort required to implement the recommendation. (VeryLow, Low, Medium, High, VeryHigh)</td>
</tr>
<tr>
    <td><CopyableCode code="last_refresh_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the recommendation was last generated.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_lookback_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The lookback period that's used to generate the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_resource_details" /></td>
    <td><code>object</code></td>
    <td>The details about the recommended resource.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type of the recommendation. (Ec2Instance, LambdaFunction, EbsVolume, EcsService, Ec2AutoScalingGroup, Ec2InstanceSavingsPlans, ComputeSavingsPlans, SageMakerSavingsPlans, Ec2ReservedInstances, RdsReservedInstances, OpenSearchReservedInstances, RedshiftReservedInstances, ElastiCacheReservedInstances, RdsDbInstanceStorage, RdsDbInstance, AuroraDbClusterStorage, DynamoDbReservedCapacity, MemoryDbReservedInstances, NatGateway)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the resource. This is the same as the Amazon Resource Name (ARN), if available.</td>
</tr>
<tr>
    <td><CopyableCode code="restart_needed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not implementing the recommendation requires a restart.</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_possible" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not implementing the recommendation can be rolled back.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the recommendation. (ComputeOptimizer, CostExplorer)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the resource for which the recommendation exists.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recommendations">

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
    <td>The account to which the recommendation applies.</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of tasks that can be carried out by this action.</td>
</tr>
<tr>
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code used for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="current_resource_summary" /></td>
    <td><code>string</code></td>
    <td>Describes the current resource.</td>
</tr>
<tr>
    <td><CopyableCode code="current_resource_type" /></td>
    <td><code>string</code></td>
    <td>The current resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_cost" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_monthly_savings" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated monthly savings amount for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_savings_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated savings percentage relative to the total cost over the cost calculation lookback period.</td>
</tr>
<tr>
    <td><CopyableCode code="implementation_effort" /></td>
    <td><code>string</code></td>
    <td>The effort required to implement the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_refresh_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the recommendation was last generated.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_lookback_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The lookback period that's used to generate the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_resource_summary" /></td>
    <td><code>string</code></td>
    <td>Describes the recommended resource.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_resource_type" /></td>
    <td><code>string</code></td>
    <td>The recommended resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="restart_needed" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not implementing the recommendation requires a restart.</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_possible" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not implementing the recommendation can be rolled back.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the recommendation. (ComputeOptimizer, CostExplorer)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags assigned to the recommendation.</td>
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
    <td><a href="#get_recommendation"><CopyableCode code="get_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns both the current and recommended resource configuration and the estimated cost impact for a recommendation. The recommendationId is only valid for up to a maximum of 24 hours as recommendations are refreshed daily. To retrieve the recommendationId, use the ListRecommendations API.</td>
</tr>
<tr>
    <td><a href="#list_recommendations"><CopyableCode code="list_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of recommendations.</td>
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
    defaultValue="get_recommendation"
    values={[
        { label: 'get_recommendation', value: 'get_recommendation' },
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="get_recommendation">

Returns both the current and recommended resource configuration and the estimated cost impact for a recommendation. The recommendationId is only valid for up to a maximum of 24 hours as recommendations are refreshed daily. To retrieve the recommendationId, use the ListRecommendations API.

```sql
SELECT
account_id,
action_type,
cost_calculation_lookback_period_in_days,
currency_code,
current_resource_details,
current_resource_type,
estimated_monthly_cost,
estimated_monthly_savings,
estimated_savings_over_cost_calculation_lookback_period,
estimated_savings_percentage,
implementation_effort,
last_refresh_timestamp,
recommendation_id,
recommendation_lookback_period_in_days,
recommended_resource_details,
recommended_resource_type,
region,
resource_arn,
resource_id,
restart_needed,
rollback_possible,
source,
tags
FROM aws.cost_optimization_hub.recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recommendations">

Returns a list of recommendations.

```sql
SELECT
account_id,
action_type,
currency_code,
current_resource_summary,
current_resource_type,
estimated_monthly_cost,
estimated_monthly_savings,
estimated_savings_percentage,
implementation_effort,
last_refresh_timestamp,
recommendation_id,
recommendation_lookback_period_in_days,
recommended_resource_summary,
recommended_resource_type,
region,
resource_arn,
resource_id,
restart_needed,
rollback_possible,
source,
tags
FROM aws.cost_optimization_hub.recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
