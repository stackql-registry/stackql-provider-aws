--- 
title: recommendation_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_summaries
  - compute_optimizer
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

Creates, updates, deletes, gets or lists a <code>recommendation_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.recommendation_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommendation_summaries"
    values={[
        { label: 'get_recommendation_summaries', value: 'get_recommendation_summaries' }
    ]}
>
<TabItem value="get_recommendation_summaries">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the recommendation summary.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregatedSavingsOpportunity" /></td>
    <td><code>object</code></td>
    <td>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource. Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation. Savings opportunity data requires that you opt in to Cost Explorer, as well as activate Receive Amazon EC2 resource recommendations in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see Enabling Cost Explorer and Optimizing your cost with Rightsizing Recommendations in the Cost Management User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="currentPerformanceRiskRatings" /></td>
    <td><code>object</code></td>
    <td>An object that describes the performance risk ratings for a given resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="idleSavingsOpportunity" /></td>
    <td><code>object</code></td>
    <td>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource. Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation. Savings opportunity data requires that you opt in to Cost Explorer, as well as activate Receive Amazon EC2 resource recommendations in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see Enabling Cost Explorer and Optimizing your cost with Rightsizing Recommendations in the Cost Management User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="idleSummaries" /></td>
    <td><code>array</code></td>
    <td>Describes the findings summary of the idle resources.</td>
</tr>
<tr>
    <td><CopyableCode code="inferredWorkloadSavings" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describes the estimated monthly saving amounts for the instances running on the specified inferredWorkloadTypes. The array contains the top five savings opportunites for the instances that run inferred workload types.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendationResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type that the recommendation summary applies to. (Ec2Instance, AutoScalingGroup, EbsVolume, LambdaFunction, EcsService, License, RdsDBInstance, RdsDBInstanceStorage, AuroraDBClusterStorage, NatGateway)</td>
</tr>
<tr>
    <td><CopyableCode code="savingsOpportunity" /></td>
    <td><code>object</code></td>
    <td>Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource. Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation. Savings opportunity data requires that you opt in to Cost Explorer, as well as activate Receive Amazon EC2 resource recommendations in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see Enabling Cost Explorer and Optimizing your cost with Rightsizing Recommendations in the Cost Management User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="summaries" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe a recommendation summary.</td>
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
    <td><a href="#get_recommendation_summaries"><CopyableCode code="get_recommendation_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the optimization findings for an account. It returns the number of: Amazon EC2 instances in an account that are Underprovisioned, Overprovisioned, or Optimized. EC2Auto Scaling groups in an account that are NotOptimized, or Optimized. Amazon EBS volumes in an account that are NotOptimized, or Optimized. Lambda functions in an account that are NotOptimized, or Optimized. Amazon ECS services in an account that are Underprovisioned, Overprovisioned, or Optimized. Commercial software licenses in an account that are InsufficientMetrics, NotOptimized or Optimized. Amazon Aurora and Amazon RDS databases in an account that are Underprovisioned, Overprovisioned, Optimized, or NotOptimized.</td>
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
    defaultValue="get_recommendation_summaries"
    values={[
        { label: 'get_recommendation_summaries', value: 'get_recommendation_summaries' }
    ]}
>
<TabItem value="get_recommendation_summaries">

Returns the optimization findings for an account. It returns the number of: Amazon EC2 instances in an account that are Underprovisioned, Overprovisioned, or Optimized. EC2Auto Scaling groups in an account that are NotOptimized, or Optimized. Amazon EBS volumes in an account that are NotOptimized, or Optimized. Lambda functions in an account that are NotOptimized, or Optimized. Amazon ECS services in an account that are Underprovisioned, Overprovisioned, or Optimized. Commercial software licenses in an account that are InsufficientMetrics, NotOptimized or Optimized. Amazon Aurora and Amazon RDS databases in an account that are Underprovisioned, Overprovisioned, Optimized, or NotOptimized.

```sql
SELECT
accountId,
aggregatedSavingsOpportunity,
currentPerformanceRiskRatings,
idleSavingsOpportunity,
idleSummaries,
inferredWorkloadSavings,
recommendationResourceType,
savingsOpportunity,
summaries
FROM aws.compute_optimizer.recommendation_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
