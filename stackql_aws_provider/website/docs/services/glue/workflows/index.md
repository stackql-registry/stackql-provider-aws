--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - glue
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_workflows"
    values={[
        { label: 'batch_get_workflows', value: 'batch_get_workflows' },
        { label: 'get_workflow', value: 'get_workflow' }
    ]}
>
<TabItem value="batch_get_workflows">

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
    <td><CopyableCode code="MissingWorkflows" /></td>
    <td><code>array</code></td>
    <td>A list of names of workflows not found.</td>
</tr>
<tr>
    <td><CopyableCode code="Workflows" /></td>
    <td><code>array</code></td>
    <td>A list of workflow resource metadata.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="BlueprintDetails" /></td>
    <td><code>object</code></td>
    <td>This structure indicates the details of the blueprint that this particular workflow is created from.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultRunProperties" /></td>
    <td><code>object</code></td>
    <td>A collection of properties to be used as part of each execution of the workflow. The run properties are made available to each job in the workflow. A job can modify the properties for the next jobs in the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="Graph" /></td>
    <td><code>object</code></td>
    <td>The graph representing all the Glue components that belong to the workflow as nodes and directed connections between them as edges.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workflow was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LastRun" /></td>
    <td><code>object</code></td>
    <td>The information about the last execution of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxConcurrentRuns" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#batch_get_workflows"><CopyableCode code="batch_get_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resource metadata for a given list of workflow names. After calling the ListWorkflows operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</td>
</tr>
<tr>
    <td><a href="#get_workflow"><CopyableCode code="get_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves resource metadata for a workflow.</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new workflow.</td>
</tr>
<tr>
    <td><a href="#update_workflow"><CopyableCode code="update_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing workflow.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists names of workflows created in the account.</td>
</tr>
<tr>
    <td><a href="#resume_workflow_run"><CopyableCode code="resume_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RunId"><code>RunId</code></a>, <a href="#parameter-NodeIds"><code>NodeIds</code></a></td>
    <td></td>
    <td>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</td>
</tr>
<tr>
    <td><a href="#start_workflow_run"><CopyableCode code="start_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a new run of the specified workflow.</td>
</tr>
<tr>
    <td><a href="#stop_workflow_run"><CopyableCode code="stop_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RunId"><code>RunId</code></a></td>
    <td></td>
    <td>Stops the execution of the specified workflow run.</td>
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
    defaultValue="batch_get_workflows"
    values={[
        { label: 'batch_get_workflows', value: 'batch_get_workflows' },
        { label: 'get_workflow', value: 'get_workflow' }
    ]}
>
<TabItem value="batch_get_workflows">

Returns a list of resource metadata for a given list of workflow names. After calling the ListWorkflows operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

```sql
SELECT
MissingWorkflows,
Workflows
FROM aws.glue.workflows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_workflow">

Retrieves resource metadata for a workflow.

```sql
SELECT
BlueprintDetails,
CreatedOn,
DefaultRunProperties,
Description,
Graph,
LastModifiedOn,
LastRun,
MaxConcurrentRuns,
Name
FROM aws.glue.workflows
WHERE region = '{{ region }}' -- required
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

Creates a new workflow.

```sql
INSERT INTO aws.glue.workflows (
Name,
Description,
DefaultRunProperties,
Tags,
MaxConcurrentRuns,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ DefaultRunProperties }}',
'{{ Tags }}',
{{ MaxConcurrentRuns }},
'{{ region }}'
RETURNING
Name
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
    - name: Name
      value: "{{ Name }}"
      description: |
        The name to be assigned to the workflow. It should be unique within your account.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the workflow.
    - name: DefaultRunProperties
      value: "{{ DefaultRunProperties }}"
      description: |
        A collection of properties to be used as part of each execution of the workflow. Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to be used with this workflow.
    - name: MaxConcurrentRuns
      value: {{ MaxConcurrentRuns }}
      description: |
        You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
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

Updates an existing workflow.

```sql
UPDATE aws.glue.workflows
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
DefaultRunProperties = '{{ DefaultRunProperties }}',
MaxConcurrentRuns = {{ MaxConcurrentRuns }}
WHERE 
region = '{{ region }}' --required
RETURNING
Name;
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

Deletes a workflow.

```sql
DELETE FROM aws.glue.workflows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_workflows"
    values={[
        { label: 'list_workflows', value: 'list_workflows' },
        { label: 'resume_workflow_run', value: 'resume_workflow_run' },
        { label: 'start_workflow_run', value: 'start_workflow_run' },
        { label: 'stop_workflow_run', value: 'stop_workflow_run' }
    ]}
>
<TabItem value="list_workflows">

Lists names of workflows created in the account.

```sql
EXEC aws.glue.workflows.list_workflows 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="resume_workflow_run">

Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.

```sql
EXEC aws.glue.workflows.resume_workflow_run 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"RunId": "{{ RunId }}", 
"NodeIds": "{{ NodeIds }}"
}'
;
```
</TabItem>
<TabItem value="start_workflow_run">

Starts a new run of the specified workflow.

```sql
EXEC aws.glue.workflows.start_workflow_run 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"RunProperties": "{{ RunProperties }}"
}'
;
```
</TabItem>
<TabItem value="stop_workflow_run">

Stops the execution of the specified workflow run.

```sql
EXEC aws.glue.workflows.stop_workflow_run 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"RunId": "{{ RunId }}"
}'
;
```
</TabItem>
</Tabs>
