--- 
title: commands
hide_title: false
hide_table_of_contents: false
keywords:
  - commands
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

Creates, updates, deletes, gets or lists a <code>commands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commands" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.commands" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_commands"
    values={[
        { label: 'list_commands', value: 'list_commands' }
    ]}
>
<TabItem value="list_commands">

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
    <td><CopyableCode code="AlarmConfiguration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudWatchOutputConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration options for sending command output to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="CommandId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this command.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>User-specified information about the command, such as a brief description of what the command should do.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedCount" /></td>
    <td><code>integer</code></td>
    <td>The number of targets for which the command invocation reached a terminal state. Terminal states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out, Cancelled, Terminated, or Undeliverable.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryTimedOutCount" /></td>
    <td><code>integer</code></td>
    <td>The number of targets for which the status is Delivery Timed Out.</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentName" /></td>
    <td><code>string</code></td>
    <td>The name of the document requested for execution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentVersion" /></td>
    <td><code>string</code></td>
    <td>The Systems Manager document (SSM document) version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorCount" /></td>
    <td><code>integer</code></td>
    <td>The number of targets for which the status is Failed or Execution Timed Out.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>If a command expires, it changes status to DeliveryTimedOut for all invocations that have the status InProgress, Pending, or Delayed. ExpiresAfter is calculated based on the total timeout for the overall command. For more information, see Understanding command timeout values in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceIds" /></td>
    <td><code>array</code></td>
    <td>The managed node IDs against which this command was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxConcurrency" /></td>
    <td><code>string</code></td>
    <td>The maximum number of managed nodes that are allowed to run the command at the same time. You can specify a number of managed nodes, such as 10, or a percentage of nodes, such as 10%. The default value is 50. For more information about how to use MaxConcurrency, see Amazon Web Services Systems Manager Run Command in the Amazon Web Services Systems Manager User Guide. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;1-9&#93;&#91;0-9&#93;%|&#91;1-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxErrors" /></td>
    <td><code>string</code></td>
    <td>The maximum number of errors allowed before the system stops sending the command to additional targets. You can specify a number of errors, such as 10, or a percentage or errors, such as 10%. The default value is 0. For more information about how to use MaxErrors, see Amazon Web Services Systems Manager Run Command in the Amazon Web Services Systems Manager User Guide. (pattern: &lt;code&gt;^(&#91;1-9&#93;&#91;0-9&#93;*|&#91;0&#93;|&#91;1-9&#93;&#91;0-9&#93;%|&#91;0-9&#93;%|100%)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationConfig" /></td>
    <td><code>object</code></td>
    <td>Configurations for sending notifications about command status changes.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputS3BucketName" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputS3KeyPrefix" /></td>
    <td><code>string</code></td>
    <td>The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputS3Region" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon Web Services Region of the S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>The parameter values to be inserted in the document when running the command.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the command was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceRole" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (IAM) service role that Run Command, a tool in Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the command. (Pending, InProgress, Success, Cancelled, Failed, TimedOut, Cancelling)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>A detailed status of the command execution. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values: Pending: The command hasn't been sent to any managed nodes. In Progress: The command has been sent to at least one managed node but hasn't reached a final state on all managed nodes. Success: The command successfully ran on all invocations. This is a terminal state. Delivery Timed Out: The value of MaxErrors or more command invocations shows a status of Delivery Timed Out. This is a terminal state. Execution Timed Out: The value of MaxErrors or more command invocations shows a status of Execution Timed Out. This is a terminal state. Failed: The value of MaxErrors or more command invocations shows a status of Failed. This is a terminal state. Incomplete: The command was attempted on all managed nodes and one or more invocations doesn't have a value of Success but not enough invocations failed for the status to be Failed. This is a terminal state. Cancelled: The command was terminated before it was completed. This is a terminal state. Rate Exceeded: The number of managed nodes targeted by the command exceeded the account limit for pending invocations. The system has canceled the command before running it on any managed node. This is a terminal state. Delayed: The system attempted to send the command to the managed node but wasn't successful. The system retries again.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetCount" /></td>
    <td><code>integer</code></td>
    <td>The number of targets for the command.</td>
</tr>
<tr>
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>An array of search criteria that targets managed nodes using a Key,Value combination that you specify. Targets is required if you don't provide one or more managed node IDs in the call.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>The TimeoutSeconds value specified for a command.</td>
</tr>
<tr>
    <td><CopyableCode code="TriggeredAlarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarm that was invoked by the command.</td>
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
    <td><a href="#list_commands"><CopyableCode code="list_commands" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the commands requested by users of the Amazon Web Services account.</td>
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
    defaultValue="list_commands"
    values={[
        { label: 'list_commands', value: 'list_commands' }
    ]}
>
<TabItem value="list_commands">

Lists the commands requested by users of the Amazon Web Services account.

```sql
SELECT
AlarmConfiguration,
CloudWatchOutputConfig,
CommandId,
Comment,
CompletedCount,
DeliveryTimedOutCount,
DocumentName,
DocumentVersion,
ErrorCount,
ExpiresAfter,
InstanceIds,
MaxConcurrency,
MaxErrors,
NotificationConfig,
OutputS3BucketName,
OutputS3KeyPrefix,
OutputS3Region,
Parameters,
RequestedDateTime,
ServiceRole,
Status,
StatusDetails,
TargetCount,
Targets,
TimeoutSeconds,
TriggeredAlarms
FROM aws.ssm.commands
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
