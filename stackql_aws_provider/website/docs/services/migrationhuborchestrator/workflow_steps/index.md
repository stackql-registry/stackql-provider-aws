--- 
title: workflow_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_steps
  - migrationhuborchestrator
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

Creates, updates, deletes, gets or lists a <code>workflow_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.workflow_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_step"
    values={[
        { label: 'get_workflow_step', value: 'get_workflow_step' },
        { label: 'list_workflow_steps', value: 'list_workflow_steps' }
    ]}
>
<TabItem value="get_workflow_step">

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
    <td>The name of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step ended.</td>
</tr>
<tr>
    <td><CopyableCode code="last_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the workflow was last started.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step.</td>
</tr>
<tr>
    <td><CopyableCode code="no_of_srv_completed" /></td>
    <td><code>integer</code></td>
    <td>The number of servers that have been migrated.</td>
</tr>
<tr>
    <td><CopyableCode code="no_of_srv_failed" /></td>
    <td><code>integer</code></td>
    <td>The number of servers that have failed to migrate.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>array</code></td>
    <td>The outputs of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the step. (AWS_MANAGED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step.</td>
</tr>
<tr>
    <td><CopyableCode code="script_output_location" /></td>
    <td><code>string</code></td>
    <td>The output location of the script.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the step. (AWAITING_DEPENDENCIES, SKIPPED, READY, IN_PROGRESS, COMPLETED, FAILED, PAUSED, USER_ATTENTION_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="step_action_type" /></td>
    <td><code>string</code></td>
    <td>The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step. (MANUAL, AUTOMATED)</td>
</tr>
<tr>
    <td><CopyableCode code="step_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="step_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="step_target" /></td>
    <td><code>array</code></td>
    <td>The servers on which a step will be run.</td>
</tr>
<tr>
    <td><CopyableCode code="total_no_of_srv" /></td>
    <td><code>integer</code></td>
    <td>The total number of servers that have been migrated.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_step_automation_configuration" /></td>
    <td><code>object</code></td>
    <td>The custom script to run tests on source or target environments.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_steps">

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
    <td>The name of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step.</td>
</tr>
<tr>
    <td><CopyableCode code="no_of_srv_completed" /></td>
    <td><code>integer</code></td>
    <td>The number of servers that have been migrated.</td>
</tr>
<tr>
    <td><CopyableCode code="no_of_srv_failed" /></td>
    <td><code>integer</code></td>
    <td>The number of servers that have failed to migrate.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the step. (AWS_MANAGED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step.</td>
</tr>
<tr>
    <td><CopyableCode code="script_location" /></td>
    <td><code>string</code></td>
    <td>The location of the script.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the step. (AWAITING_DEPENDENCIES, SKIPPED, READY, IN_PROGRESS, COMPLETED, FAILED, PAUSED, USER_ATTENTION_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="step_action_type" /></td>
    <td><code>string</code></td>
    <td>The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step. (MANUAL, AUTOMATED)</td>
</tr>
<tr>
    <td><CopyableCode code="step_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="total_no_of_srv" /></td>
    <td><code>integer</code></td>
    <td>The total number of servers that have been migrated.</td>
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
    <td><a href="#get_workflow_step"><CopyableCode code="get_workflow_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a step in the migration workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflow_steps"><CopyableCode code="list_workflow_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-step_group_id"><code>step_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the steps in a workflow.</td>
</tr>
<tr>
    <td><a href="#create_workflow_step"><CopyableCode code="create_workflow_step" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-stepActionType"><code>stepActionType</code></a></td>
    <td></td>
    <td>Create a step in the migration workflow.</td>
</tr>
<tr>
    <td><a href="#update_workflow_step"><CopyableCode code="update_workflow_step" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a></td>
    <td></td>
    <td>Update a step in a migration workflow.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_step"><CopyableCode code="delete_workflow_step" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a step in a migration workflow. Pause the workflow to delete a running step.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the step you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stepGroupId">
    <td><CopyableCode code="stepGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group that contains the step you want to delete.</td>
</tr>
<tr id="parameter-step_group_id">
    <td><CopyableCode code="step_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group.</td>
</tr>
<tr id="parameter-workflowId">
    <td><CopyableCode code="workflowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow.</td>
</tr>
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that can be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_step"
    values={[
        { label: 'get_workflow_step', value: 'get_workflow_step' },
        { label: 'list_workflow_steps', value: 'list_workflow_steps' }
    ]}
>
<TabItem value="get_workflow_step">

Get a step in the migration workflow.

```sql
SELECT
name,
creation_time,
description,
end_time,
last_start_time,
next,
no_of_srv_completed,
no_of_srv_failed,
outputs,
owner,
previous,
script_output_location,
status,
status_message,
step_action_type,
step_group_id,
step_id,
step_target,
total_no_of_srv,
workflow_id,
workflow_step_automation_configuration
FROM aws.migrationhuborchestrator.workflow_steps
WHERE workflowId = '{{ workflowId }}' -- required
AND stepGroupId = '{{ stepGroupId }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_steps">

List the steps in a workflow.

```sql
SELECT
name,
description,
next,
no_of_srv_completed,
no_of_srv_failed,
owner,
previous,
script_location,
status,
status_message,
step_action_type,
step_id,
total_no_of_srv
FROM aws.migrationhuborchestrator.workflow_steps
WHERE workflow_id = '{{ workflow_id }}' -- required
AND step_group_id = '{{ step_group_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_step"
    values={[
        { label: 'create_workflow_step', value: 'create_workflow_step' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_step">

Create a step in the migration workflow.

```sql
INSERT INTO aws.migrationhuborchestrator.workflow_steps (
name,
stepGroupId,
workflowId,
stepActionType,
description,
workflowStepAutomationConfiguration,
stepTarget,
outputs,
previous,
next,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ stepGroupId }}' /* required */,
'{{ workflowId }}' /* required */,
'{{ stepActionType }}' /* required */,
'{{ description }}',
'{{ workflowStepAutomationConfiguration }}',
'{{ stepTarget }}',
'{{ outputs }}',
'{{ previous }}',
'{{ next }}',
'{{ region }}'
RETURNING
id,
name,
step_group_id,
workflow_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_steps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflow_steps resource.
    - name: name
      value: "{{ name }}"
    - name: stepGroupId
      value: "{{ stepGroupId }}"
    - name: workflowId
      value: "{{ workflowId }}"
    - name: stepActionType
      value: "{{ stepActionType }}"
      valid_values: ['MANUAL', 'AUTOMATED']
    - name: description
      value: "{{ description }}"
    - name: workflowStepAutomationConfiguration
      description: |
        The custom script to run tests on source or target environments.
      value:
        scriptLocationS3Bucket: "{{ scriptLocationS3Bucket }}"
        scriptLocationS3Key:
          linux: "{{ linux }}"
          windows: "{{ windows }}"
        command:
          linux: "{{ linux }}"
          windows: "{{ windows }}"
        runEnvironment: "{{ runEnvironment }}"
        targetType: "{{ targetType }}"
    - name: stepTarget
      value:
        - "{{ stepTarget }}"
    - name: outputs
      value:
        - name: "{{ name }}"
          dataType: "{{ dataType }}"
          required_: {{ required_ }}
          value:
            integerValue: {{ integerValue }}
            stringValue: "{{ stringValue }}"
            listOfStringValue:
              - "{{ listOfStringValue }}"
    - name: previous
      value:
        - "{{ previous }}"
    - name: next
      value:
        - "{{ next }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow_step"
    values={[
        { label: 'update_workflow_step', value: 'update_workflow_step' }
    ]}
>
<TabItem value="update_workflow_step">

Update a step in a migration workflow.

```sql
UPDATE aws.migrationhuborchestrator.workflow_steps
SET 
stepGroupId = '{{ stepGroupId }}',
workflowId = '{{ workflowId }}',
name = '{{ name }}',
description = '{{ description }}',
stepActionType = '{{ stepActionType }}',
workflowStepAutomationConfiguration = '{{ workflowStepAutomationConfiguration }}',
stepTarget = '{{ stepTarget }}',
outputs = '{{ outputs }}',
previous = '{{ previous }}',
next = '{{ next }}',
status = '{{ status }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND stepGroupId = '{{ stepGroupId }}' --required
AND workflowId = '{{ workflowId }}' --required
RETURNING
id,
name,
step_group_id,
workflow_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_step"
    values={[
        { label: 'delete_workflow_step', value: 'delete_workflow_step' }
    ]}
>
<TabItem value="delete_workflow_step">

Delete a step in a migration workflow. Pause the workflow to delete a running step.

```sql
DELETE FROM aws.migrationhuborchestrator.workflow_steps
WHERE id = '{{ id }}' --required
AND stepGroupId = '{{ stepGroupId }}' --required
AND workflowId = '{{ workflowId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
