--- 
title: id_mapping_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - id_mapping_jobs
  - entityresolution
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

Creates, updates, deletes, gets or lists an <code>id_mapping_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="id_mapping_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.id_mapping_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_id_mapping_job"
    values={[
        { label: 'get_id_mapping_job', value: 'get_id_mapping_job' },
        { label: 'list_id_mapping_jobs', value: 'list_id_mapping_jobs' }
    ]}
>
<TabItem value="get_id_mapping_job">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the job has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetails" /></td>
    <td><code>object</code></td>
    <td>An object containing an error message, if there was an error.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobType" /></td>
    <td><code>string</code></td>
    <td>The job type of the ID mapping job. A value of INCREMENTAL indicates that only new or changed data was processed since the last job run. This is the default job type if the workflow was created with an incrementalRunConfig. A value of BATCH indicates that all data was processed from the input source, regardless of previous job runs. This is the default job type if the workflow wasn't created with an incrementalRunConfig. A value of DELETE_ONLY indicates that only deletion requests from BatchDeleteUniqueIds were processed. (BATCH, INCREMENTAL, DELETE_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Metrics associated with the execution, specifically total records processed, unique IDs generated, and records the execution skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="outputSourceConfig" /></td>
    <td><code>array</code></td>
    <td>A list of OutputSource objects.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. (RUNNING, SUCCEEDED, FAILED, QUEUED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_id_mapping_jobs">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the job has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. (RUNNING, SUCCEEDED, FAILED, QUEUED)</td>
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
    <td><a href="#get_id_mapping_job"><CopyableCode code="get_id_mapping_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status, metrics, and errors (if there are any) that are associated with a job.</td>
</tr>
<tr>
    <td><a href="#list_id_mapping_jobs"><CopyableCode code="list_id_mapping_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all ID mapping jobs for a given workflow.</td>
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
    <td>The ID of the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workflow_name">
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow to be retrieved.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_id_mapping_job"
    values={[
        { label: 'get_id_mapping_job', value: 'get_id_mapping_job' },
        { label: 'list_id_mapping_jobs', value: 'list_id_mapping_jobs' }
    ]}
>
<TabItem value="get_id_mapping_job">

Returns the status, metrics, and errors (if there are any) that are associated with a job.

```sql
SELECT
endTime,
errorDetails,
jobId,
jobType,
metrics,
outputSourceConfig,
startTime,
status
FROM aws.entityresolution.id_mapping_jobs
WHERE workflow_name = '{{ workflow_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_id_mapping_jobs">

Lists all ID mapping jobs for a given workflow.

```sql
SELECT
endTime,
jobId,
startTime,
status
FROM aws.entityresolution.id_mapping_jobs
WHERE workflow_name = '{{ workflow_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
