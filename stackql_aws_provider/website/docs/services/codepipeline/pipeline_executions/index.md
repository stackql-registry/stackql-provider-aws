--- 
title: pipeline_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_executions
  - codepipeline
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.pipeline_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline_execution"
    values={[
        { label: 'get_pipeline_execution', value: 'get_pipeline_execution' },
        { label: 'list_pipeline_executions', value: 'list_pipeline_executions' }
    ]}
>
<TabItem value="get_pipeline_execution">

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
    <td><CopyableCode code="artifactRevisions" /></td>
    <td><code>array</code></td>
    <td>A list of ArtifactRevision objects included in a pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="executionMode" /></td>
    <td><code>string</code></td>
    <td>The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED. (QUEUED, SUPERSEDED, PARALLEL)</td>
</tr>
<tr>
    <td><CopyableCode code="executionType" /></td>
    <td><code>string</code></td>
    <td>The type of the pipeline execution. (STANDARD, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the pipeline execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineName" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline with the specified pipeline execution. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineVersion" /></td>
    <td><code>integer</code></td>
    <td>The version number of the pipeline with the specified pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackMetadata" /></td>
    <td><code>object</code></td>
    <td>The metadata about the execution pertaining to stage rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the pipeline execution. Cancelled: The pipeline’s definition was updated before the pipeline execution could be completed. InProgress: The pipeline execution is currently running. Stopped: The pipeline execution was manually stopped. For more information, see Stopped Executions. Stopping: The pipeline execution received a request to be manually stopped. Depending on the selected stop mode, the execution is either completing or abandoning in-progress actions. For more information, see Stopped Executions. Succeeded: The pipeline execution was completed successfully. Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. For more information, see Superseded Executions. Failed: The pipeline execution was not completed successfully. (Cancelled, InProgress, Stopped, Stopping, Succeeded, Superseded, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusSummary" /></td>
    <td><code>string</code></td>
    <td>A summary that contains a description of the pipeline execution status.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger" /></td>
    <td><code>object</code></td>
    <td>The interaction or event that started a pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>A list of pipeline variables used for the pipeline execution.</td>
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
    <td><CopyableCode code="executionMode" /></td>
    <td><code>string</code></td>
    <td>The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED. (QUEUED, SUPERSEDED, PARALLEL)</td>
</tr>
<tr>
    <td><CopyableCode code="executionType" /></td>
    <td><code>string</code></td>
    <td>Type of the pipeline execution. (STANDARD, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last change to the pipeline execution, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the pipeline execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackMetadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for the stage execution to be rolled back.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceRevisions" /></td>
    <td><code>array</code></td>
    <td>A list of the source artifact revisions that initiated a pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the pipeline execution began, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the pipeline execution. InProgress: The pipeline execution is currently running. Stopped: The pipeline execution was manually stopped. For more information, see Stopped Executions. Stopping: The pipeline execution received a request to be manually stopped. Depending on the selected stop mode, the execution is either completing or abandoning in-progress actions. For more information, see Stopped Executions. Succeeded: The pipeline execution was completed successfully. Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. For more information, see Superseded Executions. Failed: The pipeline execution was not completed successfully. (Cancelled, InProgress, Stopped, Stopping, Succeeded, Superseded, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusSummary" /></td>
    <td><code>string</code></td>
    <td>Status summary for the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="stopTrigger" /></td>
    <td><code>object</code></td>
    <td>The interaction that stopped a pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger" /></td>
    <td><code>object</code></td>
    <td>The interaction or event that started a pipeline execution.</td>
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
    <td><a href="#get_pipeline_execution"><CopyableCode code="get_pipeline_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.</td>
</tr>
<tr>
    <td><a href="#list_pipeline_executions"><CopyableCode code="list_pipeline_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a summary of the most recent executions for a pipeline. When applying the filter for pipeline executions that have succeeded in the stage, the operation returns all executions in the current pipeline version beginning on February 1, 2024.</td>
</tr>
<tr>
    <td><a href="#override_stage_condition"><CopyableCode code="override_stage_condition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-pipelineExecutionId"><code>pipelineExecutionId</code></a>, <a href="#parameter-conditionType"><code>conditionType</code></a></td>
    <td></td>
    <td>Used to override a stage condition. For more information about conditions, see Stage conditions and How do stage conditions work?.</td>
</tr>
<tr>
    <td><a href="#retry_stage_execution"><CopyableCode code="retry_stage_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-pipelineExecutionId"><code>pipelineExecutionId</code></a>, <a href="#parameter-retryMode"><code>retryMode</code></a></td>
    <td></td>
    <td>You can retry a stage that has failed without having to run a pipeline again from the beginning. You do this by either retrying the failed actions in a stage or by retrying all actions in the stage starting from the first action in the stage. When you retry the failed actions in a stage, all actions that are still in progress continue working, and failed actions are triggered again. When you retry a failed stage from the first action in the stage, the stage cannot have any actions in progress. Before a stage can be retried, it must either have all actions failed or some actions failed and some succeeded.</td>
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
    defaultValue="get_pipeline_execution"
    values={[
        { label: 'get_pipeline_execution', value: 'get_pipeline_execution' },
        { label: 'list_pipeline_executions', value: 'list_pipeline_executions' }
    ]}
>
<TabItem value="get_pipeline_execution">

Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.

```sql
SELECT
artifactRevisions,
executionMode,
executionType,
pipelineExecutionId,
pipelineName,
pipelineVersion,
rollbackMetadata,
status,
statusSummary,
trigger,
variables
FROM aws.codepipeline.pipeline_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipeline_executions">

Gets a summary of the most recent executions for a pipeline. When applying the filter for pipeline executions that have succeeded in the stage, the operation returns all executions in the current pipeline version beginning on February 1, 2024.

```sql
SELECT
executionMode,
executionType,
lastUpdateTime,
pipelineExecutionId,
rollbackMetadata,
sourceRevisions,
startTime,
status,
statusSummary,
stopTrigger,
trigger
FROM aws.codepipeline.pipeline_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="override_stage_condition"
    values={[
        { label: 'override_stage_condition', value: 'override_stage_condition' },
        { label: 'retry_stage_execution', value: 'retry_stage_execution' }
    ]}
>
<TabItem value="override_stage_condition">

Used to override a stage condition. For more information about conditions, see Stage conditions and How do stage conditions work?.

```sql
EXEC aws.codepipeline.pipeline_executions.override_stage_condition 
@region='{{ region }}' --required 
@@json=
'{
"pipelineName": "{{ pipelineName }}", 
"stageName": "{{ stageName }}", 
"pipelineExecutionId": "{{ pipelineExecutionId }}", 
"conditionType": "{{ conditionType }}"
}'
;
```
</TabItem>
<TabItem value="retry_stage_execution">

You can retry a stage that has failed without having to run a pipeline again from the beginning. You do this by either retrying the failed actions in a stage or by retrying all actions in the stage starting from the first action in the stage. When you retry the failed actions in a stage, all actions that are still in progress continue working, and failed actions are triggered again. When you retry a failed stage from the first action in the stage, the stage cannot have any actions in progress. Before a stage can be retried, it must either have all actions failed or some actions failed and some succeeded.

```sql
EXEC aws.codepipeline.pipeline_executions.retry_stage_execution 
@region='{{ region }}' --required 
@@json=
'{
"pipelineName": "{{ pipelineName }}", 
"stageName": "{{ stageName }}", 
"pipelineExecutionId": "{{ pipelineExecutionId }}", 
"retryMode": "{{ retryMode }}"
}'
;
```
</TabItem>
</Tabs>
