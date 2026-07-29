--- 
title: data_deletion_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_deletion_jobs
  - personalize
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

Creates, updates, deletes, gets or lists a <code>data_deletion_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_deletion_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.data_deletion_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_deletion_job"
    values={[
        { label: 'describe_data_deletion_job', value: 'describe_data_deletion_job' },
        { label: 'list_data_deletion_jobs', value: 'list_data_deletion_jobs' }
    ]}
>
<TabItem value="describe_data_deletion_job">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time (in Unix time) of the data deletion job.</td>
</tr>
<tr>
    <td><CopyableCode code="data_deletion_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data deletion job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>object</code></td>
    <td>Describes the data source that contains the data to upload to a dataset, or the list of records to delete from Amazon Personalize.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group the job deletes records from. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If a data deletion job fails, provides the reason why.</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data deletion job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) the data deletion job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="num_deleted" /></td>
    <td><code>integer</code></td>
    <td>The number of records deleted by a COMPLETED job.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data deletion job. A data deletion job can have one of the following statuses: PENDING &gt; IN_PROGRESS &gt; COMPLETED -or- FAILED</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_deletion_jobs">

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
    <td><CopyableCode code="data_deletion_jobs" /></td>
    <td><code>array</code></td>
    <td>The list of data deletion jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token for getting the next set of data deletion jobs (if they exist). (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,1500&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_data_deletion_job"><CopyableCode code="describe_data_deletion_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the data deletion job created by CreateDataDeletionJob, including the job status.</td>
</tr>
<tr>
    <td><a href="#list_data_deletion_jobs"><CopyableCode code="list_data_deletion_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of data deletion jobs for a dataset group ordered by creation time, with the most recent first. When a dataset group is not specified, all the data deletion jobs associated with the account are listed. The response provides the properties for each job, including the Amazon Resource Name (ARN). For more information on data deletion jobs, see Deleting users.</td>
</tr>
<tr>
    <td><a href="#create_data_deletion_job"><CopyableCode code="create_data_deletion_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a>, <a href="#parameter-dataSource"><code>dataSource</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a batch job that deletes all references to specific users from an Amazon Personalize dataset group in batches. You specify the users to delete in a CSV file of userIds in an Amazon S3 bucket. After a job completes, Amazon Personalize no longer trains on the users’ data and no longer considers the users when generating user segments. For more information about creating a data deletion job, see Deleting users. Your input file must be a CSV file with a single USER_ID column that lists the users IDs. For more information about preparing the CSV file, see Preparing your data deletion file and uploading it to Amazon S3. To give Amazon Personalize permission to access your input CSV file of userIds, you must specify an IAM service role that has permission to read from the data source. This role needs GetObject and ListBucket permissions for the bucket and its content. These permissions are the same as importing data. For information on granting access to your Amazon S3 bucket, see Giving Amazon Personalize Access to Amazon S3 Resources. After you create a job, it can take up to a day to delete all references to the users from datasets and models. Until the job completes, Amazon Personalize continues to use the data when training. And if you use a User Segmentation recipe, the users might appear in user segments. Status A data deletion job can have one of the following statuses: PENDING &gt; IN_PROGRESS &gt; COMPLETED -or- FAILED To get the status of the data deletion job, call DescribeDataDeletionJob API operation and specify the Amazon Resource Name (ARN) of the job. If the status is FAILED, the response includes a failureReason key, which describes why the job failed. Related APIs ListDataDeletionJobs DescribeDataDeletionJob</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_deletion_job"
    values={[
        { label: 'describe_data_deletion_job', value: 'describe_data_deletion_job' },
        { label: 'list_data_deletion_jobs', value: 'list_data_deletion_jobs' }
    ]}
>
<TabItem value="describe_data_deletion_job">

Describes the data deletion job created by CreateDataDeletionJob, including the job status.

```sql
SELECT
creation_date_time,
data_deletion_job_arn,
data_source,
dataset_group_arn,
failure_reason,
job_name,
last_updated_date_time,
num_deleted,
role_arn,
status
FROM aws.personalize.data_deletion_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_deletion_jobs">

Returns a list of data deletion jobs for a dataset group ordered by creation time, with the most recent first. When a dataset group is not specified, all the data deletion jobs associated with the account are listed. The response provides the properties for each job, including the Amazon Resource Name (ARN). For more information on data deletion jobs, see Deleting users.

```sql
SELECT
data_deletion_jobs,
next_token
FROM aws.personalize.data_deletion_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_deletion_job"
    values={[
        { label: 'create_data_deletion_job', value: 'create_data_deletion_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_deletion_job">

Creates a batch job that deletes all references to specific users from an Amazon Personalize dataset group in batches. You specify the users to delete in a CSV file of userIds in an Amazon S3 bucket. After a job completes, Amazon Personalize no longer trains on the users’ data and no longer considers the users when generating user segments. For more information about creating a data deletion job, see Deleting users. Your input file must be a CSV file with a single USER_ID column that lists the users IDs. For more information about preparing the CSV file, see Preparing your data deletion file and uploading it to Amazon S3. To give Amazon Personalize permission to access your input CSV file of userIds, you must specify an IAM service role that has permission to read from the data source. This role needs GetObject and ListBucket permissions for the bucket and its content. These permissions are the same as importing data. For information on granting access to your Amazon S3 bucket, see Giving Amazon Personalize Access to Amazon S3 Resources. After you create a job, it can take up to a day to delete all references to the users from datasets and models. Until the job completes, Amazon Personalize continues to use the data when training. And if you use a User Segmentation recipe, the users might appear in user segments. Status A data deletion job can have one of the following statuses: PENDING &gt; IN_PROGRESS &gt; COMPLETED -or- FAILED To get the status of the data deletion job, call DescribeDataDeletionJob API operation and specify the Amazon Resource Name (ARN) of the job. If the status is FAILED, the response includes a failureReason key, which describes why the job failed. Related APIs ListDataDeletionJobs DescribeDataDeletionJob

```sql
INSERT INTO aws.personalize.data_deletion_jobs (
jobName,
datasetGroupArn,
dataSource,
roleArn,
tags,
region
)
SELECT 
'{{ jobName }}' /* required */,
'{{ datasetGroupArn }}' /* required */,
'{{ dataSource }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
data_deletion_job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_deletion_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_deletion_jobs resource.
    - name: jobName
      value: "{{ jobName }}"
      description: |
        The name for the data deletion job.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of the dataset group that has the datasets you want to delete records from.
    - name: dataSource
      description: |
        The Amazon S3 bucket that contains the list of userIds of the users to delete.
      value:
        dataLocation: "{{ dataLocation }}"
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source.
    - name: tags
      description: |
        A list of tags to apply to the data deletion job.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>
