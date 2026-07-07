--- 
title: batch_job_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_job_executions
  - m2
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

Creates, updates, deletes, gets or lists a <code>batch_job_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_job_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.batch_job_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_batch_job_execution"
    values={[
        { label: 'get_batch_job_execution', value: 'get_batch_job_execution' },
        { label: 'list_batch_job_executions', value: 'list_batch_job_executions' }
    ]}
>
<TabItem value="get_batch_job_execution">

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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="batchJobIdentifier" /></td>
    <td><code>object</code></td>
    <td>The unique identifier of this batch job.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch job execution ended.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this batch job execution. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this batch job. (pattern: &lt;code&gt;^\S&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of this batch job. (pattern: &lt;code&gt;^\S&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobStepRestartMarker" /></td>
    <td><code>object</code></td>
    <td>The step/procedure step information for the restart batch job operation.</td>
</tr>
<tr>
    <td><CopyableCode code="jobType" /></td>
    <td><code>string</code></td>
    <td>The type of job. (VSE, JES2, JES3)</td>
</tr>
<tr>
    <td><CopyableCode code="jobUser" /></td>
    <td><code>string</code></td>
    <td>The user for the job. (pattern: &lt;code&gt;^\S&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="returnCode" /></td>
    <td><code>string</code></td>
    <td>The batch job return code from either the Blu Age or Micro Focus runtime engines. For more information, see Batch return codes in the IBM WebSphere Application Server documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch job execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the batch job execution. (Submitting, Holding, Dispatching, Running, Cancelling, Cancelled, Succeeded, Failed, Purged, Succeeded With Warning)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_batch_job_executions">

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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application that hosts this batch job. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="batchJobIdentifier" /></td>
    <td><code>object</code></td>
    <td>The unique identifier of this batch job.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this batch job execution ended.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of this execution of the batch job. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a particular batch job. (pattern: &lt;code&gt;^\S&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of a particular batch job. (pattern: &lt;code&gt;^\S&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobType" /></td>
    <td><code>string</code></td>
    <td>The type of a particular batch job execution. (VSE, JES2, JES3)</td>
</tr>
<tr>
    <td><CopyableCode code="returnCode" /></td>
    <td><code>string</code></td>
    <td>The batch job return code from either the Blu Age or Micro Focus runtime engines. For more information, see Batch return codes in the IBM WebSphere Application Server documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a particular batch job execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a particular batch job execution. (Submitting, Holding, Dispatching, Running, Cancelling, Cancelled, Succeeded, Failed, Purged, Succeeded With Warning)</td>
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
    <td><a href="#get_batch_job_execution"><CopyableCode code="get_batch_job_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a specific batch job execution for a specific application.</td>
</tr>
<tr>
    <td><a href="#list_batch_job_executions"><CopyableCode code="list_batch_job_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-executionIds"><code>executionIds</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-startedAfter"><code>startedAfter</code></a>, <a href="#parameter-startedBefore"><code>startedBefore</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists historical, current, and scheduled batch job executions for a specific application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application.</td>
</tr>
<tr id="parameter-execution_id">
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the batch job execution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-executionIds">
    <td><CopyableCode code="executionIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifier of each batch job execution.</td>
</tr>
<tr id="parameter-jobName">
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of each batch job execution.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of batch job executions to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to control the number of batch job executions displayed in the list.</td>
</tr>
<tr id="parameter-startedAfter">
    <td><CopyableCode code="startedAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time after which the batch job executions started.</td>
</tr>
<tr id="parameter-startedBefore">
    <td><CopyableCode code="startedBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time before the batch job executions started.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the batch job executions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_batch_job_execution"
    values={[
        { label: 'get_batch_job_execution', value: 'get_batch_job_execution' },
        { label: 'list_batch_job_executions', value: 'list_batch_job_executions' }
    ]}
>
<TabItem value="get_batch_job_execution">

Gets the details of a specific batch job execution for a specific application.

```sql
SELECT
applicationId,
batchJobIdentifier,
endTime,
executionId,
jobId,
jobName,
jobStepRestartMarker,
jobType,
jobUser,
returnCode,
startTime,
status,
statusReason
FROM aws.m2.batch_job_executions
WHERE application_id = '{{ application_id }}' -- required
AND execution_id = '{{ execution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_batch_job_executions">

Lists historical, current, and scheduled batch job executions for a specific application.

```sql
SELECT
applicationId,
batchJobIdentifier,
endTime,
executionId,
jobId,
jobName,
jobType,
returnCode,
startTime,
status
FROM aws.m2.batch_job_executions
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND executionIds = '{{ executionIds }}'
AND jobName = '{{ jobName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND startedAfter = '{{ startedAfter }}'
AND startedBefore = '{{ startedBefore }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
