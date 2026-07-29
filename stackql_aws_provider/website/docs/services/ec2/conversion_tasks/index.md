--- 
title: conversion_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - conversion_tasks
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

Creates, updates, deletes, gets or lists a <code>conversion_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conversion_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.conversion_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_conversion_tasks"
    values={[
        { label: 'describe_conversion_tasks', value: 'describe_conversion_tasks' }
    ]}
>
<TabItem value="describe_conversion_tasks">

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
    <td><CopyableCode code="conversion_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the conversion task.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string</code></td>
    <td>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel the task.</td>
</tr>
<tr>
    <td><CopyableCode code="import_instance" /></td>
    <td><code>string</code></td>
    <td>If the task is for importing an instance, this contains information about the import instance task.</td>
</tr>
<tr>
    <td><CopyableCode code="import_volume" /></td>
    <td><code>string</code></td>
    <td>If the task is for importing a volume, this contains information about the import volume task.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the conversion task.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message related to the conversion task.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the task.</td>
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
    <td><a href="#describe_conversion_tasks"><CopyableCode code="describe_conversion_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ConversionTaskId"><code>ConversionTaskId</code></a></td>
    <td>Describes the specified conversion tasks or all your conversion tasks. For more information, see the VM Import/Export User Guide. For information about the import manifest referenced by this API action, see VM Import Manifest.</td>
</tr>
<tr>
    <td><a href="#cancel_conversion_task"><CopyableCode code="cancel_conversion_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ConversionTaskId"><code>ConversionTaskId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ReasonMessage"><code>ReasonMessage</code></a></td>
    <td>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is in the process of transferring the final disk image, the command fails and returns an exception.</td>
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
<tr id="parameter-ConversionTaskId">
    <td><CopyableCode code="ConversionTaskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the conversion task.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConversionTaskId">
    <td><CopyableCode code="ConversionTaskId" /></td>
    <td><code>array</code></td>
    <td>The conversion task IDs.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ReasonMessage">
    <td><CopyableCode code="ReasonMessage" /></td>
    <td><code>string</code></td>
    <td>The reason for canceling the conversion task.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_conversion_tasks"
    values={[
        { label: 'describe_conversion_tasks', value: 'describe_conversion_tasks' }
    ]}
>
<TabItem value="describe_conversion_tasks">

Describes the specified conversion tasks or all your conversion tasks. For more information, see the VM Import/Export User Guide. For information about the import manifest referenced by this API action, see VM Import Manifest.

```sql
SELECT
conversion_task_id,
expiration_time,
import_instance,
import_volume,
state,
status_message,
tags
FROM aws.ec2.conversion_tasks
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND ConversionTaskId = '{{ ConversionTaskId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_conversion_task"
    values={[
        { label: 'cancel_conversion_task', value: 'cancel_conversion_task' }
    ]}
>
<TabItem value="cancel_conversion_task">

Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is in the process of transferring the final disk image, the command fails and returns an exception.

```sql
EXEC aws.ec2.conversion_tasks.cancel_conversion_task 
@ConversionTaskId='{{ ConversionTaskId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@ReasonMessage='{{ ReasonMessage }}'
;
```
</TabItem>
</Tabs>
