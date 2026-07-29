--- 
title: ml_model_training_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_model_training_jobs
  - neptunedata
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

Creates, updates, deletes, gets or lists a <code>ml_model_training_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_model_training_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.ml_model_training_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_model_training_job"
    values={[
        { label: 'get_ml_model_training_job', value: 'get_ml_model_training_job' },
        { label: 'list_ml_model_training_jobs', value: 'list_ml_model_training_jobs' }
    ]}
>
<TabItem value="get_ml_model_training_job">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this model-training job.</td>
</tr>
<tr>
    <td><CopyableCode code="hpo_job" /></td>
    <td><code>object</code></td>
    <td>The HPO job.</td>
</tr>
<tr>
    <td><CopyableCode code="ml_models" /></td>
    <td><code>array</code></td>
    <td>A list of the configurations of the ML models being used.</td>
</tr>
<tr>
    <td><CopyableCode code="model_transform_job" /></td>
    <td><code>object</code></td>
    <td>The model transform job.</td>
</tr>
<tr>
    <td><CopyableCode code="processing_job" /></td>
    <td><code>object</code></td>
    <td>The data processing job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the model training job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ml_model_training_jobs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A page of the list of model training job IDs.</td>
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
    <td><a href="#get_ml_model_training_job"><CopyableCode code="get_ml_model_training_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a></td>
    <td>Retrieves information about a Neptune ML model training job. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLModelTrainingJobStatus IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#list_ml_model_training_jobs"><CopyableCode code="list_ml_model_training_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a></td>
    <td>Lists Neptune ML model-training jobs. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:neptune-db:ListMLModelTrainingJobs IAM action in that cluster.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the model-training job to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return (from 1 to 1024; the default is 10).</td>
</tr>
<tr id="parameter-neptuneIamRoleArn">
    <td><CopyableCode code="neptuneIamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ml_model_training_job"
    values={[
        { label: 'get_ml_model_training_job', value: 'get_ml_model_training_job' },
        { label: 'list_ml_model_training_jobs', value: 'list_ml_model_training_jobs' }
    ]}
>
<TabItem value="get_ml_model_training_job">

Retrieves information about a Neptune ML model training job. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLModelTrainingJobStatus IAM action in that cluster.

```sql
SELECT
id,
hpo_job,
ml_models,
model_transform_job,
processing_job,
status
FROM aws.neptunedata.ml_model_training_jobs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
;
```
</TabItem>
<TabItem value="list_ml_model_training_jobs">

Lists Neptune ML model-training jobs. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:neptune-db:ListMLModelTrainingJobs IAM action in that cluster.

```sql
SELECT
id
FROM aws.neptunedata.ml_model_training_jobs
WHERE region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
;
```
</TabItem>
</Tabs>
