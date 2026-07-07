--- 
title: workflow_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_runs
  - glue
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

Creates, updates, deletes, gets or lists a <code>workflow_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.workflow_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_run"
    values={[
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'get_workflow_runs', value: 'get_workflow_runs' }
    ]}
>
<TabItem value="get_workflow_run">

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
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workflow run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>This error message describes any error that may have occurred in starting the workflow run. Currently the only error message is "Concurrent runs exceeded for workflow: foo."</td>
</tr>
<tr>
    <td><CopyableCode code="Graph" /></td>
    <td><code>object</code></td>
    <td>The graph representing all the Glue components that belong to the workflow as nodes and directed connections between them as edges.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the workflow that was run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PreviousRunId" /></td>
    <td><code>string</code></td>
    <td>The ID of the previous workflow run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workflow run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="StartingEventBatchCondition" /></td>
    <td><code>object</code></td>
    <td>The batch condition that started the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="Statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics of the run.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the workflow run. (RUNNING, COMPLETED, STOPPING, STOPPED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowRunId" /></td>
    <td><code>string</code></td>
    <td>The ID of this workflow run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowRunProperties" /></td>
    <td><code>object</code></td>
    <td>The workflow run properties which were set during the run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_workflow_runs">

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
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workflow run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>This error message describes any error that may have occurred in starting the workflow run. Currently the only error message is "Concurrent runs exceeded for workflow: foo."</td>
</tr>
<tr>
    <td><CopyableCode code="Graph" /></td>
    <td><code>object</code></td>
    <td>The graph representing all the Glue components that belong to the workflow as nodes and directed connections between them as edges.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the workflow that was run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PreviousRunId" /></td>
    <td><code>string</code></td>
    <td>The ID of the previous workflow run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workflow run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="StartingEventBatchCondition" /></td>
    <td><code>object</code></td>
    <td>The batch condition that started the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="Statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics of the run.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the workflow run. (RUNNING, COMPLETED, STOPPING, STOPPED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowRunId" /></td>
    <td><code>string</code></td>
    <td>The ID of this workflow run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowRunProperties" /></td>
    <td><code>object</code></td>
    <td>The workflow run properties which were set during the run.</td>
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
    <td><a href="#get_workflow_run"><CopyableCode code="get_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for a given workflow run. Job run history is accessible for 90 days for your workflow and job run.</td>
</tr>
<tr>
    <td><a href="#get_workflow_runs"><CopyableCode code="get_workflow_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for all runs of a given workflow.</td>
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
    defaultValue="get_workflow_run"
    values={[
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'get_workflow_runs', value: 'get_workflow_runs' }
    ]}
>
<TabItem value="get_workflow_run">

Retrieves the metadata for a given workflow run. Job run history is accessible for 90 days for your workflow and job run.

```sql
SELECT
CompletedOn,
ErrorMessage,
Graph,
Name,
PreviousRunId,
StartedOn,
StartingEventBatchCondition,
Statistics,
Status,
WorkflowRunId,
WorkflowRunProperties
FROM aws.glue.workflow_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_workflow_runs">

Retrieves metadata for all runs of a given workflow.

```sql
SELECT
CompletedOn,
ErrorMessage,
Graph,
Name,
PreviousRunId,
StartedOn,
StartingEventBatchCondition,
Statistics,
Status,
WorkflowRunId,
WorkflowRunProperties
FROM aws.glue.workflow_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
