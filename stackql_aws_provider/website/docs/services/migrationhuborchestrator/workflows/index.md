--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="ads_application_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The configuration ID of the application configured in Application Discovery Service.</td>
</tr>
<tr>
    <td><CopyableCode code="ads_application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application configured in Application Discovery Service.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_steps" /></td>
    <td><code>integer</code></td>
    <td>Get a list of completed steps in the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow ended.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow was last started.</td>
</tr>
<tr>
    <td><CopyableCode code="last_stop_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow was last stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the migration workflow. (CREATING, NOT_STARTED, CREATION_FAILED, STARTING, IN_PROGRESS, WORKFLOW_FAILED, PAUSED, PAUSING, PAUSING_FAILED, USER_ATTENTION_REQUIRED, DELETING, DELETION_FAILED, DELETED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags added to the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>List of AWS services utilized in a migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps" /></td>
    <td><code>integer</code></td>
    <td>The total number of steps in the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_bucket" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket where the migration logs are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_inputs" /></td>
    <td><code>object</code></td>
    <td>The inputs required for creating the migration workflow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflows">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="ads_application_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application configured in Application Discovery Service.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_steps" /></td>
    <td><code>integer</code></td>
    <td>The steps completed in the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the migration workflow ended.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the migration workflow. (CREATING, NOT_STARTED, CREATION_FAILED, STARTING, IN_PROGRESS, WORKFLOW_FAILED, PAUSED, PAUSING, PAUSING_FAILED, USER_ATTENTION_REQUIRED, DELETING, DELETION_FAILED, DELETED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="total_steps" /></td>
    <td><code>integer</code></td>
    <td>All the steps in a migration workflow.</td>
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
    <td><a href="#get_workflow"><CopyableCode code="get_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get migration workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-templateId"><code>templateId</code></a>, <a href="#parameter-adsApplicationConfigurationName"><code>adsApplicationConfigurationName</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>List the migration workflows.</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-templateId"><code>templateId</code></a>, <a href="#parameter-inputParameters"><code>inputParameters</code></a></td>
    <td></td>
    <td>Create a workflow to orchestrate your migrations.</td>
</tr>
<tr>
    <td><a href="#update_workflow"><CopyableCode code="update_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a migration workflow.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.</td>
</tr>
<tr>
    <td><a href="#retry_workflow_step"><CopyableCode code="retry_workflow_step" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retry a failed step in a migration workflow.</td>
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
    <td>The ID of the step.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stepGroupId">
    <td><CopyableCode code="stepGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group.</td>
</tr>
<tr id="parameter-workflowId">
    <td><CopyableCode code="workflowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow.</td>
</tr>
<tr id="parameter-adsApplicationConfigurationName">
    <td><CopyableCode code="adsApplicationConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application configured in Application Discovery Service.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that can be returned.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the migration workflow.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the migration workflow.</td>
</tr>
<tr id="parameter-templateId">
    <td><CopyableCode code="templateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

Get migration workflow.

```sql
SELECT
id,
name,
ads_application_configuration_id,
ads_application_name,
arn,
completed_steps,
creation_time,
description,
end_time,
last_modified_time,
last_start_time,
last_stop_time,
status,
status_message,
tags,
template_id,
tools,
total_steps,
workflow_bucket,
workflow_inputs
FROM aws.migrationhuborchestrator.workflows
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows">

List the migration workflows.

```sql
SELECT
id,
name,
ads_application_configuration_name,
completed_steps,
creation_time,
end_time,
status,
status_message,
template_id,
total_steps
FROM aws.migrationhuborchestrator.workflows
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND templateId = '{{ templateId }}'
AND adsApplicationConfigurationName = '{{ adsApplicationConfigurationName }}'
AND status = '{{ status }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow"
    values={[
        { label: 'create_workflow', value: 'create_workflow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow">

Create a workflow to orchestrate your migrations.

```sql
INSERT INTO aws.migrationhuborchestrator.workflows (
name,
description,
templateId,
applicationConfigurationId,
inputParameters,
stepTargets,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ templateId }}' /* required */,
'{{ applicationConfigurationId }}',
'{{ inputParameters }}' /* required */,
'{{ stepTargets }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
ads_application_configuration_id,
arn,
creation_time,
description,
status,
step_targets,
tags,
template_id,
workflow_inputs
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflows resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: templateId
      value: "{{ templateId }}"
    - name: applicationConfigurationId
      value: "{{ applicationConfigurationId }}"
    - name: inputParameters
      value: "{{ inputParameters }}"
    - name: stepTargets
      value:
        - "{{ stepTargets }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow"
    values={[
        { label: 'update_workflow', value: 'update_workflow' }
    ]}
>
<TabItem value="update_workflow">

Update a migration workflow.

```sql
UPDATE aws.migrationhuborchestrator.workflows
SET 
name = '{{ name }}',
description = '{{ description }}',
inputParameters = '{{ inputParameters }}',
stepTargets = '{{ stepTargets }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
ads_application_configuration_id,
arn,
creation_time,
description,
last_modified_time,
status,
step_targets,
tags,
template_id,
workflow_inputs;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow"
    values={[
        { label: 'delete_workflow', value: 'delete_workflow' }
    ]}
>
<TabItem value="delete_workflow">

Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.

```sql
DELETE FROM aws.migrationhuborchestrator.workflows
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="retry_workflow_step"
    values={[
        { label: 'retry_workflow_step', value: 'retry_workflow_step' }
    ]}
>
<TabItem value="retry_workflow_step">

Retry a failed step in a migration workflow.

```sql
EXEC aws.migrationhuborchestrator.workflows.retry_workflow_step 
@workflowId='{{ workflowId }}' --required, 
@stepGroupId='{{ stepGroupId }}' --required, 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
