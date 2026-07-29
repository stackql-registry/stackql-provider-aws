--- 
title: user_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - user_import_jobs
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>user_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_import_job"
    values={[
        { label: 'describe_user_import_job', value: 'describe_user_import_job' },
        { label: 'list_user_import_jobs', value: 'list_user_import_jobs' }
    ]}
>
<TabItem value="describe_user_import_job">

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
    <td><CopyableCode code="cloud_watch_logs_role_arn" /></td>
    <td><code>string</code></td>
    <td>The role Amazon Resource Name (ARN) for the Amazon CloudWatch Logging role for the user import job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer Guide. (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:&#91;\w+=/,.@-&#93;+:(&#91;\w+=/,.@-&#93;*)?:&#91;0-9&#93;+:&#91;\w+=/,.@-&#93;+(:&#91;\w+=/,.@-&#93;+)?(:&#91;\w+=/,.@-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the user import job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_message" /></td>
    <td><code>string</code></td>
    <td>The message returned when the user import job is completed. (pattern: &lt;code&gt;&#91;\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_users" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of users that couldn't be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="imported_users" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of users that were successfully imported.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user import job. (pattern: &lt;code&gt;import-&#91;0-9a-zA-Z-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the user import job. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pre_signed_url" /></td>
    <td><code>string</code></td>
    <td>The pre-signed URL target for uploading the CSV file.</td>
</tr>
<tr>
    <td><CopyableCode code="skipped_users" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of users that were skipped.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the user import job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the user import job. One of the following: Created - The job was created but not started. Pending - A transition state. You have started the job, but it has not begun importing users yet. InProgress - The job has started, and users are being imported. Stopping - You have stopped the job, but the job has not stopped importing users yet. Stopped - You have stopped the job, and the job has stopped importing users. Succeeded - The job has completed successfully. Failed - The job has stopped due to an error. Expired - You created a job, but did not start the job within 24-48 hours. All data associated with the job was deleted, and the job can't be started. (Created, Pending, InProgress, Stopping, Expired, Stopped, Failed, Succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool that the users are being imported into. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_import_jobs">

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
    <td><CopyableCode code="pagination_token" /></td>
    <td><code>string</code></td>
    <td>The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_import_jobs" /></td>
    <td><code>array</code></td>
    <td>An array of user import jobs from the requested user pool. For each, the response includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.</td>
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
    <td><a href="#describe_user_import_job"><CopyableCode code="describe_user_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a user import job. For more information about user CSV import, see Importing users from a CSV file.</td>
</tr>
<tr>
    <td><a href="#list_user_import_jobs"><CopyableCode code="list_user_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns user import jobs and their details. Import jobs are retained in user pool configuration so that you can stage, stop, start, review, and delete them. For more information about user import, see Importing users from a CSV file. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_user_import_job"><CopyableCode code="create_user_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobName"><code>JobName</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-CloudWatchLogsRoleArn"><code>CloudWatchLogsRoleArn</code></a></td>
    <td></td>
    <td>Creates a user import job. You can import users into user pools from a comma-separated values (CSV) file without adding Amazon Cognito MAU costs to your Amazon Web Services bill. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="describe_user_import_job"
    values={[
        { label: 'describe_user_import_job', value: 'describe_user_import_job' },
        { label: 'list_user_import_jobs', value: 'list_user_import_jobs' }
    ]}
>
<TabItem value="describe_user_import_job">

Describes a user import job. For more information about user CSV import, see Importing users from a CSV file.

```sql
SELECT
cloud_watch_logs_role_arn,
completion_date,
completion_message,
creation_date,
failed_users,
imported_users,
job_id,
job_name,
pre_signed_url,
skipped_users,
start_date,
status,
user_pool_id
FROM aws.cognito_idp.user_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_import_jobs">

Given a user pool ID, returns user import jobs and their details. Import jobs are retained in user pool configuration so that you can stage, stop, start, review, and delete them. For more information about user import, see Importing users from a CSV file. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
pagination_token,
user_import_jobs
FROM aws.cognito_idp.user_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_import_job"
    values={[
        { label: 'create_user_import_job', value: 'create_user_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_import_job">

Creates a user import job. You can import users into user pools from a comma-separated values (CSV) file without adding Amazon Cognito MAU costs to your Amazon Web Services bill. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.user_import_jobs (
JobName,
UserPoolId,
CloudWatchLogsRoleArn,
region
)
SELECT 
'{{ JobName }}' /* required */,
'{{ UserPoolId }}' /* required */,
'{{ CloudWatchLogsRoleArn }}' /* required */,
'{{ region }}'
RETURNING
user_import_job
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_import_jobs resource.
    - name: JobName
      value: "{{ JobName }}"
      description: |
        A friendly name for the user import job.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool that you want to import users into.
    - name: CloudWatchLogsRoleArn
      value: "{{ CloudWatchLogsRoleArn }}"
      description: |
        You must specify an IAM role that has permission to log import-job results to Amazon CloudWatch Logs. This parameter is the ARN of that role.
`}</CodeBlock>

</TabItem>
</Tabs>
