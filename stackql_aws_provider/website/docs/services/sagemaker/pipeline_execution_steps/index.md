--- 
title: pipeline_execution_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_execution_steps
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

Creates, updates, deletes, gets or lists a <code>pipeline_execution_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_execution_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.pipeline_execution_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pipeline_execution_steps"
    values={[
        { label: 'list_pipeline_execution_steps', value: 'list_pipeline_execution_steps' }
    ]}
>
<TabItem value="list_pipeline_execution_steps">

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
    <td><CopyableCode code="AttemptCount" /></td>
    <td><code>integer</code></td>
    <td>The current attempt of the execution step. For more information, see Retry Policy for SageMaker Pipelines steps.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheHitResult" /></td>
    <td><code>object</code></td>
    <td>If this pipeline execution step was cached, details on the cache hit.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the step stopped executing.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why the step failed execution. This is only returned if the step failed its execution.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata to run the pipeline step.</td>
</tr>
<tr>
    <td><CopyableCode code="SelectiveExecutionResult" /></td>
    <td><code>object</code></td>
    <td>The ARN from an execution of the current pipeline from which results are reused for this step.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the step started executing.</td>
</tr>
<tr>
    <td><CopyableCode code="StepDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the step. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StepDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the step. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StepName" /></td>
    <td><code>string</code></td>
    <td>The name of the step that is executed. (pattern: &lt;code&gt;&#91;A-Za-z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StepStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the step execution. (Starting, Executing, Stopping, Stopped, Failed, Succeeded)</td>
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
    <td><a href="#list_pipeline_execution_steps"><CopyableCode code="list_pipeline_execution_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of PipeLineExecutionStep objects.</td>
</tr>
<tr>
    <td><a href="#send_pipeline_execution_step_failure"><CopyableCode code="send_pipeline_execution_step_failure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallbackToken"><code>CallbackToken</code></a></td>
    <td></td>
    <td>Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</td>
</tr>
<tr>
    <td><a href="#send_pipeline_execution_step_success"><CopyableCode code="send_pipeline_execution_step_success" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallbackToken"><code>CallbackToken</code></a></td>
    <td></td>
    <td>Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).</td>
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
    defaultValue="list_pipeline_execution_steps"
    values={[
        { label: 'list_pipeline_execution_steps', value: 'list_pipeline_execution_steps' }
    ]}
>
<TabItem value="list_pipeline_execution_steps">

Gets a list of PipeLineExecutionStep objects.

```sql
SELECT
AttemptCount,
CacheHitResult,
EndTime,
FailureReason,
Metadata,
SelectiveExecutionResult,
StartTime,
StepDescription,
StepDisplayName,
StepName,
StepStatus
FROM aws.sagemaker.pipeline_execution_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_pipeline_execution_step_failure"
    values={[
        { label: 'send_pipeline_execution_step_failure', value: 'send_pipeline_execution_step_failure' },
        { label: 'send_pipeline_execution_step_success', value: 'send_pipeline_execution_step_success' }
    ]}
>
<TabItem value="send_pipeline_execution_step_failure">

Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).

```sql
EXEC aws.sagemaker.pipeline_execution_steps.send_pipeline_execution_step_failure 
@region='{{ region }}' --required 
@@json=
'{
"CallbackToken": "{{ CallbackToken }}", 
"FailureReason": "{{ FailureReason }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
<TabItem value="send_pipeline_execution_step_success">

Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).

```sql
EXEC aws.sagemaker.pipeline_execution_steps.send_pipeline_execution_step_success 
@region='{{ region }}' --required 
@@json=
'{
"CallbackToken": "{{ CallbackToken }}", 
"OutputParameters": "{{ OutputParameters }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
