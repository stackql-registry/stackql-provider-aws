--- 
title: task_failures
hide_title: false
hide_table_of_contents: false
keywords:
  - task_failures
  - stepfunctions
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

Creates, updates, deletes, gets or lists a <code>task_failures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_failures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.stepfunctions.task_failures" /></td></tr>
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
    <td><a href="#send_task_failure"><CopyableCode code="send_task_failure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taskToken"><code>taskToken</code></a></td>
    <td></td>
    <td>Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken failed. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted.</td>
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
    defaultValue="send_task_failure"
    values={[
        { label: 'send_task_failure', value: 'send_task_failure' }
    ]}
>
<TabItem value="send_task_failure">

Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken failed. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted.

```sql
EXEC aws.stepfunctions.task_failures.send_task_failure 
@region='{{ region }}' --required 
@@json=
'{
"taskToken": "{{ taskToken }}", 
"error": "{{ error }}", 
"cause": "{{ cause }}"
}'
;
```
</TabItem>
</Tabs>
