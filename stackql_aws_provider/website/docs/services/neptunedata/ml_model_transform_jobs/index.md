--- 
title: ml_model_transform_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_model_transform_jobs
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

Creates, updates, deletes, gets or lists a <code>ml_model_transform_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_model_transform_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.ml_model_transform_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_model_transform_job"
    values={[
        { label: 'get_ml_model_transform_job', value: 'get_ml_model_transform_job' },
        { label: 'list_ml_model_transform_jobs', value: 'list_ml_model_transform_jobs' }
    ]}
>
<TabItem value="get_ml_model_transform_job">

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
    <td>The unique identifier of the model-transform job to be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="base_processing_job" /></td>
    <td><code>object</code></td>
    <td>The base data processing job.</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>A list of the configuration information for the models being used.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_model_transform_job" /></td>
    <td><code>object</code></td>
    <td>The remote model transform job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the model-transform job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ml_model_transform_jobs">

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
    <td>A page from the list of model transform IDs.</td>
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
    <td><a href="#get_ml_model_transform_job"><CopyableCode code="get_ml_model_transform_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a></td>
    <td>Gets information about a specified model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLModelTransformJobStatus IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#list_ml_model_transform_jobs"><CopyableCode code="list_ml_model_transform_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a></td>
    <td>Returns a list of model transform job IDs. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLModelTransformJobs IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#cancel_ml_model_transform_job"><CopyableCode code="cancel_ml_model_transform_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-neptuneIamRoleArn"><code>neptuneIamRoleArn</code></a>, <a href="#parameter-clean"><code>clean</code></a></td>
    <td>Cancels a specified model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelMLModelTransformJob IAM action in that cluster.</td>
</tr>
<tr>
    <td><a href="#start_ml_model_transform_job"><CopyableCode code="start_ml_model_transform_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelTransformOutputS3Location"><code>modelTransformOutputS3Location</code></a></td>
    <td></td>
    <td>Creates a new model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartMLModelTransformJob IAM action in that cluster.</td>
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
    <td>The unique ID of the model transform job to be canceled.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clean">
    <td><CopyableCode code="clean" /></td>
    <td><code>boolean</code></td>
    <td>If this flag is set to TRUE, all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE.</td>
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
    defaultValue="get_ml_model_transform_job"
    values={[
        { label: 'get_ml_model_transform_job', value: 'get_ml_model_transform_job' },
        { label: 'list_ml_model_transform_jobs', value: 'list_ml_model_transform_jobs' }
    ]}
>
<TabItem value="get_ml_model_transform_job">

Gets information about a specified model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLModelTransformJobStatus IAM action in that cluster.

```sql
SELECT
id,
base_processing_job,
models,
remote_model_transform_job,
status
FROM aws.neptunedata.ml_model_transform_jobs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
;
```
</TabItem>
<TabItem value="list_ml_model_transform_jobs">

Returns a list of model transform job IDs. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLModelTransformJobs IAM action in that cluster.

```sql
SELECT
id
FROM aws.neptunedata.ml_model_transform_jobs
WHERE region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND neptuneIamRoleArn = '{{ neptuneIamRoleArn }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_ml_model_transform_job"
    values={[
        { label: 'cancel_ml_model_transform_job', value: 'cancel_ml_model_transform_job' },
        { label: 'start_ml_model_transform_job', value: 'start_ml_model_transform_job' }
    ]}
>
<TabItem value="cancel_ml_model_transform_job">

Cancels a specified model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelMLModelTransformJob IAM action in that cluster.

```sql
EXEC aws.neptunedata.ml_model_transform_jobs.cancel_ml_model_transform_job 
@id='{{ id }}' --required, 
@region='{{ region }}' --required, 
@neptuneIamRoleArn='{{ neptuneIamRoleArn }}', 
@clean={{ clean }}
;
```
</TabItem>
<TabItem value="start_ml_model_transform_job">

Creates a new model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartMLModelTransformJob IAM action in that cluster.

```sql
EXEC aws.neptunedata.ml_model_transform_jobs.start_ml_model_transform_job 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}", 
"dataProcessingJobId": "{{ dataProcessingJobId }}", 
"mlModelTrainingJobId": "{{ mlModelTrainingJobId }}", 
"trainingJobName": "{{ trainingJobName }}", 
"modelTransformOutputS3Location": "{{ modelTransformOutputS3Location }}", 
"sagemakerIamRoleArn": "{{ sagemakerIamRoleArn }}", 
"neptuneIamRoleArn": "{{ neptuneIamRoleArn }}", 
"customModelTransformParameters": "{{ customModelTransformParameters }}", 
"baseProcessingInstanceType": "{{ baseProcessingInstanceType }}", 
"baseProcessingInstanceVolumeSizeInGB": {{ baseProcessingInstanceVolumeSizeInGB }}, 
"subnets": "{{ subnets }}", 
"securityGroupIds": "{{ securityGroupIds }}", 
"volumeEncryptionKMSKey": "{{ volumeEncryptionKMSKey }}", 
"s3OutputEncryptionKMSKey": "{{ s3OutputEncryptionKMSKey }}"
}'
;
```
</TabItem>
</Tabs>
