--- 
title: scaling_configuration_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_configuration_recommendations
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

Creates, updates, deletes, gets or lists a <code>scaling_configuration_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_configuration_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.scaling_configuration_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scaling_configuration_recommendation"
    values={[
        { label: 'get_scaling_configuration_recommendation', value: 'get_scaling_configuration_recommendation' }
    ]}
>
<TabItem value="get_scaling_configuration_recommendation">

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
    <td><CopyableCode code="dynamic_scaling_configuration" /></td>
    <td><code>object</code></td>
    <td>An object with the recommended values for you to specify when creating an autoscaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of an endpoint benchmarked during a previously completed Inference Recommender job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_recommendations_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of a previously completed Inference Recommender job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>object</code></td>
    <td>An object with a list of metrics that were benchmarked during the previously completed Inference Recommender job.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The recommendation ID of a previously completed inference recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_policy_objective" /></td>
    <td><code>object</code></td>
    <td>An object representing the anticipated traffic pattern for an endpoint that you specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="target_cpu_utilization_per_core" /></td>
    <td><code>integer</code></td>
    <td>The percentage of how much utilization you want an instance to use before autoscaling, which you specified in the request. The default value is 50%.</td>
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
    <td><a href="#get_scaling_configuration_recommendation"><CopyableCode code="get_scaling_configuration_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an Amazon SageMaker Inference Recommender autoscaling recommendation job. Returns recommendations for autoscaling policies that you can apply to your SageMaker endpoint.</td>
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
    defaultValue="get_scaling_configuration_recommendation"
    values={[
        { label: 'get_scaling_configuration_recommendation', value: 'get_scaling_configuration_recommendation' }
    ]}
>
<TabItem value="get_scaling_configuration_recommendation">

Starts an Amazon SageMaker Inference Recommender autoscaling recommendation job. Returns recommendations for autoscaling policies that you can apply to your SageMaker endpoint.

```sql
SELECT
dynamic_scaling_configuration,
endpoint_name,
inference_recommendations_job_name,
metric,
recommendation_id,
scaling_policy_objective,
target_cpu_utilization_per_core
FROM aws.sagemaker.scaling_configuration_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
