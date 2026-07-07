--- 
title: pending_job_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - pending_job_executions
  - iot_jobs_data
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

Creates, updates, deletes, gets or lists a <code>pending_job_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pending_job_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_jobs_data.pending_job_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pending_job_executions"
    values={[
        { label: 'get_pending_job_executions', value: 'get_pending_job_executions' }
    ]}
>
<TabItem value="get_pending_job_executions">

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
    <td><CopyableCode code="inProgressJobs" /></td>
    <td><code>array</code></td>
    <td>A list of JobExecutionSummary objects with status IN_PROGRESS.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedJobs" /></td>
    <td><code>array</code></td>
    <td>A list of JobExecutionSummary objects with status QUEUED.</td>
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
    <td><a href="#get_pending_job_executions"><CopyableCode code="get_pending_job_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the list of all jobs for a thing that are not in a terminal status. Requires permission to access the GetPendingJobExecutions action.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing that is executing the job.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pending_job_executions"
    values={[
        { label: 'get_pending_job_executions', value: 'get_pending_job_executions' }
    ]}
>
<TabItem value="get_pending_job_executions">

Gets the list of all jobs for a thing that are not in a terminal status. Requires permission to access the GetPendingJobExecutions action.

```sql
SELECT
inProgressJobs,
queuedJobs
FROM aws.iot_jobs_data.pending_job_executions
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
