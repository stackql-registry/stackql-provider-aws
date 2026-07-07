--- 
title: workflow_types
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_types
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

Creates, updates, deletes, gets or lists a <code>workflow_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.swf.workflow_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workflow_type"
    values={[
        { label: 'describe_workflow_type', value: 'describe_workflow_type' },
        { label: 'list_workflow_types', value: 'list_workflow_types' }
    ]}
>
<TabItem value="describe_workflow_type">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings of the workflow type registered through RegisterWorkflowType</td>
</tr>
<tr>
    <td><CopyableCode code="typeInfo" /></td>
    <td><code>object</code></td>
    <td>General information about the workflow type. The status of the workflow type (returned in the WorkflowTypeInfo structure) can be one of the following. REGISTERED – The type is registered and available. Workers supporting this type should be running. DEPRECATED – The type was deprecated using DeprecateWorkflowType, but is still in use. You should keep workers supporting this type running. You cannot create new workflow executions of this type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_types">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this type was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the type is in deprecated state, then it is set to the date when the type was deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the type registered through RegisterWorkflowType.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workflow type. (REGISTERED, DEPRECATED)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowType" /></td>
    <td><code>object</code></td>
    <td>The workflow type this information is about.</td>
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
    <td><a href="#describe_workflow_type"><CopyableCode code="describe_workflow_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_workflow_types"><CopyableCode code="list_workflow_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#register_workflow_type"><CopyableCode code="register_workflow_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action. If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_type"><CopyableCode code="delete_workflow_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified workflow type. Note: Prior to deletion, workflow types must first be deprecated. After a workflow type has been deleted, you cannot create new executions of that type. Executions that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
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
    defaultValue="describe_workflow_type"
    values={[
        { label: 'describe_workflow_type', value: 'describe_workflow_type' },
        { label: 'list_workflow_types', value: 'list_workflow_types' }
    ]}
>
<TabItem value="describe_workflow_type">

Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
configuration,
typeInfo
FROM aws.swf.workflow_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_types">

Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
creationDate,
deprecationDate,
description,
status,
workflowType
FROM aws.swf.workflow_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_workflow_type"
    values={[
        { label: 'register_workflow_type', value: 'register_workflow_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_workflow_type">

Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action. If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
INSERT INTO aws.swf.workflow_types (
domain,
name,
version,
description,
defaultTaskStartToCloseTimeout,
defaultExecutionStartToCloseTimeout,
defaultTaskList,
defaultTaskPriority,
defaultChildPolicy,
defaultLambdaRole,
region
)
SELECT 
'{{ domain }}' /* required */,
'{{ name }}' /* required */,
'{{ version }}' /* required */,
'{{ description }}',
'{{ defaultTaskStartToCloseTimeout }}',
'{{ defaultExecutionStartToCloseTimeout }}',
'{{ defaultTaskList }}',
'{{ defaultTaskPriority }}',
'{{ defaultChildPolicy }}',
'{{ defaultLambdaRole }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflow_types resource.
    - name: domain
      value: "{{ domain }}"
      description: |
        The name of the domain in which to register the workflow type.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the workflow type. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn.
    - name: version
      value: "{{ version }}"
      description: |
        The version of the workflow type. The workflow type consists of the name and version, the combination of which must be unique within the domain. To get a list of all currently registered workflow types, use the ListWorkflowTypes action. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn.
    - name: description
      value: "{{ description }}"
      description: |
        Textual description of the workflow type.
    - name: defaultTaskStartToCloseTimeout
      value: "{{ defaultTaskStartToCloseTimeout }}"
      description: |
        If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
    - name: defaultExecutionStartToCloseTimeout
      value: "{{ defaultExecutionStartToCloseTimeout }}"
      description: |
        If set, specifies the default maximum duration for executions of this workflow type. You can override this default when starting an execution through the StartWorkflowExecution Action or StartChildWorkflowExecution Decision. The duration is specified in seconds; an integer greater than or equal to 0. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for defaultExecutionStartToCloseTimeout; there is a one-year max limit on the time that a workflow execution can run. Exceeding this limit always causes the workflow execution to time out.
    - name: defaultTaskList
      description: |
        Represents a task list.
      value:
        name: "{{ name }}"
    - name: defaultTaskPriority
      value: "{{ defaultTaskPriority }}"
      description: |
        The default task priority to assign to the workflow type. If not assigned, then 0 is used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide.
    - name: defaultChildPolicy
      value: "{{ defaultChildPolicy }}"
      description: |
        If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child executions continue to run.
      valid_values: ['TERMINATE', 'REQUEST_CANCEL', 'ABANDON']
    - name: defaultLambdaRole
      value: "{{ defaultLambdaRole }}"
      description: |
        The default IAM role attached to this workflow type. Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't specify an IAM role when you start this workflow type, the default Lambda role is attached to the execution. For more information, see https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_type"
    values={[
        { label: 'delete_workflow_type', value: 'delete_workflow_type' }
    ]}
>
<TabItem value="delete_workflow_type">

Deletes the specified workflow type. Note: Prior to deletion, workflow types must first be deprecated. After a workflow type has been deleted, you cannot create new executions of that type. Executions that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
DELETE FROM aws.swf.workflow_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
