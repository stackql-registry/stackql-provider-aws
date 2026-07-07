--- 
title: sandboxes
hide_title: false
hide_table_of_contents: false
keywords:
  - sandboxes
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>sandboxes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sandboxes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.sandboxes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_sandboxes"
    values={[
        { label: 'batch_get_sandboxes', value: 'batch_get_sandboxes' },
        { label: 'list_sandboxes', value: 'list_sandboxes' }
    ]}
>
<TabItem value="batch_get_sandboxes">

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
    <td><CopyableCode code="sandboxes" /></td>
    <td><code>array</code></td>
    <td>Information about the requested sandboxes.</td>
</tr>
<tr>
    <td><CopyableCode code="sandboxesNotFound" /></td>
    <td><code>array</code></td>
    <td>The IDs of sandboxes for which information could not be found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sandboxes">

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
    <td>Information about the requested sandbox IDs.</td>
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
    <td><a href="#batch_get_sandboxes"><CopyableCode code="batch_get_sandboxes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the sandbox status.</td>
</tr>
<tr>
    <td><a href="#list_sandboxes"><CopyableCode code="list_sandboxes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of sandboxes.</td>
</tr>
<tr>
    <td><a href="#start_command_execution"><CopyableCode code="start_command_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sandboxId"><code>sandboxId</code></a>, <a href="#parameter-command"><code>command</code></a></td>
    <td></td>
    <td>Starts a command execution.</td>
</tr>
<tr>
    <td><a href="#start_sandbox_connection"><CopyableCode code="start_sandbox_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sandboxId"><code>sandboxId</code></a></td>
    <td></td>
    <td>Starts a sandbox connection.</td>
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
    defaultValue="batch_get_sandboxes"
    values={[
        { label: 'batch_get_sandboxes', value: 'batch_get_sandboxes' },
        { label: 'list_sandboxes', value: 'list_sandboxes' }
    ]}
>
<TabItem value="batch_get_sandboxes">

Gets information about the sandbox status.

```sql
SELECT
sandboxes,
sandboxesNotFound
FROM aws.codebuild.sandboxes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sandboxes">

Gets a list of sandboxes.

```sql
SELECT
id
FROM aws.codebuild.sandboxes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_command_execution"
    values={[
        { label: 'start_command_execution', value: 'start_command_execution' },
        { label: 'start_sandbox_connection', value: 'start_sandbox_connection' }
    ]}
>
<TabItem value="start_command_execution">

Starts a command execution.

```sql
EXEC aws.codebuild.sandboxes.start_command_execution 
@region='{{ region }}' --required 
@@json=
'{
"sandboxId": "{{ sandboxId }}", 
"command": "{{ command }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="start_sandbox_connection">

Starts a sandbox connection.

```sql
EXEC aws.codebuild.sandboxes.start_sandbox_connection 
@region='{{ region }}' --required 
@@json=
'{
"sandboxId": "{{ sandboxId }}"
}'
;
```
</TabItem>
</Tabs>
