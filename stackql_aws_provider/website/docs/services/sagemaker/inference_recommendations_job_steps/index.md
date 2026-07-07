--- 
title: inference_recommendations_job_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_recommendations_job_steps
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

Creates, updates, deletes, gets or lists an <code>inference_recommendations_job_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_recommendations_job_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.inference_recommendations_job_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_inference_recommendations_job_steps"
    values={[
        { label: 'list_inference_recommendations_job_steps', value: 'list_inference_recommendations_job_steps' }
    ]}
>
<TabItem value="list_inference_recommendations_job_steps">

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
    <td><CopyableCode code="InferenceBenchmark" /></td>
    <td><code>object</code></td>
    <td>The details for a specific benchmark.</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name of the Inference Recommender job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the benchmark. (PENDING, IN_PROGRESS, COMPLETED, FAILED, STOPPING, STOPPED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="StepType" /></td>
    <td><code>string</code></td>
    <td>The type of the subtask. BENCHMARK: Evaluate the performance of your model on different instance types. (BENCHMARK)</td>
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
    <td><a href="#list_inference_recommendations_job_steps"><CopyableCode code="list_inference_recommendations_job_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the subtasks for an Inference Recommender job. The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.</td>
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
    defaultValue="list_inference_recommendations_job_steps"
    values={[
        { label: 'list_inference_recommendations_job_steps', value: 'list_inference_recommendations_job_steps' }
    ]}
>
<TabItem value="list_inference_recommendations_job_steps">

Returns a list of the subtasks for an Inference Recommender job. The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.

```sql
SELECT
InferenceBenchmark,
JobName,
Status,
StepType
FROM aws.sagemaker.inference_recommendations_job_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
