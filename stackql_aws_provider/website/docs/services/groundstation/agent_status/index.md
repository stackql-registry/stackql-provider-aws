--- 
title: agent_status
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_status
  - groundstation
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

Creates, updates, deletes, gets or lists an <code>agent_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.agent_status" /></td></tr>
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
    <td><a href="#update_agent_status"><CopyableCode code="update_agent_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-aggregateStatus"><code>aggregateStatus</code></a>, <a href="#parameter-componentStatuses"><code>componentStatuses</code></a></td>
    <td></td>
    <td>For use by AWS Ground Station Agent and shouldn't be called directly. Update the status of the agent.</td>
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
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>UUID of agent to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_agent_status"
    values={[
        { label: 'update_agent_status', value: 'update_agent_status' }
    ]}
>
<TabItem value="update_agent_status">

For use by AWS Ground Station Agent and shouldn't be called directly. Update the status of the agent.

```sql
UPDATE aws.groundstation.agent_status
SET 
taskId = '{{ taskId }}',
aggregateStatus = '{{ aggregateStatus }}',
componentStatuses = '{{ componentStatuses }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND region = '{{ region }}' --required
AND taskId = '{{ taskId }}' --required
AND aggregateStatus = '{{ aggregateStatus }}' --required
AND componentStatuses = '{{ componentStatuses }}' --required
RETURNING
agentId;
```
</TabItem>
</Tabs>
