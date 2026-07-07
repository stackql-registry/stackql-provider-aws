--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - transfer
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_execution"
    values={[
        { label: 'describe_execution', value: 'describe_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="describe_execution">

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
    <td><CopyableCode code="Execution" /></td>
    <td><code>object</code></td>
    <td>The structure that contains the details of the workflow' execution.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the workflow. (pattern: &lt;code&gt;w-(&#91;a-z0-9&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_executions">

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
    <td><CopyableCode code="ExecutionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the execution of a workflow. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InitialFileLocation" /></td>
    <td><code>object</code></td>
    <td>A structure that describes the Amazon S3 or EFS file location. This is the file location when the execution begins: if the file is being copied, this is the initial (as opposed to destination) file location.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceMetadata" /></td>
    <td><code>object</code></td>
    <td>A container object for the session details that are associated with a workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status is one of the execution. Can be in progress, completed, exception encountered, or handling the exception. (IN_PROGRESS, COMPLETED, EXCEPTION, HANDLING_EXCEPTION)</td>
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
    <td><a href="#describe_execution"><CopyableCode code="describe_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You can use DescribeExecution to check the details of the execution of the specified workflow. This API call only returns details for in-progress workflows. If you provide an ID for an execution that is not in progress, or if the execution doesn't match the specified workflow ID, you receive a ResourceNotFound exception.</td>
</tr>
<tr>
    <td><a href="#list_executions"><CopyableCode code="list_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all in-progress executions for the specified workflow. If the specified workflow ID cannot be found, ListExecutions returns a ResourceNotFound exception.</td>
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
    defaultValue="describe_execution"
    values={[
        { label: 'describe_execution', value: 'describe_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="describe_execution">

You can use DescribeExecution to check the details of the execution of the specified workflow. This API call only returns details for in-progress workflows. If you provide an ID for an execution that is not in progress, or if the execution doesn't match the specified workflow ID, you receive a ResourceNotFound exception.

```sql
SELECT
Execution,
WorkflowId
FROM aws.transfer.executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_executions">

Lists all in-progress executions for the specified workflow. If the specified workflow ID cannot be found, ListExecutions returns a ResourceNotFound exception.

```sql
SELECT
ExecutionId,
InitialFileLocation,
ServiceMetadata,
Status
FROM aws.transfer.executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
