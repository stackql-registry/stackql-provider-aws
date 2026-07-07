--- 
title: workflow_step_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_step_groups
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

Creates, updates, deletes, gets or lists a <code>workflow_step_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_step_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.workflow_step_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_step_group"
    values={[
        { label: 'get_workflow_step_group', value: 'get_workflow_step_group' },
        { label: 'list_workflow_step_groups', value: 'list_workflow_step_groups' }
    ]}
>
<TabItem value="get_workflow_step_group">

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
    <td>The ID of the step group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step group ended.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step group was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step group.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the step group. (AWS_MANAGED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the step group. (AWAITING_DEPENDENCIES, READY, IN_PROGRESS, COMPLETED, FAILED, PAUSED, PAUSING, USER_ATTENTION_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>List of AWS services utilized in a migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the migration workflow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_step_groups">

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
    <td>The ID of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step group.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the step group. (AWS_MANAGED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the step group. (AWAITING_DEPENDENCIES, READY, IN_PROGRESS, COMPLETED, FAILED, PAUSED, PAUSING, USER_ATTENTION_REQUIRED)</td>
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
    <td><a href="#get_workflow_step_group"><CopyableCode code="get_workflow_step_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the step group of a migration workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflow_step_groups"><CopyableCode code="list_workflow_step_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the step groups in a migration workflow.</td>
</tr>
<tr>
    <td><a href="#create_workflow_step_group"><CopyableCode code="create_workflow_step_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a step group in a migration workflow.</td>
</tr>
<tr>
    <td><a href="#update_workflow_step_group"><CopyableCode code="update_workflow_step_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the step group in a migration workflow.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_step_group"><CopyableCode code="delete_workflow_step_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a step group in a migration workflow.</td>
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
    <td>The ID of the step group you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workflowId">
    <td><CopyableCode code="workflowId" /></td>
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
    defaultValue="get_workflow_step_group"
    values={[
        { label: 'get_workflow_step_group', value: 'get_workflow_step_group' },
        { label: 'list_workflow_step_groups', value: 'list_workflow_step_groups' }
    ]}
>
<TabItem value="get_workflow_step_group">

Get the step group of a migration workflow.

```sql
SELECT
id,
name,
creationTime,
description,
endTime,
lastModifiedTime,
next,
owner,
previous,
status,
tools,
workflowId
FROM aws.migrationhuborchestrator.workflow_step_groups
WHERE id = '{{ id }}' -- required
AND workflowId = '{{ workflowId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_step_groups">

List the step groups in a migration workflow.

```sql
SELECT
id,
name,
next,
owner,
previous,
status
FROM aws.migrationhuborchestrator.workflow_step_groups
WHERE workflowId = '{{ workflowId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_step_group"
    values={[
        { label: 'create_workflow_step_group', value: 'create_workflow_step_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_step_group">

Create a step group in a migration workflow.

```sql
INSERT INTO aws.migrationhuborchestrator.workflow_step_groups (
workflowId,
name,
description,
next,
previous,
region
)
SELECT 
'{{ workflowId }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ next }}',
'{{ previous }}',
'{{ region }}'
RETURNING
id,
name,
creationTime,
description,
next,
previous,
tools,
workflowId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_step_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflow_step_groups resource.
    - name: workflowId
      value: "{{ workflowId }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: next
      value:
        - "{{ next }}"
    - name: previous
      value:
        - "{{ previous }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow_step_group"
    values={[
        { label: 'update_workflow_step_group', value: 'update_workflow_step_group' }
    ]}
>
<TabItem value="update_workflow_step_group">

Update the step group in a migration workflow.

```sql
UPDATE aws.migrationhuborchestrator.workflow_step_groups
SET 
name = '{{ name }}',
description = '{{ description }}',
next = '{{ next }}',
previous = '{{ previous }}'
WHERE 
workflowId = '{{ workflowId }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
description,
lastModifiedTime,
next,
previous,
tools,
workflowId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_step_group"
    values={[
        { label: 'delete_workflow_step_group', value: 'delete_workflow_step_group' }
    ]}
>
<TabItem value="delete_workflow_step_group">

Delete a step group in a migration workflow.

```sql
DELETE FROM aws.migrationhuborchestrator.workflow_step_groups
WHERE workflowId = '{{ workflowId }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
