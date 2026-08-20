--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - iotsitewise
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.pipelines" /></td></tr>
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
    <td><CopyableCode code="computations" /></td>
    <td><code>array</code></td>
    <td>A list of compute nodes forming a pipeline DAG.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipeline was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>The environment variables shared across all compute nodes in the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the pipeline. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>Reusable resource name with alphanumeric, hyphen, and underscore characters. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current lifecycle status of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipeline was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the pipeline. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipeline was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the pipeline. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the pipeline. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>Reusable resource name with alphanumeric, hyphen, and underscore characters. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current lifecycle status of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipeline was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the pipeline. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves detailed information about a specific pipeline in a workspace.</td>
</tr>
<tr>
    <td><a href="#list_pipelines"><CopyableCode code="list_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists pipelines in a workspace. To get complete details about a pipeline, use DescribePipeline.</td>
</tr>
<tr>
    <td><a href="#create_pipeline"><CopyableCode code="create_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-computations"><code>computations</code></a></td>
    <td></td>
    <td>Creates a new pipeline in the specified workspace. A pipeline defines a directed acyclic graph (DAG) of compute nodes, where each node references a task and can declare dependencies on other nodes. Cyclic dependencies are not allowed. Nodes without dependencies run in parallel, while nodes with dependencies wait for all upstream nodes to complete successfully before starting. You can set environment variables at the pipeline level that are shared across all compute nodes, and override them at the individual compute node level.</td>
</tr>
<tr>
    <td><a href="#update_pipeline"><CopyableCode code="update_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing pipeline in the specified workspace. Only the fields provided in the request are updated; fields not included in the request are preserved unchanged. You can update the pipeline description, environment variables, and the list of compute nodes independently.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline"><CopyableCode code="delete_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a pipeline from the specified workspace. A pipeline cannot be deleted if it has any active executions. Wait for all executions to complete before attempting to delete the pipeline, or use CancelPipelineExecution to stop a running execution.</td>
</tr>
<tr>
    <td><a href="#cancel_pipeline_execution"><CopyableCode code="cancel_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-pipeline_execution_id"><code>pipeline_execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a pipeline execution in the specified workspace. If the execution is not in a terminal state (such as NOT_STARTED or RUNNING), it transitions to CANCELLING and asynchronously to CANCELLED. This operation is idempotent: calling it on an execution that is already CANCELLING or CANCELLED returns success with the current state. Calling it on a terminal execution (SUCCEEDED or FAILED) returns a conflict error. You can optionally provide a reason; it is returned in the stateDetails field when you describe the execution.</td>
</tr>
<tr>
    <td><a href="#start_pipeline_execution"><CopyableCode code="start_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts execution of a pipeline in the specified workspace. Each compute node runs according to the DAG dependency order defined in the pipeline. Nodes without dependencies start immediately, while dependent nodes wait for all upstream nodes to complete successfully. You can provide runtime environment variable overrides that take the highest priority in the environment variable hierarchy, without modifying the pipeline definition.</td>
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
<tr id="parameter-pipeline_execution_id">
    <td><CopyableCode code="pipeline_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pipeline execution.</td>
</tr>
<tr id="parameter-pipeline_name">
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline to execute.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace containing the pipeline.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the pipeline to retrieve. If not specified, returns the latest version.</td>
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

Retrieves detailed information about a specific pipeline in a workspace.

```sql
SELECT
computations,
created_at,
description,
environment_variables,
pipeline_arn,
pipeline_name,
status,
updated_at,
version,
workspace_name
FROM aws.iotsitewise.pipelines
WHERE workspace_name = '{{ workspace_name }}' -- required
AND pipeline_name = '{{ pipeline_name }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_pipelines">

Lists pipelines in a workspace. To get complete details about a pipeline, use DescribePipeline.

```sql
SELECT
created_at,
description,
pipeline_arn,
pipeline_name,
status,
updated_at,
version
FROM aws.iotsitewise.pipelines
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a new pipeline in the specified workspace. A pipeline defines a directed acyclic graph (DAG) of compute nodes, where each node references a task and can declare dependencies on other nodes. Cyclic dependencies are not allowed. Nodes without dependencies run in parallel, while nodes with dependencies wait for all upstream nodes to complete successfully before starting. You can set environment variables at the pipeline level that are shared across all compute nodes, and override them at the individual compute node level.

```sql
INSERT INTO aws.iotsitewise.pipelines (
pipelineName,
description,
environmentVariables,
computations,
tags,
clientToken,
workspace_name,
region
)
SELECT 
'{{ pipelineName }}' /* required */,
'{{ description }}',
'{{ environmentVariables }}',
'{{ computations }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ workspace_name }}',
'{{ region }}'
RETURNING
pipeline_arn,
pipeline_name,
status,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipelines
  props:
    - name: workspace_name
      value: "{{ workspace_name }}"
      description: Required parameter for the pipelines resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pipelines resource.
    - name: pipelineName
      value: "{{ pipelineName }}"
      description: |
        Reusable resource name with alphanumeric, hyphen, and underscore characters.
    - name: description
      value: "{{ description }}"
    - name: environmentVariables
      value: "{{ environmentVariables }}"
      description: |
        Map of environment variables for container configuration
    - name: computations
      description: |
        A list of compute nodes forming a pipeline DAG.
      value:
        - computeNodeName: "{{ computeNodeName }}"
          taskName: "{{ taskName }}"
          environmentVariables: "{{ environmentVariables }}"
          dependsOn: "{{ dependsOn }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
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

Updates an existing pipeline in the specified workspace. Only the fields provided in the request are updated; fields not included in the request are preserved unchanged. You can update the pipeline description, environment variables, and the list of compute nodes independently.

```sql
UPDATE aws.iotsitewise.pipelines
SET 
description = '{{ description }}',
environmentVariables = '{{ environmentVariables }}',
computations = '{{ computations }}'
WHERE 
workspace_name = '{{ workspace_name }}' --required
AND pipeline_name = '{{ pipeline_name }}' --required
AND region = '{{ region }}' --required
RETURNING
status,
version;
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

Deletes a pipeline from the specified workspace. A pipeline cannot be deleted if it has any active executions. Wait for all executions to complete before attempting to delete the pipeline, or use CancelPipelineExecution to stop a running execution.

```sql
DELETE FROM aws.iotsitewise.pipelines
WHERE workspace_name = '{{ workspace_name }}' --required
AND pipeline_name = '{{ pipeline_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_pipeline_execution"
    values={[
        { label: 'cancel_pipeline_execution', value: 'cancel_pipeline_execution' },
        { label: 'start_pipeline_execution', value: 'start_pipeline_execution' }
    ]}
>
<TabItem value="cancel_pipeline_execution">

Cancels a pipeline execution in the specified workspace. If the execution is not in a terminal state (such as NOT_STARTED or RUNNING), it transitions to CANCELLING and asynchronously to CANCELLED. This operation is idempotent: calling it on an execution that is already CANCELLING or CANCELLED returns success with the current state. Calling it on a terminal execution (SUCCEEDED or FAILED) returns a conflict error. You can optionally provide a reason; it is returned in the stateDetails field when you describe the execution.

```sql
EXEC aws.iotsitewise.pipelines.cancel_pipeline_execution 
@workspace_name='{{ workspace_name }}' --required, 
@pipeline_name='{{ pipeline_name }}' --required, 
@pipeline_execution_id='{{ pipeline_execution_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="start_pipeline_execution">

Starts execution of a pipeline in the specified workspace. Each compute node runs according to the DAG dependency order defined in the pipeline. Nodes without dependencies start immediately, while dependent nodes wait for all upstream nodes to complete successfully. You can provide runtime environment variable overrides that take the highest priority in the environment variable hierarchy, without modifying the pipeline definition.

```sql
EXEC aws.iotsitewise.pipelines.start_pipeline_execution 
@workspace_name='{{ workspace_name }}' --required, 
@pipeline_name='{{ pipeline_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"executionEnvironmentVariableOverrides": "{{ executionEnvironmentVariableOverrides }}", 
"executionPriority": {{ executionPriority }}, 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
