--- 
title: workflow_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_executions
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

Creates, updates, deletes, gets or lists a <code>workflow_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.workflow_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_execution"
    values={[
        { label: 'get_workflow_execution', value: 'get_workflow_execution' },
        { label: 'list_workflow_executions', value: 'list_workflow_executions' }
    ]}
>
<TabItem value="get_workflow_execution">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the specified runtime instance of the workflow finished.</td>
</tr>
<tr>
    <td><CopyableCode code="image_build_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image resource build version that the specified runtime instance of the workflow created. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):image/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The output message from the specified runtime instance of the workflow, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="parallel_group" /></td>
    <td><code>string</code></td>
    <td>Test workflows are defined within named runtime groups. The parallel group is a named group that contains one or more test workflows. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9-_+#&#93;&#123;0,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the specified runtime instance of the workflow started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current runtime status for the specified runtime instance of the workflow. (PENDING, SKIPPED, RUNNING, COMPLETED, FAILED, ROLLBACK_IN_PROGRESS, ROLLBACK_COMPLETED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="total_step_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of steps in the specified runtime instance of the workflow that ran. This number should equal the sum of the step counts for steps that succeeded, were skipped, and failed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps_failed" /></td>
    <td><code>integer</code></td>
    <td>A runtime count for the number of steps that failed in the specified runtime instance of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps_skipped" /></td>
    <td><code>integer</code></td>
    <td>A runtime count for the number of steps that were skipped in the specified runtime instance of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps_succeeded" /></td>
    <td><code>integer</code></td>
    <td>A runtime count for the number of steps that ran successfully in the specified runtime instance of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of workflow that Image Builder ran for the specified runtime instance of the workflow. (BUILD, TEST, DISTRIBUTION)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_build_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines the specified runtime instance of the workflow. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):workflow/(build|test|distribution)/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow. (pattern: &lt;code&gt;^wf-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_executions">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when this runtime instance of the workflow finished.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The runtime output message from the workflow, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="parallel_group" /></td>
    <td><code>string</code></td>
    <td>The name of the test group that included the test workflow resource at runtime. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9-_+#&#93;&#123;0,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retried" /></td>
    <td><code>boolean</code></td>
    <td>Indicates retry status for this runtime instance of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the runtime instance of this workflow started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current runtime status for this workflow. (PENDING, SKIPPED, RUNNING, COMPLETED, FAILED, ROLLBACK_IN_PROGRESS, ROLLBACK_COMPLETED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="total_step_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of steps in the workflow. This should equal the sum of the step counts for steps that succeeded, were skipped, and failed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps_failed" /></td>
    <td><code>integer</code></td>
    <td>A runtime count for the number of steps in the workflow that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps_skipped" /></td>
    <td><code>integer</code></td>
    <td>A runtime count for the number of steps in the workflow that were skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps_succeeded" /></td>
    <td><code>integer</code></td>
    <td>A runtime count for the number of steps in the workflow that ran successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Indicates what type of workflow that Image Builder ran for this runtime instance of the workflow. (BUILD, TEST, DISTRIBUTION)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_build_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow resource build version that ran. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):workflow/(build|test|distribution)/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that Image Builder assigns to keep track of runtime resources each time it runs a workflow. (pattern: &lt;code&gt;^wf-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_workflow_execution"><CopyableCode code="get_workflow_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflowExecutionId"><code>workflowExecutionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the runtime information that was logged for a specific runtime instance of the workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflow_executions"><CopyableCode code="list_workflow_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of workflow runtime instance metadata objects for a specific image build version.</td>
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
<tr id="parameter-workflowExecutionId">
    <td><CopyableCode code="workflowExecutionId" /></td>
    <td><code>string</code></td>
    <td>Use the unique identifier for a runtime instance of the workflow to get runtime details.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_execution"
    values={[
        { label: 'get_workflow_execution', value: 'get_workflow_execution' },
        { label: 'list_workflow_executions', value: 'list_workflow_executions' }
    ]}
>
<TabItem value="get_workflow_execution">

Get the runtime information that was logged for a specific runtime instance of the workflow.

```sql
SELECT
end_time,
image_build_version_arn,
message,
parallel_group,
request_id,
start_time,
status,
total_step_count,
total_steps_failed,
total_steps_skipped,
total_steps_succeeded,
type_,
workflow_build_version_arn,
workflow_execution_id
FROM aws.imagebuilder.workflow_executions
WHERE workflowExecutionId = '{{ workflowExecutionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_executions">

Returns a list of workflow runtime instance metadata objects for a specific image build version.

```sql
SELECT
end_time,
message,
parallel_group,
retried,
start_time,
status,
total_step_count,
total_steps_failed,
total_steps_skipped,
total_steps_succeeded,
type_,
workflow_build_version_arn,
workflow_execution_id
FROM aws.imagebuilder.workflow_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
