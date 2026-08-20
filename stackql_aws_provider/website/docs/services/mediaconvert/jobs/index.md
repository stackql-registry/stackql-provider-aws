--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - mediaconvert
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconvert.jobs" /></td></tr>
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
    <td><CopyableCode code="acceleration_settings" /></td>
    <td><code>object</code></td>
    <td>Accelerated transcoding can significantly speed up jobs with long, visually complex content.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleration_status" /></td>
    <td><code>string</code></td>
    <td>Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. (NOT_APPLICABLE, IN_PROGRESS, ACCELERATED, NOT_ACCELERATED)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_tags_source" /></td>
    <td><code>string</code></td>
    <td>The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. (QUEUE, PRESET, JOB_TEMPLATE, JOB)</td>
</tr>
<tr>
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https:​//docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix epoch format in seconds, when the job got created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_phase" /></td>
    <td><code>string</code></td>
    <td>A job's phase can be PROBING, TRANSCODING OR UPLOADING (PROBING, TRANSCODING, UPLOADING)</td>
</tr>
<tr>
    <td><CopyableCode code="elemental_inference_configuration" /></td>
    <td><code>object</code></td>
    <td>The Elemental Inference configuration used in this job.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>integer</code></td>
    <td>Error code for the job</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message of Job</td>
</tr>
<tr>
    <td><CopyableCode code="hop_destinations" /></td>
    <td><code>array</code></td>
    <td>Optional list of hop destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources</td>
</tr>
<tr>
    <td><CopyableCode code="job_engine_version_requested" /></td>
    <td><code>string</code></td>
    <td>The Job engine version that you requested for your job. Valid versions are in a YYYY-MM-DD format.</td>
</tr>
<tr>
    <td><CopyableCode code="job_engine_version_used" /></td>
    <td><code>string</code></td>
    <td>The Job engine version that your job used. Job engine versions are in a YYYY-MM-DD format. When you request an expired version, the response for this property will be empty. Requests to create jobs with an expired version result in a regular job, as if no specific Job engine version was requested. When you request an invalid version, the response for this property will be empty. Requests to create jobs with an invalid version result in a 400 error message, and no job is created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_percent_complete" /></td>
    <td><code>integer</code></td>
    <td>An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.</td>
</tr>
<tr>
    <td><CopyableCode code="job_template" /></td>
    <td><code>string</code></td>
    <td>The job template that the job is created from, if it is created from a job template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_share_details" /></td>
    <td><code>string</code></td>
    <td>Contains information about the most recent share attempt for the job. For more information, see https:​//docs.aws.amazon.com/mediaconvert/latest/ug/creating-resource-share.html</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>object</code></td>
    <td>Provides messages from the service about jobs that you have already successfully submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="output_group_details" /></td>
    <td><code>array</code></td>
    <td>List of output group details</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>Relative priority on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https:​//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html</td>
</tr>
<tr>
    <td><CopyableCode code="queue_transitions" /></td>
    <td><code>array</code></td>
    <td>The job's queue hopping history.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_count" /></td>
    <td><code>integer</code></td>
    <td>The number of times that the service automatically attempted to process your job after encountering an error.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https:​//docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>JobSettings contains all the transcode settings for a job.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>A job's share status can be NOT_SHARED, INITIATED, or SHARED (NOT_SHARED, INITIATED, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="simulate_reserved_queue" /></td>
    <td><code>string</code></td>
    <td>Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. (SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_update_interval" /></td>
    <td><code>string</code></td>
    <td>Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)</td>
</tr>
<tr>
    <td><CopyableCode code="timing" /></td>
    <td><code>object</code></td>
    <td>Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="user_metadata" /></td>
    <td><code>object</code></td>
    <td>User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Contains any warning messages for the job. Use to help identify potential issues with your input, output, or job. For more information, see https:​//docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html</td>
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
    <td><CopyableCode code="acceleration_settings" /></td>
    <td><code>object</code></td>
    <td>Accelerated transcoding can significantly speed up jobs with long, visually complex content.</td>
</tr>
<tr>
    <td><CopyableCode code="acceleration_status" /></td>
    <td><code>string</code></td>
    <td>Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. (NOT_APPLICABLE, IN_PROGRESS, ACCELERATED, NOT_ACCELERATED)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_tags_source" /></td>
    <td><code>string</code></td>
    <td>The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. (QUEUE, PRESET, JOB_TEMPLATE, JOB)</td>
</tr>
<tr>
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https:​//docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix epoch format in seconds, when the job got created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_phase" /></td>
    <td><code>string</code></td>
    <td>A job's phase can be PROBING, TRANSCODING OR UPLOADING (PROBING, TRANSCODING, UPLOADING)</td>
</tr>
<tr>
    <td><CopyableCode code="elemental_inference_configuration" /></td>
    <td><code>object</code></td>
    <td>The Elemental Inference configuration used in this job.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>integer</code></td>
    <td>Error code for the job</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message of Job</td>
</tr>
<tr>
    <td><CopyableCode code="hop_destinations" /></td>
    <td><code>array</code></td>
    <td>Optional list of hop destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources</td>
</tr>
<tr>
    <td><CopyableCode code="job_engine_version_requested" /></td>
    <td><code>string</code></td>
    <td>The Job engine version that you requested for your job. Valid versions are in a YYYY-MM-DD format.</td>
</tr>
<tr>
    <td><CopyableCode code="job_engine_version_used" /></td>
    <td><code>string</code></td>
    <td>The Job engine version that your job used. Job engine versions are in a YYYY-MM-DD format. When you request an expired version, the response for this property will be empty. Requests to create jobs with an expired version result in a regular job, as if no specific Job engine version was requested. When you request an invalid version, the response for this property will be empty. Requests to create jobs with an invalid version result in a 400 error message, and no job is created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_percent_complete" /></td>
    <td><code>integer</code></td>
    <td>An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.</td>
</tr>
<tr>
    <td><CopyableCode code="job_template" /></td>
    <td><code>string</code></td>
    <td>The job template that the job is created from, if it is created from a job template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_share_details" /></td>
    <td><code>string</code></td>
    <td>Contains information about the most recent share attempt for the job. For more information, see https:​//docs.aws.amazon.com/mediaconvert/latest/ug/creating-resource-share.html</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>object</code></td>
    <td>Provides messages from the service about jobs that you have already successfully submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="output_group_details" /></td>
    <td><code>array</code></td>
    <td>List of output group details</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>Relative priority on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https:​//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html</td>
</tr>
<tr>
    <td><CopyableCode code="queue_transitions" /></td>
    <td><code>array</code></td>
    <td>The job's queue hopping history.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_count" /></td>
    <td><code>integer</code></td>
    <td>The number of times that the service automatically attempted to process your job after encountering an error.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https:​//docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>JobSettings contains all the transcode settings for a job.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>A job's share status can be NOT_SHARED, INITIATED, or SHARED (NOT_SHARED, INITIATED, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="simulate_reserved_queue" /></td>
    <td><code>string</code></td>
    <td>Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. (SUBMITTED, PROGRESSING, COMPLETE, CANCELED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_update_interval" /></td>
    <td><code>string</code></td>
    <td>Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)</td>
</tr>
<tr>
    <td><CopyableCode code="timing" /></td>
    <td><code>object</code></td>
    <td>Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="user_metadata" /></td>
    <td><code>object</code></td>
    <td>User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>Contains any warning messages for the job. Use to help identify potential issues with your input, output, or job. For more information, see https:​//docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the JSON for a specific transcoding job.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-queue"><code>queue</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.</td>
</tr>
<tr>
    <td><a href="#create_resource_share"><CopyableCode code="create_resource_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-SupportCaseId"><code>SupportCaseId</code></a></td>
    <td></td>
    <td>Create a new resource share request for MediaConvert resources with AWS Support.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new transcoding job. For information about jobs and job settings, see the User Guide at http:​//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html</td>
</tr>
<tr>
    <td><a href="#search_jobs"><CopyableCode code="search_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-inputFile"><code>inputFile</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-queue"><code>queue</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Retrieve a JSON array that includes job details for up to twenty of your most recent jobs. Optionally filter results further according to input file, queue, or status. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.</td>
</tr>
<tr>
    <td><a href="#start_jobs_query"><CopyableCode code="start_jobs_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start an asynchronous jobs query using the provided filters. To receive the list of jobs that match your query, call the GetJobsQueryResults API using the query ID returned by this API.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>the job ID of the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-inputFile">
    <td><CopyableCode code="inputFile" /></td>
    <td><code>string</code></td>
    <td>Optional. Provide your input file URL or your partial input file name. The maximum length for an input file is 300 characters.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Optional. Number of jobs, up to twenty, that will be returned at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.</td>
</tr>
<tr id="parameter-queue">
    <td><CopyableCode code="queue" /></td>
    <td><code>string</code></td>
    <td>Optional. Provide a queue name, or a queue ARN, to return only jobs from that queue.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.</td>
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

Retrieve the JSON for a specific transcoding job.

```sql
SELECT
acceleration_settings,
acceleration_status,
arn,
billing_tags_source,
client_request_token,
created_at,
current_phase,
elemental_inference_configuration,
error_code,
error_message,
hop_destinations,
id,
job_engine_version_requested,
job_engine_version_used,
job_percent_complete,
job_template,
last_share_details,
messages,
output_group_details,
priority,
queue,
queue_transitions,
retry_count,
role,
settings,
share_status,
simulate_reserved_queue,
status,
status_update_interval,
timing,
user_metadata,
warnings
FROM aws.mediaconvert.jobs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.

```sql
SELECT
acceleration_settings,
acceleration_status,
arn,
billing_tags_source,
client_request_token,
created_at,
current_phase,
elemental_inference_configuration,
error_code,
error_message,
hop_destinations,
id,
job_engine_version_requested,
job_engine_version_used,
job_percent_complete,
job_template,
last_share_details,
messages,
output_group_details,
priority,
queue,
queue_transitions,
retry_count,
role,
settings,
share_status,
simulate_reserved_queue,
status,
status_update_interval,
timing,
user_metadata,
warnings
FROM aws.mediaconvert.jobs
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND order = '{{ order }}'
AND queue = '{{ queue }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_share"
    values={[
        { label: 'create_resource_share', value: 'create_resource_share' },
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_share">

Create a new resource share request for MediaConvert resources with AWS Support.

```sql
INSERT INTO aws.mediaconvert.jobs (
JobId,
SupportCaseId,
region
)
SELECT 
'{{ JobId }}' /* required */,
'{{ SupportCaseId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_job">

Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html

```sql
INSERT INTO aws.mediaconvert.jobs (
AccelerationSettings,
BillingTagsSource,
ClientRequestToken,
HopDestinations,
JobEngineVersion,
JobTemplate,
Priority,
Queue,
Role,
Settings,
SimulateReservedQueue,
StatusUpdateInterval,
Tags,
UserMetadata,
region
)
SELECT 
'{{ AccelerationSettings }}',
'{{ BillingTagsSource }}',
'{{ ClientRequestToken }}',
'{{ HopDestinations }}',
'{{ JobEngineVersion }}',
'{{ JobTemplate }}',
{{ Priority }},
'{{ Queue }}',
'{{ Role }}',
'{{ Settings }}',
'{{ SimulateReservedQueue }}',
'{{ StatusUpdateInterval }}',
'{{ Tags }}',
'{{ UserMetadata }}',
'{{ region }}'
RETURNING
job
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: JobId
      value: "{{ JobId }}"
    - name: SupportCaseId
      value: "{{ SupportCaseId }}"
    - name: AccelerationSettings
      description: |
        Accelerated transcoding can significantly speed up jobs with long, visually complex content.
      value:
        Mode: "{{ Mode }}"
    - name: BillingTagsSource
      value: "{{ BillingTagsSource }}"
      description: |
        The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.
      valid_values: ['QUEUE', 'PRESET', 'JOB_TEMPLATE', 'JOB']
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: HopDestinations
      value:
        - Priority: {{ Priority }}
          Queue: "{{ Queue }}"
          WaitMinutes: {{ WaitMinutes }}
    - name: JobEngineVersion
      value: "{{ JobEngineVersion }}"
    - name: JobTemplate
      value: "{{ JobTemplate }}"
    - name: Priority
      value: {{ Priority }}
    - name: Queue
      value: "{{ Queue }}"
    - name: Role
      value: "{{ Role }}"
    - name: Settings
      description: |
        JobSettings contains all the transcode settings for a job.
      value:
        AdAvailOffset: {{ AdAvailOffset }}
        AvailBlanking:
          AvailBlankingImage: "{{ AvailBlankingImage }}"
        ColorConversion3DLUTSettings:
          - FileInput: "{{ FileInput }}"
            InputColorSpace: "{{ InputColorSpace }}"
            InputMasteringLuminance: {{ InputMasteringLuminance }}
            OutputColorSpace: "{{ OutputColorSpace }}"
            OutputMasteringLuminance: {{ OutputMasteringLuminance }}
        Esam:
          ManifestConfirmConditionNotification:
            MccXml: "{{ MccXml }}"
          ResponseSignalPreroll: {{ ResponseSignalPreroll }}
          SignalProcessingNotification:
            SccXml: "{{ SccXml }}"
        ExtendedDataServices:
          CopyProtectionAction: "{{ CopyProtectionAction }}"
          VchipAction: "{{ VchipAction }}"
        FollowSource: {{ FollowSource }}
        Inputs:
          - AdvancedInputFilter: "{{ AdvancedInputFilter }}"
            AdvancedInputFilterSettings:
              AddTexture: "{{ AddTexture }}"
              Sharpening: "{{ Sharpening }}"
            AudioSelectorGroups: "{{ AudioSelectorGroups }}"
            AudioSelectors: "{{ AudioSelectors }}"
            CaptionSelectors: "{{ CaptionSelectors }}"
            Crop:
              Height: {{ Height }}
              Width: {{ Width }}
              X: {{ X }}
              Y: {{ Y }}
            DeblockFilter: "{{ DeblockFilter }}"
            DecryptionSettings:
              DecryptionMode: "{{ DecryptionMode }}"
              EncryptedDecryptionKey: "{{ EncryptedDecryptionKey }}"
              InitializationVector: "{{ InitializationVector }}"
              KmsKeyRegion: "{{ KmsKeyRegion }}"
            DenoiseFilter: "{{ DenoiseFilter }}"
            DolbyVisionMetadataXml: "{{ DolbyVisionMetadataXml }}"
            DynamicAudioSelectors: "{{ DynamicAudioSelectors }}"
            FileInput: "{{ FileInput }}"
            FilterEnable: "{{ FilterEnable }}"
            FilterStrength: {{ FilterStrength }}
            ImageInserter:
              InsertableImages:
                - Duration: {{ Duration }}
                  FadeIn: {{ FadeIn }}
                  FadeOut: {{ FadeOut }}
                  Height: {{ Height }}
                  ImageInserterInput: "{{ ImageInserterInput }}"
                  ImageX: {{ ImageX }}
                  ImageY: {{ ImageY }}
                  Layer: {{ Layer }}
                  Opacity: {{ Opacity }}
                  StartTime: "{{ StartTime }}"
                  Width: {{ Width }}
              SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
            InputClippings: "{{ InputClippings }}"
            InputScanType: "{{ InputScanType }}"
            MultiViewSettings: "{{ MultiViewSettings }}"
            Position:
              Height: {{ Height }}
              Width: {{ Width }}
              X: {{ X }}
              Y: {{ Y }}
            ProgramNumber: {{ ProgramNumber }}
            PsiControl: "{{ PsiControl }}"
            SupplementalImps: "{{ SupplementalImps }}"
            TamsSettings:
              AuthConnectionArn: "{{ AuthConnectionArn }}"
              GapHandling: "{{ GapHandling }}"
              SourceId: "{{ SourceId }}"
              Timerange: "{{ Timerange }}"
            TimecodeSource: "{{ TimecodeSource }}"
            TimecodeStart: "{{ TimecodeStart }}"
            VideoGenerator:
              Channels: {{ Channels }}
              Duration: {{ Duration }}
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              Height: {{ Height }}
              ImageInput: "{{ ImageInput }}"
              SampleRate: {{ SampleRate }}
              Width: {{ Width }}
            VideoOverlays: "{{ VideoOverlays }}"
            VideoSelector:
              AlphaBehavior: "{{ AlphaBehavior }}"
              ColorSpace: "{{ ColorSpace }}"
              ColorSpaceUsage: "{{ ColorSpaceUsage }}"
              EmbeddedTimecodeOverride: "{{ EmbeddedTimecodeOverride }}"
              Hdr10Metadata:
                BluePrimaryX: {{ BluePrimaryX }}
                BluePrimaryY: {{ BluePrimaryY }}
                GreenPrimaryX: {{ GreenPrimaryX }}
                GreenPrimaryY: {{ GreenPrimaryY }}
                MaxContentLightLevel: {{ MaxContentLightLevel }}
                MaxFrameAverageLightLevel: {{ MaxFrameAverageLightLevel }}
                MaxLuminance: {{ MaxLuminance }}
                MinLuminance: {{ MinLuminance }}
                RedPrimaryX: {{ RedPrimaryX }}
                RedPrimaryY: {{ RedPrimaryY }}
                WhitePointX: {{ WhitePointX }}
                WhitePointY: {{ WhitePointY }}
              MaxLuminance: {{ MaxLuminance }}
              PadVideo: "{{ PadVideo }}"
              Pid: {{ Pid }}
              ProgramNumber: {{ ProgramNumber }}
              Rotate: "{{ Rotate }}"
              SampleRange: "{{ SampleRange }}"
              SelectorType: "{{ SelectorType }}"
              Streams:
                - {{ Streams }}
        KantarWatermark:
          ChannelName: "{{ ChannelName }}"
          ContentReference: "{{ ContentReference }}"
          CredentialsSecretName: "{{ CredentialsSecretName }}"
          FileOffset: {{ FileOffset }}
          KantarLicenseId: {{ KantarLicenseId }}
          KantarServerUrl: "{{ KantarServerUrl }}"
          LogDestination: "{{ LogDestination }}"
          Metadata3: "{{ Metadata3 }}"
          Metadata4: "{{ Metadata4 }}"
          Metadata5: "{{ Metadata5 }}"
          Metadata6: "{{ Metadata6 }}"
          Metadata7: "{{ Metadata7 }}"
          Metadata8: "{{ Metadata8 }}"
        MotionImageInserter:
          Framerate:
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
          Input: "{{ Input }}"
          InsertionMode: "{{ InsertionMode }}"
          Offset:
            ImageX: {{ ImageX }}
            ImageY: {{ ImageY }}
          Playback: "{{ Playback }}"
          StartTime: "{{ StartTime }}"
        NielsenConfiguration:
          BreakoutCode: {{ BreakoutCode }}
          DistributorId: "{{ DistributorId }}"
        NielsenNonLinearWatermark:
          ActiveWatermarkProcess: "{{ ActiveWatermarkProcess }}"
          AdiFilename: "{{ AdiFilename }}"
          AssetId: "{{ AssetId }}"
          AssetName: "{{ AssetName }}"
          CbetSourceId: "{{ CbetSourceId }}"
          EpisodeId: "{{ EpisodeId }}"
          MetadataDestination: "{{ MetadataDestination }}"
          SourceId: {{ SourceId }}
          SourceWatermarkStatus: "{{ SourceWatermarkStatus }}"
          TicServerUrl: "{{ TicServerUrl }}"
          UniqueTicPerAudioTrack: "{{ UniqueTicPerAudioTrack }}"
        OutputGroups:
          - AutomatedEncodingSettings:
              AbrSettings:
                MaxAbrBitrate: {{ MaxAbrBitrate }}
                MaxQualityLevel: {{ MaxQualityLevel }}
                MaxRenditions: {{ MaxRenditions }}
                MinAbrBitrate: {{ MinAbrBitrate }}
                Rules:
                  - AllowedRenditions: "{{ AllowedRenditions }}"
                    ForceIncludeRenditions: "{{ ForceIncludeRenditions }}"
                    MinBottomRenditionSize:
                      Height: {{ Height }}
                      Width: {{ Width }}
                    MinTopRenditionSize:
                      Height: {{ Height }}
                      Width: {{ Width }}
                    Type: "{{ Type }}"
            CustomName: "{{ CustomName }}"
            Name: "{{ Name }}"
            OutputGroupSettings:
              CmafGroupSettings:
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                BaseUrl: "{{ BaseUrl }}"
                ClientCache: "{{ ClientCache }}"
                CodecSpecification: "{{ CodecSpecification }}"
                DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
                DashManifestStyle: "{{ DashManifestStyle }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                Encryption:
                  ClearLeadSegments: {{ ClearLeadSegments }}
                  ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                  EncryptionMethod: "{{ EncryptionMethod }}"
                  InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                  StaticKeyProvider: "{{ StaticKeyProvider }}"
                  Type: "{{ Type }}"
                FragmentLength: {{ FragmentLength }}
                ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
                ImageBasedTrickPlaySettings:
                  IntervalCadence: "{{ IntervalCadence }}"
                  ThumbnailHeight: {{ ThumbnailHeight }}
                  ThumbnailInterval: {{ ThumbnailInterval }}
                  ThumbnailWidth: {{ ThumbnailWidth }}
                  TileHeight: {{ TileHeight }}
                  TileWidth: {{ TileWidth }}
                ImageBasedTrickPlayVariants:
                  - IntervalCadence: "{{ IntervalCadence }}"
                    ThumbnailHeight: {{ ThumbnailHeight }}
                    ThumbnailInterval: {{ ThumbnailInterval }}
                    ThumbnailWidth: {{ ThumbnailWidth }}
                    TileHeight: {{ TileHeight }}
                    TileWidth: {{ TileWidth }}
                ManifestCompression: "{{ ManifestCompression }}"
                ManifestDurationFormat: "{{ ManifestDurationFormat }}"
                MinBufferTime: {{ MinBufferTime }}
                MinFinalSegmentLength: {{ MinFinalSegmentLength }}
                MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
                MpdProfile: "{{ MpdProfile }}"
                PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
                SegmentControl: "{{ SegmentControl }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthControl: "{{ SegmentLengthControl }}"
                StreamInfResolution: "{{ StreamInfResolution }}"
                TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
                VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
                WriteDashManifest: "{{ WriteDashManifest }}"
                WriteHlsManifest: "{{ WriteHlsManifest }}"
                WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
              DashIsoGroupSettings:
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                AudioChannelConfigSchemeIdUri: "{{ AudioChannelConfigSchemeIdUri }}"
                BaseUrl: "{{ BaseUrl }}"
                DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
                DashManifestStyle: "{{ DashManifestStyle }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                Encryption:
                  PlaybackDeviceCompatibility: "{{ PlaybackDeviceCompatibility }}"
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                FragmentLength: {{ FragmentLength }}
                HbbtvCompliance: "{{ HbbtvCompliance }}"
                ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
                ImageBasedTrickPlaySettings:
                  IntervalCadence: "{{ IntervalCadence }}"
                  ThumbnailHeight: {{ ThumbnailHeight }}
                  ThumbnailInterval: {{ ThumbnailInterval }}
                  ThumbnailWidth: {{ ThumbnailWidth }}
                  TileHeight: {{ TileHeight }}
                  TileWidth: {{ TileWidth }}
                ImageBasedTrickPlayVariants:
                  - IntervalCadence: "{{ IntervalCadence }}"
                    ThumbnailHeight: {{ ThumbnailHeight }}
                    ThumbnailInterval: {{ ThumbnailInterval }}
                    ThumbnailWidth: {{ ThumbnailWidth }}
                    TileHeight: {{ TileHeight }}
                    TileWidth: {{ TileWidth }}
                MinBufferTime: {{ MinBufferTime }}
                MinFinalSegmentLength: {{ MinFinalSegmentLength }}
                MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
                MpdProfile: "{{ MpdProfile }}"
                PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
                SegmentControl: "{{ SegmentControl }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthControl: "{{ SegmentLengthControl }}"
                VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
                WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
              FileGroupSettings:
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
              HlsGroupSettings:
                AdMarkers:
                  - "{{ AdMarkers }}"
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                AudioOnlyHeader: "{{ AudioOnlyHeader }}"
                BaseUrl: "{{ BaseUrl }}"
                CaptionLanguageMappings:
                  - CaptionChannel: {{ CaptionChannel }}
                    CustomLanguageCode: "{{ CustomLanguageCode }}"
                    LanguageCode: "{{ LanguageCode }}"
                    LanguageDescription: "{{ LanguageDescription }}"
                CaptionLanguageSetting: "{{ CaptionLanguageSetting }}"
                CaptionSegmentLengthControl: "{{ CaptionSegmentLengthControl }}"
                ClientCache: "{{ ClientCache }}"
                CodecSpecification: "{{ CodecSpecification }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                DirectoryStructure: "{{ DirectoryStructure }}"
                Encryption:
                  ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                  EncryptionMethod: "{{ EncryptionMethod }}"
                  InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                  OfflineEncrypted: "{{ OfflineEncrypted }}"
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                  StaticKeyProvider: "{{ StaticKeyProvider }}"
                  Type: "{{ Type }}"
                ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
                ImageBasedTrickPlaySettings:
                  IntervalCadence: "{{ IntervalCadence }}"
                  ThumbnailHeight: {{ ThumbnailHeight }}
                  ThumbnailInterval: {{ ThumbnailInterval }}
                  ThumbnailWidth: {{ ThumbnailWidth }}
                  TileHeight: {{ TileHeight }}
                  TileWidth: {{ TileWidth }}
                ImageBasedTrickPlayVariants:
                  - IntervalCadence: "{{ IntervalCadence }}"
                    ThumbnailHeight: {{ ThumbnailHeight }}
                    ThumbnailInterval: {{ ThumbnailInterval }}
                    ThumbnailWidth: {{ ThumbnailWidth }}
                    TileHeight: {{ TileHeight }}
                    TileWidth: {{ TileWidth }}
                ManifestCompression: "{{ ManifestCompression }}"
                ManifestDurationFormat: "{{ ManifestDurationFormat }}"
                MinFinalSegmentLength: {{ MinFinalSegmentLength }}
                MinSegmentLength: {{ MinSegmentLength }}
                OutputSelection: "{{ OutputSelection }}"
                ProgramDateTime: "{{ ProgramDateTime }}"
                ProgramDateTimePeriod: {{ ProgramDateTimePeriod }}
                ProgressiveWriteHlsManifest: "{{ ProgressiveWriteHlsManifest }}"
                SegmentControl: "{{ SegmentControl }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthControl: "{{ SegmentLengthControl }}"
                SegmentsPerSubdirectory: {{ SegmentsPerSubdirectory }}
                StreamInfResolution: "{{ StreamInfResolution }}"
                TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
                TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                TimedMetadataId3Period: {{ TimedMetadataId3Period }}
                TimestampDeltaMilliseconds: {{ TimestampDeltaMilliseconds }}
              MsSmoothGroupSettings:
                AdditionalManifests:
                  - ManifestNameModifier: "{{ ManifestNameModifier }}"
                    SelectedOutputs: "{{ SelectedOutputs }}"
                AudioDeduplication: "{{ AudioDeduplication }}"
                Destination: "{{ Destination }}"
                DestinationSettings:
                  S3Settings: "{{ S3Settings }}"
                Encryption:
                  SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                FragmentLength: {{ FragmentLength }}
                FragmentLengthControl: "{{ FragmentLengthControl }}"
                ManifestEncoding: "{{ ManifestEncoding }}"
              PerFrameMetrics:
                - "{{ PerFrameMetrics }}"
              Type: "{{ Type }}"
            Outputs: "{{ Outputs }}"
        TimecodeConfig:
          Anchor: "{{ Anchor }}"
          Source: "{{ Source }}"
          Start: "{{ Start }}"
          TimestampOffset: "{{ TimestampOffset }}"
        TimedMetadataInsertion:
          Id3Insertions:
            - Id3: "{{ Id3 }}"
              Timecode: "{{ Timecode }}"
    - name: SimulateReservedQueue
      value: "{{ SimulateReservedQueue }}"
      description: |
        Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
      valid_values: ['DISABLED', 'ENABLED']
    - name: StatusUpdateInterval
      value: "{{ StatusUpdateInterval }}"
      description: |
        Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
      valid_values: ['SECONDS_10', 'SECONDS_12', 'SECONDS_15', 'SECONDS_20', 'SECONDS_30', 'SECONDS_60', 'SECONDS_120', 'SECONDS_180', 'SECONDS_240', 'SECONDS_300', 'SECONDS_360', 'SECONDS_420', 'SECONDS_480', 'SECONDS_540', 'SECONDS_600']
    - name: Tags
      value: "{{ Tags }}"
    - name: UserMetadata
      value: "{{ UserMetadata }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_jobs"
    values={[
        { label: 'search_jobs', value: 'search_jobs' },
        { label: 'start_jobs_query', value: 'start_jobs_query' }
    ]}
>
<TabItem value="search_jobs">

Retrieve a JSON array that includes job details for up to twenty of your most recent jobs. Optionally filter results further according to input file, queue, or status. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.

```sql
EXEC aws.mediaconvert.jobs.search_jobs 
@region='{{ region }}' --required, 
@inputFile='{{ inputFile }}', 
@maxResults='{{ maxResults }}', 
@nextToken='{{ nextToken }}', 
@order='{{ order }}', 
@queue='{{ queue }}', 
@status='{{ status }}'
;
```
</TabItem>
<TabItem value="start_jobs_query">

Start an asynchronous jobs query using the provided filters. To receive the list of jobs that match your query, call the GetJobsQueryResults API using the query ID returned by this API.

```sql
EXEC aws.mediaconvert.jobs.start_jobs_query 
@region='{{ region }}' --required 
@@json=
'{
"FilterList": "{{ FilterList }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"Order": "{{ Order }}"
}'
;
```
</TabItem>
</Tabs>
