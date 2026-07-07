--- 
title: acts
hide_title: false
hide_table_of_contents: false
keywords:
  - acts
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

Creates, updates, deletes, gets or lists an <code>acts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.nova_act.acts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_acts"
    values={[
        { label: 'list_acts', value: 'list_acts' }
    ]}
>
<TabItem value="list_acts">

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
    <td><CopyableCode code="actId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the act. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the act completed execution, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session containing this act. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the act started execution.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current execution status of the act. (RUNNING, PENDING_CLIENT_ACTION, PENDING_HUMAN_ACTION, SUCCEEDED, FAILED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="traceLocation" /></td>
    <td><code>object</code></td>
    <td>The location where trace information for this act is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowRunId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run containing this act. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_acts"><CopyableCode code="list_acts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workflowRunId"><code>workflowRunId</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all acts within a specific session with their current status and execution details.</td>
</tr>
<tr>
    <td><a href="#create_act"><CopyableCode code="create_act" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-task"><code>task</code></a></td>
    <td></td>
    <td>Creates a new AI task (act) within a session that can interact with tools and perform specific actions.</td>
</tr>
<tr>
    <td><a href="#update_act"><CopyableCode code="update_act" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-act_id"><code>act_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates an existing act's configuration, status, or error information.</td>
</tr>
<tr>
    <td><a href="#invoke_act_step"><CopyableCode code="invoke_act_step" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-act_id"><code>act_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-callResults"><code>callResults</code></a></td>
    <td></td>
    <td>Executes the next step of an act, processing tool call results and returning new tool calls if needed.</td>
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
<tr id="parameter-act_id">
    <td><CopyableCode code="act_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the act to invoke the next step for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session containing the act.</td>
</tr>
<tr id="parameter-workflow_definition_name">
    <td><CopyableCode code="workflow_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow definition containing the act.</td>
</tr>
<tr id="parameter-workflow_run_id">
    <td><CopyableCode code="workflow_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run containing the act.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of acts to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results.</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session to list acts for.</td>
</tr>
<tr id="parameter-workflowRunId">
    <td><CopyableCode code="workflowRunId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run containing the session.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_acts"
    values={[
        { label: 'list_acts', value: 'list_acts' }
    ]}
>
<TabItem value="list_acts">

Lists all acts within a specific session with their current status and execution details.

```sql
SELECT
actId,
endedAt,
sessionId,
startedAt,
status,
traceLocation,
workflowRunId
FROM aws.nova_act.acts
WHERE workflow_definition_name = '{{ workflow_definition_name }}' -- required
AND region = '{{ region }}' -- required
AND workflowRunId = '{{ workflowRunId }}'
AND sessionId = '{{ sessionId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_act"
    values={[
        { label: 'create_act', value: 'create_act' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_act">

Creates a new AI task (act) within a session that can interact with tools and perform specific actions.

```sql
INSERT INTO aws.nova_act.acts (
task,
toolSpecs,
clientToken,
workflow_definition_name,
workflow_run_id,
session_id,
region
)
SELECT 
'{{ task }}' /* required */,
'{{ toolSpecs }}',
'{{ clientToken }}',
'{{ workflow_definition_name }}',
'{{ workflow_run_id }}',
'{{ session_id }}',
'{{ region }}'
RETURNING
actId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acts
  props:
    - name: workflow_definition_name
      value: "{{ workflow_definition_name }}"
      description: Required parameter for the acts resource.
    - name: workflow_run_id
      value: "{{ workflow_run_id }}"
      description: Required parameter for the acts resource.
    - name: session_id
      value: "{{ session_id }}"
      description: Required parameter for the acts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the acts resource.
    - name: task
      value: "{{ task }}"
    - name: toolSpecs
      value:
        - name: "{{ name }}"
          description: "{{ description }}"
          inputSchema:
            json: "{{ json }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_act"
    values={[
        { label: 'update_act', value: 'update_act' }
    ]}
>
<TabItem value="update_act">

Updates an existing act's configuration, status, or error information.

```sql
UPDATE aws.nova_act.acts
SET 
status = '{{ status }}',
error = '{{ error }}'
WHERE 
workflow_definition_name = '{{ workflow_definition_name }}' --required
AND workflow_run_id = '{{ workflow_run_id }}' --required
AND session_id = '{{ session_id }}' --required
AND act_id = '{{ act_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invoke_act_step"
    values={[
        { label: 'invoke_act_step', value: 'invoke_act_step' }
    ]}
>
<TabItem value="invoke_act_step">

Executes the next step of an act, processing tool call results and returning new tool calls if needed.

```sql
EXEC aws.nova_act.acts.invoke_act_step 
@workflow_definition_name='{{ workflow_definition_name }}' --required, 
@workflow_run_id='{{ workflow_run_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@act_id='{{ act_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"callResults": "{{ callResults }}", 
"previousStepId": "{{ previousStepId }}"
}'
;
```
</TabItem>
</Tabs>
