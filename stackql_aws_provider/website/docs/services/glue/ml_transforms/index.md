--- 
title: ml_transforms
hide_title: false
hide_table_of_contents: false
keywords:
  - ml_transforms
  - glue
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

Creates, updates, deletes, gets or lists a <code>ml_transforms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ml_transforms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.ml_transforms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ml_transform"
    values={[
        { label: 'get_ml_transform', value: 'get_ml_transform' },
        { label: 'get_ml_transforms', value: 'get_ml_transforms' }
    ]}
>
<TabItem value="get_ml_transform">

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
    <td><CopyableCode code="created_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the transform was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the transform. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_metrics" /></td>
    <td><code>object</code></td>
    <td>The latest evaluation metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see Glue Versions in the developer guide. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_record_tables" /></td>
    <td><code>array</code></td>
    <td>A list of Glue table definitions used by the transform.</td>
</tr>
<tr>
    <td><CopyableCode code="label_count" /></td>
    <td><code>integer</code></td>
    <td>The number of labels available for this transform.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the transform was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="max_capacity" /></td>
    <td><code>number (double)</code></td>
    <td>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="max_retries" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times to retry a task for this transform after a task run fails.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name given to the transform when it was created. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated when this task runs.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The configuration parameters that are specific to the algorithm used.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>array</code></td>
    <td>The Map&lt;Column, Type&gt; object that represents the schema that this transform accepts. Has an upper bound of 100 columns.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING". (NOT_READY, READY, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).</td>
</tr>
<tr>
    <td><CopyableCode code="transform_encryption" /></td>
    <td><code>object</code></td>
    <td>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="transform_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the transform, generated at the time that the transform was created. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X. For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker. For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker. For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker. (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_ml_transforms">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token, if more results are available.</td>
</tr>
<tr>
    <td><CopyableCode code="transforms" /></td>
    <td><code>array</code></td>
    <td>A list of machine learning transforms.</td>
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
    <td><a href="#get_ml_transform"><CopyableCode code="get_ml_transform" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling GetMLTransform.</td>
</tr>
<tr>
    <td><a href="#get_ml_transforms"><CopyableCode code="get_ml_transforms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling GetMLTransforms.</td>
</tr>
<tr>
    <td><a href="#create_ml_transform"><CopyableCode code="create_ml_transform" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InputRecordTables"><code>InputRecordTables</code></a></td>
    <td></td>
    <td>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it. Call this operation as the first step in the process of using a machine learning transform (such as the FindMatches transform) for deduplicating data. You can provide an optional Description, in addition to the parameters that you want to use for your algorithm. You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include Role, and optionally, AllocatedCapacity, Timeout, and MaxRetries. For more information, see Jobs.</td>
</tr>
<tr>
    <td><a href="#update_ml_transform"><CopyableCode code="update_ml_transform" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransformId"><code>TransformId</code></a></td>
    <td></td>
    <td>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results. After calling this operation, you can call the StartMLEvaluationTaskRun operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</td>
</tr>
<tr>
    <td><a href="#delete_ml_transform"><CopyableCode code="delete_ml_transform" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling DeleteMLTransforms. However, any Glue jobs that still reference the deleted transform will no longer succeed.</td>
</tr>
<tr>
    <td><a href="#list_ml_transforms"><CopyableCode code="list_ml_transforms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional Tags field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.</td>
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
    defaultValue="get_ml_transform"
    values={[
        { label: 'get_ml_transform', value: 'get_ml_transform' },
        { label: 'get_ml_transforms', value: 'get_ml_transforms' }
    ]}
>
<TabItem value="get_ml_transform">

Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling GetMLTransform.

```sql
SELECT
created_on,
description,
evaluation_metrics,
glue_version,
input_record_tables,
label_count,
last_modified_on,
max_capacity,
max_retries,
name,
number_of_workers,
parameters,
role,
schema,
status,
timeout,
transform_encryption,
transform_id,
worker_type
FROM aws.glue.ml_transforms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_ml_transforms">

Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling GetMLTransforms.

```sql
SELECT
next_token,
transforms
FROM aws.glue.ml_transforms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ml_transform"
    values={[
        { label: 'create_ml_transform', value: 'create_ml_transform' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ml_transform">

Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it. Call this operation as the first step in the process of using a machine learning transform (such as the FindMatches transform) for deduplicating data. You can provide an optional Description, in addition to the parameters that you want to use for your algorithm. You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include Role, and optionally, AllocatedCapacity, Timeout, and MaxRetries. For more information, see Jobs.

```sql
INSERT INTO aws.glue.ml_transforms (
Name,
Description,
InputRecordTables,
Parameters,
Role,
GlueVersion,
MaxCapacity,
WorkerType,
NumberOfWorkers,
Timeout,
MaxRetries,
Tags,
TransformEncryption,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ InputRecordTables }}' /* required */,
'{{ Parameters }}',
'{{ Role }}',
'{{ GlueVersion }}',
{{ MaxCapacity }},
'{{ WorkerType }}',
{{ NumberOfWorkers }},
{{ Timeout }},
{{ MaxRetries }},
'{{ Tags }}',
'{{ TransformEncryption }}',
'{{ region }}'
RETURNING
transform_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ml_transforms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ml_transforms resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The unique name that you give the transform when you create it.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the machine learning transform that is being defined. The default is an empty string.
    - name: InputRecordTables
      description: |
        A list of Glue table definitions used by the transform.
      value:
        - DatabaseName: "{{ DatabaseName }}"
          TableName: "{{ TableName }}"
          CatalogId: "{{ CatalogId }}"
          ConnectionName: "{{ ConnectionName }}"
          AdditionalOptions: "{{ AdditionalOptions }}"
    - name: Parameters
      description: |
        The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type.
      value:
        TransformType: "{{ TransformType }}"
        FindMatchesParameters:
          PrimaryKeyColumnName: "{{ PrimaryKeyColumnName }}"
          PrecisionRecallTradeoff: {{ PrecisionRecallTradeoff }}
          AccuracyCostTradeoff: {{ AccuracyCostTradeoff }}
          EnforceProvidedLabels: {{ EnforceProvidedLabels }}
    - name: Role
      value: "{{ Role }}"
      description: |
        The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. This role needs Glue service role permissions to allow access to resources in Glue. See Attach a Policy to IAM Users That Access Glue. This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.
    - name: GlueVersion
      value: "{{ GlueVersion }}"
      description: |
        This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see Glue Versions in the developer guide.
    - name: MaxCapacity
      value: {{ MaxCapacity }}
      description: |
        The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page. MaxCapacity is a mutually exclusive option with NumberOfWorkers and WorkerType. If either NumberOfWorkers or WorkerType is set, then MaxCapacity cannot be set. If MaxCapacity is set then neither NumberOfWorkers or WorkerType can be set. If WorkerType is set, then NumberOfWorkers is required (and vice versa). MaxCapacity and NumberOfWorkers must both be at least 1. When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only. When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only.
    - name: WorkerType
      value: "{{ WorkerType }}"
      description: |
        The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X. For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker. For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker. For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker. MaxCapacity is a mutually exclusive option with NumberOfWorkers and WorkerType. If either NumberOfWorkers or WorkerType is set, then MaxCapacity cannot be set. If MaxCapacity is set then neither NumberOfWorkers or WorkerType can be set. If WorkerType is set, then NumberOfWorkers is required (and vice versa). MaxCapacity and NumberOfWorkers must both be at least 1.
      valid_values: ['Standard', 'G.1X', 'G.2X', 'G.025X', 'G.4X', 'G.8X', 'Z.2X']
    - name: NumberOfWorkers
      value: {{ NumberOfWorkers }}
      description: |
        The number of workers of a defined workerType that are allocated when this task runs. If WorkerType is set, then NumberOfWorkers is required (and vice versa).
    - name: Timeout
      value: {{ Timeout }}
      description: |
        The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).
    - name: MaxRetries
      value: {{ MaxRetries }}
      description: |
        The maximum number of times to retry a task for this transform after a task run fails.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide.
    - name: TransformEncryption
      description: |
        The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
      value:
        MlUserDataEncryption:
          MlUserDataEncryptionMode: "{{ MlUserDataEncryptionMode }}"
          KmsKeyId: "{{ KmsKeyId }}"
        TaskRunSecurityConfigurationName: "{{ TaskRunSecurityConfigurationName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ml_transform"
    values={[
        { label: 'update_ml_transform', value: 'update_ml_transform' }
    ]}
>
<TabItem value="update_ml_transform">

Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results. After calling this operation, you can call the StartMLEvaluationTaskRun operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).

```sql
UPDATE aws.glue.ml_transforms
SET 
TransformId = '{{ TransformId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Parameters = '{{ Parameters }}',
Role = '{{ Role }}',
GlueVersion = '{{ GlueVersion }}',
MaxCapacity = {{ MaxCapacity }},
WorkerType = '{{ WorkerType }}',
NumberOfWorkers = {{ NumberOfWorkers }},
Timeout = {{ Timeout }},
MaxRetries = {{ MaxRetries }}
WHERE 
region = '{{ region }}' --required
AND TransformId = '{{ TransformId }}' --required
RETURNING
transform_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ml_transform"
    values={[
        { label: 'delete_ml_transform', value: 'delete_ml_transform' }
    ]}
>
<TabItem value="delete_ml_transform">

Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling DeleteMLTransforms. However, any Glue jobs that still reference the deleted transform will no longer succeed.

```sql
DELETE FROM aws.glue.ml_transforms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_ml_transforms"
    values={[
        { label: 'list_ml_transforms', value: 'list_ml_transforms' }
    ]}
>
<TabItem value="list_ml_transforms">

Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional Tags field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.

```sql
EXEC aws.glue.ml_transforms.list_ml_transforms 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Filter": "{{ Filter }}", 
"Sort": "{{ Sort }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
