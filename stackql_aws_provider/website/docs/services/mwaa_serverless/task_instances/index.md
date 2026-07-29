--- 
title: task_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - task_instances
  - mwaa_serverless
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

Creates, updates, deletes, gets or lists a <code>task_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa_serverless.task_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_task_instance"
    values={[
        { label: 'get_task_instance', value: 'get_task_instance' },
        { label: 'list_task_instances', value: 'list_task_instances' }
    ]}
>
<TabItem value="get_task_instance">

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
    <td><CopyableCode code="attempt_number" /></td>
    <td><code>integer</code></td>
    <td>The attempt number for this task instance.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The duration of the task instance execution in seconds. This value is null if the task is not complete.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task instance completed execution, in ISO 8601 date-time format. This value is null if the task is not complete.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message if the task instance failed. This value is null if the task completed successfully. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_stream" /></td>
    <td><code>string</code></td>
    <td>The CloudWatch log stream name for this task instance execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task instance was last modified, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="operator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Apache Airflow operator used for this task instance. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run that contains this task instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task instance started execution, in ISO 8601 date-time format. This value is null if the task has not started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the task instance. (QUEUED, FAILED, SCHEDULED, RUNNING, SUCCESS, UP_FOR_RESCHEDULE, UP_FOR_RETRY, UPSTREAM_FAILED, REMOVED, RESTARTING, DEFERRED, NONE, CANCELLED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task definition within the workflow. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this task instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow that contains this task instance. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_version" /></td>
    <td><code>string</code></td>
    <td>The version of the workflow that contains this task instance. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="xcom" /></td>
    <td><code>object</code></td>
    <td>Cross-communication data exchanged between tasks in the workflow execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_task_instances">

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
    <td><CopyableCode code="duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The duration of the task instance execution in seconds. This value is null if the task is not complete.</td>
</tr>
<tr>
    <td><CopyableCode code="operator_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Apache Airflow operator used for this task instance. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run that contains this task instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the task instance. (QUEUED, FAILED, SCHEDULED, RUNNING, SUCCESS, UP_FOR_RESCHEDULE, UP_FOR_RETRY, UPSTREAM_FAILED, REMOVED, RESTARTING, DEFERRED, NONE, CANCELLED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="task_instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this task instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow that contains this task instance. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_version" /></td>
    <td><code>string</code></td>
    <td>The version of the workflow that contains this task instance. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#get_task_instance"><CopyableCode code="get_task_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific task instance within a workflow run. Task instances represent individual tasks that are executed as part of a workflow in the Amazon Managed Workflows for Apache Airflow Serverless environment. Each task instance runs in an isolated ECS container with dedicated resources and security boundaries. The service tracks task execution state, retry attempts, and provides detailed timing and error information for troubleshooting and monitoring purposes.</td>
</tr>
<tr>
    <td><a href="#list_task_instances"><CopyableCode code="list_task_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all task instances for a specific workflow run, with optional pagination support.</td>
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
    defaultValue="get_task_instance"
    values={[
        { label: 'get_task_instance', value: 'get_task_instance' },
        { label: 'list_task_instances', value: 'list_task_instances' }
    ]}
>
<TabItem value="get_task_instance">

Retrieves detailed information about a specific task instance within a workflow run. Task instances represent individual tasks that are executed as part of a workflow in the Amazon Managed Workflows for Apache Airflow Serverless environment. Each task instance runs in an isolated ECS container with dedicated resources and security boundaries. The service tracks task execution state, retry attempts, and provides detailed timing and error information for troubleshooting and monitoring purposes.

```sql
SELECT
attempt_number,
duration_in_seconds,
ended_at,
error_message,
log_stream,
modified_at,
operator_name,
run_id,
started_at,
status,
task_id,
task_instance_id,
workflow_arn,
workflow_version,
xcom
FROM aws.mwaa_serverless.task_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_task_instances">

Lists all task instances for a specific workflow run, with optional pagination support.

```sql
SELECT
duration_in_seconds,
operator_name,
run_id,
status,
task_instance_id,
workflow_arn,
workflow_version
FROM aws.mwaa_serverless.task_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
