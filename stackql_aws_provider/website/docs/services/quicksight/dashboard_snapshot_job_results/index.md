--- 
title: dashboard_snapshot_job_results
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_snapshot_job_results
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

Creates, updates, deletes, gets or lists a <code>dashboard_snapshot_job_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_snapshot_job_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboard_snapshot_job_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dashboard_snapshot_job_result"
    values={[
        { label: 'describe_dashboard_snapshot_job_result', value: 'describe_dashboard_snapshot_job_result' }
    ]}
>
<TabItem value="describe_dashboard_snapshot_job_result">

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
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that a snapshot job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorInfo" /></td>
    <td><code>object</code></td>
    <td>Displays information for the error that caused a job to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of a job after it has reached a terminal state. A finished snapshot job will retuen a COMPLETED or FAILED status. (QUEUED, RUNNING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that a snapshot job status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Result" /></td>
    <td><code>object</code></td>
    <td>The result of the snapshot job. Jobs that have successfully completed will return the S3Uri where they are located. Jobs that have failedwill return information on the error that caused the job to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request</td>
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
    <td><a href="#describe_dashboard_snapshot_job_result"><CopyableCode code="describe_dashboard_snapshot_job_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-snapshot_job_id"><code>snapshot_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the result of an existing snapshot job that has finished running. A finished snapshot job will return a COMPLETED or FAILED status when you poll the job with a DescribeDashboardSnapshotJob API call. If the job has not finished running, this operation returns a message that says Dashboard Snapshot Job with id <code>&lt;SnapshotjobId&gt;</code> has not reached a terminal state.. Registered user support This API can be called as before to get the result of a job started by the same Quick Sight user. The result for the user will be returned in RegisteredUsers response attribute. The attribute will contain a list with at most one object in it. Possible error scenarios The request fails with an Access Denied error in the following scenarios: The credentials have expired. The job was started by a different user. The registered user doesn't have access to the specified dashboard. The request succeeds but the job fails in the following scenarios: DASHBOARD_ACCESS_DENIED - The registered user lost access to the dashboard. CAPABILITY_RESTRICTED - The registered user is restricted from exporting data in all selected formats. The request succeeds but the response contains an error code in the following scenarios: CAPABILITY_RESTRICTED - The registered user is restricted from exporting data in some selected formats. RLS_CHANGED - Row-level security settings have changed. Re-run the job with current settings. CLS_CHANGED - Column-level security settings have changed. Re-run the job with current settings. DATASET_DELETED - The dataset has been deleted. Verify the dataset exists before re-running the job.</td>
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
    <td>The ID of the dashboard that you have started a snapshot job for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="describe_dashboard_snapshot_job_result"
    values={[
        { label: 'describe_dashboard_snapshot_job_result', value: 'describe_dashboard_snapshot_job_result' }
    ]}
>
<TabItem value="describe_dashboard_snapshot_job_result">

Describes the result of an existing snapshot job that has finished running. A finished snapshot job will return a COMPLETED or FAILED status when you poll the job with a DescribeDashboardSnapshotJob API call. If the job has not finished running, this operation returns a message that says Dashboard Snapshot Job with id <code>&lt;SnapshotjobId&gt;</code> has not reached a terminal state.. Registered user support This API can be called as before to get the result of a job started by the same Quick Sight user. The result for the user will be returned in RegisteredUsers response attribute. The attribute will contain a list with at most one object in it. Possible error scenarios The request fails with an Access Denied error in the following scenarios: The credentials have expired. The job was started by a different user. The registered user doesn't have access to the specified dashboard. The request succeeds but the job fails in the following scenarios: DASHBOARD_ACCESS_DENIED - The registered user lost access to the dashboard. CAPABILITY_RESTRICTED - The registered user is restricted from exporting data in all selected formats. The request succeeds but the response contains an error code in the following scenarios: CAPABILITY_RESTRICTED - The registered user is restricted from exporting data in some selected formats. RLS_CHANGED - Row-level security settings have changed. Re-run the job with current settings. CLS_CHANGED - Column-level security settings have changed. Re-run the job with current settings. DATASET_DELETED - The dataset has been deleted. Verify the dataset exists before re-running the job.

```sql
SELECT
Arn,
CreatedTime,
ErrorInfo,
JobStatus,
LastUpdatedTime,
RequestId,
Result,
Status
FROM aws.quicksight.dashboard_snapshot_job_results
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dashboard_id = '{{ dashboard_id }}' -- required
AND snapshot_job_id = '{{ snapshot_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
