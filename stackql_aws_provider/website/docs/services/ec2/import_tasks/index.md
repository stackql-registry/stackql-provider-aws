--- 
title: import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_tasks
  - ec2
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

Creates, updates, deletes, gets or lists an <code>import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.import_tasks" /></td></tr>
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
    <td><a href="#cancel_import_task"><CopyableCode code="cancel_import_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CancelReason"><code>CancelReason</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ImportTaskId"><code>ImportTaskId</code></a></td>
    <td>Cancels an in-process import virtual machine or import snapshot task.</td>
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
<tr id="parameter-CancelReason">
    <td><CopyableCode code="CancelReason" /></td>
    <td><code>string</code></td>
    <td>The reason for canceling the task.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ImportTaskId">
    <td><CopyableCode code="ImportTaskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the import image or import snapshot task to be canceled.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="cancel_import_task"
    values={[
        { label: 'cancel_import_task', value: 'cancel_import_task' }
    ]}
>
<TabItem value="cancel_import_task">

Cancels an in-process import virtual machine or import snapshot task.

```sql
EXEC aws.ec2.import_tasks.cancel_import_task 
@region='{{ region }}' --required, 
@CancelReason='{{ CancelReason }}', 
@DryRun={{ DryRun }}, 
@ImportTaskId='{{ ImportTaskId }}'
;
```
</TabItem>
</Tabs>
