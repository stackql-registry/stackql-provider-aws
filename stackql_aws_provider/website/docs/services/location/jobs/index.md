--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - location
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="get_job">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action performed by the job. (ValidateAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="action_options" /></td>
    <td><code>object</code></td>
    <td>Additional options for configuring job action parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job creation time in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sss.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job completion time in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sss. Only returned for jobs in a terminal status: Completed | Failed | Cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error information if the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>IAM role used for permissions when running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="input_options" /></td>
    <td><code>object</code></td>
    <td>Input configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the specified job. (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*):geo(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*))(:&#91;0-9&#93;+):((\*)|(&#91;-a-z&#93;+&#91;/&#93;&#91;*-._\w&#93;+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>Unique job identifier. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Job name (if provided during creation). (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_options" /></td>
    <td><code>object</code></td>
    <td>Output configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current job status. (Pending, Running, Completed, Failed, Cancelling, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags and corresponding values associated with the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update time in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sss.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jobs">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action performed by the job. (ValidateAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="action_options" /></td>
    <td><code>object</code></td>
    <td>Additional options for configuring job action parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job creation time in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sss.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job completion time in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sss. Only returned for jobs in a terminal status: Completed | Failed | Cancelled.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error information if the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>IAM role used for job execution.</td>
</tr>
<tr>
    <td><CopyableCode code="input_options" /></td>
    <td><code>object</code></td>
    <td>Input configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the job. (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*):geo(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*))(:&#91;0-9&#93;+):((\*)|(&#91;-a-z&#93;+&#91;/&#93;&#91;*-._\w&#93;+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>Unique job identifier. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Job name (if provided during creation). (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_options" /></td>
    <td><code>object</code></td>
    <td>Output configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current job status. (Pending, Running, Completed, Failed, Cancelling, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update time in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sss.</td>
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
    <td><a href="#get_job"><CopyableCode code="get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>GetJob retrieves detailed information about a specific job, including its current status, configuration, and error information if the job failed. For more information, see Job concepts in the Amazon Location Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>ListJobs retrieves a list of jobs with optional filtering and pagination support. For more information, see Job concepts in the Amazon Location Service Developer Guide.</td>
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
    <td>The unique identifier of the job to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="get_job">

GetJob retrieves detailed information about a specific job, including its current status, configuration, and error information if the job failed. For more information, see Job concepts in the Amazon Location Service Developer Guide.

```sql
SELECT
action,
action_options,
created_at,
ended_at,
error,
execution_role_arn,
input_options,
job_arn,
job_id,
name,
output_options,
status,
tags,
updated_at
FROM aws.location.jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

ListJobs retrieves a list of jobs with optional filtering and pagination support. For more information, see Job concepts in the Amazon Location Service Developer Guide.

```sql
SELECT
action,
action_options,
created_at,
ended_at,
error,
execution_role_arn,
input_options,
job_arn,
job_id,
name,
output_options,
status,
updated_at
FROM aws.location.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
