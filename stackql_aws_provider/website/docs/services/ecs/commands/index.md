--- 
title: commands
hide_title: false
hide_table_of_contents: false
keywords:
  - commands
  - ecs
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

Creates, updates, deletes, gets or lists a <code>commands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commands" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.commands" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#execute_command"><CopyableCode code="execute_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-command"><code>command</code></a>, <a href="#parameter-interactive"><code>interactive</code></a>, <a href="#parameter-task"><code>task</code></a></td>
    <td></td>
    <td>Runs a command remotely on a container within a task. If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an AccessDeniedException when there is a mismatch between the condition key value and the corresponding parameter value. For information about required permissions and considerations, see Using Amazon ECS Exec for debugging in the Amazon ECS Developer Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="execute_command"
    values={[
        { label: 'execute_command', value: 'execute_command' }
    ]}
>
<TabItem value="execute_command">

Runs a command remotely on a container within a task. If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an AccessDeniedException when there is a mismatch between the condition key value and the corresponding parameter value. For information about required permissions and considerations, see Using Amazon ECS Exec for debugging in the Amazon ECS Developer Guide.

```sql
EXEC aws.ecs.commands.execute_command 
@region='{{ region }}' --required 
@@json=
'{
"cluster": "{{ cluster }}", 
"container": "{{ container }}", 
"command": "{{ command }}", 
"interactive": {{ interactive }}, 
"task": "{{ task }}"
}'
;
```
</TabItem>
</Tabs>
