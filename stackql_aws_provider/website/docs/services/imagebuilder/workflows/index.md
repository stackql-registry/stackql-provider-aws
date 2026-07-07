--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.workflows" /></td></tr>
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
    <td><CopyableCode code="latestVersionReferences" /></td>
    <td><code>object</code></td>
    <td>The resource ARNs with different wildcard variations of semantic versioning.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow" /></td>
    <td><code>object</code></td>
    <td>The workflow resource specified in the request.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow resource. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):workflow/(build|test|distribution)/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string</code></td>
    <td>The timestamp when Image Builder created the workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Describes the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the workflow resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The image creation stage that this workflow applies to. Image Builder currently supports build and test stage workflows. (BUILD, TEST, DISTRIBUTION)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the workflow resource. The format includes three nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code>. (pattern: &lt;code&gt;^&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#parameter-workflowBuildVersionArn"><code>workflowBuildVersionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a workflow resource object.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists workflow build versions based on filtering parameters.</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a new workflow or a new version of an existing workflow.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflowBuildVersionArn"><code>workflowBuildVersionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific workflow resource.</td>
</tr>
<tr>
    <td><a href="#send_workflow_step_action"><CopyableCode code="send_workflow_step_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stepExecutionId"><code>stepExecutionId</code></a>, <a href="#parameter-imageBuildVersionArn"><code>imageBuildVersionArn</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Pauses or resumes image creation when the associated workflow runs a WaitForAction step.</td>
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
<tr id="parameter-workflowBuildVersionArn">
    <td><CopyableCode code="workflowBuildVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow resource to delete.</td>
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

Get a workflow resource object.

```sql
SELECT
latestVersionReferences,
workflow
FROM aws.imagebuilder.workflows
WHERE workflowBuildVersionArn = '{{ workflowBuildVersionArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows">

Lists workflow build versions based on filtering parameters.

```sql
SELECT
name,
arn,
dateCreated,
description,
owner,
type_,
version
FROM aws.imagebuilder.workflows
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

Create a new workflow or a new version of an existing workflow.

```sql
INSERT INTO aws.imagebuilder.workflows (
name,
semanticVersion,
description,
changeDescription,
data,
uri,
kmsKeyId,
tags,
clientToken,
type,
dryRun,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ semanticVersion }}' /* required */,
'{{ description }}',
'{{ changeDescription }}',
'{{ data }}',
'{{ uri }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ type }}' /* required */,
{{ dryRun }},
'{{ region }}'
RETURNING
clientToken,
latestVersionReferences,
workflowBuildVersionArn
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
    - name: semanticVersion
      value: "{{ semanticVersion }}"
    - name: description
      value: "{{ description }}"
    - name: changeDescription
      value: "{{ changeDescription }}"
    - name: data
      value: "{{ data }}"
    - name: uri
      value: "{{ uri }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['BUILD', 'TEST', 'DISTRIBUTION']
    - name: dryRun
      value: {{ dryRun }}
`}</CodeBlock>

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

Deletes a specific workflow resource.

```sql
DELETE FROM aws.imagebuilder.workflows
WHERE workflowBuildVersionArn = '{{ workflowBuildVersionArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_workflow_step_action"
    values={[
        { label: 'send_workflow_step_action', value: 'send_workflow_step_action' }
    ]}
>
<TabItem value="send_workflow_step_action">

Pauses or resumes image creation when the associated workflow runs a WaitForAction step.

```sql
EXEC aws.imagebuilder.workflows.send_workflow_step_action 
@region='{{ region }}' --required 
@@json=
'{
"stepExecutionId": "{{ stepExecutionId }}", 
"imageBuildVersionArn": "{{ imageBuildVersionArn }}", 
"action": "{{ action }}", 
"reason": "{{ reason }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
