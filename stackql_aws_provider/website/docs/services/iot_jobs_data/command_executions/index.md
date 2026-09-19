--- 
title: command_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - command_executions
  - iot_jobs_data
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

Creates, updates, deletes, gets or lists a <code>command_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="command_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_jobs_data.command_executions" /></td></tr>
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
    <td><a href="#start_command_execution"><CopyableCode code="start_command_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-commandArn"><code>commandArn</code></a></td>
    <td></td>
    <td>Using the command created with the CreateCommand API, start a command execution on a specific device.</td>
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
    defaultValue="start_command_execution"
    values={[
        { label: 'start_command_execution', value: 'start_command_execution' }
    ]}
>
<TabItem value="start_command_execution">

Using the command created with the CreateCommand API, start a command execution on a specific device.

```sql
EXEC aws.iot_jobs_data.command_executions.start_command_execution 
@region='{{ region }}' --required 
@@json=
'{
"targetArn": "{{ targetArn }}", 
"commandArn": "{{ commandArn }}", 
"parameters": "{{ parameters }}", 
"executionTimeoutSeconds": {{ executionTimeoutSeconds }}, 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
