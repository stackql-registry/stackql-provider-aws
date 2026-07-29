--- 
title: command_invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - command_invocations
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

Creates, updates, deletes, gets or lists a <code>command_invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="command_invocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.command_invocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_command_invocation"
    values={[
        { label: 'get_command_invocation', value: 'get_command_invocation' },
        { label: 'list_command_invocations', value: 'list_command_invocations' }
    ]}
>
<TabItem value="get_command_invocation">

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
    <td><CopyableCode code="cloud_watch_output_config" /></td>
    <td><code>object</code></td>
    <td>Amazon CloudWatch Logs information where Systems Manager sent the command output.</td>
</tr>
<tr>
    <td><CopyableCode code="command_id" /></td>
    <td><code>string</code></td>
    <td>The parent command ID of the invocation plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>The comment text for the command.</td>
</tr>
<tr>
    <td><CopyableCode code="document_name" /></td>
    <td><code>string</code></td>
    <td>The name of the document that was run. For example, AWS-RunShellScript. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The Systems Manager document (SSM document) version used in the request. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_elapsed_time" /></td>
    <td><code>string</code></td>
    <td>Duration since ExecutionStartDateTime. (pattern: &lt;code&gt;^(&#91;\-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d)?)?(&#91;zZ&#93;|(&#91;\-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_end_date_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the plugin finished running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses the InvokedAfter filter. aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z If the plugin hasn't started to run, the string is empty. (pattern: &lt;code&gt;^(&#91;\-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d)?)?(&#91;zZ&#93;|(&#91;\-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_start_date_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the plugin started running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses the InvokedBefore filter. aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z If the plugin hasn't started to run, the string is empty. (pattern: &lt;code&gt;^(&#91;\-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d)?)?(&#91;zZ&#93;|(&#91;\-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed node targeted by the command. A managed node can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, or on-premises server or VM in your hybrid environment that is configured for Amazon Web Services Systems Manager. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="plugin_name" /></td>
    <td><code>string</code></td>
    <td>The name of the plugin, or step name, for which details are reported. For example, aws:RunShellScript is a plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="response_code" /></td>
    <td><code>integer</code></td>
    <td>The error level response code for the plugin script. If the response code is -1, then the command hasn't started running on the managed node, or it wasn't received by the node.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_error_content" /></td>
    <td><code>string</code></td>
    <td>The first 8,000 characters written by the plugin to stderr. If the command hasn't finished running, then this string is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_error_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the complete text written by the plugin to stderr. If the command hasn't finished running, then this string is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_output_content" /></td>
    <td><code>string</code></td>
    <td>The first 24,000 characters written by the plugin to stdout. If the command hasn't finished running, if ExecutionStatus is neither Succeeded nor Failed, then this string is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_output_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the complete text written by the plugin to stdout in Amazon Simple Storage Service (Amazon S3). If an S3 bucket wasn't specified, then this string is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this invocation plugin. This status can be different than StatusDetails. (Pending, InProgress, Delayed, Success, Cancelled, TimedOut, Failed, Cancelling)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>A detailed status of the command execution for an invocation. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values: Pending: The command hasn't been sent to the managed node. In Progress: The command has been sent to the managed node but hasn't reached a terminal state. Delayed: The system attempted to send the command to the target, but the target wasn't available. The managed node might not be available because of network issues, because the node was stopped, or for similar reasons. The system will try to send the command again. Success: The command or plugin ran successfully. This is a terminal state. Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state. Execution Timed Out: The command started to run on the managed node, but the execution wasn't complete before the timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state. Failed: The command wasn't run successfully on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state. Cancelled: The command was terminated before it was completed. This is a terminal state. Undeliverable: The command can't be delivered to the managed node. The node might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state. Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_command_invocations">

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
    <td><CopyableCode code="cloud_watch_output_config" /></td>
    <td><code>object</code></td>
    <td>Configuration options for sending command output to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="command_id" /></td>
    <td><code>string</code></td>
    <td>The command against which this invocation was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="command_plugins" /></td>
    <td><code>array</code></td>
    <td>Plugins processed by the command.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>User-specified information about the command, such as a brief description of what the command should do.</td>
</tr>
<tr>
    <td><CopyableCode code="document_name" /></td>
    <td><code>string</code></td>
    <td>The document name that was requested for execution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>The Systems Manager document (SSM document) version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The managed node ID in which this invocation was requested. (pattern: &lt;code&gt;(^i-(\w&#123;8&#125;|\w&#123;17&#125;)$)|(^mi-\w&#123;17&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified host name of the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_config" /></td>
    <td><code>object</code></td>
    <td>Configurations for sending notifications about command status changes on a per managed node basis.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the request was sent to this managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="service_role" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (IAM) service role that Run Command, a tool in Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes on a per managed node basis.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_error_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the plugin's StdErr file in Amazon Simple Storage Service (Amazon S3), if the S3 bucket was defined for the parent command. For an invocation, StandardErrorUrl is populated if there is just one plugin defined for the command, and the S3 bucket was defined for the command.</td>
</tr>
<tr>
    <td><CopyableCode code="standard_output_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the plugin's StdOut file in Amazon Simple Storage Service (Amazon S3), if the S3 bucket was defined for the parent command. For an invocation, StandardOutputUrl is populated if there is just one plugin defined for the command, and the S3 bucket was defined for the command.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Whether or not the invocation succeeded, failed, or is pending. (Pending, InProgress, Delayed, Success, Cancelled, TimedOut, Failed, Cancelling)</td>
</tr>
<tr>
    <td><CopyableCode code="status_details" /></td>
    <td><code>string</code></td>
    <td>A detailed status of the command execution for each invocation (each managed node targeted by the command). StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values: Pending: The command hasn't been sent to the managed node. In Progress: The command has been sent to the managed node but hasn't reached a terminal state. Success: The execution of the command or plugin was successfully completed. This is a terminal state. Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state. Execution Timed Out: Command execution started on the managed node, but the execution wasn't complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state. Failed: The command wasn't successful on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state. Cancelled: The command was terminated before it was completed. This is a terminal state. Undeliverable: The command can't be delivered to the managed node. The managed node might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state. Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state. Delayed: The system attempted to send the command to the managed node but wasn't successful. The system retries again.</td>
</tr>
<tr>
    <td><CopyableCode code="trace_output" /></td>
    <td><code>string</code></td>
    <td>Gets the trace output sent by the agent.</td>
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
    <td><a href="#get_command_invocation"><CopyableCode code="get_command_invocation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about command execution for an invocation or plugin. The Run Command API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your resources might not be immediately visible to all subsequent commands you run. You should keep this in mind when you carry out an API command that immediately follows a previous API command. GetCommandInvocation only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use ListCommandInvocations. To get the command execution status across managed nodes, use ListCommands.</td>
</tr>
<tr>
    <td><a href="#list_command_invocations"><CopyableCode code="list_command_invocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs SendCommand against three managed nodes, then a command invocation is created for each requested managed node ID. ListCommandInvocations provide status about command execution.</td>
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
    defaultValue="get_command_invocation"
    values={[
        { label: 'get_command_invocation', value: 'get_command_invocation' },
        { label: 'list_command_invocations', value: 'list_command_invocations' }
    ]}
>
<TabItem value="get_command_invocation">

Returns detailed information about command execution for an invocation or plugin. The Run Command API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your resources might not be immediately visible to all subsequent commands you run. You should keep this in mind when you carry out an API command that immediately follows a previous API command. GetCommandInvocation only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use ListCommandInvocations. To get the command execution status across managed nodes, use ListCommands.

```sql
SELECT
cloud_watch_output_config,
command_id,
comment,
document_name,
document_version,
execution_elapsed_time,
execution_end_date_time,
execution_start_date_time,
instance_id,
plugin_name,
response_code,
standard_error_content,
standard_error_url,
standard_output_content,
standard_output_url,
status,
status_details
FROM aws.ssm.command_invocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_command_invocations">

An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs SendCommand against three managed nodes, then a command invocation is created for each requested managed node ID. ListCommandInvocations provide status about command execution.

```sql
SELECT
cloud_watch_output_config,
command_id,
command_plugins,
comment,
document_name,
document_version,
instance_id,
instance_name,
notification_config,
requested_date_time,
service_role,
standard_error_url,
standard_output_url,
status,
status_details,
trace_output
FROM aws.ssm.command_invocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
