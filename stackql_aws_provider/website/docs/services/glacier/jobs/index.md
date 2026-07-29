--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - glacier
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glacier.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

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
    <td>The job type. This value is either ArchiveRetrieval, InventoryRetrieval, or Select. (ArchiveRetrieval, InventoryRetrieval, Select)</td>
</tr>
<tr>
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string</code></td>
    <td>The archive ID requested for a select job or archive retrieval. Otherwise, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="archive_sha256_tree_hash" /></td>
    <td><code>string</code></td>
    <td>The SHA256 tree hash of the entire archive for an archive retrieval. For inventory retrieval or select jobs, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="archive_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>For an archive retrieval job, this value is the size in bytes of the archive being requested for download. For an inventory retrieval or select job, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="completed" /></td>
    <td><code>boolean</code></td>
    <td>The job status. When a job is completed, you get the job's output using Get Job Output (GET output).</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string</code></td>
    <td>The UTC time that the job request completed. While the job is in progress, the value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The UTC date when the job was created. This value is a string representation of ISO 8601 date format, for example "2012-03-20T17:03:43.221Z".</td>
</tr>
<tr>
    <td><CopyableCode code="inventory_retrieval_parameters" /></td>
    <td><code>object</code></td>
    <td>Parameters used for range inventory retrieval.</td>
</tr>
<tr>
    <td><CopyableCode code="inventory_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>For an inventory retrieval job, this value is the size in bytes of the inventory requested for download. For an archive retrieval or select job, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="job_description" /></td>
    <td><code>string</code></td>
    <td>The job description provided when initiating the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>An opaque string that identifies an Amazon S3 Glacier job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_output_path" /></td>
    <td><code>string</code></td>
    <td>Contains the job output location.</td>
</tr>
<tr>
    <td><CopyableCode code="output_location" /></td>
    <td><code>object</code></td>
    <td>Contains the location where the data from the select job is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_byte_range" /></td>
    <td><code>string</code></td>
    <td>The retrieved byte range for archive retrieval jobs in the form StartByteValue-EndByteValue. If no range was specified in the archive retrieval, then the whole archive is retrieved. In this case, StartByteValue equals 0 and EndByteValue equals the size of the archive minus 1. For inventory retrieval or select jobs, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="sha256_tree_hash" /></td>
    <td><code>string</code></td>
    <td>For an archive retrieval job, this value is the checksum of the archive. Otherwise, this value is null. The SHA256 tree hash value for the requested range of an archive. If the InitiateJob request for an archive specified a tree-hash aligned range, then this field returns a value. If the whole archive is retrieved, this value is the same as the ArchiveSHA256TreeHash value. This field is null for the following: Archive retrieval jobs that specify a range that is not tree-hash aligned Archival jobs that specify a range that is equal to the whole archive, when the job status is InProgress Inventory jobs Select jobs</td>
</tr>
<tr>
    <td><CopyableCode code="sns_topic" /></td>
    <td><code>string</code></td>
    <td>An Amazon SNS topic that receives notification.</td>
</tr>
<tr>
    <td><CopyableCode code="select_parameters" /></td>
    <td><code>object</code></td>
    <td>Contains the parameters used for a select.</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The status code can be InProgress, Succeeded, or Failed, and indicates the status of the job. (InProgress, Succeeded, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A friendly message that describes the job status.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The tier to use for a select or an archive retrieval. Valid values are Expedited, Standard, or Bulk. Standard is the default.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vault from which an archive retrieval was requested.</td>
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
    <td>The job type. This value is either ArchiveRetrieval, InventoryRetrieval, or Select. (ArchiveRetrieval, InventoryRetrieval, Select)</td>
</tr>
<tr>
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string</code></td>
    <td>The archive ID requested for a select job or archive retrieval. Otherwise, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="archive_sha256_tree_hash" /></td>
    <td><code>string</code></td>
    <td>The SHA256 tree hash of the entire archive for an archive retrieval. For inventory retrieval or select jobs, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="archive_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>For an archive retrieval job, this value is the size in bytes of the archive being requested for download. For an inventory retrieval or select job, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="completed" /></td>
    <td><code>boolean</code></td>
    <td>The job status. When a job is completed, you get the job's output using Get Job Output (GET output).</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string</code></td>
    <td>The UTC time that the job request completed. While the job is in progress, the value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The UTC date when the job was created. This value is a string representation of ISO 8601 date format, for example "2012-03-20T17:03:43.221Z".</td>
</tr>
<tr>
    <td><CopyableCode code="inventory_retrieval_parameters" /></td>
    <td><code>object</code></td>
    <td>Parameters used for range inventory retrieval.</td>
</tr>
<tr>
    <td><CopyableCode code="inventory_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>For an inventory retrieval job, this value is the size in bytes of the inventory requested for download. For an archive retrieval or select job, this value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="job_description" /></td>
    <td><code>string</code></td>
    <td>The job description provided when initiating the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>An opaque string that identifies an Amazon S3 Glacier job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_output_path" /></td>
    <td><code>string</code></td>
    <td>Contains the job output location.</td>
</tr>
<tr>
    <td><CopyableCode code="output_location" /></td>
    <td><code>object</code></td>
    <td>Contains the location where the data from the select job is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_byte_range" /></td>
    <td><code>string</code></td>
    <td>The retrieved byte range for archive retrieval jobs in the form StartByteValue-EndByteValue. If no range was specified in the archive retrieval, then the whole archive is retrieved. In this case, StartByteValue equals 0 and EndByteValue equals the size of the archive minus 1. For inventory retrieval or select jobs, this field is null.</td>
</tr>
<tr>
    <td><CopyableCode code="sha256_tree_hash" /></td>
    <td><code>string</code></td>
    <td>For an archive retrieval job, this value is the checksum of the archive. Otherwise, this value is null. The SHA256 tree hash value for the requested range of an archive. If the InitiateJob request for an archive specified a tree-hash aligned range, then this field returns a value. If the whole archive is retrieved, this value is the same as the ArchiveSHA256TreeHash value. This field is null for the following: Archive retrieval jobs that specify a range that is not tree-hash aligned Archival jobs that specify a range that is equal to the whole archive, when the job status is InProgress Inventory jobs Select jobs</td>
</tr>
<tr>
    <td><CopyableCode code="sns_topic" /></td>
    <td><code>string</code></td>
    <td>An Amazon SNS topic that receives notification.</td>
</tr>
<tr>
    <td><CopyableCode code="select_parameters" /></td>
    <td><code>object</code></td>
    <td>Contains the parameters used for a select.</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The status code can be InProgress, Succeeded, or Failed, and indicates the status of the job. (InProgress, Succeeded, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A friendly message that describes the job status.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The tier to use for a select or an archive retrieval. Valid values are Expedited, Standard, or Bulk. Standard is the default.</td>
</tr>
<tr>
    <td><CopyableCode code="vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vault from which an archive retrieval was requested.</td>
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
    <td><a href="#describe_job"><CopyableCode code="describe_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon Glacier (Glacier) completes the job. For more information about initiating a job, see InitiateJob. This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Glacier can notify the topic after it completes the job. A job ID will not expire for at least 24 hours after Glacier completes the job. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For more information about using this operation, see the documentation for the underlying REST API Describe Job in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-statuscode"><code>statuscode</code></a>, <a href="#parameter-completed"><code>completed</code></a></td>
    <td>This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time. Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists. The List Jobs operation supports pagination. You should always check the response Marker field. If there are no more jobs to list, the Marker field is set to null. If there are more jobs to list, the Marker field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the Marker value for that job that you obtained from a previous List Jobs request. You can set a maximum limit for the number of jobs returned in the response by specifying the limit parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit. Additionally, you can filter the jobs list returned by specifying the optional statuscode parameter or completed parameter, or both. Using the statuscode parameter, you can specify to return only jobs that match either the InProgress, Succeeded, or Failed status. Using the completed parameter, you can specify to return only jobs that were completed (true) or jobs that were not completed (false). For more information about using this operation, see the documentation for the underlying REST API List Jobs.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job to describe.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vault_name">
    <td><CopyableCode code="vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vault.</td>
</tr>
<tr id="parameter-completed">
    <td><CopyableCode code="completed" /></td>
    <td><code>string</code></td>
    <td>The state of the jobs to return. You can specify true or false.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>The maximum number of jobs to be returned. The default limit is 50. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.</td>
</tr>
<tr id="parameter-statuscode">
    <td><CopyableCode code="statuscode" /></td>
    <td><code>string</code></td>
    <td>The type of job status to return. You can specify the following values: InProgress, Succeeded, or Failed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon Glacier (Glacier) completes the job. For more information about initiating a job, see InitiateJob. This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Glacier can notify the topic after it completes the job. A job ID will not expire for at least 24 hours after Glacier completes the job. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For more information about using this operation, see the documentation for the underlying REST API Describe Job in the Amazon Glacier Developer Guide.

```sql
SELECT
action,
archive_id,
archive_sha256_tree_hash,
archive_size_in_bytes,
completed,
completion_date,
creation_date,
inventory_retrieval_parameters,
inventory_size_in_bytes,
job_description,
job_id,
job_output_path,
output_location,
retrieval_byte_range,
sha256_tree_hash,
sns_topic,
select_parameters,
status_code,
status_message,
tier,
vault_arn
FROM aws.glacier.jobs
WHERE account_id = '{{ account_id }}' -- required
AND vault_name = '{{ vault_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time. Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists. The List Jobs operation supports pagination. You should always check the response Marker field. If there are no more jobs to list, the Marker field is set to null. If there are more jobs to list, the Marker field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the Marker value for that job that you obtained from a previous List Jobs request. You can set a maximum limit for the number of jobs returned in the response by specifying the limit parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit. Additionally, you can filter the jobs list returned by specifying the optional statuscode parameter or completed parameter, or both. Using the statuscode parameter, you can specify to return only jobs that match either the InProgress, Succeeded, or Failed status. Using the completed parameter, you can specify to return only jobs that were completed (true) or jobs that were not completed (false). For more information about using this operation, see the documentation for the underlying REST API List Jobs.

```sql
SELECT
action,
archive_id,
archive_sha256_tree_hash,
archive_size_in_bytes,
completed,
completion_date,
creation_date,
inventory_retrieval_parameters,
inventory_size_in_bytes,
job_description,
job_id,
job_output_path,
output_location,
retrieval_byte_range,
sha256_tree_hash,
sns_topic,
select_parameters,
status_code,
status_message,
tier,
vault_arn
FROM aws.glacier.jobs
WHERE account_id = '{{ account_id }}' -- required
AND vault_name = '{{ vault_name }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
AND statuscode = '{{ statuscode }}'
AND completed = '{{ completed }}'
;
```
</TabItem>
</Tabs>
