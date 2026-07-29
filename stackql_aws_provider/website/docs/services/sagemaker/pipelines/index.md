--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
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

Creates, updates, deletes, gets or lists a <code>pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pipeline"
    values={[
        { label: 'describe_pipeline', value: 'describe_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="describe_pipeline">

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
    <td>The time when the pipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the pipeline was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the pipeline was last run.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelism_configuration" /></td>
    <td><code>object</code></td>
    <td>Lists the parallelism configuration applied to the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:(&#91;0-9&#93;&#123;12&#125;|aws):pipeline/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_definition" /></td>
    <td><code>string</code></td>
    <td>The JSON pipeline definition. (pattern: &lt;code&gt;.*(?:&#91; \r\n\t&#93;.*)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the pipeline. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_status" /></td>
    <td><code>string</code></td>
    <td>The status of the pipeline execution. (Active, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline version. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the pipeline version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,81&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that the pipeline uses to execute. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipelines">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that a pipeline execution began.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the pipeline was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:(&#91;0-9&#93;&#123;12&#125;|aws):pipeline/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the pipeline. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that the pipeline used to execute. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_pipeline"><CopyableCode code="describe_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the details of a pipeline.</td>
</tr>
<tr>
    <td><a href="#list_pipelines"><CopyableCode code="list_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of pipelines.</td>
</tr>
<tr>
    <td><a href="#create_pipeline"><CopyableCode code="create_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineName"><code>PipelineName</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a pipeline using a JSON pipeline definition.</td>
</tr>
<tr>
    <td><a href="#update_pipeline"><CopyableCode code="update_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineName"><code>PipelineName</code></a></td>
    <td></td>
    <td>Updates a pipeline.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline"><CopyableCode code="delete_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the StopPipelineExecution API. When you delete a pipeline, all instances of the pipeline are deleted.</td>
</tr>
<tr>
    <td><a href="#start_pipeline_execution"><CopyableCode code="start_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineName"><code>PipelineName</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Starts a pipeline execution.</td>
</tr>
<tr>
    <td><a href="#stop_pipeline_execution"><CopyableCode code="stop_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineExecutionArn"><code>PipelineExecutionArn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Stops a pipeline execution. Callback Step A pipeline execution won't stop while a callback step is running. When you call StopPipelineExecution on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping". You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to SendPipelineExecutionStepSuccess or SendPipelineExecutionStepFailure. Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution. Lambda Step A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is Stopped. If the timeout is hit the pipeline execution status is Failed.</td>
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
    defaultValue="describe_pipeline"
    values={[
        { label: 'describe_pipeline', value: 'describe_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="describe_pipeline">

Describes the details of a pipeline.

```sql
SELECT
created_by,
creation_time,
last_modified_by,
last_modified_time,
last_run_time,
parallelism_configuration,
pipeline_arn,
pipeline_definition,
pipeline_description,
pipeline_display_name,
pipeline_name,
pipeline_status,
pipeline_version_description,
pipeline_version_display_name,
role_arn
FROM aws.sagemaker.pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipelines">

Gets a list of pipelines.

```sql
SELECT
creation_time,
last_execution_time,
last_modified_time,
pipeline_arn,
pipeline_description,
pipeline_display_name,
pipeline_name,
role_arn
FROM aws.sagemaker.pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pipeline"
    values={[
        { label: 'create_pipeline', value: 'create_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pipeline">

Creates a pipeline using a JSON pipeline definition.

```sql
INSERT INTO aws.sagemaker.pipelines (
PipelineName,
PipelineDisplayName,
PipelineDefinition,
PipelineDefinitionS3Location,
PipelineDescription,
ClientRequestToken,
RoleArn,
Tags,
ParallelismConfiguration,
region
)
SELECT 
'{{ PipelineName }}' /* required */,
'{{ PipelineDisplayName }}',
'{{ PipelineDefinition }}',
'{{ PipelineDefinitionS3Location }}',
'{{ PipelineDescription }}',
'{{ ClientRequestToken }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ ParallelismConfiguration }}',
'{{ region }}'
RETURNING
pipeline_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pipelines resource.
    - name: PipelineName
      value: "{{ PipelineName }}"
      description: |
        The name of the pipeline.
    - name: PipelineDisplayName
      value: "{{ PipelineDisplayName }}"
      description: |
        The display name of the pipeline.
    - name: PipelineDefinition
      value: "{{ PipelineDefinition }}"
      description: |
        The JSON pipeline definition of the pipeline.
    - name: PipelineDefinitionS3Location
      description: |
        The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location.
      value:
        Bucket: "{{ Bucket }}"
        ObjectKey: "{{ ObjectKey }}"
        VersionId: "{{ VersionId }}"
    - name: PipelineDescription
      value: "{{ PipelineDescription }}"
      description: |
        A description of the pipeline.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the role used by the pipeline to access and create resources.
    - name: Tags
      description: |
        A list of tags to apply to the created pipeline.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ParallelismConfiguration
      description: |
        This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default.
      value:
        MaxParallelExecutionSteps: {{ MaxParallelExecutionSteps }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pipeline"
    values={[
        { label: 'update_pipeline', value: 'update_pipeline' }
    ]}
>
<TabItem value="update_pipeline">

Updates a pipeline.

```sql
UPDATE aws.sagemaker.pipelines
SET 
PipelineName = '{{ PipelineName }}',
PipelineDisplayName = '{{ PipelineDisplayName }}',
PipelineDefinition = '{{ PipelineDefinition }}',
PipelineDefinitionS3Location = '{{ PipelineDefinitionS3Location }}',
PipelineDescription = '{{ PipelineDescription }}',
RoleArn = '{{ RoleArn }}',
ParallelismConfiguration = '{{ ParallelismConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND PipelineName = '{{ PipelineName }}' --required
RETURNING
pipeline_arn,
pipeline_version_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pipeline"
    values={[
        { label: 'delete_pipeline', value: 'delete_pipeline' }
    ]}
>
<TabItem value="delete_pipeline">

Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the StopPipelineExecution API. When you delete a pipeline, all instances of the pipeline are deleted.

```sql
DELETE FROM aws.sagemaker.pipelines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_pipeline_execution"
    values={[
        { label: 'start_pipeline_execution', value: 'start_pipeline_execution' },
        { label: 'stop_pipeline_execution', value: 'stop_pipeline_execution' }
    ]}
>
<TabItem value="start_pipeline_execution">

Starts a pipeline execution.

```sql
EXEC aws.sagemaker.pipelines.start_pipeline_execution 
@region='{{ region }}' --required 
@@json=
'{
"PipelineName": "{{ PipelineName }}", 
"PipelineExecutionDisplayName": "{{ PipelineExecutionDisplayName }}", 
"PipelineParameters": "{{ PipelineParameters }}", 
"PipelineExecutionDescription": "{{ PipelineExecutionDescription }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"ParallelismConfiguration": "{{ ParallelismConfiguration }}", 
"SelectiveExecutionConfig": "{{ SelectiveExecutionConfig }}", 
"PipelineVersionId": {{ PipelineVersionId }}, 
"MlflowExperimentName": "{{ MlflowExperimentName }}"
}'
;
```
</TabItem>
<TabItem value="stop_pipeline_execution">

Stops a pipeline execution. Callback Step A pipeline execution won't stop while a callback step is running. When you call StopPipelineExecution on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping". You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to SendPipelineExecutionStepSuccess or SendPipelineExecutionStepFailure. Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution. Lambda Step A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is Stopped. If the timeout is hit the pipeline execution status is Failed.

```sql
EXEC aws.sagemaker.pipelines.stop_pipeline_execution 
@region='{{ region }}' --required 
@@json=
'{
"PipelineExecutionArn": "{{ PipelineExecutionArn }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
