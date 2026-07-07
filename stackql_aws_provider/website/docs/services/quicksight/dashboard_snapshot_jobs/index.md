--- 
title: dashboard_snapshot_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_snapshot_jobs
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>dashboard_snapshot_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_snapshot_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboard_snapshot_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dashboard_snapshot_job"
    values={[
        { label: 'describe_dashboard_snapshot_job', value: 'describe_dashboard_snapshot_job' }
    ]}
>
<TabItem value="describe_dashboard_snapshot_job">

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
    <td>The Amazon Resource Name (ARN) for the snapshot job. The job ARN is generated when you start a new job with a StartDashboardSnapshotJob API call.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the snapshot job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DashboardId" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard that you have started a snapshot job for. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of a job. The status updates as the job executes. This shows one of the following values. COMPLETED - The job was completed successfully. FAILED - The job failed to execute. QUEUED - The job is queued and hasn't started yet. RUNNING - The job is still running. (QUEUED, RUNNING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the snapshot job status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotConfiguration" /></td>
    <td><code>object</code></td>
    <td>The snapshot configuration of the job. This information is provided when you make a StartDashboardSnapshotJob API call.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotJobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the job to be described. The job ID is set when you start a new job with a StartDashboardSnapshotJob API call. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request</td>
</tr>
<tr>
    <td><CopyableCode code="UserConfiguration" /></td>
    <td><code>object</code></td>
    <td>The user configuration for the snapshot job. This information is provided when you make a StartDashboardSnapshotJob API call.</td>
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
    <td><a href="#describe_dashboard_snapshot_job"><CopyableCode code="describe_dashboard_snapshot_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-snapshot_job_id"><code>snapshot_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing snapshot job. Poll job descriptions after a job starts to know the status of the job. For information on available status codes, see JobStatus. Registered user support This API can be called as before to get status of a job started by the same Quick Sight user. Possible error scenarios Request will fail with an Access Denied error in the following scenarios: The credentials have expired. Job has been started by a different user. Impersonated Quick Sight user doesn't have access to the specified dashboard in the job.</td>
</tr>
<tr>
    <td><a href="#start_dashboard_snapshot_job_schedule"><CopyableCode code="start_dashboard_snapshot_job_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-schedule_id"><code>schedule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an asynchronous job that runs an existing dashboard schedule and sends the dashboard snapshot through email. Only one job can run simultaneously in a given schedule. Repeated requests are skipped with a 202 HTTP status code. For more information, see Scheduling and sending Amazon Quick Sight reports by email and Configuring email report settings for a Amazon Quick Sight dashboard in the Amazon Quick Sight User Guide.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that the dashboard snapshot job is executed in.</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard that you want to start a snapshot job schedule for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-schedule_id">
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the schedule that you want to start a snapshot job schedule for. The schedule ID can be found in the Amazon Quick Sight console in the Schedules pane of the dashboard that the schedule is configured for.</td>
</tr>
<tr id="parameter-snapshot_job_id">
    <td><CopyableCode code="snapshot_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job to be described. The job ID is set when you start a new job with a StartDashboardSnapshotJob API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dashboard_snapshot_job"
    values={[
        { label: 'describe_dashboard_snapshot_job', value: 'describe_dashboard_snapshot_job' }
    ]}
>
<TabItem value="describe_dashboard_snapshot_job">

Describes an existing snapshot job. Poll job descriptions after a job starts to know the status of the job. For information on available status codes, see JobStatus. Registered user support This API can be called as before to get status of a job started by the same Quick Sight user. Possible error scenarios Request will fail with an Access Denied error in the following scenarios: The credentials have expired. Job has been started by a different user. Impersonated Quick Sight user doesn't have access to the specified dashboard in the job.

```sql
SELECT
Arn,
AwsAccountId,
CreatedTime,
DashboardId,
JobStatus,
LastUpdatedTime,
RequestId,
SnapshotConfiguration,
SnapshotJobId,
Status,
UserConfiguration
FROM aws.quicksight.dashboard_snapshot_jobs
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dashboard_id = '{{ dashboard_id }}' -- required
AND snapshot_job_id = '{{ snapshot_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_dashboard_snapshot_job_schedule"
    values={[
        { label: 'start_dashboard_snapshot_job_schedule', value: 'start_dashboard_snapshot_job_schedule' }
    ]}
>
<TabItem value="start_dashboard_snapshot_job_schedule">

Starts an asynchronous job that runs an existing dashboard schedule and sends the dashboard snapshot through email. Only one job can run simultaneously in a given schedule. Repeated requests are skipped with a 202 HTTP status code. For more information, see Scheduling and sending Amazon Quick Sight reports by email and Configuring email report settings for a Amazon Quick Sight dashboard in the Amazon Quick Sight User Guide.

```sql
EXEC aws.quicksight.dashboard_snapshot_jobs.start_dashboard_snapshot_job_schedule 
@aws_account_id='{{ aws_account_id }}' --required, 
@dashboard_id='{{ dashboard_id }}' --required, 
@schedule_id='{{ schedule_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
