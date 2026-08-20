--- 
title: job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_runs
  - emr_serverless
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_serverless.job_runs" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The optional job run name. This doesn't have to be unique. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application the job is running on. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN of the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+\/jobruns\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>The attempt of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="attempt_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the job run attempt was created.</td>
</tr>
<tr>
    <td><CopyableCode code="attempt_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the job run attempt was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="billed_resource_utilization" /></td>
    <td><code>object</code></td>
    <td>The aggregate vCPU, memory, and storage that Amazon Web Services has billed for the job run. The billed resources include a 1-minute minimum usage for workers, plus additional storage over 20 GB per worker. Note that billed resources do not include usage for idle pre-initialized workers.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_overrides" /></td>
    <td><code>object</code></td>
    <td>The configuration settings that are used to override default configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job was terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_iam_policy" /></td>
    <td><code>object</code></td>
    <td>Optional IAM policy. The resulting job IAM role permissions will be an intersection of the policies passed and the policy associated with your job execution role.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN of the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_timeout_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Returns the job run timeout value from the StartJobRun call. If no timeout was specified, then it returns the default timeout of 720 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="image_configuration" /></td>
    <td><code>object</code></td>
    <td>The applied image configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="job_driver" /></td>
    <td><code>object</code></td>
    <td>The job driver for the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the job run. (BATCH, STREAMING)</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for customer VPC connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="queued_duration_milliseconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total time for a job in the QUEUED state in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release associated with the application your job is running on. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retry_policy" /></td>
    <td><code>object</code></td>
    <td>The retry policy of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job moved to the RUNNING state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job run. (SUBMITTED, PENDING, SCHEDULED, RUNNING, SUCCESS, FAILED, CANCELLING, CANCELLED, QUEUED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>The state details of the job run. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="total_execution_duration_seconds" /></td>
    <td><code>integer</code></td>
    <td>The job run total execution duration in seconds. This field is only available for job runs in a COMPLETED, FAILED, or CANCELLED state.</td>
</tr>
<tr>
    <td><CopyableCode code="total_resource_utilization" /></td>
    <td><code>object</code></td>
    <td>The aggregate vCPU, memory, and storage resources used from the time the job starts to execute, until the time the job terminates, rounded up to the nearest second.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type_specifications" /></td>
    <td><code>object</code></td>
    <td>The specification applied to each worker type. Includes the JobRun-level ImageConfiguration when the applicationLevelDigestResolution is false for the application.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The optional job run name. This doesn't have to be unique. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application the job is running on. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+\/jobruns\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>The attempt number of the job run execution.</td>
</tr>
<tr>
    <td><CopyableCode code="attempt_created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the job run attempt was created.</td>
</tr>
<tr>
    <td><CopyableCode code="attempt_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the job run attempt was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN of the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the job run. (BATCH, STREAMING)</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release associated with the application your job is running on. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job run. (SUBMITTED, PENDING, SCHEDULED, RUNNING, SUCCESS, FAILED, CANCELLING, CANCELLED, QUEUED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>The state details of the job run. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of job run, such as Spark or Hive.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run was last updated.</td>
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
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-job_run_id"><code>job_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-attempt"><code>attempt</code></a></td>
    <td>Displays detailed information about a job run.</td>
</tr>
<tr>
    <td><a href="#list_job_runs"><CopyableCode code="list_job_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-createdAtAfter"><code>createdAtAfter</code></a>, <a href="#parameter-createdAtBefore"><code>createdAtBefore</code></a>, <a href="#parameter-states"><code>states</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td>Lists job runs based on a set of parameters.</td>
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
    <td>The ID of the application for which to list the job run.</td>
</tr>
<tr id="parameter-job_run_id">
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-attempt">
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job.</td>
</tr>
<tr id="parameter-createdAtAfter">
    <td><CopyableCode code="createdAtAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The lower bound of the option to filter by creation date and time.</td>
</tr>
<tr id="parameter-createdAtBefore">
    <td><CopyableCode code="createdAtBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The upper bound of the option to filter by creation date and time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of job runs that can be listed.</td>
</tr>
<tr id="parameter-mode">
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the job runs to list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of job run results.</td>
</tr>
<tr id="parameter-states">
    <td><CopyableCode code="states" /></td>
    <td><code>array</code></td>
    <td>An optional filter for job run states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.</td>
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

Displays detailed information about a job run.

```sql
SELECT
name,
application_id,
arn,
attempt,
attempt_created_at,
attempt_updated_at,
billed_resource_utilization,
configuration_overrides,
created_at,
created_by,
ended_at,
execution_iam_policy,
execution_role,
execution_timeout_minutes,
image_configuration,
job_driver,
job_run_id,
mode,
network_configuration,
queued_duration_milliseconds,
release_label,
retry_policy,
started_at,
state,
state_details,
tags,
total_execution_duration_seconds,
total_resource_utilization,
updated_at,
worker_type_specifications
FROM aws.emr_serverless.job_runs
WHERE application_id = '{{ application_id }}' -- required
AND job_run_id = '{{ job_run_id }}' -- required
AND region = '{{ region }}' -- required
AND attempt = '{{ attempt }}'
;
```
</TabItem>
<TabItem value="list_job_runs">

Lists job runs based on a set of parameters.

```sql
SELECT
id,
name,
application_id,
arn,
attempt,
attempt_created_at,
attempt_updated_at,
created_at,
created_by,
execution_role,
mode,
release_label,
state,
state_details,
type_,
updated_at
FROM aws.emr_serverless.job_runs
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND createdAtAfter = '{{ createdAtAfter }}'
AND createdAtBefore = '{{ createdAtBefore }}'
AND states = '{{ states }}'
AND mode = '{{ mode }}'
;
```
</TabItem>
</Tabs>
