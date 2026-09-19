--- 
title: task_runner_heartbeats
hide_title: false
hide_table_of_contents: false
keywords:
  - task_runner_heartbeats
  - datapipeline
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

Creates, updates, deletes, gets or lists a <code>task_runner_heartbeats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_runner_heartbeats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datapipeline.task_runner_heartbeats" /></td></tr>
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
    <td><a href="#report_task_runner_heartbeat"><CopyableCode code="report_task_runner_heartbeat" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taskrunnerId"><code>taskrunnerId</code></a></td>
    <td></td>
    <td>Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.</td>
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
    defaultValue="report_task_runner_heartbeat"
    values={[
        { label: 'report_task_runner_heartbeat', value: 'report_task_runner_heartbeat' }
    ]}
>
<TabItem value="report_task_runner_heartbeat">

Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance.

```sql
EXEC aws.datapipeline.task_runner_heartbeats.report_task_runner_heartbeat 
@region='{{ region }}' --required 
@@json=
'{
"taskrunnerId": "{{ taskrunnerId }}", 
"workerGroup": "{{ workerGroup }}", 
"hostname": "{{ hostname }}"
}'
;
```
</TabItem>
</Tabs>
