--- 
title: job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_runs
  - datazone
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

Creates, updates, deletes, gets or lists a <code>job_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.job_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_run"
    values={[
        { label: 'get_job_run', value: 'get_job_run' },
        { label: 'list_job_runs', value: 'list_job_runs' }
    ]}
>
<TabItem value="get_job_run">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>The details of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the job run ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error generated if the action is not completed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The type of the job run. (LINEAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="run_mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the job run. (SCHEDULED, ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the job run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job run. (SCHEDULED, IN_PROGRESS, SUCCESS, PARTIALLY_SUCCEEDED, FAILED, ABORTED, TIMED_OUT, CANCELED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_job_runs">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The domain ID of the job run. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error of a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID of a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The job type of a job run. (LINEAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The run ID of a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_mode" /></td>
    <td><code>string</code></td>
    <td>The run mode of a job run. (SCHEDULED, ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a job run. (SCHEDULED, IN_PROGRESS, SUCCESS, PARTIALLY_SUCCEEDED, FAILED, ABORTED, TIMED_OUT, CANCELED)</td>
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
    <td><a href="#get_job_run"><CopyableCode code="get_job_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The details of the job run.</td>
</tr>
<tr>
    <td><a href="#list_job_runs"><CopyableCode code="list_job_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-job_identifier"><code>job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists job runs.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to list job runs.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run.</td>
</tr>
<tr id="parameter-job_identifier">
    <td><CopyableCode code="job_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of job runs to return in a single call to ListJobRuns. When the number of job runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListJobRuns to list the next set of job runs.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of job runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of job runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListJobRuns to list the next set of job runs.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the order in which job runs are to be sorted.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a job run.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job_run"
    values={[
        { label: 'get_job_run', value: 'get_job_run' },
        { label: 'list_job_runs', value: 'list_job_runs' }
    ]}
>
<TabItem value="get_job_run">

The details of the job run.

```sql
SELECT
id,
created_at,
created_by,
details,
domain_id,
end_time,
error,
job_id,
job_type,
run_mode,
start_time,
status
FROM aws.datazone.job_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_job_runs">

Lists job runs.

```sql
SELECT
created_at,
created_by,
domain_id,
end_time,
error,
job_id,
job_type,
run_id,
run_mode,
start_time,
status
FROM aws.datazone.job_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND job_identifier = '{{ job_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND sortOrder = '{{ sortOrder }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
