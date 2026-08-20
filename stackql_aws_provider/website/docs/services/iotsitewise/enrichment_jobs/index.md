--- 
title: enrichment_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - enrichment_jobs
  - iotsitewise
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

Creates, updates, deletes, gets or lists an <code>enrichment_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enrichment_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.enrichment_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_enrichment_job"
    values={[
        { label: 'describe_enrichment_job', value: 'describe_enrichment_job' },
        { label: 'list_enrichment_jobs', value: 'list_enrichment_jobs' }
    ]}
>
<TabItem value="describe_enrichment_job">

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
    <td><CopyableCode code="cancelled_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the job was cancelled in ISO 8601 format. Only present if status is CANCELLED.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the job completed successfully in ISO 8601 format. Only present if status is COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the enrichment job was created in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>Human-readable error message explaining why the job failed. Only present if status is FAILED. Use this information to diagnose configuration issues, permission problems, or data processing errors.</td>
</tr>
<tr>
    <td><CopyableCode code="job_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the enrichment job defining which analysis type to perform on video time-series data. Currently supports event detection enrichment. Exactly one member must be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the enrichment job. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>The type of enrichment job, derived from the job configuration union member&lt;/p&gt; (EVENT_DETECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>Status of an enrichment job throughout its lifecycle.&lt;/p&gt; <code>&lt;p&gt;</code>Status progression: PENDING → RUNNING → &#123;COMPLETED, FAILED, TIMED_OUT, CANCELLED&#125;&lt;/p&gt; <code>&lt;ul&gt;</code> <code>&lt;li&gt;</code>PENDING: Job has been accepted and is waiting to start processing&lt;/li&gt; <code>&lt;li&gt;</code>RUNNING: Job is actively processing video data to generate embeddings&lt;/li&gt; <code>&lt;li&gt;</code>COMPLETED: Job finished successfully; embeddings are available in IoT SiteWise&lt;/li&gt; <code>&lt;li&gt;</code>FAILED: Job encountered an error during processing&lt;/li&gt; <code>&lt;li&gt;</code>TIMED_OUT: Job exceeded the maximum processing time limit&lt;/li&gt; <code>&lt;li&gt;</code>CANCELLED: Job was cancelled via CancelEnrichmentJob&lt;/li&gt; &lt;/ul&gt; <code>&lt;p&gt;</code>Terminal states (job will not change status): COMPLETED, FAILED, TIMED_OUT, CANCELLED&lt;/p&gt; (PENDING, RUNNING, COMPLETED, FAILED, TIMED_OUT, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the job status was last updated in ISO 8601 format. Useful for tracking recent activity.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IoT SiteWise workspace containing the job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_enrichment_jobs">

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
    <td>Timestamp when the job was created in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The dataset being enriched. Useful for filtering and identifying jobs without fetching the full configuration. This allows you to quickly find all jobs related to a specific dataset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the enrichment job. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>The type of enrichment job, derived from the job configuration union member&lt;/p&gt; (EVENT_DETECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="property_alias" /></td>
    <td><code>string</code></td>
    <td>The property alias (human-readable sensor name) of the time series being enriched. Present when the job was created using a propertyAlias. Use this to identify which sensor the job analyzes. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td><code>&lt;p&gt;</code>Status of an enrichment job throughout its lifecycle.&lt;/p&gt; <code>&lt;p&gt;</code>Status progression: PENDING → RUNNING → &#123;COMPLETED, FAILED, TIMED_OUT, CANCELLED&#125;&lt;/p&gt; <code>&lt;ul&gt;</code> <code>&lt;li&gt;</code>PENDING: Job has been accepted and is waiting to start processing&lt;/li&gt; <code>&lt;li&gt;</code>RUNNING: Job is actively processing video data to generate embeddings&lt;/li&gt; <code>&lt;li&gt;</code>COMPLETED: Job finished successfully; embeddings are available in IoT SiteWise&lt;/li&gt; <code>&lt;li&gt;</code>FAILED: Job encountered an error during processing&lt;/li&gt; <code>&lt;li&gt;</code>TIMED_OUT: Job exceeded the maximum processing time limit&lt;/li&gt; <code>&lt;li&gt;</code>CANCELLED: Job was cancelled via CancelEnrichmentJob&lt;/li&gt; &lt;/ul&gt; <code>&lt;p&gt;</code>Terminal states (job will not change status): COMPLETED, FAILED, TIMED_OUT, CANCELLED&lt;/p&gt; (PENDING, RUNNING, COMPLETED, FAILED, TIMED_OUT, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_id" /></td>
    <td><code>string</code></td>
    <td>The system identifier of the time series being enriched. Present when the job was created using a timeSeriesId. Use this to identify which time series the job analyzes.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the last job status change in ISO 8601 format. Use this to track recent activity and identify stale jobs. For active jobs, this shows the last time the job transitioned to a new status.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IoT SiteWise workspace containing this job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_enrichment_job"><CopyableCode code="describe_enrichment_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific enrichment job, including its current status, configuration, and timestamps. Use Cases Monitor job progress by checking status updates with DescribeEnrichmentJob Retrieve the complete job configuration submitted during creation Debug failed jobs by examining the failureMessage field Track job lifecycle with creation, update, completion, and cancellation timestamps Status Monitoring Jobs progress through statuses: PENDING → RUNNING → terminal state Terminal states: COMPLETED: Job finished successfully; query IoT SiteWise for semantic search results FAILED: Job encountered an error; check failureMessage for details TIMED_OUT: Job exceeded maximum processing time CANCELLED: Job was cancelled via CancelEnrichmentJob Response Fields The response includes: Current job status and type Full job configuration as originally submitted Lifecycle timestamps (created, updated, completed, cancelled) Failure details if status is FAILED</td>
</tr>
<tr>
    <td><a href="#list_enrichment_jobs"><CopyableCode code="list_enrichment_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datasetId"><code>datasetId</code></a>, <a href="#parameter-propertyAlias"><code>propertyAlias</code></a>, <a href="#parameter-timeSeriesId"><code>timeSeriesId</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-jobType"><code>jobType</code></a>, <a href="#parameter-startDate"><code>startDate</code></a>, <a href="#parameter-endDate"><code>endDate</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists enrichment jobs within a workspace with optional filtering and pagination. Results are ordered by createdAt timestamp descending (newest first). Filtering Combine filters to narrow results: datasetId: Filter by dataset propertyAlias OR timeSeriesId: Filter by time series (specify one, not both) status: Filter by job status (e.g., RUNNING to find active jobs) jobType: Filter by enrichment type (currently only EVENT_DETECTION) startDate and endDate: Filter by job creation time range Important Constraints You must specify either propertyAlias OR timeSeriesId, but not both Attempting to specify both results in an InvalidRequestException Date filters use ISO 8601 format startDate is exclusive, endDate is inclusive Pagination The operation returns up to maxResults jobs per page (default 50). If more results exist, the response includes a nextToken. Submit this token in a subsequent request to retrieve the next page. Common Use Cases Find all running jobs: Filter by status=RUNNING List recent jobs for a dataset: Filter by datasetId with optional date range Monitor jobs for a specific sensor: Filter by propertyAlias or timeSeriesId Track all event detection jobs: Filter by jobType=EVENT_DETECTION Performance Performance is optimal when filtering by supported fields (datasetId, propertyAlias, timeSeriesId, status, jobType).</td>
</tr>
<tr>
    <td><a href="#create_enrichment_job"><CopyableCode code="create_enrichment_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobConfiguration"><code>jobConfiguration</code></a></td>
    <td></td>
    <td>Creates an asynchronous enrichment job to analyze time-series sensor data. The operation returns immediately with job details while processing continues in the background. Idempotency Include a clientToken to make the operation idempotent. If you submit the same request with the same token within the idempotency window, you receive the original job details without creating a duplicate. Prerequisites Before creating a job, ensure: The workspace is in ACTIVE state (not being deleted) You have IAM permissions for the workspace, dataset, and time-series resources You have KMS Decrypt permission on the workspace's customer-managed encryption key No duplicate job (same workspace, dataset, property, and job type) is currently running Workflow Submit the job with configuration specifying which video data to analyze and the time range Capture the jobId from the response Use DescribeEnrichmentJob to monitor progress and check job status When status reaches a terminal state (COMPLETED, FAILED, TIMED_OUT, CANCELLED), check results For COMPLETED jobs, query IoT SiteWise for semantic search on video events Error Handling ConflictingOperationException: A duplicate job is already running for the same configuration InvalidRequestException: Invalid parameters (e.g., both timeSeriesId and propertyAlias specified) AccessDeniedException: Insufficient IAM or KMS permissions LimitExceededException: Too many concurrent jobs or requests</td>
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
    <td>The unique identifier of the enrichment job to retrieve. This is the jobId returned by CreateEnrichmentJob.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IoT SiteWise workspace containing the video data to analyze.</td>
</tr>
<tr id="parameter-datasetId">
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>Filter jobs by dataset ID. Returns only jobs analyzing data from the specified dataset.</td>
</tr>
<tr id="parameter-endDate">
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The inclusive end of the date range for filtering jobs by creation time. Jobs created on or before this timestamp are included. Use ISO 8601 format (e.g., 2024-01-31T23:59:59Z).</td>
</tr>
<tr id="parameter-jobType">
    <td><CopyableCode code="jobType" /></td>
    <td><code>string</code></td>
    <td>Filter by enrichment job type. Currently only EVENT_DETECTION is supported. Use this filter to future-proof queries when additional job types are added.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of jobs to return per page. Defaults to 50 if not specified. Use smaller values for faster responses, larger values to reduce API calls.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token from a previous ListEnrichmentJobs response. Include this token to retrieve the next page of results. Omit for the first request.</td>
</tr>
<tr id="parameter-propertyAlias">
    <td><CopyableCode code="propertyAlias" /></td>
    <td><code>string</code></td>
    <td>Filter by property alias (human-readable sensor name). Specify either propertyAlias or timeSeriesId, but not both. Returns only jobs analyzing the specified property alias.</td>
</tr>
<tr id="parameter-startDate">
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The exclusive start of the date range for filtering jobs by creation time. Jobs created after this timestamp are included. Use ISO 8601 format (e.g., 2024-01-01T00:00:00Z).</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by job status. Returns only jobs in the specified status. Use RUNNING to find active jobs, or FAILED to identify jobs requiring attention.</td>
</tr>
<tr id="parameter-timeSeriesId">
    <td><CopyableCode code="timeSeriesId" /></td>
    <td><code>string</code></td>
    <td>Filter by time series ID (system identifier). Specify either timeSeriesId or propertyAlias, but not both. Returns only jobs analyzing the specified time series.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_enrichment_job"
    values={[
        { label: 'describe_enrichment_job', value: 'describe_enrichment_job' },
        { label: 'list_enrichment_jobs', value: 'list_enrichment_jobs' }
    ]}
>
<TabItem value="describe_enrichment_job">

Retrieves detailed information about a specific enrichment job, including its current status, configuration, and timestamps. Use Cases Monitor job progress by checking status updates with DescribeEnrichmentJob Retrieve the complete job configuration submitted during creation Debug failed jobs by examining the failureMessage field Track job lifecycle with creation, update, completion, and cancellation timestamps Status Monitoring Jobs progress through statuses: PENDING → RUNNING → terminal state Terminal states: COMPLETED: Job finished successfully; query IoT SiteWise for semantic search results FAILED: Job encountered an error; check failureMessage for details TIMED_OUT: Job exceeded maximum processing time CANCELLED: Job was cancelled via CancelEnrichmentJob Response Fields The response includes: Current job status and type Full job configuration as originally submitted Lifecycle timestamps (created, updated, completed, cancelled) Failure details if status is FAILED

```sql
SELECT
cancelled_at,
completed_at,
created_at,
failure_message,
job_configuration,
job_id,
job_type,
status,
updated_at,
workspace_name
FROM aws.iotsitewise.enrichment_jobs
WHERE workspace_name = '{{ workspace_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_enrichment_jobs">

Lists enrichment jobs within a workspace with optional filtering and pagination. Results are ordered by createdAt timestamp descending (newest first). Filtering Combine filters to narrow results: datasetId: Filter by dataset propertyAlias OR timeSeriesId: Filter by time series (specify one, not both) status: Filter by job status (e.g., RUNNING to find active jobs) jobType: Filter by enrichment type (currently only EVENT_DETECTION) startDate and endDate: Filter by job creation time range Important Constraints You must specify either propertyAlias OR timeSeriesId, but not both Attempting to specify both results in an InvalidRequestException Date filters use ISO 8601 format startDate is exclusive, endDate is inclusive Pagination The operation returns up to maxResults jobs per page (default 50). If more results exist, the response includes a nextToken. Submit this token in a subsequent request to retrieve the next page. Common Use Cases Find all running jobs: Filter by status=RUNNING List recent jobs for a dataset: Filter by datasetId with optional date range Monitor jobs for a specific sensor: Filter by propertyAlias or timeSeriesId Track all event detection jobs: Filter by jobType=EVENT_DETECTION Performance Performance is optimal when filtering by supported fields (datasetId, propertyAlias, timeSeriesId, status, jobType).

```sql
SELECT
created_at,
dataset_id,
job_id,
job_type,
property_alias,
status,
time_series_id,
updated_at,
workspace_name
FROM aws.iotsitewise.enrichment_jobs
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
AND datasetId = '{{ datasetId }}'
AND propertyAlias = '{{ propertyAlias }}'
AND timeSeriesId = '{{ timeSeriesId }}'
AND status = '{{ status }}'
AND jobType = '{{ jobType }}'
AND startDate = '{{ startDate }}'
AND endDate = '{{ endDate }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_enrichment_job"
    values={[
        { label: 'create_enrichment_job', value: 'create_enrichment_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_enrichment_job">

Creates an asynchronous enrichment job to analyze time-series sensor data. The operation returns immediately with job details while processing continues in the background. Idempotency Include a clientToken to make the operation idempotent. If you submit the same request with the same token within the idempotency window, you receive the original job details without creating a duplicate. Prerequisites Before creating a job, ensure: The workspace is in ACTIVE state (not being deleted) You have IAM permissions for the workspace, dataset, and time-series resources You have KMS Decrypt permission on the workspace's customer-managed encryption key No duplicate job (same workspace, dataset, property, and job type) is currently running Workflow Submit the job with configuration specifying which video data to analyze and the time range Capture the jobId from the response Use DescribeEnrichmentJob to monitor progress and check job status When status reaches a terminal state (COMPLETED, FAILED, TIMED_OUT, CANCELLED), check results For COMPLETED jobs, query IoT SiteWise for semantic search on video events Error Handling ConflictingOperationException: A duplicate job is already running for the same configuration InvalidRequestException: Invalid parameters (e.g., both timeSeriesId and propertyAlias specified) AccessDeniedException: Insufficient IAM or KMS permissions LimitExceededException: Too many concurrent jobs or requests

```sql
INSERT INTO aws.iotsitewise.enrichment_jobs (
jobConfiguration,
clientToken,
workspace_name,
region
)
SELECT 
'{{ jobConfiguration }}' /* required */,
'{{ clientToken }}',
'{{ workspace_name }}',
'{{ region }}'
RETURNING
created_at,
job_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: enrichment_jobs
  props:
    - name: workspace_name
      value: "{{ workspace_name }}"
      description: Required parameter for the enrichment_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the enrichment_jobs resource.
    - name: jobConfiguration
      description: |
        Configuration for the enrichment job defining which analysis type to perform on video time-series data. Currently supports event detection enrichment. Exactly one member must be specified.
      value:
        eventDetection:
          datasetId: "{{ datasetId }}"
          timeSeriesId: "{{ timeSeriesId }}"
          propertyAlias: "{{ propertyAlias }}"
          trimSettings:
            startTime:
              timeInSeconds: {{ timeInSeconds }}
              offsetInNanos: {{ offsetInNanos }}
            endTime:
              timeInSeconds: {{ timeInSeconds }}
              offsetInNanos: {{ offsetInNanos }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
