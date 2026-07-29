--- 
title: workflow_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_runs
  - nova_act
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

Creates, updates, deletes, gets or lists a <code>workflow_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.nova_act.workflow_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_run"
    values={[
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'list_workflow_runs', value: 'list_workflow_runs' }
    ]}
>
<TabItem value="get_workflow_run">

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
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow run completed execution, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The CloudWatch log group name for this workflow run's logs. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AI model being used for this workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow run started execution.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current execution status of the workflow run. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_run_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow run. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):nova-act:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:workflow-definition/&#91;a-zA-Z0-9_-&#93;&#123;1,40&#125;/workflow-run/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_runs">

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
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow run completed execution, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow run started execution.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current execution status of the workflow run. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="trace_location" /></td>
    <td><code>object</code></td>
    <td>The location where trace information for this workflow run is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_run_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow run. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):nova-act:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:workflow-definition/&#91;a-zA-Z0-9_-&#93;&#123;1,40&#125;/workflow-run/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_workflow_run"><CopyableCode code="get_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current state, configuration, and execution details of a workflow run.</td>
</tr>
<tr>
    <td><a href="#list_workflow_runs"><CopyableCode code="list_workflow_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all workflow runs for a specific workflow definition with optional filtering and pagination.</td>
</tr>
<tr>
    <td><a href="#create_workflow_run"><CopyableCode code="create_workflow_run" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-clientInfo"><code>clientInfo</code></a></td>
    <td></td>
    <td>Creates a new execution instance of a workflow definition with specified parameters.</td>
</tr>
<tr>
    <td><a href="#update_workflow_run"><CopyableCode code="update_workflow_run" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the configuration or state of an active workflow run.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_run"><CopyableCode code="delete_workflow_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates and cleans up a workflow run, stopping all associated acts and sessions.</td>
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
<tr id="parameter-workflow_definition_name">
    <td><CopyableCode code="workflow_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow definition containing the workflow run.</td>
</tr>
<tr id="parameter-workflow_run_id">
    <td><CopyableCode code="workflow_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workflow runs to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_run"
    values={[
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'list_workflow_runs', value: 'list_workflow_runs' }
    ]}
>
<TabItem value="get_workflow_run">

Retrieves the current state, configuration, and execution details of a workflow run.

```sql
SELECT
ended_at,
log_group_name,
model_id,
started_at,
status,
workflow_run_arn,
workflow_run_id
FROM aws.nova_act.workflow_runs
WHERE workflow_definition_name = '{{ workflow_definition_name }}' -- required
AND workflow_run_id = '{{ workflow_run_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_runs">

Lists all workflow runs for a specific workflow definition with optional filtering and pagination.

```sql
SELECT
ended_at,
started_at,
status,
trace_location,
workflow_run_arn,
workflow_run_id
FROM aws.nova_act.workflow_runs
WHERE workflow_definition_name = '{{ workflow_definition_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_run"
    values={[
        { label: 'create_workflow_run', value: 'create_workflow_run' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_run">

Creates a new execution instance of a workflow definition with specified parameters.

```sql
INSERT INTO aws.nova_act.workflow_runs (
modelId,
clientToken,
logGroupName,
clientInfo,
workflow_definition_name,
region
)
SELECT 
'{{ modelId }}' /* required */,
'{{ clientToken }}',
'{{ logGroupName }}',
'{{ clientInfo }}' /* required */,
'{{ workflow_definition_name }}',
'{{ region }}'
RETURNING
status,
workflow_run_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_runs
  props:
    - name: workflow_definition_name
      value: "{{ workflow_definition_name }}"
      description: Required parameter for the workflow_runs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflow_runs resource.
    - name: modelId
      value: "{{ modelId }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: logGroupName
      value: "{{ logGroupName }}"
    - name: clientInfo
      description: |
        Information about the client making API requests, used for compatibility checking.
      value:
        compatibilityVersion: {{ compatibilityVersion }}
        sdkVersion: "{{ sdkVersion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow_run"
    values={[
        { label: 'update_workflow_run', value: 'update_workflow_run' }
    ]}
>
<TabItem value="update_workflow_run">

Updates the configuration or state of an active workflow run.

```sql
UPDATE aws.nova_act.workflow_runs
SET 
status = '{{ status }}'
WHERE 
workflow_definition_name = '{{ workflow_definition_name }}' --required
AND workflow_run_id = '{{ workflow_run_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_run"
    values={[
        { label: 'delete_workflow_run', value: 'delete_workflow_run' }
    ]}
>
<TabItem value="delete_workflow_run">

Terminates and cleans up a workflow run, stopping all associated acts and sessions.

```sql
DELETE FROM aws.nova_act.workflow_runs
WHERE workflow_definition_name = '{{ workflow_definition_name }}' --required
AND workflow_run_id = '{{ workflow_run_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
