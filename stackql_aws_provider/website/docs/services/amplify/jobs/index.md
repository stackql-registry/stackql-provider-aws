--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - amplify
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.jobs" /></td></tr>
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
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>The execution steps for an execution job, for an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>Describes the summary for an execution job for an Amplify app.</td>
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
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The commit ID from a third-party repository provider for the job. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="commit_message" /></td>
    <td><code>string</code></td>
    <td>The commit message from a third-party repository provider for the job. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="commit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The commit date and time for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date and time for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the job. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The type for the job. If the value is RELEASE, the job was manually released from its source by using the StartJob API. This value is available only for apps that are connected to a repository. If the value is RETRY, the job was manually retried using the StartJob API. If the value is WEB_HOOK, the job was automatically triggered by webhooks. If the value is MANUAL, the job is for a manually deployed app. Manually deployed apps are not connected to a Git repository. (RELEASE, RETRY, MANUAL, WEB_HOOK)</td>
</tr>
<tr>
    <td><CopyableCode code="source_url" /></td>
    <td><code>string</code></td>
    <td>The source URL for the files to deploy. The source URL can be either an HTTP GET URL that is publicly accessible and downloads a single .zip file, or an Amazon S3 bucket and prefix. (pattern: &lt;code&gt;^(s3|https|http):​//.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_url_type" /></td>
    <td><code>string</code></td>
    <td>The type of source specified by the sourceURL. If the value is ZIP, the source is a .zip file. If the value is BUCKET_PREFIX, the source is an Amazon S3 bucket and prefix. If no value is specified, the default is ZIP. (ZIP, BUCKET_PREFIX)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date and time for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status for the job. (CREATED, PENDING, PROVISIONING, RUNNING, FAILED, SUCCEED, CANCELLING, CANCELLED)</td>
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
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a job for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the jobs for a branch of an Amplify app.</td>
</tr>
<tr>
    <td><a href="#delete_job"><CopyableCode code="delete_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-branch_name"><code>branch_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a job for a branch of an Amplify app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an Amplify app.</td>
</tr>
<tr id="parameter-branch_name">
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name of the branch to use for the job.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps.</td>
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

Returns a job for a branch of an Amplify app.

```sql
SELECT
steps,
summary
FROM aws.amplify.jobs
WHERE app_id = '{{ app_id }}' -- required
AND branch_name = '{{ branch_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Lists the jobs for a branch of an Amplify app.

```sql
SELECT
commit_id,
commit_message,
commit_time,
end_time,
job_arn,
job_id,
job_type,
source_url,
source_url_type,
start_time,
status
FROM aws.amplify.jobs
WHERE app_id = '{{ app_id }}' -- required
AND branch_name = '{{ branch_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job"
    values={[
        { label: 'delete_job', value: 'delete_job' }
    ]}
>
<TabItem value="delete_job">

Deletes a job for a branch of an Amplify app.

```sql
DELETE FROM aws.amplify.jobs
WHERE app_id = '{{ app_id }}' --required
AND branch_name = '{{ branch_name }}' --required
AND job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
