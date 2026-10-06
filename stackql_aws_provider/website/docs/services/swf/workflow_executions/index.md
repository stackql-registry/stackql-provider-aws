--- 
title: workflow_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_executions
  - swf
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

Creates, updates, deletes, gets or lists a <code>workflow_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.swf.workflow_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workflow_execution"
    values={[
        { label: 'describe_workflow_execution', value: 'describe_workflow_execution' }
    ]}
>
<TabItem value="describe_workflow_execution">

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
    <td><CopyableCode code="execution_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for this workflow execution including timeout values, tasklist etc.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_info" /></td>
    <td><code>object</code></td>
    <td>Information about the workflow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_activity_task_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_execution_context" /></td>
    <td><code>string</code></td>
    <td>The latest executionContext provided by the decider for this workflow execution. A decider can provide an executionContext (a free-form string) when closing a decision task using RespondDecisionTaskCompleted.</td>
</tr>
<tr>
    <td><CopyableCode code="open_counts" /></td>
    <td><code>object</code></td>
    <td>The number of tasks for this workflow execution. This includes open and closed tasks of all types.</td>
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
    <td><a href="#describe_workflow_execution"><CopyableCode code="describe_workflow_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified workflow execution including its type and some statistics. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#terminate_workflow_execution"><CopyableCode code="terminate_workflow_execution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution. If the identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#signal_workflow_execution"><CopyableCode code="signal_workflow_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-signalName"><code>signalName</code></a></td>
    <td></td>
    <td>Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided). If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain. If the specified workflow execution isn't open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#start_workflow_execution"><CopyableCode code="start_workflow_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-workflowId"><code>workflowId</code></a>, <a href="#parameter-workflowType"><code>workflowType</code></a></td>
    <td></td>
    <td>Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1. tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3. tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
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
    defaultValue="describe_workflow_execution"
    values={[
        { label: 'describe_workflow_execution', value: 'describe_workflow_execution' }
    ]}
>
<TabItem value="describe_workflow_execution">

Returns information about the specified workflow execution including its type and some statistics. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
execution_configuration,
execution_info,
latest_activity_task_timestamp,
latest_execution_context,
open_counts
FROM aws.swf.workflow_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_workflow_execution"
    values={[
        { label: 'terminate_workflow_execution', value: 'terminate_workflow_execution' }
    ]}
>
<TabItem value="terminate_workflow_execution">

Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution. If the identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
DELETE FROM aws.swf.workflow_executions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="signal_workflow_execution"
    values={[
        { label: 'signal_workflow_execution', value: 'signal_workflow_execution' },
        { label: 'start_workflow_execution', value: 'start_workflow_execution' }
    ]}
>
<TabItem value="signal_workflow_execution">

Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided). If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain. If the specified workflow execution isn't open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
EXEC aws.swf.workflow_executions.signal_workflow_execution 
@region='{{ region }}' --required 
@@json=
'{
"domain": "{{ domain }}", 
"workflowId": "{{ workflowId }}", 
"runId": "{{ runId }}", 
"signalName": "{{ signalName }}", 
"input": "{{ input }}"
}'
;
```
</TabItem>
<TabItem value="start_workflow_execution">

Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1. tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3. tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
EXEC aws.swf.workflow_executions.start_workflow_execution 
@region='{{ region }}' --required 
@@json=
'{
"domain": "{{ domain }}", 
"workflowId": "{{ workflowId }}", 
"workflowType": "{{ workflowType }}", 
"taskList": "{{ taskList }}", 
"taskPriority": "{{ taskPriority }}", 
"input": "{{ input }}", 
"executionStartToCloseTimeout": "{{ executionStartToCloseTimeout }}", 
"tagList": "{{ tagList }}", 
"taskStartToCloseTimeout": "{{ taskStartToCloseTimeout }}", 
"childPolicy": "{{ childPolicy }}", 
"lambdaRole": "{{ lambdaRole }}"
}'
;
```
</TabItem>
</Tabs>
