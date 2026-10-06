--- 
title: container_state_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - container_state_changes
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

Creates, updates, deletes, gets or lists a <code>container_state_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_state_changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.container_state_changes" /></td></tr>
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
    <td><a href="#submit_container_state_change"><CopyableCode code="submit_container_state_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent. Sent to acknowledge that a container changed states.</td>
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
    defaultValue="submit_container_state_change"
    values={[
        { label: 'submit_container_state_change', value: 'submit_container_state_change' }
    ]}
>
<TabItem value="submit_container_state_change">

This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent. Sent to acknowledge that a container changed states.

```sql
EXEC aws.ecs.container_state_changes.submit_container_state_change 
@region='{{ region }}' --required 
@@json=
'{
"cluster": "{{ cluster }}", 
"task": "{{ task }}", 
"containerName": "{{ containerName }}", 
"runtimeId": "{{ runtimeId }}", 
"status": "{{ status }}", 
"exitCode": {{ exitCode }}, 
"reason": "{{ reason }}", 
"networkBindings": "{{ networkBindings }}"
}'
;
```
</TabItem>
</Tabs>
