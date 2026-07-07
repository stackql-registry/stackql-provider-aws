--- 
title: stack_refactors
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_refactors
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>stack_refactors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_refactors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_refactors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stack_refactor"
    values={[
        { label: 'describe_stack_refactor', value: 'describe_stack_refactor' },
        { label: 'list_stack_refactors', value: 'list_stack_refactors' }
    ]}
>
<TabItem value="describe_stack_refactor">

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
    <td><CopyableCode code="stack_refactor_id" /></td>
    <td><code>string</code></td>
    <td>The ID associated with the stack refactor created from the CreateStackRefactor action.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description to help you identify the refactor.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The stack refactor execution operation status that's provided after calling the ExecuteStackRefactor action.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status_reason" /></td>
    <td><code>string</code></td>
    <td>A detailed explanation for the stack refactor ExecutionStatus.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_ids" /></td>
    <td><code>array</code></td>
    <td>The unique ID for each stack.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The stack refactor operation status that's provided after calling the CreateStackRefactor action.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A detailed explanation for the stack refactor operation Status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stack_refactors">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description to help you identify the refactor.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionStatus" /></td>
    <td><code>string</code></td>
    <td>The operation status that's provided after calling the ExecuteStackRefactor action.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionStatusReason" /></td>
    <td><code>string</code></td>
    <td>A detailed explanation for the stack refactor ExecutionStatus.</td>
</tr>
<tr>
    <td><CopyableCode code="StackRefactorId" /></td>
    <td><code>string</code></td>
    <td>The ID associated with the stack refactor created from the CreateStackRefactor action.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The stack refactor operation status that's provided after calling the CreateStackRefactor action.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>A detailed explanation for the stack refactor Status.</td>
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
    <td><a href="#describe_stack_refactor"><CopyableCode code="describe_stack_refactor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackRefactorId"><code>StackRefactorId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the stack refactor status.</td>
</tr>
<tr>
    <td><a href="#list_stack_refactors"><CopyableCode code="list_stack_refactors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ExecutionStatusFilter"><code>ExecutionStatusFilter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists all account stack refactor operations and their statuses.</td>
</tr>
<tr>
    <td><a href="#create_stack_refactor"><CopyableCode code="create_stack_refactor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-StackDefinitions"><code>StackDefinitions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-EnableStackCreation"><code>EnableStackCreation</code></a>, <a href="#parameter-ResourceMappings"><code>ResourceMappings</code></a></td>
    <td>Creates a refactor across multiple stacks, with the list of stacks and resources that are affected.</td>
</tr>
<tr>
    <td><a href="#execute_stack_refactor"><CopyableCode code="execute_stack_refactor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-StackRefactorId"><code>StackRefactorId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Executes the stack refactor operation.</td>
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
<tr id="parameter-StackDefinitions">
    <td><CopyableCode code="StackDefinitions" /></td>
    <td><code>array</code></td>
    <td>The stacks being refactored.</td>
</tr>
<tr id="parameter-StackRefactorId">
    <td><CopyableCode code="StackRefactorId" /></td>
    <td><code>string</code></td>
    <td>The ID associated with the stack refactor created from the CreateStackRefactor action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description to help you identify the stack refactor.</td>
</tr>
<tr id="parameter-EnableStackCreation">
    <td><CopyableCode code="EnableStackCreation" /></td>
    <td><code>boolean</code></td>
    <td>Determines if a new stack is created with the refactor.</td>
</tr>
<tr id="parameter-ExecutionStatusFilter">
    <td><CopyableCode code="ExecutionStatusFilter" /></td>
    <td><code>array</code></td>
    <td>Execution status to use as a filter. Specify one or more execution status codes to list only stack refactors with the specified execution status codes.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-ResourceMappings">
    <td><CopyableCode code="ResourceMappings" /></td>
    <td><code>array</code></td>
    <td>The mappings for the stack resource Source and stack resource Destination.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stack_refactor"
    values={[
        { label: 'describe_stack_refactor', value: 'describe_stack_refactor' },
        { label: 'list_stack_refactors', value: 'list_stack_refactors' }
    ]}
>
<TabItem value="describe_stack_refactor">

Describes the stack refactor status.

```sql
SELECT
stack_refactor_id,
description,
execution_status,
execution_status_reason,
stack_ids,
status,
status_reason
FROM aws.cloudformation.stack_refactors
WHERE StackRefactorId = '{{ StackRefactorId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stack_refactors">

Lists all account stack refactor operations and their statuses.

```sql
SELECT
Description,
ExecutionStatus,
ExecutionStatusReason,
StackRefactorId,
Status,
StatusReason
FROM aws.cloudformation.stack_refactors
WHERE region = '{{ region }}' -- required
AND ExecutionStatusFilter = '{{ ExecutionStatusFilter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stack_refactor"
    values={[
        { label: 'create_stack_refactor', value: 'create_stack_refactor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stack_refactor">

Creates a refactor across multiple stacks, with the list of stacks and resources that are affected.

```sql
INSERT INTO aws.cloudformation.stack_refactors (
StackDefinitions,
region,
Description,
EnableStackCreation,
ResourceMappings
)
SELECT 
'{{ StackDefinitions }}',
'{{ region }}',
'{{ Description }}',
'{{ EnableStackCreation }}',
'{{ ResourceMappings }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stack_refactors
  props:
    - name: StackDefinitions
      value: "{{ StackDefinitions }}"
      description: Required parameter for the stack_refactors resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stack_refactors resource.
    - name: Description
      value: "{{ Description }}"
      description: A description to help you identify the stack refactor.
      description: A description to help you identify the stack refactor.
    - name: EnableStackCreation
      value: {{ EnableStackCreation }}
      description: Determines if a new stack is created with the refactor.
      description: Determines if a new stack is created with the refactor.
    - name: ResourceMappings
      value: "{{ ResourceMappings }}"
      description: The mappings for the stack resource Source and stack resource Destination.
      description: The mappings for the stack resource Source and stack resource Destination.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_stack_refactor"
    values={[
        { label: 'execute_stack_refactor', value: 'execute_stack_refactor' }
    ]}
>
<TabItem value="execute_stack_refactor">

Executes the stack refactor operation.

```sql
EXEC aws.cloudformation.stack_refactors.execute_stack_refactor 
@StackRefactorId='{{ StackRefactorId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
