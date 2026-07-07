--- 
title: command_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - command_executions
  - iot
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.command_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_command_execution"
    values={[
        { label: 'get_command_execution', value: 'get_command_execution' },
        { label: 'list_command_executions', value: 'list_command_executions' }
    ]}
>
<TabItem value="get_command_execution">

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
    <td><CopyableCode code="commandArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the command. For example, arn:aws:iot:<code>&lt;region&gt;</code>:<code>&lt;accountid&gt;</code>:command/<code>&lt;commandId&gt;</code></td>
</tr>
<tr>
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command execution was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command execution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="executionTimeoutSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the amount of time in seconds that the device can take to finish a command execution. A timer starts when the command execution is created. If the command execution status is not set to another terminal state before the timer expires, it will automatically update to TIMED_OUT.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The list of parameters that the StartCommandExecution API used when performing the command on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>The result value for the current state of the command execution. The status provides information about the progress of the command execution. The device can use the result field to share additional details about the execution such as a return value of a remote function call. If you use the AWS-IoT-FleetWise namespace, then this field is not applicable in the API response.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, when the command execution was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the command execution. After your devices receive the command and start performing the operations specified in the command, it can use the UpdateCommandExecution MQTT API to update the status information. (CREATED, IN_PROGRESS, SUCCEEDED, FAILED, REJECTED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>object</code></td>
    <td>Your devices can use this parameter to provide additional context about the status of a command execution using a reason code and description.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the device on which the command execution is being performed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeToLive" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time to live (TTL) parameter that indicates the duration for which executions will be retained in your account. The default value is six months.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_command_executions">

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
    <td><CopyableCode code="commandArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the command execution.</td>
</tr>
<tr>
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the command completed executing on the target device.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the command execution was created for the target device.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command execution. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the command started executing on the target device.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the command executions. (CREATED, IN_PROGRESS, SUCCEEDED, FAILED, REJECTED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target device for which the command is being executed.</td>
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
    <td><a href="#get_command_execution"><CopyableCode code="get_command_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeResult"><code>includeResult</code></a></td>
    <td>Gets information about the specific command execution on a single device.</td>
</tr>
<tr>
    <td><a href="#list_command_executions"><CopyableCode code="list_command_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List all command executions. You must provide only the startedTimeFilter or the completedTimeFilter information. If you provide both time filters, the API will generate an error. You can use this information to retrieve a list of command executions within a specific timeframe. You must provide only the commandArn or the thingArn information depending on whether you want to list executions for a specific command or an IoT thing. If you provide both fields, the API will generate an error. For more information about considerations for using this API, see List command executions in your account (CLI).</td>
</tr>
<tr>
    <td><a href="#delete_command_execution"><CopyableCode code="delete_command_execution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a command execution. Only command executions that enter a terminal state can be deleted from your account.</td>
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
<tr id="parameter-execution_id">
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command execution that you want to delete from your account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-targetArn">
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the target device for which you want to delete command executions.</td>
</tr>
<tr id="parameter-includeResult">
    <td><CopyableCode code="includeResult" /></td>
    <td><code>boolean</code></td>
    <td>Can be used to specify whether to include the result of the command execution in the GetCommandExecution API response. Your device can use this field to provide additional information about the command execution. You only need to specify this field when using the AWS-IoT namespace.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_command_execution"
    values={[
        { label: 'get_command_execution', value: 'get_command_execution' },
        { label: 'list_command_executions', value: 'list_command_executions' }
    ]}
>
<TabItem value="get_command_execution">

Gets information about the specific command execution on a single device.

```sql
SELECT
commandArn,
completedAt,
createdAt,
executionId,
executionTimeoutSeconds,
lastUpdatedAt,
parameters,
result,
startedAt,
status,
statusReason,
targetArn,
timeToLive
FROM aws.iot.command_executions
WHERE execution_id = '{{ execution_id }}' -- required
AND targetArn = '{{ targetArn }}' -- required
AND region = '{{ region }}' -- required
AND includeResult = '{{ includeResult }}'
;
```
</TabItem>
<TabItem value="list_command_executions">

List all command executions. You must provide only the startedTimeFilter or the completedTimeFilter information. If you provide both time filters, the API will generate an error. You can use this information to retrieve a list of command executions within a specific timeframe. You must provide only the commandArn or the thingArn information depending on whether you want to list executions for a specific command or an IoT thing. If you provide both fields, the API will generate an error. For more information about considerations for using this API, see List command executions in your account (CLI).

```sql
SELECT
commandArn,
completedAt,
createdAt,
executionId,
startedAt,
status,
targetArn
FROM aws.iot.command_executions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_command_execution"
    values={[
        { label: 'delete_command_execution', value: 'delete_command_execution' }
    ]}
>
<TabItem value="delete_command_execution">

Delete a command execution. Only command executions that enter a terminal state can be deleted from your account.

```sql
DELETE FROM aws.iot.command_executions
WHERE execution_id = '{{ execution_id }}' --required
AND targetArn = '{{ targetArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
