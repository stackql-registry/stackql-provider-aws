--- 
title: job_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - job_executions
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

Creates, updates, deletes, gets or lists a <code>job_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_jobs_data.job_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_execution"
    values={[
        { label: 'describe_job_execution', value: 'describe_job_execution' }
    ]}
>
<TabItem value="describe_job_execution">

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
    <td><CopyableCode code="approximateSecondsBeforeTimedOut" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated number of seconds that remain before the job execution status will be changed to TIMED_OUT. The actual job execution timeout can occur up to 60 seconds later than the estimated duration.</td>
</tr>
<tr>
    <td><CopyableCode code="executionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>A number that identifies a particular job execution on a particular device. It can be used later in commands that return or update job execution information.</td>
</tr>
<tr>
    <td><CopyableCode code="jobDocument" /></td>
    <td><code>string</code></td>
    <td>The content of the job document.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier you assigned to this job when it was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time, in seconds since the epoch, when the job execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time, in seconds since the epoch, when the job execution was enqueued.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time, in seconds since the epoch, when the job execution was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED", "TIMED_OUT", "REJECTED", or "REMOVED". (QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, TIMED_OUT, REJECTED, REMOVED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>A collection of name/value pairs that describe the status of the job execution. The maximum length of the value in the name/value pair is 1,024 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing that is executing the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the job execution. Job execution versions are incremented each time they are updated by a device.</td>
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
    <td><a href="#describe_job_execution"><CopyableCode code="describe_job_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeJobDocument"><code>includeJobDocument</code></a>, <a href="#parameter-executionNumber"><code>executionNumber</code></a></td>
    <td>Gets details of a job execution. Requires permission to access the DescribeJobExecution action.</td>
</tr>
<tr>
    <td><a href="#update_job_execution"><CopyableCode code="update_job_execution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of a job execution. Requires permission to access the UpdateJobExecution action.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to this job when it was created.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing associated with the device.</td>
</tr>
<tr id="parameter-executionNumber">
    <td><CopyableCode code="executionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.</td>
</tr>
<tr id="parameter-includeJobDocument">
    <td><CopyableCode code="includeJobDocument" /></td>
    <td><code>boolean</code></td>
    <td>Optional. Unless set to false, the response contains the job document. The default is true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job_execution"
    values={[
        { label: 'describe_job_execution', value: 'describe_job_execution' }
    ]}
>
<TabItem value="describe_job_execution">

Gets details of a job execution. Requires permission to access the DescribeJobExecution action.

```sql
SELECT
approximateSecondsBeforeTimedOut,
executionNumber,
jobDocument,
jobId,
lastUpdatedAt,
queuedAt,
startedAt,
status,
statusDetails,
thingName,
versionNumber
FROM aws.iot_jobs_data.job_executions
WHERE job_id = '{{ job_id }}' -- required
AND thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
AND includeJobDocument = '{{ includeJobDocument }}'
AND executionNumber = '{{ executionNumber }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job_execution"
    values={[
        { label: 'update_job_execution', value: 'update_job_execution' }
    ]}
>
<TabItem value="update_job_execution">

Updates the status of a job execution. Requires permission to access the UpdateJobExecution action.

```sql
UPDATE aws.iot_jobs_data.job_executions
SET 
status = '{{ status }}',
statusDetails = '{{ statusDetails }}',
stepTimeoutInMinutes = {{ stepTimeoutInMinutes }},
expectedVersion = {{ expectedVersion }},
includeJobExecutionState = {{ includeJobExecutionState }},
includeJobDocument = {{ includeJobDocument }},
executionNumber = {{ executionNumber }}
WHERE 
job_id = '{{ job_id }}' --required
AND thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
executionState,
jobDocument;
```
</TabItem>
</Tabs>
