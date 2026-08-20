--- 
title: automation_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_executions
  - ssm
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

Creates, updates, deletes, gets or lists an <code>automation_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.automation_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_execution"
    values={[
        { label: 'get_automation_execution', value: 'get_automation_execution' },
        { label: 'describe_automation_executions', value: 'describe_automation_executions' }
    ]}
>
<TabItem value="get_automation_execution">

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
    <td><CopyableCode code="alarm_configuration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a State Manager association used in the Automation operation.</td>
</tr>
<tr>
    <td><CopyableCode code="automation_execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution ID.</td>
</tr>
<tr>
    <td><CopyableCode code="automation_execution_status" /></td>
    <td><code>string</code></td>
    <td>The execution status of the Automation. (Pending, InProgress, Waiting, Success, TimedOut, Cancelling, Cancelled, Failed, PendingApproval, Approved, Rejected, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, CompletedWithSuccess, CompletedWithFailure, Exited)</td>
</tr>
<tr>
    <td><CopyableCode code="automation_subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype of the Automation operation. Currently, the only supported value is ChangeRequest. (ChangeRequest, AccessRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="change_request_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Change Manager change request.</td>
</tr>
<tr>
    <td><CopyableCode code="current_action" /></td>
    <td><code>string</code></td>
    <td>The action of the step that is currently running.</td>
</tr>
<tr>
    <td><CopyableCode code="current_step_name" /></td>
    <td><code>string</code></td>
    <td>The name of the step that is currently running.</td>
</tr>
<tr>
    <td><CopyableCode code="document_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Automation runbook used during the execution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The version of the document to use during execution. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="executed_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who ran the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution finished.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>A message describing why an execution has failed, if the status is set to Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrency" /></td>
    <td><code>string</code></td>
    <td>The MaxConcurrency value specified by the user when the execution started. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_errors" /></td>
    <td><code>string</code></td>
    <td>The MaxErrors value specified by the user when the execution started. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The automation execution mode. (Auto, Interactive)</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an OpsItem that is created to represent a Change Manager change request.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>object</code></td>
    <td>The list of execution outputs as defined in the Automation runbook.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The key-value map of execution parameters, which were supplied when calling StartAutomationExecution.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_automation_execution_id" /></td>
    <td><code>string</code></td>
    <td>The AutomationExecutionId of the parent automation.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_counters" /></td>
    <td><code>object</code></td>
    <td>An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_targets" /></td>
    <td><code>object</code></td>
    <td>A list of resolved targets in the rate control execution.</td>
</tr>
<tr>
    <td><CopyableCode code="runbooks" /></td>
    <td><code>array</code></td>
    <td>Information about the Automation runbooks that are run as part of a runbook workflow. The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Automation operation is scheduled to start.</td>
</tr>
<tr>
    <td><CopyableCode code="step_executions" /></td>
    <td><code>array</code></td>
    <td>A list of details about the current state of all steps that comprise an execution. An Automation runbook contains a list of steps that are run in order.</td>
</tr>
<tr>
    <td><CopyableCode code="step_executions_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that indicates if the response contains the full list of the Automation step executions. If true, use the DescribeAutomationStepExecutions API operation to get the full list of step executions.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The target of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="target_locations" /></td>
    <td><code>array</code></td>
    <td>The combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the Automation.</td>
</tr>
<tr>
    <td><CopyableCode code="target_locations_url" /></td>
    <td><code>string</code></td>
    <td>A publicly accessible URL for a file that contains the TargetLocations body. Currently, only files in presigned Amazon S3 buckets are supported (pattern: &lt;code&gt;^https:\/\/&#91;-a-zA-Z0-9@:%._\+~#=&#93;&#123;1,253&#125;\.s3(\.&#91;a-z\d-&#93;&#123;9,16&#125;)?\.amazonaws\.com\/.&#123;1,2000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_maps" /></td>
    <td><code>array</code></td>
    <td>The specified key-value mapping of document parameters to target resources.</td>
</tr>
<tr>
    <td><CopyableCode code="target_parameter_name" /></td>
    <td><code>string</code></td>
    <td>The parameter name.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The specified targets.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_alarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarm that was invoked by the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>object</code></td>
    <td>Variables defined for the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="warning_message" /></td>
    <td><code>string</code></td>
    <td>A message that describes a non-critical issue that occurred during the automation execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_automation_executions">

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
    <td><CopyableCode code="alarm_configuration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a State Manager association used in the Automation operation.</td>
</tr>
<tr>
    <td><CopyableCode code="automation_execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution ID.</td>
</tr>
<tr>
    <td><CopyableCode code="automation_execution_status" /></td>
    <td><code>string</code></td>
    <td>The status of the execution. (Pending, InProgress, Waiting, Success, TimedOut, Cancelling, Cancelled, Failed, PendingApproval, Approved, Rejected, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, CompletedWithSuccess, CompletedWithFailure, Exited)</td>
</tr>
<tr>
    <td><CopyableCode code="automation_subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype of the Automation operation. Currently, the only supported value is ChangeRequest. (ChangeRequest, AccessRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="automation_type" /></td>
    <td><code>string</code></td>
    <td>Use this filter with DescribeAutomationExecutions. Specify either Local or CrossAccount. CrossAccount is an Automation that runs in multiple Amazon Web Services Regions and Amazon Web Services accounts. For more information, see Running automations in multiple Amazon Web Services Regions and accounts in the Amazon Web Services Systems Manager User Guide. (CrossAccount, Local)</td>
</tr>
<tr>
    <td><CopyableCode code="change_request_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Change Manager change request.</td>
</tr>
<tr>
    <td><CopyableCode code="current_action" /></td>
    <td><code>string</code></td>
    <td>The action of the step that is currently running.</td>
</tr>
<tr>
    <td><CopyableCode code="current_step_name" /></td>
    <td><code>string</code></td>
    <td>The name of the step that is currently running.</td>
</tr>
<tr>
    <td><CopyableCode code="document_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Automation runbook used during execution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The document version used during the execution. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="executed_by" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN of the user who ran the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution finished. This isn't populated if the execution is still in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>A message that describes a failure that occurred during the automation execution.</td>
</tr>
<tr>
    <td><CopyableCode code="log_file" /></td>
    <td><code>string</code></td>
    <td>An S3 bucket where execution information is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="max_concurrency" /></td>
    <td><code>string</code></td>
    <td>The MaxConcurrency value specified by the user when starting the automation. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_errors" /></td>
    <td><code>string</code></td>
    <td>The MaxErrors value specified by the user when starting the automation. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The Automation execution mode. (Auto, Interactive)</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an OpsItem that is created to represent a Change Manager change request.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>object</code></td>
    <td>The list of execution outputs as defined in the Automation runbook.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_automation_execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution ID of the parent automation.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_targets" /></td>
    <td><code>object</code></td>
    <td>A list of targets that resolved during the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="runbooks" /></td>
    <td><code>array</code></td>
    <td>Information about the Automation runbooks that are run during a runbook workflow in Change Manager. The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Automation operation is scheduled to start.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The list of execution outputs as defined in the Automation runbook.</td>
</tr>
<tr>
    <td><CopyableCode code="target_locations_url" /></td>
    <td><code>string</code></td>
    <td>A publicly accessible URL for a file that contains the TargetLocations body. Currently, only files in presigned Amazon S3 buckets are supported (pattern: &lt;code&gt;^https:\/\/&#91;-a-zA-Z0-9@:%._\+~#=&#93;&#123;1,253&#125;\.s3(\.&#91;a-z\d-&#93;&#123;9,16&#125;)?\.amazonaws\.com\/.&#123;1,2000&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_maps" /></td>
    <td><code>array</code></td>
    <td>The specified key-value mapping of document parameters to target resources.</td>
</tr>
<tr>
    <td><CopyableCode code="target_parameter_name" /></td>
    <td><code>string</code></td>
    <td>The list of execution outputs as defined in the Automation runbook.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The targets defined by the user when starting the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_alarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarm that was invoked by the automation.</td>
</tr>
<tr>
    <td><CopyableCode code="warning_message" /></td>
    <td><code>string</code></td>
    <td>A message that describes a non-critical issue that occurred during the automation execution.</td>
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
    <td><a href="#get_automation_execution"><CopyableCode code="get_automation_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed information about a particular Automation execution.</td>
</tr>
<tr>
    <td><a href="#describe_automation_executions"><CopyableCode code="describe_automation_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about all active and terminated Automation executions.</td>
</tr>
<tr>
    <td><a href="#send_automation_signal"><CopyableCode code="send_automation_signal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutomationExecutionId"><code>AutomationExecutionId</code></a>, <a href="#parameter-SignalType"><code>SignalType</code></a></td>
    <td></td>
    <td>Sends a signal to an Automation execution to change the current behavior or status of the execution.</td>
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
    defaultValue="get_automation_execution"
    values={[
        { label: 'get_automation_execution', value: 'get_automation_execution' },
        { label: 'describe_automation_executions', value: 'describe_automation_executions' }
    ]}
>
<TabItem value="get_automation_execution">

Get detailed information about a particular Automation execution.

```sql
SELECT
alarm_configuration,
association_id,
automation_execution_id,
automation_execution_status,
automation_subtype,
change_request_name,
current_action,
current_step_name,
document_name,
document_version,
executed_by,
execution_end_time,
execution_start_time,
failure_message,
max_concurrency,
max_errors,
mode,
ops_item_id,
outputs,
parameters,
parent_automation_execution_id,
progress_counters,
resolved_targets,
runbooks,
scheduled_time,
step_executions,
step_executions_truncated,
target,
target_locations,
target_locations_url,
target_maps,
target_parameter_name,
targets,
triggered_alarms,
variables,
warning_message
FROM aws.ssm.automation_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_automation_executions">

Provides details about all active and terminated Automation executions.

```sql
SELECT
alarm_configuration,
association_id,
automation_execution_id,
automation_execution_status,
automation_subtype,
automation_type,
change_request_name,
current_action,
current_step_name,
document_name,
document_version,
executed_by,
execution_end_time,
execution_start_time,
failure_message,
log_file,
max_concurrency,
max_errors,
mode,
ops_item_id,
outputs,
parent_automation_execution_id,
resolved_targets,
runbooks,
scheduled_time,
target,
target_locations_url,
target_maps,
target_parameter_name,
targets,
triggered_alarms,
warning_message
FROM aws.ssm.automation_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_automation_signal"
    values={[
        { label: 'send_automation_signal', value: 'send_automation_signal' }
    ]}
>
<TabItem value="send_automation_signal">

Sends a signal to an Automation execution to change the current behavior or status of the execution.

```sql
EXEC aws.ssm.automation_executions.send_automation_signal 
@region='{{ region }}' --required 
@@json=
'{
"AutomationExecutionId": "{{ AutomationExecutionId }}", 
"SignalType": "{{ SignalType }}", 
"Payload": "{{ Payload }}"
}'
;
```
</TabItem>
</Tabs>
