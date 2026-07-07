--- 
title: notebook_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_executions
  - emr
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

Creates, updates, deletes, gets or lists a <code>notebook_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebook_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.notebook_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notebook_execution"
    values={[
        { label: 'describe_notebook_execution', value: 'describe_notebook_execution' },
        { label: 'list_notebook_executions', value: 'list_notebook_executions' }
    ]}
>
<TabItem value="describe_notebook_execution">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EditorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon EMR Notebook that is used for the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when notebook execution ended.</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentVariables" /></td>
    <td><code>object</code></td>
    <td>The environment variables associated with the notebook execution.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionEngine" /></td>
    <td><code>object</code></td>
    <td>The execution engine, such as an Amazon EMR cluster, used to run the Amazon EMR notebook and perform the notebook execution.</td>
</tr>
<tr>
    <td><CopyableCode code="LastStateChangeReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the latest status change of the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookExecutionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookExecutionName" /></td>
    <td><code>string</code></td>
    <td>A name for the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookInstanceSecurityGroupId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon EC2 security group associated with the Amazon EMR Notebook instance. For more information see Specifying Amazon EC2 Security Groups for Amazon EMR Notebooks in the Amazon EMR Management Guide. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookParams" /></td>
    <td><code>string</code></td>
    <td>Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookS3Location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location that stores the notebook execution input.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputNotebookFormat" /></td>
    <td><code>string</code></td>
    <td>The output format for the notebook execution. (HTML)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputNotebookS3Location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location for the notebook execution output.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputNotebookURI" /></td>
    <td><code>string</code></td>
    <td>The location of the notebook execution's output file in Amazon S3. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when notebook execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the notebook execution. START_PENDING indicates that the cluster has received the execution request but execution has not begun. STARTING indicates that the execution is starting on the cluster. RUNNING indicates that the execution is being processed by the cluster. FINISHING indicates that execution processing is in the final stages. FINISHED indicates that the execution has completed without error. FAILING indicates that the execution is failing and will not finish successfully. FAILED indicates that the execution failed. STOP_PENDING indicates that the cluster has received a StopNotebookExecution request and the stop is pending. STOPPING indicates that the cluster is in the process of stopping the execution as a result of a StopNotebookExecution request. STOPPED indicates that the execution stopped because of a StopNotebookExecution request. (START_PENDING, STARTING, RUNNING, FINISHING, FINISHED, FAILING, FAILED, STOP_PENDING, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notebook_executions">

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
    <td><CopyableCode code="EditorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the editor associated with the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when notebook execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionEngineId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the execution engine for the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookExecutionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookExecutionName" /></td>
    <td><code>string</code></td>
    <td>The name of the notebook execution. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NotebookS3Location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location that stores the notebook execution input.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when notebook execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the notebook execution. START_PENDING indicates that the cluster has received the execution request but execution has not begun. STARTING indicates that the execution is starting on the cluster. RUNNING indicates that the execution is being processed by the cluster. FINISHING indicates that execution processing is in the final stages. FINISHED indicates that the execution has completed without error. FAILING indicates that the execution is failing and will not finish successfully. FAILED indicates that the execution failed. STOP_PENDING indicates that the cluster has received a StopNotebookExecution request and the stop is pending. STOPPING indicates that the cluster is in the process of stopping the execution as a result of a StopNotebookExecution request. STOPPED indicates that the execution stopped because of a StopNotebookExecution request. (START_PENDING, STARTING, RUNNING, FINISHING, FINISHED, FAILING, FAILED, STOP_PENDING, STOPPING, STOPPED)</td>
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
    <td><a href="#describe_notebook_execution"><CopyableCode code="describe_notebook_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details of a notebook execution.</td>
</tr>
<tr>
    <td><a href="#list_notebook_executions"><CopyableCode code="list_notebook_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple ListNotebookExecutions calls.</td>
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
    defaultValue="describe_notebook_execution"
    values={[
        { label: 'describe_notebook_execution', value: 'describe_notebook_execution' },
        { label: 'list_notebook_executions', value: 'list_notebook_executions' }
    ]}
>
<TabItem value="describe_notebook_execution">

Provides details of a notebook execution.

```sql
SELECT
Arn,
EditorId,
EndTime,
EnvironmentVariables,
ExecutionEngine,
LastStateChangeReason,
NotebookExecutionId,
NotebookExecutionName,
NotebookInstanceSecurityGroupId,
NotebookParams,
NotebookS3Location,
OutputNotebookFormat,
OutputNotebookS3Location,
OutputNotebookURI,
StartTime,
Status,
Tags
FROM aws.emr.notebook_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notebook_executions">

Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple ListNotebookExecutions calls.

```sql
SELECT
EditorId,
EndTime,
ExecutionEngineId,
NotebookExecutionId,
NotebookExecutionName,
NotebookS3Location,
StartTime,
Status
FROM aws.emr.notebook_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
