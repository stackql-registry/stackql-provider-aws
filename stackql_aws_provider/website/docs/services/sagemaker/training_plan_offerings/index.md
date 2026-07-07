--- 
title: training_plan_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - training_plan_offerings
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>training_plan_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_plan_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.training_plan_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_training_plan_offerings"
    values={[
        { label: 'search_training_plan_offerings', value: 'search_training_plan_offerings' }
    ]}
>
<TabItem value="search_training_plan_offerings">

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
    <td><CopyableCode code="TrainingPlanExtensionOfferings" /></td>
    <td><code>array</code></td>
    <td>A list of extension offerings available for the specified training plan. These offerings can be used with the ExtendTrainingPlan API to extend an existing training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingPlanOfferings" /></td>
    <td><code>array</code></td>
    <td>A list of training plan offerings that match the search criteria.</td>
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
    <td><a href="#search_training_plan_offerings"><CopyableCode code="search_training_plan_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for available training plan offerings based on specified criteria. Users search for available plan offerings based on their requirements (e.g., instance type, count, start time, duration). And then, they create a plan that best matches their needs using the ID of the plan offering they want to use. For more information about how to reserve GPU capacity for your SageMaker training jobs or SageMaker HyperPod clusters using Amazon SageMaker Training Plan , see CreateTrainingPlan .</td>
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
    defaultValue="search_training_plan_offerings"
    values={[
        { label: 'search_training_plan_offerings', value: 'search_training_plan_offerings' }
    ]}
>
<TabItem value="search_training_plan_offerings">

Searches for available training plan offerings based on specified criteria. Users search for available plan offerings based on their requirements (e.g., instance type, count, start time, duration). And then, they create a plan that best matches their needs using the ID of the plan offering they want to use. For more information about how to reserve GPU capacity for your SageMaker training jobs or SageMaker HyperPod clusters using Amazon SageMaker Training Plan , see CreateTrainingPlan .

```sql
SELECT
TrainingPlanExtensionOfferings,
TrainingPlanOfferings
FROM aws.sagemaker.training_plan_offerings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
