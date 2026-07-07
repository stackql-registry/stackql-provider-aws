--- 
title: workflow_step_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_step_executions
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>workflow_step_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_step_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.workflow_step_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_step_execution"
    values={[
        { label: 'get_workflow_step_execution', value: 'get_workflow_step_execution' },
        { label: 'list_workflow_step_executions', value: 'list_workflow_step_executions' }
    ]}
>
<TabItem value="get_workflow_step_execution">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the specified runtime instance of the workflow step. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;&#91;A-Za-z0-9-_&#93;&#123;1,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The name of the action that the specified step performs. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;&#91;A-Za-z0-9-_&#93;&#123;1,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Describes the specified workflow step.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the specified runtime instance of the workflow step finished.</td>
</tr>
<tr>
    <td><CopyableCode code="imageBuildVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image resource build version that the specified runtime instance of the workflow step creates. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):image/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>string</code></td>
    <td>Input parameters that Image Builder provided for the specified runtime instance of the workflow step.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The output message from the specified runtime instance of the workflow step, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="onFailure" /></td>
    <td><code>string</code></td>
    <td>The action to perform if the workflow step fails.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>string</code></td>
    <td>The file names that the specified runtime version of the workflow step created as output.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackStatus" /></td>
    <td><code>string</code></td>
    <td>Reports on the rollback status of the specified runtime version of the workflow step, if applicable. (RUNNING, COMPLETED, SKIPPED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the specified runtime version of the workflow step started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status for the specified runtime version of the workflow step. (PENDING, SKIPPED, RUNNING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="stepExecutionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the runtime version of the workflow step that you specified in the request. (pattern: &lt;code&gt;^step-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum duration in seconds for this step to complete its action.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowBuildVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines this workflow step. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):workflow/(build|test|distribution)/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowExecutionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow. (pattern: &lt;code&gt;^wf-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_step_executions">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow step. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;&#91;A-Za-z0-9-_&#93;&#123;1,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The step action name. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;&#91;A-Za-z0-9-_&#93;&#123;1,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the workflow step.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the workflow step finished.</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>string</code></td>
    <td>Input parameters that Image Builder provides for the workflow step.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Detailed output message that the workflow step provides at runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>string</code></td>
    <td>The file names that the workflow step created as output for this runtime instance of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackStatus" /></td>
    <td><code>string</code></td>
    <td>Reports on the rollback status of the step, if applicable. (RUNNING, COMPLETED, SKIPPED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the workflow step started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Runtime status for the workflow step. (PENDING, SKIPPED, RUNNING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="stepExecutionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the workflow step, assigned at runtime. (pattern: &lt;code&gt;^step-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_workflow_step_execution"><CopyableCode code="get_workflow_step_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-stepExecutionId"><code>stepExecutionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the runtime information that was logged for a specific runtime instance of the workflow step.</td>
</tr>
<tr>
    <td><a href="#list_workflow_step_executions"><CopyableCode code="list_workflow_step_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns runtime data for each step in a runtime instance of the workflow that you specify in the request.</td>
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
<tr id="parameter-stepExecutionId">
    <td><CopyableCode code="stepExecutionId" /></td>
    <td><code>string</code></td>
    <td>Use the unique identifier for a specific runtime instance of the workflow step to get runtime details for that step.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_step_execution"
    values={[
        { label: 'get_workflow_step_execution', value: 'get_workflow_step_execution' },
        { label: 'list_workflow_step_executions', value: 'list_workflow_step_executions' }
    ]}
>
<TabItem value="get_workflow_step_execution">

Get the runtime information that was logged for a specific runtime instance of the workflow step.

```sql
SELECT
name,
action,
description,
endTime,
imageBuildVersionArn,
inputs,
message,
onFailure,
outputs,
requestId,
rollbackStatus,
startTime,
status,
stepExecutionId,
timeoutSeconds,
workflowBuildVersionArn,
workflowExecutionId
FROM aws.imagebuilder.workflow_step_executions
WHERE stepExecutionId = '{{ stepExecutionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_step_executions">

Returns runtime data for each step in a runtime instance of the workflow that you specify in the request.

```sql
SELECT
name,
action,
description,
endTime,
inputs,
message,
outputs,
rollbackStatus,
startTime,
status,
stepExecutionId
FROM aws.imagebuilder.workflow_step_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
