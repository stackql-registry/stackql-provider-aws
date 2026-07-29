--- 
title: pipeline_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_executions
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

Creates, updates, deletes, gets or lists a <code>pipeline_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.pipeline_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pipeline_execution"
    values={[
        { label: 'describe_pipeline_execution', value: 'describe_pipeline_execution' },
        { label: 'list_pipeline_executions', value: 'list_pipeline_executions' }
    ]}
>
<TabItem value="describe_pipeline_execution">

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the pipeline execution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the execution failed, a message describing why. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the pipeline execution was modified last.</td>
</tr>
<tr>
    <td><CopyableCode code="m_lflow_config" /></td>
    <td><code>object</code></td>
    <td>The MLflow configuration of the pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelism_configuration" /></td>
    <td><code>object</code></td>
    <td>The parallelism configuration applied to the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:(&#91;0-9&#93;&#123;12&#125;|aws):pipeline/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline execution. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:pipeline\/.*\/execution\/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline execution. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the pipeline execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,81&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_status" /></td>
    <td><code>string</code></td>
    <td>The status of the pipeline execution. (Executing, Stopping, Stopped, Failed, Succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_experiment_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the names of the experiment and trial created by a pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the pipeline version.</td>
</tr>
<tr>
    <td><CopyableCode code="selective_execution_config" /></td>
    <td><code>object</code></td>
    <td>The selective execution configuration applied to the pipeline run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipeline_executions">

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
    <td><CopyableCode code="pipeline_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline execution. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:pipeline\/.*\/execution\/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline execution. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the pipeline execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,81&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_failure_reason" /></td>
    <td><code>string</code></td>
    <td>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_status" /></td>
    <td><code>string</code></td>
    <td>The status of the pipeline execution. (Executing, Stopping, Stopped, Failed, Succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the pipeline execution.</td>
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
    <td><a href="#describe_pipeline_execution"><CopyableCode code="describe_pipeline_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the details of a pipeline execution.</td>
</tr>
<tr>
    <td><a href="#list_pipeline_executions"><CopyableCode code="list_pipeline_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the pipeline executions.</td>
</tr>
<tr>
    <td><a href="#update_pipeline_execution"><CopyableCode code="update_pipeline_execution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineExecutionArn"><code>PipelineExecutionArn</code></a></td>
    <td></td>
    <td>Updates a pipeline execution.</td>
</tr>
<tr>
    <td><a href="#retry_pipeline_execution"><CopyableCode code="retry_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineExecutionArn"><code>PipelineExecutionArn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Retry the execution of the pipeline.</td>
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
    defaultValue="describe_pipeline_execution"
    values={[
        { label: 'describe_pipeline_execution', value: 'describe_pipeline_execution' },
        { label: 'list_pipeline_executions', value: 'list_pipeline_executions' }
    ]}
>
<TabItem value="describe_pipeline_execution">

Describes the details of a pipeline execution.

```sql
SELECT
created_by,
creation_time,
failure_reason,
last_modified_by,
last_modified_time,
m_lflow_config,
parallelism_configuration,
pipeline_arn,
pipeline_execution_arn,
pipeline_execution_description,
pipeline_execution_display_name,
pipeline_execution_status,
pipeline_experiment_config,
pipeline_version_id,
selective_execution_config
FROM aws.sagemaker.pipeline_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipeline_executions">

Gets a list of the pipeline executions.

```sql
SELECT
pipeline_execution_arn,
pipeline_execution_description,
pipeline_execution_display_name,
pipeline_execution_failure_reason,
pipeline_execution_status,
start_time
FROM aws.sagemaker.pipeline_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pipeline_execution"
    values={[
        { label: 'update_pipeline_execution', value: 'update_pipeline_execution' }
    ]}
>
<TabItem value="update_pipeline_execution">

Updates a pipeline execution.

```sql
UPDATE aws.sagemaker.pipeline_executions
SET 
PipelineExecutionArn = '{{ PipelineExecutionArn }}',
PipelineExecutionDescription = '{{ PipelineExecutionDescription }}',
PipelineExecutionDisplayName = '{{ PipelineExecutionDisplayName }}',
ParallelismConfiguration = '{{ ParallelismConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND PipelineExecutionArn = '{{ PipelineExecutionArn }}' --required
RETURNING
pipeline_execution_arn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="retry_pipeline_execution"
    values={[
        { label: 'retry_pipeline_execution', value: 'retry_pipeline_execution' }
    ]}
>
<TabItem value="retry_pipeline_execution">

Retry the execution of the pipeline.

```sql
EXEC aws.sagemaker.pipeline_executions.retry_pipeline_execution 
@region='{{ region }}' --required 
@@json=
'{
"PipelineExecutionArn": "{{ PipelineExecutionArn }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"ParallelismConfiguration": "{{ ParallelismConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
