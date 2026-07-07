--- 
title: closed_workflow_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - closed_workflow_executions
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

Creates, updates, deletes, gets or lists a <code>closed_workflow_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="closed_workflow_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.swf.closed_workflow_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_closed_workflow_executions"
    values={[
        { label: 'list_closed_workflow_executions', value: 'list_closed_workflow_executions' }
    ]}
>
<TabItem value="list_closed_workflow_executions">

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
    <td><CopyableCode code="cancelRequested" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if a cancellation is requested for this workflow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="closeStatus" /></td>
    <td><code>string</code></td>
    <td>If the execution status is closed then this specifies how the execution was closed: COMPLETED – the execution was successfully completed. CANCELED – the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed. TERMINATED – the execution was force terminated. FAILED – the execution failed to complete. TIMED_OUT – the execution did not complete in the alloted time and was automatically timed out. CONTINUED_AS_NEW – the execution is logically continued. This means the current execution was completed and a new execution was started to carry on the workflow. (COMPLETED, FAILED, CANCELED, TERMINATED, CONTINUED_AS_NEW, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="closeTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the workflow execution was closed. Set only if the execution status is CLOSED.</td>
</tr>
<tr>
    <td><CopyableCode code="execution" /></td>
    <td><code>object</code></td>
    <td>The workflow execution this information is about.</td>
</tr>
<tr>
    <td><CopyableCode code="executionStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the execution. (OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>If this workflow execution is a child of another execution then contains the workflow execution that started this execution.</td>
</tr>
<tr>
    <td><CopyableCode code="startTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the execution was started.</td>
</tr>
<tr>
    <td><CopyableCode code="tagList" /></td>
    <td><code>array</code></td>
    <td>The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowType" /></td>
    <td><code>object</code></td>
    <td>The type of the workflow execution.</td>
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
    <td><a href="#list_closed_workflow_executions"><CopyableCode code="list_closed_workflow_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#count_closed_workflow_executions"><CopyableCode code="count_closed_workflow_executions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.</td>
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
    defaultValue="list_closed_workflow_executions"
    values={[
        { label: 'list_closed_workflow_executions', value: 'list_closed_workflow_executions' }
    ]}
>
<TabItem value="list_closed_workflow_executions">

Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
SELECT
cancelRequested,
closeStatus,
closeTimestamp,
execution,
executionStatus,
parent,
startTimestamp,
tagList,
workflowType
FROM aws.swf.closed_workflow_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="count_closed_workflow_executions"
    values={[
        { label: 'count_closed_workflow_executions', value: 'count_closed_workflow_executions' }
    ]}
>
<TabItem value="count_closed_workflow_executions">

Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

```sql
EXEC aws.swf.closed_workflow_executions.count_closed_workflow_executions 
@region='{{ region }}' --required 
@@json=
'{
"domain": "{{ domain }}", 
"startTimeFilter": "{{ startTimeFilter }}", 
"closeTimeFilter": "{{ closeTimeFilter }}", 
"executionFilter": "{{ executionFilter }}", 
"typeFilter": "{{ typeFilter }}", 
"tagFilter": "{{ tagFilter }}", 
"closeStatusFilter": "{{ closeStatusFilter }}"
}'
;
```
</TabItem>
</Tabs>
